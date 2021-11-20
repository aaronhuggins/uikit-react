"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = require("react");
require("./badge.scss");
const Badge_1 = require("../../components/Badge/Badge");
exports.default = {
    title: 'Example/Badge',
    component: Badge_1.Badge,
};
const Template = args => react_1.default.createElement(Badge_1.Badge, Object.assign({}, args));
const count = 10;
exports.Default = Template.bind({});
exports.Default.args = {
    count,
};
