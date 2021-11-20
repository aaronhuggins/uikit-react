"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
require("./button.scss");
const Button_1 = require("../../components/Button/Button");
exports.default = {
    title: 'Example/Button',
    component: Button_1.Button,
};
const Template = args => react_1.default.createElement(Button_1.Button, Object.assign({}, args), "Hello!");
const ColorsTemplate = args => (react_1.default.createElement("div", null,
    react_1.default.createElement(Button_1.Button, Object.assign({}, args[0]), "Hello!"),
    react_1.default.createElement(Button_1.Button, Object.assign({}, args[1]), "Hello!"),
    react_1.default.createElement(Button_1.Button, Object.assign({}, args[2]), "Hello!"),
    react_1.default.createElement(Button_1.Button, Object.assign({}, args[3]), "Hello!"),
    react_1.default.createElement(Button_1.Button, Object.assign({}, args[4]), "Hello!")));
exports.Default = Template.bind({});
exports.Colors = ColorsTemplate.bind({});
exports.Colors.args = [
    { color: 'primary' },
    { color: 'secondary' },
    { color: 'danger' },
    { color: 'text' },
    { color: 'link' },
];
