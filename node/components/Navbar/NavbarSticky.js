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
exports.NavbarSticky = void 0;
const react_1 = __importStar(require("react"));
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
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `${set_class_names_1.setClassNames(props)}`, "uk-sticky": `
                sel-target: .uk-navbar-container;
                cls-active: uk-navbar-sticky;
                ${props.options ? props.options : ''}
            ` }, props.children));
}
exports.NavbarSticky = NavbarSticky;
