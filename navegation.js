"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Peligro = exports.TipoRecurso = void 0;
var TipoRecurso;
(function (TipoRecurso) {
    TipoRecurso[TipoRecurso["Agua"] = 0] = "Agua";
    TipoRecurso[TipoRecurso["Mineral"] = 1] = "Mineral";
    TipoRecurso[TipoRecurso["Vegetal"] = 2] = "Vegetal";
})(TipoRecurso || (exports.TipoRecurso = TipoRecurso = {}));
var Peligro;
(function (Peligro) {
    Peligro[Peligro["Tormenta"] = 0] = "Tormenta";
    Peligro[Peligro["Meteoritos"] = 1] = "Meteoritos";
    Peligro[Peligro["Radiacion"] = 2] = "Radiacion";
})(Peligro || (exports.Peligro = Peligro = {}));
