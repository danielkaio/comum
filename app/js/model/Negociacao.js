System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(nome, valor) {
                    this.nome = nome;
                    this.valor = valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
