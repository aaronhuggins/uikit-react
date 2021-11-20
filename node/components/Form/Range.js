"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const classNames = classnames_1.default;
const set_class_names_1 = require("../../utils/set-class-names");
class Range extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("input", { id: this.props.id, placeholder: this.props.placeholder ? this.props.placeholder : null, style: this.props.style ? this.props.style : null, className: this.setClassNames(), type: "range", name: this.props.name ? this.props.name : null, value: this.props.value, min: this.props.min, max: this.props.max, step: this.props.step, onChange: this.props.onChange, onBlur: this.props.onBlur, onFocus: this.props.onFocus }));
    }
    setClassNames() {
        return classNames({
            [`uk-range`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout,
            [`${set_class_names_1.setClassNames(this.props)}`]: true,
        });
    }
}
exports.Range = Range;
