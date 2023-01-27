"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Mainnav_1 = __importDefault(require("./Mainnav"));
const Welcome_1 = __importDefault(require("./Welcome"));
function Home() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Mainnav_1.default, null),
        react_1.default.createElement(Welcome_1.default, null)));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map