"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Dropdown(props) {
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, className: `${set_class_names_1.setClassNames(props)}`, "uk-dropdown": props.options ? props.options : '' }, props.children));
}
exports.Dropdown = Dropdown;
exports.default = Dropdown;
