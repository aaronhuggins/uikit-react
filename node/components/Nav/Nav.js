"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Nav(props) {
    const _setClassNames = () => {
        return classnames_1.default({
            [`uk-nav`]: true,
            [`uk-nav-${props.preset}`]: !!props.preset,
            [`uk-nav-sub`]: props.child,
            [`uk-nav-parent-icon`]: props.accordion,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("ul", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}`, "data-uk-nav": props.options ? props.options : '' }, props.children));
}
exports.Nav = Nav;
exports.default = Nav;
