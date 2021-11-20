"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputContainer = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const classNames = classnames_1.default;
const set_class_names_1 = require("../../utils/set-class-names");
class InputContainer extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: `uk-form-controls ${set_class_names_1.setClassNames(this.props)}` }, this.props.children));
    }
}
exports.InputContainer = InputContainer;
