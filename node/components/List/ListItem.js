"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
const react_1 = require("react");
const set_class_names_1 = require("../../utils/set-class-names");
function ListItem(props) {
    return (react_1.default.createElement("li", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: set_class_names_1.setClassNames(props) }, props.children));
}
exports.ListItem = ListItem;
