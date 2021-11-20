"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Click = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
require("./dropdown.scss");
const Button_1 = require("../../components/Button/Button");
const Container_1 = require("../../components/Container/Container");
const Dropdown_1 = require("../../components/Dropdown/Dropdown");
exports.default = {
    title: 'Example/Dropdown',
    component: Dropdown_1.Dropdown,
};
const Template = args => (react_1.default.createElement(Container_1.Container, null,
    react_1.default.createElement(Button_1.Button, null, "Dropdown"),
    react_1.default.createElement(Dropdown_1.Dropdown, Object.assign({}, args), "Just look at that!")));
exports.Default = Template.bind({});
exports.Click = Template.bind({});
exports.Click.args = { options: 'mode: click' };
