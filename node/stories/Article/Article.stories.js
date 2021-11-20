"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
require("./article.scss");
const Article_1 = require("../../components/Article/Article");
exports.default = {
    title: 'Example/Article',
    component: Article_1.Article,
};
const Template = args => (react_1.default.createElement(Article_1.Article, Object.assign({}, args), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
const title = 'Lorem Ipsum';
const meta = 'Dolor Sit';
const lead = 'magna aliqua';
exports.Default = Template.bind({});
exports.Default.args = {
    title,
    meta,
    lead,
};
