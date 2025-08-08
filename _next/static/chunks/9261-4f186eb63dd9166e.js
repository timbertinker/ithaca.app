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
      (e._sentryDebugIds[t] = "41a40430-b3cc-42f5-935c-2560a42c5ddc"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-41a40430-b3cc-42f5-935c-2560a42c5ddc"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9261],
  {
    5019: function (e, t, n) {
      n.d(t, {
        V: function () {
          return k;
        },
      });
      var r = n(84917);
      let a = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
        o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
        i =
          /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,
        s = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/,
        u =
          /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,
        c = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,
        d = /^receive\(\) external payable$/,
        l = new Set(["indexed"]),
        f = new Set(["calldata", "memory", "storage"]);
      class p extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof p
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            r = (t.cause instanceof p && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(r ? [`Docs: https://abitype.dev${r}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              "Version: abitype@1.0.5",
            ].join("\n")
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = r),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
      class b extends p {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class h extends p {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
      class m extends p {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class y extends p {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class g extends p {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class v extends p {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class w extends p {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
      class x extends p {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class $ extends p {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class P extends p {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
      class M extends p {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      class E extends p {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let I = new Map([
          ["address", { type: "address" }],
          ["bool", { type: "bool" }],
          ["bytes", { type: "bytes" }],
          ["bytes32", { type: "bytes32" }],
          ["int", { type: "int256" }],
          ["int256", { type: "int256" }],
          ["string", { type: "string" }],
          ["uint", { type: "uint256" }],
          ["uint8", { type: "uint8" }],
          ["uint16", { type: "uint16" }],
          ["uint24", { type: "uint24" }],
          ["uint32", { type: "uint32" }],
          ["uint64", { type: "uint64" }],
          ["uint96", { type: "uint96" }],
          ["uint112", { type: "uint112" }],
          ["uint160", { type: "uint160" }],
          ["uint192", { type: "uint192" }],
          ["uint256", { type: "uint256" }],
          ["address owner", { type: "address", name: "owner" }],
          ["address to", { type: "address", name: "to" }],
          ["bool approved", { type: "bool", name: "approved" }],
          ["bytes _data", { type: "bytes", name: "_data" }],
          ["bytes data", { type: "bytes", name: "data" }],
          ["bytes signature", { type: "bytes", name: "signature" }],
          ["bytes32 hash", { type: "bytes32", name: "hash" }],
          ["bytes32 r", { type: "bytes32", name: "r" }],
          ["bytes32 root", { type: "bytes32", name: "root" }],
          ["bytes32 s", { type: "bytes32", name: "s" }],
          ["string name", { type: "string", name: "name" }],
          ["string symbol", { type: "string", name: "symbol" }],
          ["string tokenURI", { type: "string", name: "tokenURI" }],
          ["uint tokenId", { type: "uint256", name: "tokenId" }],
          ["uint8 v", { type: "uint8", name: "v" }],
          ["uint256 balance", { type: "uint256", name: "balance" }],
          ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
          ["uint256 value", { type: "uint256", name: "value" }],
          [
            "event:address indexed from",
            { type: "address", name: "from", indexed: !0 },
          ],
          [
            "event:address indexed to",
            { type: "address", name: "to", indexed: !0 },
          ],
          [
            "event:uint indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
          [
            "event:uint256 indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
        ]),
        G =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        A =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        C = /^u?int$/;
      function j(e, t) {
        var n, a, o;
        let i;
        let s = (n = t?.type) ? `${n}:${e}` : e;
        if (I.has(s)) return I.get(s);
        let u = r.cN.test(e),
          c = (0, r.Zw)(u ? A : G, e);
        if (!c) throw new m({ param: e });
        if (
          c.name &&
          ("address" === (a = c.name) ||
            "bool" === a ||
            "function" === a ||
            "string" === a ||
            "tuple" === a ||
            r.eL.test(a) ||
            r.lh.test(a) ||
            R.test(a))
        )
          throw new y({ param: e, name: c.name });
        let d = c.name ? { name: c.name } : {},
          l = "indexed" === c.modifier ? { indexed: !0 } : {},
          p = t?.structs ?? {},
          b = {};
        if (u) {
          i = "tuple";
          let e = O(c.type),
            t = [],
            n = e.length;
          for (let r = 0; r < n; r++) t.push(j(e[r], { structs: p }));
          b = { components: t };
        } else if (c.type in p) (i = "tuple"), (b = { components: p[c.type] });
        else if (C.test(c.type)) i = `${c.type}256`;
        else if (((i = c.type), t?.type !== "struct" && !T(i)))
          throw new h({ type: i });
        if (c.modifier) {
          if (!t?.modifiers?.has?.(c.modifier))
            throw new g({ param: e, type: t?.type, modifier: c.modifier });
          if (
            f.has(c.modifier) &&
            ((o = i),
            !c.array && "bytes" !== o && "string" !== o && "tuple" !== o)
          )
            throw new v({ param: e, type: t?.type, modifier: c.modifier });
        }
        let w = { type: `${i}${c.array ?? ""}`, ...d, ...l, ...b };
        return I.set(s, w), w;
      }
      function O(e, t = [], n = "", r = 0) {
        let a = e.trim().length;
        for (let o = 0; o < a; o++) {
          let a = e[o],
            i = e.slice(o + 1);
          switch (a) {
            case ",":
              return 0 === r ? O(i, [...t, n.trim()]) : O(i, t, `${n}${a}`, r);
            case "(":
              return O(i, t, `${n}${a}`, r + 1);
            case ")":
              return O(i, t, `${n}${a}`, r - 1);
            default:
              return O(i, t, `${n}${a}`, r);
          }
        }
        if ("" === n) return t;
        if (0 !== r) throw new E({ current: n, depth: r });
        return t.push(n.trim()), t;
      }
      function T(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          r.eL.test(e) ||
          r.lh.test(e)
        );
      }
      let R =
          /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,
        z = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
      function k(e) {
        let t = (function (e) {
            let t = {},
              n = e.length;
            for (let a = 0; a < n; a++) {
              let n = e[a];
              if (!s.test(n)) continue;
              let o = (0, r.Zw)(s, n);
              if (!o) throw new x({ signature: n, type: "struct" });
              let i = o.properties.split(";"),
                u = [],
                c = i.length;
              for (let e = 0; e < c; e++) {
                let t = i[e].trim();
                if (!t) continue;
                let n = j(t, { type: "struct" });
                u.push(n);
              }
              if (!u.length) throw new P({ signature: n });
              t[o.name] = u;
            }
            let a = {},
              o = Object.entries(t),
              i = o.length;
            for (let e = 0; e < i; e++) {
              let [n, i] = o[e];
              a[n] = (function e(t, n, a = new Set()) {
                let o = [],
                  i = t.length;
                for (let s = 0; s < i; s++) {
                  let i = t[s];
                  if (r.cN.test(i.type)) o.push(i);
                  else {
                    let t = (0, r.Zw)(z, i.type);
                    if (!t?.type) throw new w({ abiParameter: i });
                    let { array: s, type: u } = t;
                    if (u in n) {
                      if (a.has(u)) throw new M({ type: u });
                      o.push({
                        ...i,
                        type: `tuple${s ?? ""}`,
                        components: e(n[u] ?? [], n, new Set([...a, u])),
                      });
                    } else if (T(u)) o.push(i);
                    else throw new b({ type: u });
                  }
                }
                return o;
              })(i, t);
            }
            return a;
          })(e),
          n = [],
          p = e.length;
        for (let b = 0; b < p; b++) {
          let p = e[b];
          s.test(p) ||
            n.push(
              (function (e, t = {}) {
                if (i.test(e)) {
                  let n = (0, r.Zw)(i, e);
                  if (!n) throw new x({ signature: e, type: "function" });
                  let a = O(n.parameters),
                    o = [],
                    s = a.length;
                  for (let e = 0; e < s; e++)
                    o.push(
                      j(a[e], { modifiers: f, structs: t, type: "function" })
                    );
                  let u = [];
                  if (n.returns) {
                    let e = O(n.returns),
                      r = e.length;
                    for (let n = 0; n < r; n++)
                      u.push(
                        j(e[n], { modifiers: f, structs: t, type: "function" })
                      );
                  }
                  return {
                    name: n.name,
                    type: "function",
                    stateMutability: n.stateMutability ?? "nonpayable",
                    inputs: o,
                    outputs: u,
                  };
                }
                if (o.test(e)) {
                  let n = (0, r.Zw)(o, e);
                  if (!n) throw new x({ signature: e, type: "event" });
                  let a = O(n.parameters),
                    i = [],
                    s = a.length;
                  for (let e = 0; e < s; e++)
                    i.push(
                      j(a[e], { modifiers: l, structs: t, type: "event" })
                    );
                  return { name: n.name, type: "event", inputs: i };
                }
                if (a.test(e)) {
                  let n = (0, r.Zw)(a, e);
                  if (!n) throw new x({ signature: e, type: "error" });
                  let o = O(n.parameters),
                    i = [],
                    s = o.length;
                  for (let e = 0; e < s; e++)
                    i.push(j(o[e], { structs: t, type: "error" }));
                  return { name: n.name, type: "error", inputs: i };
                }
                if (u.test(e)) {
                  let n = (0, r.Zw)(u, e);
                  if (!n) throw new x({ signature: e, type: "constructor" });
                  let a = O(n.parameters),
                    o = [],
                    i = a.length;
                  for (let e = 0; e < i; e++)
                    o.push(j(a[e], { structs: t, type: "constructor" }));
                  return {
                    type: "constructor",
                    stateMutability: n.stateMutability ?? "nonpayable",
                    inputs: o,
                  };
                }
                if (c.test(e)) return { type: "fallback" };
                if (d.test(e))
                  return { type: "receive", stateMutability: "payable" };
                throw new $({ signature: e });
              })(p, t)
            );
        }
        return n;
      }
    },
    84917: function (e, t, n) {
      function r(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, {
        Zw: function () {
          return r;
        },
        cN: function () {
          return i;
        },
        eL: function () {
          return a;
        },
        lh: function () {
          return o;
        },
      });
      let a = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        i = /^\(.+?\).*?$/;
    },
    14503: function (e, t, n) {
      n.d(t, {
        T: function () {
          return r;
        },
      });
      function r(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    61376: function (e, t, n) {
      n.d(t, {
        R: function () {
          return $;
        },
      });
      var r = n(5019),
        a = n(14503),
        o = n(14504),
        i = n(18590),
        s = n(36117),
        u = n(80377),
        c = n(97405),
        d = n(7210),
        l = n(30286),
        f = n(55629),
        p = n(47864),
        b = n(92106),
        h = n(26445),
        m = n(87469),
        y = n(61163),
        g = n(74688),
        v = n(32357),
        w = n(50150),
        x = n(47531);
      async function $(e, t) {
        let {
            account: o = e.account,
            batch: d = !!e.batch?.multicall,
            blockNumber: f,
            blockTag: p = "latest",
            accessList: v,
            blobs: $,
            code: M,
            data: E,
            factory: I,
            factoryData: G,
            gas: A,
            gasPrice: C,
            maxFeePerBlobGas: j,
            maxFeePerGas: O,
            maxPriorityFeePerGas: T,
            nonce: R,
            to: z,
            value: k,
            stateOverride: F,
            ...N
          } = t,
          B = o ? (0, a.T)(o) : void 0;
        if (M && (I || G))
          throw new s.G(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (M && z)
          throw new s.G("Cannot provide both `code` & `to` as parameters.");
        let S = M && E,
          U = I && G && z && E,
          L = S || U,
          D = S
            ? (function (e) {
                let { code: t, data: n } = e;
                return (0, l.w)({
                  abi: (0, r.V)(["constructor(bytes, bytes)"]),
                  bytecode: i.NO,
                  args: [t, n],
                });
              })({ code: M, data: E })
            : U
            ? (function (e) {
                let { data: t, factory: n, factoryData: a, to: o } = e;
                return (0, l.w)({
                  abi: (0, r.V)([
                    "constructor(address, bytes, address, bytes)",
                  ]),
                  bytecode: i.pG,
                  args: [o, t, n, a],
                });
              })({ data: E, factory: I, factoryData: G, to: z })
            : E;
        try {
          (0, x.F)(t);
          let n = (f ? (0, b.eC)(f) : void 0) || p,
            r = (0, w.mF)(F),
            a = e.chain?.formatters?.transactionRequest?.format,
            o = (a || g.tG)({
              ...(0, y.K)(N, { format: a }),
              from: B?.address,
              accessList: v,
              blobs: $,
              data: D,
              gas: A,
              gasPrice: C,
              maxFeePerBlobGas: j,
              maxFeePerGas: O,
              maxPriorityFeePerGas: T,
              nonce: R,
              to: L ? void 0 : z,
              value: k,
            });
          if (
            d &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: o }) &&
            !r
          )
            try {
              return await P(e, { ...o, blockNumber: f, blockTag: p });
            } catch (e) {
              if (!(e instanceof u.pZ) && !(e instanceof u.mm)) throw e;
            }
          let i = await e.request({
            method: "eth_call",
            params: r ? [o, n, r] : [o, n],
          });
          if ("0x" === i) return { data: void 0 };
          return { data: i };
        } catch (i) {
          let r = (function (e) {
              if (!(e instanceof s.G)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(i),
            { offchainLookup: a, offchainLookupSignature: o } = await n
              .e(1785)
              .then(n.bind(n, 21785));
          if (!1 !== e.ccipRead && r?.slice(0, 10) === o && z)
            return { data: await a(e, { data: r, to: z }) };
          if (L && r?.slice(0, 10) === "0x101bb98d")
            throw new c.Mo({ factory: I });
          throw (function (e, { docsPath: t, ...n }) {
            let r = (() => {
              let t = (0, m.k)(e, n);
              return t instanceof h.cj ? e : t;
            })();
            return new c.cg(r, { docsPath: t, ...n });
          })(i, { ...t, account: B, chain: e.chain });
        }
      }
      async function P(e, t) {
        let { batchSize: n = 1024, wait: r = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: a,
            blockTag: i = "latest",
            data: s,
            multicallAddress: l,
            to: h,
          } = t,
          m = l;
        if (!m) {
          if (!e.chain) throw new u.pZ();
          m = (0, p.L)({
            blockNumber: a,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let y = (a ? (0, b.eC)(a) : void 0) || i,
          { schedule: g } = (0, v.S)({
            id: `${e.uid}.${y}`,
            wait: r,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, f.R)({
                  abi: o.F8,
                  args: [n],
                  functionName: "aggregate3",
                }),
                a = await e.request({
                  method: "eth_call",
                  params: [{ data: r, to: m }, y],
                });
              return (0, d.k)({
                abi: o.F8,
                args: [n],
                functionName: "aggregate3",
                data: a || "0x",
              });
            },
          }),
          [{ returnData: w, success: x }] = await g({ data: s, to: h });
        if (!x) throw new c.VQ({ data: w });
        return "0x" === w ? { data: void 0 } : { data: w };
      }
    },
    88930: function (e, t, n) {
      n.d(t, {
        s: function () {
          return a;
        },
      });
      var r = n(92106);
      async function a(
        e,
        { address: t, blockNumber: n, blockTag: a = "latest" }
      ) {
        let o = n ? (0, r.eC)(n) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, o || a] })
        );
      }
    },
    9884: function (e, t, n) {
      n.d(t, {
        A: function () {
          return p;
        },
      });
      var r = n(14504),
        a = n(57412),
        o = n(36117),
        i = n(97405),
        s = n(7210),
        u = n(55629),
        c = n(47864),
        d = n(72365),
        l = n(93714),
        f = n(88819);
      async function p(e, t) {
        let {
            allowFailure: n = !0,
            batchSize: p,
            blockNumber: b,
            blockTag: h,
            multicallAddress: m,
            stateOverride: y,
          } = t,
          g = t.contracts,
          v =
            p ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          w = m;
        if (!w) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          w = (0, c.L)({
            blockNumber: b,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let x = [[]],
          $ = 0,
          P = 0;
        for (let e = 0; e < g.length; e++) {
          let { abi: t, address: r, args: a, functionName: o } = g[e];
          try {
            let e = (0, u.R)({ abi: t, args: a, functionName: o });
            (P += (e.length - 2) / 2),
              v > 0 &&
                P > v &&
                x[$].length > 0 &&
                ($++, (P = (e.length - 2) / 2), (x[$] = [])),
              (x[$] = [...x[$], { allowFailure: !0, callData: e, target: r }]);
          } catch (i) {
            let e = (0, d.S)(i, {
              abi: t,
              address: r,
              args: a,
              docsPath: "/docs/contract/multicall",
              functionName: o,
            });
            if (!n) throw e;
            x[$] = [...x[$], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let M = await Promise.allSettled(
            x.map((t) =>
              (0, l.s)(
                e,
                f.L,
                "readContract"
              )({
                abi: r.F8,
                address: w,
                args: [t],
                blockNumber: b,
                blockTag: h,
                functionName: "aggregate3",
                stateOverride: y,
              })
            )
          ),
          E = [];
        for (let e = 0; e < M.length; e++) {
          let t = M[e];
          if ("rejected" === t.status) {
            if (!n) throw t.reason;
            for (let n = 0; n < x[e].length; n++)
              E.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: o, success: u } = r[t],
              { callData: c } = x[e][t],
              { abi: l, address: f, functionName: p, args: b } = g[E.length];
            try {
              if ("0x" === c) throw new a.wb();
              if (!u) throw new i.VQ({ data: o });
              let e = (0, s.k)({ abi: l, args: b, data: o, functionName: p });
              E.push(n ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, d.S)(t, {
                abi: l,
                address: f,
                args: b,
                docsPath: "/docs/contract/multicall",
                functionName: p,
              });
              if (!n) throw e;
              E.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (E.length !== g.length) throw new o.G("multicall results mismatch");
        return E;
      }
    },
    88819: function (e, t, n) {
      n.d(t, {
        L: function () {
          return u;
        },
      });
      var r = n(7210),
        a = n(55629),
        o = n(72365),
        i = n(93714),
        s = n(61376);
      async function u(e, t) {
        let { abi: n, address: u, args: c, functionName: d, ...l } = t,
          f = (0, a.R)({ abi: n, args: c, functionName: d });
        try {
          let { data: t } = await (0, i.s)(
            e,
            s.R,
            "call"
          )({ ...l, data: f, to: u });
          return (0, r.k)({
            abi: n,
            args: c,
            functionName: d,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, o.S)(e, {
            abi: n,
            address: u,
            args: c,
            docsPath: "/docs/contract/readContract",
            functionName: d,
          });
        }
      }
    },
    14504: function (e, t, n) {
      n.d(t, {
        $o: function () {
          return c;
        },
        F8: function () {
          return r;
        },
        Wo: function () {
          return d;
        },
        X$: function () {
          return u;
        },
        du: function () {
          return i;
        },
        k3: function () {
          return o;
        },
        nZ: function () {
          return s;
        },
      });
      let r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        a = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        o = [
          ...a,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        i = [
          ...a,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        s = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        u = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        c = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
        ],
        d = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    18590: function (e, t, n) {
      n.d(t, {
        NO: function () {
          return r;
        },
        ST: function () {
          return o;
        },
        pG: function () {
          return a;
        },
      });
      let r =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        a =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        o =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    50676: function (e, t, n) {
      n.d(t, {
        zL: function () {
          return r;
        },
      });
      let r = 2n ** 256n - 1n;
    },
    21746: function (e, t, n) {
      n.d(t, {
        $: function () {
          return r;
        },
        Up: function () {
          return a;
        },
        hZ: function () {
          return o;
        },
      });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        a = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    84192: function (e, t, n) {
      n.d(t, {
        Bd: function () {
          return o;
        },
        Zn: function () {
          return a;
        },
        ez: function () {
          return r;
        },
      });
      let r = { gwei: 9, wei: 18 },
        a = { ether: -9, wei: 9 },
        o = { ether: -18, gwei: -9 };
    },
    57412: function (e, t, n) {
      n.d(t, {
        CI: function () {
          return M;
        },
        FM: function () {
          return b;
        },
        Gy: function () {
          return $;
        },
        KY: function () {
          return w;
        },
        M4: function () {
          return l;
        },
        MX: function () {
          return g;
        },
        S4: function () {
          return v;
        },
        SM: function () {
          return x;
        },
        cO: function () {
          return s;
        },
        dh: function () {
          return P;
        },
        fM: function () {
          return i;
        },
        fs: function () {
          return f;
        },
        gr: function () {
          return d;
        },
        hn: function () {
          return E;
        },
        lC: function () {
          return h;
        },
        mv: function () {
          return m;
        },
        wM: function () {
          return I;
        },
        wb: function () {
          return c;
        },
        xB: function () {
          return u;
        },
        xL: function () {
          return y;
        },
        yP: function () {
          return p;
        },
      });
      var r = n(80522),
        a = n(39135),
        o = n(36117);
      class i extends o.G {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class s extends o.G {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      class u extends o.G {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.h)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class c extends o.G {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class d extends o.G {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class l extends o.G {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, a.d)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class f extends o.G {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class p extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class b extends o.G {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class h extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class m extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class y extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class g extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class v extends o.G {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.t)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.t)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class w extends o.G {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class x extends o.G {
        constructor({ abiItem: e, data: t, params: n, size: a }) {
          super(
            `Data size of ${a} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.h)(n, { includeName: !0 })})`,
                `Data:   ${t} (${a} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = a);
        }
      }
      class $ extends o.G {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.t)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class P extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class M extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class E extends o.G {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class I extends o.G {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
    },
    80377: function (e, t, n) {
      n.d(t, {
        Bk: function () {
          return i;
        },
        Yl: function () {
          return o;
        },
        hJ: function () {
          return u;
        },
        mm: function () {
          return a;
        },
        pZ: function () {
          return s;
        },
      });
      var r = n(36117);
      class a extends r.G {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class o extends r.G {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class i extends r.G {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class s extends r.G {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      class u extends r.G {
        constructor({ chainId: e }) {
          super(
            "number" == typeof e
              ? `Chain ID "${e}" is invalid.`
              : "Chain ID is invalid.",
            { name: "InvalidChainIdError" }
          );
        }
      }
    },
    97405: function (e, t, n) {
      n.d(t, {
        cg: function () {
          return y;
        },
        uq: function () {
          return g;
        },
        Lu: function () {
          return v;
        },
        Dk: function () {
          return w;
        },
        Mo: function () {
          return x;
        },
        VQ: function () {
          return $;
        },
      });
      var r = n(14503),
        a = n(21746),
        o = n(86899),
        i = n(80522),
        s = n(96070);
      function u({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, s.P)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var c = n(40840),
        d = n(39625),
        l = n(67795),
        f = n(57412),
        p = n(36117),
        b = n(20443),
        h = n(33639),
        m = n(29008);
      class y extends p.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: a,
            data: o,
            gas: i,
            gasPrice: s,
            maxFeePerGas: u,
            maxPriorityFeePerGas: c,
            nonce: f,
            to: p,
            value: m,
            stateOverride: y,
          }
        ) {
          let g = t ? (0, r.T)(t) : void 0,
            v = (0, h.xr)({
              from: g?.address,
              to: p,
              value:
                void 0 !== m &&
                `${(0, d.d)(m)} ${a?.nativeCurrency?.symbol || "ETH"}`,
              data: o,
              gas: i,
              gasPrice: void 0 !== s && `${(0, l.o)(s)} gwei`,
              maxFeePerGas: void 0 !== u && `${(0, l.o)(u)} gwei`,
              maxPriorityFeePerGas: void 0 !== c && `${(0, l.o)(c)} gwei`,
              nonce: f,
            });
          y &&
            (v += `
${(0, b.Bj)(y)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                v,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends p.G {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: a,
            functionName: o,
            sender: s,
          }
        ) {
          let d = (0, c.mE)({ abi: t, args: n, name: o }),
            l = d
              ? u({
                  abiItem: d,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            f = d ? (0, i.t)(d, { includeName: !0 }) : void 0,
            p = (0, h.xr)({
              address: r && (0, m.C)(r),
              function: f,
              args:
                l &&
                "()" !== l &&
                `${[...Array(o?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${l}`,
              sender: s,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${o}".`,
            {
              cause: e,
              docsPath: a,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                p && "Contract Call:",
                p,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = o),
            (this.sender = s);
        }
      }
      class v extends p.G {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let s, c, d, l, p;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: s,
              } = (p = (0, o.p)({ abi: e, data: t }));
              if ("Error" === r) d = s[0];
              else if ("Panic" === r) {
                let [e] = s;
                d = a.$[e];
              } else {
                let e = n ? (0, i.t)(n, { includeName: !0 }) : void 0,
                  t =
                    n && s
                      ? u({
                          abiItem: n,
                          args: s,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                c = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              s = e;
            }
          else r && (d = r);
          s instanceof f.yP &&
            ((l = s.signature),
            (c = [
              `Unable to decode signature "${l}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`,
            ])),
            super(
              (d && "execution reverted" !== d) || l
                ? [
                    `The contract function "${n}" reverted with the following ${
                      l ? "signature" : "reason"
                    }:`,
                    d || l,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: s,
                metaMessages: c,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = p),
            (this.reason = d),
            (this.signature = l);
        }
      }
      class w extends p.G {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends p.G {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class $ extends p.G {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    66238: function (e, t, n) {
      n.d(t, {
        KD: function () {
          return i;
        },
        T_: function () {
          return a;
        },
        lQ: function () {
          return o;
        },
      });
      var r = n(36117);
      class a extends r.G {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class o extends r.G {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class i extends r.G {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    26445: function (e, t, n) {
      n.d(t, {
        C_: function () {
          return l;
        },
        G$: function () {
          return s;
        },
        Hh: function () {
          return i;
        },
        M_: function () {
          return o;
        },
        WF: function () {
          return f;
        },
        ZI: function () {
          return u;
        },
        cj: function () {
          return m;
        },
        cs: function () {
          return h;
        },
        dR: function () {
          return p;
        },
        pZ: function () {
          return b;
        },
        se: function () {
          return d;
        },
        vU: function () {
          return c;
        },
      });
      var r = n(67795),
        a = n(36117);
      class o extends a.G {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(o, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class i extends a.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(i, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class s extends a.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class u extends a.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class c extends a.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class d extends a.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class l extends a.G {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class f extends a.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class p extends a.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class b extends a.G {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class h extends a.G {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              n ? ` = ${(0, r.o)(n)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class m extends a.G {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    78863: function (e, t, n) {
      n.d(t, {
        Gg: function () {
          return i;
        },
        W5: function () {
          return u;
        },
        bs: function () {
          return s;
        },
      });
      var r = n(96070),
        a = n(36117),
        o = n(29008);
      class i extends a.G {
        constructor({
          body: e,
          cause: t,
          details: n,
          headers: a,
          status: i,
          url: s,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: n,
            metaMessages: [
              i && `Status: ${i}`,
              `URL: ${(0, o.G)(s)}`,
              e && `Request body: ${(0, r.P)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = a),
            (this.status = i),
            (this.url = s);
        }
      }
      class s extends a.G {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, o.G)(n)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code);
        }
      }
      class u extends a.G {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, o.G)(t)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    39028: function (e, t, n) {
      n.d(t, {
        B: function () {
          return u;
        },
        GD: function () {
          return g;
        },
        I0: function () {
          return P;
        },
        KB: function () {
          return h;
        },
        LX: function () {
          return c;
        },
        Og: function () {
          return p;
        },
        PE: function () {
          return w;
        },
        Pv: function () {
          return y;
        },
        Ts: function () {
          return x;
        },
        XS: function () {
          return l;
        },
        ab: function () {
          return v;
        },
        gS: function () {
          return m;
        },
        ir: function () {
          return E;
        },
        nY: function () {
          return d;
        },
        pT: function () {
          return b;
        },
        s7: function () {
          return s;
        },
        u5: function () {
          return $;
        },
        x3: function () {
          return M;
        },
        yR: function () {
          return f;
        },
      });
      var r = n(36117),
        a = n(78863);
      class o extends r.G {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: r, name: o, shortMessage: i }
        ) {
          super(i, {
            cause: e,
            docsPath: n,
            metaMessages: r || e?.metaMessages,
            name: o || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = o || e.name),
            (this.code = e instanceof a.bs ? e.code : t ?? -1);
        }
      }
      class i extends o {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class s extends o {
        constructor(e) {
          super(e, {
            code: s.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class u extends o {
        constructor(e) {
          super(e, {
            code: u.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class c extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: c.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class d extends o {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class l extends o {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class f extends o {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class p extends o {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class b extends o {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class h extends o {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: m.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not implemented.`,
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class y extends o {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends o {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends i {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends i {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class $ extends i {
        constructor(e) {
          super(e, {
            code: $.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty($, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class P extends i {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class M extends i {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class E extends o {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    20443: function (e, t, n) {
      n.d(t, {
        Bj: function () {
          return s;
        },
        Nc: function () {
          return a;
        },
        Z8: function () {
          return o;
        },
      });
      var r = n(36117);
      class a extends r.G {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class o extends r.G {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function i(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function s(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && (r += "      state:\n" + i(n.state)),
              n.stateDiff && (r += "      stateDiff:\n" + i(n.stateDiff)),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    33639: function (e, t, n) {
      n.d(t, {
        Bh: function () {
          return f;
        },
        JC: function () {
          return d;
        },
        Yb: function () {
          return p;
        },
        j3: function () {
          return c;
        },
        mc: function () {
          return b;
        },
        mk: function () {
          return l;
        },
        vl: function () {
          return u;
        },
        xY: function () {
          return s;
        },
        xr: function () {
          return i;
        },
      });
      var r = n(39625),
        a = n(67795),
        o = n(36117);
      function i(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class s extends o.G {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      class u extends o.G {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError",
          });
        }
      }
      class c extends o.G {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              i(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      class d extends o.G {
        constructor({ storageKey: e }) {
          super(
            `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (e.length - 2) / 2
            )} bytes.`,
            { name: "InvalidStorageKeySizeError" }
          );
        }
      }
      class l extends o.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: o,
            data: s,
            gas: u,
            gasPrice: c,
            maxFeePerGas: d,
            maxPriorityFeePerGas: l,
            nonce: f,
            to: p,
            value: b,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              i({
                chain: o && `${o?.name} (id: ${o?.id})`,
                from: t?.address,
                to: p,
                value:
                  void 0 !== b &&
                  `${(0, r.d)(b)} ${o?.nativeCurrency?.symbol || "ETH"}`,
                data: s,
                gas: u,
                gasPrice: void 0 !== c && `${(0, a.o)(c)} gwei`,
                maxFeePerGas: void 0 !== d && `${(0, a.o)(d)} gwei`,
                maxPriorityFeePerGas: void 0 !== l && `${(0, a.o)(l)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class f extends o.G {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: a,
        }) {
          let o = "Transaction";
          n &&
            void 0 !== a &&
            (o = `Transaction at block time "${n}" at index "${a}"`),
            e &&
              void 0 !== a &&
              (o = `Transaction at block hash "${e}" at index "${a}"`),
            t &&
              void 0 !== a &&
              (o = `Transaction at block number "${t}" at index "${a}"`),
            r && (o = `Transaction with hash "${r}"`),
            super(`${o} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class p extends o.G {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class b extends o.G {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    29008: function (e, t, n) {
      n.d(t, {
        C: function () {
          return r;
        },
        G: function () {
          return a;
        },
      });
      let r = (e) => e,
        a = (e) => e;
    },
    78398: function (e, t, n) {
      n.d(t, {
        r: function () {
          return h;
        },
      });
      var r = n(57412),
        a = n(45775),
        o = n(11221),
        i = n(39135),
        s = n(3972),
        u = n(61836),
        c = n(87788),
        d = n(95946),
        l = n(92106);
      function f(e, t = {}) {
        void 0 !== t.size && (0, d.Yf)(e, { size: t.size });
        let n = (0, l.ci)(e, t);
        return (0, d.ly)(n, t);
      }
      var p = n(11187),
        b = n(45444);
      function h(e, t) {
        let n = "string" == typeof t ? (0, p.nr)(t) : t,
          h = (0, o.q)(n);
        if (0 === (0, i.d)(n) && e.length > 0) throw new r.wb();
        if ((0, i.d)(t) && 32 > (0, i.d)(t))
          throw new r.xB({
            data: "string" == typeof t ? t : (0, l.ci)(t),
            params: e,
            size: (0, i.d)(t),
          });
        let y = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          h.setPosition(y);
          let [o, i] = (function e(t, n, { staticPosition: o }) {
            let i = (0, b.S)(n.type);
            if (i) {
              let [r, a] = i;
              return (function (t, n, { length: r, staticPosition: a }) {
                if (!r) {
                  let r = a + f(t.readBytes(32)),
                    o = r + 32;
                  t.setPosition(r);
                  let i = f(t.readBytes(32)),
                    s = m(n),
                    u = 0,
                    c = [];
                  for (let r = 0; r < i; ++r) {
                    t.setPosition(o + (s ? 32 * r : u));
                    let [a, i] = e(t, n, { staticPosition: o });
                    (u += i), c.push(a);
                  }
                  return t.setPosition(a + 32), [c, 32];
                }
                if (m(n)) {
                  let o = a + f(t.readBytes(32)),
                    i = [];
                  for (let a = 0; a < r; ++a) {
                    t.setPosition(o + 32 * a);
                    let [r] = e(t, n, { staticPosition: o });
                    i.push(r);
                  }
                  return t.setPosition(a + 32), [i, 32];
                }
                let o = 0,
                  i = [];
                for (let s = 0; s < r; ++s) {
                  let [r, s] = e(t, n, { staticPosition: a + o });
                  (o += s), i.push(r);
                }
                return [i, o];
              })(t, { ...n, type: a }, { length: r, staticPosition: o });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let a =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  o = a ? [] : {},
                  i = 0;
                if (m(n)) {
                  let s = r + f(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let u = n.components[r];
                    t.setPosition(s + i);
                    let [c, d] = e(t, u, { staticPosition: s });
                    (i += d), (o[a ? r : u?.name] = c);
                  }
                  return t.setPosition(r + 32), [o, 32];
                }
                for (let s = 0; s < n.components.length; ++s) {
                  let u = n.components[s],
                    [c, d] = e(t, u, { staticPosition: r });
                  (o[a ? s : u?.name] = c), (i += d);
                }
                return [o, i];
              })(t, n, { staticPosition: o });
            if ("address" === n.type)
              return (function (e) {
                let t = e.readBytes(32);
                return [(0, a.x)((0, l.ci)((0, s.T4)(t, -20))), 32];
              })(t);
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, d.Yf)(n, { size: t.size }), (n = (0, u.f)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new c.yr(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, a] = t.type.split("bytes");
                if (!a) {
                  let t = f(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = f(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let a = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, l.ci)(a), 32];
                }
                return [(0, l.ci)(e.readBytes(Number.parseInt(a), 32)), 32];
              })(t, n, { staticPosition: o });
            if (n.type.startsWith("uint") || n.type.startsWith("int"))
              return (function (e, t) {
                let n = t.type.startsWith("int"),
                  r = Number.parseInt(t.type.split("int")[1] || "256"),
                  a = e.readBytes(32);
                return [
                  r > 48
                    ? (function (e, t = {}) {
                        void 0 !== t.size && (0, d.Yf)(e, { size: t.size });
                        let n = (0, l.ci)(e, t);
                        return (0, d.y_)(n, t);
                      })(a, { signed: n })
                    : f(a, { signed: n }),
                  32,
                ];
              })(t, n);
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = f(e.readBytes(32));
                e.setPosition(t + n);
                let r = f(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let a = e.readBytes(r, 32),
                  o = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, d.Yf)(n, { size: t.size }),
                        (n = (0, u.f)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, u.f)(a));
                return e.setPosition(t + 32), [o, 32];
              })(t, { staticPosition: o });
            throw new r.CI(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(h, n, { staticPosition: 0 });
          (y += i), g.push(o);
        }
        return g;
      }
      function m(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(m);
        let n = (0, b.S)(e.type);
        return !!(n && m({ ...e, type: n[1] }));
      }
    },
    86899: function (e, t, n) {
      n.d(t, {
        p: function () {
          return c;
        },
      });
      var r = n(21746),
        a = n(57412),
        o = n(3972),
        i = n(58034),
        s = n(78398),
        u = n(80522);
      function c(e) {
        let { abi: t, data: n } = e,
          c = (0, o.tP)(n, 0, 4);
        if ("0x" === c) throw new a.wb();
        let d = [...(t || []), r.Up, r.hZ].find(
          (e) => "error" === e.type && c === (0, i.C)((0, u.t)(e))
        );
        if (!d)
          throw new a.yP(c, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: d,
          args:
            "inputs" in d && d.inputs && d.inputs.length > 0
              ? (0, s.r)(d.inputs, (0, o.tP)(n, 4))
              : void 0,
          errorName: d.name,
        };
      }
    },
    7210: function (e, t, n) {
      n.d(t, {
        k: function () {
          return s;
        },
      });
      var r = n(57412),
        a = n(78398),
        o = n(40840);
      let i = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: u } = e,
          c = t[0];
        if (s) {
          let e = (0, o.mE)({ abi: t, args: n, name: s });
          if (!e) throw new r.xL(s, { docsPath: i });
          c = e;
        }
        if ("function" !== c.type) throw new r.xL(void 0, { docsPath: i });
        if (!c.outputs) throw new r.MX(c.name, { docsPath: i });
        let d = (0, a.r)(c.outputs, u);
        return d && d.length > 1 ? d : d && 1 === d.length ? d[0] : void 0;
      }
    },
    45444: function (e, t, n) {
      n.d(t, {
        E: function () {
          return f;
        },
        S: function () {
          return b;
        },
      });
      var r = n(57412),
        a = n(26087),
        o = n(36117),
        i = n(49321),
        s = n(57040),
        u = n(61769),
        c = n(39135),
        d = n(3972),
        l = n(92106);
      function f(e, t) {
        if (e.length !== t.length)
          throw new r.fs({ expectedLength: e.length, givenLength: t.length });
        let n = p(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let f = 0; f < e.length; f++)
              n.push(
                (function e({ param: t, value: n }) {
                  let f = b(t.type);
                  if (f) {
                    let [a, o] = f;
                    return (function (t, { length: n, param: a }) {
                      let o = null === n;
                      if (!Array.isArray(t)) throw new r.hn(t);
                      if (!o && t.length !== n)
                        throw new r.gr({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${a.type}[${n}]`,
                        });
                      let i = !1,
                        u = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: a, value: t[n] });
                        r.dynamic && (i = !0), u.push(r);
                      }
                      if (o || i) {
                        let e = p(u);
                        if (o) {
                          let t = (0, l.eC)(u.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: u.length > 0 ? (0, s.zo)([t, e]) : t,
                          };
                        }
                        if (i) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, s.zo)(u.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: a, param: { ...t, type: o } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        a = [];
                      for (let o = 0; o < n.components.length; o++) {
                        let i = n.components[o],
                          s = Array.isArray(t) ? o : i.name,
                          u = e({ param: i, value: t[s] });
                        a.push(u), u.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? p(a)
                          : (0, s.zo)(a.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type)
                    return (function (e) {
                      if (!(0, i.U)(e)) throw new a.b({ address: e });
                      return {
                        dynamic: !1,
                        encoded: (0, u.gc)(e.toLowerCase()),
                      };
                    })(n);
                  if ("bool" === t.type)
                    return (function (e) {
                      if ("boolean" != typeof e)
                        throw new o.G(
                          `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: (0, u.gc)((0, l.C4)(e)) };
                    })(n);
                  if (t.type.startsWith("uint") || t.type.startsWith("int"))
                    return (function (e, { signed: t }) {
                      return {
                        dynamic: !1,
                        encoded: (0, l.eC)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: t.type.startsWith("int") });
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        a = (0, c.d)(e);
                      if (!n) {
                        let t = e;
                        return (
                          a % 32 != 0 &&
                            (t = (0, u.gc)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, s.zo)([
                              (0, u.gc)((0, l.eC)(a, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (a !== Number.parseInt(n))
                        throw new r.M4({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.gc)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type)
                    return (function (e) {
                      let t = (0, l.$G)(e),
                        n = Math.ceil((0, c.d)(t) / 32),
                        r = [];
                      for (let e = 0; e < n; e++)
                        r.push(
                          (0, u.gc)((0, d.tP)(t, 32 * e, (e + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, s.zo)([
                          (0, u.gc)((0, l.eC)((0, c.d)(t), { size: 32 })),
                          ...r,
                        ]),
                      };
                    })(n);
                  throw new r.dh(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[f], value: t[f] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function p(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: a } = e[n];
          r ? (t += 32) : (t += (0, c.d)(a));
        }
        let n = [],
          r = [],
          a = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: i, encoded: s } = e[o];
          i
            ? (n.push((0, l.eC)(t + a, { size: 32 })),
              r.push(s),
              (a += (0, c.d)(s)))
            : n.push(s);
        }
        return (0, s.zo)([...n, ...r]);
      }
      function b(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    30286: function (e, t, n) {
      n.d(t, {
        w: function () {
          return s;
        },
      });
      var r = n(57412),
        a = n(57040),
        o = n(45444);
      let i = "/docs/contract/encodeDeployData";
      function s(e) {
        let { abi: t, args: n, bytecode: s } = e;
        if (!n || 0 === n.length) return s;
        let u = t.find((e) => "type" in e && "constructor" === e.type);
        if (!u) throw new r.fM({ docsPath: i });
        if (!("inputs" in u) || !u.inputs || 0 === u.inputs.length)
          throw new r.cO({ docsPath: i });
        let c = (0, o.E)(u.inputs, n);
        return (0, a.SM)([s, c]);
      }
    },
    55629: function (e, t, n) {
      n.d(t, {
        R: function () {
          return d;
        },
      });
      var r = n(57040),
        a = n(45444),
        o = n(57412),
        i = n(58034),
        s = n(80522),
        u = n(40840);
      let c = "/docs/contract/encodeFunctionData";
      function d(e) {
        let { args: t } = e,
          { abi: n, functionName: d } =
            1 === e.abi.length && e.functionName?.startsWith("0x")
              ? e
              : (function (e) {
                  let { abi: t, args: n, functionName: r } = e,
                    a = t[0];
                  if (r) {
                    let e = (0, u.mE)({ abi: t, args: n, name: r });
                    if (!e) throw new o.xL(r, { docsPath: c });
                    a = e;
                  }
                  if ("function" !== a.type)
                    throw new o.xL(void 0, { docsPath: c });
                  return { abi: [a], functionName: (0, i.C)((0, s.t)(a)) };
                })(e),
          l = n[0],
          f = "inputs" in l && l.inputs ? (0, a.E)(l.inputs, t ?? []) : void 0;
        return (0, r.SM)([d, f ?? "0x"]);
      }
    },
    80522: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
        t: function () {
          return a;
        },
      });
      var r = n(57412);
      function a(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.wM(e.type);
        return `${e.name}(${o(e.inputs, { includeName: t })})`;
      }
      function o(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${o(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    40840: function (e, t, n) {
      n.d(t, {
        mE: function () {
          return u;
        },
      });
      var r = n(57412),
        a = n(15102),
        o = n(49321),
        i = n(96005),
        s = n(58034);
      function u(e) {
        let t;
        let { abi: n, args: u = [], name: c } = e,
          d = (0, a.v)(c, { strict: !1 }),
          l = n.filter((e) =>
            d
              ? "function" === e.type
                ? (0, s.C)(e) === c
                : "event" === e.type && (0, i.n)(e) === c
              : "name" in e && e.name === c
          );
        if (0 !== l.length) {
          if (1 === l.length) return l[0];
          for (let e of l)
            if ("inputs" in e) {
              if (!u || 0 === u.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === u.length &&
                u.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        a = n.type;
                      switch (a) {
                        case "address":
                          return (0, o.U)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === a && "components" in n)
                            return Object.values(n.components).every((n, r) =>
                              e(Object.values(t)[r], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              a
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let a in t) {
                      let i = t[a],
                        s = n[a];
                      if (
                        "tuple" === i.type &&
                        "tuple" === s.type &&
                        "components" in i &&
                        "components" in s
                      )
                        return e(i.components, s.components, r[a]);
                      let u = [i.type, s.type];
                      if (
                        (u.includes("address") && u.includes("bytes20")) ||
                        (((u.includes("address") && u.includes("string")) ||
                          (u.includes("address") && u.includes("bytes"))) &&
                          (0, o.U)(r[a], { strict: !1 }))
                      )
                        return u;
                    }
                  })(e.inputs, t.inputs, u);
                  if (n)
                    throw new r.S4(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          return t || l[0];
        }
      }
    },
    86164: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
    },
    47864: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(80377);
      function a({ blockNumber: e, chain: t, contract: n }) {
        let a = t?.contracts?.[n];
        if (!a) throw new r.mm({ chain: t, contract: { name: n } });
        if (e && a.blockCreated && a.blockCreated > e)
          throw new r.mm({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    11221: function (e, t, n) {
      n.d(t, {
        q: function () {
          return o;
        },
      });
      var r = n(66238);
      let a = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.KD({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.lQ({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function o(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(a);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    57040: function (e, t, n) {
      function r(e) {
        return "string" == typeof e[0]
          ? a(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                r = 0;
              for (let t of e) n.set(t, r), (r += t.length);
              return n;
            })(e);
      }
      function a(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, {
        SM: function () {
          return a;
        },
        zo: function () {
          return r;
        },
      });
    },
    3972: function (e, t, n) {
      n.d(t, {
        T4: function () {
          return c;
        },
        p5: function () {
          return d;
        },
        tP: function () {
          return i;
        },
      });
      var r = n(69760),
        a = n(15102),
        o = n(39135);
      function i(e, t, n, { strict: r } = {}) {
        return (0, a.v)(e, { strict: !1 })
          ? d(e, t, n, { strict: r })
          : c(e, t, n, { strict: r });
      }
      function s(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, o.d)(e) - 1)
          throw new r.mV({ offset: t, position: "start", size: (0, o.d)(e) });
      }
      function u(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, o.d)(e) !== n - t
        )
          throw new r.mV({ offset: n, position: "end", size: (0, o.d)(e) });
      }
      function c(e, t, n, { strict: r } = {}) {
        s(e, t);
        let a = e.slice(t, n);
        return r && u(a, t, n), a;
      }
      function d(e, t, n, { strict: r } = {}) {
        s(e, t);
        let a = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return r && u(a, t, n), a;
      }
    },
    72365: function (e, t, n) {
      n.d(t, {
        S: function () {
          return s;
        },
      });
      var r = n(57412),
        a = n(36117),
        o = n(97405),
        i = n(39028);
      function s(
        e,
        { abi: t, address: n, args: s, docsPath: u, functionName: c, sender: d }
      ) {
        let {
            code: l,
            data: f,
            message: p,
            shortMessage: b,
          } = e instanceof o.VQ
            ? e
            : e instanceof a.G
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
          h =
            e instanceof r.wb
              ? new o.Dk({ functionName: c })
              : [3, i.XS.code].includes(l) && (f || p || b)
              ? new o.Lu({
                  abi: t,
                  data: "object" == typeof f ? f.data : f,
                  functionName: c,
                  message: b ?? p,
                })
              : e;
        return new o.uq(h, {
          abi: t,
          args: s,
          contractAddress: n,
          docsPath: u,
          functionName: c,
          sender: d,
        });
      }
    },
    87469: function (e, t, n) {
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var r = n(36117),
        a = n(26445);
      function o(e, t) {
        let n = (e.details || "").toLowerCase(),
          o = e instanceof r.G ? e.walk((e) => e?.code === a.M_.code) : e;
        return o instanceof r.G
          ? new a.M_({ cause: e, message: o.details })
          : a.M_.nodeMessage.test(n)
          ? new a.M_({ cause: e, message: e.details })
          : a.Hh.nodeMessage.test(n)
          ? new a.Hh({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.G$.nodeMessage.test(n)
          ? new a.G$({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.ZI.nodeMessage.test(n)
          ? new a.ZI({ cause: e, nonce: t?.nonce })
          : a.vU.nodeMessage.test(n)
          ? new a.vU({ cause: e, nonce: t?.nonce })
          : a.se.nodeMessage.test(n)
          ? new a.se({ cause: e, nonce: t?.nonce })
          : a.C_.nodeMessage.test(n)
          ? new a.C_({ cause: e })
          : a.WF.nodeMessage.test(n)
          ? new a.WF({ cause: e, gas: t?.gas })
          : a.dR.nodeMessage.test(n)
          ? new a.dR({ cause: e, gas: t?.gas })
          : a.pZ.nodeMessage.test(n)
          ? new a.pZ({ cause: e })
          : a.cs.nodeMessage.test(n)
          ? new a.cs({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new a.cj({ cause: e });
      }
    },
    61163: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let a of Object.keys(r))
              a in e && (n[a] = e[a]),
                r[a] &&
                  "object" == typeof r[a] &&
                  !Array.isArray(r[a]) &&
                  t(r[a]);
          })(t(e || {})),
          n
        );
      }
    },
    74688: function (e, t, n) {
      n.d(t, {
        tG: function () {
          return o;
        },
      });
      var r = n(92106);
      let a = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function o(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.contractAddress,
              r: e.r,
              s: e.s,
              chainId: (0, r.eC)(e.chainId),
              nonce: (0, r.eC)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, r.eC)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, r.eC)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, r.ci)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, r.eC)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, r.eC)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, r.eC)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, r.eC)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, r.eC)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, r.eC)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = a[e.type]),
          void 0 !== e.value && (t.value = (0, r.eC)(e.value)),
          t
        );
      }
    },
    93714: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let a = e[n];
        return "function" == typeof a ? a : (n) => t(e, n);
      }
    },
    96005: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = n(65526).r;
    },
    58034: function (e, t, n) {
      n.d(t, {
        C: function () {
          return o;
        },
      });
      var r = n(3972),
        a = n(65526);
      let o = (e) => (0, r.tP)((0, a.r)(e), 0, 4);
    },
    65526: function (e, t, n) {
      n.d(t, {
        r: function () {
          return l;
        },
      });
      var r = n(11187),
        a = n(91734);
      let o = (e) => (0, a.w)((0, r.O0)(e));
      var i = n(84917);
      let s = /^tuple(?<array>(\[(\d*)\])*)$/;
      function u(e) {
        let t = "",
          n = e.length;
        for (let r = 0; r < n; r++)
          (t += (function e(t) {
            let n = t.type;
            if (s.test(t.type) && "components" in t) {
              n = "(";
              let r = t.components.length;
              for (let a = 0; a < r; a++)
                (n += e(t.components[a])), a < r - 1 && (n += ", ");
              let a = (0, i.Zw)(s, t.type);
              return (n += `)${a?.array ?? ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[r])),
            r !== n - 1 && (t += ", ");
        return t;
      }
      var c = n(36117);
      let d = (e) =>
        (function (e) {
          let t = !0,
            n = "",
            r = 0,
            a = "",
            o = !1;
          for (let i = 0; i < e.length; i++) {
            let s = e[i];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && r++,
              ")" === s && r--,
              t)
            ) {
              if (0 === r) {
                if (" " === s && ["event", "function", ""].includes(a)) a = "";
                else if (((a += s), ")" === s)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[i - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (a += s), (n += s);
            }
          }
          if (!o) throw new c.G("Unable to normalize signature.");
          return a;
        })(
          "string" == typeof e
            ? e
            : "function" === e.type
            ? `function ${e.name}(${u(e.inputs)})${
                e.stateMutability && "nonpayable" !== e.stateMutability
                  ? ` ${e.stateMutability}`
                  : ""
              }${e.outputs.length ? ` returns (${u(e.outputs)})` : ""}`
            : "event" === e.type
            ? `event ${e.name}(${u(e.inputs)})`
            : "error" === e.type
            ? `error ${e.name}(${u(e.inputs)})`
            : "constructor" === e.type
            ? `constructor(${u(e.inputs)})${
                "payable" === e.stateMutability ? " payable" : ""
              }`
            : "fallback" === e.type
            ? "fallback()"
            : "receive() external payable"
        );
      function l(e) {
        return o(d(e));
      }
    },
    32357: function (e, t, n) {
      n.d(t, {
        S: function () {
          return a;
        },
      });
      let r = new Map();
      function a({ fn: e, id: t, shouldSplitBatch: n, wait: a = 0, sort: o }) {
        let i = async () => {
            let t = c();
            s();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  o && Array.isArray(e) && e.sort(o);
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: r } = t[n];
                    r.resolve?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: r } = t[n];
                    r.reject?.(e);
                  }
                });
          },
          s = () => r.delete(t),
          u = () => c().map(({ args: e }) => e),
          c = () => r.get(t) || [],
          d = (e) => r.set(t, [...c(), e]);
        return {
          flush: s,
          async schedule(e) {
            let t = {},
              r = new Promise((e, n) => {
                (t.resolve = e), (t.reject = n);
              });
            return (
              (n?.([...u(), e]) && i(), c().length > 0)
                ? d({ args: e, pendingPromise: t })
                : (d({ args: e, pendingPromise: t }), setTimeout(i, a)),
              r
            );
          },
        };
      }
    },
    50150: function (e, t, n) {
      n.d(t, {
        mF: function () {
          return c;
        },
      });
      var r = n(26087),
        a = n(69760),
        o = n(20443),
        i = n(49321),
        s = n(92106);
      function u(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new a.W_({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new a.W_({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function c(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...a } of e) {
          if (!(0, i.U)(n, { strict: !1 })) throw new r.b({ address: n });
          if (t[n]) throw new o.Nc({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: r, stateDiff: a, code: i } = e,
              c = {};
            if (
              (void 0 !== i && (c.code = i),
              void 0 !== t && (c.balance = (0, s.eC)(t)),
              void 0 !== n && (c.nonce = (0, s.eC)(n)),
              void 0 !== r && (c.state = u(r)),
              void 0 !== a)
            ) {
              if (c.state) throw new o.Z8();
              c.stateDiff = u(a);
            }
            return c;
          })(a);
        }
        return t;
      }
    },
    96070: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
      });
      let r = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            let r = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof t ? t(e, r) : r;
          },
          n
        );
    },
    47531: function (e, t, n) {
      n.d(t, {
        F: function () {
          return c;
        },
      });
      var r = n(14503),
        a = n(50676),
        o = n(26087),
        i = n(26445),
        s = n(33639),
        u = n(49321);
      function c(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: c,
            maxPriorityFeePerGas: d,
            to: l,
          } = e,
          f = t ? (0, r.T)(t) : void 0;
        if (f && !(0, u.U)(f.address)) throw new o.b({ address: f.address });
        if (l && !(0, u.U)(l)) throw new o.b({ address: l });
        if (void 0 !== n && (void 0 !== c || void 0 !== d)) throw new s.xY();
        if (c && c > a.zL) throw new i.Hh({ maxFeePerGas: c });
        if (d && c && d > c)
          throw new i.cs({ maxFeePerGas: c, maxPriorityFeePerGas: d });
      }
    },
    39625: function (e, t, n) {
      n.d(t, {
        d: function () {
          return o;
        },
      });
      var r = n(84192),
        a = n(15229);
      function o(e, t = "wei") {
        return (0, a.b)(e, r.ez[t]);
      }
    },
    67795: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var r = n(84192),
        a = n(15229);
      function o(e, t = "wei") {
        return (0, a.b)(e, r.Zn[t]);
      }
    },
  },
]);
