"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarSticky = void 0;
const react_1 = require("react");
const set_class_names_1 = require("../../utils/set-class-names");
function NavbarSticky(props) {
    const validateIdProp = () => {
        if (!props.id) {
            console.error('ID property is required to register to Navbar Sticky events');
        }
    };
    react_1.useEffect(() => {
        if (props.onActive) {
            validateIdProp();
            UIkit.util.on(props.id, 'active', props.onActive);
        }
        if (props.onInactive) {
            validateIdProp();
            UIkit.util.on(props.id, 'active', props.onInactive);
        }
    }, []);
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}`, "data-uk-sticky": `
                sel-target: .uk-navbar-container;
                cls-active: uk-navbar-sticky;
                ${props.options ? props.options : ''}
            ` }, props.children));
}
exports.NavbarSticky = NavbarSticky;
