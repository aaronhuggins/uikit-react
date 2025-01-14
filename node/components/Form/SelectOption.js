"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOption = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const classNames = classnames_1.default;
const set_class_names_1 = require("../../utils/set-class-names");
class SelectOption extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("option", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: `${set_class_names_1.setClassNames(this.props)}`, value: this.props.value }, this.props.children));
    }
}
exports.SelectOption = SelectOption;
