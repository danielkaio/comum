System.register([], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                }
                adiciona() {
                    alert("ola");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
