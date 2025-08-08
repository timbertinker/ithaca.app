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
      (e._sentryDebugIds[t] = "2775684f-1462-4994-bfaf-7c563fe513b1"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2775684f-1462-4994-bfaf-7c563fe513b1"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5811],
    {
      4270: function (e, t, r) {
        "use strict";
        var n =
            (this && this.__rest) ||
            function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  0 > t.indexOf(n) &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var s = 0, n = Object.getOwnPropertySymbols(e);
                  s < n.length;
                  s++
                )
                  0 > t.indexOf(n[s]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
                    (r[n[s]] = e[n[s]]);
              return r;
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CoinbaseWalletProvider = void 0);
        let i = s(r(26729)),
          a = r(37185),
          o = r(70011),
          c = r(53513),
          l = r(29695),
          d = r(23868),
          u = r(74996),
          h = r(58634),
          p = r(33838),
          g = r(77145);
        class f extends i.default {
          constructor(e) {
            var t,
              r,
              { metadata: s } = e,
              i = e.preference,
              { keysUrl: o } = i,
              p = n(i, ["keysUrl"]);
            super(),
              (this.accounts = []),
              (this.handlers = {
                handshake: async (e) => {
                  try {
                    if (this.connected)
                      return (
                        this.emit("connect", {
                          chainId: (0, l.hexStringFromIntNumber)(
                            (0, c.IntNumber)(this.chain.id)
                          ),
                        }),
                        this.accounts
                      );
                    let e = await this.requestSignerSelection(),
                      t = this.initSigner(e),
                      r = await t.handshake();
                    return (
                      (this.signer = t),
                      (0, d.storeSignerType)(e),
                      this.emit("connect", {
                        chainId: (0, l.hexStringFromIntNumber)(
                          (0, c.IntNumber)(this.chain.id)
                        ),
                      }),
                      r
                    );
                  } catch (e) {
                    throw (this.handleUnauthorizedError(e), e);
                  }
                },
                sign: async (e) => {
                  if (!this.connected || !this.signer)
                    throw a.standardErrors.provider.unauthorized(
                      "Must call 'eth_requestAccounts' before other methods"
                    );
                  try {
                    return await this.signer.request(e);
                  } catch (e) {
                    throw (this.handleUnauthorizedError(e), e);
                  }
                },
                fetch: (e) => (0, u.fetchRPCRequest)(e, this.chain),
                state: (e) => {
                  let t = () => {
                    if (this.connected) return this.accounts;
                    throw a.standardErrors.provider.unauthorized(
                      "Must call 'eth_requestAccounts' before other methods"
                    );
                  };
                  switch (e.method) {
                    case "eth_chainId":
                      return (0, l.hexStringFromIntNumber)(
                        (0, c.IntNumber)(this.chain.id)
                      );
                    case "net_version":
                      return this.chain.id;
                    case "eth_accounts":
                      return t();
                    case "eth_coinbase":
                      return t()[0];
                    default:
                      return this.handlers.unsupported(e);
                  }
                },
                deprecated: ({ method: e }) => {
                  throw a.standardErrors.rpc.methodNotSupported(
                    `Method ${e} is deprecated.`
                  );
                },
                unsupported: ({ method: e }) => {
                  throw a.standardErrors.rpc.methodNotSupported(
                    `Method ${e} is not supported.`
                  );
                },
              }),
              (this.isCoinbaseWallet = !0),
              (this.updateListener = {
                onAccountsUpdate: ({ accounts: e, source: t }) => {
                  (0, l.areAddressArraysEqual)(this.accounts, e) ||
                    ((this.accounts = e),
                    "storage" !== t &&
                      this.emit("accountsChanged", this.accounts));
                },
                onChainUpdate: ({ chain: e, source: t }) => {
                  (e.id !== this.chain.id || e.rpcUrl !== this.chain.rpcUrl) &&
                    ((this.chain = e),
                    "storage" !== t &&
                      this.emit(
                        "chainChanged",
                        (0, l.hexStringFromIntNumber)((0, c.IntNumber)(e.id))
                      ));
                },
              }),
              (this.metadata = s),
              (this.preference = p),
              (this.communicator = new h.Communicator(o)),
              (this.chain = {
                id:
                  null !==
                    (r =
                      null === (t = s.appChainIds) || void 0 === t
                        ? void 0
                        : t[0]) && void 0 !== r
                    ? r
                    : 1,
              });
            let g = (0, d.loadSignerType)();
            this.signer = g ? this.initSigner(g) : null;
          }
          get connected() {
            return this.accounts.length > 0;
          }
          async request(e) {
            var t;
            try {
              let r = (0, u.checkErrorForInvalidRequestArgs)(e);
              if (r) throw r;
              let n =
                null !== (t = (0, p.determineMethodCategory)(e.method)) &&
                void 0 !== t
                  ? t
                  : "fetch";
              return this.handlers[n](e);
            } catch (t) {
              return Promise.reject((0, o.serializeError)(t, e.method));
            }
          }
          handleUnauthorizedError(e) {
            e.code === a.standardErrorCodes.provider.unauthorized &&
              this.disconnect();
          }
          async enable() {
            return (
              console.warn(
                '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
              ),
              await this.request({ method: "eth_requestAccounts" })
            );
          }
          async disconnect() {
            (this.accounts = []),
              (this.chain = { id: 1 }),
              g.ScopedLocalStorage.clearAll(),
              this.emit(
                "disconnect",
                a.standardErrors.provider.disconnected(
                  "User initiated disconnection"
                )
              );
          }
          requestSignerSelection() {
            return (0, d.fetchSignerType)({
              communicator: this.communicator,
              preference: this.preference,
              metadata: this.metadata,
            });
          }
          initSigner(e) {
            return (0, d.createSigner)({
              signerType: e,
              metadata: this.metadata,
              communicator: this.communicator,
              updateListener: this.updateListener,
            });
          }
        }
        t.CoinbaseWalletProvider = f;
      },
      39016: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CoinbaseWalletSDK = void 0);
        let n = r(52719),
          s = r(4270),
          i = r(77145),
          a = r(43604),
          o = r(29695),
          c = r(74996);
        class l {
          constructor(e) {
            (this.metadata = {
              appName: e.appName || "Dapp",
              appLogoUrl: e.appLogoUrl || (0, o.getFavicon)(),
              appChainIds: e.appChainIds || [],
            }),
              this.storeLatestVersion();
          }
          makeWeb3Provider(e = { options: "all" }) {
            var t;
            let r = { metadata: this.metadata, preference: e };
            return null !== (t = (0, c.getCoinbaseInjectedProvider)(r)) &&
              void 0 !== t
              ? t
              : new s.CoinbaseWalletProvider(r);
          }
          getCoinbaseWalletLogo(e, t = 240) {
            return (0, n.walletLogo)(e, t);
          }
          storeLatestVersion() {
            new i.ScopedLocalStorage("CBWSDK").setItem(
              "VERSION",
              a.LIB_VERSION
            );
          }
        }
        t.CoinbaseWalletSDK = l;
      },
      52719: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.walletLogo = void 0),
          (t.walletLogo = (e, t) => {
            let r;
            switch (e) {
              case "standard":
              default:
                return (
                  (r = t),
                  `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
                );
              case "circle":
                return (
                  (r = t),
                  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
                );
              case "text":
                return (
                  (r = (0.1 * t).toFixed(2)),
                  `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
                );
              case "textWithLogo":
                return (
                  (r = (0.25 * t).toFixed(2)),
                  `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
                );
              case "textLight":
                return (
                  (r = (0.1 * t).toFixed(2)),
                  `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
                );
              case "textWithLogoLight":
                return (
                  (r = (0.25 * t).toFixed(2)),
                  `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
                );
            }
          });
      },
      58634: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Communicator = void 0);
        let n = r(43604),
          s = r(83475),
          i = r(96415),
          a = r(37185);
        class o {
          constructor(e = i.CB_KEYS_URL) {
            (this.popup = null),
              (this.listeners = new Map()),
              (this.postMessage = async (e) => {
                (await this.waitForPopupLoaded()).postMessage(
                  e,
                  this.url.origin
                );
              }),
              (this.postRequestAndWaitForResponse = async (e) => {
                let t = this.onMessage(({ requestId: t }) => t === e.id);
                return this.postMessage(e), await t;
              }),
              (this.onMessage = async (e) =>
                new Promise((t, r) => {
                  let n = (r) => {
                    if (r.origin !== this.url.origin) return;
                    let s = r.data;
                    e(s) &&
                      (t(s),
                      window.removeEventListener("message", n),
                      this.listeners.delete(n));
                  };
                  window.addEventListener("message", n),
                    this.listeners.set(n, { reject: r });
                })),
              (this.disconnect = () => {
                (0, s.closePopup)(this.popup),
                  (this.popup = null),
                  this.listeners.forEach(({ reject: e }, t) => {
                    e(
                      a.standardErrors.provider.userRejectedRequest(
                        "Request rejected"
                      )
                    ),
                      window.removeEventListener("message", t);
                  }),
                  this.listeners.clear();
              }),
              (this.waitForPopupLoaded = async () =>
                this.popup && !this.popup.closed
                  ? (this.popup.focus(), this.popup)
                  : ((this.popup = (0, s.openPopup)(this.url)),
                    this.onMessage(({ event: e }) => "PopupUnload" === e)
                      .then(this.disconnect)
                      .catch(() => {}),
                    this.onMessage(({ event: e }) => "PopupLoaded" === e)
                      .then((e) => {
                        this.postMessage({
                          requestId: e.id,
                          data: { version: n.LIB_VERSION },
                        });
                      })
                      .then(() => {
                        if (!this.popup) throw a.standardErrors.rpc.internal();
                        return this.popup;
                      }))),
              (this.url = new URL(e));
          }
        }
        t.Communicator = o;
      },
      83475: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.closePopup = t.openPopup = void 0);
        let n = r(37185);
        (t.openPopup = function (e) {
          let t = (window.innerWidth - 420) / 2 + window.screenX,
            r = (window.innerHeight - 540) / 2 + window.screenY,
            s = window.open(
              e,
              "Smart Wallet",
              `width=420, height=540, left=${t}, top=${r}`
            );
          if ((null == s || s.focus(), !s))
            throw n.standardErrors.rpc.internal("Pop up window failed to open");
          return s;
        }),
          (t.closePopup = function (e) {
            e && !e.closed && e.close();
          });
      },
      96415: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CBW_MOBILE_DEEPLINK_URL =
            t.WALLETLINK_URL =
            t.CB_KEYS_URL =
              void 0),
          (t.CB_KEYS_URL = "https://keys.coinbase.com/connect"),
          (t.WALLETLINK_URL = "https://www.walletlink.org"),
          (t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink");
      },
      76079: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.errorValues = t.standardErrorCodes = void 0),
          (t.standardErrorCodes = {
            rpc: {
              invalidInput: -32e3,
              resourceNotFound: -32001,
              resourceUnavailable: -32002,
              transactionRejected: -32003,
              methodNotSupported: -32004,
              limitExceeded: -32005,
              parse: -32700,
              invalidRequest: -32600,
              methodNotFound: -32601,
              invalidParams: -32602,
              internal: -32603,
            },
            provider: {
              userRejectedRequest: 4001,
              unauthorized: 4100,
              unsupportedMethod: 4200,
              disconnected: 4900,
              chainDisconnected: 4901,
              unsupportedChain: 4902,
            },
          }),
          (t.errorValues = {
            "-32700": {
              standard: "JSON RPC 2.0",
              message:
                "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
            },
            "-32600": {
              standard: "JSON RPC 2.0",
              message: "The JSON sent is not a valid Request object.",
            },
            "-32601": {
              standard: "JSON RPC 2.0",
              message: "The method does not exist / is not available.",
            },
            "-32602": {
              standard: "JSON RPC 2.0",
              message: "Invalid method parameter(s).",
            },
            "-32603": {
              standard: "JSON RPC 2.0",
              message: "Internal JSON-RPC error.",
            },
            "-32000": { standard: "EIP-1474", message: "Invalid input." },
            "-32001": { standard: "EIP-1474", message: "Resource not found." },
            "-32002": {
              standard: "EIP-1474",
              message: "Resource unavailable.",
            },
            "-32003": {
              standard: "EIP-1474",
              message: "Transaction rejected.",
            },
            "-32004": {
              standard: "EIP-1474",
              message: "Method not supported.",
            },
            "-32005": {
              standard: "EIP-1474",
              message: "Request limit exceeded.",
            },
            4001: {
              standard: "EIP-1193",
              message: "User rejected the request.",
            },
            4100: {
              standard: "EIP-1193",
              message:
                "The requested account and/or method has not been authorized by the user.",
            },
            4200: {
              standard: "EIP-1193",
              message:
                "The requested method is not supported by this Ethereum provider.",
            },
            4900: {
              standard: "EIP-1193",
              message: "The provider is disconnected from all chains.",
            },
            4901: {
              standard: "EIP-1193",
              message: "The provider is disconnected from the specified chain.",
            },
            4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
          });
      },
      99322: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.standardErrors = void 0);
        let n = r(76079),
          s = r(10761);
        function i(e, t) {
          let [r, n] = o(t);
          return new c(e, r || (0, s.getMessageFromCode)(e), n);
        }
        function a(e, t) {
          let [r, n] = o(t);
          return new l(e, r || (0, s.getMessageFromCode)(e), n);
        }
        function o(e) {
          if (e) {
            if ("string" == typeof e) return [e];
            if ("object" == typeof e && !Array.isArray(e)) {
              let { message: t, data: r } = e;
              if (t && "string" != typeof t)
                throw Error("Must specify string message.");
              return [t || void 0, r];
            }
          }
          return [];
        }
        t.standardErrors = {
          rpc: {
            parse: (e) => i(n.standardErrorCodes.rpc.parse, e),
            invalidRequest: (e) =>
              i(n.standardErrorCodes.rpc.invalidRequest, e),
            invalidParams: (e) => i(n.standardErrorCodes.rpc.invalidParams, e),
            methodNotFound: (e) =>
              i(n.standardErrorCodes.rpc.methodNotFound, e),
            internal: (e) => i(n.standardErrorCodes.rpc.internal, e),
            server: (e) => {
              if (!e || "object" != typeof e || Array.isArray(e))
                throw Error(
                  "Ethereum RPC Server errors must provide single object argument."
                );
              let { code: t } = e;
              if (!Number.isInteger(t) || t > -32005 || t < -32099)
                throw Error(
                  '"code" must be an integer such that: -32099 <= code <= -32005'
                );
              return i(t, e);
            },
            invalidInput: (e) => i(n.standardErrorCodes.rpc.invalidInput, e),
            resourceNotFound: (e) =>
              i(n.standardErrorCodes.rpc.resourceNotFound, e),
            resourceUnavailable: (e) =>
              i(n.standardErrorCodes.rpc.resourceUnavailable, e),
            transactionRejected: (e) =>
              i(n.standardErrorCodes.rpc.transactionRejected, e),
            methodNotSupported: (e) =>
              i(n.standardErrorCodes.rpc.methodNotSupported, e),
            limitExceeded: (e) => i(n.standardErrorCodes.rpc.limitExceeded, e),
          },
          provider: {
            userRejectedRequest: (e) =>
              a(n.standardErrorCodes.provider.userRejectedRequest, e),
            unauthorized: (e) =>
              a(n.standardErrorCodes.provider.unauthorized, e),
            unsupportedMethod: (e) =>
              a(n.standardErrorCodes.provider.unsupportedMethod, e),
            disconnected: (e) =>
              a(n.standardErrorCodes.provider.disconnected, e),
            chainDisconnected: (e) =>
              a(n.standardErrorCodes.provider.chainDisconnected, e),
            unsupportedChain: (e) =>
              a(n.standardErrorCodes.provider.unsupportedChain, e),
            custom: (e) => {
              if (!e || "object" != typeof e || Array.isArray(e))
                throw Error(
                  "Ethereum Provider custom errors must provide single object argument."
                );
              let { code: t, message: r, data: n } = e;
              if (!r || "string" != typeof r)
                throw Error('"message" must be a nonempty string');
              return new l(t, r, n);
            },
          },
        };
        class c extends Error {
          constructor(e, t, r) {
            if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
            if (!t || "string" != typeof t)
              throw Error('"message" must be a nonempty string.');
            super(t), (this.code = e), void 0 !== r && (this.data = r);
          }
        }
        class l extends c {
          constructor(e, t, r) {
            if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
              throw Error(
                '"code" must be an integer such that: 1000 <= code <= 4999'
              );
            super(e, t, r);
          }
        }
      },
      37185: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.standardErrors = t.standardErrorCodes = void 0);
        var n = r(76079);
        Object.defineProperty(t, "standardErrorCodes", {
          enumerable: !0,
          get: function () {
            return n.standardErrorCodes;
          },
        });
        var s = r(99322);
        Object.defineProperty(t, "standardErrors", {
          enumerable: !0,
          get: function () {
            return s.standardErrors;
          },
        });
      },
      70011: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.serializeError = void 0);
        let n = r(49055),
          s = r(43604),
          i = r(76079),
          a = r(10761);
        t.serializeError = function (e, t) {
          let r = (0, a.serialize)(
              "string" == typeof e
                ? { message: e, code: i.standardErrorCodes.rpc.internal }
                : (0, n.isErrorResponse)(e)
                ? Object.assign(Object.assign({}, e), {
                    message: e.errorMessage,
                    code: e.errorCode,
                    data: { method: e.method },
                  })
                : e,
              { shouldIncludeStack: !0 }
            ),
            o = new URL(
              "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
            );
          o.searchParams.set("version", s.LIB_VERSION),
            o.searchParams.set("code", r.code.toString());
          let c = (function (e, t) {
            let r = null == e ? void 0 : e.method;
            if (r) return r;
            if (void 0 === t);
            else if ("string" == typeof t) return t;
            else if (!Array.isArray(t)) return t.method;
            else if (t.length > 0) return t[0].method;
          })(r.data, t);
          return (
            c && o.searchParams.set("method", c),
            o.searchParams.set("message", r.message),
            Object.assign(Object.assign({}, r), { docUrl: o.href })
          );
        };
      },
      10761: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.serialize =
            t.getErrorCode =
            t.isValidCode =
            t.getMessageFromCode =
            t.JSON_RPC_SERVER_ERROR_MESSAGE =
              void 0);
        let n = r(76079),
          s = "Unspecified error message.";
        function i(e, r = s) {
          if (e && Number.isInteger(e)) {
            let r = e.toString();
            if (c(n.errorValues, r)) return n.errorValues[r].message;
            if (e >= -32099 && e <= -32e3)
              return t.JSON_RPC_SERVER_ERROR_MESSAGE;
          }
          return r;
        }
        function a(e) {
          if (!Number.isInteger(e)) return !1;
          let t = e.toString();
          return !!(n.errorValues[t] || (e >= -32099 && e <= -32e3));
        }
        function o(e) {
          return e && "object" == typeof e && !Array.isArray(e)
            ? Object.assign({}, e)
            : e;
        }
        function c(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function l(e, t) {
          return (
            "object" == typeof e &&
            null !== e &&
            t in e &&
            "string" == typeof e[t]
          );
        }
        (t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
          (t.getMessageFromCode = i),
          (t.isValidCode = a),
          (t.getErrorCode = function (e) {
            var t;
            return "number" == typeof e
              ? e
              : "object" == typeof e &&
                null !== e &&
                ("number" == typeof e.code || "number" == typeof e.errorCode)
              ? null !== (t = e.code) && void 0 !== t
                ? t
                : e.errorCode
              : void 0;
          }),
          (t.serialize = function (e, { shouldIncludeStack: t = !1 } = {}) {
            let r = {};
            return (
              e &&
              "object" == typeof e &&
              !Array.isArray(e) &&
              c(e, "code") &&
              a(e.code)
                ? ((r.code = e.code),
                  e.message && "string" == typeof e.message
                    ? ((r.message = e.message),
                      c(e, "data") && (r.data = e.data))
                    : ((r.message = i(r.code)),
                      (r.data = { originalError: o(e) })))
                : ((r.code = n.standardErrorCodes.rpc.internal),
                  (r.message = l(e, "message") ? e.message : s),
                  (r.data = { originalError: o(e) })),
              t && (r.stack = l(e, "stack") ? e.stack : void 0),
              r
            );
          });
      },
      33838: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.determineMethodCategory = void 0);
        let r = {
          handshake: ["eth_requestAccounts"],
          sign: [
            "eth_ecRecover",
            "personal_sign",
            "personal_ecRecover",
            "eth_signTransaction",
            "eth_sendTransaction",
            "eth_signTypedData_v1",
            "eth_signTypedData_v3",
            "eth_signTypedData_v4",
            "eth_signTypedData",
            "wallet_addEthereumChain",
            "wallet_switchEthereumChain",
            "wallet_watchAsset",
            "wallet_getCapabilities",
            "wallet_sendCalls",
            "wallet_showCallsStatus",
          ],
          state: ["eth_chainId", "eth_accounts", "eth_coinbase", "net_version"],
          deprecated: ["eth_sign", "eth_signTypedData_v2"],
          unsupported: ["eth_subscribe", "eth_unsubscribe"],
          fetch: [],
        };
        t.determineMethodCategory = function (e) {
          for (let t in r) if (r[t].includes(e)) return t;
        };
      },
      53513: function (e, t) {
        "use strict";
        function r() {
          return (e) => e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RegExpString =
            t.IntNumber =
            t.BigIntString =
            t.AddressString =
            t.HexString =
            t.OpaqueType =
              void 0),
          (t.OpaqueType = r),
          (t.HexString = r()),
          (t.AddressString = r()),
          (t.BigIntString = r()),
          (t.IntNumber = function (e) {
            return Math.floor(e);
          }),
          (t.RegExpString = r());
      },
      29695: function (e, t, r) {
        "use strict";
        var n = r(48764).Buffer;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.areAddressArraysEqual =
            t.getFavicon =
            t.range =
            t.isBigNumber =
            t.ensureParsedJSONObject =
            t.ensureBigInt =
            t.ensureRegExpString =
            t.ensureIntNumber =
            t.ensureBuffer =
            t.ensureAddressString =
            t.ensureEvenLengthHexString =
            t.ensureHexString =
            t.isHexString =
            t.prepend0x =
            t.strip0x =
            t.has0xPrefix =
            t.hexStringFromIntNumber =
            t.intNumberFromHexString =
            t.bigIntStringFromBigInt =
            t.hexStringFromBuffer =
            t.hexStringToUint8Array =
            t.uint8ArrayToHex =
            t.randomBytesHex =
              void 0);
        let s = r(37185),
          i = r(53513),
          a = /^[0-9]*$/,
          o = /^[a-f0-9]*$/;
        function c(e) {
          return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
        }
        function l(e) {
          return e.startsWith("0x") || e.startsWith("0X");
        }
        function d(e) {
          return l(e) ? e.slice(2) : e;
        }
        function u(e) {
          return l(e) ? `0x${e.slice(2)}` : `0x${e}`;
        }
        function h(e) {
          if ("string" != typeof e) return !1;
          let t = d(e).toLowerCase();
          return o.test(t);
        }
        function p(e, t = !1) {
          if ("string" == typeof e) {
            let r = d(e).toLowerCase();
            if (o.test(r)) return (0, i.HexString)(t ? `0x${r}` : r);
          }
          throw s.standardErrors.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        }
        function g(e, t = !1) {
          let r = p(e, !1);
          return (
            r.length % 2 == 1 && (r = (0, i.HexString)(`0${r}`)),
            t ? (0, i.HexString)(`0x${r}`) : r
          );
        }
        function f(e) {
          if ("number" == typeof e && Number.isInteger(e))
            return (0, i.IntNumber)(e);
          if ("string" == typeof e) {
            if (a.test(e)) return (0, i.IntNumber)(Number(e));
            if (h(e)) return (0, i.IntNumber)(Number(BigInt(g(e, !0))));
          }
          throw s.standardErrors.rpc.invalidParams(
            `Not an integer: ${String(e)}`
          );
        }
        function _(e) {
          if (null == e || "function" != typeof e.constructor) return !1;
          let { constructor: t } = e;
          return "function" == typeof t.config && "number" == typeof t.EUCLID;
        }
        (t.randomBytesHex = function (e) {
          return c(crypto.getRandomValues(new Uint8Array(e)));
        }),
          (t.uint8ArrayToHex = c),
          (t.hexStringToUint8Array = function (e) {
            return new Uint8Array(
              e.match(/.{1,2}/g).map((e) => parseInt(e, 16))
            );
          }),
          (t.hexStringFromBuffer = function (e, t = !1) {
            let r = e.toString("hex");
            return (0, i.HexString)(t ? `0x${r}` : r);
          }),
          (t.bigIntStringFromBigInt = function (e) {
            return (0, i.BigIntString)(e.toString(10));
          }),
          (t.intNumberFromHexString = function (e) {
            return (0, i.IntNumber)(Number(BigInt(g(e, !0))));
          }),
          (t.hexStringFromIntNumber = function (e) {
            return (0, i.HexString)(`0x${BigInt(e).toString(16)}`);
          }),
          (t.has0xPrefix = l),
          (t.strip0x = d),
          (t.prepend0x = u),
          (t.isHexString = h),
          (t.ensureHexString = p),
          (t.ensureEvenLengthHexString = g),
          (t.ensureAddressString = function (e) {
            if ("string" == typeof e) {
              let t = d(e).toLowerCase();
              if (h(t) && 40 === t.length) return (0, i.AddressString)(u(t));
            }
            throw s.standardErrors.rpc.invalidParams(
              `Invalid Ethereum address: ${String(e)}`
            );
          }),
          (t.ensureBuffer = function (e) {
            if (n.isBuffer(e)) return e;
            if ("string" == typeof e) {
              if (h(e)) {
                let t = g(e, !1);
                return n.from(t, "hex");
              }
              return n.from(e, "utf8");
            }
            throw s.standardErrors.rpc.invalidParams(
              `Not binary data: ${String(e)}`
            );
          }),
          (t.ensureIntNumber = f),
          (t.ensureRegExpString = function (e) {
            if (e instanceof RegExp) return (0, i.RegExpString)(e.toString());
            throw s.standardErrors.rpc.invalidParams(
              `Not a RegExp: ${String(e)}`
            );
          }),
          (t.ensureBigInt = function (e) {
            if (null !== e && ("bigint" == typeof e || _(e)))
              return BigInt(e.toString(10));
            if ("number" == typeof e) return BigInt(f(e));
            if ("string" == typeof e) {
              if (a.test(e)) return BigInt(e);
              if (h(e)) return BigInt(g(e, !0));
            }
            throw s.standardErrors.rpc.invalidParams(
              `Not an integer: ${String(e)}`
            );
          }),
          (t.ensureParsedJSONObject = function (e) {
            if ("string" == typeof e) return JSON.parse(e);
            if ("object" == typeof e) return e;
            throw s.standardErrors.rpc.invalidParams(
              `Not a JSON string or an object: ${String(e)}`
            );
          }),
          (t.isBigNumber = _),
          (t.range = function (e, t) {
            return Array.from({ length: t - e }, (t, r) => e + r);
          }),
          (t.getFavicon = function () {
            let e =
                document.querySelector('link[sizes="192x192"]') ||
                document.querySelector('link[sizes="180x180"]') ||
                document.querySelector('link[rel="icon"]') ||
                document.querySelector('link[rel="shortcut icon"]'),
              { protocol: t, host: r } = document.location,
              n = e ? e.getAttribute("href") : null;
            return !n ||
              n.startsWith("javascript:") ||
              n.startsWith("vbscript:")
              ? null
              : n.startsWith("http://") ||
                n.startsWith("https://") ||
                n.startsWith("data:")
              ? n
              : n.startsWith("//")
              ? t + n
              : `${t}//${r}${n}`;
          }),
          (t.areAddressArraysEqual = function (e, t) {
            return e.length === t.length && e.every((e, r) => e === t[r]);
          });
      },
      45811: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CoinbaseWalletSDK = void 0);
        let n = r(39016);
        t.default = n.CoinbaseWalletSDK;
        var s = r(39016);
        Object.defineProperty(t, "CoinbaseWalletSDK", {
          enumerable: !0,
          get: function () {
            return s.CoinbaseWalletSDK;
          },
        });
      },
      25722: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SCWKeyManager = void 0);
        let n = r(5672),
          s = r(77145),
          i = { storageKey: "ownPrivateKey", keyType: "private" },
          a = { storageKey: "ownPublicKey", keyType: "public" },
          o = { storageKey: "peerPublicKey", keyType: "public" };
        class c {
          constructor() {
            (this.storage = new s.ScopedLocalStorage(
              "CBWSDK",
              "SCWKeyManager"
            )),
              (this.ownPrivateKey = null),
              (this.ownPublicKey = null),
              (this.peerPublicKey = null),
              (this.sharedSecret = null);
          }
          async getOwnPublicKey() {
            return await this.loadKeysIfNeeded(), this.ownPublicKey;
          }
          async getSharedSecret() {
            return await this.loadKeysIfNeeded(), this.sharedSecret;
          }
          async setPeerPublicKey(e) {
            (this.sharedSecret = null),
              (this.peerPublicKey = e),
              await this.storeKey(o, e),
              await this.loadKeysIfNeeded();
          }
          async clear() {
            (this.ownPrivateKey = null),
              (this.ownPublicKey = null),
              (this.peerPublicKey = null),
              (this.sharedSecret = null),
              this.storage.removeItem(a.storageKey),
              this.storage.removeItem(i.storageKey),
              this.storage.removeItem(o.storageKey);
          }
          async generateKeyPair() {
            let e = await (0, n.generateKeyPair)();
            (this.ownPrivateKey = e.privateKey),
              (this.ownPublicKey = e.publicKey),
              await this.storeKey(i, e.privateKey),
              await this.storeKey(a, e.publicKey);
          }
          async loadKeysIfNeeded() {
            null === this.ownPrivateKey &&
              (this.ownPrivateKey = await this.loadKey(i)),
              null === this.ownPublicKey &&
                (this.ownPublicKey = await this.loadKey(a)),
              (null === this.ownPrivateKey || null === this.ownPublicKey) &&
                (await this.generateKeyPair()),
              null === this.peerPublicKey &&
                (this.peerPublicKey = await this.loadKey(o)),
              null === this.sharedSecret &&
                null !== this.ownPrivateKey &&
                null !== this.peerPublicKey &&
                (this.sharedSecret = await (0, n.deriveSharedSecret)(
                  this.ownPrivateKey,
                  this.peerPublicKey
                ));
          }
          async loadKey(e) {
            let t = this.storage.getItem(e.storageKey);
            return t ? (0, n.importKeyFromHexString)(e.keyType, t) : null;
          }
          async storeKey(e, t) {
            let r = await (0, n.exportKeyToHexString)(e.keyType, t);
            this.storage.setItem(e.storageKey, r);
          }
        }
        t.SCWKeyManager = c;
      },
      98687: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SCWSigner = void 0);
        let n = r(25722),
          s = r(72236),
          i = r(37185),
          a = r(29695),
          o = r(5672);
        class c {
          constructor(e) {
            (this.metadata = e.metadata),
              (this.communicator = e.communicator),
              (this.keyManager = new n.SCWKeyManager()),
              (this.stateManager = new s.SCWStateManager({
                appChainIds: this.metadata.appChainIds,
                updateListener: e.updateListener,
              })),
              (this.handshake = this.handshake.bind(this)),
              (this.request = this.request.bind(this)),
              (this.createRequestMessage =
                this.createRequestMessage.bind(this)),
              (this.decryptResponseMessage =
                this.decryptResponseMessage.bind(this));
          }
          async handshake() {
            let e = await this.createRequestMessage({
                handshake: {
                  method: "eth_requestAccounts",
                  params: this.metadata,
                },
              }),
              t = await this.communicator.postRequestAndWaitForResponse(e);
            if ("failure" in t.content) throw t.content.failure;
            let r = await (0, o.importKeyFromHexString)("public", t.sender);
            await this.keyManager.setPeerPublicKey(r);
            let n = await this.decryptResponseMessage(t);
            this.updateInternalState({ method: "eth_requestAccounts" }, n);
            let s = n.result;
            if ("error" in s) throw s.error;
            return this.stateManager.accounts;
          }
          async request(e) {
            let t = this.tryLocalHandling(e);
            if (void 0 !== t) {
              if (t instanceof Error) throw t;
              return t;
            }
            await this.communicator.waitForPopupLoaded();
            let r = await this.sendEncryptedRequest(e),
              n = await this.decryptResponseMessage(r);
            this.updateInternalState(e, n);
            let s = n.result;
            if ("error" in s) throw s.error;
            return s.value;
          }
          async disconnect() {
            this.stateManager.clear(), await this.keyManager.clear();
          }
          tryLocalHandling(e) {
            var t;
            switch (e.method) {
              case "wallet_switchEthereumChain": {
                let r = e.params;
                if (
                  !r ||
                  !(null === (t = r[0]) || void 0 === t ? void 0 : t.chainId)
                )
                  throw i.standardErrors.rpc.invalidParams();
                let n = (0, a.ensureIntNumber)(r[0].chainId);
                return this.stateManager.switchChain(n) ? null : void 0;
              }
              case "wallet_getCapabilities": {
                let e = this.stateManager.walletCapabilities;
                if (!e)
                  throw i.standardErrors.provider.unauthorized(
                    "No wallet capabilities found, please disconnect and reconnect"
                  );
                return e;
              }
              default:
                return;
            }
          }
          async sendEncryptedRequest(e) {
            let t = await this.keyManager.getSharedSecret();
            if (!t)
              throw i.standardErrors.provider.unauthorized(
                "No valid session found, try requestAccounts before other methods"
              );
            let r = await (0, o.encryptContent)(
                { action: e, chainId: this.stateManager.activeChain.id },
                t
              ),
              n = await this.createRequestMessage({ encrypted: r });
            return this.communicator.postRequestAndWaitForResponse(n);
          }
          async createRequestMessage(e) {
            let t = await (0, o.exportKeyToHexString)(
              "public",
              await this.keyManager.getOwnPublicKey()
            );
            return {
              id: crypto.randomUUID(),
              sender: t,
              content: e,
              timestamp: new Date(),
            };
          }
          async decryptResponseMessage(e) {
            let t = e.content;
            if ("failure" in t) throw t.failure;
            let r = await this.keyManager.getSharedSecret();
            if (!r)
              throw i.standardErrors.provider.unauthorized("Invalid session");
            return (0, o.decryptContent)(t.encrypted, r);
          }
          updateInternalState(e, t) {
            var r, n;
            let s = null === (r = t.data) || void 0 === r ? void 0 : r.chains;
            s && this.stateManager.updateAvailableChains(s);
            let i =
              null === (n = t.data) || void 0 === n ? void 0 : n.capabilities;
            i && this.stateManager.updateWalletCapabilities(i);
            let o = t.result;
            if (!("error" in o))
              switch (e.method) {
                case "eth_requestAccounts": {
                  let e = o.value;
                  this.stateManager.updateAccounts(e);
                  break;
                }
                case "wallet_switchEthereumChain": {
                  if (null !== o.value) return;
                  let t = e.params,
                    r = (0, a.ensureIntNumber)(t[0].chainId);
                  this.stateManager.switchChain(r);
                }
              }
          }
        }
        t.SCWSigner = c;
      },
      72236: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SCWStateManager = void 0);
        let n = r(77145),
          s = "accounts",
          i = "activeChain",
          a = "availableChains",
          o = "walletCapabilities";
        class c {
          get accounts() {
            return this._accounts;
          }
          get activeChain() {
            return this._activeChain;
          }
          get walletCapabilities() {
            return this._walletCapabilities;
          }
          constructor(e) {
            var t, r;
            (this.storage = new n.ScopedLocalStorage(
              "CBWSDK",
              "SCWStateManager"
            )),
              (this.updateListener = e.updateListener),
              (this.availableChains = this.loadItemFromStorage(a)),
              (this._walletCapabilities = this.loadItemFromStorage(o));
            let c = this.loadItemFromStorage(s),
              l = this.loadItemFromStorage(i);
            c &&
              this.updateListener.onAccountsUpdate({
                accounts: c,
                source: "storage",
              }),
              l &&
                this.updateListener.onChainUpdate({
                  chain: l,
                  source: "storage",
                }),
              (this._accounts = c || []),
              (this._activeChain = l || {
                id:
                  null !==
                    (r =
                      null === (t = e.appChainIds) || void 0 === t
                        ? void 0
                        : t[0]) && void 0 !== r
                    ? r
                    : 1,
              });
          }
          updateAccounts(e) {
            (this._accounts = e),
              this.storeItemToStorage(s, e),
              this.updateListener.onAccountsUpdate({
                accounts: e,
                source: "wallet",
              });
          }
          switchChain(e) {
            var t;
            let r =
              null === (t = this.availableChains) || void 0 === t
                ? void 0
                : t.find((t) => t.id === e);
            return (
              !!r &&
              (r === this._activeChain ||
                ((this._activeChain = r),
                this.storeItemToStorage(i, r),
                this.updateListener.onChainUpdate({
                  chain: r,
                  source: "wallet",
                }),
                !0))
            );
          }
          updateAvailableChains(e) {
            if (!e || 0 === Object.keys(e).length) return;
            let t = Object.entries(e).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            (this.availableChains = t),
              this.storeItemToStorage(a, t),
              this.switchChain(this._activeChain.id);
          }
          updateWalletCapabilities(e) {
            (this._walletCapabilities = e), this.storeItemToStorage(o, e);
          }
          storeItemToStorage(e, t) {
            this.storage.setItem(e, JSON.stringify(t));
          }
          loadItemFromStorage(e) {
            let t = this.storage.getItem(e);
            return t ? JSON.parse(t) : void 0;
          }
          clear() {
            this.storage.clear();
          }
        }
        t.SCWStateManager = c;
      },
      23868: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createSigner =
            t.fetchSignerType =
            t.storeSignerType =
            t.loadSignerType =
              void 0);
        let n = r(98687),
          s = r(57460),
          i = r(37185),
          a = r(74996),
          o = r(77145),
          c = "SignerType",
          l = new o.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
        async function d(e) {
          let { communicator: t, metadata: r } = e;
          u(t, r).catch(() => {});
          let n = {
              id: crypto.randomUUID(),
              event: "selectSignerType",
              data: e.preference,
            },
            { data: s } = await t.postRequestAndWaitForResponse(n);
          return s;
        }
        async function u(e, t) {
          await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
          let r = new s.WalletLinkSigner({ metadata: t });
          e.postMessage({
            event: "WalletLinkUpdate",
            data: { session: r.getSession() },
          }),
            await r.handshake(),
            e.postMessage({
              event: "WalletLinkUpdate",
              data: { connected: !0 },
            });
        }
        (t.loadSignerType = function () {
          return l.getItem(c);
        }),
          (t.storeSignerType = function (e) {
            l.setItem(c, e);
          }),
          (t.fetchSignerType = d),
          (t.createSigner = function (e) {
            let {
              signerType: t,
              metadata: r,
              communicator: o,
              updateListener: c,
            } = e;
            switch (t) {
              case "scw":
                return new n.SCWSigner({
                  metadata: r,
                  updateListener: c,
                  communicator: o,
                });
              case "walletlink":
                return new s.WalletLinkSigner({
                  metadata: r,
                  updateListener: c,
                });
              case "extension": {
                let e = (0, a.getCoinbaseInjectedSigner)();
                if (!e)
                  throw i.standardErrors.rpc.internal(
                    "injected signer not found"
                  );
                return e;
              }
            }
          });
      },
      57460: function (e, t, r) {
        "use strict";
        var n = r(48764).Buffer,
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkSigner = void 0);
        let i = s(r(14497)),
          a = r(86349),
          o = r(79909),
          c = r(49055),
          l = r(42988),
          d = r(96415),
          u = r(37185),
          h = r(29695),
          p = r(77145),
          g = "DefaultChainId",
          f = "DefaultJsonRpcUrl";
        class _ {
          constructor(e) {
            var t, r;
            (this._relay = null),
              (this._addresses = []),
              (this.hasMadeFirstChainChangedEmission = !1);
            let { appName: n, appLogoUrl: s } = e.metadata;
            (this._appName = n),
              (this._appLogoUrl = s),
              (this._storage = new p.ScopedLocalStorage(
                "walletlink",
                d.WALLETLINK_URL
              )),
              (this.updateListener = e.updateListener),
              (this._relayEventManager = new o.RelayEventManager()),
              (this._jsonRpcUrlFromOpts = "");
            let i = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
            if (i) {
              let e = i.split(" ");
              "" !== e[0] &&
                ((this._addresses = e.map((e) =>
                  (0, h.ensureAddressString)(e)
                )),
                null === (t = this.updateListener) ||
                  void 0 === t ||
                  t.onAccountsUpdate({
                    accounts: this._addresses,
                    source: "storage",
                  }));
            }
            this._storage.getItem(g) &&
              (null === (r = this.updateListener) ||
                void 0 === r ||
                r.onChainUpdate({
                  chain: { id: this.getChainId(), rpcUrl: this.jsonRpcUrl },
                  source: "storage",
                }),
              (this.hasMadeFirstChainChangedEmission = !0)),
              this.initializeRelay();
          }
          getSession() {
            let { id: e, secret: t } =
              this.initializeRelay().getWalletLinkSession();
            return { id: e, secret: t };
          }
          async handshake() {
            return await this.request({ method: "eth_requestAccounts" });
          }
          get selectedAddress() {
            return this._addresses[0] || void 0;
          }
          get jsonRpcUrl() {
            var e;
            return null !== (e = this._storage.getItem(f)) && void 0 !== e
              ? e
              : this._jsonRpcUrlFromOpts;
          }
          set jsonRpcUrl(e) {
            this._storage.setItem(f, e);
          }
          updateProviderInfo(e, t) {
            var r;
            this.jsonRpcUrl = e;
            let n = this.getChainId();
            this._storage.setItem(g, t.toString(10)),
              ((0, h.ensureIntNumber)(t) === n &&
                this.hasMadeFirstChainChangedEmission) ||
                (null === (r = this.updateListener) ||
                  void 0 === r ||
                  r.onChainUpdate({
                    chain: { id: t, rpcUrl: e },
                    source: "wallet",
                  }),
                (this.hasMadeFirstChainChangedEmission = !0));
          }
          async watchAsset(e, t, r, n, s, i) {
            let a = this.initializeRelay(),
              o = await a.watchAsset(
                e,
                t,
                r,
                n,
                s,
                null == i ? void 0 : i.toString()
              );
            return !(0, c.isErrorResponse)(o) && !!o.result;
          }
          async addEthereumChain(e, t, r, n, s, i) {
            var a, o;
            if ((0, h.ensureIntNumber)(e) === this.getChainId()) return !1;
            let l = this.initializeRelay();
            this._isAuthorized() || (await l.requestEthereumAccounts());
            let d = await l.addEthereumChain(e.toString(), t, s, r, n, i);
            return (
              !(0, c.isErrorResponse)(d) &&
              ((null === (a = d.result) || void 0 === a
                ? void 0
                : a.isApproved) === !0 && this.updateProviderInfo(t[0], e),
              (null === (o = d.result) || void 0 === o
                ? void 0
                : o.isApproved) === !0)
            );
          }
          async switchEthereumChain(e) {
            let t = this.initializeRelay(),
              r = await t.switchEthereumChain(
                e.toString(10),
                this.selectedAddress || void 0
              );
            if ((0, c.isErrorResponse)(r)) {
              if (!r.errorCode) return;
              if (
                r.errorCode === u.standardErrorCodes.provider.unsupportedChain
              )
                throw u.standardErrors.provider.unsupportedChain();
              throw u.standardErrors.provider.custom({
                message: r.errorMessage,
                code: r.errorCode,
              });
            }
            let n = r.result;
            n.isApproved &&
              n.rpcUrl.length > 0 &&
              this.updateProviderInfo(n.rpcUrl, e);
          }
          async disconnect() {
            this._relay && this._relay.resetAndReload(), this._storage.clear();
          }
          async request(e) {
            try {
              return this._request(e).catch((e) => {
                throw e;
              });
            } catch (e) {
              return Promise.reject(e);
            }
          }
          async _request(e) {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw u.standardErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: r } = e;
            if ("string" != typeof t || 0 === t.length)
              throw u.standardErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== r &&
              !Array.isArray(r) &&
              ("object" != typeof r || null === r)
            )
              throw u.standardErrors.rpc.invalidRequest({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            let n = void 0 === r ? [] : r,
              s = this._relayEventManager.makeRequestId();
            return (
              await this._sendRequestAsync({
                method: t,
                params: n,
                jsonrpc: "2.0",
                id: s,
              })
            ).result;
          }
          _setAddresses(e, t) {
            var r;
            if (!Array.isArray(e)) throw Error("addresses is not an array");
            let n = e.map((e) => (0, h.ensureAddressString)(e));
            JSON.stringify(n) !== JSON.stringify(this._addresses) &&
              ((this._addresses = n),
              null === (r = this.updateListener) ||
                void 0 === r ||
                r.onAccountsUpdate({ accounts: n, source: "wallet" }),
              this._storage.setItem(
                a.LOCAL_STORAGE_ADDRESSES_KEY,
                n.join(" ")
              ));
          }
          _sendRequestAsync(e) {
            return new Promise((t, r) => {
              try {
                let r = this._handleSynchronousMethods(e);
                if (void 0 !== r)
                  return t({ jsonrpc: "2.0", id: e.id, result: r });
              } catch (e) {
                return r(e);
              }
              this._handleAsynchronousMethods(e)
                .then(
                  (r) =>
                    r && t(Object.assign(Object.assign({}, r), { id: e.id }))
                )
                .catch((e) => r(e));
            });
          }
          _handleSynchronousMethods(e) {
            let { method: t } = e;
            switch (t) {
              case "eth_accounts":
                return this._eth_accounts();
              case "eth_coinbase":
                return this._eth_coinbase();
              case "net_version":
                return this._net_version();
              case "eth_chainId":
                return this._eth_chainId();
              default:
                return;
            }
          }
          async _handleAsynchronousMethods(e) {
            let { method: t } = e,
              r = e.params || [];
            switch (t) {
              case "eth_requestAccounts":
                return this._eth_requestAccounts();
              case "eth_sign":
                return this._eth_sign(r);
              case "eth_ecRecover":
                return this._eth_ecRecover(r);
              case "personal_sign":
                return this._personal_sign(r);
              case "personal_ecRecover":
                return this._personal_ecRecover(r);
              case "eth_signTransaction":
                return this._eth_signTransaction(r);
              case "eth_sendRawTransaction":
                return this._eth_sendRawTransaction(r);
              case "eth_sendTransaction":
                return this._eth_sendTransaction(r);
              case "eth_signTypedData_v1":
                return this._eth_signTypedData_v1(r);
              case "eth_signTypedData_v2":
              default:
                return this._throwUnsupportedMethodError();
              case "eth_signTypedData_v3":
                return this._eth_signTypedData_v3(r);
              case "eth_signTypedData_v4":
              case "eth_signTypedData":
                return this._eth_signTypedData_v4(r);
              case "wallet_addEthereumChain":
                return this._wallet_addEthereumChain(r);
              case "wallet_switchEthereumChain":
                return this._wallet_switchEthereumChain(r);
              case "wallet_watchAsset":
                return this._wallet_watchAsset(r);
            }
          }
          _isKnownAddress(e) {
            try {
              let t = (0, h.ensureAddressString)(e);
              return this._addresses
                .map((e) => (0, h.ensureAddressString)(e))
                .includes(t);
            } catch (e) {}
            return !1;
          }
          _ensureKnownAddress(e) {
            if (!this._isKnownAddress(e))
              throw Error("Unknown Ethereum address");
          }
          _prepareTransactionParams(e) {
            let t = e.from
              ? (0, h.ensureAddressString)(e.from)
              : this.selectedAddress;
            if (!t) throw Error("Ethereum address is unavailable");
            this._ensureKnownAddress(t);
            let r = e.to ? (0, h.ensureAddressString)(e.to) : null,
              s = null != e.value ? (0, h.ensureBigInt)(e.value) : BigInt(0),
              i = e.data ? (0, h.ensureBuffer)(e.data) : n.alloc(0),
              a = null != e.nonce ? (0, h.ensureIntNumber)(e.nonce) : null,
              o = null != e.gasPrice ? (0, h.ensureBigInt)(e.gasPrice) : null,
              c =
                null != e.maxFeePerGas
                  ? (0, h.ensureBigInt)(e.maxFeePerGas)
                  : null;
            return {
              fromAddress: t,
              toAddress: r,
              weiValue: s,
              data: i,
              nonce: a,
              gasPriceInWei: o,
              maxFeePerGas: c,
              maxPriorityFeePerGas:
                null != e.maxPriorityFeePerGas
                  ? (0, h.ensureBigInt)(e.maxPriorityFeePerGas)
                  : null,
              gasLimit: null != e.gas ? (0, h.ensureBigInt)(e.gas) : null,
              chainId: e.chainId
                ? (0, h.ensureIntNumber)(e.chainId)
                : this.getChainId(),
            };
          }
          _isAuthorized() {
            return this._addresses.length > 0;
          }
          _requireAuthorization() {
            if (!this._isAuthorized())
              throw u.standardErrors.provider.unauthorized({});
          }
          _throwUnsupportedMethodError() {
            throw u.standardErrors.provider.unsupportedMethod({});
          }
          async _signEthereumMessage(e, t, r, n) {
            this._ensureKnownAddress(t);
            try {
              let s = this.initializeRelay(),
                i = await s.signEthereumMessage(e, t, r, n);
              if ((0, c.isErrorResponse)(i)) throw Error(i.errorMessage);
              return { jsonrpc: "2.0", id: 0, result: i.result };
            } catch (e) {
              if (
                "string" == typeof e.message &&
                e.message.match(/(denied|rejected)/i)
              )
                throw u.standardErrors.provider.userRejectedRequest(
                  "User denied message signature"
                );
              throw e;
            }
          }
          async _ethereumAddressFromSignedMessage(e, t, r) {
            let n = this.initializeRelay(),
              s = await n.ethereumAddressFromSignedMessage(e, t, r);
            if ((0, c.isErrorResponse)(s)) throw Error(s.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: s.result };
          }
          _eth_accounts() {
            return [...this._addresses];
          }
          _eth_coinbase() {
            return this.selectedAddress || null;
          }
          _net_version() {
            return this.getChainId().toString(10);
          }
          _eth_chainId() {
            return (0, h.hexStringFromIntNumber)(this.getChainId());
          }
          getChainId() {
            let e = this._storage.getItem(g);
            if (!e) return (0, h.ensureIntNumber)(1);
            let t = parseInt(e, 10);
            return (0, h.ensureIntNumber)(t);
          }
          async _eth_requestAccounts() {
            let e;
            if (this._isAuthorized())
              return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: this._addresses,
              });
            try {
              let t = this.initializeRelay();
              if (
                ((e = await t.requestEthereumAccounts()),
                (0, c.isErrorResponse)(e))
              )
                throw Error(e.errorMessage);
            } catch (e) {
              if (
                "string" == typeof e.message &&
                e.message.match(/(denied|rejected)/i)
              )
                throw u.standardErrors.provider.userRejectedRequest(
                  "User denied account authorization"
                );
              throw e;
            }
            if (!e.result) throw Error("accounts received is empty");
            return (
              this._setAddresses(e.result),
              { jsonrpc: "2.0", id: 0, result: this._addresses }
            );
          }
          _eth_sign(e) {
            this._requireAuthorization();
            let t = (0, h.ensureAddressString)(e[0]),
              r = (0, h.ensureBuffer)(e[1]);
            return this._signEthereumMessage(r, t, !1);
          }
          _eth_ecRecover(e) {
            let t = (0, h.ensureBuffer)(e[0]),
              r = (0, h.ensureBuffer)(e[1]);
            return this._ethereumAddressFromSignedMessage(t, r, !1);
          }
          _personal_sign(e) {
            this._requireAuthorization();
            let t = (0, h.ensureBuffer)(e[0]),
              r = (0, h.ensureAddressString)(e[1]);
            return this._signEthereumMessage(t, r, !0);
          }
          _personal_ecRecover(e) {
            let t = (0, h.ensureBuffer)(e[0]),
              r = (0, h.ensureBuffer)(e[1]);
            return this._ethereumAddressFromSignedMessage(t, r, !0);
          }
          async _eth_signTransaction(e) {
            this._requireAuthorization();
            let t = this._prepareTransactionParams(e[0] || {});
            try {
              let e = this.initializeRelay(),
                r = await e.signEthereumTransaction(t);
              if ((0, c.isErrorResponse)(r)) throw Error(r.errorMessage);
              return { jsonrpc: "2.0", id: 0, result: r.result };
            } catch (e) {
              if (
                "string" == typeof e.message &&
                e.message.match(/(denied|rejected)/i)
              )
                throw u.standardErrors.provider.userRejectedRequest(
                  "User denied transaction signature"
                );
              throw e;
            }
          }
          async _eth_sendRawTransaction(e) {
            let t = (0, h.ensureBuffer)(e[0]),
              r = this.initializeRelay(),
              n = await r.submitEthereumTransaction(t, this.getChainId());
            if ((0, c.isErrorResponse)(n)) throw Error(n.errorMessage);
            return { jsonrpc: "2.0", id: 0, result: n.result };
          }
          async _eth_sendTransaction(e) {
            this._requireAuthorization();
            let t = this._prepareTransactionParams(e[0] || {});
            try {
              let e = this.initializeRelay(),
                r = await e.signAndSubmitEthereumTransaction(t);
              if ((0, c.isErrorResponse)(r)) throw Error(r.errorMessage);
              return { jsonrpc: "2.0", id: 0, result: r.result };
            } catch (e) {
              if (
                "string" == typeof e.message &&
                e.message.match(/(denied|rejected)/i)
              )
                throw u.standardErrors.provider.userRejectedRequest(
                  "User denied transaction signature"
                );
              throw e;
            }
          }
          async _eth_signTypedData_v1(e) {
            this._requireAuthorization();
            let t = (0, h.ensureParsedJSONObject)(e[0]),
              r = (0, h.ensureAddressString)(e[1]);
            this._ensureKnownAddress(r);
            let n = i.default.hashForSignTypedDataLegacy({ data: t }),
              s = JSON.stringify(t, null, 2);
            return this._signEthereumMessage(n, r, !1, s);
          }
          async _eth_signTypedData_v3(e) {
            this._requireAuthorization();
            let t = (0, h.ensureAddressString)(e[0]),
              r = (0, h.ensureParsedJSONObject)(e[1]);
            this._ensureKnownAddress(t);
            let n = i.default.hashForSignTypedData_v3({ data: r }),
              s = JSON.stringify(r, null, 2);
            return this._signEthereumMessage(n, t, !1, s);
          }
          async _eth_signTypedData_v4(e) {
            this._requireAuthorization();
            let t = (0, h.ensureAddressString)(e[0]),
              r = (0, h.ensureParsedJSONObject)(e[1]);
            this._ensureKnownAddress(t);
            let n = i.default.hashForSignTypedData_v4({ data: r }),
              s = JSON.stringify(r, null, 2);
            return this._signEthereumMessage(n, t, !1, s);
          }
          async _wallet_addEthereumChain(e) {
            var t, r, n, s;
            let i = e[0];
            if (
              (null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length) ===
              0
            )
              return {
                jsonrpc: "2.0",
                id: 0,
                error: { code: 2, message: "please pass in at least 1 rpcUrl" },
              };
            if (!i.chainName || "" === i.chainName.trim())
              throw u.standardErrors.rpc.invalidParams(
                "chainName is a required field"
              );
            if (!i.nativeCurrency)
              throw u.standardErrors.rpc.invalidParams(
                "nativeCurrency is a required field"
              );
            let a = parseInt(i.chainId, 16);
            return (await this.addEthereumChain(
              a,
              null !== (r = i.rpcUrls) && void 0 !== r ? r : [],
              null !== (n = i.blockExplorerUrls) && void 0 !== n ? n : [],
              i.chainName,
              null !== (s = i.iconUrls) && void 0 !== s ? s : [],
              i.nativeCurrency
            ))
              ? { jsonrpc: "2.0", id: 0, result: null }
              : {
                  jsonrpc: "2.0",
                  id: 0,
                  error: { code: 2, message: "unable to add ethereum chain" },
                };
          }
          async _wallet_switchEthereumChain(e) {
            let t = e[0];
            return (
              await this.switchEthereumChain(parseInt(t.chainId, 16)),
              { jsonrpc: "2.0", id: 0, result: null }
            );
          }
          async _wallet_watchAsset(e) {
            let t = Array.isArray(e) ? e[0] : e;
            if (!t.type)
              throw u.standardErrors.rpc.invalidParams("Type is required");
            if ((null == t ? void 0 : t.type) !== "ERC20")
              throw u.standardErrors.rpc.invalidParams(
                `Asset of type '${t.type}' is not supported`
              );
            if (!(null == t ? void 0 : t.options))
              throw u.standardErrors.rpc.invalidParams("Options are required");
            if (!(null == t ? void 0 : t.options.address))
              throw u.standardErrors.rpc.invalidParams("Address is required");
            let r = this.getChainId(),
              { address: n, symbol: s, image: i, decimals: a } = t.options;
            return {
              jsonrpc: "2.0",
              id: 0,
              result: await this.watchAsset(t.type, n, s, a, i, r),
            };
          }
          initializeRelay() {
            if (!this._relay) {
              let e = new l.WalletLinkRelay({
                linkAPIUrl: d.WALLETLINK_URL,
                storage: this._storage,
              });
              e.setAppInfo(this._appName, this._appLogoUrl),
                e.attachUI(),
                e.setAccountsCallback((e, t) => this._setAddresses(e, t)),
                e.setChainCallback((e, t) => {
                  this.updateProviderInfo(t, parseInt(e, 10));
                }),
                (this._relay = e);
            }
            return this._relay;
          }
        }
        t.WalletLinkSigner = _;
      },
      79909: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RelayEventManager = void 0);
        let n = r(29695);
        class s {
          constructor() {
            (this._nextRequestId = 0), (this.callbacks = new Map());
          }
          makeRequestId() {
            this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
            let e = this._nextRequestId,
              t = (0, n.prepend0x)(e.toString(16));
            return this.callbacks.get(t) && this.callbacks.delete(t), e;
          }
        }
        t.RelayEventManager = s;
      },
      42988: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkRelay = void 0);
        let n = r(15150),
          s = r(86349),
          i = r(79909),
          a = r(47923),
          o = r(49055),
          c = r(6464),
          l = r(49674),
          d = r(18194),
          u = r(37185),
          h = r(29695),
          p = r(77145);
        class g {
          constructor(e) {
            (this.accountsCallback = null),
              (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
              (this.chainCallback = null),
              (this.dappDefaultChain = 1),
              (this.isMobileWeb = (0, c.isMobileWeb)()),
              (this.appName = ""),
              (this.appLogoUrl = null),
              (this.linkedUpdated = (e) => {
                this.isLinked = e;
                let t = this.storage.getItem(s.LOCAL_STORAGE_ADDRESSES_KEY);
                if (
                  (e && (this._session.linked = e),
                  (this.isUnlinkedErrorState = !1),
                  t)
                ) {
                  let r = t.split(" "),
                    n = "true" === this.storage.getItem("IsStandaloneSigning");
                  "" === r[0] ||
                    e ||
                    !this._session.linked ||
                    n ||
                    (this.isUnlinkedErrorState = !0);
                }
              }),
              (this.metadataUpdated = (e, t) => {
                this.storage.setItem(e, t);
              }),
              (this.chainUpdated = (e, t) => {
                (this.chainCallbackParams.chainId !== e ||
                  this.chainCallbackParams.jsonRpcUrl !== t) &&
                  ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                  this.chainCallback && this.chainCallback(e, t));
              }),
              (this.accountUpdated = (e) => {
                this.accountsCallback && this.accountsCallback([e]),
                  g.accountRequestCallbackIds.size > 0 &&
                    (Array.from(g.accountRequestCallbackIds.values()).forEach(
                      (t) => {
                        this.invokeCallback(
                          Object.assign(
                            Object.assign(
                              {},
                              {
                                type: "WEB3_RESPONSE",
                                id: t,
                                response: {
                                  method: "requestEthereumAccounts",
                                  result: [e],
                                },
                              }
                            ),
                            { id: t }
                          )
                        );
                      }
                    ),
                    g.accountRequestCallbackIds.clear());
              }),
              (this.resetAndReload = this.resetAndReload.bind(this)),
              (this.linkAPIUrl = e.linkAPIUrl),
              (this.storage = e.storage);
            let { session: t, ui: r, connection: n } = this.subscribe();
            (this._session = t),
              (this.connection = n),
              (this.relayEventManager = new i.RelayEventManager()),
              (this.ui = r);
          }
          subscribe() {
            let e =
                a.WalletLinkSession.load(this.storage) ||
                new a.WalletLinkSession(this.storage).save(),
              { linkAPIUrl: t } = this,
              r = new n.WalletLinkConnection({
                session: e,
                linkAPIUrl: t,
                listener: this,
              }),
              s = this.isMobileWeb
                ? new d.WLMobileRelayUI()
                : new l.WalletLinkRelayUI();
            return r.connect(), { session: e, ui: s, connection: r };
          }
          attachUI() {
            this.ui.attach();
          }
          resetAndReload() {
            Promise.race([
              this.connection.setSessionMetadata("__destroyed", "1"),
              new Promise((e) => setTimeout(() => e(null), 1e3)),
            ])
              .then(() => {
                this.connection.destroy();
                let e = a.WalletLinkSession.load(this.storage);
                (null == e ? void 0 : e.id) === this._session.id &&
                  p.ScopedLocalStorage.clearAll(),
                  document.location.reload();
              })
              .catch((e) => {});
          }
          setAppInfo(e, t) {
            (this.appName = e), (this.appLogoUrl = t);
          }
          getStorageItem(e) {
            return this.storage.getItem(e);
          }
          setStorageItem(e, t) {
            this.storage.setItem(e, t);
          }
          signEthereumMessage(e, t, r, n) {
            return this.sendRequest({
              method: "signEthereumMessage",
              params: {
                message: (0, h.hexStringFromBuffer)(e, !0),
                address: t,
                addPrefix: r,
                typedDataJson: n || null,
              },
            });
          }
          ethereumAddressFromSignedMessage(e, t, r) {
            return this.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: (0, h.hexStringFromBuffer)(e, !0),
                signature: (0, h.hexStringFromBuffer)(t, !0),
                addPrefix: r,
              },
            });
          }
          signEthereumTransaction(e) {
            return this.sendRequest({
              method: "signEthereumTransaction",
              params: {
                fromAddress: e.fromAddress,
                toAddress: e.toAddress,
                weiValue: (0, h.bigIntStringFromBigInt)(e.weiValue),
                data: (0, h.hexStringFromBuffer)(e.data, !0),
                nonce: e.nonce,
                gasPriceInWei: e.gasPriceInWei
                  ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                  : null,
                maxFeePerGas: e.gasPriceInWei
                  ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                  : null,
                maxPriorityFeePerGas: e.gasPriceInWei
                  ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                  : null,
                gasLimit: e.gasLimit
                  ? (0, h.bigIntStringFromBigInt)(e.gasLimit)
                  : null,
                chainId: e.chainId,
                shouldSubmit: !1,
              },
            });
          }
          signAndSubmitEthereumTransaction(e) {
            return this.sendRequest({
              method: "signEthereumTransaction",
              params: {
                fromAddress: e.fromAddress,
                toAddress: e.toAddress,
                weiValue: (0, h.bigIntStringFromBigInt)(e.weiValue),
                data: (0, h.hexStringFromBuffer)(e.data, !0),
                nonce: e.nonce,
                gasPriceInWei: e.gasPriceInWei
                  ? (0, h.bigIntStringFromBigInt)(e.gasPriceInWei)
                  : null,
                maxFeePerGas: e.maxFeePerGas
                  ? (0, h.bigIntStringFromBigInt)(e.maxFeePerGas)
                  : null,
                maxPriorityFeePerGas: e.maxPriorityFeePerGas
                  ? (0, h.bigIntStringFromBigInt)(e.maxPriorityFeePerGas)
                  : null,
                gasLimit: e.gasLimit
                  ? (0, h.bigIntStringFromBigInt)(e.gasLimit)
                  : null,
                chainId: e.chainId,
                shouldSubmit: !0,
              },
            });
          }
          submitEthereumTransaction(e, t) {
            return this.sendRequest({
              method: "submitEthereumTransaction",
              params: {
                signedTransaction: (0, h.hexStringFromBuffer)(e, !0),
                chainId: t,
              },
            });
          }
          scanQRCode(e) {
            return this.sendRequest({
              method: "scanQRCode",
              params: { regExp: e },
            });
          }
          getWalletLinkSession() {
            return this._session;
          }
          genericRequest(e, t) {
            return this.sendRequest({
              method: "generic",
              params: { action: t, data: e },
            });
          }
          sendGenericMessage(e) {
            return this.sendRequest(e);
          }
          sendRequest(e) {
            let t = null,
              r = (0, h.randomBytesHex)(8),
              n = (n) => {
                this.publishWeb3RequestCanceledEvent(r),
                  this.handleErrorResponse(r, e.method, n),
                  null == t || t();
              };
            return new Promise((s, i) => {
              (t = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: n,
                onResetConnection: this.resetAndReload,
              })),
                this.relayEventManager.callbacks.set(r, (e) => {
                  if ((null == t || t(), (0, o.isErrorResponse)(e)))
                    return i(Error(e.errorMessage));
                  s(e);
                }),
                this.publishWeb3RequestEvent(r, e);
            });
          }
          setAccountsCallback(e) {
            this.accountsCallback = e;
          }
          setChainCallback(e) {
            this.chainCallback = e;
          }
          setDappDefaultChainCallback(e) {
            this.dappDefaultChain = e;
          }
          publishWeb3RequestEvent(e, t) {
            let r = { type: "WEB3_REQUEST", id: e, request: t };
            this.publishEvent("Web3Request", r, !0)
              .then((e) => {})
              .catch((e) => {
                this.handleWeb3ResponseMessage({
                  type: "WEB3_RESPONSE",
                  id: r.id,
                  response: { method: t.method, errorMessage: e.message },
                });
              }),
              this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
          }
          openCoinbaseWalletDeeplink(e) {
            if (this.ui instanceof d.WLMobileRelayUI)
              switch (e) {
                case "requestEthereumAccounts":
                case "switchEthereumChain":
                  return;
                default:
                  window.addEventListener(
                    "blur",
                    () => {
                      window.addEventListener(
                        "focus",
                        () => {
                          this.connection.checkUnseenEvents();
                        },
                        { once: !0 }
                      );
                    },
                    { once: !0 }
                  ),
                    this.ui.openCoinbaseWalletDeeplink();
              }
          }
          publishWeb3RequestCanceledEvent(e) {
            this.publishEvent(
              "Web3RequestCanceled",
              { type: "WEB3_REQUEST_CANCELED", id: e },
              !1
            ).then();
          }
          publishEvent(e, t, r) {
            return this.connection.publishEvent(e, t, r);
          }
          handleWeb3ResponseMessage(e) {
            let { response: t } = e;
            if ("requestEthereumAccounts" === t.method) {
              g.accountRequestCallbackIds.forEach((t) =>
                this.invokeCallback(
                  Object.assign(Object.assign({}, e), { id: t })
                )
              ),
                g.accountRequestCallbackIds.clear();
              return;
            }
            this.invokeCallback(e);
          }
          handleErrorResponse(e, t, r) {
            var n;
            let s =
              null !== (n = null == r ? void 0 : r.message) && void 0 !== n
                ? n
                : "Unspecified error message.";
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: e,
              response: { method: t, errorMessage: s },
            });
          }
          invokeCallback(e) {
            let t = this.relayEventManager.callbacks.get(e.id);
            t && (t(e.response), this.relayEventManager.callbacks.delete(e.id));
          }
          requestEthereumAccounts() {
            let e = {
                method: "requestEthereumAccounts",
                params: {
                  appName: this.appName,
                  appLogoUrl: this.appLogoUrl || null,
                },
              },
              t = (0, h.randomBytesHex)(8);
            return new Promise((r, n) => {
              this.relayEventManager.callbacks.set(t, (e) => {
                if ((0, o.isErrorResponse)(e)) return n(Error(e.errorMessage));
                r(e);
              }),
                g.accountRequestCallbackIds.add(t),
                this.publishWeb3RequestEvent(t, e);
            });
          }
          watchAsset(e, t, r, n, s, i) {
            let a = {
                method: "watchAsset",
                params: {
                  type: e,
                  options: { address: t, symbol: r, decimals: n, image: s },
                  chainId: i,
                },
              },
              c = null,
              l = (0, h.randomBytesHex)(8);
            return (
              (c = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: (e) => {
                  this.publishWeb3RequestCanceledEvent(l),
                    this.handleErrorResponse(l, a.method, e),
                    null == c || c();
                },
                onResetConnection: this.resetAndReload,
              })),
              new Promise((e, t) => {
                this.relayEventManager.callbacks.set(l, (r) => {
                  if ((null == c || c(), (0, o.isErrorResponse)(r)))
                    return t(Error(r.errorMessage));
                  e(r);
                }),
                  this.publishWeb3RequestEvent(l, a);
              })
            );
          }
          addEthereumChain(e, t, r, n, s, i) {
            let a = {
                method: "addEthereumChain",
                params: {
                  chainId: e,
                  rpcUrls: t,
                  blockExplorerUrls: n,
                  chainName: s,
                  iconUrls: r,
                  nativeCurrency: i,
                },
              },
              c = null,
              l = (0, h.randomBytesHex)(8);
            return (
              (c = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: (e) => {
                  this.publishWeb3RequestCanceledEvent(l),
                    this.handleErrorResponse(l, a.method, e),
                    null == c || c();
                },
                onResetConnection: this.resetAndReload,
              })),
              new Promise((e, t) => {
                this.relayEventManager.callbacks.set(l, (r) => {
                  if ((null == c || c(), (0, o.isErrorResponse)(r)))
                    return t(Error(r.errorMessage));
                  e(r);
                }),
                  this.publishWeb3RequestEvent(l, a);
              })
            );
          }
          switchEthereumChain(e, t) {
            let r = {
                method: "switchEthereumChain",
                params: Object.assign({ chainId: e }, { address: t }),
              },
              n = (0, h.randomBytesHex)(8);
            return new Promise((e, t) => {
              this.relayEventManager.callbacks.set(n, (r) =>
                (0, o.isErrorResponse)(r) && r.errorCode
                  ? t(
                      u.standardErrors.provider.custom({
                        code: r.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : (0, o.isErrorResponse)(r)
                  ? t(Error(r.errorMessage))
                  : void e(r)
              ),
                this.publishWeb3RequestEvent(n, r);
            });
          }
        }
        (t.WalletLinkRelay = g), (g.accountRequestCallbackIds = new Set());
      },
      58469: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkCipher = void 0);
        let n = r(29695);
        class s {
          constructor(e) {
            this.secret = e;
          }
          async encrypt(e) {
            let t = this.secret;
            if (64 !== t.length) throw Error("secret must be 256 bits");
            let r = crypto.getRandomValues(new Uint8Array(12)),
              s = await crypto.subtle.importKey(
                "raw",
                (0, n.hexStringToUint8Array)(t),
                { name: "aes-gcm" },
                !1,
                ["encrypt", "decrypt"]
              ),
              i = new TextEncoder(),
              a = await window.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: r },
                s,
                i.encode(e)
              ),
              o = a.slice(a.byteLength - 16),
              c = a.slice(0, a.byteLength - 16),
              l = new Uint8Array(o),
              d = new Uint8Array(c),
              u = new Uint8Array([...r, ...l, ...d]);
            return (0, n.uint8ArrayToHex)(u);
          }
          async decrypt(e) {
            let t = this.secret;
            if (64 !== t.length) throw Error("secret must be 256 bits");
            return new Promise((r, s) => {
              (async function () {
                let i = await crypto.subtle.importKey(
                    "raw",
                    (0, n.hexStringToUint8Array)(t),
                    { name: "aes-gcm" },
                    !1,
                    ["encrypt", "decrypt"]
                  ),
                  a = (0, n.hexStringToUint8Array)(e),
                  o = a.slice(0, 12),
                  c = a.slice(12, 28),
                  l = new Uint8Array([...a.slice(28), ...c]),
                  d = { name: "AES-GCM", iv: new Uint8Array(o) };
                try {
                  let e = await window.crypto.subtle.decrypt(d, i, l),
                    t = new TextDecoder();
                  r(t.decode(e));
                } catch (e) {
                  s(e);
                }
              })();
            });
          }
        }
        t.WalletLinkCipher = s;
      },
      15150: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkConnection = void 0);
        let n = r(86349),
          s = r(58469),
          i = r(9166),
          a = r(59766),
          o = r(53513);
        class c {
          constructor({
            session: e,
            linkAPIUrl: t,
            listener: r,
            WebSocketClass: c = WebSocket,
          }) {
            (this.destroyed = !1),
              (this.lastHeartbeatResponse = 0),
              (this.nextReqId = (0, o.IntNumber)(1)),
              (this._connected = !1),
              (this._linked = !1),
              (this.shouldFetchUnseenEventsOnConnect = !1),
              (this.requestResolutions = new Map()),
              (this.handleSessionMetadataUpdated = (e) => {
                e &&
                  new Map([
                    ["__destroyed", this.handleDestroyed],
                    ["EthereumAddress", this.handleAccountUpdated],
                    ["WalletUsername", this.handleWalletUsernameUpdated],
                    ["AppVersion", this.handleAppVersionUpdated],
                    [
                      "ChainId",
                      (t) =>
                        e.JsonRpcUrl &&
                        this.handleChainUpdated(t, e.JsonRpcUrl),
                    ],
                  ]).forEach((t, r) => {
                    let n = e[r];
                    void 0 !== n && t(n);
                  });
              }),
              (this.handleDestroyed = (e) => {
                var t;
                "1" === e &&
                  (null === (t = this.listener) ||
                    void 0 === t ||
                    t.resetAndReload());
              }),
              (this.handleAccountUpdated = async (e) => {
                var t;
                {
                  let r = await this.cipher.decrypt(e);
                  null === (t = this.listener) ||
                    void 0 === t ||
                    t.accountUpdated(r);
                }
              }),
              (this.handleMetadataUpdated = async (e, t) => {
                var r;
                {
                  let n = await this.cipher.decrypt(t);
                  null === (r = this.listener) ||
                    void 0 === r ||
                    r.metadataUpdated(e, n);
                }
              }),
              (this.handleWalletUsernameUpdated = async (e) => {
                this.handleMetadataUpdated(n.WALLET_USER_NAME_KEY, e);
              }),
              (this.handleAppVersionUpdated = async (e) => {
                this.handleMetadataUpdated(n.APP_VERSION_KEY, e);
              }),
              (this.handleChainUpdated = async (e, t) => {
                var r;
                {
                  let n = await this.cipher.decrypt(e),
                    s = await this.cipher.decrypt(t);
                  null === (r = this.listener) ||
                    void 0 === r ||
                    r.chainUpdated(n, s);
                }
              }),
              (this.session = e),
              (this.cipher = new s.WalletLinkCipher(e.secret)),
              (this.listener = r);
            let l = new a.WalletLinkWebSocket(`${t}/rpc`, c);
            l.setConnectionStateListener(async (e) => {
              let t = !1;
              switch (e) {
                case a.ConnectionState.DISCONNECTED:
                  if (!this.destroyed) {
                    let e = async () => {
                      await new Promise((e) => setTimeout(e, 5e3)),
                        this.destroyed ||
                          l.connect().catch(() => {
                            e();
                          });
                    };
                    e();
                  }
                  break;
                case a.ConnectionState.CONNECTED:
                  try {
                    await this.authenticate(),
                      this.sendIsLinked(),
                      this.sendGetSessionConfig(),
                      (t = !0);
                  } catch (e) {}
                  this.updateLastHeartbeat(),
                    setInterval(() => {
                      this.heartbeat();
                    }, 1e4),
                    this.shouldFetchUnseenEventsOnConnect &&
                      this.fetchUnseenEventsAPI();
                case a.ConnectionState.CONNECTING:
              }
              this.connected !== t && (this.connected = t);
            }),
              l.setIncomingDataListener((e) => {
                var t;
                switch (e.type) {
                  case "Heartbeat":
                    this.updateLastHeartbeat();
                    return;
                  case "IsLinkedOK":
                  case "Linked": {
                    let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                    this.linked = t || e.onlineGuests > 0;
                    break;
                  }
                  case "GetSessionConfigOK":
                  case "SessionConfigUpdated":
                    this.handleSessionMetadataUpdated(e.metadata);
                    break;
                  case "Event":
                    this.handleIncomingEvent(e);
                }
                void 0 !== e.id &&
                  (null === (t = this.requestResolutions.get(e.id)) ||
                    void 0 === t ||
                    t(e));
              }),
              (this.ws = l),
              (this.http = new i.WalletLinkHTTP(t, e.id, e.key));
          }
          connect() {
            if (this.destroyed) throw Error("instance is destroyed");
            this.ws.connect();
          }
          destroy() {
            (this.destroyed = !0),
              this.ws.disconnect(),
              (this.listener = void 0);
          }
          get isDestroyed() {
            return this.destroyed;
          }
          get connected() {
            return this._connected;
          }
          set connected(e) {
            var t;
            (this._connected = e),
              e &&
                (null === (t = this.onceConnected) ||
                  void 0 === t ||
                  t.call(this));
          }
          setOnceConnected(e) {
            return new Promise((t) => {
              this.connected
                ? e().then(t)
                : (this.onceConnected = () => {
                    e().then(t), (this.onceConnected = void 0);
                  });
            });
          }
          get linked() {
            return this._linked;
          }
          set linked(e) {
            var t, r;
            (this._linked = e),
              e &&
                (null === (t = this.onceLinked) ||
                  void 0 === t ||
                  t.call(this)),
              null === (r = this.listener) ||
                void 0 === r ||
                r.linkedUpdated(e);
          }
          setOnceLinked(e) {
            return new Promise((t) => {
              this.linked
                ? e().then(t)
                : (this.onceLinked = () => {
                    e().then(t), (this.onceLinked = void 0);
                  });
            });
          }
          async handleIncomingEvent(e) {
            var t;
            if ("Event" === e.type && "Web3Response" === e.event) {
              let r = JSON.parse(await this.cipher.decrypt(e.data));
              if ("WEB3_RESPONSE" !== r.type) return;
              null === (t = this.listener) ||
                void 0 === t ||
                t.handleWeb3ResponseMessage(r);
            }
          }
          async checkUnseenEvents() {
            if (!this.connected) {
              this.shouldFetchUnseenEventsOnConnect = !0;
              return;
            }
            await new Promise((e) => setTimeout(e, 250));
            try {
              await this.fetchUnseenEventsAPI();
            } catch (e) {
              console.error("Unable to check for unseen events", e);
            }
          }
          async fetchUnseenEventsAPI() {
            (this.shouldFetchUnseenEventsOnConnect = !1),
              (await this.http.fetchUnseenEvents()).forEach((e) =>
                this.handleIncomingEvent(e)
              );
          }
          async setSessionMetadata(e, t) {
            let r = {
              type: "SetSessionConfig",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
              metadata: { [e]: t },
            };
            return this.setOnceConnected(async () => {
              let e = await this.makeRequest(r);
              if ("Fail" === e.type)
                throw Error(e.error || "failed to set session metadata");
            });
          }
          async publishEvent(e, t, r = !1) {
            let n = await this.cipher.encrypt(
                JSON.stringify(
                  Object.assign(Object.assign({}, t), {
                    origin: location.origin,
                    relaySource:
                      "coinbaseWalletExtension" in window &&
                      window.coinbaseWalletExtension
                        ? "injected_sdk"
                        : "sdk",
                  })
                )
              ),
              s = {
                type: "PublishEvent",
                id: (0, o.IntNumber)(this.nextReqId++),
                sessionId: this.session.id,
                event: e,
                data: n,
                callWebhook: r,
              };
            return this.setOnceLinked(async () => {
              let e = await this.makeRequest(s);
              if ("Fail" === e.type)
                throw Error(e.error || "failed to publish event");
              return e.eventId;
            });
          }
          sendData(e) {
            this.ws.sendData(JSON.stringify(e));
          }
          updateLastHeartbeat() {
            this.lastHeartbeatResponse = Date.now();
          }
          heartbeat() {
            if (Date.now() - this.lastHeartbeatResponse > 2e4) {
              this.ws.disconnect();
              return;
            }
            try {
              this.ws.sendData("h");
            } catch (e) {}
          }
          async makeRequest(e, t = 6e4) {
            let r;
            let n = e.id;
            return (
              this.sendData(e),
              Promise.race([
                new Promise((e, s) => {
                  r = window.setTimeout(() => {
                    s(Error(`request ${n} timed out`));
                  }, t);
                }),
                new Promise((e) => {
                  this.requestResolutions.set(n, (t) => {
                    clearTimeout(r), e(t), this.requestResolutions.delete(n);
                  });
                }),
              ])
            );
          }
          async authenticate() {
            let e = {
                type: "HostSession",
                id: (0, o.IntNumber)(this.nextReqId++),
                sessionId: this.session.id,
                sessionKey: this.session.key,
              },
              t = await this.makeRequest(e);
            if ("Fail" === t.type)
              throw Error(t.error || "failed to authenticate");
          }
          sendIsLinked() {
            let e = {
              type: "IsLinked",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
            };
            this.sendData(e);
          }
          sendGetSessionConfig() {
            let e = {
              type: "GetSessionConfig",
              id: (0, o.IntNumber)(this.nextReqId++),
              sessionId: this.session.id,
            };
            this.sendData(e);
          }
        }
        t.WalletLinkConnection = c;
      },
      9166: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkHTTP = void 0);
        class r {
          constructor(e, t, r) {
            (this.linkAPIUrl = e), (this.sessionId = t);
            let n = `${t}:${r}`;
            this.auth = `Basic ${btoa(n)}`;
          }
          async markUnseenEventsAsSeen(e) {
            return Promise.all(
              e.map((e) =>
                fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                  method: "POST",
                  headers: { Authorization: this.auth },
                })
              )
            ).catch((e) =>
              console.error("Unabled to mark event as failed:", e)
            );
          }
          async fetchUnseenEvents() {
            var e;
            let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
              headers: { Authorization: this.auth },
            });
            if (t.ok) {
              let { events: r, error: n } = await t.json();
              if (n) throw Error(`Check unseen events failed: ${n}`);
              let s =
                null !==
                  (e =
                    null == r
                      ? void 0
                      : r
                          .filter((e) => "Web3Response" === e.event)
                          .map((e) => ({
                            type: "Event",
                            sessionId: this.sessionId,
                            eventId: e.id,
                            event: e.event,
                            data: e.data,
                          }))) && void 0 !== e
                  ? e
                  : [];
              return this.markUnseenEventsAsSeen(s), s;
            }
            throw Error(`Check unseen events failed: ${t.status}`);
          }
        }
        t.WalletLinkHTTP = r;
      },
      59766: function (e, t) {
        "use strict";
        var r, n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkWebSocket = t.ConnectionState = void 0),
          ((n = r || (t.ConnectionState = r = {}))[(n.DISCONNECTED = 0)] =
            "DISCONNECTED"),
          (n[(n.CONNECTING = 1)] = "CONNECTING"),
          (n[(n.CONNECTED = 2)] = "CONNECTED");
        class s {
          setConnectionStateListener(e) {
            this.connectionStateListener = e;
          }
          setIncomingDataListener(e) {
            this.incomingDataListener = e;
          }
          constructor(e, t = WebSocket) {
            (this.WebSocketClass = t),
              (this.webSocket = null),
              (this.pendingData = []),
              (this.url = e.replace(/^http/, "ws"));
          }
          async connect() {
            if (this.webSocket) throw Error("webSocket object is not null");
            return new Promise((e, t) => {
              var n;
              let s;
              try {
                this.webSocket = s = new this.WebSocketClass(this.url);
              } catch (e) {
                t(e);
                return;
              }
              null === (n = this.connectionStateListener) ||
                void 0 === n ||
                n.call(this, r.CONNECTING),
                (s.onclose = (e) => {
                  var n;
                  this.clearWebSocket(),
                    t(Error(`websocket error ${e.code}: ${e.reason}`)),
                    null === (n = this.connectionStateListener) ||
                      void 0 === n ||
                      n.call(this, r.DISCONNECTED);
                }),
                (s.onopen = (t) => {
                  var n;
                  e(),
                    null === (n = this.connectionStateListener) ||
                      void 0 === n ||
                      n.call(this, r.CONNECTED),
                    this.pendingData.length > 0 &&
                      ([...this.pendingData].forEach((e) => this.sendData(e)),
                      (this.pendingData = []));
                }),
                (s.onmessage = (e) => {
                  var t, r;
                  if ("h" === e.data)
                    null === (t = this.incomingDataListener) ||
                      void 0 === t ||
                      t.call(this, { type: "Heartbeat" });
                  else
                    try {
                      let t = JSON.parse(e.data);
                      null === (r = this.incomingDataListener) ||
                        void 0 === r ||
                        r.call(this, t);
                    } catch (e) {}
                });
            });
          }
          disconnect() {
            var e;
            let { webSocket: t } = this;
            if (t) {
              this.clearWebSocket(),
                null === (e = this.connectionStateListener) ||
                  void 0 === e ||
                  e.call(this, r.DISCONNECTED),
                (this.connectionStateListener = void 0),
                (this.incomingDataListener = void 0);
              try {
                t.close();
              } catch (e) {}
            }
          }
          sendData(e) {
            let { webSocket: t } = this;
            if (!t) {
              this.pendingData.push(e), this.connect();
              return;
            }
            t.send(e);
          }
          clearWebSocket() {
            let { webSocket: e } = this;
            e &&
              ((this.webSocket = null),
              (e.onclose = null),
              (e.onerror = null),
              (e.onmessage = null),
              (e.onopen = null));
          }
        }
        t.WalletLinkWebSocket = s;
      },
      86349: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.APP_VERSION_KEY =
            t.LOCAL_STORAGE_ADDRESSES_KEY =
            t.WALLET_USER_NAME_KEY =
              void 0),
          (t.WALLET_USER_NAME_KEY = "walletUsername"),
          (t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses"),
          (t.APP_VERSION_KEY = "AppVersion");
      },
      47923: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkSession = void 0);
        let n = r(89072),
          s = r(29695),
          i = "session:id",
          a = "session:secret",
          o = "session:linked";
        class c {
          constructor(e, t, r, i) {
            (this._storage = e),
              (this._id = t || (0, s.randomBytesHex)(16)),
              (this._secret = r || (0, s.randomBytesHex)(32)),
              (this._key = new n.sha256()
                .update(`${this._id}, ${this._secret} WalletLink`)
                .digest("hex")),
              (this._linked = !!i);
          }
          static load(e) {
            let t = e.getItem(i),
              r = e.getItem(o),
              n = e.getItem(a);
            return t && n ? new c(e, t, n, "1" === r) : null;
          }
          get id() {
            return this._id;
          }
          get secret() {
            return this._secret;
          }
          get key() {
            return this._key;
          }
          get linked() {
            return this._linked;
          }
          set linked(e) {
            (this._linked = e), this.persistLinked();
          }
          save() {
            return (
              this._storage.setItem(i, this._id),
              this._storage.setItem(a, this._secret),
              this.persistLinked(),
              this
            );
          }
          persistLinked() {
            this._storage.setItem(o, this._linked ? "1" : "0");
          }
        }
        t.WalletLinkSession = c;
      },
      49055: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isErrorResponse = void 0),
          (t.isErrorResponse = function (e) {
            return void 0 !== e.errorMessage;
          });
      },
      18194: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WLMobileRelayUI = void 0);
        let n = r(48726),
          s = r(6464),
          i = r(96415);
        class a {
          constructor() {
            (this.attached = !1),
              (this.redirectDialog = new n.RedirectDialog());
          }
          attach() {
            if (this.attached)
              throw Error("Coinbase Wallet SDK UI is already attached");
            this.redirectDialog.attach(), (this.attached = !0);
          }
          redirectToCoinbaseWallet(e) {
            let t = new URL(i.CBW_MOBILE_DEEPLINK_URL);
            t.searchParams.append("redirect_url", (0, s.getLocation)().href),
              e && t.searchParams.append("wl_url", e);
            let r = document.createElement("a");
            (r.target = "cbw-opener"),
              (r.href = t.href),
              (r.rel = "noreferrer noopener"),
              r.click();
          }
          openCoinbaseWalletDeeplink(e) {
            this.redirectDialog.present({
              title: "Redirecting to Coinbase Wallet...",
              buttonText: "Open",
              onButtonClick: () => {
                this.redirectToCoinbaseWallet(e);
              },
            }),
              setTimeout(() => {
                this.redirectToCoinbaseWallet(e);
              }, 99);
          }
          showConnecting(e) {
            return () => {
              this.redirectDialog.clear();
            };
          }
        }
        t.WLMobileRelayUI = a;
      },
      49674: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WalletLinkRelayUI = void 0);
        let n = r(49612),
          s = r(15209);
        class i {
          constructor() {
            (this.attached = !1), (this.snackbar = new s.Snackbar());
          }
          attach() {
            if (this.attached)
              throw Error("Coinbase Wallet SDK UI is already attached");
            let e = document.documentElement,
              t = document.createElement("div");
            (t.className = "-cbwsdk-css-reset"),
              e.appendChild(t),
              this.snackbar.attach(t),
              (this.attached = !0),
              (0, n.injectCssReset)();
          }
          showConnecting(e) {
            let t;
            return (
              (t = e.isUnlinkedErrorState
                ? {
                    autoExpand: !0,
                    message: "Connection lost",
                    menuItems: [
                      {
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection,
                      },
                    ],
                  }
                : {
                    message: "Confirm on phone",
                    menuItems: [
                      {
                        isRed: !0,
                        info: "Cancel transaction",
                        svgWidth: "11",
                        svgHeight: "11",
                        path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                        defaultFillRule: "inherit",
                        defaultClipRule: "inherit",
                        onClick: e.onCancel,
                      },
                      {
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: e.onResetConnection,
                      },
                    ],
                  }),
              this.snackbar.presentItem(t)
            );
          }
        }
        t.WalletLinkRelayUI = i;
      },
      68970: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}");
      },
      48726: function (e, t, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RedirectDialog = void 0);
        let s = n(r(60801)),
          i = r(6400),
          a = r(49612),
          o = r(15209),
          c = r(6464),
          l = n(r(68970));
        class d {
          constructor() {
            (this.root = null), (this.darkMode = (0, c.isDarkMode)());
          }
          attach() {
            let e = document.documentElement;
            (this.root = document.createElement("div")),
              (this.root.className = "-cbwsdk-css-reset"),
              e.appendChild(this.root),
              (0, a.injectCssReset)();
          }
          present(e) {
            this.render(e);
          }
          clear() {
            this.render(null);
          }
          render(e) {
            this.root &&
              ((0, i.render)(null, this.root),
              e &&
                (0, i.render)(
                  (0, i.h)(
                    u,
                    Object.assign({}, e, {
                      onDismiss: () => {
                        this.clear();
                      },
                      darkMode: this.darkMode,
                    })
                  ),
                  this.root
                ));
          }
        }
        t.RedirectDialog = d;
        let u = ({
          title: e,
          buttonText: t,
          darkMode: r,
          onButtonClick: n,
          onDismiss: a,
        }) =>
          (0, i.h)(
            o.SnackbarContainer,
            { darkMode: r },
            (0, i.h)(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              (0, i.h)("style", null, l.default),
              (0, i.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: a,
              }),
              (0, i.h)(
                "div",
                {
                  class: (0, s.default)(
                    "-cbwsdk-redirect-dialog-box",
                    r ? "dark" : "light"
                  ),
                },
                (0, i.h)("p", null, e),
                (0, i.h)("button", { onClick: n }, t)
              )
            )
          );
      },
      9335: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
      },
      15209: function (e, t, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0);
        let s = n(r(60801)),
          i = r(6400),
          a = r(30396),
          o = r(6464),
          c = n(r(9335));
        class l {
          constructor() {
            (this.items = new Map()),
              (this.nextItemKey = 0),
              (this.root = null),
              (this.darkMode = (0, o.isDarkMode)());
          }
          attach(e) {
            (this.root = document.createElement("div")),
              (this.root.className = "-cbwsdk-snackbar-root"),
              e.appendChild(this.root),
              this.render();
          }
          presentItem(e) {
            let t = this.nextItemKey++;
            return (
              this.items.set(t, e),
              this.render(),
              () => {
                this.items.delete(t), this.render();
              }
            );
          }
          clear() {
            this.items.clear(), this.render();
          }
          render() {
            this.root &&
              (0, i.render)(
                (0, i.h)(
                  "div",
                  null,
                  (0, i.h)(
                    t.SnackbarContainer,
                    { darkMode: this.darkMode },
                    Array.from(this.items.entries()).map(([e, r]) =>
                      (0, i.h)(
                        t.SnackbarInstance,
                        Object.assign({}, r, { key: e })
                      )
                    )
                  )
                ),
                this.root
              );
          }
        }
        (t.Snackbar = l),
          (t.SnackbarContainer = (e) =>
            (0, i.h)(
              "div",
              { class: (0, s.default)("-cbwsdk-snackbar-container") },
              (0, i.h)("style", null, c.default),
              (0, i.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
            )),
          (t.SnackbarInstance = ({
            autoExpand: e,
            message: t,
            menuItems: r,
          }) => {
            let [n, o] = (0, a.useState)(!0),
              [c, l] = (0, a.useState)(null != e && e);
            return (
              (0, a.useEffect)(() => {
                let e = [
                  window.setTimeout(() => {
                    o(!1);
                  }, 1),
                  window.setTimeout(() => {
                    l(!0);
                  }, 1e4),
                ];
                return () => {
                  e.forEach(window.clearTimeout);
                };
              }),
              (0, i.h)(
                "div",
                {
                  class: (0, s.default)(
                    "-cbwsdk-snackbar-instance",
                    n && "-cbwsdk-snackbar-instance-hidden",
                    c && "-cbwsdk-snackbar-instance-expanded"
                  ),
                },
                (0, i.h)(
                  "div",
                  {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: () => {
                      l(!c);
                    },
                  },
                  (0, i.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                    class: "-cbwsdk-snackbar-instance-header-cblogo",
                  }),
                  " ",
                  (0, i.h)(
                    "div",
                    { class: "-cbwsdk-snackbar-instance-header-message" },
                    t
                  ),
                  (0, i.h)(
                    "div",
                    { class: "-gear-container" },
                    !c &&
                      (0, i.h)(
                        "svg",
                        {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, i.h)("circle", {
                          cx: "12",
                          cy: "12",
                          r: "12",
                          fill: "#F5F7F8",
                        })
                      ),
                    (0, i.h)("img", {
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                      class: "-gear-icon",
                      title: "Expand",
                    })
                  )
                ),
                r &&
                  r.length > 0 &&
                  (0, i.h)(
                    "div",
                    { class: "-cbwsdk-snackbar-instance-menu" },
                    r.map((e, t) =>
                      (0, i.h)(
                        "div",
                        {
                          class: (0, s.default)(
                            "-cbwsdk-snackbar-instance-menu-item",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-is-red"
                          ),
                          onClick: e.onClick,
                          key: t,
                        },
                        (0, i.h)(
                          "svg",
                          {
                            width: e.svgWidth,
                            height: e.svgHeight,
                            viewBox: "0 0 10 11",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          (0, i.h)("path", {
                            "fill-rule": e.defaultFillRule,
                            "clip-rule": e.defaultClipRule,
                            d: e.path,
                            fill: "#AAAAAA",
                          })
                        ),
                        (0, i.h)(
                          "span",
                          {
                            class: (0, s.default)(
                              "-cbwsdk-snackbar-instance-menu-item-info",
                              e.isRed &&
                                "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                            ),
                          },
                          e.info
                        )
                      )
                    )
                  )
              )
            );
          });
      },
      52233: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}');
      },
      49612: function (e, t, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.injectCssReset = void 0);
        let s = n(r(52233));
        t.injectCssReset = function () {
          let e = document.createElement("style");
          (e.type = "text/css"),
            e.appendChild(document.createTextNode(s.default)),
            document.documentElement.appendChild(e);
        };
      },
      6464: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isDarkMode =
            t.isMobileWeb =
            t.getLocation =
            t.createQrUrl =
              void 0),
          (t.createQrUrl = function (e, t, r, n, s, i) {
            let a = new URLSearchParams({
              [n ? "parent-id" : "id"]: e,
              secret: t,
              server: r,
              v: s,
              chainId: i.toString(),
            }).toString();
            return `${r}/#/link?${a}`;
          }),
          (t.getLocation = function () {
            try {
              if (
                (function () {
                  try {
                    return null !== window.frameElement;
                  } catch (e) {
                    return !1;
                  }
                })() &&
                window.top
              )
                return window.top.location;
              return window.location;
            } catch (e) {
              return window.location;
            }
          }),
          (t.isMobileWeb = function () {
            var e;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              null === (e = null == window ? void 0 : window.navigator) ||
                void 0 === e
                ? void 0
                : e.userAgent
            );
          }),
          (t.isDarkMode = function () {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = null == window ? void 0 : window.matchMedia) ||
                  void 0 === e
                    ? void 0
                    : e.call(window, "(prefers-color-scheme: dark)").matches) &&
              void 0 !== t &&
              t
            );
          });
      },
      77145: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ScopedLocalStorage = void 0);
        class r {
          constructor(e, t) {
            (this.scope = e), (this.module = t);
          }
          setItem(e, t) {
            localStorage.setItem(this.scopedKey(e), t);
          }
          getItem(e) {
            return localStorage.getItem(this.scopedKey(e));
          }
          removeItem(e) {
            localStorage.removeItem(this.scopedKey(e));
          }
          clear() {
            let e = this.scopedKey(""),
              t = [];
            for (let r = 0; r < localStorage.length; r++) {
              let n = localStorage.key(r);
              "string" == typeof n && n.startsWith(e) && t.push(n);
            }
            t.forEach((e) => localStorage.removeItem(e));
          }
          scopedKey(e) {
            return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
          }
          static clearAll() {
            new r("CBWSDK").clear(), new r("walletlink").clear();
          }
        }
        t.ScopedLocalStorage = r;
      },
      5672: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decryptContent =
            t.encryptContent =
            t.importKeyFromHexString =
            t.exportKeyToHexString =
            t.decrypt =
            t.encrypt =
            t.deriveSharedSecret =
            t.generateKeyPair =
              void 0);
        let n = r(29695);
        async function s() {
          return crypto.subtle.generateKey(
            { name: "ECDH", namedCurve: "P-256" },
            !0,
            ["deriveKey"]
          );
        }
        async function i(e, t) {
          return crypto.subtle.deriveKey(
            { name: "ECDH", public: t },
            e,
            { name: "AES-GCM", length: 256 },
            !1,
            ["encrypt", "decrypt"]
          );
        }
        async function a(e, t) {
          let r = crypto.getRandomValues(new Uint8Array(12)),
            n = await crypto.subtle.encrypt(
              { name: "AES-GCM", iv: r },
              e,
              new TextEncoder().encode(t)
            );
          return { iv: r, cipherText: n };
        }
        async function o(e, { iv: t, cipherText: r }) {
          let n = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, r);
          return new TextDecoder().decode(n);
        }
        function c(e) {
          switch (e) {
            case "public":
              return "spki";
            case "private":
              return "pkcs8";
          }
        }
        async function l(e, t) {
          let r = c(e),
            s = await crypto.subtle.exportKey(r, t);
          return (0, n.uint8ArrayToHex)(new Uint8Array(s));
        }
        async function d(e, t) {
          let r = c(e),
            s = (0, n.hexStringToUint8Array)(t).buffer;
          return await crypto.subtle.importKey(
            r,
            s,
            { name: "ECDH", namedCurve: "P-256" },
            !0,
            "private" === e ? ["deriveKey"] : []
          );
        }
        async function u(e, t) {
          return a(
            t,
            JSON.stringify(e, (e, t) =>
              t instanceof Error
                ? Object.assign(
                    Object.assign({}, t.code ? { code: t.code } : {}),
                    { message: t.message }
                  )
                : t
            )
          );
        }
        async function h(e, t) {
          return JSON.parse(await o(t, e));
        }
        (t.generateKeyPair = s),
          (t.deriveSharedSecret = i),
          (t.encrypt = a),
          (t.decrypt = o),
          (t.exportKeyToHexString = l),
          (t.importKeyFromHexString = d),
          (t.encryptContent = u),
          (t.decryptContent = h);
      },
      74996: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.checkErrorForInvalidRequestArgs =
            t.getCoinbaseInjectedProvider =
            t.getCoinbaseInjectedSigner =
            t.fetchRPCRequest =
              void 0);
        let n = r(43604),
          s = r(37185);
        async function i(e, t) {
          if (!t.rpcUrl)
            throw s.standardErrors.rpc.internal("No RPC URL set for chain");
          let r = Object.assign(Object.assign({}, e), {
              jsonrpc: "2.0",
              id: crypto.randomUUID(),
            }),
            i = await window.fetch(t.rpcUrl, {
              method: "POST",
              body: JSON.stringify(r),
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
                "X-Cbw-Sdk-Version": n.LIB_VERSION,
              },
            });
          return (await i.json()).result;
        }
        function a() {
          return globalThis.coinbaseWalletSigner;
        }
        (t.fetchRPCRequest = i),
          (t.getCoinbaseInjectedSigner = a),
          (t.getCoinbaseInjectedProvider = function ({
            metadata: e,
            preference: t,
          }) {
            var r;
            if ("smartWalletOnly" !== t.options) {
              if (a()) return;
              let t = globalThis.coinbaseWalletExtension;
              if (t) {
                let { appName: n, appLogoUrl: s, appChainIds: i } = e;
                return (
                  null === (r = t.setAppInfo) ||
                    void 0 === r ||
                    r.call(t, n, s, i),
                  t
                );
              }
            }
            let n = (function () {
              var e, t;
              try {
                let r = globalThis;
                return null !== (e = r.ethereum) && void 0 !== e
                  ? e
                  : null === (t = r.top) || void 0 === t
                  ? void 0
                  : t.ethereum;
              } catch (e) {
                return;
              }
            })();
            if (null == n ? void 0 : n.isCoinbaseBrowser) return n;
          }),
          (t.checkErrorForInvalidRequestArgs = function (e) {
            if (!e || "object" != typeof e || Array.isArray(e))
              return s.standardErrors.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: r } = e;
            return "string" != typeof t || 0 === t.length
              ? s.standardErrors.rpc.invalidParams({
                  message: "'args.method' must be a non-empty string.",
                  data: e,
                })
              : void 0 === r ||
                Array.isArray(r) ||
                ("object" == typeof r && null !== r)
              ? void 0
              : s.standardErrors.rpc.invalidParams({
                  message:
                    "'args.params' must be an object or array if provided.",
                  data: e,
                });
          });
      },
      36089: function (e, t, r) {
        var n = r(48764).Buffer;
        let s = r(32518);
        function i(e) {
          if (e.startsWith("int[")) return "int256" + e.slice(3);
          if ("int" === e) return "int256";
          if (e.startsWith("uint[")) return "uint256" + e.slice(4);
          if ("uint" === e) return "uint256";
          if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
          if ("fixed" === e) return "fixed128x128";
          if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
          else if ("ufixed" === e) return "ufixed128x128";
          return e;
        }
        function a(e) {
          return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
        }
        function o(e) {
          var t = /^\D+(\d+)x(\d+)$/.exec(e);
          return [parseInt(t[1], 10), parseInt(t[2], 10)];
        }
        function c(e) {
          var t = e.match(/(.*)\[(.*?)\]$/);
          return t ? ("" === t[2] ? "dynamic" : parseInt(t[2], 10)) : null;
        }
        function l(e) {
          var t = typeof e;
          if ("string" === t || "number" === t) return BigInt(e);
          if ("bigint" === t) return e;
          throw Error("Argument is not a number");
        }
        function d(e, t) {
          if ("address" === e) return d("uint160", l(t));
          if ("bool" === e) return d("uint8", t ? 1 : 0);
          if ("string" === e) return d("bytes", new n(t, "utf8"));
          if ((p = e).lastIndexOf("]") === p.length - 1) {
            if (void 0 === t.length) throw Error("Not an array?");
            if ("dynamic" !== (r = c(e)) && 0 !== r && t.length > r)
              throw Error("Elements exceed array size: " + r);
            for (h in ((u = []),
            (e = e.slice(0, e.lastIndexOf("["))),
            "string" == typeof t && (t = JSON.parse(t)),
            t))
              u.push(d(e, t[h]));
            if ("dynamic" === r) {
              var r,
                i,
                u,
                h,
                p,
                g = d("uint256", t.length);
              u.unshift(g);
            }
            return n.concat(u);
          }
          if ("bytes" === e)
            return (
              (t = new n(t)),
              (u = n.concat([d("uint256", t.length), t])),
              t.length % 32 != 0 &&
                (u = n.concat([u, s.zeros(32 - (t.length % 32))])),
              u
            );
          if (e.startsWith("bytes")) {
            if ((r = a(e)) < 1 || r > 32)
              throw Error("Invalid bytes<N> width: " + r);
            return s.setLengthRight(t, 32);
          } else if (e.startsWith("uint")) {
            if ((r = a(e)) % 8 || r < 8 || r > 256)
              throw Error("Invalid uint<N> width: " + r);
            i = l(t);
            let n = s.bitLengthFromBigInt(i);
            if (n > r)
              throw Error("Supplied uint exceeds width: " + r + " vs " + n);
            if (i < 0) throw Error("Supplied uint is negative");
            return s.bufferBEFromBigInt(i, 32);
          } else if (e.startsWith("int")) {
            if ((r = a(e)) % 8 || r < 8 || r > 256)
              throw Error("Invalid int<N> width: " + r);
            i = l(t);
            let n = s.bitLengthFromBigInt(i);
            if (n > r)
              throw Error("Supplied int exceeds width: " + r + " vs " + n);
            let o = s.twosFromBigInt(i, 256);
            return s.bufferBEFromBigInt(o, 32);
          } else if (e.startsWith("ufixed")) {
            if (((r = o(e)), (i = l(t)) < 0))
              throw Error("Supplied ufixed is negative");
            return d("uint256", i * BigInt(2) ** BigInt(r[1]));
          } else if (e.startsWith("fixed"))
            return (r = o(e)), d("int256", l(t) * BigInt(2) ** BigInt(r[1]));
          throw Error("Unsupported or invalid type: " + e);
        }
        function u(e, t) {
          if (e.length !== t.length)
            throw Error("Number of types are not matching the values");
          for (var r, o, c = [], d = 0; d < e.length; d++) {
            var u = i(e[d]),
              h = t[d];
            if ("bytes" === u) c.push(h);
            else if ("string" === u) c.push(new n(h, "utf8"));
            else if ("bool" === u) c.push(new n(h ? "01" : "00", "hex"));
            else if ("address" === u) c.push(s.setLength(h, 20));
            else if (u.startsWith("bytes")) {
              if ((r = a(u)) < 1 || r > 32)
                throw Error("Invalid bytes<N> width: " + r);
              c.push(s.setLengthRight(h, r));
            } else if (u.startsWith("uint")) {
              if ((r = a(u)) % 8 || r < 8 || r > 256)
                throw Error("Invalid uint<N> width: " + r);
              o = l(h);
              let e = s.bitLengthFromBigInt(o);
              if (e > r)
                throw Error("Supplied uint exceeds width: " + r + " vs " + e);
              c.push(s.bufferBEFromBigInt(o, r / 8));
            } else if (u.startsWith("int")) {
              if ((r = a(u)) % 8 || r < 8 || r > 256)
                throw Error("Invalid int<N> width: " + r);
              o = l(h);
              let e = s.bitLengthFromBigInt(o);
              if (e > r)
                throw Error("Supplied int exceeds width: " + r + " vs " + e);
              let t = s.twosFromBigInt(o, r);
              c.push(s.bufferBEFromBigInt(t, r / 8));
            } else throw Error("Unsupported or invalid type: " + u);
          }
          return n.concat(c);
        }
        e.exports = {
          rawEncode: function (e, t) {
            var r = [],
              s = [],
              a = 32 * e.length;
            for (var o in e) {
              var l = i(e[o]),
                u = d(l, t[o]);
              "string" === l || "bytes" === l || "dynamic" === c(l)
                ? (r.push(d("uint256", a)), s.push(u), (a += u.length))
                : r.push(u);
            }
            return n.concat(r.concat(s));
          },
          solidityPack: u,
          soliditySHA3: function (e, t) {
            return s.keccak(u(e, t));
          },
        };
      },
      14497: function (e, t, r) {
        var n = r(48764).Buffer;
        let s = r(32518),
          i = r(36089),
          a = {
            type: "object",
            properties: {
              types: {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      type: { type: "string" },
                    },
                    required: ["name", "type"],
                  },
                },
              },
              primaryType: { type: "string" },
              domain: { type: "object" },
              message: { type: "object" },
            },
            required: ["types", "primaryType", "domain", "message"],
          },
          o = {
            encodeData(e, t, r, a = !0) {
              let o = ["bytes32"],
                c = [this.hashType(e, r)];
              if (a) {
                let l = (e, t, o) => {
                  if (void 0 !== r[t])
                    return [
                      "bytes32",
                      null == o
                        ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                        : s.keccak(this.encodeData(t, o, r, a)),
                    ];
                  if (void 0 === o)
                    throw Error(`missing value for field ${e} of type ${t}`);
                  if ("bytes" === t) return ["bytes32", s.keccak(o)];
                  if ("string" === t)
                    return (
                      "string" == typeof o && (o = n.from(o, "utf8")),
                      ["bytes32", s.keccak(o)]
                    );
                  if (t.lastIndexOf("]") === t.length - 1) {
                    let r = t.slice(0, t.lastIndexOf("[")),
                      n = o.map((t) => l(e, r, t));
                    return [
                      "bytes32",
                      s.keccak(
                        i.rawEncode(
                          n.map(([e]) => e),
                          n.map(([, e]) => e)
                        )
                      ),
                    ];
                  }
                  return [t, o];
                };
                for (let n of r[e]) {
                  let [e, r] = l(n.name, n.type, t[n.name]);
                  o.push(e), c.push(r);
                }
              } else
                for (let i of r[e]) {
                  let e = t[i.name];
                  if (void 0 !== e) {
                    if ("bytes" === i.type)
                      o.push("bytes32"), (e = s.keccak(e)), c.push(e);
                    else if ("string" === i.type)
                      o.push("bytes32"),
                        "string" == typeof e && (e = n.from(e, "utf8")),
                        (e = s.keccak(e)),
                        c.push(e);
                    else if (void 0 !== r[i.type])
                      o.push("bytes32"),
                        (e = s.keccak(this.encodeData(i.type, e, r, a))),
                        c.push(e);
                    else if (i.type.lastIndexOf("]") === i.type.length - 1)
                      throw Error(
                        "Arrays currently unimplemented in encodeData"
                      );
                    else o.push(i.type), c.push(e);
                  }
                }
              return i.rawEncode(o, c);
            },
            encodeType(e, t) {
              let r = "",
                n = this.findTypeDependencies(e, t).filter((t) => t !== e);
              for (let s of (n = [e].concat(n.sort()))) {
                if (!t[s]) throw Error("No type definition specified: " + s);
                r +=
                  s +
                  "(" +
                  t[s].map(({ name: e, type: t }) => t + " " + e).join(",") +
                  ")";
              }
              return r;
            },
            findTypeDependencies(e, t, r = []) {
              if (((e = e.match(/^\w*/)[0]), r.includes(e) || void 0 === t[e]))
                return r;
              for (let n of (r.push(e), t[e]))
                for (let e of this.findTypeDependencies(n.type, t, r))
                  r.includes(e) || r.push(e);
              return r;
            },
            hashStruct(e, t, r, n = !0) {
              return s.keccak(this.encodeData(e, t, r, n));
            },
            hashType(e, t) {
              return s.keccak(this.encodeType(e, t));
            },
            sanitizeData(e) {
              let t = {};
              for (let r in a.properties) e[r] && (t[r] = e[r]);
              return (
                t.types &&
                  (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
                t
              );
            },
            hash(e, t = !0) {
              let r = this.sanitizeData(e),
                i = [n.from("1901", "hex")];
              return (
                i.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
                "EIP712Domain" !== r.primaryType &&
                  i.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
                s.keccak(n.concat(i))
              );
            },
          };
        e.exports = {
          TYPED_MESSAGE_SCHEMA: a,
          TypedDataUtils: o,
          hashForSignTypedDataLegacy: function (e) {
            return (function (e) {
              let t = Error("Expect argument to be non-empty array");
              if ("object" != typeof e || !e.length) throw t;
              let r = e.map(function (e) {
                  return "bytes" === e.type ? s.toBuffer(e.value) : e.value;
                }),
                n = e.map(function (e) {
                  return e.type;
                }),
                a = e.map(function (e) {
                  if (!e.name) throw t;
                  return e.type + " " + e.name;
                });
              return i.soliditySHA3(
                ["bytes32", "bytes32"],
                [
                  i.soliditySHA3(Array(e.length).fill("string"), a),
                  i.soliditySHA3(n, r),
                ]
              );
            })(e.data);
          },
          hashForSignTypedData_v3: function (e) {
            return o.hash(e.data, !1);
          },
          hashForSignTypedData_v4: function (e) {
            return o.hash(e.data);
          },
        };
      },
      32518: function (e, t, r) {
        var n = r(48764).Buffer;
        let s = r(95811);
        function i(e) {
          return n.allocUnsafe(e).fill(0);
        }
        function a(e, t) {
          let r = e.toString(16);
          r.length % 2 != 0 && (r = "0" + r);
          let s = r.match(/.{1,2}/g).map((e) => parseInt(e, 16));
          for (; s.length < t; ) s.unshift(0);
          return n.from(s);
        }
        function o(e, t, r) {
          let n = i(t);
          return ((e = c(e)), r)
            ? e.length < t
              ? (e.copy(n), n)
              : e.slice(0, t)
            : e.length < t
            ? (e.copy(n, t - e.length), n)
            : e.slice(-t);
        }
        function c(e) {
          if (!n.isBuffer(e)) {
            if (Array.isArray(e)) e = n.from(e);
            else if ("string" == typeof e) {
              var t;
              e = l(e)
                ? n.from((t = d(e)).length % 2 ? "0" + t : t, "hex")
                : n.from(e);
            } else if ("number" == typeof e) e = intToBuffer(e);
            else if (null == e) e = n.allocUnsafe(0);
            else if ("bigint" == typeof e) e = a(e);
            else if (e.toArray) e = n.from(e.toArray());
            else throw Error("invalid type");
          }
          return e;
        }
        function l(e) {
          return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
        }
        function d(e) {
          return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
        }
        e.exports = {
          zeros: i,
          setLength: o,
          setLengthRight: function (e, t) {
            return o(e, t, !0);
          },
          isHexString: l,
          stripHexPrefix: d,
          toBuffer: c,
          bufferToHex: function (e) {
            return "0x" + (e = c(e)).toString("hex");
          },
          keccak: function (e, t) {
            return (
              (e = c(e)),
              t || (t = 256),
              s("keccak" + t)
                .update(e)
                .digest()
            );
          },
          bitLengthFromBigInt: function (e) {
            return e.toString(2).length;
          },
          bufferBEFromBigInt: a,
          twosFromBigInt: function (e, t) {
            return (
              (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
              ((1n << BigInt(t)) - 1n)
            );
          },
        };
      },
      43604: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LIB_VERSION = void 0),
          (t.LIB_VERSION = "4.0.4");
      },
      60801: function (e, t, r) {
        "use strict";
        function n() {
          for (var e, t, r = 0, n = ""; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                var r,
                  n,
                  s = "";
                if ("string" == typeof t || "number" == typeof t) s += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (r = 0; r < t.length; r++)
                      t[r] && (n = e(t[r])) && (s && (s += " "), (s += n));
                  else for (r in t) t[r] && (s && (s += " "), (s += r));
                }
                return s;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        }
        r.r(t),
          r.d(t, {
            clsx: function () {
              return n;
            },
          }),
          (t.default = n);
      },
      6400: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            Component: function () {
              return I;
            },
            Fragment: function () {
              return k;
            },
            cloneElement: function () {
              return H;
            },
            createContext: function () {
              return q;
            },
            createElement: function () {
              return E;
            },
            createRef: function () {
              return C;
            },
            h: function () {
              return E;
            },
            hydrate: function () {
              return W;
            },
            isValidElement: function () {
              return a;
            },
            options: function () {
              return s;
            },
            render: function () {
              return U;
            },
            toChildArray: function () {
              return function e(t, r) {
                return (
                  (r = r || []),
                  null == t ||
                    "boolean" == typeof t ||
                    (b(t)
                      ? t.some(function (t) {
                          e(t, r);
                        })
                      : r.push(t)),
                  r
                );
              };
            },
          });
        var n,
          s,
          i,
          a,
          o,
          c,
          l,
          d,
          u,
          h,
          p,
          g,
          f,
          _ = {},
          m = [],
          y =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
          b = Array.isArray;
        function v(e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        }
        function w(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        function E(e, t, r) {
          var s,
            i,
            a,
            o = {};
          for (a in t)
            "key" == a ? (s = t[a]) : "ref" == a ? (i = t[a]) : (o[a] = t[a]);
          if (
            (arguments.length > 2 &&
              (o.children = arguments.length > 3 ? n.call(arguments, 2) : r),
            "function" == typeof e && null != e.defaultProps)
          )
            for (a in e.defaultProps)
              void 0 === o[a] && (o[a] = e.defaultProps[a]);
          return S(e, o, s, i, null);
        }
        function S(e, t, r, n, a) {
          var o = {
            type: e,
            props: t,
            key: r,
            ref: n,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: null == a ? ++i : a,
            __i: -1,
            __u: 0,
          };
          return null == a && null != s.vnode && s.vnode(o), o;
        }
        function C() {
          return { current: null };
        }
        function k(e) {
          return e.children;
        }
        function I(e, t) {
          (this.props = e), (this.context = t);
        }
        function M(e, t) {
          if (null == t) return e.__ ? M(e.__, e.__i + 1) : null;
          for (var r; t < e.__k.length; t++)
            if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
          return "function" == typeof e.type ? M(e) : null;
        }
        function x(e) {
          ((!e.__d && (e.__d = !0) && o.push(e) && !L.__r++) ||
            c !== s.debounceRendering) &&
            ((c = s.debounceRendering) || l)(L);
        }
        function L() {
          for (var e, t, r, n, i, a, c = 1; o.length; )
            o.length > c && o.sort(d),
              (e = o.shift()),
              (c = o.length),
              e.__d &&
                ((t = void 0),
                (n = (r = e.__v).__e),
                (i = []),
                (a = []),
                e.__P &&
                  (((t = v({}, r)).__v = r.__v + 1),
                  s.vnode && s.vnode(t),
                  j(
                    e.__P,
                    t,
                    r,
                    e.__n,
                    e.__P.namespaceURI,
                    32 & r.__u ? [n] : null,
                    i,
                    null == n ? M(r) : n,
                    !!(32 & r.__u),
                    a
                  ),
                  (t.__v = r.__v),
                  (t.__.__k[t.__i] = t),
                  D(i, t, a),
                  t.__e != n &&
                    (function e(t) {
                      var r, n;
                      if (null != (t = t.__) && null != t.__c) {
                        for (
                          t.__e = t.__c.base = null, r = 0;
                          r < t.__k.length;
                          r++
                        )
                          if (null != (n = t.__k[r]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break;
                          }
                        return e(t);
                      }
                    })(t)));
          L.__r = 0;
        }
        function A(e, t, r, n, i, a, o, c, l, d, u) {
          var h,
            p,
            g,
            f,
            y,
            v,
            E = (n && n.__k) || m,
            C = t.length;
          for (
            l = (function (e, t, r, n, i) {
              var a,
                o,
                c,
                l,
                d,
                u = r.length,
                h = u,
                p = 0;
              for (e.__k = Array(i), a = 0; a < i; a++)
                null != (o = t[a]) &&
                "boolean" != typeof o &&
                "function" != typeof o
                  ? ((l = a + p),
                    ((o = e.__k[a] =
                      "string" == typeof o ||
                      "number" == typeof o ||
                      "bigint" == typeof o ||
                      o.constructor == String
                        ? S(null, o, null, null, null)
                        : b(o)
                        ? S(k, { children: o }, null, null, null)
                        : void 0 === o.constructor && o.__b > 0
                        ? S(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                        : o).__ = e),
                    (o.__b = e.__b + 1),
                    (c = null),
                    -1 !==
                      (d = o.__i =
                        (function (e, t, r, n) {
                          var s,
                            i,
                            a = e.key,
                            o = e.type,
                            c = t[r];
                          if (
                            (null === c && null == e.key) ||
                            (c &&
                              a == c.key &&
                              o === c.type &&
                              0 == (2 & c.__u))
                          )
                            return r;
                          if (n > (null != c && 0 == (2 & c.__u) ? 1 : 0))
                            for (
                              s = r - 1, i = r + 1;
                              s >= 0 || i < t.length;

                            ) {
                              if (s >= 0) {
                                if (
                                  (c = t[s]) &&
                                  0 == (2 & c.__u) &&
                                  a == c.key &&
                                  o === c.type
                                )
                                  return s;
                                s--;
                              }
                              if (i < t.length) {
                                if (
                                  (c = t[i]) &&
                                  0 == (2 & c.__u) &&
                                  a == c.key &&
                                  o === c.type
                                )
                                  return i;
                                i++;
                              }
                            }
                          return -1;
                        })(o, r, l, h)) && (h--, (c = r[d]) && (c.__u |= 2)),
                    null == c || null === c.__v
                      ? (-1 == d && (i > u ? p-- : i < u && p++),
                        "function" != typeof o.type && (o.__u |= 4))
                      : d != l &&
                        (d == l - 1
                          ? p--
                          : d == l + 1
                          ? p++
                          : (d > l ? p-- : p++, (o.__u |= 4))))
                  : (e.__k[a] = null);
              if (h)
                for (a = 0; a < u; a++)
                  null != (c = r[a]) &&
                    0 == (2 & c.__u) &&
                    (c.__e == n && (n = M(c)),
                    (function e(t, r, n) {
                      var i, a;
                      if (
                        (s.unmount && s.unmount(t),
                        (i = t.ref) &&
                          ((i.current && i.current !== t.__e) || O(i, null, r)),
                        null != (i = t.__c))
                      ) {
                        if (i.componentWillUnmount)
                          try {
                            i.componentWillUnmount();
                          } catch (e) {
                            s.__e(e, r);
                          }
                        i.base = i.__P = null;
                      }
                      if ((i = t.__k))
                        for (a = 0; a < i.length; a++)
                          i[a] && e(i[a], r, n || "function" != typeof t.type);
                      n || w(t.__e), (t.__c = t.__ = t.__e = void 0);
                    })(c, c));
              return n;
            })(r, t, E, l, C),
              h = 0;
            h < C;
            h++
          )
            null != (g = r.__k[h]) &&
              ((p = -1 === g.__i ? _ : E[g.__i] || _),
              (g.__i = h),
              (v = j(e, g, p, i, a, o, c, l, d, u)),
              (f = g.__e),
              g.ref &&
                p.ref != g.ref &&
                (p.ref && O(p.ref, null, g), u.push(g.ref, g.__c || f, g)),
              null == y && null != f && (y = f),
              4 & g.__u || p.__k === g.__k
                ? (l = (function e(t, r, n) {
                    var s, i;
                    if ("function" == typeof t.type) {
                      for (s = t.__k, i = 0; s && i < s.length; i++)
                        s[i] && ((s[i].__ = t), (r = e(s[i], r, n)));
                      return r;
                    }
                    t.__e != r &&
                      (r && t.type && !n.contains(r) && (r = M(t)),
                      n.insertBefore(t.__e, r || null),
                      (r = t.__e));
                    do r = r && r.nextSibling;
                    while (null != r && 8 == r.nodeType);
                    return r;
                  })(g, l, e))
                : "function" == typeof g.type && void 0 !== v
                ? (l = v)
                : f && (l = f.nextSibling),
              (g.__u &= -7));
          return (r.__e = y), l;
        }
        function R(e, t, r) {
          "-" == t[0]
            ? e.setProperty(t, null == r ? "" : r)
            : (e[t] =
                null == r
                  ? ""
                  : "number" != typeof r || y.test(t)
                  ? r
                  : r + "px");
        }
        function P(e, t, r, n, s) {
          var i;
          e: if ("style" == t) {
            if ("string" == typeof r) e.style.cssText = r;
            else {
              if (("string" == typeof n && (e.style.cssText = n = ""), n))
                for (t in n) (r && t in r) || R(e.style, t, "");
              if (r) for (t in r) (n && r[t] === n[t]) || R(e.style, t, r[t]);
            }
          } else if ("o" == t[0] && "n" == t[1])
            (i = t != (t = t.replace(u, "$1"))),
              (t =
                t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t
                  ? t.toLowerCase().slice(2)
                  : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + i] = r),
              r
                ? n
                  ? (r.t = n.t)
                  : ((r.t = h), e.addEventListener(t, i ? g : p, i))
                : e.removeEventListener(t, i ? g : p, i);
          else {
            if ("http://www.w3.org/2000/svg" == s)
              t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "width" != t &&
              "height" != t &&
              "href" != t &&
              "list" != t &&
              "form" != t &&
              "tabIndex" != t &&
              "download" != t &&
              "rowSpan" != t &&
              "colSpan" != t &&
              "role" != t &&
              "popover" != t &&
              t in e
            )
              try {
                e[t] = null == r ? "" : r;
                break e;
              } catch (e) {}
            "function" == typeof r ||
              (null == r || (!1 === r && "-" != t[4])
                ? e.removeAttribute(t)
                : e.setAttribute(t, "popover" == t && 1 == r ? "" : r));
          }
        }
        function N(e) {
          return function (t) {
            if (this.l) {
              var r = this.l[t.type + e];
              if (null == t.u) t.u = h++;
              else if (t.u < r.t) return;
              return r(s.event ? s.event(t) : t);
            }
          };
        }
        function j(e, t, r, i, a, o, c, l, d, u) {
          var h,
            p,
            g,
            f,
            m,
            y,
            E,
            S,
            C,
            x,
            L,
            R,
            N,
            j,
            D,
            O,
            U,
            W = t.type;
          if (void 0 !== t.constructor) return null;
          128 & r.__u && ((d = !!(32 & r.__u)), (o = [(l = t.__e = r.__e)])),
            (h = s.__b) && h(t);
          e: if ("function" == typeof W)
            try {
              if (
                ((S = t.props),
                (C = "prototype" in W && W.prototype.render),
                (x = (h = W.contextType) && i[h.__c]),
                (L = h ? (x ? x.props.value : h.__) : i),
                r.__c
                  ? (E = (p = t.__c = r.__c).__ = p.__E)
                  : (C
                      ? (t.__c = p = new W(S, L))
                      : ((t.__c = p = new I(S, L)),
                        (p.constructor = W),
                        (p.render = T)),
                    x && x.sub(p),
                    (p.props = S),
                    p.state || (p.state = {}),
                    (p.context = L),
                    (p.__n = i),
                    (g = p.__d = !0),
                    (p.__h = []),
                    (p._sb = [])),
                C && null == p.__s && (p.__s = p.state),
                C &&
                  null != W.getDerivedStateFromProps &&
                  (p.__s == p.state && (p.__s = v({}, p.__s)),
                  v(p.__s, W.getDerivedStateFromProps(S, p.__s))),
                (f = p.props),
                (m = p.state),
                (p.__v = t),
                g)
              )
                C &&
                  null == W.getDerivedStateFromProps &&
                  null != p.componentWillMount &&
                  p.componentWillMount(),
                  C &&
                    null != p.componentDidMount &&
                    p.__h.push(p.componentDidMount);
              else {
                if (
                  (C &&
                    null == W.getDerivedStateFromProps &&
                    S !== f &&
                    null != p.componentWillReceiveProps &&
                    p.componentWillReceiveProps(S, L),
                  !p.__e &&
                    ((null != p.shouldComponentUpdate &&
                      !1 === p.shouldComponentUpdate(S, p.__s, L)) ||
                      t.__v == r.__v))
                ) {
                  for (
                    t.__v != r.__v &&
                      ((p.props = S), (p.state = p.__s), (p.__d = !1)),
                      t.__e = r.__e,
                      t.__k = r.__k,
                      t.__k.some(function (e) {
                        e && (e.__ = t);
                      }),
                      R = 0;
                    R < p._sb.length;
                    R++
                  )
                    p.__h.push(p._sb[R]);
                  (p._sb = []), p.__h.length && c.push(p);
                  break e;
                }
                null != p.componentWillUpdate &&
                  p.componentWillUpdate(S, p.__s, L),
                  C &&
                    null != p.componentDidUpdate &&
                    p.__h.push(function () {
                      p.componentDidUpdate(f, m, y);
                    });
              }
              if (
                ((p.context = L),
                (p.props = S),
                (p.__P = e),
                (p.__e = !1),
                (N = s.__r),
                (j = 0),
                C)
              ) {
                for (
                  p.state = p.__s,
                    p.__d = !1,
                    N && N(t),
                    h = p.render(p.props, p.state, p.context),
                    D = 0;
                  D < p._sb.length;
                  D++
                )
                  p.__h.push(p._sb[D]);
                p._sb = [];
              } else
                do
                  (p.__d = !1),
                    N && N(t),
                    (h = p.render(p.props, p.state, p.context)),
                    (p.state = p.__s);
                while (p.__d && ++j < 25);
              (p.state = p.__s),
                null != p.getChildContext &&
                  (i = v(v({}, i), p.getChildContext())),
                C &&
                  !g &&
                  null != p.getSnapshotBeforeUpdate &&
                  (y = p.getSnapshotBeforeUpdate(f, m)),
                (O = h),
                null != h &&
                  h.type === k &&
                  null == h.key &&
                  (O = (function e(t) {
                    return "object" != typeof t || null == t
                      ? t
                      : b(t)
                      ? t.map(e)
                      : v({}, t);
                  })(h.props.children)),
                (l = A(e, b(O) ? O : [O], t, r, i, a, o, c, l, d, u)),
                (p.base = t.__e),
                (t.__u &= -161),
                p.__h.length && c.push(p),
                E && (p.__E = p.__ = null);
            } catch (e) {
              if (((t.__v = null), d || null != o)) {
                if (e.then) {
                  for (
                    t.__u |= d ? 160 : 128;
                    l && 8 == l.nodeType && l.nextSibling;

                  )
                    l = l.nextSibling;
                  (o[o.indexOf(l)] = null), (t.__e = l);
                } else for (U = o.length; U--; ) w(o[U]);
              } else (t.__e = r.__e), (t.__k = r.__k);
              s.__e(e, t, r);
            }
          else
            null == o && t.__v == r.__v
              ? ((t.__k = r.__k), (t.__e = r.__e))
              : (l = t.__e =
                  (function (e, t, r, i, a, o, c, l, d) {
                    var u,
                      h,
                      p,
                      g,
                      f,
                      m,
                      y,
                      v = r.props,
                      E = t.props,
                      S = t.type;
                    if (
                      ("svg" == S
                        ? (a = "http://www.w3.org/2000/svg")
                        : "math" == S
                        ? (a = "http://www.w3.org/1998/Math/MathML")
                        : a || (a = "http://www.w3.org/1999/xhtml"),
                      null != o)
                    ) {
                      for (u = 0; u < o.length; u++)
                        if (
                          (f = o[u]) &&
                          "setAttribute" in f == !!S &&
                          (S ? f.localName == S : 3 == f.nodeType)
                        ) {
                          (e = f), (o[u] = null);
                          break;
                        }
                    }
                    if (null == e) {
                      if (null == S) return document.createTextNode(E);
                      (e = document.createElementNS(a, S, E.is && E)),
                        l && (s.__m && s.__m(t, o), (l = !1)),
                        (o = null);
                    }
                    if (null === S)
                      v === E || (l && e.data === E) || (e.data = E);
                    else {
                      if (
                        ((o = o && n.call(e.childNodes)),
                        (v = r.props || _),
                        !l && null != o)
                      )
                        for (v = {}, u = 0; u < e.attributes.length; u++)
                          v[(f = e.attributes[u]).name] = f.value;
                      for (u in v)
                        if (((f = v[u]), "children" == u));
                        else if ("dangerouslySetInnerHTML" == u) p = f;
                        else if (!(u in E)) {
                          if (
                            ("value" == u && "defaultValue" in E) ||
                            ("checked" == u && "defaultChecked" in E)
                          )
                            continue;
                          P(e, u, null, f, a);
                        }
                      for (u in E)
                        (f = E[u]),
                          "children" == u
                            ? (g = f)
                            : "dangerouslySetInnerHTML" == u
                            ? (h = f)
                            : "value" == u
                            ? (m = f)
                            : "checked" == u
                            ? (y = f)
                            : (l && "function" != typeof f) ||
                              v[u] === f ||
                              P(e, u, f, v[u], a);
                      if (h)
                        l ||
                          (p &&
                            (h.__html === p.__html ||
                              h.__html === e.innerHTML)) ||
                          (e.innerHTML = h.__html),
                          (t.__k = []);
                      else if (
                        (p && (e.innerHTML = ""),
                        A(
                          "template" === t.type ? e.content : e,
                          b(g) ? g : [g],
                          t,
                          r,
                          i,
                          "foreignObject" == S
                            ? "http://www.w3.org/1999/xhtml"
                            : a,
                          o,
                          c,
                          o ? o[0] : r.__k && M(r, 0),
                          l,
                          d
                        ),
                        null != o)
                      )
                        for (u = o.length; u--; ) w(o[u]);
                      l ||
                        ((u = "value"),
                        "progress" == S && null == m
                          ? e.removeAttribute("value")
                          : void 0 === m ||
                            (m === e[u] &&
                              ("progress" != S || m) &&
                              ("option" != S || m === v[u])) ||
                            P(e, u, m, v[u], a),
                        (u = "checked"),
                        void 0 !== y && y !== e[u] && P(e, u, y, v[u], a));
                    }
                    return e;
                  })(r.__e, t, r, i, a, o, c, d, u));
          return (h = s.diffed) && h(t), 128 & t.__u ? void 0 : l;
        }
        function D(e, t, r) {
          for (var n = 0; n < r.length; n++) O(r[n], r[++n], r[++n]);
          s.__c && s.__c(t, e),
            e.some(function (t) {
              try {
                (e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t);
                  });
              } catch (e) {
                s.__e(e, t.__v);
              }
            });
        }
        function O(e, t, r) {
          try {
            if ("function" == typeof e) {
              var n = "function" == typeof e.__u;
              n && e.__u(), (n && null == t) || (e.__u = e(t));
            } else e.current = t;
          } catch (e) {
            s.__e(e, r);
          }
        }
        function T(e, t, r) {
          return this.constructor(e, r);
        }
        function U(e, t, r) {
          var i, a, o, c;
          t == document && (t = document.documentElement),
            s.__ && s.__(e, t),
            (a = (i = "function" == typeof r) ? null : (r && r.__k) || t.__k),
            (o = []),
            (c = []),
            j(
              t,
              (e = ((!i && r) || t).__k = E(k, null, [e])),
              a || _,
              _,
              t.namespaceURI,
              !i && r
                ? [r]
                : a
                ? null
                : t.firstChild
                ? n.call(t.childNodes)
                : null,
              o,
              !i && r ? r : a ? a.__e : t.firstChild,
              i,
              c
            ),
            D(o, e, c);
        }
        function W(e, t) {
          U(e, t, W);
        }
        function H(e, t, r) {
          var s,
            i,
            a,
            o,
            c = v({}, e.props);
          for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
          t))
            "key" == a
              ? (s = t[a])
              : "ref" == a
              ? (i = t[a])
              : (c[a] = void 0 === t[a] && void 0 !== o ? o[a] : t[a]);
          return (
            arguments.length > 2 &&
              (c.children = arguments.length > 3 ? n.call(arguments, 2) : r),
            S(e.type, c, s || e.key, i || e.ref, null)
          );
        }
        function q(e) {
          function t(e) {
            var r, n;
            return (
              this.getChildContext ||
                ((r = new Set()),
                ((n = {})[t.__c] = this),
                (this.getChildContext = function () {
                  return n;
                }),
                (this.componentWillUnmount = function () {
                  r = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    r.forEach(function (e) {
                      (e.__e = !0), x(e);
                    });
                }),
                (this.sub = function (e) {
                  r.add(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    r && r.delete(e), t && t.call(e);
                  };
                })),
              e.children
            );
          }
          return (
            (t.__c = "__cC" + f++),
            (t.__ = e),
            (t.Provider =
              t.__l =
              (t.Consumer = function (e, t) {
                return e.children(t);
              }).contextType =
                t),
            t
          );
        }
        (n = m.slice),
          (s = {
            __e: function (e, t, r, n) {
              for (var s, i, a; (t = t.__); )
                if ((s = t.__c) && !s.__)
                  try {
                    if (
                      ((i = s.constructor) &&
                        null != i.getDerivedStateFromError &&
                        (s.setState(i.getDerivedStateFromError(e)),
                        (a = s.__d)),
                      null != s.componentDidCatch &&
                        (s.componentDidCatch(e, n || {}), (a = s.__d)),
                      a)
                    )
                      return (s.__E = s);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (i = 0),
          (a = function (e) {
            return null != e && null == e.constructor;
          }),
          (I.prototype.setState = function (e, t) {
            var r;
            (r =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = v({}, this.state))),
              "function" == typeof e && (e = e(v({}, r), this.props)),
              e && v(r, e),
              null != e && this.__v && (t && this._sb.push(t), x(this));
          }),
          (I.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), x(this));
          }),
          (I.prototype.render = k),
          (o = []),
          (l =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (d = function (e, t) {
            return e.__v.__b - t.__v.__b;
          }),
          (L.__r = 0),
          (u = /(PointerCapture)$|Capture$/i),
          (h = 0),
          (p = N(!1)),
          (g = N(!0)),
          (f = 0);
      },
      30396: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            useCallback: function () {
              return k;
            },
            useContext: function () {
              return I;
            },
            useDebugValue: function () {
              return M;
            },
            useEffect: function () {
              return v;
            },
            useErrorBoundary: function () {
              return x;
            },
            useId: function () {
              return L;
            },
            useImperativeHandle: function () {
              return S;
            },
            useLayoutEffect: function () {
              return w;
            },
            useMemo: function () {
              return C;
            },
            useReducer: function () {
              return b;
            },
            useRef: function () {
              return E;
            },
            useState: function () {
              return y;
            },
          });
        var n,
          s,
          i,
          a,
          o = r(6400),
          c = 0,
          l = [],
          d = o.options,
          u = d.__b,
          h = d.__r,
          p = d.diffed,
          g = d.__c,
          f = d.unmount,
          _ = d.__;
        function m(e, t) {
          d.__h && d.__h(s, e, c || t), (c = 0);
          var r = s.__H || (s.__H = { __: [], __h: [] });
          return e >= r.__.length && r.__.push({}), r.__[e];
        }
        function y(e) {
          return (c = 1), b(D, e);
        }
        function b(e, t, r) {
          var i = m(n++, 2);
          if (
            ((i.t = e),
            !i.__c &&
              ((i.__ = [
                r ? r(t) : D(void 0, t),
                function (e) {
                  var t = i.__N ? i.__N[0] : i.__[0],
                    r = i.t(t, e);
                  t !== r && ((i.__N = [r, i.__[1]]), i.__c.setState({}));
                },
              ]),
              (i.__c = s),
              !s.__f))
          ) {
            var a = function (e, t, r) {
              if (!i.__c.__H) return !0;
              var n = i.__c.__H.__.filter(function (e) {
                return !!e.__c;
              });
              if (
                n.every(function (e) {
                  return !e.__N;
                })
              )
                return !o || o.call(this, e, t, r);
              var s = i.__c.props !== e;
              return (
                n.forEach(function (e) {
                  if (e.__N) {
                    var t = e.__[0];
                    (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                  }
                }),
                (o && o.call(this, e, t, r)) || s
              );
            };
            s.__f = !0;
            var o = s.shouldComponentUpdate,
              c = s.componentWillUpdate;
            (s.componentWillUpdate = function (e, t, r) {
              if (this.__e) {
                var n = o;
                (o = void 0), a(e, t, r), (o = n);
              }
              c && c.call(this, e, t, r);
            }),
              (s.shouldComponentUpdate = a);
          }
          return i.__N || i.__;
        }
        function v(e, t) {
          var r = m(n++, 3);
          !d.__s && j(r.__H, t) && ((r.__ = e), (r.u = t), s.__H.__h.push(r));
        }
        function w(e, t) {
          var r = m(n++, 4);
          !d.__s && j(r.__H, t) && ((r.__ = e), (r.u = t), s.__h.push(r));
        }
        function E(e) {
          return (
            (c = 5),
            C(function () {
              return { current: e };
            }, [])
          );
        }
        function S(e, t, r) {
          (c = 6),
            w(
              function () {
                if ("function" == typeof e) {
                  var r = e(t());
                  return function () {
                    e(null), r && "function" == typeof r && r();
                  };
                }
                if (e)
                  return (
                    (e.current = t()),
                    function () {
                      return (e.current = null);
                    }
                  );
              },
              null == r ? r : r.concat(e)
            );
        }
        function C(e, t) {
          var r = m(n++, 7);
          return j(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__;
        }
        function k(e, t) {
          return (
            (c = 8),
            C(function () {
              return e;
            }, t)
          );
        }
        function I(e) {
          var t = s.context[e.__c],
            r = m(n++, 9);
          return (
            (r.c = e),
            t ? (null == r.__ && ((r.__ = !0), t.sub(s)), t.props.value) : e.__
          );
        }
        function M(e, t) {
          d.useDebugValue && d.useDebugValue(t ? t(e) : e);
        }
        function x(e) {
          var t = m(n++, 10),
            r = y();
          return (
            (t.__ = e),
            s.componentDidCatch ||
              (s.componentDidCatch = function (e, n) {
                t.__ && t.__(e, n), r[1](e);
              }),
            [
              r[0],
              function () {
                r[1](void 0);
              },
            ]
          );
        }
        function L() {
          var e = m(n++, 11);
          if (!e.__) {
            for (var t = s.__v; null !== t && !t.__m && null !== t.__; )
              t = t.__;
            var r = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + r[0] + "-" + r[1]++;
          }
          return e.__;
        }
        function A() {
          for (var e; (e = l.shift()); )
            if (e.__P && e.__H)
              try {
                e.__H.__h.forEach(P), e.__H.__h.forEach(N), (e.__H.__h = []);
              } catch (t) {
                (e.__H.__h = []), d.__e(t, e.__v);
              }
        }
        (d.__b = function (e) {
          (s = null), u && u(e);
        }),
          (d.__ = function (e, t) {
            e && t.__k && t.__k.__m && (e.__m = t.__k.__m), _ && _(e, t);
          }),
          (d.__r = function (e) {
            h && h(e), (n = 0);
            var t = (s = e.__c).__H;
            t &&
              (i === s
                ? ((t.__h = []),
                  (s.__h = []),
                  t.__.forEach(function (e) {
                    e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                  }))
                : (t.__h.forEach(P), t.__h.forEach(N), (t.__h = []), (n = 0))),
              (i = s);
          }),
          (d.diffed = function (e) {
            p && p(e);
            var t = e.__c;
            t &&
              t.__H &&
              (t.__H.__h.length &&
                ((1 !== l.push(t) && a === d.requestAnimationFrame) ||
                  (
                    (a = d.requestAnimationFrame) ||
                    function (e) {
                      var t,
                        r = function () {
                          clearTimeout(n),
                            R && cancelAnimationFrame(t),
                            setTimeout(e);
                        },
                        n = setTimeout(r, 100);
                      R && (t = requestAnimationFrame(r));
                    }
                  )(A)),
              t.__H.__.forEach(function (e) {
                e.u && (e.__H = e.u), (e.u = void 0);
              })),
              (i = s = null);
          }),
          (d.__c = function (e, t) {
            t.some(function (e) {
              try {
                e.__h.forEach(P),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || N(e);
                  }));
              } catch (r) {
                t.some(function (e) {
                  e.__h && (e.__h = []);
                }),
                  (t = []),
                  d.__e(r, e.__v);
              }
            }),
              g && g(e, t);
          }),
          (d.unmount = function (e) {
            f && f(e);
            var t,
              r = e.__c;
            r &&
              r.__H &&
              (r.__H.__.forEach(function (e) {
                try {
                  P(e);
                } catch (e) {
                  t = e;
                }
              }),
              (r.__H = void 0),
              t && d.__e(t, r.__v));
          });
        var R = "function" == typeof requestAnimationFrame;
        function P(e) {
          var t = s,
            r = e.__c;
          "function" == typeof r && ((e.__c = void 0), r()), (s = t);
        }
        function N(e) {
          var t = s;
          (e.__c = e.__()), (s = t);
        }
        function j(e, t) {
          return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, r) {
              return t !== e[r];
            })
          );
        }
        function D(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
      },
    },
  ]);
