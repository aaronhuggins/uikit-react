"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Breadcrumb(props) {
    return (react_1.default.createElement("ul", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-breadcrumb ${set_class_names_1.setClassNames(props)}` }, props.children));
}
exports.Breadcrumb = Breadcrumb;
// export class Breadcrumb extends React.Component<BreadcrumbProps, any> {
//   render() {
//     return (
//       <ul
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         className={`uk-breadcrumb ${setClassNames(this.props)}`}
//       >
//         {this.props.children}
//       </ul>
//     )
//   }
// }
exports.default = Breadcrumb;
