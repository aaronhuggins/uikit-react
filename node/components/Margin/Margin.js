"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Margin = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Margin(props) {
    const _setClassNames = () => {
        const stringArray = props.type.split('; ');
        let classString;
        stringArray.map((string, idx) => {
            classString = `${classString} uk-margin-${string}`;
        });
        return classnames_1.default(classString, {
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-margin": props.dynamicWrapping, className: _setClassNames() }, props.children));
}
exports.Margin = Margin;
exports.default = Margin;
