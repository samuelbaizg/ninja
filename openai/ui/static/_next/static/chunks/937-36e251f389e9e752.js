"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[937], {
    93683: function(e, n, a) {
        a.d(n, {
            Z: function() {
                return w
            }
        });
        var r = a(21722),
            t = a(22830),
            s = a(39889),
            i = a(35250),
            l = a(9181),
            o = a.n(l),
            c = a(60554),
            u = a(70079),
            d = a(1454),
            p = a(50795),
            m = a(82081),
            f = a(99486),
            h = a(78931),
            x = a(88798),
            b = a(56817),
            g = a(96175),
            v = a(19350),
            y = a(51061);
        function w(e) {
            var n = e.isOpen,
                a = e.onClose,
                l = (0, h.hz)(),
                w = (0, t._)((0, u.useState)(!1), 2),
                j = w[0],
                N = w[1],
                k = (0, c.useRouter)(),
                _ = (0, u.useCallback)(function() {
                    p.o.logEvent(m.a.closeAccountPaymentModal),
                    a()
                }, [a]),
                C = (0, u.useCallback)((0, r._)(function() {
                    var e;
                    return (0, s.__generator)(this, function(n) {
                        switch (n.label) {
                        case 0:
                            N(!0),
                            p.o.logEvent(m.a.clickAccountPaymentCheckout),
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, 4, 5]), [4, f.ZP.getCheckoutLink()];
                        case 2:
                            return e = n.sent(), k.push(e.url), [3, 5];
                        case 3:
                            return n.sent(), x.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                                hasCloseButton: !0
                            }), [3, 5];
                        case 4:
                            return N(!1), [7];
                        case 5:
                            return [2]
                        }
                    })
                }), [k, N]),
                P = (0, u.useCallback)((0, r._)(function() {
                    var e;
                    return (0, s.__generator)(this, function(n) {
                        switch (n.label) {
                        case 0:
                            N(!0),
                            p.o.logEvent(m.a.clickAccountCustomerPortal),
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, 4, 5]), [4, f.ZP.fetchCustomerPortalUrl()];
                        case 2:
                            return e = n.sent(), k.push(e.url), [3, 5];
                        case 3:
                            return n.sent(), x.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                                hasCloseButton: !0
                            }), [3, 5];
                        case 4:
                            return N(!1), [7];
                        case 5:
                            return [2]
                        }
                    })
                }), [k, N]),
                A = (0, u.useCallback)(function() {
                    p.o.logEvent(m.a.clickAccountPaymentGetHelp)
                }, []),
                S = (0, h.YD)(),
                T = l.has("disable_upgrade_ui");
            return (0, i.jsxs)(g.x, {
                isOpen: n,
                onClose: a,
                children: [(0, i.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                    children: [(0, i.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: "Your plan"
                    }), (0, i.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: _,
                        children: (0, i.jsx)(d.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: "grid sm:grid-cols-2",
                    children: [(0, i.jsx)("div", {
                        className: "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                        children: (0, i.jsx)(v.Oi, {
                            rowElements: [(0, i.jsx)(v.Cu, {
                                text: "Free plan"
                            }, "row-free-plan-name"), (0, i.jsx)(v.hi, {
                                variant: "disabled",
                                disabled: !0,
                                text: y.S.free.callToAction.active
                            }, "row-free-plan-button"), (0, i.jsx)(v.G, {
                                variant: "secondary",
                                text: y.S.free.demandAccess
                            }, "row-free-plan-demand"), (0, i.jsx)(v.G, {
                                variant: "secondary",
                                text: y.S.free.responseSpeed
                            }, "row-free-plan-speed"), (0, i.jsx)(v.G, {
                                className: "sm:pb-2",
                                variant: "secondary",
                                text: y.S.free.modelFeatures
                            }, "row-free-plan-updates")]
                        })
                    }), (0, i.jsx)("div", {
                        className: "relative order-1 col-span-1 sm:order-2",
                        children: (0, i.jsx)(v.Oi, {
                            rowElements: [(0, i.jsx)(v.Cu, {
                                text: y.S.plus.name,
                                children: (0, i.jsx)("span", {
                                    className: "font-semibold text-gray-500",
                                    children: y.S.plus.costInDollars
                                })
                            }, "row-plus-plan-title"), (0, i.jsx)(v.hi, {
                                variant: "primary",
                                disabledText: T ? "Due to high demand, we've temporarily paused upgrades." : "",
                                disabled: j,
                                isLoading: j,
                                onClick: C,
                                text: y.S.plus.callToAction.inactivePayment
                            }, "row-plus-plan-button"), (0, i.jsx)(v.G, {
                                variant: "primary",
                                text: y.S.plus.demandAccess
                            }, "row-plus-plan-demand"), (0, i.jsx)(v.G, {
                                variant: "primary",
                                text: y.S.plus.responseSpeed
                            }, "row-plus-plan-speed"), (0, i.jsx)(v.G, {
                                className: "sm:pb-2",
                                variant: "primary",
                                text: y.S.plus.modelFeatures
                            }, "row-plus-plan-updates"), S && (0, i.jsx)(v.nR, {
                                className: "sm:pb-1",
                                isLoading: j,
                                text: y.S.manageSubscriptionWeb.callToAction,
                                onClick: P
                            }, "row-plus-plan-manage"), (0, i.jsx)(o(), {
                                target: "_blank",
                                href: b.ti,
                                passHref: !0,
                                children: (0, i.jsx)(v.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: y.S.getHelp.callToAction,
                                    onClick: A
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-help-link")]
                        })
                    })]
                })]
            })
        }
    },
    96175: function(e, n, a) {
        a.d(n, {
            x: function() {
                return o
            }
        });
        var r = a(4337),
            t = a(35250),
            s = a(21389),
            i = a(89368);
        function l() {
            var e = (0, r._)(["flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);
            return l = function() {
                return e
            }, e
        }
        var o = function(e) {
                var n = e.children,
                    a = e.isOpen,
                    r = e.onClose;
                return (0, t.jsx)(i.Z, {
                    size: "fullscreen",
                    isOpen: a,
                    onClose: r,
                    type: "success",
                    className: "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
                    children: (0, t.jsx)("div", {
                        className: "flex h-full flex-col items-center justify-start",
                        children: (0, t.jsx)("div", {
                            className: "relative",
                            children: (0, t.jsx)(c, {
                                children: n
                            })
                        })
                    })
                })
            },
            c = s.Z.div(l())
    },
    19350: function(e, n, a) {
        a.d(n, {
            Cu: function() {
                return x
            },
            G: function() {
                return v
            },
            Oi: function() {
                return h
            },
            hi: function() {
                return g
            },
            nR: function() {
                return y
            }
        });
        var r = a(4337),
            t = a(35250),
            s = a(19841),
            i = a(70079),
            l = a(1454),
            o = a(21389),
            c = a(67273),
            u = a(45635),
            d = a(88327);
        function p() {
            var e = (0, r._)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);
            return p = function() {
                return e
            }, e
        }
        function m() {
            var e = (0, r._)(["gap-2 flex flex-row justify-start items-center text-sm"]);
            return m = function() {
                return e
            }, e
        }
        function f() {
            var e = (0, r._)(["text-xl font-semibold justify-between items-center flex"]);
            return f = function() {
                return e
            }, e
        }
        var h = function(e) {
                var n = e.rowElements;
                return (0, t.jsx)(w, {
                    children: n.map(function(e) {
                        return e
                    })
                })
            },
            x = function(e) {
                var n = e.className,
                    a = e.text,
                    r = e.children;
                return (0, t.jsxs)(N, {
                    className: n,
                    children: [(0, t.jsx)("span", {
                        children: a
                    }), r]
                })
            },
            b = {
                "primary-disabled": "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
                primary: "border-none py-3 font-semibold",
                disabled: "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"
            },
            g = (0, i.forwardRef)(function(e, n) {
                var a = e.isLoading,
                    r = void 0 !== a && a,
                    i = e.disabled,
                    o = e.onClick,
                    p = e.variant,
                    m = void 0 === p ? "primary" : p,
                    f = e.text,
                    h = e.disabledText;
                return h ? (0, t.jsx)("div", {
                    className: "relative",
                    children: (0, t.jsx)(u.u, {
                        side: "bottom",
                        sideOffset: 20,
                        label: h,
                        usePortal: !1,
                        children: (0, t.jsxs)(c.z, {
                            ref: n,
                            as: "button",
                            color: "disabled",
                            className: (0, s.Z)("w-full", b[m]),
                            children: [f, r && (0, t.jsx)(d.ZP, {
                                className: "animate-spin",
                                icon: l.dAq
                            })]
                        })
                    })
                }) : (0, t.jsxs)(c.z, {
                    disabled: void 0 !== i && i,
                    onClick: o,
                    ref: n,
                    as: "button",
                    className: (0, s.Z)(b[m]),
                    children: [(0, t.jsx)("span", {
                        className: (0, s.Z)("inline-block", {
                            "text-gray-700": "primary-disabled" === m,
                            "text-white": "primary" === m
                        }),
                        children: f
                    }), r && (0, t.jsx)(d.ZP, {
                        className: "animate-spin",
                        icon: l.dAq
                    })]
                })
            });
        g.displayName = "PricingPlanButton";
        var v = function(e) {
                var n = e.variant,
                    a = void 0 === n ? "primary" : n,
                    r = e.className,
                    i = e.text;
                return (0, t.jsxs)(j, {
                    className: r,
                    children: [(0, t.jsx)(d.ZP, {
                        icon: l._rq,
                        className: (0, s.Z)("h-5 w-5", {
                            "text-green-700": "primary" == a,
                            "text-gray-400": "secondary" == a
                        })
                    }), (0, t.jsx)("span", {
                        children: i
                    })]
                })
            },
            y = function(e) {
                var n = e.className,
                    a = e.text,
                    r = e.isLoading,
                    s = e.onClick;
                return (0, t.jsx)(j, {
                    className: n,
                    children: (0, t.jsxs)("button", {
                        onClick: s,
                        className: "flex flex-row items-center space-x-1 underline",
                        children: [(0, t.jsx)("span", {
                            children: a
                        }), r && (0, t.jsx)(d.ZP, {
                            className: "animate-spin",
                            icon: l.dAq
                        })]
                    })
                })
            },
            w = o.Z.div(p()),
            j = o.Z.div(m()),
            N = o.Z.div(f())
    },
    56817: function(e, n, a) {
        a.d(n, {
            _4: function() {
                return s
            },
            m1: function() {
                return t
            },
            ti: function() {
                return r
            }
        });
        var r = "https://help.openai.com/en/collections/3943089-billing",
            t = "https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",
            s = {
                WEBAPP: "chatgpt_web",
                MOBILE_IOS: "chatgpt_mobile_ios",
                GRANTED: "chatgpt_gratis_recepient",
                NOT_PURCHASED: "chatgpt_not_purchased"
            }
    },
    51061: function(e, n, a) {
        a.d(n, {
            S: function() {
                return r
            }
        });
        var r = {
            free: {
                name: "Free plan",
                callToAction: {
                    active: "Your current plan",
                    inactive: "Your current plan"
                },
                costInDollars: "",
                demandAccess: "Available when demand is low",
                responseSpeed: "Standard response speed",
                modelFeatures: "Regular model updates"
            },
            plus: {
                name: "ChatGPT Plus",
                callToAction: {
                    active: "Your current plan",
                    inactive: "I'm interested",
                    inactivePayment: "Upgrade plan"
                },
                costInDollars: "USD $20/mo",
                demandAccess: "Available even when demand is high",
                responseSpeed: "Faster response speed",
                modelFeatures: "Priority access to new features"
            },
            manageSubscriptionWeb: {
                callToAction: "Manage my subscription"
            },
            manageSubscriptionIos: {
                callToAction: "Manage my subscription in the ChatGPT iOS app"
            },
            getHelp: {
                callToAction: "I need help with a billing issue"
            },
            business: {
                callToAction: "Buy for my team"
            }
        }
    },
    21739: function(e, n, a) {
        a.d(n, {
            g: function() {
                return o
            }
        });
        var r = a(96237),
            t = a(39324),
            s = a(71209),
            i = a(78103),
            l = {
                flags: {
                    isUserInCanPayGroup: !1,
                    failwhaleBypassEnabled: !1,
                    sharingEnabled: !1,
                    messageRedesign: !1
                }
            },
            o = (0, i.ZP)()(function(e, n) {
                return (0, s._)((0, t._)({}, l), {
                    updateFlagValue: function(a, i) {
                        var l = n().flags;
                        e({
                            flags: (0, s._)((0, t._)({}, l), (0, r._)({}, a, i))
                        })
                    }
                })
            })
    }
}]);