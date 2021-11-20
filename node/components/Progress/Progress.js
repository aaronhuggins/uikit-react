"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Progress(props) {
    const [state, setState] = react_1.useState({ value: props.value });
    const _setClassNames = () => {
        return classnames_1.default('uk-progress', {
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("progress", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}`, value: state.value, max: props.max }));
}
exports.Progress = Progress;
exports.default = Progress;
