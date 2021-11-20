"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightboxItem = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function LightboxItem(props) {
    return (react_1.default.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: set_class_names_1.setClassNames(props), href: props.href, "data-caption": props.caption }, props.children));
}
exports.LightboxItem = LightboxItem;
exports.default = LightboxItem;
