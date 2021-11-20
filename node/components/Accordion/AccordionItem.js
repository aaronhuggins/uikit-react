"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionItem = void 0;
const react_1 = require("react");
function AccordionItem({ title, children, ...rest }) {
    return (react_1.default.createElement("li", Object.assign({}, rest),
        react_1.default.createElement("a", { role: "button", className: "uk-accordion-title" }, title),
        react_1.default.createElement("div", { className: "uk-accordion-content" }, children)));
}
exports.AccordionItem = AccordionItem;
exports.default = AccordionItem;
