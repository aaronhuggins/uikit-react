"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Card(props) {
    const _setClassNames = () => {
        return classnames_1.default('uk-card', {
            [`uk-card-default`]: !props.color,
            [`uk-card-${props.color}`]: !!props.color,
            [`uk-card-hover`]: props.hover,
            [`uk-card-${props.size}`]: !!props.size,
            [set_class_names_1.setClassNames(props)]: true,
        });
    };
    return (react_1.default.createElement("div", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}
exports.Card = Card;
exports.default = Card;
// export class Card extends React.Component<CardProps, any> {
//   render() {
//     return (
//       <div
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         className={this.setClassNames()}
//       >
//         {this.props.children}
//       </div>
//     )
//   }
//   private setClassNames(): string {
//     return classNames('uk-card', {
//       [`uk-card-default`]: !this.props.color,
//       [`uk-card-${this.props.color}`]: !!this.props.color,
//       [`uk-card-hover`]: this.props.hover,
//       [`uk-card-${this.props.size}`]: !!this.props.size,
//       [setClassNames(this.props)]: true,
//     })
//   }
// }
