"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
function Mainnav() {
    return (react_1.default.createElement("div", null, ['md'].map((expand) => (react_1.default.createElement(react_bootstrap_1.Navbar, { key: expand, bg: "white", expand: expand, className: "mb-3" },
        react_1.default.createElement(react_bootstrap_1.Container, { fluid: true },
            react_1.default.createElement(react_bootstrap_1.Navbar.Brand, { href: "#" }, "HealthHive"),
            react_1.default.createElement(react_bootstrap_1.Navbar.Toggle, { "aria-controls": `offcanvasNavbar-expand-${expand}` }),
            react_1.default.createElement(react_bootstrap_1.Navbar.Offcanvas, { id: `offcanvasNavbar-expand-${expand}`, "aria-labelledby": `offcanvasNavbarLabel-expand-${expand}`, placement: "end" },
                react_1.default.createElement(react_bootstrap_1.Offcanvas.Header, { closeButton: true },
                    react_1.default.createElement(react_bootstrap_1.Offcanvas.Title, { id: `offcanvasNavbarLabel-expand-${expand}` }, "HealthHive")),
                react_1.default.createElement(react_bootstrap_1.Offcanvas.Body, null,
                    react_1.default.createElement(react_bootstrap_1.Nav, { className: "justify-content-center flex-grow-1 pe-3" },
                        react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "#action1" }, "Home"),
                        react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "#action2" }, "About us"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: "Services", id: `offcanvasNavbarDropdown-expand-${expand}` },
                            react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { href: "#action3" }, "Action"),
                            react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { href: "#action4" }, "Another action"),
                            react_1.default.createElement(react_bootstrap_1.NavDropdown.Divider, null),
                            react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { href: "#action5" }, "Something else here"))),
                    react_1.default.createElement(react_bootstrap_1.Button, null,
                        react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "#action1" }, "consult us"))))))))));
}
exports.default = Mainnav;
//# sourceMappingURL=Mainnav.js.map