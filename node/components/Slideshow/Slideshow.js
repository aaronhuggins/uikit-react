"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slideshow = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Slideshow(props) {
    const setNavigation = () => {
        if (props.navigation) {
            return (react_1.default.createElement("div", { className: `uk-position-relative uk-visible-toggle ${setNavigationStyle()}` },
                react_1.default.createElement("ul", { className: "uk-slideshow-items" }, props.children),
                react_1.default.createElement("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "uk-slidenav-previous": "", "uk-slideshow-item": "previous" }),
                react_1.default.createElement("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "uk-slidenav-next": "", "uk-slideshow-item": "next" })));
        }
        return react_1.default.createElement("ul", { className: "uk-slideshow-items" }, props.children);
    };
    const setNavigationStyle = () => {
        if (props.navigation && props.navigationStyle) {
            return `uk-${props.navigationStyle}`;
        }
        return `uk-dark`;
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}`, "uk-slideshow": props.options ? props.options : '' }, setNavigation()));
}
exports.Slideshow = Slideshow;
exports.default = Slideshow;
