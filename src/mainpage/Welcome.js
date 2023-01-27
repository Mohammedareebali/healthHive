"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const svg = require('../images/Medicine-bro.svg').default;
console.log(svg);
function Welcome() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("section", { className: 'word' }),
        react_1.default.createElement("section", { className: 'image' },
            react_1.default.createElement("img", { src: svg, alt: "something" }))));
}
exports.default = Welcome;
//# sourceMappingURL=Welcome.js.map