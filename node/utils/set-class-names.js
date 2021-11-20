"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const classNames = classnames_1.default;
function setClassNames(props) {
    const isClassNameSet = props.className ? true : false;
    const isHeightSet = props.height ? true : false;
    const isWidthSet = props.width ? true : false;
    const isAlignSet = props.align ? true : false;
    const isBackgroundSet = props.background ? true : false;
    const isPositionSet = props.position ? true : false;
    return classNames({
        [`${props.className}`]: isClassNameSet,
        [`uk-align-${props.align}`]: isAlignSet,
        [`uk-height-${props.height}`]: isHeightSet,
        [`uk-width-${props.width}`]: isWidthSet,
        [`uk-background-${props.background}`]: isBackgroundSet,
        [`uk-position-${props.position}`]: isPositionSet,
    });
}
exports.setClassNames = setClassNames;
