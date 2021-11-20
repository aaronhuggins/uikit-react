"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lightbox = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Lightbox(props) {
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: set_class_names_1.setClassNames(props), "uk-lightbox": props.options ? props.options : '' }, props.children));
}
exports.Lightbox = Lightbox;
exports.default = Lightbox;
