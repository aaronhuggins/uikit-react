"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Grid(props) {
    const _setClassNames = () => {
        return classnames_1.default({
            [`uk-grid-${props.gutter}`]: !!props.gutter,
            [`uk-grid-divider`]: props.divider,
            [`uk-grid-match`]: props.match,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}`, "uk-grid": props.options ? props.options : '' }, props.children));
}
exports.Grid = Grid;
exports.default = Grid;
