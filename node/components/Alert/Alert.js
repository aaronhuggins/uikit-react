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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const set_class_names_1 = require("../../utils/set-class-names");
const UIkit = require('uikit');
function Alert(props) {
    let durationTimeout;
    let leaveTimeout;
    const alertRef = react_1.createRef();
    const [state, setState] = react_1.useState({
        isOpen: true,
        isClosed: false,
        component: null,
    });
    const handleClose = () => {
        setState({ ...state, isOpen: false });
        if (props.onBeforeHide)
            props.onBeforeHide();
        leaveTimeout = setTimeout(() => {
            setState({ ...state, isClosed: true });
            if (props.onHide)
                props.onHide();
        }, 505);
    };
    const _setClassNames = () => {
        return classnames_1.default('uk-alert', {
            [`uk-alert-${props.color}`]: !!props.color,
            [set_class_names_1.setClassNames(props)]: true,
        });
    };
    react_1.useEffect(() => {
        setState({ ...state, component: alertRef.current });
        if (props.duration) {
            durationTimeout = setTimeout(() => {
                handleClose();
            }, props.duration);
        }
        return () => {
            if (leaveTimeout)
                clearTimeout(leaveTimeout);
            if (durationTimeout)
                clearTimeout(durationTimeout);
        };
    }, []);
    if (state.isClosed)
        return null;
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, className: _setClassNames(), style: {
            overflow: 'hidden',
            transform: !state.isOpen ? 'scaleY(0)' : 'scaleY(100px)',
            transition: 'transform 0.5s ease-out, opacity 0.3s ease-out',
            maxHeight: 'auto',
            opacity: !state.isOpen ? '0' : '1',
            ...props.style,
        } },
        props.isClosable ? react_1.default.createElement("a", { className: "uk-alert-close", "uk-close": true, onClick: handleClose }) : null,
        react_1.default.createElement("span", null, props.content)));
}
exports.Alert = Alert;
// export class Alert extends React.Component<AlertProps, any> {
//   durationTimeout
//   leaveTimeout
//   constructor(props) {
//     super(props)
//     this.state = {
//       isOpen: true,
//       isClosed: false,
//     }
//   }
//   componentDidMount() {
//     if (this.props.duration) {
//       this.durationTimeout = setTimeout(() => {
//         this.handleClose()
//       }, this.props.duration)
//     }
//   }
//   componentWillUnmount() {
//     if (this.leaveTimeout) clearTimeout(this.leaveTimeout)
//     if (this.durationTimeout) clearTimeout(this.durationTimeout)
//   }
//   render() {
//     if (this.state.isClosed) return false
//     return (
//       <div
//         id={this.props.id ? this.props.id : null}
//         className={this.setClassNames()}
//         style={{
//           overflow: 'hidden',
//           transition: 'height 0.5s ease-in-out, opacity 0.3s ease-in-out',
//           height: !this.state.isOpen ? 0 : 'auto',
//           opacity: !this.state.isOpen ? 0 : 1,
//           ...this.props.style,
//         }}
//       >
//         {this.props.isClosable ? (
//           <a className="uk-alert-close" onClick={this.handleClose.bind(this)}>
//             <Icon options="close" />
//           </a>
//         ) : null}
//         <span>{this.props.content}</span>
//       </div>
//     )
//   }
//   private handleClose() {
//     this.setState(
//       {
//         isOpen: false,
//       },
//       () => {
//         if (this.props.onBeforeHide) this.props.onBeforeHide()
//         this.leaveTimeout = setTimeout(() => {
//           this.setState({ isClosed: true })
//           if (this.props.onHide) this.props.onHide()
//         }, 505)
//       },
//     )
//   }
//   private setClassNames(): string {
//     return classNames('uk-alert', {
//       [`uk-alert-${this.props.color}`]: !!this.props.color,
//       [setClassNames(this.props)]: true,
//     })
//   }
// }
