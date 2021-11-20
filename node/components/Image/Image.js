"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const classNames = classnames_1.default;
function Image(props) {
    return (react_1.default.createElement("img", { id: props.id ? props.id : null, className: props.className, width: props.width, height: props.height, style: props.style ? props.style : null, "data-src": props.src, "data-uk-img": props.options ? props.options : '' }));
}
exports.Image = Image;
exports.default = Image;
