"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardFooter = void 0;
const react_1 = require("react");
const set_class_names_1 = require("../../utils/set-class-names");
function CardFooter(props) {
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-card-footer ${set_class_names_1.setClassNames(props)}` }, props.children));
}
exports.CardFooter = CardFooter;
exports.default = CardFooter;
