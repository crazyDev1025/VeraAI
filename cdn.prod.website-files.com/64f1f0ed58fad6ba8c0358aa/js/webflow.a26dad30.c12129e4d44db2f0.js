(() => {
  var e = {
      9904: function () {
        "use strict";
        !(function () {
          if ("undefined" == typeof window) return;
          let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
            t = !!e && parseInt(e[1], 10) >= 16;
          if ("objectFit" in document.documentElement.style != !1 && !t) {
            window.objectFitPolyfill = function () {
              return !1;
            };
            return;
          }
          let n = function (e) {
              let t = window.getComputedStyle(e, null),
                n = t.getPropertyValue("position"),
                i = t.getPropertyValue("overflow"),
                a = t.getPropertyValue("display");
              (!n || "static" === n) && (e.style.position = "relative"),
                "hidden" !== i && (e.style.overflow = "hidden"),
                (!a || "inline" === a) && (e.style.display = "block"),
                0 === e.clientHeight && (e.style.height = "100%"),
                -1 === e.className.indexOf("object-fit-polyfill") &&
                  (e.className += " object-fit-polyfill");
            },
            i = function (e) {
              let t = window.getComputedStyle(e, null),
                n = {
                  "max-width": "none",
                  "max-height": "none",
                  "min-width": "0px",
                  "min-height": "0px",
                  top: "auto",
                  right: "auto",
                  bottom: "auto",
                  left: "auto",
                  "margin-top": "0px",
                  "margin-right": "0px",
                  "margin-bottom": "0px",
                  "margin-left": "0px",
                };
              for (let i in n)
                t.getPropertyValue(i) !== n[i] && (e.style[i] = n[i]);
            },
            a = function (e) {
              let t = e.parentNode;
              n(t),
                i(e),
                (e.style.position = "absolute"),
                (e.style.height = "100%"),
                (e.style.width = "auto"),
                e.clientWidth > t.clientWidth
                  ? ((e.style.top = "0"),
                    (e.style.marginTop = "0"),
                    (e.style.left = "50%"),
                    (e.style.marginLeft = -(e.clientWidth / 2) + "px"))
                  : ((e.style.width = "100%"),
                    (e.style.height = "auto"),
                    (e.style.left = "0"),
                    (e.style.marginLeft = "0"),
                    (e.style.top = "50%"),
                    (e.style.marginTop = -(e.clientHeight / 2) + "px"));
            },
            r = function (e) {
              if (void 0 === e || e instanceof Event)
                e = document.querySelectorAll("[data-object-fit]");
              else if (e && e.nodeName) e = [e];
              else if ("object" != typeof e || !e.length || !e[0].nodeName)
                return !1;
              for (let n = 0; n < e.length; n++) {
                if (!e[n].nodeName) continue;
                let i = e[n].nodeName.toLowerCase();
                if ("img" === i) {
                  if (t) continue;
                  e[n].complete
                    ? a(e[n])
                    : e[n].addEventListener("load", function () {
                        a(this);
                      });
                } else
                  "video" === i
                    ? e[n].readyState > 0
                      ? a(e[n])
                      : e[n].addEventListener("loadedmetadata", function () {
                          a(this);
                        })
                    : a(e[n]);
              }
              return !0;
            };
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", r)
            : r(),
            window.addEventListener("resize", r),
            (window.objectFitPolyfill = r);
        })();
      },
      1724: function () {
        "use strict";
        !(function () {
          function e(e) {
            if (!Webflow.env("design"))
              $("video").each(function () {
                e && $(this).prop("autoplay") ? this.play() : this.pause();
              }),
                $(".w-background-video--control").each(function () {
                  e ? n($(this)) : t($(this));
                });
          }
          function t(e) {
            e.find("> span").each(function (e) {
              $(this).prop("hidden", () => 0 === e);
            });
          }
          function n(e) {
            e.find("> span").each(function (e) {
              $(this).prop("hidden", () => 1 === e);
            });
          }
          "undefined" != typeof window &&
            $(document).ready(() => {
              let i = window.matchMedia("(prefers-reduced-motion: reduce)");
              i.addEventListener("change", (t) => {
                e(!t.matches);
              }),
                i.matches && e(!1),
                $("video:not([autoplay])").each(function () {
                  $(this)
                    .parent()
                    .find(".w-background-video--control")
                    .each(function () {
                      t($(this));
                    });
                }),
                $(document).on(
                  "click",
                  ".w-background-video--control",
                  function (e) {
                    if (Webflow.env("design")) return;
                    let i = $(e.currentTarget),
                      a = $(`video#${i.attr("aria-controls")}`).get(0);
                    if (a) {
                      if (a.paused) {
                        let e = a.play();
                        n(i),
                          e &&
                            "function" == typeof e.catch &&
                            e.catch(() => {
                              t(i);
                            });
                      } else a.pause(), t(i);
                    }
                  }
                );
            });
        })();
      },
      941: function (e, t, n) {
        "use strict";
        var i = n(3949),
          a = n(6011);
        a.setEnv(i.env),
          i.define(
            "ix2",
            (e.exports = function () {
              return a;
            })
          );
      },
      4345: function (e, t, n) {
        "use strict";
        var i = n(3949),
          a = n(5134);
        let r = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35,
          },
          o =
            'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        i.define(
          "slider",
          (e.exports = function (e, t) {
            var n,
              l,
              u,
              c = {},
              d = e.tram,
              s = e(document),
              f = i.env(),
              E = ".w-slider",
              p = "w-slider-force-show",
              I = a.triggers,
              T = !1;
            function y() {
              if (!(n = s.find(E)).length) return;
              if ((n.each(O), !u))
                g(),
                  (function () {
                    i.resize.on(m), i.redraw.on(c.redraw);
                  })();
            }
            function g() {
              i.resize.off(m), i.redraw.off(c.redraw);
            }
            (c.ready = function () {
              (l = i.env("design")), y();
            }),
              (c.design = function () {
                (l = !0), setTimeout(y, 1e3);
              }),
              (c.preview = function () {
                (l = !1), y();
              }),
              (c.redraw = function () {
                (T = !0), y(), (T = !1);
              }),
              (c.destroy = g);
            function m() {
              n.filter(":visible").each(F);
            }
            function O(t, n) {
              var i = e(n),
                a = e.data(n, E);
              !a &&
                (a = e.data(n, E, {
                  index: 0,
                  depth: 1,
                  hasFocus: { keyboard: !1, mouse: !1 },
                  el: i,
                  config: {},
                })),
                (a.mask = i.children(".w-slider-mask")),
                (a.left = i.children(".w-slider-arrow-left")),
                (a.right = i.children(".w-slider-arrow-right")),
                (a.nav = i.children(".w-slider-nav")),
                (a.slides = a.mask.children(".w-slide")),
                a.slides.each(I.reset),
                T && (a.maskWidth = 0),
                void 0 === i.attr("role") && i.attr("role", "region"),
                void 0 === i.attr("aria-label") &&
                  i.attr("aria-label", "carousel");
              var r = a.mask.attr("id");
              if (
                (!r && ((r = "w-slider-mask-" + t), a.mask.attr("id", r)),
                !l &&
                  !a.ariaLiveLabel &&
                  (a.ariaLiveLabel = e(
                    '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />'
                  ).appendTo(a.mask)),
                a.left.attr("role", "button"),
                a.left.attr("tabindex", "0"),
                a.left.attr("aria-controls", r),
                void 0 === a.left.attr("aria-label") &&
                  a.left.attr("aria-label", "previous slide"),
                a.right.attr("role", "button"),
                a.right.attr("tabindex", "0"),
                a.right.attr("aria-controls", r),
                void 0 === a.right.attr("aria-label") &&
                  a.right.attr("aria-label", "next slide"),
                !d.support.transform)
              ) {
                a.left.hide(), a.right.hide(), a.nav.hide(), (u = !0);
                return;
              }
              a.el.off(E),
                a.left.off(E),
                a.right.off(E),
                a.nav.off(E),
                _(a),
                l
                  ? (a.el.on("setting" + E, R(a)), C(a), (a.hasTimer = !1))
                  : (a.el.on("swipe" + E, R(a)),
                    a.left.on("click" + E, A(a)),
                    a.right.on("click" + E, N(a)),
                    a.left.on("keydown" + E, v(a, A)),
                    a.right.on("keydown" + E, v(a, N)),
                    a.nav.on("keydown" + E, "> div", R(a)),
                    a.config.autoplay &&
                      !a.hasTimer &&
                      ((a.hasTimer = !0), (a.timerCount = 1), L(a)),
                    a.el.on("mouseenter" + E, h(a, !0, "mouse")),
                    a.el.on("focusin" + E, h(a, !0, "keyboard")),
                    a.el.on("mouseleave" + E, h(a, !1, "mouse")),
                    a.el.on("focusout" + E, h(a, !1, "keyboard"))),
                a.nav.on("click" + E, "> div", R(a)),
                !f &&
                  a.mask
                    .contents()
                    .filter(function () {
                      return 3 === this.nodeType;
                    })
                    .remove();
              var o = i.filter(":hidden");
              o.addClass(p);
              var c = i.parents(":hidden");
              c.addClass(p), !T && F(t, n), o.removeClass(p), c.removeClass(p);
            }
            function _(e) {
              var t = {};
              (t.crossOver = 0),
                (t.animation = e.el.attr("data-animation") || "slide"),
                "outin" === t.animation &&
                  ((t.animation = "cross"), (t.crossOver = 0.5)),
                (t.easing = e.el.attr("data-easing") || "ease");
              var n = e.el.attr("data-duration");
              if (
                ((t.duration = null != n ? parseInt(n, 10) : 500),
                b(e.el.attr("data-infinite")) && (t.infinite = !0),
                b(e.el.attr("data-disable-swipe")) && (t.disableSwipe = !0),
                b(e.el.attr("data-hide-arrows"))
                  ? (t.hideArrows = !0)
                  : e.config.hideArrows && (e.left.show(), e.right.show()),
                b(e.el.attr("data-autoplay")))
              ) {
                (t.autoplay = !0),
                  (t.delay = parseInt(e.el.attr("data-delay"), 10) || 2e3),
                  (t.timerMax = parseInt(e.el.attr("data-autoplay-limit"), 10));
                var i = "mousedown" + E + " touchstart" + E;
                !l &&
                  e.el.off(i).one(i, function () {
                    C(e);
                  });
              }
              var a = e.right.width();
              (t.edge = a ? a + 40 : 100), (e.config = t);
            }
            function b(e) {
              return "1" === e || "true" === e;
            }
            function h(t, n, i) {
              return function (a) {
                if (n) t.hasFocus[i] = n;
                else {
                  if (e.contains(t.el.get(0), a.relatedTarget)) return;
                  if (
                    ((t.hasFocus[i] = n),
                    (t.hasFocus.mouse && "keyboard" === i) ||
                      (t.hasFocus.keyboard && "mouse" === i))
                  )
                    return;
                }
                n
                  ? (t.ariaLiveLabel.attr("aria-live", "polite"),
                    t.hasTimer && C(t))
                  : (t.ariaLiveLabel.attr("aria-live", "off"),
                    t.hasTimer && L(t));
              };
            }
            function v(e, t) {
              return function (n) {
                switch (n.keyCode) {
                  case r.SPACE:
                  case r.ENTER:
                    return t(e)(), n.preventDefault(), n.stopPropagation();
                }
              };
            }
            function A(e) {
              return function () {
                M(e, { index: e.index - 1, vector: -1 });
              };
            }
            function N(e) {
              return function () {
                M(e, { index: e.index + 1, vector: 1 });
              };
            }
            function L(e) {
              C(e);
              var t = e.config,
                n = t.timerMax;
              if (!(n && e.timerCount++ > n))
                e.timerId = window.setTimeout(function () {
                  if (null != e.timerId && !l) N(e)(), L(e);
                }, t.delay);
            }
            function C(e) {
              window.clearTimeout(e.timerId), (e.timerId = null);
            }
            function R(n) {
              return function (a, o) {
                o = o || {};
                var u,
                  c,
                  d,
                  s = n.config;
                if (l && "setting" === a.type) {
                  if ("prev" === o.select) return A(n)();
                  if ("next" === o.select) return N(n)();
                  if ((_(n), P(n), null == o.select)) return;
                  return (
                    (u = n),
                    (c = o.select),
                    (d = null),
                    c === u.slides.length && (y(), P(u)),
                    t.each(u.anchors, function (t, n) {
                      e(t.els).each(function (t, i) {
                        e(i).index() === c && (d = n);
                      });
                    }),
                    null != d && M(u, { index: d, immediate: !0 }),
                    void 0
                  );
                }
                if ("swipe" === a.type)
                  return s.disableSwipe || i.env("editor")
                    ? void 0
                    : "left" === o.direction
                    ? N(n)()
                    : "right" === o.direction
                    ? A(n)()
                    : void 0;
                if (n.nav.has(a.target).length) {
                  var f = e(a.target).index();
                  if (
                    ("click" === a.type && M(n, { index: f }),
                    "keydown" === a.type)
                  )
                    switch (a.keyCode) {
                      case r.ENTER:
                      case r.SPACE:
                        M(n, { index: f }), a.preventDefault();
                        break;
                      case r.ARROW_LEFT:
                      case r.ARROW_UP:
                        S(n.nav, Math.max(f - 1, 0)), a.preventDefault();
                        break;
                      case r.ARROW_RIGHT:
                      case r.ARROW_DOWN:
                        S(n.nav, Math.min(f + 1, n.pages)), a.preventDefault();
                        break;
                      case r.HOME:
                        S(n.nav, 0), a.preventDefault();
                        break;
                      case r.END:
                        S(n.nav, n.pages), a.preventDefault();
                        break;
                      default:
                        return;
                    }
                }
              };
            }
            function S(e, t) {
              var n = e.children().eq(t).focus();
              e.children().not(n);
            }
            function M(t, n) {
              n = n || {};
              var i = t.config,
                a = t.anchors;
              t.previous = t.index;
              var r = n.index,
                u = {};
              r < 0
                ? ((r = a.length - 1),
                  i.infinite &&
                    ((u.x = -t.endX), (u.from = 0), (u.to = a[0].width)))
                : r >= a.length &&
                  ((r = 0),
                  i.infinite &&
                    ((u.x = a[a.length - 1].width),
                    (u.from = -a[a.length - 1].x),
                    (u.to = u.from - u.x))),
                (t.index = r);
              var c = t.nav
                .children()
                .eq(r)
                .addClass("w-active")
                .attr("aria-pressed", "true")
                .attr("tabindex", "0");
              t.nav
                .children()
                .not(c)
                .removeClass("w-active")
                .attr("aria-pressed", "false")
                .attr("tabindex", "-1"),
                i.hideArrows &&
                  (t.index === a.length - 1 ? t.right.hide() : t.right.show(),
                  0 === t.index ? t.left.hide() : t.left.show());
              var s = t.offsetX || 0,
                f = (t.offsetX = -a[t.index].x),
                E = { x: f, opacity: 1, visibility: "" },
                p = e(a[t.index].els),
                y = e(a[t.previous] && a[t.previous].els),
                g = t.slides.not(p),
                m = i.animation,
                O = i.easing,
                _ = Math.round(i.duration),
                b = n.vector || (t.index > t.previous ? 1 : -1),
                h = "opacity " + _ + "ms " + O,
                v = "transform " + _ + "ms " + O;
              if (
                (p.find(o).removeAttr("tabindex"),
                p.removeAttr("aria-hidden"),
                p.find("*").removeAttr("aria-hidden"),
                g.find(o).attr("tabindex", "-1"),
                g.attr("aria-hidden", "true"),
                g.find("*").attr("aria-hidden", "true"),
                !l && (p.each(I.intro), g.each(I.outro)),
                n.immediate && !T)
              ) {
                d(p).set(E), L();
                return;
              }
              if (t.index !== t.previous) {
                if (
                  (!l && t.ariaLiveLabel.text(`Slide ${r + 1} of ${a.length}.`),
                  "cross" === m)
                ) {
                  var A = Math.round(_ - _ * i.crossOver),
                    N = Math.round(_ - A);
                  (h = "opacity " + A + "ms " + O),
                    d(y).set({ visibility: "" }).add(h).start({ opacity: 0 }),
                    d(p)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: t.depth++,
                      })
                      .add(h)
                      .wait(N)
                      .then({ opacity: 1 })
                      .then(L);
                  return;
                }
                if ("fade" === m) {
                  d(y).set({ visibility: "" }).stop(),
                    d(p)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: t.depth++,
                      })
                      .add(h)
                      .start({ opacity: 1 })
                      .then(L);
                  return;
                }
                if ("over" === m) {
                  (E = { x: t.endX }),
                    d(y).set({ visibility: "" }).stop(),
                    d(p)
                      .set({
                        visibility: "",
                        zIndex: t.depth++,
                        x: f + a[t.index].width * b,
                      })
                      .add(v)
                      .start({ x: f })
                      .then(L);
                  return;
                }
                i.infinite && u.x
                  ? (d(t.slides.not(y))
                      .set({ visibility: "", x: u.x })
                      .add(v)
                      .start({ x: f }),
                    d(y)
                      .set({ visibility: "", x: u.from })
                      .add(v)
                      .start({ x: u.to }),
                    (t.shifted = y))
                  : (i.infinite &&
                      t.shifted &&
                      (d(t.shifted).set({ visibility: "", x: s }),
                      (t.shifted = null)),
                    d(t.slides).set({ visibility: "" }).add(v).start({ x: f }));
              }
              function L() {
                (p = e(a[t.index].els)),
                  (g = t.slides.not(p)),
                  "slide" !== m && (E.visibility = "hidden"),
                  d(g).set(E);
              }
            }
            function F(t, n) {
              var i = e.data(n, E);
              if (!!i) {
                if (
                  (function (e) {
                    var t = e.mask.width();
                    return e.maskWidth !== t && ((e.maskWidth = t), !0);
                  })(i)
                )
                  return P(i);
                l &&
                  (function (t) {
                    var n = 0;
                    return (
                      t.slides.each(function (t, i) {
                        n += e(i).outerWidth(!0);
                      }),
                      t.slidesWidth !== n && ((t.slidesWidth = n), !0)
                    );
                  })(i) &&
                  P(i);
              }
            }
            function P(t) {
              var n = 1,
                i = 0,
                a = 0,
                r = 0,
                o = t.maskWidth,
                u = o - t.config.edge;
              u < 0 && (u = 0),
                (t.anchors = [{ els: [], x: 0, width: 0 }]),
                t.slides.each(function (l, c) {
                  a - i > u &&
                    (n++,
                    (i += o),
                    (t.anchors[n - 1] = { els: [], x: a, width: 0 })),
                    (r = e(c).outerWidth(!0)),
                    (a += r),
                    (t.anchors[n - 1].width += r),
                    t.anchors[n - 1].els.push(c);
                  var d = l + 1 + " of " + t.slides.length;
                  e(c).attr("aria-label", d), e(c).attr("role", "group");
                }),
                (t.endX = a),
                l && (t.pages = null),
                t.nav.length &&
                  t.pages !== n &&
                  ((t.pages = n),
                  (function (t) {
                    var n,
                      i = [],
                      a = t.el.attr("data-nav-spacing");
                    a && (a = parseFloat(a) + "px");
                    for (var r = 0, o = t.pages; r < o; r++)
                      (n = e('<div class="w-slider-dot" data-wf-ignore />'))
                        .attr(
                          "aria-label",
                          "Show slide " + (r + 1) + " of " + o
                        )
                        .attr("aria-pressed", "false")
                        .attr("role", "button")
                        .attr("tabindex", "-1"),
                        t.nav.hasClass("w-num") && n.text(r + 1),
                        null != a &&
                          n.css({ "margin-left": a, "margin-right": a }),
                        i.push(n);
                    t.nav.empty().append(i);
                  })(t));
              var c = t.index;
              c >= n && (c = n - 1), M(t, { immediate: !0, index: c });
            }
            return c;
          })
        );
      },
      3946: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          actionListPlaybackChanged: function () {
            return X;
          },
          animationFrameChanged: function () {
            return B;
          },
          clearRequested: function () {
            return P;
          },
          elementStateChanged: function () {
            return j;
          },
          eventListenerAdded: function () {
            return w;
          },
          eventStateChanged: function () {
            return k;
          },
          instanceAdded: function () {
            return V;
          },
          instanceRemoved: function () {
            return U;
          },
          instanceStarted: function () {
            return G;
          },
          mediaQueriesDefined: function () {
            return Q;
          },
          parameterChanged: function () {
            return x;
          },
          playbackRequested: function () {
            return M;
          },
          previewRequested: function () {
            return S;
          },
          rawDataImported: function () {
            return N;
          },
          sessionInitialized: function () {
            return L;
          },
          sessionStarted: function () {
            return C;
          },
          sessionStopped: function () {
            return R;
          },
          stopRequested: function () {
            return F;
          },
          testFrameRendered: function () {
            return D;
          },
          viewportWidthChanged: function () {
            return W;
          },
        });
        let i = n(7087),
          a = n(9468),
          {
            IX2_RAW_DATA_IMPORTED: r,
            IX2_SESSION_INITIALIZED: o,
            IX2_SESSION_STARTED: l,
            IX2_SESSION_STOPPED: u,
            IX2_PREVIEW_REQUESTED: c,
            IX2_PLAYBACK_REQUESTED: d,
            IX2_STOP_REQUESTED: s,
            IX2_CLEAR_REQUESTED: f,
            IX2_EVENT_LISTENER_ADDED: E,
            IX2_TEST_FRAME_RENDERED: p,
            IX2_EVENT_STATE_CHANGED: I,
            IX2_ANIMATION_FRAME_CHANGED: T,
            IX2_PARAMETER_CHANGED: y,
            IX2_INSTANCE_ADDED: g,
            IX2_INSTANCE_STARTED: m,
            IX2_INSTANCE_REMOVED: O,
            IX2_ELEMENT_STATE_CHANGED: _,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: b,
            IX2_VIEWPORT_WIDTH_CHANGED: h,
            IX2_MEDIA_QUERIES_DEFINED: v,
          } = i.IX2EngineActionTypes,
          { reifyState: A } = a.IX2VanillaUtils,
          N = (e) => ({ type: r, payload: { ...A(e) } }),
          L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
            type: o,
            payload: { hasBoundaryNodes: e, reducedMotion: t },
          }),
          C = () => ({ type: l }),
          R = () => ({ type: u }),
          S = ({ rawData: e, defer: t }) => ({
            type: c,
            payload: { defer: t, rawData: e },
          }),
          M = ({
            actionTypeId: e = i.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: a,
            allowEvents: r,
            immediate: o,
            testManual: l,
            verbose: u,
            rawData: c,
          }) => ({
            type: d,
            payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: n,
              testManual: l,
              eventId: a,
              allowEvents: r,
              immediate: o,
              verbose: u,
              rawData: c,
            },
          }),
          F = (e) => ({ type: s, payload: { actionListId: e } }),
          P = () => ({ type: f }),
          w = (e, t) => ({
            type: E,
            payload: { target: e, listenerParams: t },
          }),
          D = (e = 1) => ({ type: p, payload: { step: e } }),
          k = (e, t) => ({ type: I, payload: { stateKey: e, newState: t } }),
          B = (e, t) => ({ type: T, payload: { now: e, parameters: t } }),
          x = (e, t) => ({ type: y, payload: { key: e, value: t } }),
          V = (e) => ({ type: g, payload: { ...e } }),
          G = (e, t) => ({ type: m, payload: { instanceId: e, time: t } }),
          U = (e) => ({ type: O, payload: { instanceId: e } }),
          j = (e, t, n, i) => ({
            type: _,
            payload: {
              elementId: e,
              actionTypeId: t,
              current: n,
              actionItem: i,
            },
          }),
          X = ({ actionListId: e, isPlaying: t }) => ({
            type: b,
            payload: { actionListId: e, isPlaying: t },
          }),
          W = ({ width: e, mediaQueries: t }) => ({
            type: h,
            payload: { width: e, mediaQueries: t },
          }),
          Q = () => ({ type: v });
      },
      6011: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          actions: function () {
            return o;
          },
          destroy: function () {
            return s;
          },
          init: function () {
            return d;
          },
          setEnv: function () {
            return c;
          },
          store: function () {
            return u;
          },
        });
        let i = n(9516),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(7243)),
          r = n(1970),
          o = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = l(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(i, r, o)
                  : (i[r] = e[r]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(3946));
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        let u = (0, i.createStore)(a.default);
        function c(e) {
          e() && (0, r.observeRequests)(u);
        }
        function d(e) {
          s(), (0, r.startEngine)({ store: u, rawData: e, allowEvents: !0 });
        }
        function s() {
          (0, r.stopEngine)(u);
        }
      },
      5012: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          elementContains: function () {
            return y;
          },
          getChildElements: function () {
            return m;
          },
          getClosestElement: function () {
            return _;
          },
          getProperty: function () {
            return f;
          },
          getQuerySelector: function () {
            return p;
          },
          getRefType: function () {
            return b;
          },
          getSiblingElements: function () {
            return O;
          },
          getStyle: function () {
            return s;
          },
          getValidDocument: function () {
            return I;
          },
          isSiblingNode: function () {
            return g;
          },
          matchSelector: function () {
            return E;
          },
          queryDocument: function () {
            return T;
          },
          setStyle: function () {
            return d;
          },
        });
        let i = n(9468),
          a = n(7087),
          { ELEMENT_MATCHES: r } = i.IX2BrowserSupport,
          {
            IX2_ID_DELIMITER: o,
            HTML_ELEMENT: l,
            PLAIN_OBJECT: u,
            WF_PAGE: c,
          } = a.IX2EngineConstants;
        function d(e, t, n) {
          e.style[t] = n;
        }
        function s(e, t) {
          return t.startsWith("--")
            ? window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(t)
            : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
        }
        function f(e, t) {
          return e[t];
        }
        function E(e) {
          return (t) => t[r](e);
        }
        function p({ id: e, selector: t }) {
          if (e) {
            let t = e;
            if (-1 !== e.indexOf(o)) {
              let n = e.split(o),
                i = n[0];
              if (((t = n[1]), i !== document.documentElement.getAttribute(c)))
                return null;
            }
            return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
          }
          return t;
        }
        function I(e) {
          return null == e || e === document.documentElement.getAttribute(c)
            ? document
            : null;
        }
        function T(e, t) {
          return Array.prototype.slice.call(
            document.querySelectorAll(t ? e + " " + t : e)
          );
        }
        function y(e, t) {
          return e.contains(t);
        }
        function g(e, t) {
          return e !== t && e.parentNode === t.parentNode;
        }
        function m(e) {
          let t = [];
          for (let n = 0, { length: i } = e || []; n < i; n++) {
            let { children: i } = e[n],
              { length: a } = i;
            if (!!a) for (let e = 0; e < a; e++) t.push(i[e]);
          }
          return t;
        }
        function O(e = []) {
          let t = [],
            n = [];
          for (let i = 0, { length: a } = e; i < a; i++) {
            let { parentNode: a } = e[i];
            if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
              continue;
            n.push(a);
            let r = a.firstElementChild;
            for (; null != r; )
              -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
          }
          return t;
        }
        let _ = Element.prototype.closest
          ? (e, t) =>
              document.documentElement.contains(e) ? e.closest(t) : null
          : (e, t) => {
              if (!document.documentElement.contains(e)) return null;
              let n = e;
              do {
                if (n[r] && n[r](t)) return n;
                n = n.parentNode;
              } while (null != n);
              return null;
            };
        function b(e) {
          return null != e && "object" == typeof e
            ? e instanceof Element
              ? l
              : u
            : null;
        }
      },
      1970: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          observeRequests: function () {
            return z;
          },
          startActionGroup: function () {
            return eE;
          },
          startEngine: function () {
            return en;
          },
          stopActionGroup: function () {
            return ef;
          },
          stopAllActionGroups: function () {
            return es;
          },
          stopEngine: function () {
            return ei;
          },
        });
        let i = T(n(9777)),
          a = T(n(4738)),
          r = T(n(4659)),
          o = T(n(3452)),
          l = T(n(6633)),
          u = T(n(3729)),
          c = T(n(2397)),
          d = T(n(5082)),
          s = n(7087),
          f = n(9468),
          E = n(3946),
          p = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = y(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(i, r, o)
                  : (i[r] = e[r]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(5012)),
          I = T(n(8955));
        function T(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function y(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (y = function (e) {
            return e ? n : t;
          })(e);
        }
        let g = Object.keys(s.QuickEffectIds),
          m = (e) => g.includes(e),
          {
            COLON_DELIMITER: O,
            BOUNDARY_SELECTOR: _,
            HTML_ELEMENT: b,
            RENDER_GENERAL: h,
            W_MOD_IX: v,
          } = s.IX2EngineConstants,
          {
            getAffectedElements: A,
            getElementId: N,
            getDestinationValues: L,
            observeStore: C,
            getInstanceId: R,
            renderHTMLElement: S,
            clearAllStyles: M,
            getMaxDurationItemIndex: F,
            getComputedStyle: P,
            getInstanceOrigin: w,
            reduceListToGroup: D,
            shouldNamespaceEventParameter: k,
            getNamespacedParameterId: B,
            shouldAllowMediaQuery: x,
            cleanupHTMLElement: V,
            clearObjectCache: G,
            stringifyTarget: U,
            mediaQueriesEqual: j,
            shallowEqual: X,
          } = f.IX2VanillaUtils,
          {
            isPluginType: W,
            createPluginInstance: Q,
            getPluginDuration: H,
          } = f.IX2VanillaPlugins,
          Y = navigator.userAgent,
          K = Y.match(/iPad/i) || Y.match(/iPhone/);
        function z(e) {
          C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: q }),
            C({
              store: e,
              select: ({ ixRequest: e }) => e.playback,
              onChange: J,
            }),
            C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: ee }),
            C({
              store: e,
              select: ({ ixRequest: e }) => e.clear,
              onChange: et,
            });
        }
        function q({ rawData: e, defer: t }, n) {
          let i = () => {
            en({ store: n, rawData: e, allowEvents: !0 }), Z();
          };
          t ? setTimeout(i, 0) : i();
        }
        function Z() {
          document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function J(e, t) {
          let {
              actionTypeId: n,
              actionListId: i,
              actionItemId: a,
              eventId: r,
              allowEvents: o,
              immediate: l,
              testManual: u,
              verbose: c = !0,
            } = e,
            { rawData: d } = e;
          if (i && a && d && l) {
            let e = d.actionLists[i];
            e && (d = D({ actionList: e, actionItemId: a, rawData: d }));
          }
          if (
            (en({ store: t, rawData: d, allowEvents: o, testManual: u }),
            (i && n === s.ActionTypeConsts.GENERAL_START_ACTION) || m(n))
          ) {
            ef({ store: t, actionListId: i }),
              ed({ store: t, actionListId: i, eventId: r });
            let e = eE({
              store: t,
              eventId: r,
              actionListId: i,
              immediate: l,
              verbose: c,
            });
            c &&
              e &&
              t.dispatch(
                (0, E.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !l,
                })
              );
          }
        }
        function ee({ actionListId: e }, t) {
          e ? ef({ store: t, actionListId: e }) : es({ store: t }), ei(t);
        }
        function et(e, t) {
          ei(t), M({ store: t, elementApi: p });
        }
        function en({ store: e, rawData: t, allowEvents: n, testManual: o }) {
          let { ixSession: l } = e.getState();
          if ((t && e.dispatch((0, E.rawDataImported)(t)), !l.active)) {
            if (
              (e.dispatch(
                (0, E.sessionInitialized)({
                  hasBoundaryNodes: !!document.querySelector(_),
                  reducedMotion:
                    document.body.hasAttribute("data-wf-ix-vacation") &&
                    window.matchMedia("(prefers-reduced-motion)").matches,
                })
              ),
              n &&
                ((function (e) {
                  let { ixData: t } = e.getState(),
                    { eventTypeMap: n } = t;
                  eo(e),
                    (0, c.default)(n, (t, n) => {
                      let o = I.default[n];
                      if (!o) {
                        console.warn(`IX2 event type not configured: ${n}`);
                        return;
                      }
                      (function ({ logic: e, store: t, events: n }) {
                        (function (e) {
                          if (!K) return;
                          let t = {},
                            n = "";
                          for (let i in e) {
                            let { eventTypeId: a, target: r } = e[i],
                              o = p.getQuerySelector(r);
                            if (!t[o])
                              (a === s.EventTypeConsts.MOUSE_CLICK ||
                                a === s.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                                ((t[o] = !0),
                                (n +=
                                  o +
                                  "{cursor: pointer;touch-action: manipulation;}"));
                          }
                          if (n) {
                            let e = document.createElement("style");
                            (e.textContent = n), document.body.appendChild(e);
                          }
                        })(n);
                        let { types: o, handler: l } = e,
                          { ixData: u } = t.getState(),
                          { actionLists: f } = u,
                          I = el(n, ec);
                        if (!(0, r.default)(I)) return;
                        (0, c.default)(I, (e, r) => {
                          let o = n[r],
                            {
                              action: l,
                              id: c,
                              mediaQueries: d = u.mediaQueryKeys,
                            } = o,
                            { actionListId: I } = l.config;
                          !j(d, u.mediaQueryKeys) &&
                            t.dispatch((0, E.mediaQueriesDefined)()),
                            l.actionTypeId ===
                              s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                              (Array.isArray(o.config)
                                ? o.config
                                : [o.config]
                              ).forEach((n) => {
                                let { continuousParameterGroupId: r } = n,
                                  o = (0, a.default)(
                                    f,
                                    `${I}.continuousParameterGroups`,
                                    []
                                  ),
                                  l = (0, i.default)(o, ({ id: e }) => e === r),
                                  u = (n.smoothing || 0) / 100,
                                  d = (n.restingState || 0) / 100;
                                if (!!l)
                                  e.forEach((e, i) => {
                                    !(function ({
                                      store: e,
                                      eventStateKey: t,
                                      eventTarget: n,
                                      eventId: i,
                                      eventConfig: r,
                                      actionListId: o,
                                      parameterGroup: l,
                                      smoothing: u,
                                      restingValue: c,
                                    }) {
                                      let { ixData: d, ixSession: f } =
                                          e.getState(),
                                        { events: E } = d,
                                        I = E[i],
                                        { eventTypeId: T } = I,
                                        y = {},
                                        g = {},
                                        m = [],
                                        { continuousActionGroups: b } = l,
                                        { id: h } = l;
                                      k(T, r) && (h = B(t, h));
                                      let v =
                                        f.hasBoundaryNodes && n
                                          ? p.getClosestElement(n, _)
                                          : null;
                                      b.forEach((e) => {
                                        let { keyframe: t, actionItems: i } = e;
                                        i.forEach((e) => {
                                          let { actionTypeId: i } = e,
                                            { target: a } = e.config;
                                          if (!a) return;
                                          let r = a.boundaryMode ? v : null,
                                            o = U(a) + O + i;
                                          if (
                                            ((g[o] = (function (e = [], t, n) {
                                              let i;
                                              let a = [...e];
                                              return (
                                                a.some(
                                                  (e, n) =>
                                                    e.keyframe === t &&
                                                    ((i = n), !0)
                                                ),
                                                null == i &&
                                                  ((i = a.length),
                                                  a.push({
                                                    keyframe: t,
                                                    actionItems: [],
                                                  })),
                                                a[i].actionItems.push(n),
                                                a
                                              );
                                            })(g[o], t, e)),
                                            !y[o])
                                          ) {
                                            y[o] = !0;
                                            let { config: t } = e;
                                            A({
                                              config: t,
                                              event: I,
                                              eventTarget: n,
                                              elementRoot: r,
                                              elementApi: p,
                                            }).forEach((e) => {
                                              m.push({ element: e, key: o });
                                            });
                                          }
                                        });
                                      }),
                                        m.forEach(({ element: t, key: n }) => {
                                          let r = g[n],
                                            l = (0, a.default)(
                                              r,
                                              "[0].actionItems[0]",
                                              {}
                                            ),
                                            { actionTypeId: d } = l,
                                            f = (
                                              d ===
                                              s.ActionTypeConsts.PLUGIN_RIVE
                                                ? 0 ===
                                                  (
                                                    l.config?.target
                                                      ?.selectorGuids || []
                                                  ).length
                                                : W(d)
                                            )
                                              ? Q(d)?.(t, l)
                                              : null,
                                            E = L(
                                              {
                                                element: t,
                                                actionItem: l,
                                                elementApi: p,
                                              },
                                              f
                                            );
                                          ep({
                                            store: e,
                                            element: t,
                                            eventId: i,
                                            actionListId: o,
                                            actionItem: l,
                                            destination: E,
                                            continuous: !0,
                                            parameterId: h,
                                            actionGroups: r,
                                            smoothing: u,
                                            restingValue: c,
                                            pluginInstance: f,
                                          });
                                        });
                                    })({
                                      store: t,
                                      eventStateKey: c + O + i,
                                      eventTarget: e,
                                      eventId: c,
                                      eventConfig: n,
                                      actionListId: I,
                                      parameterGroup: l,
                                      smoothing: u,
                                      restingValue: d,
                                    });
                                  });
                              }),
                            (l.actionTypeId ===
                              s.ActionTypeConsts.GENERAL_START_ACTION ||
                              m(l.actionTypeId)) &&
                              ed({ store: t, actionListId: I, eventId: c });
                        });
                        let T = (e) => {
                            let { ixSession: i } = t.getState();
                            eu(I, (a, r, o) => {
                              let c = n[r],
                                d = i.eventState[o],
                                {
                                  action: f,
                                  mediaQueries: p = u.mediaQueryKeys,
                                } = c;
                              if (!x(p, i.mediaQueryKey)) return;
                              let I = (n = {}) => {
                                let i = l(
                                  {
                                    store: t,
                                    element: a,
                                    event: c,
                                    eventConfig: n,
                                    nativeEvent: e,
                                    eventStateKey: o,
                                  },
                                  d
                                );
                                !X(i, d) &&
                                  t.dispatch((0, E.eventStateChanged)(o, i));
                              };
                              f.actionTypeId ===
                              s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                ? (Array.isArray(c.config)
                                    ? c.config
                                    : [c.config]
                                  ).forEach(I)
                                : I();
                            });
                          },
                          y = (0, d.default)(T, 12),
                          g = ({
                            target: e = document,
                            types: n,
                            throttle: i,
                          }) => {
                            n.split(" ")
                              .filter(Boolean)
                              .forEach((n) => {
                                let a = i ? y : T;
                                e.addEventListener(n, a),
                                  t.dispatch(
                                    (0, E.eventListenerAdded)(e, [n, a])
                                  );
                              });
                          };
                        Array.isArray(o)
                          ? o.forEach(g)
                          : "string" == typeof o && g(e);
                      })({ logic: o, store: e, events: t });
                    });
                  let { ixSession: o } = e.getState();
                  o.eventListeners.length &&
                    (function (e) {
                      let t = () => {
                        eo(e);
                      };
                      er.forEach((n) => {
                        window.addEventListener(n, t),
                          e.dispatch((0, E.eventListenerAdded)(window, [n, t]));
                      }),
                        t();
                    })(e);
                })(e),
                (function () {
                  let { documentElement: e } = document;
                  -1 === e.className.indexOf(v) && (e.className += ` ${v}`);
                })(),
                e.getState().ixSession.hasDefinedMediaQueries))
            ) {
              var u;
              C({
                store: (u = e),
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(u),
                    M({ store: u, elementApi: p }),
                    en({ store: u, allowEvents: !0 }),
                    Z();
                },
              });
            }
            e.dispatch((0, E.sessionStarted)()),
              (function (e, t) {
                let n = (i) => {
                  let { ixSession: a, ixParameters: r } = e.getState();
                  a.active &&
                    (e.dispatch((0, E.animationFrameChanged)(i, r)),
                    t
                      ? !(function (e, t) {
                          let n = C({
                            store: e,
                            select: ({ ixSession: e }) => e.tick,
                            onChange: (e) => {
                              t(e), n();
                            },
                          });
                        })(e, n)
                      : requestAnimationFrame(n));
                };
                n(window.performance.now());
              })(e, o);
          }
        }
        function ei(e) {
          let { ixSession: t } = e.getState();
          if (t.active) {
            let { eventListeners: n } = t;
            n.forEach(ea), G(), e.dispatch((0, E.sessionStopped)());
          }
        }
        function ea({ target: e, listenerParams: t }) {
          e.removeEventListener.apply(e, t);
        }
        let er = ["resize", "orientationchange"];
        function eo(e) {
          let { ixSession: t, ixData: n } = e.getState(),
            i = window.innerWidth;
          if (i !== t.viewportWidth) {
            let { mediaQueries: t } = n;
            e.dispatch(
              (0, E.viewportWidthChanged)({ width: i, mediaQueries: t })
            );
          }
        }
        let el = (e, t) => (0, o.default)((0, u.default)(e, t), l.default),
          eu = (e, t) => {
            (0, c.default)(e, (e, n) => {
              e.forEach((e, i) => {
                t(e, n, n + O + i);
              });
            });
          },
          ec = (e) =>
            A({
              config: { target: e.target, targets: e.targets },
              elementApi: p,
            });
        function ed({ store: e, actionListId: t, eventId: n }) {
          let { ixData: i, ixSession: r } = e.getState(),
            { actionLists: o, events: l } = i,
            u = l[n],
            c = o[t];
          if (c && c.useFirstGroupAsInitialState) {
            let o = (0, a.default)(c, "actionItemGroups[0].actionItems", []);
            if (
              !x(
                (0, a.default)(u, "mediaQueries", i.mediaQueryKeys),
                r.mediaQueryKey
              )
            )
              return;
            o.forEach((i) => {
              let { config: a, actionTypeId: r } = i,
                o = A({
                  config:
                    a?.target?.useEventTarget === !0 &&
                    a?.target?.objectId == null
                      ? { target: u.target, targets: u.targets }
                      : a,
                  event: u,
                  elementApi: p,
                }),
                l = W(r);
              o.forEach((a) => {
                let o = l ? Q(r)?.(a, i) : null;
                ep({
                  destination: L(
                    { element: a, actionItem: i, elementApi: p },
                    o
                  ),
                  immediate: !0,
                  store: e,
                  element: a,
                  eventId: n,
                  actionItem: i,
                  actionListId: t,
                  pluginInstance: o,
                });
              });
            });
          }
        }
        function es({ store: e }) {
          let { ixInstances: t } = e.getState();
          (0, c.default)(t, (t) => {
            if (!t.continuous) {
              let { actionListId: n, verbose: i } = t;
              eI(t, e),
                i &&
                  e.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: n,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function ef({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: i,
          actionListId: r,
        }) {
          let { ixInstances: o, ixSession: l } = e.getState(),
            u = l.hasBoundaryNodes && n ? p.getClosestElement(n, _) : null;
          (0, c.default)(o, (n) => {
            let o = (0, a.default)(n, "actionItem.config.target.boundaryMode"),
              l = !i || n.eventStateKey === i;
            if (n.actionListId === r && n.eventId === t && l) {
              if (u && o && !p.elementContains(u, n.element)) return;
              eI(n, e),
                n.verbose &&
                  e.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: r,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function eE({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: i,
          actionListId: r,
          groupIndex: o = 0,
          immediate: l,
          verbose: u,
        }) {
          let { ixData: c, ixSession: d } = e.getState(),
            { events: s } = c,
            f = s[t] || {},
            { mediaQueries: E = c.mediaQueryKeys } = f,
            { actionItemGroups: I, useFirstGroupAsInitialState: T } = (0,
            a.default)(c, `actionLists.${r}`, {});
          if (!I || !I.length) return !1;
          o >= I.length && (0, a.default)(f, "config.loop") && (o = 0),
            0 === o && T && o++;
          let y =
              (0 === o || (1 === o && T)) && m(f.action?.actionTypeId)
                ? f.config.delay
                : void 0,
            g = (0, a.default)(I, [o, "actionItems"], []);
          if (!g.length || !x(E, d.mediaQueryKey)) return !1;
          let O = d.hasBoundaryNodes && n ? p.getClosestElement(n, _) : null,
            b = F(g),
            h = !1;
          return (
            g.forEach((a, c) => {
              let { config: d, actionTypeId: s } = a,
                E = W(s),
                { target: I } = d;
              if (!!I)
                A({
                  config: d,
                  event: f,
                  eventTarget: n,
                  elementRoot: I.boundaryMode ? O : null,
                  elementApi: p,
                }).forEach((d, f) => {
                  let I = E ? Q(s)?.(d, a) : null,
                    T = E ? H(s)(d, a) : null;
                  h = !0;
                  let g = P({ element: d, actionItem: a }),
                    m = L({ element: d, actionItem: a, elementApi: p }, I);
                  ep({
                    store: e,
                    element: d,
                    actionItem: a,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: i,
                    actionListId: r,
                    groupIndex: o,
                    isCarrier: b === c && 0 === f,
                    computedStyle: g,
                    destination: m,
                    immediate: l,
                    verbose: u,
                    pluginInstance: I,
                    pluginDuration: T,
                    instanceDelay: y,
                  });
                });
            }),
            h
          );
        }
        function ep(e) {
          let t;
          let { store: n, computedStyle: i, ...a } = e,
            {
              element: r,
              actionItem: o,
              immediate: l,
              pluginInstance: u,
              continuous: c,
              restingValue: d,
              eventId: f,
            } = a,
            I = R(),
            { ixElements: T, ixSession: y, ixData: g } = n.getState(),
            m = N(T, r),
            { refState: O } = T[m] || {},
            _ = p.getRefType(r),
            b = y.reducedMotion && s.ReducedMotionTypes[o.actionTypeId];
          if (b && c)
            switch (g.events[f]?.eventTypeId) {
              case s.EventTypeConsts.MOUSE_MOVE:
              case s.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                t = d;
                break;
              default:
                t = 0.5;
            }
          let h = w(r, O, i, o, p, u);
          if (
            (n.dispatch(
              (0, E.instanceAdded)({
                instanceId: I,
                elementId: m,
                origin: h,
                refType: _,
                skipMotion: b,
                skipToValue: t,
                ...a,
              })
            ),
            eT(document.body, "ix2-animation-started", I),
            l)
          ) {
            (function (e, t) {
              let { ixParameters: n } = e.getState();
              e.dispatch((0, E.instanceStarted)(t, 0)),
                e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
              let { ixInstances: i } = e.getState();
              ey(i[t], e);
            })(n, I);
            return;
          }
          C({ store: n, select: ({ ixInstances: e }) => e[I], onChange: ey }),
            !c && n.dispatch((0, E.instanceStarted)(I, y.tick));
        }
        function eI(e, t) {
          eT(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState(),
          });
          let { elementId: n, actionItem: i } = e,
            { ixElements: a } = t.getState(),
            { ref: r, refType: o } = a[n] || {};
          o === b && V(r, i, p), t.dispatch((0, E.instanceRemoved)(e.id));
        }
        function eT(e, t, n) {
          let i = document.createEvent("CustomEvent");
          i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
        }
        function ey(e, t) {
          let {
              active: n,
              continuous: i,
              complete: a,
              elementId: r,
              actionItem: o,
              actionTypeId: l,
              renderType: u,
              current: c,
              groupIndex: d,
              eventId: s,
              eventTarget: f,
              eventStateKey: I,
              actionListId: T,
              isCarrier: y,
              styleProp: g,
              verbose: m,
              pluginInstance: O,
            } = e,
            { ixData: _, ixSession: v } = t.getState(),
            { events: A } = _,
            { mediaQueries: N = _.mediaQueryKeys } = A && A[s] ? A[s] : {};
          if (!!x(N, v.mediaQueryKey)) {
            if (i || n || a) {
              if (c || (u === h && a)) {
                t.dispatch((0, E.elementStateChanged)(r, l, c, o));
                let { ixElements: e } = t.getState(),
                  { ref: n, refType: i, refState: a } = e[r] || {},
                  d = a && a[l];
                (i === b || W(l)) && S(n, a, d, s, o, g, p, u, O);
              }
              if (a) {
                if (y) {
                  let e = eE({
                    store: t,
                    eventId: s,
                    eventTarget: f,
                    eventStateKey: I,
                    actionListId: T,
                    groupIndex: d + 1,
                    verbose: m,
                  });
                  m &&
                    !e &&
                    t.dispatch(
                      (0, E.actionListPlaybackChanged)({
                        actionListId: T,
                        isPlaying: !1,
                      })
                    );
                }
                eI(e, t);
              }
            }
          }
        }
      },
      8955: function (e, t, n) {
        "use strict";
        let i, a, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return eT;
            },
          });
        let o = E(n(5801)),
          l = E(n(4738)),
          u = E(n(3789)),
          c = n(7087),
          d = n(1970),
          s = n(3946),
          f = n(9468);
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            MOUSE_CLICK: p,
            MOUSE_SECOND_CLICK: I,
            MOUSE_DOWN: T,
            MOUSE_UP: y,
            MOUSE_OVER: g,
            MOUSE_OUT: m,
            DROPDOWN_CLOSE: O,
            DROPDOWN_OPEN: _,
            SLIDER_ACTIVE: b,
            SLIDER_INACTIVE: h,
            TAB_ACTIVE: v,
            TAB_INACTIVE: A,
            NAVBAR_CLOSE: N,
            NAVBAR_OPEN: L,
            MOUSE_MOVE: C,
            PAGE_SCROLL_DOWN: R,
            SCROLL_INTO_VIEW: S,
            SCROLL_OUT_OF_VIEW: M,
            PAGE_SCROLL_UP: F,
            SCROLLING_IN_VIEW: P,
            PAGE_FINISH: w,
            ECOMMERCE_CART_CLOSE: D,
            ECOMMERCE_CART_OPEN: k,
            PAGE_START: B,
            PAGE_SCROLL: x,
          } = c.EventTypeConsts,
          V = "COMPONENT_ACTIVE",
          G = "COMPONENT_INACTIVE",
          { COLON_DELIMITER: U } = c.IX2EngineConstants,
          { getNamespacedParameterId: j } = f.IX2VanillaUtils,
          X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
          W = X(({ element: e, nativeEvent: t }) => e === t.target),
          Q = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
          H = (0, o.default)([W, Q]),
          Y = (e, t) => {
            if (t) {
              let { ixData: n } = e.getState(),
                { events: i } = n,
                a = i[t];
              if (a && !ei[a.eventTypeId]) return a;
            }
            return null;
          },
          K = ({ store: e, event: t }) => {
            let { action: n } = t,
              { autoStopEventId: i } = n.config;
            return !!Y(e, i);
          },
          z = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
            let { action: r, id: o } = t,
              { actionListId: u, autoStopEventId: c } = r.config,
              s = Y(e, c);
            return (
              s &&
                (0, d.stopActionGroup)({
                  store: e,
                  eventId: c,
                  eventTarget: n,
                  eventStateKey: c + U + i.split(U)[1],
                  actionListId: (0, l.default)(s, "action.config.actionListId"),
                }),
              (0, d.stopActionGroup)({
                store: e,
                eventId: o,
                eventTarget: n,
                eventStateKey: i,
                actionListId: u,
              }),
              (0, d.startActionGroup)({
                store: e,
                eventId: o,
                eventTarget: n,
                eventStateKey: i,
                actionListId: u,
              }),
              a
            );
          },
          q = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
          Z = { handler: q(H, z) },
          J = { ...Z, types: [V, G].join(" ") },
          ee = [
            { target: window, types: "resize orientationchange", throttle: !0 },
            {
              target: document,
              types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
              throttle: !0,
            },
          ],
          et = "mouseover mouseout",
          en = { types: ee },
          ei = { PAGE_START: B, PAGE_FINISH: w },
          ea = (() => {
            let e = void 0 !== window.pageXOffset,
              t =
                "CSS1Compat" === document.compatMode
                  ? document.documentElement
                  : document.body;
            return () => ({
              scrollLeft: e ? window.pageXOffset : t.scrollLeft,
              scrollTop: e ? window.pageYOffset : t.scrollTop,
              stiffScrollTop: (0, u.default)(
                e ? window.pageYOffset : t.scrollTop,
                0,
                t.scrollHeight - window.innerHeight
              ),
              scrollWidth: t.scrollWidth,
              scrollHeight: t.scrollHeight,
              clientWidth: t.clientWidth,
              clientHeight: t.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            });
          })(),
          er = (e, t) =>
            !(
              e.left > t.right ||
              e.right < t.left ||
              e.top > t.bottom ||
              e.bottom < t.top
            ),
          eo = ({ element: e, nativeEvent: t }) => {
            let { type: n, target: i, relatedTarget: a } = t,
              r = e.contains(i);
            if ("mouseover" === n && r) return !0;
            let o = e.contains(a);
            return ("mouseout" === n && !!r && !!o) || !1;
          },
          el = (e) => {
            let {
                element: t,
                event: { config: n },
              } = e,
              { clientWidth: i, clientHeight: a } = ea(),
              r = n.scrollOffsetValue,
              o = n.scrollOffsetUnit,
              l = "PX" === o ? r : (a * (r || 0)) / 100;
            return er(t.getBoundingClientRect(), {
              left: 0,
              top: l,
              right: i,
              bottom: a - l,
            });
          },
          eu = (e) => (t, n) => {
            let { type: i } = t.nativeEvent,
              a = -1 !== [V, G].indexOf(i) ? i === V : n.isActive,
              r = { ...n, isActive: a };
            return n && r.isActive === n.isActive ? r : e(t, r) || r;
          },
          ec = (e) => (t, n) => {
            let i = { elementHovered: eo(t) };
            return (
              ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
                e(t, i)) ||
              i
            );
          },
          ed =
            (e) =>
            (t, n = {}) => {
              let i, a;
              let { stiffScrollTop: r, scrollHeight: o, innerHeight: l } = ea(),
                {
                  event: { config: u, eventTypeId: c },
                } = t,
                { scrollOffsetValue: d, scrollOffsetUnit: s } = u,
                f = o - l,
                E = Number((r / f).toFixed(2));
              if (n && n.percentTop === E) return n;
              let p = ("PX" === s ? d : (l * (d || 0)) / 100) / f,
                I = 0;
              n &&
                ((i = E > n.percentTop),
                (I = (a = n.scrollingDown !== i) ? E : n.anchorTop));
              let T = c === R ? E >= I + p : E <= I - p,
                y = {
                  ...n,
                  percentTop: E,
                  inBounds: T,
                  anchorTop: I,
                  scrollingDown: i,
                };
              return (
                (n && T && (a || y.inBounds !== n.inBounds) && e(t, y)) || y
              );
            },
          es = (e, t) =>
            e.left > t.left &&
            e.left < t.right &&
            e.top > t.top &&
            e.top < t.bottom,
          ef =
            (e) =>
            (t, n = { clickCount: 0 }) => {
              let i = { clickCount: (n.clickCount % 2) + 1 };
              return (i.clickCount !== n.clickCount && e(t, i)) || i;
            },
          eE = (e = !0) => ({
            ...J,
            handler: q(
              e ? H : W,
              eu((e, t) => (t.isActive ? Z.handler(e, t) : t))
            ),
          }),
          ep = (e = !0) => ({
            ...J,
            handler: q(
              e ? H : W,
              eu((e, t) => (t.isActive ? t : Z.handler(e, t)))
            ),
          });
        let eI = {
          ...en,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === S) === n
                ? (z(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: el(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        };
        let eT = {
          [b]: eE(),
          [h]: ep(),
          [_]: eE(),
          [O]: ep(),
          [L]: eE(!1),
          [N]: ep(!1),
          [v]: eE(),
          [A]: ep(),
          [k]: { types: "ecommerce-cart-open", handler: q(H, z) },
          [D]: { types: "ecommerce-cart-close", handler: q(H, z) },
          [p]: {
            types: "click",
            handler: q(
              H,
              ef((e, { clickCount: t }) => {
                K(e) ? 1 === t && z(e) : z(e);
              })
            ),
          },
          [I]: {
            types: "click",
            handler: q(
              H,
              ef((e, { clickCount: t }) => {
                2 === t && z(e);
              })
            ),
          },
          [T]: { ...Z, types: "mousedown" },
          [y]: { ...Z, types: "mouseup" },
          [g]: {
            types: et,
            handler: q(
              H,
              ec((e, t) => {
                t.elementHovered && z(e);
              })
            ),
          },
          [m]: {
            types: et,
            handler: q(
              H,
              ec((e, t) => {
                !t.elementHovered && z(e);
              })
            ),
          },
          [C]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: l,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: E = r.clientX,
                  clientY: p = r.clientY,
                  pageX: I = r.pageX,
                  pageY: T = r.pageY,
                } = i,
                y = "X_AXIS" === l,
                g = "mouseout" === i.type,
                m = f / 100,
                O = u,
                _ = !1;
              switch (o) {
                case c.EventBasedOn.VIEWPORT:
                  m = y
                    ? Math.min(E, window.innerWidth) / window.innerWidth
                    : Math.min(p, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = ea();
                  m = y ? Math.min(e + I, n) / n : Math.min(t + T, i) / i;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  O = j(a, u);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== H({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: l, height: c } = n;
                  if (!e && !es({ left: E, top: p }, n)) break;
                  (_ = !0), (m = y ? (E - r) / l : (p - o) / c);
                }
              }
              return (
                g && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (o !== c.EventBasedOn.ELEMENT || _ || _ !== r.elementHovered) &&
                  ((m = d ? 1 - m : m),
                  e.dispatch((0, s.parameterChanged)(O, m))),
                {
                  elementHovered: _,
                  clientX: E,
                  clientY: p,
                  pageX: I,
                  pageY: T,
                }
              );
            },
          },
          [x]: {
            types: ee,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = ea(),
                l = a / (r - o);
              (l = i ? 1 - l : l), e.dispatch((0, s.parameterChanged)(n, l));
            },
          },
          [P]: {
            types: ee,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: l,
                  scrollHeight: u,
                  clientHeight: d,
                } = ea(),
                {
                  basedOn: f,
                  selectedAxis: E,
                  continuousParameterGroupId: p,
                  startsEntering: I,
                  startsExiting: T,
                  addEndOffset: y,
                  addStartOffset: g,
                  addOffsetValue: m = 0,
                  endOffsetValue: O = 0,
                } = n;
              if (f === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === E ? r / l : o / u;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(p, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = j(i, p),
                  r = e.getBoundingClientRect(),
                  o = (g ? m : 0) / 100,
                  l = (y ? O : 0) / 100;
                (o = I ? o : 1 - o), (l = T ? l : 1 - l);
                let c = r.top + Math.min(r.height * o, d),
                  f = r.top + r.height * l,
                  E = Math.min(d + (f - c), u),
                  _ = Math.min(Math.max(0, d - c), E) / E;
                return (
                  _ !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, _)),
                  { scrollPercent: _ }
                );
              }
            },
          },
          [S]: eI,
          [M]: eI,
          [R]: {
            ...en,
            handler: ed((e, t) => {
              t.scrollingDown && z(e);
            }),
          },
          [F]: {
            ...en,
            handler: ed((e, t) => {
              !t.scrollingDown && z(e);
            }),
          },
          [w]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: q(
              W,
              ((a = z),
              (e, t) => {
                let n = { finished: "complete" === document.readyState };
                return n.finished && !(t && t.finshed) && a(e), n;
              })
            ),
          },
          [B]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: q(W, ((r = z), (e, t) => (t || r(e), { started: !0 }))),
          },
        };
      },
      4609: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixData", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
          a = (e = Object.freeze({}), t) => {
            if (t.type === i) return t.payload.ixData || Object.freeze({});
            return e;
          };
      },
      7718: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixInstances", {
            enumerable: !0,
            get: function () {
              return _;
            },
          });
        let i = n(7087),
          a = n(9468),
          r = n(1185),
          {
            IX2_RAW_DATA_IMPORTED: o,
            IX2_SESSION_STOPPED: l,
            IX2_INSTANCE_ADDED: u,
            IX2_INSTANCE_STARTED: c,
            IX2_INSTANCE_REMOVED: d,
            IX2_ANIMATION_FRAME_CHANGED: s,
          } = i.IX2EngineActionTypes,
          {
            optimizeFloat: f,
            applyEasing: E,
            createBezierEasing: p,
          } = a.IX2EasingUtils,
          { RENDER_GENERAL: I } = i.IX2EngineConstants,
          {
            getItemConfigByKey: T,
            getRenderType: y,
            getStyleProp: g,
          } = a.IX2VanillaUtils,
          m = (e, t) => {
            let n, i, a, o;
            let {
                position: l,
                parameterId: u,
                actionGroups: c,
                destinationKeys: d,
                smoothing: s,
                restingValue: p,
                actionTypeId: I,
                customEasingFn: y,
                skipMotion: g,
                skipToValue: m,
              } = e,
              { parameters: O } = t.payload,
              _ = Math.max(1 - s, 0.01),
              b = O[u];
            null == b && ((_ = 1), (b = p));
            let h = f((Math.max(b, 0) || 0) - l),
              v = g ? m : f(l + h * _),
              A = 100 * v;
            if (v === l && e.current) return e;
            for (let e = 0, { length: t } = c; e < t; e++) {
              let { keyframe: t, actionItems: r } = c[e];
              if ((0 === e && (n = r[0]), A >= t)) {
                n = r[0];
                let l = c[e + 1],
                  u = l && A !== t;
                (i = u ? l.actionItems[0] : null),
                  u && ((a = t / 100), (o = (l.keyframe - t) / 100));
              }
            }
            let N = {};
            if (n && !i)
              for (let e = 0, { length: t } = d; e < t; e++) {
                let t = d[e];
                N[t] = T(I, t, n.config);
              }
            else if (n && i && void 0 !== a && void 0 !== o) {
              let e = (v - a) / o,
                t = E(n.config.easing, e, y);
              for (let e = 0, { length: a } = d; e < a; e++) {
                let a = d[e],
                  r = T(I, a, n.config),
                  o = (T(I, a, i.config) - r) * t + r;
                N[a] = o;
              }
            }
            return (0, r.merge)(e, { position: v, current: N });
          },
          O = (e, t) => {
            let {
                active: n,
                origin: i,
                start: a,
                immediate: o,
                renderType: l,
                verbose: u,
                actionItem: c,
                destination: d,
                destinationKeys: s,
                pluginDuration: p,
                instanceDelay: T,
                customEasingFn: y,
                skipMotion: g,
              } = e,
              m = c.config.easing,
              { duration: O, delay: _ } = c.config;
            null != p && (O = p),
              (_ = null != T ? T : _),
              l === I ? (O = 0) : (o || g) && (O = _ = 0);
            let { now: b } = t.payload;
            if (n && i) {
              let t = b - (a + _);
              if (u) {
                let t = O + _,
                  n = f(Math.min(Math.max(0, (b - a) / t), 1));
                e = (0, r.set)(e, "verboseTimeElapsed", t * n);
              }
              if (t < 0) return e;
              let n = f(Math.min(Math.max(0, t / O), 1)),
                o = E(m, n, y),
                l = {},
                c = null;
              return (
                s.length &&
                  (c = s.reduce((e, t) => {
                    let n = d[t],
                      a = parseFloat(i[t]) || 0,
                      r = parseFloat(n) - a;
                    return (e[t] = r * o + a), e;
                  }, {})),
                (l.current = c),
                (l.position = n),
                1 === n && ((l.active = !1), (l.complete = !0)),
                (0, r.merge)(e, l)
              );
            }
            return e;
          },
          _ = (e = Object.freeze({}), t) => {
            switch (t.type) {
              case o:
                return t.payload.ixInstances || Object.freeze({});
              case l:
                return Object.freeze({});
              case u: {
                let {
                    instanceId: n,
                    elementId: i,
                    actionItem: a,
                    eventId: o,
                    eventTarget: l,
                    eventStateKey: u,
                    actionListId: c,
                    groupIndex: d,
                    isCarrier: s,
                    origin: f,
                    destination: E,
                    immediate: I,
                    verbose: T,
                    continuous: m,
                    parameterId: O,
                    actionGroups: _,
                    smoothing: b,
                    restingValue: h,
                    pluginInstance: v,
                    pluginDuration: A,
                    instanceDelay: N,
                    skipMotion: L,
                    skipToValue: C,
                  } = t.payload,
                  { actionTypeId: R } = a,
                  S = y(R),
                  M = g(S, R),
                  F = Object.keys(E).filter(
                    (e) => null != E[e] && "string" != typeof E[e]
                  ),
                  { easing: P } = a.config;
                return (0, r.set)(e, n, {
                  id: n,
                  elementId: i,
                  active: !1,
                  position: 0,
                  start: 0,
                  origin: f,
                  destination: E,
                  destinationKeys: F,
                  immediate: I,
                  verbose: T,
                  current: null,
                  actionItem: a,
                  actionTypeId: R,
                  eventId: o,
                  eventTarget: l,
                  eventStateKey: u,
                  actionListId: c,
                  groupIndex: d,
                  renderType: S,
                  isCarrier: s,
                  styleProp: M,
                  continuous: m,
                  parameterId: O,
                  actionGroups: _,
                  smoothing: b,
                  restingValue: h,
                  pluginInstance: v,
                  pluginDuration: A,
                  instanceDelay: N,
                  skipMotion: L,
                  skipToValue: C,
                  customEasingFn:
                    Array.isArray(P) && 4 === P.length ? p(P) : void 0,
                });
              }
              case c: {
                let { instanceId: n, time: i } = t.payload;
                return (0, r.mergeIn)(e, [n], {
                  active: !0,
                  complete: !1,
                  start: i,
                });
              }
              case d: {
                let { instanceId: n } = t.payload;
                if (!e[n]) return e;
                let i = {},
                  a = Object.keys(e),
                  { length: r } = a;
                for (let t = 0; t < r; t++) {
                  let r = a[t];
                  r !== n && (i[r] = e[r]);
                }
                return i;
              }
              case s: {
                let n = e,
                  i = Object.keys(e),
                  { length: a } = i;
                for (let o = 0; o < a; o++) {
                  let a = i[o],
                    l = e[a],
                    u = l.continuous ? m : O;
                  n = (0, r.set)(n, a, u(l, t));
                }
                return n;
              }
              default:
                return e;
            }
          };
      },
      1540: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixParameters", {
            enumerable: !0,
            get: function () {
              return o;
            },
          });
        let {
            IX2_RAW_DATA_IMPORTED: i,
            IX2_SESSION_STOPPED: a,
            IX2_PARAMETER_CHANGED: r,
          } = n(7087).IX2EngineActionTypes,
          o = (e = {}, t) => {
            switch (t.type) {
              case i:
                return t.payload.ixParameters || {};
              case a:
                return {};
              case r: {
                let { key: n, value: i } = t.payload;
                return (e[n] = i), e;
              }
              default:
                return e;
            }
          };
      },
      7243: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let i = n(9516),
          a = n(4609),
          r = n(628),
          o = n(5862),
          l = n(9468),
          u = n(7718),
          c = n(1540),
          { ixElements: d } = l.IX2ElementsReducer,
          s = (0, i.combineReducers)({
            ixData: a.ixData,
            ixRequest: r.ixRequest,
            ixSession: o.ixSession,
            ixElements: d,
            ixInstances: u.ixInstances,
            ixParameters: c.ixParameters,
          });
      },
      628: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixRequest", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let i = n(7087),
          a = n(1185),
          {
            IX2_PREVIEW_REQUESTED: r,
            IX2_PLAYBACK_REQUESTED: o,
            IX2_STOP_REQUESTED: l,
            IX2_CLEAR_REQUESTED: u,
          } = i.IX2EngineActionTypes,
          c = { preview: {}, playback: {}, stop: {}, clear: {} },
          d = Object.create(null, {
            [r]: { value: "preview" },
            [o]: { value: "playback" },
            [l]: { value: "stop" },
            [u]: { value: "clear" },
          }),
          s = (e = c, t) => {
            if (t.type in d) {
              let n = [d[t.type]];
              return (0, a.setIn)(e, [n], { ...t.payload });
            }
            return e;
          };
      },
      5862: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixSession", {
            enumerable: !0,
            get: function () {
              return T;
            },
          });
        let i = n(7087),
          a = n(1185),
          {
            IX2_SESSION_INITIALIZED: r,
            IX2_SESSION_STARTED: o,
            IX2_TEST_FRAME_RENDERED: l,
            IX2_SESSION_STOPPED: u,
            IX2_EVENT_LISTENER_ADDED: c,
            IX2_EVENT_STATE_CHANGED: d,
            IX2_ANIMATION_FRAME_CHANGED: s,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
            IX2_VIEWPORT_WIDTH_CHANGED: E,
            IX2_MEDIA_QUERIES_DEFINED: p,
          } = i.IX2EngineActionTypes,
          I = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1,
          },
          T = (e = I, t) => {
            switch (t.type) {
              case r: {
                let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
                return (0, a.merge)(e, {
                  hasBoundaryNodes: n,
                  reducedMotion: i,
                });
              }
              case o:
                return (0, a.set)(e, "active", !0);
              case l: {
                let {
                  payload: { step: n = 20 },
                } = t;
                return (0, a.set)(e, "tick", e.tick + n);
              }
              case u:
                return I;
              case s: {
                let {
                  payload: { now: n },
                } = t;
                return (0, a.set)(e, "tick", n);
              }
              case c: {
                let n = (0, a.addLast)(e.eventListeners, t.payload);
                return (0, a.set)(e, "eventListeners", n);
              }
              case d: {
                let { stateKey: n, newState: i } = t.payload;
                return (0, a.setIn)(e, ["eventState", n], i);
              }
              case f: {
                let { actionListId: n, isPlaying: i } = t.payload;
                return (0, a.setIn)(e, ["playbackState", n], i);
              }
              case E: {
                let { width: n, mediaQueries: i } = t.payload,
                  r = i.length,
                  o = null;
                for (let e = 0; e < r; e++) {
                  let { key: t, min: a, max: r } = i[e];
                  if (n >= a && n <= r) {
                    o = t;
                    break;
                  }
                }
                return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
              }
              case p:
                return (0, a.set)(e, "hasDefinedMediaQueries", !0);
              default:
                return e;
            }
          };
      },
      7377: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return u;
          },
          createPluginInstance: function () {
            return o;
          },
          getPluginConfig: function () {
            return n;
          },
          getPluginDestination: function () {
            return r;
          },
          getPluginDuration: function () {
            return i;
          },
          getPluginOrigin: function () {
            return a;
          },
          renderPlugin: function () {
            return l;
          },
        });
        let n = (e) => e.value,
          i = (e, t) => {
            if ("auto" !== t.config.duration) return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0
              ? 1e3 * n
              : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
          },
          a = (e) => e || { value: 0 },
          r = (e) => ({ value: e.value }),
          o = (e) => {
            let t = window.Webflow.require("lottie");
            if (!t) return null;
            let n = t.createInstance(e);
            return n.stop(), n.setSubframe(!0), n;
          },
          l = (e, t, n) => {
            if (!e) return;
            let i = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * i);
          },
          u = (e) => {
            let t = window.Webflow.require("lottie");
            t && t.createInstance(e).stop();
          };
      },
      2570: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return f;
          },
          createPluginInstance: function () {
            return d;
          },
          getPluginConfig: function () {
            return o;
          },
          getPluginDestination: function () {
            return c;
          },
          getPluginDuration: function () {
            return l;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return s;
          },
        });
        let n = "--wf-rive-fit",
          i = "--wf-rive-alignment",
          a = (e) => document.querySelector(`[data-w-id="${e}"]`),
          r = () => window.Webflow.require("rive"),
          o = (e, t) => e.value.inputs[t],
          l = () => null,
          u = (e, t) => {
            if (e) return e;
            let n = {},
              { inputs: i = {} } = t.config.value;
            for (let e in i) null == i[e] && (n[e] = 0);
            return n;
          },
          c = (e) => e.value.inputs ?? {},
          d = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0) return e;
            let n = t?.config?.target?.pluginElement;
            return n ? a(n) : null;
          },
          s = (e, { PLUGIN_RIVE: t }, a) => {
            let o = r();
            if (!o) return;
            let l = o.getInstance(e),
              u = o.rive.StateMachineInputType,
              { name: c, inputs: d = {} } = a.config.value || {};
            function s(e) {
              if (e.loaded) a();
              else {
                let t = () => {
                  a(), e?.off("load", t);
                };
                e?.on("load", t);
              }
              function a() {
                let a = e.stateMachineInputs(c);
                if (null != a) {
                  if ((!e.isPlaying && e.play(c, !1), n in d || i in d)) {
                    let t = e.layout,
                      a = d[n] ?? t.fit,
                      r = d[i] ?? t.alignment;
                    (a !== t.fit || r !== t.alignment) &&
                      (e.layout = t.copyWith({ fit: a, alignment: r }));
                  }
                  for (let e in d) {
                    if (e === n || e === i) continue;
                    let r = a.find((t) => t.name === e);
                    if (null != r)
                      switch (r.type) {
                        case u.Boolean:
                          if (null != d[e]) {
                            let t = !!d[e];
                            r.value = t;
                          }
                          break;
                        case u.Number: {
                          let n = t[e];
                          null != n && (r.value = n);
                          break;
                        }
                        case u.Trigger:
                          d[e] && r.fire();
                      }
                  }
                }
              }
            }
            l?.rive ? s(l.rive) : o.setLoadHandler(e, s);
          },
          f = (e, t) => null;
      },
      2866: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return f;
          },
          createPluginInstance: function () {
            return d;
          },
          getPluginConfig: function () {
            return r;
          },
          getPluginDestination: function () {
            return c;
          },
          getPluginDuration: function () {
            return o;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return s;
          },
        });
        let n = (e) => document.querySelector(`[data-w-id="${e}"]`),
          i = () => window.Webflow.require("spline"),
          a = (e, t) => e.filter((e) => !t.includes(e)),
          r = (e, t) => e.value[t],
          o = () => null,
          l = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          }),
          u = (e, t) => {
            let n = Object.keys(t.config.value);
            if (e) {
              let t = a(n, Object.keys(e));
              return t.length ? t.reduce((e, t) => ((e[t] = l[t]), e), e) : e;
            }
            return n.reduce((e, t) => ((e[t] = l[t]), e), {});
          },
          c = (e) => e.value,
          d = (e, t) => {
            let i = t?.config?.target?.pluginElement;
            return i ? n(i) : null;
          },
          s = (e, t, n) => {
            let a = i();
            if (!a) return;
            let r = a.getInstance(e),
              o = n.config.target.objectId,
              l = (e) => {
                if (!e)
                  throw Error("Invalid spline app passed to renderSpline");
                let n = o && e.findObjectById(o);
                if (!n) return;
                let { PLUGIN_SPLINE: i } = t;
                null != i.positionX && (n.position.x = i.positionX),
                  null != i.positionY && (n.position.y = i.positionY),
                  null != i.positionZ && (n.position.z = i.positionZ),
                  null != i.rotationX && (n.rotation.x = i.rotationX),
                  null != i.rotationY && (n.rotation.y = i.rotationY),
                  null != i.rotationZ && (n.rotation.z = i.rotationZ),
                  null != i.scaleX && (n.scale.x = i.scaleX),
                  null != i.scaleY && (n.scale.y = i.scaleY),
                  null != i.scaleZ && (n.scale.z = i.scaleZ);
              };
            r ? l(r.spline) : a.setLoadHandler(e, l);
          },
          f = () => null;
      },
      1407: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return s;
          },
          createPluginInstance: function () {
            return u;
          },
          getPluginConfig: function () {
            return a;
          },
          getPluginDestination: function () {
            return l;
          },
          getPluginDuration: function () {
            return r;
          },
          getPluginOrigin: function () {
            return o;
          },
          renderPlugin: function () {
            return d;
          },
        });
        let i = n(380),
          a = (e, t) => e.value[t],
          r = () => null,
          o = (e, t) => {
            if (e) return e;
            let n = t.config.value,
              a = t.config.target.objectId,
              r = getComputedStyle(document.documentElement).getPropertyValue(
                a
              );
            return null != n.size
              ? { size: parseInt(r, 10) }
              : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(r) }
              : null != n.red && null != n.green && null != n.blue
              ? (0, i.normalizeColor)(r)
              : void 0;
          },
          l = (e) => e.value,
          u = () => null,
          c = {
            color: {
              match: ({ red: e, green: t, blue: n, alpha: i }) =>
                [e, t, n, i].every((e) => null != e),
              getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
                `rgba(${e}, ${t}, ${n}, ${i})`,
            },
            size: {
              match: ({ size: e }) => null != e,
              getValue: ({ size: e }, t) => {
                if ("-" === t) return e;
                return `${e}${t}`;
              },
            },
          },
          d = (e, t, n) => {
            let {
                target: { objectId: i },
                value: { unit: a },
              } = n.config,
              r = t.PLUGIN_VARIABLE,
              o = Object.values(c).find((e) => e.match(r, a));
            o &&
              document.documentElement.style.setProperty(i, o.getValue(r, a));
          },
          s = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n);
          };
      },
      3690: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "pluginMethodMap", {
            enumerable: !0,
            get: function () {
              return d;
            },
          });
        let i = n(7087),
          a = c(n(7377)),
          r = c(n(2866)),
          o = c(n(2570)),
          l = c(n(1407));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function c(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
        let d = new Map([
          [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
          [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
          [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
          [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
        ]);
      },
      8023: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
            return g;
          },
          IX2_ANIMATION_FRAME_CHANGED: function () {
            return f;
          },
          IX2_CLEAR_REQUESTED: function () {
            return c;
          },
          IX2_ELEMENT_STATE_CHANGED: function () {
            return y;
          },
          IX2_EVENT_LISTENER_ADDED: function () {
            return d;
          },
          IX2_EVENT_STATE_CHANGED: function () {
            return s;
          },
          IX2_INSTANCE_ADDED: function () {
            return p;
          },
          IX2_INSTANCE_REMOVED: function () {
            return T;
          },
          IX2_INSTANCE_STARTED: function () {
            return I;
          },
          IX2_MEDIA_QUERIES_DEFINED: function () {
            return O;
          },
          IX2_PARAMETER_CHANGED: function () {
            return E;
          },
          IX2_PLAYBACK_REQUESTED: function () {
            return l;
          },
          IX2_PREVIEW_REQUESTED: function () {
            return o;
          },
          IX2_RAW_DATA_IMPORTED: function () {
            return n;
          },
          IX2_SESSION_INITIALIZED: function () {
            return i;
          },
          IX2_SESSION_STARTED: function () {
            return a;
          },
          IX2_SESSION_STOPPED: function () {
            return r;
          },
          IX2_STOP_REQUESTED: function () {
            return u;
          },
          IX2_TEST_FRAME_RENDERED: function () {
            return _;
          },
          IX2_VIEWPORT_WIDTH_CHANGED: function () {
            return m;
          },
        });
        let n = "IX2_RAW_DATA_IMPORTED",
          i = "IX2_SESSION_INITIALIZED",
          a = "IX2_SESSION_STARTED",
          r = "IX2_SESSION_STOPPED",
          o = "IX2_PREVIEW_REQUESTED",
          l = "IX2_PLAYBACK_REQUESTED",
          u = "IX2_STOP_REQUESTED",
          c = "IX2_CLEAR_REQUESTED",
          d = "IX2_EVENT_LISTENER_ADDED",
          s = "IX2_EVENT_STATE_CHANGED",
          f = "IX2_ANIMATION_FRAME_CHANGED",
          E = "IX2_PARAMETER_CHANGED",
          p = "IX2_INSTANCE_ADDED",
          I = "IX2_INSTANCE_STARTED",
          T = "IX2_INSTANCE_REMOVED",
          y = "IX2_ELEMENT_STATE_CHANGED",
          g = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
          m = "IX2_VIEWPORT_WIDTH_CHANGED",
          O = "IX2_MEDIA_QUERIES_DEFINED",
          _ = "IX2_TEST_FRAME_RENDERED";
      },
      2686: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ABSTRACT_NODE: function () {
            return ee;
          },
          AUTO: function () {
            return j;
          },
          BACKGROUND: function () {
            return k;
          },
          BACKGROUND_COLOR: function () {
            return D;
          },
          BAR_DELIMITER: function () {
            return Q;
          },
          BORDER_COLOR: function () {
            return B;
          },
          BOUNDARY_SELECTOR: function () {
            return o;
          },
          CHILDREN: function () {
            return H;
          },
          COLON_DELIMITER: function () {
            return W;
          },
          COLOR: function () {
            return x;
          },
          COMMA_DELIMITER: function () {
            return X;
          },
          CONFIG_UNIT: function () {
            return p;
          },
          CONFIG_VALUE: function () {
            return d;
          },
          CONFIG_X_UNIT: function () {
            return s;
          },
          CONFIG_X_VALUE: function () {
            return l;
          },
          CONFIG_Y_UNIT: function () {
            return f;
          },
          CONFIG_Y_VALUE: function () {
            return u;
          },
          CONFIG_Z_UNIT: function () {
            return E;
          },
          CONFIG_Z_VALUE: function () {
            return c;
          },
          DISPLAY: function () {
            return V;
          },
          FILTER: function () {
            return M;
          },
          FLEX: function () {
            return G;
          },
          FONT_VARIATION_SETTINGS: function () {
            return F;
          },
          HEIGHT: function () {
            return w;
          },
          HTML_ELEMENT: function () {
            return Z;
          },
          IMMEDIATE_CHILDREN: function () {
            return Y;
          },
          IX2_ID_DELIMITER: function () {
            return n;
          },
          OPACITY: function () {
            return S;
          },
          PARENT: function () {
            return z;
          },
          PLAIN_OBJECT: function () {
            return J;
          },
          PRESERVE_3D: function () {
            return q;
          },
          RENDER_GENERAL: function () {
            return en;
          },
          RENDER_PLUGIN: function () {
            return ea;
          },
          RENDER_STYLE: function () {
            return ei;
          },
          RENDER_TRANSFORM: function () {
            return et;
          },
          ROTATE_X: function () {
            return v;
          },
          ROTATE_Y: function () {
            return A;
          },
          ROTATE_Z: function () {
            return N;
          },
          SCALE_3D: function () {
            return h;
          },
          SCALE_X: function () {
            return O;
          },
          SCALE_Y: function () {
            return _;
          },
          SCALE_Z: function () {
            return b;
          },
          SIBLINGS: function () {
            return K;
          },
          SKEW: function () {
            return L;
          },
          SKEW_X: function () {
            return C;
          },
          SKEW_Y: function () {
            return R;
          },
          TRANSFORM: function () {
            return I;
          },
          TRANSLATE_3D: function () {
            return m;
          },
          TRANSLATE_X: function () {
            return T;
          },
          TRANSLATE_Y: function () {
            return y;
          },
          TRANSLATE_Z: function () {
            return g;
          },
          WF_PAGE: function () {
            return i;
          },
          WIDTH: function () {
            return P;
          },
          WILL_CHANGE: function () {
            return U;
          },
          W_MOD_IX: function () {
            return r;
          },
          W_MOD_JS: function () {
            return a;
          },
        });
        let n = "|",
          i = "data-wf-page",
          a = "w-mod-js",
          r = "w-mod-ix",
          o = ".w-dyn-item",
          l = "xValue",
          u = "yValue",
          c = "zValue",
          d = "value",
          s = "xUnit",
          f = "yUnit",
          E = "zUnit",
          p = "unit",
          I = "transform",
          T = "translateX",
          y = "translateY",
          g = "translateZ",
          m = "translate3d",
          O = "scaleX",
          _ = "scaleY",
          b = "scaleZ",
          h = "scale3d",
          v = "rotateX",
          A = "rotateY",
          N = "rotateZ",
          L = "skew",
          C = "skewX",
          R = "skewY",
          S = "opacity",
          M = "filter",
          F = "font-variation-settings",
          P = "width",
          w = "height",
          D = "backgroundColor",
          k = "background",
          B = "borderColor",
          x = "color",
          V = "display",
          G = "flex",
          U = "willChange",
          j = "AUTO",
          X = ",",
          W = ":",
          Q = "|",
          H = "CHILDREN",
          Y = "IMMEDIATE_CHILDREN",
          K = "SIBLINGS",
          z = "PARENT",
          q = "preserve-3d",
          Z = "HTML_ELEMENT",
          J = "PLAIN_OBJECT",
          ee = "ABSTRACT_NODE",
          et = "RENDER_TRANSFORM",
          en = "RENDER_GENERAL",
          ei = "RENDER_STYLE",
          ea = "RENDER_PLUGIN";
      },
      262: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ActionAppliesTo: function () {
            return i;
          },
          ActionTypeConsts: function () {
            return n;
          },
        });
        let n = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
          },
          i = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
          };
      },
      7087: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ActionTypeConsts: function () {
            return a.ActionTypeConsts;
          },
          IX2EngineActionTypes: function () {
            return r;
          },
          IX2EngineConstants: function () {
            return o;
          },
          QuickEffectIds: function () {
            return i.QuickEffectIds;
          },
        });
        let i = l(n(1833), t),
          a = l(n(262), t);
        l(n(8704), t), l(n(3213), t);
        let r = c(n(8023)),
          o = c(n(2686));
        function l(e, t) {
          return (
            Object.keys(e).forEach(function (n) {
              "default" !== n &&
                !Object.prototype.hasOwnProperty.call(t, n) &&
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }),
            e
          );
        }
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function c(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
      },
      3213: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ReducedMotionTypes", {
            enumerable: !0,
            get: function () {
              return d;
            },
          });
        let {
            TRANSFORM_MOVE: i,
            TRANSFORM_SCALE: a,
            TRANSFORM_ROTATE: r,
            TRANSFORM_SKEW: o,
            STYLE_SIZE: l,
            STYLE_FILTER: u,
            STYLE_FONT_VARIATION: c,
          } = n(262).ActionTypeConsts,
          d = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [l]: !0, [u]: !0, [c]: !0 };
      },
      1833: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          EventAppliesTo: function () {
            return i;
          },
          EventBasedOn: function () {
            return a;
          },
          EventContinuousMouseAxes: function () {
            return r;
          },
          EventLimitAffectedElements: function () {
            return o;
          },
          EventTypeConsts: function () {
            return n;
          },
          QuickEffectDirectionConsts: function () {
            return u;
          },
          QuickEffectIds: function () {
            return l;
          },
        });
        let n = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
          },
          i = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
          a = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
          r = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
          o = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
          },
          l = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
          },
          u = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
          };
      },
      8704: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "InteractionTypeConsts", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let n = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
            "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
      },
      380: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "normalizeColor", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32",
        };
        function i(e) {
          let t, i, a;
          let r = 1,
            o = e.replace(/\s/g, "").toLowerCase(),
            l = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
          if (l.startsWith("#")) {
            let e = l.substring(1);
            3 === e.length || 4 === e.length
              ? ((t = parseInt(e[0] + e[0], 16)),
                (i = parseInt(e[1] + e[1], 16)),
                (a = parseInt(e[2] + e[2], 16)),
                4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
              : (6 === e.length || 8 === e.length) &&
                ((t = parseInt(e.substring(0, 2), 16)),
                (i = parseInt(e.substring(2, 4), 16)),
                (a = parseInt(e.substring(4, 6), 16)),
                8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
          } else if (l.startsWith("rgba")) {
            let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (i = parseInt(e[1], 10)),
              (a = parseInt(e[2], 10)),
              (r = parseFloat(e[3]));
          } else if (l.startsWith("rgb")) {
            let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (i = parseInt(e[1], 10)),
              (a = parseInt(e[2], 10));
          } else if (l.startsWith("hsla")) {
            let e, n, o;
            let u = l.match(/hsla\(([^)]+)\)/)[1].split(","),
              c = parseFloat(u[0]),
              d = parseFloat(u[1].replace("%", "")) / 100,
              s = parseFloat(u[2].replace("%", "")) / 100;
            r = parseFloat(u[3]);
            let f = (1 - Math.abs(2 * s - 1)) * d,
              E = f * (1 - Math.abs(((c / 60) % 2) - 1)),
              p = s - f / 2;
            c >= 0 && c < 60
              ? ((e = f), (n = E), (o = 0))
              : c >= 60 && c < 120
              ? ((e = E), (n = f), (o = 0))
              : c >= 120 && c < 180
              ? ((e = 0), (n = f), (o = E))
              : c >= 180 && c < 240
              ? ((e = 0), (n = E), (o = f))
              : c >= 240 && c < 300
              ? ((e = E), (n = 0), (o = f))
              : ((e = f), (n = 0), (o = E)),
              (t = Math.round((e + p) * 255)),
              (i = Math.round((n + p) * 255)),
              (a = Math.round((o + p) * 255));
          } else if (l.startsWith("hsl")) {
            let e, n, r;
            let o = l.match(/hsl\(([^)]+)\)/)[1].split(","),
              u = parseFloat(o[0]),
              c = parseFloat(o[1].replace("%", "")) / 100,
              d = parseFloat(o[2].replace("%", "")) / 100,
              s = (1 - Math.abs(2 * d - 1)) * c,
              f = s * (1 - Math.abs(((u / 60) % 2) - 1)),
              E = d - s / 2;
            u >= 0 && u < 60
              ? ((e = s), (n = f), (r = 0))
              : u >= 60 && u < 120
              ? ((e = f), (n = s), (r = 0))
              : u >= 120 && u < 180
              ? ((e = 0), (n = s), (r = f))
              : u >= 180 && u < 240
              ? ((e = 0), (n = f), (r = s))
              : u >= 240 && u < 300
              ? ((e = f), (n = 0), (r = s))
              : ((e = s), (n = 0), (r = f)),
              (t = Math.round((e + E) * 255)),
              (i = Math.round((n + E) * 255)),
              (a = Math.round((r + E) * 255));
          }
          if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
            throw Error(
              `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
            );
          return { red: t, green: i, blue: a, alpha: r };
        }
      },
      9468: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          IX2BrowserSupport: function () {
            return i;
          },
          IX2EasingUtils: function () {
            return r;
          },
          IX2Easings: function () {
            return a;
          },
          IX2ElementsReducer: function () {
            return o;
          },
          IX2VanillaPlugins: function () {
            return l;
          },
          IX2VanillaUtils: function () {
            return u;
          },
        });
        let i = d(n(2662)),
          a = d(n(8686)),
          r = d(n(3767)),
          o = d(n(5861)),
          l = d(n(1799)),
          u = d(n(4124));
        function c(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (c = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
      },
      2662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ELEMENT_MATCHES: function () {
            return o;
          },
          FLEX_PREFIXED: function () {
            return l;
          },
          IS_BROWSER_ENV: function () {
            return a;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return d;
          },
          withBrowser: function () {
            return r;
          },
        });
        let i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(9777)),
          a = "undefined" != typeof window,
          r = (e, t) => (a ? e() : t),
          o = r(() =>
            (0, i.default)(
              [
                "matches",
                "matchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
                "webkitMatchesSelector",
              ],
              (e) => e in Element.prototype
            )
          ),
          l = r(() => {
            let e = document.createElement("i"),
              t = [
                "flex",
                "-webkit-flex",
                "-ms-flexbox",
                "-moz-box",
                "-webkit-box",
              ];
            try {
              let { length: n } = t;
              for (let i = 0; i < n; i++) {
                let n = t[i];
                if (((e.style.display = n), e.style.display === n)) return n;
              }
              return "";
            } catch (e) {
              return "";
            }
          }, "flex"),
          u = r(() => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
              let t = ["Webkit", "Moz", "ms"],
                { length: n } = t;
              for (let i = 0; i < n; i++) {
                let n = t[i] + "Transform";
                if (void 0 !== e.style[n]) return n;
              }
            }
            return "transform";
          }, "transform"),
          c = u.split("transform")[0],
          d = c ? c + "TransformStyle" : "transformStyle";
      },
      3767: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return l;
          },
          optimizeFloat: function () {
            return o;
          },
        });
        let i = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = r(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (
                "default" !== o &&
                Object.prototype.hasOwnProperty.call(e, o)
              ) {
                var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(i, o, l)
                  : (i[o] = e[o]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(8686)),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(1361));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function o(e, t = 5, n = 10) {
          let i = Math.pow(n, t),
            a = Number(Math.round(e * i) / i);
          return Math.abs(a) > 1e-4 ? a : 0;
        }
        function l(e) {
          return (0, a.default)(...e);
        }
        function u(e, t, n) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : n
            ? o(t > 0 ? n(t) : t)
            : o(t > 0 && e && i[e] ? i[e](t) : t);
        }
      },
      8686: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          bounce: function () {
            return V;
          },
          bouncePast: function () {
            return G;
          },
          ease: function () {
            return a;
          },
          easeIn: function () {
            return r;
          },
          easeInOut: function () {
            return l;
          },
          easeOut: function () {
            return o;
          },
          inBack: function () {
            return S;
          },
          inCirc: function () {
            return N;
          },
          inCubic: function () {
            return s;
          },
          inElastic: function () {
            return P;
          },
          inExpo: function () {
            return h;
          },
          inOutBack: function () {
            return F;
          },
          inOutCirc: function () {
            return C;
          },
          inOutCubic: function () {
            return E;
          },
          inOutElastic: function () {
            return D;
          },
          inOutExpo: function () {
            return A;
          },
          inOutQuad: function () {
            return d;
          },
          inOutQuart: function () {
            return T;
          },
          inOutQuint: function () {
            return m;
          },
          inOutSine: function () {
            return b;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return p;
          },
          inQuint: function () {
            return y;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return M;
          },
          outBounce: function () {
            return R;
          },
          outCirc: function () {
            return L;
          },
          outCubic: function () {
            return f;
          },
          outElastic: function () {
            return w;
          },
          outExpo: function () {
            return v;
          },
          outQuad: function () {
            return c;
          },
          outQuart: function () {
            return I;
          },
          outQuint: function () {
            return g;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return B;
          },
          swingFromTo: function () {
            return k;
          },
          swingTo: function () {
            return x;
          },
        });
        let i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(1361)),
          a = (0, i.default)(0.25, 0.1, 0.25, 1),
          r = (0, i.default)(0.42, 0, 1, 1),
          o = (0, i.default)(0, 0, 0.58, 1),
          l = (0, i.default)(0.42, 0, 0.58, 1);
        function u(e) {
          return Math.pow(e, 2);
        }
        function c(e) {
          return -(Math.pow(e - 1, 2) - 1);
        }
        function d(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 2)
            : -0.5 * ((e -= 2) * e - 2);
        }
        function s(e) {
          return Math.pow(e, 3);
        }
        function f(e) {
          return Math.pow(e - 1, 3) + 1;
        }
        function E(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
        }
        function p(e) {
          return Math.pow(e, 4);
        }
        function I(e) {
          return -(Math.pow(e - 1, 4) - 1);
        }
        function T(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
        }
        function y(e) {
          return Math.pow(e, 5);
        }
        function g(e) {
          return Math.pow(e - 1, 5) + 1;
        }
        function m(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
        }
        function O(e) {
          return -Math.cos((Math.PI / 2) * e) + 1;
        }
        function _(e) {
          return Math.sin((Math.PI / 2) * e);
        }
        function b(e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        }
        function h(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        }
        function v(e) {
          return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
        }
        function A(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        }
        function N(e) {
          return -(Math.sqrt(1 - e * e) - 1);
        }
        function L(e) {
          return Math.sqrt(1 - Math.pow(e - 1, 2));
        }
        function C(e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }
        function R(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
          if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
          else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function S(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function M(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function F(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function P(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (!n && (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              -(
                i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
        }
        function w(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (!n && (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
        }
        function D(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 2 == (e /= 0.5)
            ? 1
            : (!n && (n = 0.3 * 1.5),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              e < 1)
            ? -0.5 *
              (i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n))
            : i *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n) *
                0.5 +
              1;
        }
        function k(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function B(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function x(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function V(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
          if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
          else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function G(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
          if (e < 2.5 / 2.75)
            return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
          else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
        }
      },
      1799: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return E;
          },
          createPluginInstance: function () {
            return s;
          },
          getPluginConfig: function () {
            return l;
          },
          getPluginDestination: function () {
            return d;
          },
          getPluginDuration: function () {
            return c;
          },
          getPluginOrigin: function () {
            return u;
          },
          isPluginType: function () {
            return r;
          },
          renderPlugin: function () {
            return f;
          },
        });
        let i = n(2662),
          a = n(3690);
        function r(e) {
          return a.pluginMethodMap.has(e);
        }
        let o = (e) => (t) => {
            if (!i.IS_BROWSER_ENV) return () => null;
            let n = a.pluginMethodMap.get(t);
            if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r) throw Error(`IX2 invalid plugin method: ${e}`);
            return r;
          },
          l = o("getPluginConfig"),
          u = o("getPluginOrigin"),
          c = o("getPluginDuration"),
          d = o("getPluginDestination"),
          s = o("createPluginInstance"),
          f = o("renderPlugin"),
          E = o("clearPlugin");
      },
      4124: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cleanupHTMLElement: function () {
            return eW;
          },
          clearAllStyles: function () {
            return eU;
          },
          clearObjectCache: function () {
            return ed;
          },
          getActionListProgress: function () {
            return eY;
          },
          getAffectedElements: function () {
            return em;
          },
          getComputedStyle: function () {
            return eO;
          },
          getDestinationValues: function () {
            return eC;
          },
          getElementId: function () {
            return ep;
          },
          getInstanceId: function () {
            return ef;
          },
          getInstanceOrigin: function () {
            return ev;
          },
          getItemConfigByKey: function () {
            return eL;
          },
          getMaxDurationItemIndex: function () {
            return e$;
          },
          getNamespacedParameterId: function () {
            return eq;
          },
          getRenderType: function () {
            return eR;
          },
          getStyleProp: function () {
            return eS;
          },
          mediaQueriesEqual: function () {
            return eJ;
          },
          observeStore: function () {
            return ey;
          },
          reduceListToGroup: function () {
            return eK;
          },
          reifyState: function () {
            return eI;
          },
          renderHTMLElement: function () {
            return eM;
          },
          shallowEqual: function () {
            return u.default;
          },
          shouldAllowMediaQuery: function () {
            return eZ;
          },
          shouldNamespaceEventParameter: function () {
            return ez;
          },
          stringifyTarget: function () {
            return e0;
          },
        });
        let i = E(n(4075)),
          a = E(n(1455)),
          r = E(n(5720)),
          o = n(1185),
          l = n(7087),
          u = E(n(7164)),
          c = n(3767),
          d = n(380),
          s = n(1799),
          f = n(2662);
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            BACKGROUND: p,
            TRANSFORM: I,
            TRANSLATE_3D: T,
            SCALE_3D: y,
            ROTATE_X: g,
            ROTATE_Y: m,
            ROTATE_Z: O,
            SKEW: _,
            PRESERVE_3D: b,
            FLEX: h,
            OPACITY: v,
            FILTER: A,
            FONT_VARIATION_SETTINGS: N,
            WIDTH: L,
            HEIGHT: C,
            BACKGROUND_COLOR: R,
            BORDER_COLOR: S,
            COLOR: M,
            CHILDREN: F,
            IMMEDIATE_CHILDREN: P,
            SIBLINGS: w,
            PARENT: D,
            DISPLAY: k,
            WILL_CHANGE: B,
            AUTO: x,
            COMMA_DELIMITER: V,
            COLON_DELIMITER: G,
            BAR_DELIMITER: U,
            RENDER_TRANSFORM: j,
            RENDER_GENERAL: X,
            RENDER_STYLE: W,
            RENDER_PLUGIN: Q,
          } = l.IX2EngineConstants,
          {
            TRANSFORM_MOVE: H,
            TRANSFORM_SCALE: Y,
            TRANSFORM_ROTATE: K,
            TRANSFORM_SKEW: z,
            STYLE_OPACITY: q,
            STYLE_FILTER: Z,
            STYLE_FONT_VARIATION: J,
            STYLE_SIZE: ee,
            STYLE_BACKGROUND_COLOR: et,
            STYLE_BORDER: en,
            STYLE_TEXT_COLOR: ei,
            GENERAL_DISPLAY: ea,
            OBJECT_VALUE: er,
          } = l.ActionTypeConsts,
          eo = (e) => e.trim(),
          el = Object.freeze({ [et]: R, [en]: S, [ei]: M }),
          eu = Object.freeze({
            [f.TRANSFORM_PREFIXED]: I,
            [R]: p,
            [v]: v,
            [A]: A,
            [L]: L,
            [C]: C,
            [N]: N,
          }),
          ec = new Map();
        function ed() {
          ec.clear();
        }
        let es = 1;
        function ef() {
          return "i" + es++;
        }
        let eE = 1;
        function ep(e, t) {
          for (let n in e) {
            let i = e[n];
            if (i && i.ref === t) return i.id;
          }
          return "e" + eE++;
        }
        function eI({ events: e, actionLists: t, site: n } = {}) {
          let i = (0, a.default)(
              e,
              (e, t) => {
                let { eventTypeId: n } = t;
                return !e[n] && (e[n] = {}), (e[n][t.id] = t), e;
              },
              {}
            ),
            r = n && n.mediaQueries,
            o = [];
          return (
            r
              ? (o = r.map((e) => e.key))
              : ((r = []),
                console.warn("IX2 missing mediaQueries in site data")),
            {
              ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: i,
                mediaQueries: r,
                mediaQueryKeys: o,
              },
            }
          );
        }
        let eT = (e, t) => e === t;
        function ey({ store: e, select: t, onChange: n, comparator: i = eT }) {
          let { getState: a, subscribe: r } = e,
            o = r(function () {
              let r = t(a());
              if (null == r) {
                o();
                return;
              }
              !i(r, l) && n((l = r), e);
            }),
            l = t(a());
          return o;
        }
        function eg(e) {
          let t = typeof e;
          if ("string" === t) return { id: e };
          if (null != e && "object" === t) {
            let {
              id: t,
              objectId: n,
              selector: i,
              selectorGuids: a,
              appliesTo: r,
              useEventTarget: o,
            } = e;
            return {
              id: t,
              objectId: n,
              selector: i,
              selectorGuids: a,
              appliesTo: r,
              useEventTarget: o,
            };
          }
          return {};
        }
        function em({
          config: e,
          event: t,
          eventTarget: n,
          elementRoot: i,
          elementApi: a,
        }) {
          let r, o, u;
          if (!a) throw Error("IX2 missing elementApi");
          let { targets: c } = e;
          if (Array.isArray(c) && c.length > 0)
            return c.reduce(
              (e, r) =>
                e.concat(
                  em({
                    config: { target: r },
                    event: t,
                    eventTarget: n,
                    elementRoot: i,
                    elementApi: a,
                  })
                ),
              []
            );
          let {
              getValidDocument: d,
              getQuerySelector: s,
              queryDocument: E,
              getChildElements: p,
              getSiblingElements: I,
              matchSelector: T,
              elementContains: y,
              isSiblingNode: g,
            } = a,
            { target: m } = e;
          if (!m) return [];
          let {
            id: O,
            objectId: _,
            selector: b,
            selectorGuids: h,
            appliesTo: v,
            useEventTarget: A,
          } = eg(m);
          if (_) return [ec.has(_) ? ec.get(_) : ec.set(_, {}).get(_)];
          if (v === l.EventAppliesTo.PAGE) {
            let e = d(O);
            return e ? [e] : [];
          }
          let N = (t?.action?.config?.affectedElements ?? {})[O || b] || {},
            L = !!(N.id || N.selector),
            C = t && s(eg(t.target));
          if (
            (L
              ? ((r = N.limitAffectedElements), (o = C), (u = s(N)))
              : (o = u = s({ id: O, selector: b, selectorGuids: h })),
            t && A)
          ) {
            let e = n && (u || !0 === A) ? [n] : E(C);
            if (u) {
              if (A === D) return E(u).filter((t) => e.some((e) => y(t, e)));
              if (A === F) return E(u).filter((t) => e.some((e) => y(e, t)));
              if (A === w) return E(u).filter((t) => e.some((e) => g(e, t)));
            }
            return e;
          }
          if (null == o || null == u) return [];
          if (f.IS_BROWSER_ENV && i) return E(u).filter((e) => i.contains(e));
          if (r === F) return E(o, u);
          if (r === P) return p(E(o)).filter(T(u));
          if (r === w) return I(E(o)).filter(T(u));
          else return E(u);
        }
        function eO({ element: e, actionItem: t }) {
          if (!f.IS_BROWSER_ENV) return {};
          let { actionTypeId: n } = t;
          switch (n) {
            case ee:
            case et:
            case en:
            case ei:
            case ea:
              return window.getComputedStyle(e);
            default:
              return {};
          }
        }
        let e_ = /px/,
          eb = (e, t) =>
            t.reduce(
              (e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e),
              e || {}
            ),
          eh = (e, t) =>
            t.reduce(
              (e, t) => (
                null == e[t.type] &&
                  (e[t.type] = ew[t.type] || t.defaultValue || 0),
                e
              ),
              e || {}
            );
        function ev(e, t = {}, n = {}, a, r) {
          let { getStyle: o } = r,
            { actionTypeId: l } = a;
          if ((0, s.isPluginType)(l)) return (0, s.getPluginOrigin)(l)(t[l], a);
          switch (a.actionTypeId) {
            case H:
            case Y:
            case K:
            case z:
              return t[a.actionTypeId] || eF[a.actionTypeId];
            case Z:
              return eb(t[a.actionTypeId], a.config.filters);
            case J:
              return eh(t[a.actionTypeId], a.config.fontVariations);
            case q:
              return { value: (0, i.default)(parseFloat(o(e, v)), 1) };
            case ee: {
              let t, r;
              let l = o(e, L),
                u = o(e, C);
              return (
                (t =
                  a.config.widthUnit === x
                    ? e_.test(l)
                      ? parseFloat(l)
                      : parseFloat(n.width)
                    : (0, i.default)(parseFloat(l), parseFloat(n.width))),
                {
                  widthValue: t,
                  heightValue: (r =
                    a.config.heightUnit === x
                      ? e_.test(u)
                        ? parseFloat(u)
                        : parseFloat(n.height)
                      : (0, i.default)(parseFloat(u), parseFloat(n.height))),
                }
              );
            }
            case et:
            case en:
            case ei:
              return (function ({
                element: e,
                actionTypeId: t,
                computedStyle: n,
                getStyle: a,
              }) {
                let r = el[t],
                  o = a(e, r),
                  l = (function (e, t) {
                    let n = e.exec(t);
                    return n ? n[1] : "";
                  })(ex, eB.test(o) ? o : n[r]).split(V);
                return {
                  rValue: (0, i.default)(parseInt(l[0], 10), 255),
                  gValue: (0, i.default)(parseInt(l[1], 10), 255),
                  bValue: (0, i.default)(parseInt(l[2], 10), 255),
                  aValue: (0, i.default)(parseFloat(l[3]), 1),
                };
              })({
                element: e,
                actionTypeId: a.actionTypeId,
                computedStyle: n,
                getStyle: o,
              });
            case ea:
              return { value: (0, i.default)(o(e, k), n.display) };
            case er:
              return t[a.actionTypeId] || { value: 0 };
            default:
              return;
          }
        }
        let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eL = (e, t, n) => {
            if ((0, s.isPluginType)(e)) return (0, s.getPluginConfig)(e)(n, t);
            switch (e) {
              case Z: {
                let e = (0, r.default)(n.filters, ({ type: e }) => e === t);
                return e ? e.value : 0;
              }
              case J: {
                let e = (0, r.default)(
                  n.fontVariations,
                  ({ type: e }) => e === t
                );
                return e ? e.value : 0;
              }
              default:
                return n[t];
            }
          };
        function eC({ element: e, actionItem: t, elementApi: n }) {
          if ((0, s.isPluginType)(t.actionTypeId))
            return (0, s.getPluginDestination)(t.actionTypeId)(t.config);
          switch (t.actionTypeId) {
            case H:
            case Y:
            case K:
            case z: {
              let { xValue: e, yValue: n, zValue: i } = t.config;
              return { xValue: e, yValue: n, zValue: i };
            }
            case ee: {
              let { getStyle: i, setStyle: a, getProperty: r } = n,
                { widthUnit: o, heightUnit: l } = t.config,
                { widthValue: u, heightValue: c } = t.config;
              if (!f.IS_BROWSER_ENV) return { widthValue: u, heightValue: c };
              if (o === x) {
                let t = i(e, L);
                a(e, L, ""), (u = r(e, "offsetWidth")), a(e, L, t);
              }
              if (l === x) {
                let t = i(e, C);
                a(e, C, ""), (c = r(e, "offsetHeight")), a(e, C, t);
              }
              return { widthValue: u, heightValue: c };
            }
            case et:
            case en:
            case ei: {
              let {
                rValue: i,
                gValue: a,
                bValue: r,
                aValue: o,
                globalSwatchId: l,
              } = t.config;
              if (l && l.startsWith("--")) {
                let { getStyle: t } = n,
                  i = t(e, l),
                  a = (0, d.normalizeColor)(i);
                return {
                  rValue: a.red,
                  gValue: a.green,
                  bValue: a.blue,
                  aValue: a.alpha,
                };
              }
              return { rValue: i, gValue: a, bValue: r, aValue: o };
            }
            case Z:
              return t.config.filters.reduce(eA, {});
            case J:
              return t.config.fontVariations.reduce(eN, {});
            default: {
              let { value: e } = t.config;
              return { value: e };
            }
          }
        }
        function eR(e) {
          return /^TRANSFORM_/.test(e)
            ? j
            : /^STYLE_/.test(e)
            ? W
            : /^GENERAL_/.test(e)
            ? X
            : /^PLUGIN_/.test(e)
            ? Q
            : void 0;
        }
        function eS(e, t) {
          return e === W ? t.replace("STYLE_", "").toLowerCase() : null;
        }
        function eM(e, t, n, i, r, o, l, u, c) {
          switch (u) {
            case j:
              return (function (e, t, n, i, a) {
                let r = ek
                    .map((e) => {
                      let n = eF[e],
                        {
                          xValue: i = n.xValue,
                          yValue: a = n.yValue,
                          zValue: r = n.zValue,
                          xUnit: o = "",
                          yUnit: l = "",
                          zUnit: u = "",
                        } = t[e] || {};
                      switch (e) {
                        case H:
                          return `${T}(${i}${o}, ${a}${l}, ${r}${u})`;
                        case Y:
                          return `${y}(${i}${o}, ${a}${l}, ${r}${u})`;
                        case K:
                          return `${g}(${i}${o}) ${m}(${a}${l}) ${O}(${r}${u})`;
                        case z:
                          return `${_}(${i}${o}, ${a}${l})`;
                        default:
                          return "";
                      }
                    })
                    .join(" "),
                  { setStyle: o } = a;
                eV(e, f.TRANSFORM_PREFIXED, a),
                  o(e, f.TRANSFORM_PREFIXED, r),
                  (function (
                    { actionTypeId: e },
                    { xValue: t, yValue: n, zValue: i }
                  ) {
                    return (
                      (e === H && void 0 !== i) ||
                      (e === Y && void 0 !== i) ||
                      (e === K && (void 0 !== t || void 0 !== n))
                    );
                  })(i, n) && o(e, f.TRANSFORM_STYLE_PREFIXED, b);
              })(e, t, n, r, l);
            case W:
              return (function (e, t, n, i, r, o) {
                let { setStyle: l } = o;
                switch (i.actionTypeId) {
                  case ee: {
                    let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                      { widthValue: r, heightValue: u } = n;
                    void 0 !== r &&
                      (t === x && (t = "px"), eV(e, L, o), l(e, L, r + t)),
                      void 0 !== u &&
                        (a === x && (a = "px"), eV(e, C, o), l(e, C, u + a));
                    break;
                  }
                  case Z:
                    !(function (e, t, n, i) {
                      let r = (0, a.default)(
                          t,
                          (e, t, i) => `${e} ${i}(${t}${eD(i, n)})`,
                          ""
                        ),
                        { setStyle: o } = i;
                      eV(e, A, i), o(e, A, r);
                    })(e, n, i.config, o);
                    break;
                  case J:
                    !(function (e, t, n, i) {
                      let r = (0, a.default)(
                          t,
                          (e, t, n) => (e.push(`"${n}" ${t}`), e),
                          []
                        ).join(", "),
                        { setStyle: o } = i;
                      eV(e, N, i), o(e, N, r);
                    })(e, n, i.config, o);
                    break;
                  case et:
                  case en:
                  case ei: {
                    let t = el[i.actionTypeId],
                      a = Math.round(n.rValue),
                      r = Math.round(n.gValue),
                      u = Math.round(n.bValue),
                      c = n.aValue;
                    eV(e, t, o),
                      l(
                        e,
                        t,
                        c >= 1
                          ? `rgb(${a},${r},${u})`
                          : `rgba(${a},${r},${u},${c})`
                      );
                    break;
                  }
                  default: {
                    let { unit: t = "" } = i.config;
                    eV(e, r, o), l(e, r, n.value + t);
                  }
                }
              })(e, t, n, r, o, l);
            case X:
              return (function (e, t, n) {
                let { setStyle: i } = n;
                if (t.actionTypeId === ea) {
                  let { value: n } = t.config;
                  i(e, k, n === h && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : n);
                  return;
                }
              })(e, r, l);
            case Q: {
              let { actionTypeId: e } = r;
              if ((0, s.isPluginType)(e))
                return (0, s.renderPlugin)(e)(c, t, r);
            }
          }
        }
        let eF = {
            [H]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [Y]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
            [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [z]: Object.freeze({ xValue: 0, yValue: 0 }),
          },
          eP = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100,
          }),
          ew = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
          eD = (e, t) => {
            let n = (0, r.default)(t.filters, ({ type: t }) => t === e);
            if (n && n.unit) return n.unit;
            switch (e) {
              case "blur":
                return "px";
              case "hue-rotate":
                return "deg";
              default:
                return "%";
            }
          },
          ek = Object.keys(eF),
          eB = /^rgb/,
          ex = RegExp("rgba?\\(([^)]+)\\)");
        function eV(e, t, n) {
          if (!f.IS_BROWSER_ENV) return;
          let i = eu[t];
          if (!i) return;
          let { getStyle: a, setStyle: r } = n,
            o = a(e, B);
          if (!o) {
            r(e, B, i);
            return;
          }
          let l = o.split(V).map(eo);
          -1 === l.indexOf(i) && r(e, B, l.concat(i).join(V));
        }
        function eG(e, t, n) {
          if (!f.IS_BROWSER_ENV) return;
          let i = eu[t];
          if (!i) return;
          let { getStyle: a, setStyle: r } = n,
            o = a(e, B);
          if (!!o && -1 !== o.indexOf(i))
            r(
              e,
              B,
              o
                .split(V)
                .map(eo)
                .filter((e) => e !== i)
                .join(V)
            );
        }
        function eU({ store: e, elementApi: t }) {
          let { ixData: n } = e.getState(),
            { events: i = {}, actionLists: a = {} } = n;
          Object.keys(i).forEach((e) => {
            let n = i[e],
              { config: r } = n.action,
              { actionListId: o } = r,
              l = a[o];
            l && ej({ actionList: l, event: n, elementApi: t });
          }),
            Object.keys(a).forEach((e) => {
              ej({ actionList: a[e], elementApi: t });
            });
        }
        function ej({ actionList: e = {}, event: t, elementApi: n }) {
          let { actionItemGroups: i, continuousParameterGroups: a } = e;
          i &&
            i.forEach((e) => {
              eX({ actionGroup: e, event: t, elementApi: n });
            }),
            a &&
              a.forEach((e) => {
                let { continuousActionGroups: i } = e;
                i.forEach((e) => {
                  eX({ actionGroup: e, event: t, elementApi: n });
                });
              });
        }
        function eX({ actionGroup: e, event: t, elementApi: n }) {
          let { actionItems: i } = e;
          i.forEach((e) => {
            let i;
            let { actionTypeId: a, config: r } = e;
            (i = (0, s.isPluginType)(a)
              ? (t) => (0, s.clearPlugin)(a)(t, e)
              : eQ({ effect: eH, actionTypeId: a, elementApi: n })),
              em({ config: r, event: t, elementApi: n }).forEach(i);
          });
        }
        function eW(e, t, n) {
          let { setStyle: i, getStyle: a } = n,
            { actionTypeId: r } = t;
          if (r === ee) {
            let { config: n } = t;
            n.widthUnit === x && i(e, L, ""), n.heightUnit === x && i(e, C, "");
          }
          a(e, B) && eQ({ effect: eG, actionTypeId: r, elementApi: n })(e);
        }
        let eQ =
          ({ effect: e, actionTypeId: t, elementApi: n }) =>
          (i) => {
            switch (t) {
              case H:
              case Y:
              case K:
              case z:
                e(i, f.TRANSFORM_PREFIXED, n);
                break;
              case Z:
                e(i, A, n);
                break;
              case J:
                e(i, N, n);
                break;
              case q:
                e(i, v, n);
                break;
              case ee:
                e(i, L, n), e(i, C, n);
                break;
              case et:
              case en:
              case ei:
                e(i, el[t], n);
                break;
              case ea:
                e(i, k, n);
            }
          };
        function eH(e, t, n) {
          let { setStyle: i } = n;
          eG(e, t, n),
            i(e, t, ""),
            t === f.TRANSFORM_PREFIXED && i(e, f.TRANSFORM_STYLE_PREFIXED, "");
        }
        function e$(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e, i) => {
              let { config: a } = e,
                r = a.delay + a.duration;
              r >= t && ((t = r), (n = i));
            }),
            n
          );
        }
        function eY(e, t) {
          let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
            { actionItem: a, verboseTimeElapsed: r = 0 } = t,
            o = 0,
            l = 0;
          return (
            n.forEach((e, t) => {
              if (i && 0 === t) return;
              let { actionItems: n } = e,
                u = n[e$(n)],
                { config: c, actionTypeId: d } = u;
              a.id === u.id && (l = o + r);
              let s = eR(d) === X ? 0 : c.duration;
              o += c.delay + s;
            }),
            o > 0 ? (0, c.optimizeFloat)(l / o) : 0
          );
        }
        function eK({ actionList: e, actionItemId: t, rawData: n }) {
          let { actionItemGroups: i, continuousParameterGroups: a } = e,
            r = [],
            l = (e) => (
              r.push((0, o.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === t
            );
          return (
            i && i.some(({ actionItems: e }) => e.some(l)),
            a &&
              a.some((e) => {
                let { continuousActionGroups: t } = e;
                return t.some(({ actionItems: e }) => e.some(l));
              }),
            (0, o.setIn)(n, ["actionLists"], {
              [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
            })
          );
        }
        function ez(e, { basedOn: t }) {
          return (
            (e === l.EventTypeConsts.SCROLLING_IN_VIEW &&
              (t === l.EventBasedOn.ELEMENT || null == t)) ||
            (e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT)
          );
        }
        function eq(e, t) {
          return e + G + t;
        }
        function eZ(e, t) {
          return null == t || -1 !== e.indexOf(t);
        }
        function eJ(e, t) {
          return (0, u.default)(e && e.sort(), t && t.sort());
        }
        function e0(e) {
          if ("string" == typeof e) return e;
          if (e.pluginElement && e.objectId)
            return e.pluginElement + U + e.objectId;
          if (e.objectId) return e.objectId;
          let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
          return t + U + n + U + i;
        }
      },
      7164: function (e, t) {
        "use strict";
        function n(e, t) {
          return e === t
            ? 0 !== e || 0 !== t || 1 / e == 1 / t
            : e != e && t != t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let i = function (e, t) {
          if (n(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          let i = Object.keys(e),
            a = Object.keys(t);
          if (i.length !== a.length) return !1;
          for (let a = 0; a < i.length; a++)
            if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
          return !0;
        };
      },
      5861: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          createElementState: function () {
            return _;
          },
          ixElements: function () {
            return O;
          },
          mergeActionState: function () {
            return b;
          },
        });
        let i = n(1185),
          a = n(7087),
          {
            HTML_ELEMENT: r,
            PLAIN_OBJECT: o,
            ABSTRACT_NODE: l,
            CONFIG_X_VALUE: u,
            CONFIG_Y_VALUE: c,
            CONFIG_Z_VALUE: d,
            CONFIG_VALUE: s,
            CONFIG_X_UNIT: f,
            CONFIG_Y_UNIT: E,
            CONFIG_Z_UNIT: p,
            CONFIG_UNIT: I,
          } = a.IX2EngineConstants,
          {
            IX2_SESSION_STOPPED: T,
            IX2_INSTANCE_ADDED: y,
            IX2_ELEMENT_STATE_CHANGED: g,
          } = a.IX2EngineActionTypes,
          m = {},
          O = (e = m, t = {}) => {
            switch (t.type) {
              case T:
                return m;
              case y: {
                let {
                    elementId: n,
                    element: a,
                    origin: r,
                    actionItem: o,
                    refType: l,
                  } = t.payload,
                  { actionTypeId: u } = o,
                  c = e;
                return (
                  (0, i.getIn)(c, [n, a]) !== a && (c = _(c, a, l, n, o)),
                  b(c, n, u, r, o)
                );
              }
              case g: {
                let {
                  elementId: n,
                  actionTypeId: i,
                  current: a,
                  actionItem: r,
                } = t.payload;
                return b(e, n, i, a, r);
              }
              default:
                return e;
            }
          };
        function _(e, t, n, a, r) {
          let l =
            n === o ? (0, i.getIn)(r, ["config", "target", "objectId"]) : null;
          return (0, i.mergeIn)(e, [a], {
            id: a,
            ref: t,
            refId: l,
            refType: n,
          });
        }
        function b(e, t, n, a, r) {
          let o = (function (e) {
            let { config: t } = e;
            return h.reduce((e, n) => {
              let i = n[0],
                a = n[1],
                r = t[i],
                o = t[a];
              return null != r && null != o && (e[a] = o), e;
            }, {});
          })(r);
          return (0, i.mergeIn)(e, [t, "refState", n], a, o);
        }
        let h = [
          [u, f],
          [c, E],
          [d, p],
          [s, I],
        ];
      },
      9652: function () {
        Webflow.require("ix2").init({
          events: {
            "e-23": {
              id: "e-23",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-24",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|d1a7e2fb-fd0f-4765-d257-ddcb5e1819bb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|d1a7e2fb-fd0f-4765-d257-ddcb5e1819bb",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18a6d27d925,
            },
            "e-25": {
              id: "e-25",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-26",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|3a15a2d8-3031-b0fd-038f-b579872fd724",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|3a15a2d8-3031-b0fd-038f-b579872fd724",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 30,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18a76754f29,
            },
            "e-27": {
              id: "e-27",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-28",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|4fa6e797-da5d-d409-c5c0-a85411743f4f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|4fa6e797-da5d-d409-c5c0-a85411743f4f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 30,
                scrollOffsetUnit: "%",
                delay: 100,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18a7676016c,
            },
            "e-29": {
              id: "e-29",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-30",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|78aef335-6337-a533-9a4b-e2a602df1e21",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|78aef335-6337-a533-9a4b-e2a602df1e21",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 30,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18a76762849,
            },
            "e-31": {
              id: "e-31",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-32",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|0987471e-54ba-5c90-7f7e-a733eddc032b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|0987471e-54ba-5c90-7f7e-a733eddc032b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18a946f62eb,
            },
            "e-49": {
              id: "e-49",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-50",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fee6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fee6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-50": {
              id: "e-50",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-49",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fee6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fee6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-51": {
              id: "e-51",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-52",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fef2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fef2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-52": {
              id: "e-52",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-51",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fef2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fef2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-53": {
              id: "e-53",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-54",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fefe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fefe",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-54": {
              id: "e-54",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-53",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fefe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1fefe",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-55": {
              id: "e-55",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-56",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff0a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff0a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-56": {
              id: "e-56",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-55",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff0a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff0a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-57": {
              id: "e-57",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-58",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff16",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff16",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-58": {
              id: "e-58",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-57",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff16",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff16",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-59": {
              id: "e-59",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-60",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff23",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff23",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-60": {
              id: "e-60",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-59",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff23",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff23",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-61": {
              id: "e-61",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-62",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff2f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff2f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-62": {
              id: "e-62",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-61",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff2f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff2f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-63": {
              id: "e-63",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-64",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff3b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff3b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-64": {
              id: "e-64",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-63",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff3b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff3b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-65": {
              id: "e-65",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-66",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff47",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff47",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-66": {
              id: "e-66",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-65",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff47",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff47",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-67": {
              id: "e-67",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-68",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff53",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff53",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-68": {
              id: "e-68",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-67",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff53",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|5438bf23-25bc-4db1-e50a-bb469dd1ff53",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18a94aa0d3e,
            },
            "e-69": {
              id: "e-69",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-31",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|4dc1e343-08f4-590e-d218-a4afceb70cad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|4dc1e343-08f4-590e-d218-a4afceb70cad",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-31-p",
                  smoothing: 5,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18a9546ebf6,
            },
            "e-70": {
              id: "e-70",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInLeft",
                  autoStopEventId: "e-71",
                },
              },
              mediaQueries: ["medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|df2a6fde-bb6b-338e-a9b3-3b39f3f27431",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|df2a6fde-bb6b-338e-a9b3-3b39f3f27431",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "LEFT",
                effectIn: !0,
              },
              createdOn: 0x18ab4b14143,
            },
            "e-72": {
              id: "e-72",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInLeft",
                  autoStopEventId: "e-73",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|da358a95-c923-915a-d62a-12f1aa1763e9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|da358a95-c923-915a-d62a-12f1aa1763e9",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "LEFT",
                effectIn: !0,
              },
              createdOn: 0x18ab4b1e4a5,
            },
            "e-74": {
              id: "e-74",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInLeft",
                  autoStopEventId: "e-75",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|d8767834-8114-c27a-ff84-06bf687d0f5b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|d8767834-8114-c27a-ff84-06bf687d0f5b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 100,
                direction: "LEFT",
                effectIn: !0,
              },
              createdOn: 0x18ab4b72c4a,
            },
            "e-76": {
              id: "e-76",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInLeft",
                  autoStopEventId: "e-77",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|b7659208-c64c-4e02-166d-9666f7eda2e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|b7659208-c64c-4e02-166d-9666f7eda2e1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "LEFT",
                effectIn: !0,
              },
              createdOn: 0x18ab4b82627,
            },
            "e-78": {
              id: "e-78",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInLeft",
                  autoStopEventId: "e-79",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|c8fa038e-dc8e-31dc-1d0d-ed94709d99f1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|c8fa038e-dc8e-31dc-1d0d-ed94709d99f1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 100,
                direction: "LEFT",
                effectIn: !0,
              },
              createdOn: 0x18ab4b844a5,
            },
            "e-80": {
              id: "e-80",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInLeft",
                  autoStopEventId: "e-81",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "64f1f0ed58fad6ba8c0358ae|f99105d9-ad49-3993-b2b0-8144924731d6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "64f1f0ed58fad6ba8c0358ae|f99105d9-ad49-3993-b2b0-8144924731d6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "LEFT",
                effectIn: !0,
              },
              createdOn: 0x18ab4b86fa3,
            },
          },
          actionLists: {
            "a-17": {
              id: "a-17",
              title: "FAQ04 accordion -> OPEN 2",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-17-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".uui-faq04_answer",
                          selectorGuids: [
                            "49586f8f-7701-2f84-5640-a1741fc87c13",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-17-n-2",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".uui-faq04_answer",
                          selectorGuids: [
                            "49586f8f-7701-2f84-5640-a1741fc87c13",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-17-n-3",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".accordion-icon_vertical-line",
                          selectorGuids: [
                            "54a20d29-0ed6-1753-3dab-429fe000a525",
                          ],
                        },
                        zValue: 90,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17b1ea539da,
            },
            "a-18": {
              id: "a-18",
              title: "FAQ04 accordion -> CLOSE 2",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-18-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".uui-faq04_answer",
                          selectorGuids: [
                            "49586f8f-7701-2f84-5640-a1741fc87c13",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-18-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".accordion-icon_vertical-line",
                          selectorGuids: [
                            "54a20d29-0ed6-1753-3dab-429fe000a525",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17b1ea539da,
            },
            "a-31": {
              id: "a-31",
              title: "scale screenshot",
              continuousParameterGroups: [
                {
                  id: "a-31-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-31-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "64f1f0ed58fad6ba8c0358ae|4dc1e343-08f4-590e-d218-a4afceb70cad",
                            },
                            xValue: 0.75,
                            yValue: 0.75,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 50,
                      actionItems: [
                        {
                          id: "a-31-n-3",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "64f1f0ed58fad6ba8c0358ae|4dc1e343-08f4-590e-d218-a4afceb70cad",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18a95472c94,
            },
            slideInBottom: {
              id: "slideInBottom",
              useFirstGroupAsInitialState: !0,
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0,
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0,
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 1,
                      },
                    },
                  ],
                },
              ],
            },
            slideInLeft: {
              id: "slideInLeft",
              useFirstGroupAsInitialState: !0,
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: -100,
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 1,
                      },
                    },
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0,
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        });
      },
      2648: function (e, t, n) {
        n(9461),
          n(7624),
          n(286),
          n(8334),
          n(2338),
          n(3695),
          n(322),
          n(1655),
          n(9858),
          n(941),
          n(5134),
          n(9904),
          n(1724),
          n(4345),
          n(9652);
      },
    },
    t = {};
  function n(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var r = (t[i] = { id: i, loaded: !1, exports: {} });
    return e[i](r, r.exports, n), (r.loaded = !0), r.exports;
  }
  (n.m = e),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.hmd = function (e) {
      return (
        !(e = Object.create(e)).children && (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), !e.children && (e.children = []), e;
    }),
    (() => {
      var e = [];
      n.O = function (t, i, a, r) {
        if (i) {
          r = r || 0;
          for (var o = e.length; o > 0 && e[o - 1][2] > r; o--) e[o] = e[o - 1];
          e[o] = [i, a, r];
          return;
        }
        for (var l = 1 / 0, o = 0; o < e.length; o++) {
          for (
            var i = e[o][0], a = e[o][1], r = e[o][2], u = !0, c = 0;
            c < i.length;
            c++
          )
            (!1 & r || l >= r) &&
            Object.keys(n.O).every(function (e) {
              return n.O[e](i[c]);
            })
              ? i.splice(c--, 1)
              : ((u = !1), r < l && (l = r));
          if (u) {
            e.splice(o--, 1);
            var d = a();
            void 0 !== d && (t = d);
          }
        }
        return t;
      };
    })(),
    (n.rv = function () {
      return "1.1.8";
    }),
    (() => {
      var e = { 723: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, i) {
          var a = i[0],
            r = i[1],
            o = i[2],
            l,
            u,
            c = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (l in r) n.o(r, l) && (n.m[l] = r[l]);
            if (o) var d = o(n);
          }
          for (t && t(i); c < a.length; c++)
            (u = a[c]), n.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
          return n.O(d);
        },
        i = (self.webpackChunk = self.webpackChunk || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })(),
    (n.ruid = "bundler=rspack@1.1.8");
  var i = n.O(void 0, ["87", "331"], function () {
    return n("2648");
  });
  i = n.O(i);
})();
