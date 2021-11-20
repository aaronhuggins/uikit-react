"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrap = exports.RowColumn = exports.ReverseColumn = exports.Column = exports.Right = exports.Center = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
require("./flex.scss");
const Flex_1 = require("../../components/Flex/Flex");
const Card_1 = require("../../components/Card/Card");
const CardBody_1 = require("../../components/Card/CardBody");
exports.default = {
    title: 'Example/Flex',
    component: Flex_1.Flex,
};
const Template = args => (react_1.default.createElement(Flex_1.Flex, Object.assign({}, args),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 1"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 2"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 3")))));
const WrapTemplate = args => (react_1.default.createElement(Flex_1.Flex, Object.assign({}, args),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 1"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 2"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "item 3"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, null,
            react_1.default.createElement(CardBody_1.CardBody, null, "This large item makes the Flex wrap"))),
    react_1.default.createElement("div", null,
        react_1.default.createElement(Card_1.Card, { color: "default uk-margin-right uk-margin-top" },
            react_1.default.createElement(CardBody_1.CardBody, null, "Item Added to the next row")))));
exports.Default = Template.bind({});
exports.Center = Template.bind({});
exports.Right = Template.bind({});
exports.Column = Template.bind({});
exports.ReverseColumn = Template.bind({});
exports.RowColumn = Template.bind({});
exports.Wrap = WrapTemplate.bind({});
exports.Center.args = { alignment: 'center' };
exports.Right.args = { alignment: 'right' };
exports.Column.args = { direction: 'column' };
exports.ReverseColumn.args = { direction: 'column-reverse' };
exports.RowColumn.args = { direction: 'row-reverse' };
exports.Wrap.args = { wrap: 'wrap' };
