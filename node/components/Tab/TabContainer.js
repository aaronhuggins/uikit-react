"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabContainer = void 0;
const react_1 = require("react");
const set_class_names_1 = require("../../utils/set-class-names");
function TabContainer(props) {
    const renderChildren = key => {
        return react_1.default.Children.map(props.children, (child, idx) => {
            const comp = child;
            if (comp.key === key) {
                return comp;
            }
        });
    };
    const validateIdProp = () => {
        if (!props.id) {
            console.error('ID property is required to register to tab events');
        }
    };
    react_1.useEffect(() => {
        if (props.onBeforeShow) {
            validateIdProp();
            UIkit.util.on(props.id, 'beforeshow', () => {
                console.log('eventFired');
                props.onBeforeShow();
            });
        }
        if (props.onShow) {
            validateIdProp();
            UIkit.util.on(props.id, 'show', props.onShow);
        }
        if (props.onShown) {
            validateIdProp();
            UIkit.util.on(props.id, 'shown', props.onShown);
        }
        if (props.onBeforeHide) {
            validateIdProp();
            UIkit.util.on(props.id, 'beforehide', props.onBeforeHide);
        }
        if (props.onHide) {
            validateIdProp();
            UIkit.util.on(props.id, 'hide', props.onHide);
        }
        if (props.onHidden) {
            validateIdProp();
            UIkit.util.on(props.id, 'hidden', props.onHidden);
        }
    }, []);
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: set_class_names_1.setClassNames(props) },
        react_1.default.createElement("ul", { "uk-tab": props.options ? props.options : '' }, renderChildren('tab')),
        react_1.default.createElement("ul", { id: props.id ? props.id : '', className: "uk-switcher" }, renderChildren('tab-content'))));
}
exports.TabContainer = TabContainer;
exports.default = TabContainer;
