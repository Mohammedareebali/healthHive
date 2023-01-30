"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Consultation_1 = __importDefault(require("./Consultation"));
const Mainnav_1 = __importDefault(require("./Mainnav"));
const Services_1 = __importDefault(require("./Services"));
const Welcome_1 = __importDefault(require("./Welcome"));
function Home() {
    return (react_1.default.createElement("div", { className: 'welcome' },
        react_1.default.createElement(Mainnav_1.default, null),
        react_1.default.createElement(Welcome_1.default, null),
        react_1.default.createElement(Services_1.default, null),
        react_1.default.createElement(Consultation_1.default, null)));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map