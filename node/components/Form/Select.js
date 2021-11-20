"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const classNames = classnames_1.default;
const set_class_names_1 = require("../../utils/set-class-names");
class Select extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("select", { id: this.props.id, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), value: this.props.value, onChange: this.props.onChange }, this.props.children));
    }
    setClassNames() {
        return classNames({
            [`uk-select`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${set_class_names_1.setClassNames(this.props)}`]: true,
        });
    }
}
exports.Select = Select;
