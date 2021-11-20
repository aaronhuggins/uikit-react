"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offcanvas = void 0;
const react_1 = require("react");
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
    return (react_1.default.createElement("div", { id: props.id, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}`, "data-uk-offcanvas": props.options ? props.options : '' },
        react_1.default.createElement("div", { className: "uk-offcanvas-bar" }, props.children)));
}
exports.Offcanvas = Offcanvas;
exports.default = Offcanvas;
