"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function TableBody(props) {
    return (react_1.default.createElement("tbody", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}` }, props.children));
}
exports.TableBody = TableBody;
exports.default = TableBody;
