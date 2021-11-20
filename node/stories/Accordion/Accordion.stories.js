"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandMultiple = exports.DisableCollapse = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
require("./accordion.scss");
const Accordion_1 = require("../../components/Accordion");
exports.default = {
    title: 'Example/Accordion',
    component: Accordion_1.Accordion,
};
const Template = args => (react_1.default.createElement(Accordion_1.Accordion, Object.assign({}, args),
    react_1.default.createElement(Accordion_1.AccordionItem, { title: "Item 1" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    react_1.default.createElement(Accordion_1.AccordionItem, { title: "Item 2" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    react_1.default.createElement(Accordion_1.AccordionItem, { title: "Item 3" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
exports.Default = Template.bind({});
exports.DisableCollapse = Template.bind({});
exports.DisableCollapse.args = {
    options: 'collapsible: false',
};
exports.ExpandMultiple = Template.bind({});
exports.ExpandMultiple.args = {
    options: 'multiple: true',
};
