"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const set_class_names_1 = require("../../utils/set-class-names");
function Icon(props) {
    const getClassNames = () => {
        return classnames_1.default({
            [`uk-icon`]: true,
            [`uk-icon-button`]: props.button,
            [`uk-icon-link`]: !!props.href,
            [`uk-icon-image`]: !!props.image,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    const renderIconType = () => {
        if (props.href) {
            return (react_1.default.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: getClassNames(), href: props.href, "data-uk-icon": props.options }));
        }
        if (props.image) {
            return (react_1.default.createElement("span", { id: props.id ? props.id : null, className: getClassNames(), style: {
                    backgroundImage: `url(${props.image})`,
                    ...props.style,
                }, "data-uk-icon": props.options }));
        }
        return (react_1.default.createElement("em", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: getClassNames(), "data-uk-icon": props.options }));
    };
    return renderIconType();
}
exports.Icon = Icon;
exports.default = Icon;
