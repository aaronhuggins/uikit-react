"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const classNames = classnames_1.default;
const set_class_names_1 = require("../../utils/set-class-names");
class Textarea extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("textarea", { id: this.props.id ? this.props.id : null, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), name: this.props.name ? this.props.name : null, onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus }, this.props.children));
    }
    setClassNames() {
        return classNames({
            [`uk-textarea`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${set_class_names_1.setClassNames(this.props)}`]: true,
        });
    }
}
exports.Textarea = Textarea;
