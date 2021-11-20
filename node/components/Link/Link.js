"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Link(props) {
    const _setClassNames = () => {
        return classnames_1.default({
            [`uk-link-${props.type}`]: !!props.type,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return (react_1.default.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-toggle": props.toggleOptions ? props.toggleOptions : null, href: props.href, className: `${_setClassNames()}` }, props.children));
}
exports.Link = Link;
