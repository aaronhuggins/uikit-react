"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const set_class_names_1 = require("../../utils/set-class-names");
function TableHeader(props) {
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
            return classnames_1.default({
                [`uk-table-expand`]: props.expand,
                [`uk-table-shrink`]: props.shrink,
                [`uk-table-${props.width}`]: !!props.width,
                [`${set_class_names_1.setClassNames(props)}`]: true,
            });
        }
    };
    return (react_1.default.createElement("th", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: _setClassNames() }, props.children));
}
exports.TableHeader = TableHeader;
exports.default = TableHeader;
