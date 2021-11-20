"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarContainer = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function NavbarContainer(props) {
    const _setClassNames = () => {
        return classnames_1.default('uk-navbar-container', {
            [`uk-navbar-transparent`]: props.transparent,
            [set_class_names_1.setClassNames(props)]: true,
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("nav", { id: props.id ? props.id : null, className: `${_setClassNames()}`, style: props.style ? props.style : null, "data-uk-navbar": props.options ? props.options : '' }, props.children),
        props.dropbar ? react_1.default.createElement("div", { className: "uk-navbar-dropbar" }) : null));
}
exports.NavbarContainer = NavbarContainer;
