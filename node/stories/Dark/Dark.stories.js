"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = require("react");
require("./dark.scss");
const Button_1 = require("../../components/Button/Button");
const Section_1 = require("../../components/Section/Section");
const Dark_1 = require("../../components/Dark/Dark");
exports.default = {
    title: 'Example/Dark',
    component: Dark_1.Dark,
};
const Template = args => (react_1.default.createElement(Section_1.Section, { className: "uk-background-muted" },
    react_1.default.createElement(Dark_1.Dark, Object.assign({}, args),
        react_1.default.createElement(Button_1.Button, { color: "primary" }, "Makes contents appear darker on light backgrounds"),
        react_1.default.createElement("span", null, "Look at me! I look so good :)"))));
exports.Default = Template.bind({});
