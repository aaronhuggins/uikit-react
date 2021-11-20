"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Container(props) {
    const _setClassNames = () => {
        return classnames_1.default({
            [`uk-container`]: true,
            [`uk-container-${props.size}`]: !!props.size,
            [set_class_names_1.setClassNames(props)]: true,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}
exports.Container = Container;
exports.default = Container;
