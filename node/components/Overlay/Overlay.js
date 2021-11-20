"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Overlay(props) {
    const _setClassNames = () => {
        return classnames_1.default('uk-overlay', {
            [`uk-position-${props.position}`]: !!props.position,
            [`uk-position-${props.type}`]: !!props.type,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.showIcon ? react_1.default.createElement("span", { "uk-overlay-icon": true }) : null));
}
exports.Overlay = Overlay;
exports.default = Overlay;
