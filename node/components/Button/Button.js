"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function Button(props) {
    const isLink = () => {
        return !!props.href;
    };
    const _setClassNames = () => {
        return classnames_1.default('uk-button', {
            [`uk-button-default`]: !props.color,
            [`uk-button-${props.color}`]: !!props.color,
            [`uk-button-${props.size}`]: !!props.size,
            [`${set_class_names_1.setClassNames(props)}`]: true,
        });
    };
    return isLink() ? (react_1.default.createElement("a", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-toggle": props.toggleOptions, href: props.href, onClick: props.onClick, className: _setClassNames() }, props.children)) : (react_1.default.createElement("button", { id: props.id ? props.id : null, style: props.style ? props.style : null, "data-uk-toggle": props.toggleOptions, onClick: props.onClick, className: _setClassNames() }, props.children));
}
exports.Button = Button;
// export class Button extends React.Component<ButtonProps, any> {
//   render() {
//     return this.isLink() ? (
//       <a
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         data-uk-toggle={this.props.toggleOptions}
//         href={this.props.href}
//         onClick={this.props.onClick}
//         className={this.setClassNames()}
//       >
//         {this.props.children}
//       </a>
//     ) : (
//       <button
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         data-uk-toggle={this.props.toggleOptions}
//         onClick={this.props.onClick}
//         className={this.setClassNames()}
//       >
//         {this.props.children}
//       </button>
//     )
//   }
//   private isLink(): boolean {
//     return !!this.props.href
//   }
//   private setClassNames(): string {
//     return classNames('uk-button', {
//       [`uk-button-default`]: !this.props.color,
//       [`uk-button-${this.props.color}`]: !!this.props.color,
//       [`uk-button-${this.props.size}`]: !!this.props.size,
//       [`${setClassNames(this.props)}`]: true,
//     })
//   }
// }
exports.default = Button;
