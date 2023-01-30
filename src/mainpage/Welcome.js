"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require('../css/welcome.css');
const svg = require('../images/Medicine-bro.svg').default;
console.log(svg);
function Welcome() {
    return (react_1.default.createElement("div", { className: 'intro' },
        react_1.default.createElement("section", { className: 'word' },
            react_1.default.createElement("h1", null,
                "Transformative approach to ",
                react_1.default.createElement("b", null, "healthcare")),
            react_1.default.createElement("p", null,
                "our skilled doctors have experience ",
                react_1.default.createElement("br", null),
                " with wide range of ailments to serve the needs ",
                react_1.default.createElement("br", null),
                " of our patients."),
            react_1.default.createElement(react_bootstrap_1.Button, null, "get help")),
        react_1.default.createElement("section", { className: 'image' },
            react_1.default.createElement("img", { src: svg, alt: "opening" }))));
}
exports.default = Welcome;
//# sourceMappingURL=Welcome.js.map