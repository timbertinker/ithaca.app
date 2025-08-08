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
      (e._sentryDebugIds[t] = "04211832-2263-43e9-812d-b886a51e6080"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-04211832-2263-43e9-812d-b886a51e6080"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6149],
    {
      77191: function (e, t, n) {
        let i = n(78247);
        e.exports = i(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        );
      },
      78247: function (e) {
        "use strict";
        e.exports = function (e) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var t = new Uint8Array(256), n = 0; n < t.length; n++)
            t[n] = 255;
          for (var i = 0; i < e.length; i++) {
            var r = e.charAt(i),
              s = r.charCodeAt(0);
            if (255 !== t[s]) throw TypeError(r + " is ambiguous");
            t[s] = i;
          }
          var a = e.length,
            o = e.charAt(0),
            c = Math.log(a) / Math.log(256),
            l = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            for (var n = 0, i = 0, r = 0; e[n] === o; ) i++, n++;
            for (
              var s = ((e.length - n) * c + 1) >>> 0, l = new Uint8Array(s);
              e[n];

            ) {
              var u = e.charCodeAt(n);
              if (u > 255) return;
              var d = t[u];
              if (255 === d) return;
              for (
                var h = 0, f = s - 1;
                (0 !== d || h < r) && -1 !== f;
                f--, h++
              )
                (d += (a * l[f]) >>> 0),
                  (l[f] = d % 256 >>> 0),
                  (d = (d / 256) >>> 0);
              if (0 !== d) throw Error("Non-zero carry");
              (r = h), n++;
            }
            for (var y = s - r; y !== s && 0 === l[y]; ) y++;
            for (var w = new Uint8Array(i + (s - y)), g = i; y !== s; )
              w[g++] = l[y++];
            return w;
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var n = 0, i = 0, r = 0, s = t.length;
                r !== s && 0 === t[r];

              )
                r++, n++;
              for (
                var c = ((s - r) * l + 1) >>> 0, u = new Uint8Array(c);
                r !== s;

              ) {
                for (
                  var d = t[r], h = 0, f = c - 1;
                  (0 !== d || h < i) && -1 !== f;
                  f--, h++
                )
                  (d += (256 * u[f]) >>> 0),
                    (u[f] = d % a >>> 0),
                    (d = (d / a) >>> 0);
                if (0 !== d) throw Error("Non-zero carry");
                (i = h), r++;
              }
              for (var y = c - i; y !== c && 0 === u[y]; ) y++;
              for (var w = o.repeat(n); y < c; ++y) w += e.charAt(u[y]);
              return w;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var t = u(e);
              if (t) return t;
              throw Error("Non-base" + a + " character");
            },
          };
        };
      },
      96714: function () {},
      98800: function (e, t, n) {
        "use strict";
        n.d(t, {
          eC: function () {
            return o;
          },
          qz: function () {
            return c;
          },
        });
        var i = n(69607),
          r = n(35615),
          s = n(63753);
        class a extends i.mI {
          async sendTransaction(e, t, n = {}) {
            let i = !0;
            try {
              if ((0, s.W)(e)) {
                if (!this.supportedTransactionVersions)
                  throw new r.IW(
                    "Sending versioned transactions isn't supported by this wallet"
                  );
                if (!this.supportedTransactionVersions.has(e.version))
                  throw new r.IW(
                    `Sending transaction version ${e.version} isn't supported by this wallet`
                  );
                try {
                  let i = (e = await this.signTransaction(e)).serialize();
                  return await t.sendRawTransaction(i, n);
                } catch (e) {
                  if (e instanceof r.PY) throw ((i = !1), e);
                  throw new r.IW(e?.message, e);
                }
              } else
                try {
                  let { signers: i, ...r } = n;
                  (e = await this.prepareTransaction(e, t, r)),
                    i?.length && e.partialSign(...i);
                  let s = (e = await this.signTransaction(e)).serialize();
                  return await t.sendRawTransaction(s, r);
                } catch (e) {
                  if (e instanceof r.PY) throw ((i = !1), e);
                  throw new r.IW(e?.message, e);
                }
            } catch (e) {
              throw (i && this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            for (let t of e)
              if ((0, s.W)(t)) {
                if (!this.supportedTransactionVersions)
                  throw new r.PY(
                    "Signing versioned transactions isn't supported by this wallet"
                  );
                if (!this.supportedTransactionVersions.has(t.version))
                  throw new r.PY(
                    `Signing transaction version ${t.version} isn't supported by this wallet`
                  );
              }
            let t = [];
            for (let n of e) t.push(await this.signTransaction(n));
            return t;
          }
        }
        class o extends a {}
        class c extends o {}
      },
      63753: function (e, t, n) {
        "use strict";
        function i(e) {
          return "version" in e;
        }
        n.d(t, {
          W: function () {
            return i;
          },
        });
      },
      16247: function (e, t, n) {
        "use strict";
        var i, r;
        n.d(t, {
          Q: function () {
            return i;
          },
        }),
          ((r = i || (i = {})).Mainnet = "mainnet-beta"),
          (r.Testnet = "testnet"),
          (r.Devnet = "devnet");
      },
      45145: function (e, t, n) {
        "use strict";
        n.d(t, {
          O: function () {
            return c;
          },
        });
        var i = n(98800),
          r = n(69607),
          s = n(35615),
          a = n(63753),
          o = n(72809);
        class c extends i.eC {
          constructor(e = {}) {
            super(),
              (this.name = "Phantom"),
              (this.url = "https://phantom.app"),
              (this.icon =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg=="),
              (this.supportedTransactionVersions = new Set(["legacy", 0])),
              (this._readyState =
                "undefined" == typeof window || "undefined" == typeof document
                  ? r.i1.Unsupported
                  : r.i1.NotDetected),
              (this._disconnected = () => {
                let e = this._wallet;
                e &&
                  (e.off("disconnect", this._disconnected),
                  e.off("accountChanged", this._accountChanged),
                  (this._wallet = null),
                  (this._publicKey = null),
                  this.emit("error", new s.at()),
                  this.emit("disconnect"));
              }),
              (this._accountChanged = (e) => {
                let t = this._publicKey;
                if (t) {
                  try {
                    e = new o.PublicKey(e.toBytes());
                  } catch (e) {
                    this.emit("error", new s.Nx(e?.message, e));
                    return;
                  }
                  t.equals(e) ||
                    ((this._publicKey = e), this.emit("connect", e));
                }
              }),
              (this._connecting = !1),
              (this._wallet = null),
              (this._publicKey = null),
              this._readyState !== r.i1.Unsupported &&
                ((0, r.H)()
                  ? ((this._readyState = r.i1.Loadable),
                    this.emit("readyStateChange", this._readyState))
                  : (0, r.su)(
                      () =>
                        !!(
                          window.phantom?.solana?.isPhantom ||
                          window.solana?.isPhantom
                        ) &&
                        ((this._readyState = r.i1.Installed),
                        this.emit("readyStateChange", this._readyState),
                        !0)
                    ));
          }
          get publicKey() {
            return this._publicKey;
          }
          get connecting() {
            return this._connecting;
          }
          get readyState() {
            return this._readyState;
          }
          async autoConnect() {
            this.readyState === r.i1.Installed && (await this.connect());
          }
          async connect() {
            try {
              let e;
              if (this.connected || this.connecting) return;
              if (this.readyState === r.i1.Loadable) {
                let e = encodeURIComponent(window.location.href),
                  t = encodeURIComponent(window.location.origin);
                window.location.href = `https://phantom.app/ul/browse/${e}?ref=${t}`;
                return;
              }
              if (this.readyState !== r.i1.Installed) throw new s.OZ();
              this._connecting = !0;
              let t = window.phantom?.solana || window.solana;
              if (!t.isConnected)
                try {
                  await t.connect();
                } catch (e) {
                  throw new s.$w(e?.message, e);
                }
              if (!t.publicKey) throw new s.cO();
              try {
                e = new o.PublicKey(t.publicKey.toBytes());
              } catch (e) {
                throw new s.Nx(e?.message, e);
              }
              t.on("disconnect", this._disconnected),
                t.on("accountChanged", this._accountChanged),
                (this._wallet = t),
                (this._publicKey = e),
                this.emit("connect", e);
            } catch (e) {
              throw (this.emit("error", e), e);
            } finally {
              this._connecting = !1;
            }
          }
          async disconnect() {
            let e = this._wallet;
            if (e) {
              e.off("disconnect", this._disconnected),
                e.off("accountChanged", this._accountChanged),
                (this._wallet = null),
                (this._publicKey = null);
              try {
                await e.disconnect();
              } catch (e) {
                this.emit("error", new s.UG(e?.message, e));
              }
            }
            this.emit("disconnect");
          }
          async sendTransaction(e, t, n = {}) {
            try {
              let i = this._wallet;
              if (!i) throw new s.oS();
              try {
                let { signers: r, ...s } = n;
                (0, a.W)(e)
                  ? r?.length && e.sign(r)
                  : ((e = await this.prepareTransaction(e, t, s)),
                    r?.length && e.partialSign(...r)),
                  (s.preflightCommitment =
                    s.preflightCommitment || t.commitment);
                let { signature: o } = await i.signAndSendTransaction(e, s);
                return o;
              } catch (e) {
                if (e instanceof s.lj) throw e;
                throw new s.IW(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signTransaction(e) {
            try {
              let t = this._wallet;
              if (!t) throw new s.oS();
              try {
                return (await t.signTransaction(e)) || e;
              } catch (e) {
                throw new s.PY(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            try {
              let t = this._wallet;
              if (!t) throw new s.oS();
              try {
                return (await t.signAllTransactions(e)) || e;
              } catch (e) {
                throw new s.PY(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signMessage(e) {
            try {
              let t = this._wallet;
              if (!t) throw new s.oS();
              try {
                let { signature: n } = await t.signMessage(e);
                return n;
              } catch (e) {
                throw new s.fk(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
        }
      },
      32671: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return a;
          },
        });
        var i = n(72809),
          r = n(67294),
          s = n(44718);
        let a = ({
          children: e,
          endpoint: t,
          config: n = { commitment: "confirmed" },
        }) => {
          let a = (0, r.useMemo)(() => new i.Connection(t, n), [t, n]);
          return r.createElement(s.h.Provider, { value: { connection: a } }, e);
        };
      },
      89462: function (e, t, n) {
        "use strict";
        let i, r, s, a, o;
        n.d(t, {
          n: function () {
            return eQ;
          },
        });
        var c,
          l,
          u,
          d,
          h,
          f,
          y,
          w,
          g,
          p,
          m,
          v,
          _,
          b,
          E,
          S,
          A,
          O,
          T,
          I,
          M,
          R = n(98800),
          N = n(69607),
          z = n(35615),
          j = n(63753),
          C = n(72809);
        let D = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
        RegExp(
          `^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${D}\\n*$`
        );
        let L = {
          ERROR_ASSOCIATION_PORT_OUT_OF_RANGE:
            "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
          ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
          ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
          ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
          ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
          ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
          ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION",
        };
        class U extends Error {
          constructor(...e) {
            let [t, n, i] = e;
            super(n),
              (this.code = t),
              (this.data = i),
              (this.name = "SolanaMobileWalletAdapterError");
          }
        }
        class x extends Error {
          constructor(...e) {
            let [t, n, i, r] = e;
            super(i),
              (this.code = n),
              (this.data = r),
              (this.jsonRpcMessageId = t),
              (this.name = "SolanaMobileWalletAdapterProtocolError");
          }
        }
        function P(e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        }
        function k(e, t) {
          return P(this, void 0, void 0, function* () {
            let n = yield crypto.subtle.exportKey("raw", e),
              i = yield crypto.subtle.sign(
                { hash: "SHA-256", name: "ECDSA" },
                t,
                n
              ),
              r = new Uint8Array(n.byteLength + i.byteLength);
            return (
              r.set(new Uint8Array(n), 0),
              r.set(new Uint8Array(i), n.byteLength),
              r
            );
          });
        }
        let W = "solana:cloneAuthorization";
        function K(e, t) {
          return P(this, void 0, void 0, function* () {
            let n = e.slice(0, 4),
              r = e.slice(4, 16),
              s = e.slice(16),
              a = yield crypto.subtle.decrypt(B(n, r), t, s);
            return (void 0 === i && (i = new TextDecoder("utf-8")), i).decode(
              a
            );
          });
        }
        function B(e, t) {
          return { additionalData: e, iv: t, name: "AES-GCM", tagLength: 128 };
        }
        function Y() {
          return P(this, void 0, void 0, function* () {
            return yield crypto.subtle.generateKey(
              { name: "ECDH", namedCurve: "P-256" },
              !1,
              ["deriveKey", "deriveBits"]
            );
          });
        }
        function $(e) {
          if (e < 49152 || e > 65535)
            throw new U(
              L.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,
              `Association port number must be between 49152 and 65535. ${e} given.`,
              { port: e }
            );
          return e;
        }
        function Q(e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/");
        }
        let G = { Firefox: 0, Other: 1 },
          V = null,
          Z = [150, 150, 200, 500, 500, 750, 750, 1e3];
        function F(e) {
          return new DataView(e).getUint32(0, !1);
        }
        var H = n(77191);
        function q(e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              0 > t.indexOf(i) &&
              (n[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, i = Object.getOwnPropertySymbols(e);
              r < i.length;
              r++
            )
              0 > t.indexOf(i[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                (n[i[r]] = e[i[r]]);
          return n;
        }
        function J(e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        }
        function X(e) {
          return window.btoa(String.fromCharCode.call(null, ...e));
        }
        function ee(e) {
          return new Uint8Array(
            window
              .atob(e)
              .split("")
              .map((e) => e.charCodeAt(0))
          );
        }
        function et(e) {
          return X(
            "version" in e
              ? e.serialize()
              : e.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
          );
        }
        function en(e) {
          let t = e[0] * C.SIGNATURE_LENGTH_IN_BYTES + 1;
          return "legacy" ===
            C.VersionedMessage.deserializeMessageVersion(e.slice(t, e.length))
            ? C.Transaction.from(e)
            : C.VersionedTransaction.deserialize(e);
        }
        n(92592);
        let ei = "function" == typeof n(48764).Buffer;
        "function" == typeof TextDecoder && new TextDecoder(),
          "function" == typeof TextEncoder && new TextEncoder();
        let er = Array.prototype.slice.call(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          ),
          es = ((a = {}), er.forEach((e, t) => (a[e] = t)), a),
          ea =
            /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
          eo = String.fromCharCode.bind(String);
        function ec(e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        }
        function el(e) {
          return new Uint8Array(
            window
              .atob(e)
              .split("")
              .map((e) => e.charCodeAt(0))
          );
        }
        "function" == typeof Uint8Array.from &&
          Uint8Array.from.bind(Uint8Array),
          "function" == typeof btoa ||
            ei ||
            ((e) => {
              let t,
                n,
                i,
                r,
                s = "",
                a = e.length % 3;
              for (let a = 0; a < e.length; ) {
                if (
                  (n = e.charCodeAt(a++)) > 255 ||
                  (i = e.charCodeAt(a++)) > 255 ||
                  (r = e.charCodeAt(a++)) > 255
                )
                  throw TypeError("invalid character found");
                s +=
                  er[((t = (n << 16) | (i << 8) | r) >> 18) & 63] +
                  er[(t >> 12) & 63] +
                  er[(t >> 6) & 63] +
                  er[63 & t];
              }
              return a ? s.slice(0, a - 3) + "===".substring(a) : s;
            }),
          "function" == typeof atob ||
            ei ||
            ((e) => {
              if (((e = e.replace(/\s+/g, "")), !ea.test(e)))
                throw TypeError("malformed base64.");
              e += "==".slice(2 - (3 & e.length));
              let t,
                n = "",
                i,
                r;
              for (let s = 0; s < e.length; )
                (t =
                  (es[e.charAt(s++)] << 18) |
                  (es[e.charAt(s++)] << 12) |
                  ((i = es[e.charAt(s++)]) << 6) |
                  (r = es[e.charAt(s++)])),
                  (n +=
                    64 === i
                      ? eo((t >> 16) & 255)
                      : 64 === r
                      ? eo((t >> 16) & 255, (t >> 8) & 255)
                      : eo((t >> 16) & 255, (t >> 8) & 255, 255 & t));
              return n;
            });
        let eu = "Mobile Wallet Adapter";
        function ed(e) {
          return "version" in e;
        }
        class eh extends R.qz {
          constructor(e) {
            var t;
            super(),
              (this.supportedTransactionVersions = new Set(["legacy", 0])),
              (this.name = eu),
              (this.url = "https://solanamobile.com/wallets"),
              (this.icon =
                "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg=="),
              (this._connecting = !1),
              (this._connectionGeneration = 0),
              (this._readyState =
                "undefined" != typeof window &&
                window.isSecureContext &&
                "undefined" != typeof document &&
                /android/i.test(navigator.userAgent)
                  ? N.i1.Loadable
                  : N.i1.Unsupported),
              (this._authorizationResultCache = e.authorizationResultCache),
              (this._addressSelector = e.addressSelector),
              (this._appIdentity = e.appIdentity),
              (this._chain =
                null !== (t = e.chain) && void 0 !== t
                  ? t
                  : (function (e) {
                      switch (e) {
                        case "mainnet-beta":
                          return "solana:mainnet";
                        case "testnet":
                          return "solana:testnet";
                        case "devnet":
                          return "solana:devnet";
                      }
                    })(e.cluster)),
              (this._hostAuthority = e.remoteHostAuthority),
              (this._onWalletNotFound = e.onWalletNotFound),
              this._readyState !== N.i1.Unsupported &&
                this._authorizationResultCache.get().then((e) => {
                  e && this.declareWalletAsInstalled();
                });
          }
          get publicKey() {
            if (null == this._publicKey && null != this._selectedAddress)
              try {
                this._publicKey = (function (e) {
                  let t = el(e);
                  return new C.PublicKey(t);
                })(this._selectedAddress);
              } catch (e) {
                throw new z.Nx(
                  (e instanceof Error && (null == e ? void 0 : e.message)) ||
                    "Unknown error",
                  e
                );
              }
            return this._publicKey ? this._publicKey : null;
          }
          get connected() {
            return !!this._authorizationResult;
          }
          get connecting() {
            return this._connecting;
          }
          get readyState() {
            return this._readyState;
          }
          declareWalletAsInstalled() {
            this._readyState !== N.i1.Installed &&
              this.emit(
                "readyStateChange",
                (this._readyState = N.i1.Installed)
              );
          }
          runWithGuard(e) {
            return ec(this, void 0, void 0, function* () {
              try {
                return yield e();
              } catch (e) {
                throw (this.emit("error", e), e);
              }
            });
          }
          autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
            return ec(this, void 0, void 0, function* () {
              return yield this.autoConnect();
            });
          }
          autoConnect() {
            return ec(this, void 0, void 0, function* () {
              if (!this.connecting && !this.connected)
                return yield this.runWithGuard(() =>
                  ec(this, void 0, void 0, function* () {
                    if (
                      this._readyState !== N.i1.Installed &&
                      this._readyState !== N.i1.Loadable
                    )
                      throw new z.OZ();
                    this._connecting = !0;
                    try {
                      let e = yield this._authorizationResultCache.get();
                      e && this.handleAuthorizationResult(e);
                    } catch (e) {
                      throw new z.$w(
                        (e instanceof Error && e.message) || "Unknown error",
                        e
                      );
                    } finally {
                      this._connecting = !1;
                    }
                  })
                );
            });
          }
          connect() {
            return ec(this, void 0, void 0, function* () {
              if (!this.connecting && !this.connected)
                return yield this.runWithGuard(() =>
                  ec(this, void 0, void 0, function* () {
                    if (
                      this._readyState !== N.i1.Installed &&
                      this._readyState !== N.i1.Loadable
                    )
                      throw new z.OZ();
                    this._connecting = !0;
                    try {
                      yield this.performAuthorization();
                    } catch (e) {
                      throw new z.$w(
                        (e instanceof Error && e.message) || "Unknown error",
                        e
                      );
                    } finally {
                      this._connecting = !1;
                    }
                  })
                );
            });
          }
          performAuthorization(e) {
            return ec(this, void 0, void 0, function* () {
              try {
                let t = yield this._authorizationResultCache.get();
                if (t) return this.handleAuthorizationResult(t), t;
                return yield this.transact((t) =>
                  ec(this, void 0, void 0, function* () {
                    let n = yield t.authorize({
                      chain: this._chain,
                      identity: this._appIdentity,
                      sign_in_payload: e,
                    });
                    return (
                      Promise.all([
                        this._authorizationResultCache.set(n),
                        this.handleAuthorizationResult(n),
                      ]),
                      n
                    );
                  })
                );
              } catch (e) {
                throw new z.$w(
                  (e instanceof Error && e.message) || "Unknown error",
                  e
                );
              }
            });
          }
          handleAuthorizationResult(e) {
            var t;
            return ec(this, void 0, void 0, function* () {
              let n =
                null == this._authorizationResult ||
                (null === (t = this._authorizationResult) || void 0 === t
                  ? void 0
                  : t.accounts.length) !== e.accounts.length ||
                this._authorizationResult.accounts.some(
                  (t, n) => t.address !== e.accounts[n].address
                );
              if (
                ((this._authorizationResult = e),
                this.declareWalletAsInstalled(),
                n)
              ) {
                let t = yield this._addressSelector.select(
                  e.accounts.map(({ address: e }) => e)
                );
                t !== this._selectedAddress &&
                  ((this._selectedAddress = t),
                  delete this._publicKey,
                  this.emit("connect", this.publicKey));
              }
            });
          }
          performReauthorization(e, t) {
            return ec(this, void 0, void 0, function* () {
              try {
                let n = yield e.authorize({
                  auth_token: t,
                  identity: this._appIdentity,
                });
                Promise.all([
                  this._authorizationResultCache.set(n),
                  this.handleAuthorizationResult(n),
                ]);
              } catch (e) {
                throw (
                  (this.disconnect(),
                  new z.at(
                    (e instanceof Error && (null == e ? void 0 : e.message)) ||
                      "Unknown error",
                    e
                  ))
                );
              }
            });
          }
          disconnect() {
            return ec(this, void 0, void 0, function* () {
              this._authorizationResultCache.clear(),
                (this._connecting = !1),
                this._connectionGeneration++,
                delete this._authorizationResult,
                delete this._publicKey,
                delete this._selectedAddress,
                this.emit("disconnect");
            });
          }
          transact(e) {
            var t;
            return ec(this, void 0, void 0, function* () {
              let n =
                  null === (t = this._authorizationResult) || void 0 === t
                    ? void 0
                    : t.wallet_uri_base,
                i = this._hostAuthority
                  ? { remoteHostAuthority: this._hostAuthority }
                  : void 0,
                r = this._connectionGeneration;
              try {
                return yield (function (e, t) {
                  return J(this, void 0, void 0, function* () {
                    return yield (function (e, t) {
                      return P(this, void 0, void 0, function* () {
                        let n;
                        !(function () {
                          if (
                            "undefined" == typeof window ||
                            !0 !== window.isSecureContext
                          )
                            throw new U(
                              L.ERROR_SECURE_CONTEXT_REQUIRED,
                              "The mobile wallet adapter protocol must be used in a secure context (`https`)."
                            );
                        })();
                        let i = yield (function () {
                            return P(this, void 0, void 0, function* () {
                              return yield crypto.subtle.generateKey(
                                { name: "ECDSA", namedCurve: "P-256" },
                                !1,
                                ["sign"]
                              );
                            });
                          })(),
                          r = yield (function (e, t) {
                            return P(this, void 0, void 0, function* () {
                              let n = $(
                                  49152 + Math.floor(16384 * Math.random())
                                ),
                                i = yield (function (e, t, n, i = ["v1"]) {
                                  return P(this, void 0, void 0, function* () {
                                    let r = $(t),
                                      s = (function (e) {
                                        let t = "",
                                          n = new Uint8Array(e),
                                          i = n.byteLength;
                                        for (let e = 0; e < i; e++)
                                          t += String.fromCharCode(n[e]);
                                        return window.btoa(t);
                                      })(
                                        yield crypto.subtle.exportKey("raw", e)
                                      ),
                                      a = (function (e, t) {
                                        let n = null;
                                        if (t) {
                                          try {
                                            n = new URL(t);
                                          } catch (e) {}
                                          if (
                                            (null == n
                                              ? void 0
                                              : n.protocol) !== "https:"
                                          )
                                            throw new U(
                                              L.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                              "Base URLs supplied by wallets must be valid `https` URLs"
                                            );
                                        }
                                        return (
                                          n || (n = new URL("solana-wallet:/")),
                                          new URL(
                                            e.startsWith("/")
                                              ? e
                                              : [
                                                  ...Q(n.pathname),
                                                  ...Q(e),
                                                ].join("/"),
                                            n
                                          )
                                        );
                                      })("v1/associate/local", n);
                                    return (
                                      a.searchParams.set(
                                        "association",
                                        s.replace(
                                          /[/+=]/g,
                                          (e) =>
                                            ({ "/": "_", "+": "-", "=": "." }[
                                              e
                                            ])
                                        )
                                      ),
                                      a.searchParams.set("port", `${r}`),
                                      i.forEach((e) => {
                                        a.searchParams.set("v", e);
                                      }),
                                      a
                                    );
                                  });
                                })(e, n, t);
                              return (
                                yield (function (e) {
                                  return P(this, void 0, void 0, function* () {
                                    if ("https:" === e.protocol)
                                      window.location.assign(e);
                                    else
                                      try {
                                        switch (
                                          -1 !==
                                          navigator.userAgent.indexOf(
                                            "Firefox/"
                                          )
                                            ? G.Firefox
                                            : G.Other
                                        ) {
                                          case G.Firefox:
                                            null == V &&
                                              (((V =
                                                document.createElement(
                                                  "iframe"
                                                )).style.display = "none"),
                                              document.body.appendChild(V)),
                                              (V.contentWindow.location.href =
                                                e.toString());
                                            break;
                                          case G.Other: {
                                            let t = new Promise((e, t) => {
                                              function n() {
                                                clearTimeout(r),
                                                  window.removeEventListener(
                                                    "blur",
                                                    i
                                                  );
                                              }
                                              function i() {
                                                n(), e();
                                              }
                                              window.addEventListener(
                                                "blur",
                                                i
                                              );
                                              let r = setTimeout(() => {
                                                n(), t();
                                              }, 2e3);
                                            });
                                            window.location.assign(e), yield t;
                                          }
                                        }
                                      } catch (e) {
                                        throw new U(
                                          L.ERROR_WALLET_NOT_FOUND,
                                          "Found no installed wallet that supports the mobile wallet protocol."
                                        );
                                      }
                                  });
                                })(i),
                                n
                              );
                            });
                          })(i.publicKey, null == t ? void 0 : t.baseUri),
                          s = `ws://localhost:${r}/solana-wallet`,
                          a = (() => {
                            let e = [...Z];
                            return () => (e.length > 1 ? e.shift() : e[0]);
                          })(),
                          o = 1,
                          c = 0,
                          l = { __type: "disconnected" };
                        return new Promise((t, r) => {
                          let u, d, h;
                          let f = {},
                            y = () =>
                              P(this, void 0, void 0, function* () {
                                if ("connecting" !== l.__type) {
                                  console.warn(
                                    `Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${l.__type}\`.`
                                  );
                                  return;
                                }
                                u.removeEventListener("open", y);
                                let { associationKeypair: e } = l,
                                  t = yield Y();
                                u.send(yield k(t.publicKey, e.privateKey)),
                                  (l = {
                                    __type: "hello_req_sent",
                                    associationPublicKey: e.publicKey,
                                    ecdhPrivateKey: t.privateKey,
                                  });
                              }),
                            w = (e) => {
                              e.wasClean
                                ? (l = { __type: "disconnected" })
                                : r(
                                    new U(
                                      L.ERROR_SESSION_CLOSED,
                                      `The wallet session dropped unexpectedly (${e.code}: ${e.reason}).`,
                                      { closeEvent: e }
                                    )
                                  ),
                                d();
                            },
                            g = (e) =>
                              P(this, void 0, void 0, function* () {
                                d(),
                                  Date.now() - n >= 3e4
                                    ? r(
                                        new U(
                                          L.ERROR_SESSION_TIMEOUT,
                                          `Failed to connect to the wallet websocket at ${s}.`
                                        )
                                      )
                                    : (yield new Promise((e) => {
                                        let t = a();
                                        h = window.setTimeout(e, t);
                                      }),
                                      m());
                              }),
                            p = (n) =>
                              P(this, void 0, void 0, function* () {
                                let s = yield n.data.arrayBuffer();
                                switch (l.__type) {
                                  case "connecting":
                                    if (0 !== s.byteLength)
                                      throw Error(
                                        "Encountered unexpected message while connecting"
                                      );
                                    let a = yield Y();
                                    u.send(yield k(a.publicKey, i.privateKey)),
                                      (l = {
                                        __type: "hello_req_sent",
                                        associationPublicKey: i.publicKey,
                                        ecdhPrivateKey: a.privateKey,
                                      });
                                    break;
                                  case "connected":
                                    try {
                                      let e = s.slice(0, 4),
                                        t = F(e);
                                      if (t !== c + 1)
                                        throw Error(
                                          "Encrypted message has invalid sequence number"
                                        );
                                      c = t;
                                      let n = yield (function (e, t) {
                                          return P(
                                            this,
                                            void 0,
                                            void 0,
                                            function* () {
                                              let n = JSON.parse(yield K(e, t));
                                              if (
                                                Object.hasOwnProperty.call(
                                                  n,
                                                  "error"
                                                )
                                              )
                                                throw new x(
                                                  n.id,
                                                  n.error.code,
                                                  n.error.message
                                                );
                                              return n;
                                            }
                                          );
                                        })(s, l.sharedSecret),
                                        i = f[n.id];
                                      delete f[n.id], i.resolve(n.result);
                                    } catch (e) {
                                      if (e instanceof x) {
                                        let t = f[e.jsonRpcMessageId];
                                        delete f[e.jsonRpcMessageId],
                                          t.reject(e);
                                      } else throw e;
                                    }
                                    break;
                                  case "hello_req_sent": {
                                    var h, y;
                                    if (0 === s.byteLength) {
                                      let e = yield Y();
                                      u.send(
                                        yield k(e.publicKey, i.privateKey)
                                      ),
                                        (l = {
                                          __type: "hello_req_sent",
                                          associationPublicKey: i.publicKey,
                                          ecdhPrivateKey: e.privateKey,
                                        });
                                      break;
                                    }
                                    let n = yield (function (e, t, n) {
                                        return P(
                                          this,
                                          void 0,
                                          void 0,
                                          function* () {
                                            let [i, r] = yield Promise.all([
                                                crypto.subtle.exportKey(
                                                  "raw",
                                                  t
                                                ),
                                                crypto.subtle.importKey(
                                                  "raw",
                                                  e.slice(0, 65),
                                                  {
                                                    name: "ECDH",
                                                    namedCurve: "P-256",
                                                  },
                                                  !1,
                                                  []
                                                ),
                                              ]),
                                              s =
                                                yield crypto.subtle.deriveBits(
                                                  { name: "ECDH", public: r },
                                                  n,
                                                  256
                                                ),
                                              a = yield crypto.subtle.importKey(
                                                "raw",
                                                s,
                                                "HKDF",
                                                !1,
                                                ["deriveKey"]
                                              );
                                            return yield crypto.subtle.deriveKey(
                                              {
                                                name: "HKDF",
                                                hash: "SHA-256",
                                                salt: new Uint8Array(i),
                                                info: new Uint8Array(),
                                              },
                                              a,
                                              { name: "AES-GCM", length: 128 },
                                              !1,
                                              ["encrypt", "decrypt"]
                                            );
                                          }
                                        );
                                      })(
                                        s,
                                        l.associationPublicKey,
                                        l.ecdhPrivateKey
                                      ),
                                      a = s.slice(65),
                                      w =
                                        0 !== a.byteLength
                                          ? yield P(
                                              this,
                                              void 0,
                                              void 0,
                                              function* () {
                                                let e = F(a.slice(0, 4));
                                                if (e !== c + 1)
                                                  throw Error(
                                                    "Encrypted message has invalid sequence number"
                                                  );
                                                return (
                                                  (c = e),
                                                  (function (e, t) {
                                                    return P(
                                                      this,
                                                      void 0,
                                                      void 0,
                                                      function* () {
                                                        let n = JSON.parse(
                                                            yield K(e, t)
                                                          ),
                                                          i = "legacy";
                                                        if (
                                                          Object.hasOwnProperty.call(
                                                            n,
                                                            "v"
                                                          )
                                                        )
                                                          switch (n.v) {
                                                            case 1:
                                                            case "1":
                                                            case "v1":
                                                              i = "v1";
                                                              break;
                                                            case "legacy":
                                                              i = "legacy";
                                                              break;
                                                            default:
                                                              throw new U(
                                                                L.ERROR_INVALID_PROTOCOL_VERSION,
                                                                `Unknown/unsupported protocol version: ${n.v}`
                                                              );
                                                          }
                                                        return {
                                                          protocol_version: i,
                                                        };
                                                      }
                                                    );
                                                  })(a, n)
                                                );
                                              }
                                            )
                                          : { protocol_version: "legacy" };
                                    l = {
                                      __type: "connected",
                                      sharedSecret: n,
                                      sessionProperties: w,
                                    };
                                    let g =
                                      ((h = w.protocol_version),
                                      (y = (e, t) =>
                                        P(this, void 0, void 0, function* () {
                                          let i = o++;
                                          return (
                                            u.send(
                                              yield (function (e, t) {
                                                return P(
                                                  this,
                                                  void 0,
                                                  void 0,
                                                  function* () {
                                                    let n = JSON.stringify(e);
                                                    return (function (e, t, n) {
                                                      return P(
                                                        this,
                                                        void 0,
                                                        void 0,
                                                        function* () {
                                                          let i = (function (
                                                              e
                                                            ) {
                                                              if (
                                                                e >= 4294967296
                                                              )
                                                                throw Error(
                                                                  "Outbound sequence number overflow. The maximum sequence number is 32-bytes."
                                                                );
                                                              let t =
                                                                new ArrayBuffer(
                                                                  4
                                                                );
                                                              return (
                                                                new DataView(
                                                                  t
                                                                ).setUint32(
                                                                  0,
                                                                  e,
                                                                  !1
                                                                ),
                                                                new Uint8Array(
                                                                  t
                                                                )
                                                              );
                                                            })(t),
                                                            r = new Uint8Array(
                                                              12
                                                            );
                                                          crypto.getRandomValues(
                                                            r
                                                          );
                                                          let s =
                                                              yield crypto.subtle.encrypt(
                                                                B(i, r),
                                                                n,
                                                                new TextEncoder().encode(
                                                                  e
                                                                )
                                                              ),
                                                            a = new Uint8Array(
                                                              i.byteLength +
                                                                r.byteLength +
                                                                s.byteLength
                                                            );
                                                          return (
                                                            a.set(
                                                              new Uint8Array(i),
                                                              0
                                                            ),
                                                            a.set(
                                                              new Uint8Array(r),
                                                              i.byteLength
                                                            ),
                                                            a.set(
                                                              new Uint8Array(s),
                                                              i.byteLength +
                                                                r.byteLength
                                                            ),
                                                            a
                                                          );
                                                        }
                                                      );
                                                    })(n, e.id, t);
                                                  }
                                                );
                                              })(
                                                {
                                                  id: i,
                                                  jsonrpc: "2.0",
                                                  method: e,
                                                  params: null != t ? t : {},
                                                },
                                                n
                                              )
                                            ),
                                            new Promise((t, n) => {
                                              f[i] = {
                                                resolve(i) {
                                                  switch (e) {
                                                    case "authorize":
                                                    case "reauthorize": {
                                                      let {
                                                        wallet_uri_base: e,
                                                      } = i;
                                                      if (null != e)
                                                        try {
                                                          !(function (e) {
                                                            let t;
                                                            try {
                                                              t = new URL(e);
                                                            } catch (e) {
                                                              throw new U(
                                                                L.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                                "Invalid base URL supplied by wallet"
                                                              );
                                                            }
                                                            if (
                                                              "https:" !==
                                                              t.protocol
                                                            )
                                                              throw new U(
                                                                L.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                                "Base URLs supplied by wallets must be valid `https` URLs"
                                                              );
                                                          })(e);
                                                        } catch (e) {
                                                          n(e);
                                                          return;
                                                        }
                                                    }
                                                  }
                                                  t(i);
                                                },
                                                reject: n,
                                              };
                                            })
                                          );
                                        })),
                                      new Proxy(
                                        {},
                                        {
                                          get: (e, t) => (
                                            null == e[t] &&
                                              (e[t] = function (e) {
                                                return P(
                                                  this,
                                                  void 0,
                                                  void 0,
                                                  function* () {
                                                    let {
                                                        method: n,
                                                        params: i,
                                                      } = (function (e, t, n) {
                                                        let i = t,
                                                          r = e
                                                            .toString()
                                                            .replace(
                                                              /[A-Z]/g,
                                                              (e) =>
                                                                `_${e.toLowerCase()}`
                                                            )
                                                            .toLowerCase();
                                                        switch (e) {
                                                          case "authorize": {
                                                            let { chain: e } =
                                                              i;
                                                            if (
                                                              "legacy" === n
                                                            ) {
                                                              switch (e) {
                                                                case "solana:testnet":
                                                                  e = "testnet";
                                                                  break;
                                                                case "solana:devnet":
                                                                  e = "devnet";
                                                                  break;
                                                                case "solana:mainnet":
                                                                  e =
                                                                    "mainnet-beta";
                                                                  break;
                                                                default:
                                                                  e = i.cluster;
                                                              }
                                                              i.cluster = e;
                                                            } else {
                                                              switch (e) {
                                                                case "testnet":
                                                                case "devnet":
                                                                  e = `solana:${e}`;
                                                                  break;
                                                                case "mainnet-beta":
                                                                  e =
                                                                    "solana:mainnet";
                                                              }
                                                              i.chain = e;
                                                            }
                                                          }
                                                          case "reauthorize": {
                                                            let {
                                                              auth_token: e,
                                                              identity: t,
                                                            } = i;
                                                            e &&
                                                              ("legacy" === n
                                                                ? ((r =
                                                                    "reauthorize"),
                                                                  (i = {
                                                                    auth_token:
                                                                      e,
                                                                    identity: t,
                                                                  }))
                                                                : (r =
                                                                    "authorize"));
                                                          }
                                                        }
                                                        return {
                                                          method: r,
                                                          params: i,
                                                        };
                                                      })(t, e, h),
                                                      r = yield y(n, i);
                                                    return (
                                                      "authorize" === n &&
                                                        i.sign_in_payload &&
                                                        !r.sign_in_result &&
                                                        (r.sign_in_result =
                                                          yield (function (
                                                            e,
                                                            t,
                                                            n
                                                          ) {
                                                            var i;
                                                            return P(
                                                              this,
                                                              void 0,
                                                              void 0,
                                                              function* () {
                                                                var r, s;
                                                                let a =
                                                                    null !==
                                                                      (i =
                                                                        e.domain) &&
                                                                    void 0 !== i
                                                                      ? i
                                                                      : window
                                                                          .location
                                                                          .host,
                                                                  o =
                                                                    t
                                                                      .accounts[0]
                                                                      .address,
                                                                  c =
                                                                    ((r =
                                                                      Object.assign(
                                                                        Object.assign(
                                                                          {},
                                                                          e
                                                                        ),
                                                                        {
                                                                          domain:
                                                                            a,
                                                                          address:
                                                                            o,
                                                                        }
                                                                      )),
                                                                    (s =
                                                                      (function (
                                                                        e
                                                                      ) {
                                                                        let t = `${e.domain} wants you to sign in with your Solana account:
`;
                                                                        (t += `${e.address}`),
                                                                          e.statement &&
                                                                            (t += `

${e.statement}`);
                                                                        let n =
                                                                          [];
                                                                        if (
                                                                          (e.uri &&
                                                                            n.push(
                                                                              `URI: ${e.uri}`
                                                                            ),
                                                                          e.version &&
                                                                            n.push(
                                                                              `Version: ${e.version}`
                                                                            ),
                                                                          e.chainId &&
                                                                            n.push(
                                                                              `Chain ID: ${e.chainId}`
                                                                            ),
                                                                          e.nonce &&
                                                                            n.push(
                                                                              `Nonce: ${e.nonce}`
                                                                            ),
                                                                          e.issuedAt &&
                                                                            n.push(
                                                                              `Issued At: ${e.issuedAt}`
                                                                            ),
                                                                          e.expirationTime &&
                                                                            n.push(
                                                                              `Expiration Time: ${e.expirationTime}`
                                                                            ),
                                                                          e.notBefore &&
                                                                            n.push(
                                                                              `Not Before: ${e.notBefore}`
                                                                            ),
                                                                          e.requestId &&
                                                                            n.push(
                                                                              `Request ID: ${e.requestId}`
                                                                            ),
                                                                          e.resources)
                                                                        )
                                                                          for (let t of (n.push(
                                                                            "Resources:"
                                                                          ),
                                                                          e.resources))
                                                                            n.push(
                                                                              `- ${t}`
                                                                            );
                                                                        return (
                                                                          n.length &&
                                                                            (t += `

${n.join("\n")}`),
                                                                          t
                                                                        );
                                                                      })(r)),
                                                                    window.btoa(
                                                                      s
                                                                    )),
                                                                  l = yield n(
                                                                    "sign_messages",
                                                                    {
                                                                      addresses:
                                                                        [o],
                                                                      payloads:
                                                                        [c],
                                                                    }
                                                                  );
                                                                return {
                                                                  address: o,
                                                                  signed_message:
                                                                    c,
                                                                  signature:
                                                                    l.signed_payloads[0].slice(
                                                                      c.length
                                                                    ),
                                                                };
                                                              }
                                                            );
                                                          })(
                                                            i.sign_in_payload,
                                                            r,
                                                            y
                                                          )),
                                                      (function (e, t, n) {
                                                        if (
                                                          "getCapabilities" ===
                                                          e
                                                        )
                                                          switch (n) {
                                                            case "legacy": {
                                                              let e = [
                                                                "solana:signTransactions",
                                                              ];
                                                              return (
                                                                !0 ===
                                                                  t.supports_clone_authorization &&
                                                                  e.push(W),
                                                                Object.assign(
                                                                  Object.assign(
                                                                    {},
                                                                    t
                                                                  ),
                                                                  {
                                                                    features: e,
                                                                  }
                                                                )
                                                              );
                                                            }
                                                            case "v1":
                                                              return Object.assign(
                                                                Object.assign(
                                                                  {},
                                                                  t
                                                                ),
                                                                {
                                                                  supports_sign_and_send_transactions:
                                                                    !0,
                                                                  supports_clone_authorization:
                                                                    t.features.includes(
                                                                      W
                                                                    ),
                                                                }
                                                              );
                                                          }
                                                        return t;
                                                      })(t, r, h)
                                                    );
                                                  }
                                                );
                                              }),
                                            e[t]
                                          ),
                                          defineProperty: () => !1,
                                          deleteProperty: () => !1,
                                        }
                                      ));
                                    try {
                                      t(yield e(g));
                                    } catch (e) {
                                      r(e);
                                    } finally {
                                      d(), u.close();
                                    }
                                  }
                                }
                              }),
                            m = () => {
                              d && d(),
                                (l = {
                                  __type: "connecting",
                                  associationKeypair: i,
                                }),
                                void 0 === n && (n = Date.now()),
                                (u = new WebSocket(s, [
                                  "com.solana.mobilewalletadapter.v1",
                                ])).addEventListener("open", y),
                                u.addEventListener("close", w),
                                u.addEventListener("error", g),
                                u.addEventListener("message", p),
                                (d = () => {
                                  window.clearTimeout(h),
                                    u.removeEventListener("open", y),
                                    u.removeEventListener("close", w),
                                    u.removeEventListener("error", g),
                                    u.removeEventListener("message", p);
                                });
                            };
                          m();
                        });
                      });
                    })(
                      (t) =>
                        e(
                          new Proxy(
                            {},
                            {
                              get(e, n) {
                                if (null == e[n])
                                  switch (n) {
                                    case "signAndSendTransactions":
                                      e[n] = function (e) {
                                        var {
                                            minContextSlot: n,
                                            commitment: i,
                                            skipPreflight: r,
                                            maxRetries: s,
                                            waitForCommitmentToSendNextTransaction:
                                              a,
                                            transactions: o,
                                          } = e,
                                          c = q(e, [
                                            "minContextSlot",
                                            "commitment",
                                            "skipPreflight",
                                            "maxRetries",
                                            "waitForCommitmentToSendNextTransaction",
                                            "transactions",
                                          ]);
                                        return J(
                                          this,
                                          void 0,
                                          void 0,
                                          function* () {
                                            let e = o.map(et),
                                              l = {
                                                min_context_slot: n,
                                                commitment: i,
                                                skip_preflight: r,
                                                max_retries: s,
                                                wait_for_commitment_to_send_next_transaction:
                                                  a,
                                              },
                                              { signatures: u } =
                                                yield t.signAndSendTransactions(
                                                  Object.assign(
                                                    Object.assign(
                                                      Object.assign({}, c),
                                                      Object.values(l).some(
                                                        (e) => null != e
                                                      )
                                                        ? { options: l }
                                                        : null
                                                    ),
                                                    { payloads: e }
                                                  )
                                                );
                                            return u.map(ee).map(H.encode);
                                          }
                                        );
                                      };
                                      break;
                                    case "signMessages":
                                      e[n] = function (e) {
                                        var { payloads: n } = e,
                                          i = q(e, ["payloads"]);
                                        return J(
                                          this,
                                          void 0,
                                          void 0,
                                          function* () {
                                            let e = n.map(X),
                                              { signed_payloads: r } =
                                                yield t.signMessages(
                                                  Object.assign(
                                                    Object.assign({}, i),
                                                    { payloads: e }
                                                  )
                                                );
                                            return r.map(ee);
                                          }
                                        );
                                      };
                                      break;
                                    case "signTransactions":
                                      e[n] = function (e) {
                                        var { transactions: n } = e,
                                          i = q(e, ["transactions"]);
                                        return J(
                                          this,
                                          void 0,
                                          void 0,
                                          function* () {
                                            let e = n.map(et),
                                              { signed_payloads: r } =
                                                yield t.signTransactions(
                                                  Object.assign(
                                                    Object.assign({}, i),
                                                    { payloads: e }
                                                  )
                                                );
                                            return r.map(ee).map(en);
                                          }
                                        );
                                      };
                                      break;
                                    default:
                                      e[n] = t[n];
                                  }
                                return e[n];
                              },
                              defineProperty: () => !1,
                              deleteProperty: () => !1,
                            }
                          )
                        ),
                      t
                    );
                  });
                })(
                  e,
                  Object.assign(
                    Object.assign({}, n ? { baseUri: n } : void 0),
                    i
                  )
                );
              } catch (e) {
                throw (
                  (this._connectionGeneration !== r &&
                    (yield new Promise(() => {})),
                  e instanceof Error &&
                    "SolanaMobileWalletAdapterError" === e.name &&
                    "ERROR_WALLET_NOT_FOUND" === e.code &&
                    (yield this._onWalletNotFound(this)),
                  e)
                );
              }
            });
          }
          assertIsAuthorized() {
            if (!this._authorizationResult || !this._selectedAddress)
              throw new z.oS();
            return {
              authToken: this._authorizationResult.auth_token,
              selectedAddress: this._selectedAddress,
            };
          }
          performSignTransactions(e) {
            return ec(this, void 0, void 0, function* () {
              let { authToken: t } = this.assertIsAuthorized();
              try {
                return yield this.transact((n) =>
                  ec(this, void 0, void 0, function* () {
                    return (
                      yield this.performReauthorization(n, t),
                      yield n.signTransactions({ transactions: e })
                    );
                  })
                );
              } catch (e) {
                throw new z.PY(null == e ? void 0 : e.message, e);
              }
            });
          }
          sendTransaction(e, t, n) {
            return ec(this, void 0, void 0, function* () {
              return yield this.runWithGuard(() =>
                ec(this, void 0, void 0, function* () {
                  let { authToken: i } = this.assertIsAuthorized(),
                    r = null == n ? void 0 : n.minContextSlot;
                  try {
                    return yield this.transact((s) =>
                      ec(this, void 0, void 0, function* () {
                        function a() {
                          let e, i;
                          switch (t.commitment) {
                            case "confirmed":
                            case "finalized":
                            case "processed":
                              e = t.commitment;
                              break;
                            default:
                              e = "finalized";
                          }
                          switch (null == n ? void 0 : n.preflightCommitment) {
                            case "confirmed":
                            case "finalized":
                            case "processed":
                              i = n.preflightCommitment;
                              break;
                            case void 0:
                              i = e;
                              break;
                            default:
                              i = "finalized";
                          }
                          let r =
                              "finalized" === i ? 2 : "confirmed" === i ? 1 : 0,
                            s =
                              "finalized" === e ? 2 : "confirmed" === e ? 1 : 0;
                          return r < s ? i : e;
                        }
                        let [o, c, l] = yield Promise.all([
                          s.getCapabilities(),
                          this.performReauthorization(s, i),
                          ed(e)
                            ? null
                            : ec(this, void 0, void 0, function* () {
                                var n;
                                if (
                                  (e.feePayer ||
                                    (e.feePayer =
                                      null !== (n = this.publicKey) &&
                                      void 0 !== n
                                        ? n
                                        : void 0),
                                  null == e.recentBlockhash)
                                ) {
                                  let { blockhash: n } =
                                    yield t.getLatestBlockhash({
                                      commitment: a(),
                                    });
                                  e.recentBlockhash = n;
                                }
                              }),
                        ]);
                        if (o.supports_sign_and_send_transactions)
                          return (yield s.signAndSendTransactions({
                            minContextSlot: r,
                            transactions: [e],
                          }))[0];
                        {
                          let [i] = yield s.signTransactions({
                            transactions: [e],
                          });
                          if (ed(i)) return yield t.sendTransaction(i);
                          {
                            let e = i.serialize();
                            return yield t.sendRawTransaction(
                              e,
                              Object.assign(Object.assign({}, n), {
                                preflightCommitment: a(),
                              })
                            );
                          }
                        }
                      })
                    );
                  } catch (e) {
                    throw new z.IW(null == e ? void 0 : e.message, e);
                  }
                })
              );
            });
          }
          signTransaction(e) {
            return ec(this, void 0, void 0, function* () {
              return yield this.runWithGuard(() =>
                ec(this, void 0, void 0, function* () {
                  let [t] = yield this.performSignTransactions([e]);
                  return t;
                })
              );
            });
          }
          signAllTransactions(e) {
            return ec(this, void 0, void 0, function* () {
              return yield this.runWithGuard(() =>
                ec(this, void 0, void 0, function* () {
                  return yield this.performSignTransactions(e);
                })
              );
            });
          }
          signMessage(e) {
            return ec(this, void 0, void 0, function* () {
              return yield this.runWithGuard(() =>
                ec(this, void 0, void 0, function* () {
                  let { authToken: t, selectedAddress: n } =
                    this.assertIsAuthorized();
                  try {
                    return yield this.transact((i) =>
                      ec(this, void 0, void 0, function* () {
                        yield this.performReauthorization(i, t);
                        let [r] = yield i.signMessages({
                          addresses: [n],
                          payloads: [e],
                        });
                        return r.slice(-64);
                      })
                    );
                  } catch (e) {
                    throw new z.fk(null == e ? void 0 : e.message, e);
                  }
                })
              );
            });
          }
          signIn(e) {
            return ec(this, void 0, void 0, function* () {
              return yield this.runWithGuard(() =>
                ec(this, void 0, void 0, function* () {
                  var t, n;
                  if (
                    this._readyState !== N.i1.Installed &&
                    this._readyState !== N.i1.Loadable
                  )
                    throw new z.OZ();
                  this._connecting = !0;
                  try {
                    let i = yield this.performAuthorization(
                      Object.assign(Object.assign({}, e), {
                        domain:
                          null !== (t = null == e ? void 0 : e.domain) &&
                          void 0 !== t
                            ? t
                            : window.location.host,
                      })
                    );
                    if (!i.sign_in_result)
                      throw Error(
                        "Sign in failed, no sign in result returned by wallet"
                      );
                    let r = i.sign_in_result.address;
                    return {
                      account: Object.assign(
                        Object.assign(
                          {},
                          null !==
                            (n = i.accounts.find((e) => e.address == r)) &&
                            void 0 !== n
                            ? n
                            : { address: r }
                        ),
                        { publicKey: el(r) }
                      ),
                      signedMessage: el(i.sign_in_result.signed_message),
                      signature: el(i.sign_in_result.signature),
                    };
                  } catch (e) {
                    throw new z.$w(
                      (e instanceof Error && e.message) || "Unknown error",
                      e
                    );
                  } finally {
                    this._connecting = !1;
                  }
                })
              );
            });
          }
        }
        let ef = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
        function ey(e) {
          return ec(this, void 0, void 0, function* () {
            "undefined" != typeof window && window.location.assign(e.url);
          });
        }
        let ew = "solana:signAndSendTransaction",
          eg = "solana:signTransaction",
          ep = "standard:connect",
          em = "standard:events",
          ev = function (e) {
            return (
              ep in e.features &&
              em in e.features &&
              (ew in e.features || eg in e.features)
            );
          },
          e_ = "solana:signMessage",
          eb = "solana:signIn",
          eE = "solana:mainnet";
        function eS(e) {
          switch (e) {
            case "processed":
            case "confirmed":
            case "finalized":
            case void 0:
              return e;
            case "recent":
              return "processed";
            case "single":
            case "singleGossip":
              return "confirmed";
            case "max":
            case "root":
              return "finalized";
            default:
              return;
          }
        }
        let eA = "standard:disconnect";
        new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap();
        var eO = function (e, t, n, i) {
            if ("a" === n && !i)
              throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          },
          eT = function (e, t, n, i, r) {
            if ("m" === i) throw TypeError("Private method is not writable");
            if ("a" === i && !r)
              throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n
            );
          };
        class eI extends N.mI {
          get name() {
            return eO(this, g, "f").name;
          }
          get url() {
            return "https://github.com/solana-labs/wallet-standard";
          }
          get icon() {
            return eO(this, g, "f").icon;
          }
          get readyState() {
            return eO(this, p, "f");
          }
          get publicKey() {
            return eO(this, d, "f");
          }
          get connecting() {
            return eO(this, h, "f");
          }
          get supportedTransactionVersions() {
            return eO(this, w, "f");
          }
          get wallet() {
            return eO(this, g, "f");
          }
          get standard() {
            return !0;
          }
          constructor({ wallet: e }) {
            super(),
              l.add(this),
              u.set(this, void 0),
              d.set(this, void 0),
              h.set(this, void 0),
              f.set(this, void 0),
              y.set(this, void 0),
              w.set(this, void 0),
              g.set(this, void 0),
              p.set(
                this,
                "undefined" == typeof window || "undefined" == typeof document
                  ? N.i1.Unsupported
                  : N.i1.Installed
              ),
              E.set(this, (e) => {
                if ("accounts" in e) {
                  let e = eO(this, g, "f").accounts[0];
                  eO(this, u, "f") &&
                    !eO(this, f, "f") &&
                    e !== eO(this, u, "f") &&
                    (e
                      ? eO(this, l, "m", v).call(this, e)
                      : (this.emit("error", new z.at()),
                        eO(this, l, "m", _).call(this)));
                }
                "features" in e && eO(this, l, "m", b).call(this);
              }),
              eT(this, g, e, "f"),
              eT(this, u, null, "f"),
              eT(this, d, null, "f"),
              eT(this, h, !1, "f"),
              eT(this, f, !1, "f"),
              eT(
                this,
                y,
                eO(this, g, "f").features[em].on("change", eO(this, E, "f")),
                "f"
              ),
              eO(this, l, "m", b).call(this);
          }
          destroy() {
            eT(this, u, null, "f"),
              eT(this, d, null, "f"),
              eT(this, h, !1, "f"),
              eT(this, f, !1, "f");
            let e = eO(this, y, "f");
            e && (eT(this, y, null, "f"), e());
          }
          async autoConnect() {
            return eO(this, l, "m", m).call(this, { silent: !0 });
          }
          async connect() {
            return eO(this, l, "m", m).call(this);
          }
          async disconnect() {
            if (eA in eO(this, g, "f").features)
              try {
                eT(this, f, !0, "f"),
                  await eO(this, g, "f").features[eA].disconnect();
              } catch (e) {
                this.emit("error", new z.UG(e?.message, e));
              } finally {
                eT(this, f, !1, "f");
              }
            eO(this, l, "m", _).call(this);
          }
          async sendTransaction(e, t, n = {}) {
            try {
              var i;
              let r;
              let s = eO(this, u, "f");
              if (!s) throw new z.oS();
              if (ew in eO(this, g, "f").features) {
                if (s.features.includes(ew)) r = ew;
                else if (
                  eg in eO(this, g, "f").features &&
                  s.features.includes(eg)
                )
                  r = eg;
                else throw new z.cO();
              } else if (eg in eO(this, g, "f").features) {
                if (!s.features.includes(eg)) throw new z.cO();
                r = eg;
              } else throw new z.p6();
              let a = (i = t.rpcEndpoint).includes(
                "https://api.mainnet-beta.solana.com"
              )
                ? eE
                : /\bdevnet\b/i.test(i)
                ? "solana:devnet"
                : /\btestnet\b/i.test(i)
                ? "solana:testnet"
                : /\blocalhost\b/i.test(i) || /\b127\.0\.0\.1\b/.test(i)
                ? "solana:localnet"
                : eE;
              if (!s.chains.includes(a)) throw new z.IW();
              try {
                let i;
                let { signers: o, ...c } = n;
                if (
                  ((0, j.W)(e)
                    ? (o?.length && e.sign(o), (i = e.serialize()))
                    : ((e = await this.prepareTransaction(e, t, c)),
                      o?.length && e.partialSign(...o),
                      (i = new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ))),
                  r === ew)
                ) {
                  let [e] = await eO(this, g, "f").features[
                    ew
                  ].signAndSendTransaction({
                    account: s,
                    chain: a,
                    transaction: i,
                    options: {
                      preflightCommitment: eS(
                        c.preflightCommitment || t.commitment
                      ),
                      skipPreflight: c.skipPreflight,
                      maxRetries: c.maxRetries,
                      minContextSlot: c.minContextSlot,
                    },
                  });
                  return H.encode(e.signature);
                }
                {
                  let [e] = await eO(this, g, "f").features[eg].signTransaction(
                    {
                      account: s,
                      chain: a,
                      transaction: i,
                      options: {
                        preflightCommitment: eS(
                          c.preflightCommitment || t.commitment
                        ),
                        minContextSlot: c.minContextSlot,
                      },
                    }
                  );
                  return await t.sendRawTransaction(e.signedTransaction, {
                    ...c,
                    preflightCommitment: eS(
                      c.preflightCommitment || t.commitment
                    ),
                  });
                }
              } catch (e) {
                if (e instanceof z.lj) throw e;
                throw new z.IW(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
        }
        (u = new WeakMap()),
          (d = new WeakMap()),
          (h = new WeakMap()),
          (f = new WeakMap()),
          (y = new WeakMap()),
          (w = new WeakMap()),
          (g = new WeakMap()),
          (p = new WeakMap()),
          (E = new WeakMap()),
          (l = new WeakSet()),
          (m = async function (e) {
            try {
              if (this.connected || this.connecting) return;
              if (eO(this, p, "f") !== N.i1.Installed) throw new z.OZ();
              if ((eT(this, h, !0, "f"), !eO(this, g, "f").accounts.length))
                try {
                  await eO(this, g, "f").features[ep].connect(e);
                } catch (e) {
                  throw new z.$w(e?.message, e);
                }
              let t = eO(this, g, "f").accounts[0];
              if (!t) throw new z.cO();
              eO(this, l, "m", v).call(this, t);
            } catch (e) {
              throw (this.emit("error", e), e);
            } finally {
              eT(this, h, !1, "f");
            }
          }),
          (v = function (e) {
            let t;
            try {
              t = new C.PublicKey(e.address);
            } catch (e) {
              throw new z.Nx(e?.message, e);
            }
            eT(this, u, e, "f"),
              eT(this, d, t, "f"),
              eO(this, l, "m", b).call(this),
              this.emit("connect", t);
          }),
          (_ = function () {
            eT(this, u, null, "f"),
              eT(this, d, null, "f"),
              eO(this, l, "m", b).call(this),
              this.emit("disconnect");
          }),
          (b = function () {
            let e =
              ew in eO(this, g, "f").features
                ? eO(this, g, "f").features[ew].supportedTransactionVersions
                : eO(this, g, "f").features[eg].supportedTransactionVersions;
            eT(
              this,
              w,
              !(function (e, t) {
                if (e === t) return !0;
                let n = e.length;
                if (n !== t.length) return !1;
                for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
                return !0;
              })(e, ["legacy"])
                ? new Set(e)
                : null,
              "f"
            ),
              eg in eO(this, g, "f").features &&
              eO(this, u, "f")?.features.includes(eg)
                ? ((this.signTransaction = eO(this, l, "m", S)),
                  (this.signAllTransactions = eO(this, l, "m", A)))
                : (delete this.signTransaction,
                  delete this.signAllTransactions),
              e_ in eO(this, g, "f").features &&
              eO(this, u, "f")?.features.includes(e_)
                ? (this.signMessage = eO(this, l, "m", O))
                : delete this.signMessage,
              eb in eO(this, g, "f").features
                ? (this.signIn = eO(this, l, "m", T))
                : delete this.signIn;
          }),
          (S = async function (e) {
            try {
              let t = eO(this, u, "f");
              if (!t) throw new z.oS();
              if (!(eg in eO(this, g, "f").features)) throw new z.p6();
              if (!t.features.includes(eg)) throw new z.cO();
              try {
                let n = (
                  await eO(this, g, "f").features[eg].signTransaction({
                    account: t,
                    transaction: (0, j.W)(e)
                      ? e.serialize()
                      : new Uint8Array(
                          e.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1,
                          })
                        ),
                  })
                )[0].signedTransaction;
                return (0, j.W)(e)
                  ? C.VersionedTransaction.deserialize(n)
                  : C.Transaction.from(n);
              } catch (e) {
                if (e instanceof z.lj) throw e;
                throw new z.PY(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }),
          (A = async function (e) {
            try {
              let t = eO(this, u, "f");
              if (!t) throw new z.oS();
              if (!(eg in eO(this, g, "f").features)) throw new z.p6();
              if (!t.features.includes(eg)) throw new z.cO();
              try {
                let n = await eO(this, g, "f").features[eg].signTransaction(
                  ...e.map((e) => ({
                    account: t,
                    transaction: (0, j.W)(e)
                      ? e.serialize()
                      : new Uint8Array(
                          e.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1,
                          })
                        ),
                  }))
                );
                return e.map((e, t) => {
                  let i = n[t].signedTransaction;
                  return (0, j.W)(e)
                    ? C.VersionedTransaction.deserialize(i)
                    : C.Transaction.from(i);
                });
              } catch (e) {
                throw new z.PY(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }),
          (O = async function (e) {
            try {
              let t = eO(this, u, "f");
              if (!t) throw new z.oS();
              if (!(e_ in eO(this, g, "f").features)) throw new z.p6();
              if (!t.features.includes(e_)) throw new z.cO();
              try {
                return (
                  await eO(this, g, "f").features[e_].signMessage({
                    account: t,
                    message: e,
                  })
                )[0].signature;
              } catch (e) {
                throw new z.fk(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }),
          (T = async function (e = {}) {
            try {
              let t;
              if (!(eb in eO(this, g, "f").features)) throw new z.p6();
              try {
                [t] = await eO(this, g, "f").features[eb].signIn(e);
              } catch (e) {
                throw new z.bD(e?.message, e);
              }
              if (!t) throw new z.bD();
              return eO(this, l, "m", v).call(this, t.account), t;
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          });
        var eM = function (e, t, n, i) {
            if ("a" === n && !i)
              throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          },
          eR = function (e, t, n, i, r) {
            if ("m" === i) throw TypeError("Private method is not writable");
            if ("a" === i && !r)
              throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n
            );
          };
        let eN = new Set(),
          ez = {};
        function ej(...e) {
          return (e = e.filter((e) => !eN.has(e))).length
            ? (e.forEach((e) => {
                (r = void 0), eN.add(e);
              }),
              ez.register?.forEach((t) => eL(() => t(...e))),
              function () {
                e.forEach((e) => {
                  (r = void 0), eN.delete(e);
                }),
                  ez.unregister?.forEach((t) => eL(() => t(...e)));
              })
            : () => {};
        }
        function eC() {
          return r || (r = [...eN]), r;
        }
        function eD(e, t) {
          return (
            ez[e]?.push(t) || (ez[e] = [t]),
            function () {
              ez[e] = ez[e]?.filter((e) => t !== e);
            }
          );
        }
        function eL(e) {
          try {
            e();
          } catch (e) {
            console.error(e);
          }
        }
        class eU extends Event {
          get detail() {
            return eM(this, I, "f");
          }
          get type() {
            return "wallet-standard:app-ready";
          }
          constructor(e) {
            super("wallet-standard:app-ready", {
              bubbles: !1,
              cancelable: !1,
              composed: !1,
            }),
              I.set(this, void 0),
              eR(this, I, e, "f");
          }
          preventDefault() {
            throw Error("preventDefault cannot be called");
          }
          stopImmediatePropagation() {
            throw Error("stopImmediatePropagation cannot be called");
          }
          stopPropagation() {
            throw Error("stopPropagation cannot be called");
          }
        }
        I = new WeakMap();
        var ex = n(67294);
        function eP(e) {
          let t = (0, ex.useRef)(void 0);
          return (
            void 0 === t.current && (t.current = { value: e() }),
            t.current.value
          );
        }
        function ek(e) {
          return e.filter(ev).map((e) => new eI({ wallet: e }));
        }
        ((c = M || (M = {}))[(c.DESKTOP_WEB = 0)] = "DESKTOP_WEB"),
          (c[(c.MOBILE_WEB = 1)] = "MOBILE_WEB");
        var eW = n(44718);
        class eK extends z.lj {
          constructor() {
            super(...arguments), (this.name = "WalletNotSelectedError");
          }
        }
        var eB = n(54306);
        function eY({
          children: e,
          wallets: t,
          adapter: n,
          isUnloadingRef: i,
          onAutoConnectRequest: r,
          onConnectError: s,
          onError: a,
          onSelectWallet: o,
        }) {
          let c = (0, ex.useRef)(!1),
            [l, u] = (0, ex.useState)(!1),
            d = (0, ex.useRef)(!1),
            [h, f] = (0, ex.useState)(!1),
            [y, w] = (0, ex.useState)(() => n?.publicKey ?? null),
            [g, p] = (0, ex.useState)(() => n?.connected ?? !1),
            m = (0, ex.useRef)(a);
          (0, ex.useEffect)(
            () => (
              (m.current = a),
              () => {
                m.current = void 0;
              }
            ),
            [a]
          );
          let v = (0, ex.useRef)(
              (e, t) => (
                !i.current &&
                  (m.current
                    ? m.current(e, t)
                    : (console.error(e, t),
                      e instanceof z.OZ &&
                        "undefined" != typeof window &&
                        t &&
                        window.open(t.url, "_blank"))),
                e
              )
            ),
            [_, b] = (0, ex.useState)(() =>
              t
                .map((e) => ({ adapter: e, readyState: e.readyState }))
                .filter(({ readyState: e }) => e !== N.i1.Unsupported)
            );
          (0, ex.useEffect)(() => {
            function e(e) {
              b((t) => {
                let n = t.findIndex(({ adapter: e }) => e === this);
                if (-1 === n) return t;
                let { adapter: i } = t[n];
                return [
                  ...t.slice(0, n),
                  { adapter: i, readyState: e },
                  ...t.slice(n + 1),
                ].filter(({ readyState: e }) => e !== N.i1.Unsupported);
              });
            }
            return (
              b((e) =>
                t
                  .map((t, n) => {
                    let i = e[n];
                    return i && i.adapter === t && i.readyState === t.readyState
                      ? i
                      : { adapter: t, readyState: t.readyState };
                  })
                  .filter(({ readyState: e }) => e !== N.i1.Unsupported)
              ),
              t.forEach((t) => t.on("readyStateChange", e, t)),
              () => {
                t.forEach((t) => t.off("readyStateChange", e, t));
              }
            );
          }, [n, t]);
          let E = (0, ex.useMemo)(
            () => _.find((e) => e.adapter === n) ?? null,
            [n, _]
          );
          (0, ex.useEffect)(() => {
            if (!n) return;
            let e = (e) => {
                w(e), (c.current = !1), u(!1), p(!0), (d.current = !1), f(!1);
              },
              t = () => {
                i.current ||
                  (w(null),
                  (c.current = !1),
                  u(!1),
                  p(!1),
                  (d.current = !1),
                  f(!1));
              },
              r = (e) => {
                v.current(e, n);
              };
            return (
              n.on("connect", e),
              n.on("disconnect", t),
              n.on("error", r),
              () => {
                n.off("connect", e),
                  n.off("disconnect", t),
                  n.off("error", r),
                  t();
              }
            );
          }, [n, i]);
          let S = (0, ex.useRef)(!1);
          (0, ex.useEffect)(
            () => () => {
              S.current = !1;
            },
            [n]
          ),
            (0, ex.useEffect)(() => {
              S.current ||
                c.current ||
                g ||
                !r ||
                (E?.readyState !== N.i1.Installed &&
                  E?.readyState !== N.i1.Loadable) ||
                ((c.current = !0),
                u(!0),
                (S.current = !0),
                (async function () {
                  try {
                    await r();
                  } catch {
                    s();
                  } finally {
                    u(!1), (c.current = !1);
                  }
                })());
            }, [g, r, s, E]);
          let A = (0, ex.useCallback)(
              async (e, t, i) => {
                if (!n) throw v.current(new eK());
                if (!g) throw v.current(new z.oS(), n);
                return await n.sendTransaction(e, t, i);
              },
              [n, g]
            ),
            O = (0, ex.useMemo)(
              () =>
                n && "signTransaction" in n
                  ? async (e) => {
                      if (!g) throw v.current(new z.oS(), n);
                      return await n.signTransaction(e);
                    }
                  : void 0,
              [n, g]
            ),
            T = (0, ex.useMemo)(
              () =>
                n && "signAllTransactions" in n
                  ? async (e) => {
                      if (!g) throw v.current(new z.oS(), n);
                      return await n.signAllTransactions(e);
                    }
                  : void 0,
              [n, g]
            ),
            I = (0, ex.useMemo)(
              () =>
                n && "signMessage" in n
                  ? async (e) => {
                      if (!g) throw v.current(new z.oS(), n);
                      return await n.signMessage(e);
                    }
                  : void 0,
              [n, g]
            ),
            M = (0, ex.useMemo)(
              () =>
                n && "signIn" in n ? async (e) => await n.signIn(e) : void 0,
              [n]
            ),
            R = (0, ex.useCallback)(async () => {
              if (c.current || d.current || E?.adapter.connected) return;
              if (!E) throw v.current(new eK());
              let { adapter: e, readyState: t } = E;
              if (!(t === N.i1.Installed || t === N.i1.Loadable))
                throw v.current(new z.OZ(), e);
              (c.current = !0), u(!0);
              try {
                await e.connect();
              } catch (e) {
                throw (s(), e);
              } finally {
                u(!1), (c.current = !1);
              }
            }, [s, E]),
            j = (0, ex.useCallback)(async () => {
              if (!d.current && n) {
                (d.current = !0), f(!0);
                try {
                  await n.disconnect();
                } finally {
                  f(!1), (d.current = !1);
                }
              }
            }, [n]);
          return ex.createElement(
            eB.z.Provider,
            {
              value: {
                autoConnect: !!r,
                wallets: _,
                wallet: E,
                publicKey: y,
                connected: g,
                connecting: l,
                disconnecting: h,
                select: o,
                connect: R,
                disconnect: j,
                sendTransaction: A,
                signTransaction: O,
                signAllTransactions: T,
                signMessage: I,
                signIn: M,
              },
            },
            e
          );
        }
        function e$(e) {
          return (
            (function ({ adapters: e, userAgentString: t }) {
              return e.some(
                (e) => e.name !== eu && e.readyState === N.i1.Installed
              )
                ? M.DESKTOP_WEB
                : t &&
                  /android/i.test(t) &&
                  !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(
                    t
                  )
                ? M.MOBILE_WEB
                : M.DESKTOP_WEB;
            })({
              adapters: e,
              userAgentString:
                (void 0 === s && (s = globalThis.navigator?.userAgent ?? null),
                s),
            }) === M.MOBILE_WEB
          );
        }
        function eQ({
          children: e,
          wallets: t,
          autoConnect: n,
          localStorageKey: i = "walletName",
          onError: r,
        }) {
          let { connection: s } = (0, eW.R)(),
            a = (function (e) {
              let t = eP(() => new Set()),
                { get: n, on: i } = eP(() =>
                  (function () {
                    if (
                      o ||
                      ((o = (function () {
                        if (
                          o ||
                          ((o = Object.freeze({
                            register: ej,
                            get: eC,
                            on: eD,
                          })),
                          "undefined" == typeof window)
                        )
                          return o;
                        let e = Object.freeze({ register: ej });
                        try {
                          window.addEventListener(
                            "wallet-standard:register-wallet",
                            ({ detail: t }) => t(e)
                          );
                        } catch (e) {
                          console.error(
                            "wallet-standard:register-wallet event listener could not be added\n",
                            e
                          );
                        }
                        try {
                          window.dispatchEvent(new eU(e));
                        } catch (e) {
                          console.error(
                            "wallet-standard:app-ready event could not be dispatched\n",
                            e
                          );
                        }
                        return o;
                      })()),
                      "undefined" == typeof window)
                    )
                      return o;
                    let e = window.navigator.wallets || [];
                    if (!Array.isArray(e))
                      return (
                        console.error(
                          "window.navigator.wallets is not an array"
                        ),
                        o
                      );
                    let { register: t } = o,
                      n = (...e) =>
                        e.forEach((e) => eL(() => e({ register: t })));
                    try {
                      Object.defineProperty(window.navigator, "wallets", {
                        value: Object.freeze({ push: n }),
                      });
                    } catch (e) {
                      return (
                        console.error(
                          "window.navigator.wallets could not be set"
                        ),
                        o
                      );
                    }
                    return n(...e), o;
                  })()
                ),
                [r, s] = (0, ex.useState)(() => ek(n()));
              (0, ex.useEffect)(() => {
                let e = [
                  i("register", (...e) => s((t) => [...t, ...ek(e)])),
                  i("unregister", (...e) =>
                    s((t) => t.filter((t) => e.some((e) => e === t.wallet)))
                  ),
                ];
                return () => e.forEach((e) => e());
              }, [i]);
              let a = (function (e) {
                let t = (0, ex.useRef)(void 0);
                return (
                  (0, ex.useEffect)(() => {
                    t.current = e;
                  }),
                  t.current
                );
              })(r);
              return (
                (0, ex.useEffect)(() => {
                  if (!a) return;
                  let e = new Set(r);
                  new Set(a.filter((t) => !e.has(t))).forEach((e) =>
                    e.destroy()
                  );
                }, [a, r]),
                (0, ex.useEffect)(
                  () => () => r.forEach((e) => e.destroy()),
                  []
                ),
                (0, ex.useMemo)(
                  () => [
                    ...r,
                    ...e.filter(
                      ({ name: e }) =>
                        !r.some((t) => t.name === e) ||
                        (t.has(e) ||
                          (t.add(e),
                          console.warn(
                            `${e} was registered as a Standard Wallet. The Wallet Adapter for ${e} can be removed from your app.`
                          )),
                        !1)
                    ),
                  ],
                  [r, e, t]
                )
              );
            })(t),
            c = (0, ex.useMemo)(() => {
              var e;
              if (!e$(a)) return null;
              let t = a.find((e) => e.name === eu);
              return (
                t ||
                new eh({
                  addressSelector: {
                    select(e) {
                      return ec(this, void 0, void 0, function* () {
                        return e[0];
                      });
                    },
                  },
                  appIdentity: {
                    uri: (function () {
                      let e = globalThis.location;
                      if (e) return `${e.protocol}//${e.host}`;
                    })(),
                  },
                  authorizationResultCache: (function () {
                    let e;
                    try {
                      e = window.localStorage;
                    } catch (e) {}
                    return {
                      clear() {
                        return ec(this, void 0, void 0, function* () {
                          if (e)
                            try {
                              e.removeItem(ef);
                            } catch (e) {}
                        });
                      },
                      get() {
                        return ec(this, void 0, void 0, function* () {
                          if (e)
                            try {
                              return JSON.parse(e.getItem(ef)) || void 0;
                            } catch (e) {}
                        });
                      },
                      set(t) {
                        return ec(this, void 0, void 0, function* () {
                          if (e)
                            try {
                              e.setItem(ef, JSON.stringify(t));
                            } catch (e) {}
                        });
                      },
                    };
                  })(),
                  cluster: (e = s?.rpcEndpoint)
                    ? /devnet/i.test(e)
                      ? "devnet"
                      : /testnet/i.test(e)
                      ? "testnet"
                      : "mainnet-beta"
                    : "mainnet-beta",
                  onWalletNotFound: ey,
                })
              );
            }, [a, s?.rpcEndpoint]),
            l = (0, ex.useMemo)(
              () => (null == c || -1 !== a.indexOf(c) ? a : [c, ...a]),
              [a, c]
            ),
            [u, d] = (function (e, t) {
              let n = (0, ex.useState)(() => {
                  try {
                    let t = localStorage.getItem(e);
                    if (t) return JSON.parse(t);
                  } catch (e) {
                    "undefined" != typeof window && console.error(e);
                  }
                  return t;
                }),
                i = n[0],
                r = (0, ex.useRef)(!0);
              return (
                (0, ex.useEffect)(() => {
                  if (r.current) {
                    r.current = !1;
                    return;
                  }
                  try {
                    null === i
                      ? localStorage.removeItem(e)
                      : localStorage.setItem(e, JSON.stringify(i));
                  } catch (e) {
                    "undefined" != typeof window && console.error(e);
                  }
                }, [i, e]),
                n
              );
            })(i, e$(a) ? eu : null),
            h = (0, ex.useMemo)(
              () => l.find((e) => e.name === u) ?? null,
              [l, u]
            ),
            f = (0, ex.useCallback)(
              (e) => {
                u !== e && (h && h.name !== eu && h.disconnect(), d(e));
              },
              [h, d, u]
            );
          (0, ex.useEffect)(() => {
            if (h)
              return (
                h.on("disconnect", e),
                () => {
                  h.off("disconnect", e);
                }
              );
            function e() {
              !g.current && ((u === eu && e$(a)) || d(null));
            }
          }, [h, a, d, u]);
          let y = (0, ex.useRef)(!1),
            w = (0, ex.useMemo)(() => {
              if (n && h)
                return async () => {
                  (!0 === n || (await n(h))) &&
                    (y.current ? await h.connect() : await h.autoConnect());
                };
            }, [n, h]),
            g = (0, ex.useRef)(!1);
          (0, ex.useEffect)(() => {
            if (u === eu && e$(a)) {
              g.current = !1;
              return;
            }
            function e() {
              g.current = !0;
            }
            return (
              window.addEventListener("beforeunload", e),
              () => {
                window.removeEventListener("beforeunload", e);
              }
            );
          }, [a, u]);
          let p = (0, ex.useCallback)(() => {
              h && h.name !== eu && f(null);
            }, [h, f]),
            m = (0, ex.useCallback)(
              (e) => {
                (y.current = !0), f(e);
              },
              [f]
            );
          return ex.createElement(
            eY,
            {
              wallets: l,
              adapter: h,
              isUnloadingRef: g,
              onAutoConnectRequest: w,
              onConnectError: p,
              onError: r,
              onSelectWallet: m,
            },
            e
          );
        }
      },
      44718: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return s;
          },
          h: function () {
            return r;
          },
        });
        var i = n(67294);
        let r = (0, i.createContext)({});
        function s() {
          return (0, i.useContext)(r);
        }
      },
      54306: function (e, t, n) {
        "use strict";
        n.d(t, {
          O: function () {
            return c;
          },
          z: function () {
            return o;
          },
        });
        var i = n(67294);
        let r = [],
          s = {
            autoConnect: !1,
            connecting: !1,
            connected: !1,
            disconnecting: !1,
            select() {
              a("call", "select");
            },
            connect: () => Promise.reject(a("call", "connect")),
            disconnect: () => Promise.reject(a("call", "disconnect")),
            sendTransaction: () => Promise.reject(a("call", "sendTransaction")),
            signTransaction: () => Promise.reject(a("call", "signTransaction")),
            signAllTransactions: () =>
              Promise.reject(a("call", "signAllTransactions")),
            signMessage: () => Promise.reject(a("call", "signMessage")),
            signIn: () => Promise.reject(a("call", "signIn")),
          };
        function a(e, t) {
          let n = Error(
            `You have tried to ${e} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
          );
          return console.error(n), n;
        }
        Object.defineProperty(s, "wallets", {
          get: () => (a("read", "wallets"), r),
        }),
          Object.defineProperty(s, "wallet", {
            get: () => (a("read", "wallet"), null),
          }),
          Object.defineProperty(s, "publicKey", {
            get: () => (a("read", "publicKey"), null),
          });
        let o = (0, i.createContext)(s);
        function c() {
          return (0, i.useContext)(o);
        }
      },
    },
  ]);
