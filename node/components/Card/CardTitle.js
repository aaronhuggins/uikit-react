"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTitle = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function CardTitle(props) {
    return (react_1.default.createElement("h3", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-card-title ${set_class_names_1.setClassNames(props)}` }, props.children));
}
exports.CardTitle = CardTitle;
exports.default = CardTitle;
