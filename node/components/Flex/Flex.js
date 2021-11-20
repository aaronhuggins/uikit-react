"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Flex(props) {
    const _setClassNames = () => {
        const alignments = props.alignment ? props.alignment.split(' ') : [];
        return classnames_1.default({
            [`uk-flex-${alignments[0]}`]: !!alignments[0],
            [`uk-flex-${alignments[1]}`]: !!alignments[1],
            [`uk-flex-${props.direction}`]: !!props.direction,
            [`uk-flex-${props.wrap}`]: !!props.wrap,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-flex ${_setClassNames()}` }, props.children));
}
exports.Flex = Flex;
exports.default = Flex;
