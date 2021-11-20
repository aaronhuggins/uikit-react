"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableData = void 0;
const react_1 = require("react");
const classnames_1 = require("classnames");
const set_class_names_1 = require("../../utils/set-class-names");
function TableData(props) {
    const _setClassNames = () => {
        if (props.shrink && props.expand) {
            console.error('Please use only one width modfier on table components');
        }
        else if (props.expand && props.width) {
            console.error('Please use only one width modfier on table components');
        }
        else if (props.shrink && props.width) {
            console.error('Please use only one width modfier on table components');
        }
        else {
            const isWidth = props.width ? true : false;
            return classnames_1.default({
                [`uk-table-expand`]: props.expand,
                [`uk-table-shrink`]: props.shrink,
                [`uk-table-${props.width}`]: isWidth,
                [`${set_class_names_1.setClassNames(props)}`]: true,
            });
        }
    };
    return (react_1.default.createElement("td", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}
exports.TableData = TableData;
exports.default = TableData;
