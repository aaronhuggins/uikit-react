"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offcanvas = void 0;
const react_1 = __importStar(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Offcanvas(props) {
    react_1.useEffect(() => {
        if (props.onBeforeShow) {
            UIkit.util.on(props.id, 'beforeshow', props.onBeforeShow);
        }
        if (props.onShow) {
            UIkit.util.on(props.id, 'show', props.onShow);
        }
        if (props.onShown) {
            UIkit.util.on(props.id, 'shown', props.onShown);
        }
        if (props.onBeforeHide) {
            UIkit.util.on(props.id, 'beforehide', props.onBeforeHide);
        }
        if (props.onHide) {
            UIkit.util.on(props.id, 'hide', props.onHide);
        }
        if (props.onHidden) {
            UIkit.util.on(props.id, 'hidden', props.onHidden);
        }
    }, []);
    return (react_1.default.createElement("div", { id: props.id, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}`, "uk-offcanvas": props.options ? props.options : '' },
        react_1.default.createElement("div", { className: "uk-offcanvas-bar" }, props.children)));
}
exports.Offcanvas = Offcanvas;
exports.default = Offcanvas;
