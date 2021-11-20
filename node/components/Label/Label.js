"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
function Label(props) {
    const _setClassNames = () => {
        return classnames_1.default('uk-label', {
            [`uk-label-${props.color}`]: !!props.color,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.content));
}
exports.Label = Label;
exports.default = Label;
