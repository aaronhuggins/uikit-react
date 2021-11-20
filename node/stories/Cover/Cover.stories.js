"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = require("react");
require("./cover.scss");
const Cover_1 = require("../../components/Cover/Cover");
exports.default = {
    title: 'Example/Cover',
    component: Cover_1.Cover,
};
const Template = args => (react_1.default.createElement(Cover_1.Cover, Object.assign({}, args),
    react_1.default.createElement("div", null)));
exports.Default = Template.bind({});
