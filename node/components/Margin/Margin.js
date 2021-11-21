"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Margin = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const set_class_names_1 = require("../../utils/set-class-names");
function Margin(props) {
    const _setClassNames = () => {
        let classString;
        if (props.type) {
            const stringArray = props.type.split('; ');
            stringArray.map((string, idx) => {
                classString = `${classString} uk-margin-${string}`;
            });
        }
        else {
            classString = 'uk-margin';
        }
        return classnames_1.default(classString, {
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, "uk-margin": props.dynamicWrapping, className: _setClassNames() }, props.children));
}
exports.Margin = Margin;
exports.default = Margin;
