"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const react_1 = require("react");
const set_class_names_1 = require("../../utils/set-class-names");
function Badge(props) {
    return (react_1.default.createElement("span", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `uk-badge ${set_class_names_1.setClassNames(props)}` }, props.count));
}
exports.Badge = Badge;
// export class Badge extends React.Component<BadgeProps, any> {
//   render() {
//     return (
//       <span
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         className={`uk-badge ${setClassNames(this.props)}`}
//       >
//         {this.props.count}
//       </span>
//     )
//   }
// }
exports.default = Badge;
