(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  37848,
  (e, t, r) => {
    "use strict";
    function a({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: i,
      blurDataURL: o,
      objectFit: n,
    }) {
      let s = r ? 40 * r : e,
        l = i ? 40 * i : t,
        d = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        d
          ? "none"
          : "contain" === n
          ? "xMidYMid"
          : "cover" === n
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
  },
  1183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      VALID_LOADERS: function () {
        return o;
      },
      imageConfigDefault: function () {
        return n;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
      n = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  4879,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      e.r(72489);
    let a = e.r(42736),
      i = e.r(37848),
      o = e.r(1183),
      n = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function d(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: u = !1,
        loading: f,
        className: p,
        quality: m,
        width: g,
        height: h,
        fill: x = !1,
        style: y,
        overrideSrc: b,
        onLoad: v,
        onLoadingComplete: j,
        placeholder: w = "empty",
        blurDataURL: k,
        fetchPriority: _,
        decoding: C = "async",
        layout: N,
        objectFit: P,
        objectPosition: R,
        lazyBoundary: z,
        lazyRoot: S,
        ...O
      },
      M
    ) {
      var E;
      let A,
        I,
        D,
        { imgConf: $, showAltText: L, blurComplete: F, defaultLoader: U } = M,
        T = $ || o.imageConfigDefault;
      if ("allSizes" in T) A = T;
      else {
        let e = [...T.deviceSizes, ...T.imageSizes].sort((e, t) => e - t),
          t = T.deviceSizes.sort((e, t) => e - t),
          r = T.qualities?.sort((e, t) => e - t);
        A = { ...T, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === U)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let q = O.loader || U;
      delete O.loader, delete O.srcSet;
      let B = "__next_img_default" in q;
      if (B) {
        if ("custom" === A.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = q;
        q = (t) => {
          let { config: r, ...a } = t;
          return e(a);
        };
      }
      if (N) {
        "fill" === N && (x = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[N];
        e && (y = { ...y, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[N];
        r && !t && (t = r);
      }
      let H = "",
        W = l(g),
        X = l(h);
      if ((E = e) && "object" == typeof E && (s(E) || void 0 !== E.src)) {
        let t = s(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((I = t.blurWidth),
          (D = t.blurHeight),
          (k = k || t.blurDataURL),
          (H = t.src),
          !x)
        )
          if (W || X) {
            if (W && !X) {
              let e = W / t.width;
              X = Math.round(t.height * e);
            } else if (!W && X) {
              let e = X / t.height;
              W = Math.round(t.width * e);
            }
          } else (W = t.width), (X = t.height);
      }
      let G = !c && !u && ("lazy" === f || void 0 === f);
      (!(e = "string" == typeof e ? e : H) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (G = !1)),
        A.unoptimized && (r = !0),
        B &&
          !A.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let Y = l(m),
        V = Object.assign(
          x
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: R,
              }
            : {},
          L ? {} : { color: "transparent" },
          y
        ),
        Q =
          F || "empty" === w
            ? null
            : "blur" === w
            ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({
                widthInt: W,
                heightInt: X,
                blurWidth: I,
                blurHeight: D,
                blurDataURL: k || "",
                objectFit: V.objectFit,
              })}")`
            : `url("${w}")`,
        Z = n.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        J = Q
          ? {
              backgroundSize: Z,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Q,
            }
          : {},
        K = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: o,
          sizes: n,
          loader: s,
        }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, a.getDeploymentId)();
              if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let a = new URLSearchParams(t.slice(r + 1));
                  a.get("dpl") ||
                    (a.append("dpl", e),
                    (t = t.slice(0, r) + "?" + a.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: d } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              a
            ) {
              if (a) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(a)); ) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, i, n),
            c = l.length - 1;
          return {
            sizes: n || "w" !== d ? n : "100vw",
            srcSet: l
              .map(
                (r, a) =>
                  `${s({ config: e, src: t, quality: o, width: r })} ${
                    "w" === d ? r : a + 1
                  }${d}`
              )
              .join(", "),
            src: s({ config: e, src: t, quality: o, width: l[c] }),
          };
        })({
          config: A,
          src: e,
          unoptimized: r,
          width: W,
          quality: Y,
          sizes: t,
          loader: q,
        }),
        ee = G ? "lazy" : f;
      return {
        props: {
          ...O,
          loading: ee,
          fetchPriority: _,
          width: W,
          height: X,
          decoding: C,
          className: p,
          style: { ...V, ...J },
          sizes: K.sizes,
          srcSet: K.srcSet,
          src: b || K.src,
        },
        meta: { unoptimized: r, preload: u || c, placeholder: w, fill: x },
      };
    }
  },
  61080,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let a = e.r(73576),
      i = "u" < typeof window,
      o = i ? () => {} : a.useLayoutEffect,
      n = i ? () => {} : a.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = a.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), s()),
        o(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        o(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          )
        ),
        n(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  52991,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return g;
      },
      defaultHead: function () {
        return u;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let o = e.r(81258),
      n = e.r(44066),
      s = e.r(76350),
      l = n._(e.r(73576)),
      d = o._(e.r(61080)),
      c = e.r(37090);
    function u() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(72489);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
      let t, r, a, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(u().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (a = new Set()),
          (i = {}),
          (e) => {
            let o = !0,
              n = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              n = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (o = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (o = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) a.has(r) ? (o = !1) : a.add(r);
                    else {
                      let t = e.props[r],
                        a = i[r] || new Set();
                      ("name" !== r || !n) && a.has(t)
                        ? (o = !1)
                        : (a.add(t), (i[r] = a));
                    }
                }
            }
            return o;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let g = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, s.jsx)(d.default, {
        reduceComponentsToState: m,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  4044,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let a = e.r(81258)._(e.r(73576)),
      i = e.r(1183),
      o = a.default.createContext(i.imageConfigDefault);
  },
  34233,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let a = e.r(81258)._(e.r(73576)).default.createContext(null);
  },
  2692,
  (e, t, r) => {
    "use strict";
    function a(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            t.qualities[0]
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
  },
  80934,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let a = e.r(2692),
      i = e.r(42736);
    function o({ config: e, src: t, width: r, quality: n }) {
      let s = (0, i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
        let e = t.indexOf("?");
        if (-1 !== e) {
          let r = new URLSearchParams(t.slice(e + 1)),
            a = r.get("dpl");
          if (a) {
            (s = a), r.delete("dpl");
            let i = r.toString();
            t = t.slice(0, e) + (i ? "?" + i : "");
          }
        }
      }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let l = (0, a.findClosestQuality)(n, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${
        t.startsWith("/") && s ? `&dpl=${s}` : ""
      }`;
    }
    o.__next_img_default = !0;
    let n = o;
  },
  86032,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let a = e.r(73576);
    function i(e, t) {
      let r = (0, a.useRef)(null),
        i = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = i.current;
            t && ((i.current = null), t());
          } else e && (r.current = o(e, a)), t && (i.current = o(t, a));
        },
        [e, t]
      );
    }
    function o(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  83540,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      });
    let a = e.r(81258),
      i = e.r(44066),
      o = e.r(76350),
      n = i._(e.r(73576)),
      s = a._(e.r(55284)),
      l = a._(e.r(52991)),
      d = e.r(4879),
      c = e.r(1183),
      u = e.r(4044);
    e.r(72489);
    let f = e.r(34233),
      p = a._(e.r(80934)),
      m = e.r(86032),
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
    function h(e, t, r, a, i, o, n) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let a = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => a,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    (a = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (i = !0), t.stopPropagation();
                  },
                });
              }
              a?.current && a.current(e);
            }
          }));
    }
    function x(e) {
      return n.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, n.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: a,
          width: i,
          decoding: s,
          className: l,
          style: d,
          fetchPriority: c,
          placeholder: u,
          loading: f,
          unoptimized: p,
          fill: g,
          onLoadRef: y,
          onLoadingCompleteRef: b,
          setBlurComplete: v,
          setShowAltText: j,
          sizesInput: w,
          onLoad: k,
          onError: _,
          ...C
        },
        N
      ) => {
        let P = (0, n.useCallback)(
            (e) => {
              e && (_ && (e.src = e.src), e.complete && h(e, u, y, b, v, p, w));
            },
            [e, u, y, b, v, _, p, w]
          ),
          R = (0, m.useMergedRef)(N, P);
        return (0, o.jsx)("img", {
          ...C,
          ...x(c),
          loading: f,
          width: i,
          height: a,
          decoding: s,
          "data-nimg": g ? "fill" : "1",
          className: l,
          style: d,
          sizes: r,
          srcSet: t,
          src: e,
          ref: R,
          onLoad: (e) => {
            h(e.currentTarget, u, y, b, v, p, w);
          },
          onError: (e) => {
            j(!0), "empty" !== u && v(!0), _ && _(e);
          },
        });
      }
    );
    function b({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...x(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, o.jsx)(l.default, {
            children: (0, o.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let v = (0, n.forwardRef)((e, t) => {
      let r = (0, n.useContext)(f.RouterContext),
        a = (0, n.useContext)(u.ImageConfigContext),
        i = (0, n.useMemo)(() => {
          let e = g || a || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns:
              "u" < typeof window ? a?.localPatterns : e.localPatterns,
          };
        }, [a]),
        { onLoad: s, onLoadingComplete: l } = e,
        m = (0, n.useRef)(s);
      (0, n.useEffect)(() => {
        m.current = s;
      }, [s]);
      let h = (0, n.useRef)(l);
      (0, n.useEffect)(() => {
        h.current = l;
      }, [l]);
      let [x, v] = (0, n.useState)(!1),
        [j, w] = (0, n.useState)(!1),
        { props: k, meta: _ } = (0, d.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: i,
          blurComplete: x,
          showAltText: j,
        });
      return (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsx)(y, {
            ...k,
            unoptimized: _.unoptimized,
            placeholder: _.placeholder,
            fill: _.fill,
            onLoadRef: m,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t,
          }),
          _.preload
            ? (0, o.jsx)(b, { isAppRouter: !r, imgAttributes: k })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  92331,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return d;
      },
    };
    for (var i in a) Object.defineProperty(r, i, { enumerable: !0, get: a[i] });
    let o = e.r(81258),
      n = e.r(4879),
      s = e.r(83540),
      l = o._(e.r(80934));
    function d(e) {
      let { props: t } = (0, n.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = s.Image;
  },
  92321,
  (e, t, r) => {
    t.exports = e.r(92331);
  },
  9476,
  92339,
  (e) => {
    "use strict";
    let t = (...e) =>
      e
        .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
        .join(" ")
        .trim();
    e.s(["mergeClasses", 0, t], 9476);
    var r = e.i(73576),
      a = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
    let i = (0, r.createContext)({}),
      o = (0, r.forwardRef)(
        (
          {
            color: e,
            size: o,
            strokeWidth: n,
            absoluteStrokeWidth: s,
            className: l = "",
            children: d,
            iconNode: c,
            ...u
          },
          f
        ) => {
          let {
              size: p = 24,
              strokeWidth: m = 2,
              absoluteStrokeWidth: g = !1,
              color: h = "currentColor",
              className: x = "",
            } = (0, r.useContext)(i) ?? {},
            y = s ?? g ? (24 * Number(n ?? m)) / Number(o ?? p) : n ?? m;
          return (0, r.createElement)(
            "svg",
            {
              ref: f,
              ...a,
              width: o ?? p ?? a.width,
              height: o ?? p ?? a.height,
              stroke: e ?? h,
              strokeWidth: y,
              className: t("lucide", x, l),
              ...(!d &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                  return !1;
                })(u) && { "aria-hidden": "true" }),
              ...u,
            },
            [
              ...c.map(([e, t]) => (0, r.createElement)(e, t)),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }
      );
    e.s(["default", 0, o], 92339);
  },
  6927,
  (e) => {
    "use strict";
    var t = e.i(73576),
      r = e.i(9476);
    let a = (e) => {
      let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
        r ? r.toUpperCase() : t.toLowerCase()
      );
      return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var i = e.i(92339);
    e.s(
      [
        "default",
        0,
        (e, o) => {
          let n = (0, t.forwardRef)(({ className: n, ...s }, l) =>
            (0, t.createElement)(i.default, {
              ref: l,
              iconNode: o,
              className: (0, r.mergeClasses)(
                `lucide-${a(e)
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()}`,
                `lucide-${e}`,
                n
              ),
              ...s,
            })
          );
          return (n.displayName = a(e)), n;
        },
      ],
      6927
    );
  },
  48303,
  (e) => {
    "use strict";
    var t = e.i(76350),
      r = e.i(73576),
      a = e.i(92321),
      i = e.i(6927);
    let o = (0, i.default)("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]),
      n = (0, i.default)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      s = "https://x.com/RobinHoodies_X",
      l = [
        {
          label: "TRADE",
          href: "https://app.uniswap.org/swap?outputCurrency=0x7660432dd17c8c7107b182f6abaf1e6dac6cfa57&chain=robinhood",
          external: !0,
        },
        { label: "NARRATIVE", href: "#thesis" },
        { label: "PFP LAB", href: "#pfp" },
      ];
    e.s(
      [
        "SiteHeader",
        0,
        function () {
          let [e, i] = (0, r.useState)(!1);
          return (0, t.jsxs)("header", {
            className:
              "sticky top-0 z-50 w-full border-b border-primary/10 bg-black/80 backdrop-blur-md",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4",
                children: [
                  (0, t.jsxs)("a", {
                    href: "#top",
                    className:
                      "flex items-center gap-2.5 font-heading text-2xl font-black uppercase tracking-tight text-primary",
                    children: [
                      (0, t.jsx)(a.default, {
                        src: "/logo.png",
                        alt: "Robinhoodies mascot",
                        width: 36,
                        height: 36,
                        className: "size-9 object-contain",
                        priority: !0,
                      }),
                      "Robinhoodies",
                    ],
                  }),
                  (0, t.jsxs)("nav", {
                    className: "hidden items-center gap-8 md:flex",
                    children: [
                      l.map((e, r) =>
                        (0, t.jsx)(
                          "a",
                          {
                            href: e.href,
                            target: e.external ? "_blank" : void 0,
                            rel: e.external ? "noopener noreferrer" : void 0,
                            className: `font-mono text-xs uppercase tracking-wide transition-colors hover:text-primary ${
                              0 === r
                                ? "border-b border-primary pb-1 font-bold text-primary"
                                : "text-muted-foreground"
                            }`,
                            children: e.label,
                          },
                          e.label
                        )
                      ),
                      (0, t.jsx)("a", {
                        href: s,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Robinhoodies on X",
                        className:
                          "flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90",
                        children: (0, t.jsx)("svg", {
                          viewBox: "0 0 24 24",
                          className: "size-4",
                          fill: "currentColor",
                          "aria-hidden": "true",
                          children: (0, t.jsx)("path", {
                            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    onClick: () => i((e) => !e),
                    "aria-label": "Toggle menu",
                    className: "text-foreground md:hidden",
                    children: e
                      ? (0, t.jsx)(n, { className: "size-6" })
                      : (0, t.jsx)(o, { className: "size-6" }),
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  className:
                    "border-t border-primary/10 bg-black px-6 py-4 md:hidden",
                  children: (0, t.jsxs)("nav", {
                    className: "flex flex-col gap-4",
                    children: [
                      l.map((e) =>
                        (0, t.jsx)(
                          "a",
                          {
                            href: e.href,
                            target: e.external ? "_blank" : void 0,
                            rel: e.external ? "noopener noreferrer" : void 0,
                            onClick: () => i(!1),
                            className:
                              "font-mono text-sm uppercase tracking-wide text-muted-foreground hover:text-primary",
                            children: e.label,
                          },
                          e.label
                        )
                      ),
                      (0, t.jsx)("a", {
                        href: s,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: () => i(!1),
                        className:
                          "font-mono text-sm uppercase tracking-wide text-muted-foreground hover:text-primary",
                        children: "Twitter / X",
                      }),
                    ],
                  }),
                }),
            ],
          });
        },
      ],
      48303
    );
  },
  39672,
  (e) => {
    "use strict";
    var t = e.i(76350),
      r = e.i(73576),
      a = e.i(6927);
    let i = (0, a.default)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]),
      o = (0, a.default)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]),
      n = "0x7660432dd17c8c7107b182f6abaf1e6dac6cfa57";
    e.s(
      [
        "CopyContract",
        0,
        function () {
          let [e, a] = (0, r.useState)(!1),
            s = async () => {
              try {
                await navigator.clipboard.writeText(n);
              } catch {
                let e = document.createElement("textarea");
                (e.value = n),
                  document.body.appendChild(e),
                  e.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(e);
              }
              a(!0), setTimeout(() => a(!1), 1500);
            };
          return (0, t.jsxs)("button", {
            type: "button",
            onClick: s,
            "aria-label": "Copy contract address",
            className:
              "group flex w-full max-w-lg items-center gap-3 rounded-lg border border-primary/20 bg-secondary px-4 py-3 text-left transition-colors hover:border-primary/50",
            children: [
              (0, t.jsx)("span", {
                className:
                  "font-mono text-[10px] font-medium uppercase tracking-wide text-muted-foreground",
                children: "CA",
              }),
              (0, t.jsx)("span", {
                className:
                  "flex-1 truncate font-mono text-xs text-foreground sm:text-sm",
                children: n,
              }),
              e
                ? (0, t.jsxs)("span", {
                    className:
                      "flex items-center gap-1.5 font-mono text-xs font-medium uppercase text-primary",
                    children: [
                      (0, t.jsx)(i, { className: "size-4" }),
                      " Copied",
                    ],
                  })
                : (0, t.jsx)(o, {
                    className:
                      "size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary",
                  }),
            ],
          });
        },
      ],
      39672
    );
  },
  52279,
  (e) => {
    "use strict";
    var t = e.i(76350),
      r = e.i(73576),
      a = e.i(92321),
      i = e.i(6927);
    let o = (0, i.default)("upload", [
        ["path", { d: "M12 3v12", key: "1x0j5s" }],
        ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
      ]),
      n = (0, i.default)("download", [
        ["path", { d: "M12 15V3", key: "m9g1x1" }],
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
      ]),
      s = (0, i.default)("rotate-ccw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3",
          },
        ],
        ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
      ]),
      l = (0, i.default)("move", [
        ["path", { d: "M12 2v20", key: "t6zp3m" }],
        ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
        ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
        ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
        ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }],
      ]),
      d = (0, i.default)("zoom-in", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        [
          "line",
          { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" },
        ],
        ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
        ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
      ]),
      c = (0, i.default)("square-centerline-dashed-horizontal", [
        [
          "path",
          { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" },
        ],
        [
          "path",
          { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" },
        ],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "M12 14v2", key: "8jcxud" }],
        ["path", { d: "M12 8v2", key: "1woqiv" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
      ]),
      u = (0, i.default)("user", [
        [
          "path",
          { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
        ],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
      ]),
      f = (0, i.default)("shirt", [
        [
          "path",
          {
            d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
            key: "1wgbhj",
          },
        ],
      ]),
      p = (0, i.default)("scissors", [
        ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
        ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
        ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
        ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
        ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
      ]),
      m = (0, i.default)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]),
      g = { x: 0, y: -20, scale: 1, flip: !1 },
      h = { x: 0, y: 0, scale: 1, flip: !1 };
    e.s(
      [
        "PfpLab",
        0,
        function () {
          let i = (0, r.useRef)(null),
            x = (0, r.useRef)(null),
            y = (0, r.useRef)(null),
            b = (0, r.useRef)(null),
            v = (0, r.useRef)(null),
            j = (0, r.useRef)(null),
            [w, k] = (0, r.useState)(!1),
            [_, C] = (0, r.useState)(!1),
            [N, P] = (0, r.useState)("photo"),
            [R, z] = (0, r.useState)(g),
            [S, O] = (0, r.useState)(h),
            [M, E] = (0, r.useState)(!1),
            [A, I] = (0, r.useState)(!1),
            D = (0, r.useRef)({
              dragging: !1,
              target: "photo",
              startX: 0,
              startY: 0,
              origX: 0,
              origY: 0,
            });
          (0, r.useEffect)(() => {
            let e = new window.Image();
            (e.crossOrigin = "anonymous"),
              (e.src = "/hoodie-overlay.png"),
              (e.onload = () => {
                (v.current = e), C(!0);
              });
          }, []);
          let $ = (0, r.useCallback)(() => {
            let e = i.current;
            if (!e) return;
            let t = e.getContext("2d");
            if (!t) return;
            t.clearRect(0, 0, 512, 512),
              (t.fillStyle = "#c3f400"),
              t.fillRect(0, 0, 512, 512);
            let r = y.current;
            if (r) {
              let e = Math.max(512 / r.width, 512 / r.height) * R.scale,
                a = r.width * e,
                i = r.height * e,
                o = 256 + R.x,
                n = 256 + R.y;
              t.save(),
                t.translate(o, n),
                R.flip && t.scale(-1, 1),
                t.drawImage(r, -a / 2, -i / 2, a, i),
                t.restore();
            }
            let a = v.current;
            if (a) {
              let e = 512 * S.scale,
                r = 512 * S.scale,
                i = 256 + S.x,
                o = 256 + S.y;
              t.save(),
                t.translate(i, o),
                S.flip && t.scale(-1, 1),
                t.drawImage(a, -e / 2, -r / 2, e, r),
                t.restore();
            }
          }, [R, S]);
          (0, r.useEffect)(() => {
            $();
          }, [$, _, w]);
          let L = (e) =>
              new Promise((t) => {
                let r = new window.Image();
                (r.crossOrigin = "anonymous"),
                  (r.src = e),
                  (r.onload = () => {
                    (y.current = r), t();
                  });
              }),
            F = async () => {
              if (w && !A) {
                if (M) {
                  b.current && (await L(b.current), E(!1), $());
                  return;
                }
                I(!0);
                try {
                  let { removeBackground: t } = await e.A(63587),
                    r = await t(b.current),
                    a = URL.createObjectURL(r);
                  await L(a), E(!0), $();
                } catch (e) {
                  console.error("[v0] background removal failed:", e);
                } finally {
                  I(!1);
                }
              }
            },
            U = (e) => {
              let t = x.current.getBoundingClientRect(),
                r = 512 / t.width;
              return {
                x: (e.clientX - t.left) * r,
                y: (e.clientY - t.top) * r,
              };
            };
          return (0, t.jsx)("section", {
            id: "pfp",
            className: "border-b border-primary/10 bg-[#121414] py-24",
            children: (0, t.jsxs)("div", {
              className: "mx-auto max-w-6xl px-6",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "mb-12 flex flex-col items-center gap-4 text-center",
                  children: [
                    (0, t.jsxs)("h2", {
                      className:
                        "font-heading text-5xl font-bold uppercase tracking-tight text-foreground",
                      children: [
                        "PFP ",
                        (0, t.jsx)("span", {
                          className: "text-primary",
                          children: "Lab",
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "max-w-lg text-muted-foreground",
                      children:
                        "Upload your photo, line your face up inside the hood, and become a Robinhoodie. Free, instant, and runs entirely in your browser.",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "grid gap-8 lg:grid-cols-[1fr_340px]",
                  children: [
                    (0, t.jsxs)("div", {
                      ref: x,
                      onPointerDown: (e) => {
                        if (!w) return;
                        let t = U(e),
                          r = "photo" === N ? R : S;
                        (D.current = {
                          dragging: !0,
                          target: N,
                          startX: t.x,
                          startY: t.y,
                          origX: r.x,
                          origY: r.y,
                        }),
                          e.target.setPointerCapture(e.pointerId);
                      },
                      onPointerMove: (e) => {
                        if (!D.current.dragging) return;
                        let t = U(e),
                          r = t.x - D.current.startX,
                          a = t.y - D.current.startY;
                        "photo" === D.current.target
                          ? z((e) => ({
                              ...e,
                              x: D.current.origX + r,
                              y: D.current.origY + a,
                            }))
                          : O((e) => ({
                              ...e,
                              x: D.current.origX + r,
                              y: D.current.origY + a,
                            }));
                      },
                      onPointerUp: () => {
                        D.current.dragging = !1;
                      },
                      className:
                        "relative mx-auto aspect-square w-full max-w-xl touch-none select-none overflow-hidden rounded-2xl border border-primary/30 bg-[#0c0f0f]",
                      style: { cursor: w ? "grab" : "default" },
                      children: [
                        (0, t.jsx)("canvas", {
                          ref: i,
                          width: 512,
                          height: 512,
                          className: "h-full w-full",
                        }),
                        !w &&
                          (0, t.jsxs)("button", {
                            onClick: () => j.current?.click(),
                            className:
                              "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 text-muted-foreground transition-colors hover:text-primary",
                            children: [
                              (0, t.jsx)(o, { className: "size-10" }),
                              (0, t.jsx)("span", {
                                className:
                                  "font-heading text-xl font-bold uppercase",
                                children: "Upload your photo",
                              }),
                              (0, t.jsx)("span", {
                                className: "font-mono text-xs uppercase",
                                children: "JPG or PNG · stays in your browser",
                              }),
                            ],
                          }),
                        w &&
                          (0, t.jsxs)("div", {
                            className:
                              "pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase text-primary backdrop-blur",
                            children: [
                              (0, t.jsx)(l, { className: "size-3" }),
                              " Dragging ",
                              "photo" === N ? "your face" : "the hoodie",
                            ],
                          }),
                      ],
                    }),
                    (0, t.jsxs)("aside", {
                      className:
                        "flex flex-col gap-6 rounded-2xl border border-border bg-card p-6",
                      children: [
                        (0, t.jsx)("input", {
                          ref: j,
                          type: "file",
                          accept: "image/png,image/jpeg,image/webp",
                          onChange: (e) => {
                            let t = e.target.files?.[0];
                            if (!t) return;
                            let r = new FileReader();
                            (r.onload = async () => {
                              let e = r.result;
                              (b.current = e), await L(e), E(!1), k(!0), z(g);
                            }),
                              r.readAsDataURL(t);
                          },
                          className: "hidden",
                        }),
                        (0, t.jsxs)("button", {
                          onClick: () => j.current?.click(),
                          className:
                            "flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 font-heading text-lg font-bold uppercase tracking-tight text-primary transition-colors hover:bg-primary/20",
                          children: [
                            (0, t.jsx)(o, { className: "size-4" }),
                            w ? "Change photo" : "Upload photo",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, t.jsx)("span", {
                              className:
                                "font-mono text-xs uppercase tracking-wide text-muted-foreground",
                              children: "Editing",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "grid grid-cols-2 gap-2 rounded-lg border border-border p-1",
                              children: [
                                { id: "photo", label: "Face", icon: u },
                                { id: "hoodie", label: "Hoodie", icon: f },
                              ].map(({ id: e, label: r, icon: a }) =>
                                (0, t.jsxs)(
                                  "button",
                                  {
                                    onClick: () => P(e),
                                    disabled: !w,
                                    className: `flex items-center justify-center gap-2 rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wide transition-colors disabled:opacity-40 ${
                                      N === e
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`,
                                    children: [
                                      (0, t.jsx)(a, { className: "size-3.5" }),
                                      " ",
                                      r,
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            (0, t.jsxs)("label", {
                              className:
                                "flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted-foreground",
                              children: [
                                (0, t.jsx)(d, { className: "size-3.5" }),
                                "photo" === N ? "Zoom face" : "Zoom hoodie",
                              ],
                            }),
                            (0, t.jsx)("input", {
                              type: "range",
                              min: 0.5,
                              max: 3,
                              step: 0.01,
                              value: "photo" === N ? R.scale : S.scale,
                              disabled: !w,
                              onChange: (e) => {
                                let t = Number(e.target.value);
                                "photo" === N
                                  ? z((e) => ({ ...e, scale: t }))
                                  : O((e) => ({ ...e, scale: t }));
                              },
                              className: "accent-primary disabled:opacity-40",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            (0, t.jsxs)("button", {
                              onClick: () => {
                                "photo" === N
                                  ? z((e) => ({ ...e, flip: !e.flip }))
                                  : O((e) => ({ ...e, flip: !e.flip }));
                              },
                              disabled: !w,
                              className: `flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-xs uppercase tracking-wide transition-colors disabled:opacity-40 ${
                                ("photo" === N ? R.flip : S.flip)
                                  ? "border-primary/40 bg-primary/10 text-primary"
                                  : "border-border text-muted-foreground hover:text-foreground"
                              }`,
                              children: [
                                (0, t.jsx)(c, { className: "size-3.5" }),
                                " Flip",
                                " ",
                                "photo" === N ? "face" : "hoodie",
                              ],
                            }),
                            (0, t.jsxs)("button", {
                              onClick: () => {
                                "photo" === N ? z(g) : O(h);
                              },
                              disabled: !w,
                              className:
                                "flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40",
                              children: [
                                (0, t.jsx)(s, { className: "size-3.5" }),
                                " Reset",
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("button", {
                          onClick: F,
                          disabled: !w || A,
                          className: `flex items-center justify-center gap-2 rounded-lg border px-4 py-3 font-mono text-xs uppercase tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                            M
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`,
                          children: A
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(m, {
                                    className: "size-3.5 animate-spin",
                                  }),
                                  " Removing bg…",
                                ],
                              })
                            : M
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(s, { className: "size-3.5" }),
                                  " Restore background",
                                ],
                              })
                            : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(p, { className: "size-3.5" }),
                                  " Remove photo background",
                                ],
                              }),
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "mt-auto flex flex-col gap-3 border-t border-border pt-6",
                          children: [
                            (0, t.jsxs)("button", {
                              onClick: () => {
                                let e = i.current;
                                if (!e) return;
                                let t = document.createElement("a");
                                (t.href = e.toDataURL("image/png")),
                                  (t.download = "robinhoodie-pfp.png"),
                                  t.click();
                              },
                              disabled: !w,
                              className:
                                "flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-heading text-lg font-bold uppercase tracking-tight text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40",
                              children: [
                                (0, t.jsx)(n, { className: "size-4" }),
                                " Download PFP",
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-center font-mono text-[10px] uppercase text-muted-foreground",
                              children: "100% free · no signup · no AI credits",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "mt-10 flex items-center justify-center gap-3",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "relative size-12 overflow-hidden rounded-lg border border-border bg-[#0c0f0f]",
                      children: (0, t.jsx)(a.default, {
                        src: "/pfp-sample.png",
                        alt: "Robinhoodies hoodie PFP example",
                        width: 48,
                        height: 48,
                        className: "size-full object-cover",
                      }),
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "font-mono text-xs uppercase tracking-wide text-muted-foreground",
                      children: "Official Robinhoodies hoodie overlay",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
      ],
      52279
    );
  },
  11367,
  (e) => {
    "use strict";
    var t = e.i(76350);
    let r = (0, e.i(6927).default)("zap", [
      [
        "path",
        {
          d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
          key: "1xq2db",
        },
      ],
    ]);
    e.s(
      [
        "QuickActionFab",
        0,
        function () {
          return (0, t.jsx)("a", {
            href: "https://app.uniswap.org/swap?outputCurrency=0x7660432dd17c8c7107b182f6abaf1e6dac6cfa57&chain=robinhood",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Quick trade on Uniswap",
            className:
              "fixed bottom-8 right-8 z-50 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_40px_rgba(171,214,0,0.4)] transition-transform hover:scale-110 active:scale-95",
            children: (0, t.jsx)(r, { className: "size-6" }),
          });
        },
      ],
      11367
    );
  },
]);
