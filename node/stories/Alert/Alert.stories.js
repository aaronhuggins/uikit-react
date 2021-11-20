"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Closable = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
require("./alert.scss");
const Alert_1 = require("../../components/Alert/Alert");
exports.default = {
    title: 'Example/Alert',
    component: Alert_1.Alert,
};
const Template = args => react_1.default.createElement(Alert_1.Alert, Object.assign({}, args));
const content = 'Lorem Ipsum';
exports.Default = Template.bind({});
exports.Default.args = {
    content,
};
exports.Closable = Template.bind({});
exports.Closable.args = {
    content,
    isClosable: true,
};
// export const ExpandMultiple = Template.bind({})
// ExpandMultiple.args = {
//     options: 'multiple: true'
// }
