"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const doctor = require('../images/Researching-amico.svg').default;
const health = require('../images/services.svg').default;
const support = require('../images/Pediatrician.svg').default;
const service = require('../images/solution.svg').default;
function Services() {
    return (react_1.default.createElement("div", { className: 'service' },
        react_1.default.createElement("div", { className: 'subheading' },
            react_1.default.createElement("h2", null,
                "our ",
                react_1.default.createElement("b", null,
                    react_1.default.createElement("i", null, "Medical Services")))),
        react_1.default.createElement("div", { className: 'service-info' },
            react_1.default.createElement(react_bootstrap_1.Card, { style: { width: '18rem' } },
                react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: doctor }),
                react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Title, null, "Find a doctor"),
                    react_1.default.createElement(react_bootstrap_1.Card.Text, null, "get help quickly and effectively."))),
            react_1.default.createElement(react_bootstrap_1.Card, { style: { width: '18rem' } },
                react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: support }),
                react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Title, null, "Health support"),
                    react_1.default.createElement(react_bootstrap_1.Card.Text, null, "it's essential to make educated decisions with regards to choosing your healthcare."))),
            react_1.default.createElement(react_bootstrap_1.Card, { style: { width: '18rem' } },
                react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: health }),
                react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Title, null, "Quality Services"),
                    react_1.default.createElement(react_bootstrap_1.Card.Text, null, "get help quickly and effectively."))),
            react_1.default.createElement(react_bootstrap_1.Card, { style: { width: '18rem' } },
                react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: service }),
                react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Title, null, "get your solution"),
                    react_1.default.createElement(react_bootstrap_1.Card.Text, null, "it's essential to make educated decisions with regards to choosing your healthcare.")))),
        react_1.default.createElement("div", { className: 'learn-more' },
            react_1.default.createElement(react_bootstrap_1.Button, null, "learn more"))));
}
exports.default = Services;
//# sourceMappingURL=Services.js.map