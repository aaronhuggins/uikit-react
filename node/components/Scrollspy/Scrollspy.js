"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrollspy = void 0;
const react_1 = require("react");
const set_class_names_1 = require("../../utils/set-class-names");
function Scrollspy(props) {
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}`, "data-uk-scrollspy": props.options ? props.options : '' }, props.children));
}
exports.Scrollspy = Scrollspy;
exports.default = Scrollspy;
