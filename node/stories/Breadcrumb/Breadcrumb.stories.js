"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
require("./breadcrumb.scss");
const Breadcrumb_1 = require("../../components/Breadcrumb/Breadcrumb");
const Link_1 = require("../../components/Link/Link");
exports.default = {
    title: 'Example/Breadcrumb',
    component: Breadcrumb_1.Breadcrumb,
};
const Template = args => (react_1.default.createElement(Breadcrumb_1.Breadcrumb, Object.assign({}, args),
    react_1.default.createElement(Link_1.Link, { href: "#" }, "Test"),
    react_1.default.createElement(Link_1.Link, { href: "#" }, "Test"),
    react_1.default.createElement(Link_1.Link, { href: "#" }, "Test")));
exports.Default = Template.bind({});
