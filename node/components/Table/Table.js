"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Table(props) {
    const _setClassNames = () => {
        return classnames_1.default('uk-table', {
            [`uk-table-divider`]: props.divider,
            [`uk-table-striped`]: props.striped,
            [`uk-table-hover`]: props.hover,
            [`uk-table-justify`]: props.justify,
            [`uk-table-middle`]: props.center,
            [`uk-overflow-auto`]: props.responsive,
            [`uk-table-${props.size}`]: !!props.size,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("table", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${_setClassNames()}` }, props.children));
}
exports.Table = Table;
exports.default = Table;
