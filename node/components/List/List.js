"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const set_class_names_1 = require("../../utils/set-class-names");
function List(props) {
    const _setClassNames = () => {
        return classnames_1.default('uk-list', {
            [`uk-link-${props.type}`]: !!props.type,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("ul", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.children));
}
exports.List = List;
