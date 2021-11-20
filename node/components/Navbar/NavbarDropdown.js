"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarDropdown = void 0;
const react_1 = require("react");
const set_class_names_1 = require("../../utils/set-class-names");
function NavbarDropdown(props) {
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-navbar-dropdown ${set_class_names_1.setClassNames(props)}` },
        react_1.default.createElement("ul", { className: "uk-nav uk-navbar-dropdown-nav" }, props.children)));
}
exports.NavbarDropdown = NavbarDropdown;
exports.default = NavbarDropdown;
