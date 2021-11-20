"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parallax = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Parallax(props) {
    const applyParallaxFiltersToChild = () => {
        return react_1.default.Children.map(props.children, (child, idx) => {
            if (idx > 0)
                return child;
            return react_1.default.cloneElement(child, {
                'uk-parallax': props.options,
            });
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}` }, applyParallaxFiltersToChild()));
}
exports.Parallax = Parallax;
exports.default = Parallax;
