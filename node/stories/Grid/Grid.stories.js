"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = exports.Divider = exports.GutterCollapse = exports.GutterLarge = exports.GutterMedium = exports.GutterSmall = exports.Default = void 0;
const react_1 = require("react");
require("./grid.scss");
const Card_1 = require("../../components/Card/Card");
const CardBody_1 = require("../../components/Card/CardBody");
const Grid_1 = require("../../components/Grid/Grid");
const Section_1 = require("../../components/Section/Section");
exports.default = {
    title: 'Example/Grid',
    component: Grid_1.Grid,
};
const Template = args => (react_1.default.createElement(Grid_1.Grid, Object.assign({}, args),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 1"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 2"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 3")))));
const DividerTemplate = args => (react_1.default.createElement(Grid_1.Grid, Object.assign({}, args),
    react_1.default.createElement(Section_1.Section, null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 1"))),
    react_1.default.createElement(Section_1.Section, null,
        react_1.default.createElement("h3", null, "Heading"),
        react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))));
exports.Default = Template.bind({});
exports.GutterSmall = Template.bind({});
exports.GutterMedium = Template.bind({});
exports.GutterLarge = Template.bind({});
exports.GutterCollapse = Template.bind({});
exports.Divider = DividerTemplate.bind({});
exports.Match = DividerTemplate.bind({});
exports.GutterSmall.args = { gutter: 'small' };
exports.GutterMedium.args = { gutter: 'medium' };
exports.GutterLarge.args = { gutter: 'large' };
exports.GutterCollapse.args = { gutter: 'collapse' };
exports.Divider.args = { divider: true };
exports.Match.args = { match: true };
