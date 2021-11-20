"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabContent = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function TabContent(props) {
    return (react_1.default.createElement("li", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: `${set_class_names_1.setClassNames(this.props)}` }, this.props.children));
}
exports.TabContent = TabContent;
exports.default = TabContent;
