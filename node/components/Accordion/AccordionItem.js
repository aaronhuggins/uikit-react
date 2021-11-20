"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionItem = void 0;
const react_1 = __importDefault(require("react"));
function AccordionItem({ title, children, ...rest }) {
    return (react_1.default.createElement("li", Object.assign({}, rest),
        react_1.default.createElement("a", { role: "button", className: "uk-accordion-title" }, title),
        react_1.default.createElement("div", { className: "uk-accordion-content" }, children)));
}
exports.AccordionItem = AccordionItem;
exports.default = AccordionItem;
