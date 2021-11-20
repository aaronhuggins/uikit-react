"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Legend = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const classNames = classnames_1.default;
const set_class_names_1 = require("../../utils/set-class-names");
class Legend extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("legend", { id: this.props.id ? this.props.id : null, style: this.props.style ? this.props.style : null, className: this.setClassNames() }, this.props.children));
    }
    setClassNames() {
        return classNames({
            [`uk-legend`]: true,
            [`${set_class_names_1.setClassNames(this.props)}`]: true,
        });
    }
}
exports.Legend = Legend;
