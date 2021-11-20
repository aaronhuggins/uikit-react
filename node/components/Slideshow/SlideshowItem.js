"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideshowItem = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function SlideshowItem(props) {
    const renderBasedOnType = () => {
        if (props.type === 'image') {
            return react_1.default.createElement("img", { src: props.src, alt: props.alt, "uk-cover": "" });
        }
        if (props.type === 'video') {
            return (react_1.default.createElement("video", { autoPlay: props.autoPlay, loop: props.loop, muted: props.muted, playsInline: props.playsInline, "data-uk-cover": '' },
                react_1.default.createElement("source", { src: props.src, type: `${props.type}/${props.videoFormat}` })));
        }
        console.error('Type property on cover component must be either video or image');
    };
    return (react_1.default.createElement("li", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}` }, renderBasedOnType()));
}
exports.SlideshowItem = SlideshowItem;
exports.default = SlideshowItem;
