webpackJsonp([2,5],{"2BkJ":function(n,e){n.exports="\n(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD\n        define(factory);\n    } else if (typeof exports === 'object') {\n        // Node, CommonJS-like\n        module.exports = factory();\n    } else {\n        // Browser globals (root is window)\n        root.cabit = factory();\n    }\n}(this, function () {\n  var isNode = typeof window === 'undefined';\n  var global = isNode ? global : window;\n\n  function cabit() {\n    this.subscribers = {};\n  }\n\n  cabit.prototype.start = function(eventName, data) {\n    var event = new CustomEvent('start::' + eventName, {\n      detail: data\n    });\n    global.dispatchEvent(event);\n  };\n\n  cabit.prototype.end = function(eventName, data) {\n    var event = new CustomEvent('end::' + eventName, {\n      detail: data\n    });\n    global.dispatchEvent(event);\n  };\n\n  cabit.prototype.onStart = function(eventName, callback) {\n    this.subscribers[eventName] = global.addEventListener('start::' + eventName, function(event) {\n      callback(event.detail);\n    });\n  };\n\n  cabit.prototype.onEnd = function(eventName, callback) {\n    this.subscribers[eventName] = global.addEventListener('end::' + eventName, function(event) {\n      callback(event.detail);\n    });\n  };\n\n  cabit.prototype.onAll = function(eventName, callback) {\n    this.subscribers[eventName] = global.addEventListener('start::' + eventName, function(event) {\n      callback(event.detail);\n    });\n\n    this.subscribers[eventName] = global.addEventListener('end::' + eventName, function(event) {\n      callback(event.detail);\n    });\n  };\n\n  return new cabit();\n}));\n"},3:function(n,e,t){t("7+zN"),n.exports=t("gcu7")},"7+zN":function(n,e,t){t("P+fo")(t("fOEl"))},"P+fo":function(n,e){n.exports=function(n){"undefined"!=typeof execScript?execScript(n):eval.call(null,n)}},fOEl:function(n,e){n.exports="\n(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD\n        define(factory);\n    } else if (typeof exports === 'object') {\n        // Node, CommonJS-like\n        module.exports = factory();\n    } else {\n        // Browser globals (root is window)\n        root.loggester = factory();\n    }\n}(this, function () {\n  var isNode = typeof window === 'undefined';\n\n  var loggester = {\n    logger: function(caller, len) {\n      var self = this;\n      len = typeof len === 'undefined' ? 10 : len;\n      caller = typeof caller === 'undefined' ? '' : caller;\n\n      return function(message) {\n        if (loggester.isProd) {\n          return false;\n        }\n\n        for (var i = caller.length; i < len; i++) {\n          caller += ' ';\n        }\n\n        var args = isNode\n          ? [caller + ':']\n          : ['%c ' + caller, 'background: #111; color: #bada55; font-weight: bold'];\n\n        for (var i = 0; i < arguments.length; i++) {\n          args.push(arguments[i]);\n        }\n\n        console.log.apply(null, args);\n      };\n    },\n    isProd: false\n  };\n\n  return loggester;\n}));\n"},gcu7:function(n,e,t){t("P+fo")(t("2BkJ"))}},[3]);