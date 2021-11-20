"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cover = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Cover(props) {
    const renderResponsiveMode = () => {
        if (props.responsive) {
            return react_1.default.createElement("canvas", { width: props.width, height: props.height });
        }
    };
    const renderBasedOnType = () => {
        if (props.type === 'image') {
            return (react_1.default.createElement("img", { src: props.src, alt: props.alt, width: props.width, height: props.height, "data-uk-cover": '' }));
        }
        if (props.type === 'video') {
            return (react_1.default.createElement("video", { autoPlay: props.autoPlay, loop: props.loop, muted: props.muted, playsInline: props.playsInline, width: props.width, height: props.height, "data-uk-cover": '' },
                react_1.default.createElement("source", { src: props.src, type: `${props.type}/${props.videoFormat}` })));
        }
        console.error('Type property on cover component must be either video or image');
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-cover-container ${set_class_names_1.setClassNames(props)}` },
        renderResponsiveMode(),
        renderBasedOnType()));
}
exports.Cover = Cover;
exports.default = Cover;
