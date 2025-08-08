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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "ae7469ca-e186-4a46-a2d0-1f520f7a9400"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ae7469ca-e186-4a46-a2d0-1f520f7a9400"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1785],
  {
    21785: function (e, a, t) {
      t.d(a, {
        offchainLookup: function () {
          return m;
        },
        offchainLookupSignature: function () {
          return w;
        },
      });
      var s = t(61376),
        n = t(96070),
        r = t(36117),
        o = t(29008);
      class c extends r.G {
        constructor({
          callbackSelector: e,
          cause: a,
          data: t,
          extraData: s,
          sender: n,
          urls: r,
        }) {
          super(
            a.shortMessage ||
              "An error occurred while fetching for an offchain result.",
            {
              cause: a,
              metaMessages: [
                ...(a.metaMessages || []),
                a.metaMessages?.length ? "" : [],
                "Offchain Gateway Call:",
                r && [
                  "  Gateway URL(s):",
                  ...r.map((e) => `    ${(0, o.G)(e)}`),
                ],
                `  Sender: ${n}`,
                `  Data: ${t}`,
                `  Callback selector: ${e}`,
                `  Extra data: ${s}`,
              ].flat(),
              name: "OffchainLookupError",
            }
          );
        }
      }
      class d extends r.G {
        constructor({ result: e, url: a }) {
          super(
            "Offchain gateway response is malformed. Response data must be a hex value.",
            {
              metaMessages: [
                `Gateway URL: ${(0, o.G)(a)}`,
                `Response: ${(0, n.P)(e)}`,
              ],
              name: "OffchainLookupResponseMalformedError",
            }
          );
        }
      }
      class f extends r.G {
        constructor({ sender: e, to: a }) {
          super(
            "Reverted sender address does not match target contract address (`to`).",
            {
              metaMessages: [
                `Contract address: ${a}`,
                `OffchainLookup sender address: ${e}`,
              ],
              name: "OffchainLookupSenderMismatchError",
            }
          );
        }
      }
      var i = t(78863),
        u = t(86899),
        l = t(45444),
        p = t(61228),
        y = t(57040),
        h = t(15102);
      let w = "0x556f1830",
        g = {
          name: "OffchainLookup",
          type: "error",
          inputs: [
            { name: "sender", type: "address" },
            { name: "urls", type: "string[]" },
            { name: "callData", type: "bytes" },
            { name: "callbackFunction", type: "bytes4" },
            { name: "extraData", type: "bytes" },
          ],
        };
      async function m(e, { blockNumber: a, blockTag: t, data: n, to: r }) {
        let { args: o } = (0, u.p)({ data: n, abi: [g] }),
          [d, i, h, w, m] = o,
          { ccipRead: k } = e,
          E = k && "function" == typeof k?.request ? k.request : b;
        try {
          if (!(0, p.E)(r, d)) throw new f({ sender: d, to: r });
          let n = await E({ data: h, sender: d, urls: i }),
            { data: o } = await (0, s.R)(e, {
              blockNumber: a,
              blockTag: t,
              data: (0, y.zo)([
                w,
                (0, l.E)([{ type: "bytes" }, { type: "bytes" }], [n, m]),
              ]),
              to: r,
            });
          return o;
        } catch (e) {
          throw new c({
            callbackSelector: w,
            cause: e,
            data: n,
            extraData: m,
            sender: d,
            urls: i,
          });
        }
      }
      async function b({ data: e, sender: a, urls: t }) {
        let s = Error("An unknown error occurred.");
        for (let r = 0; r < t.length; r++) {
          let o = t[r],
            c = o.includes("{data}") ? "GET" : "POST",
            f = "POST" === c ? { data: e, sender: a } : void 0;
          try {
            let t;
            let r = await fetch(o.replace("{sender}", a).replace("{data}", e), {
              body: JSON.stringify(f),
              method: c,
            });
            if (
              ((t = r.headers
                .get("Content-Type")
                ?.startsWith("application/json")
                ? (await r.json()).data
                : await r.text()),
              !r.ok)
            ) {
              s = new i.Gg({
                body: f,
                details: t?.error ? (0, n.P)(t.error) : r.statusText,
                headers: r.headers,
                status: r.status,
                url: o,
              });
              continue;
            }
            if (!(0, h.v)(t)) {
              s = new d({ result: t, url: o });
              continue;
            }
            return t;
          } catch (e) {
            s = new i.Gg({ body: f, details: e.message, url: o });
          }
        }
        throw s;
      }
    },
  },
]);
