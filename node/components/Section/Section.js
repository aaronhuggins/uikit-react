"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const set_class_names_1 = require("../../utils/set-class-names");
function Section(props) {
    const _setClassNames = () => {
        return classnames_1.default({
            [`uk-section`]: props.padding,
            [`uk-section-${props.color}`]: !!props.color,
            [`uk-section-${props.size}`]: !!props.size,
            [`uk-preserve-color`]: props.preserveColor,
            [set_class_names_1.setClassNames(props)]: true,
            [`uk-position-${props.position}`]: !!props.position,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.children));
}
exports.Section = Section;
exports.default = Section;
