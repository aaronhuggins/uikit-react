"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.Hover = exports.Default = void 0;
const react_1 = require("react");
require("./card.scss");
const Card_1 = require("../../components/Card");
exports.default = {
    title: 'Example/Card',
    component: Card_1.Card,
};
const Template = args => (react_1.default.createElement(Card_1.Card, Object.assign({}, args),
    react_1.default.createElement(Card_1.CardHeader, null, "Card Header"),
    react_1.default.createElement(Card_1.CardBody, null, "Lorem Ipsum dolor sit amet!"),
    react_1.default.createElement(Card_1.CardFooter, null, "Card Footer")));
const ColorsTemplate = args => (react_1.default.createElement("div", null,
    react_1.default.createElement(Card_1.Card, Object.assign({}, args[0]),
        react_1.default.createElement(Card_1.CardHeader, null, "Card Header"),
        react_1.default.createElement(Card_1.CardBody, null, "Lorem Ipsum dolor sit amet!"),
        react_1.default.createElement(Card_1.CardFooter, null, "Card Footer")),
    react_1.default.createElement(Card_1.Card, Object.assign({}, args[1]),
        react_1.default.createElement(Card_1.CardHeader, null, "Card Header"),
        react_1.default.createElement(Card_1.CardBody, null, "Lorem Ipsum dolor sit amet!"),
        react_1.default.createElement(Card_1.CardFooter, null, "Card Footer"))));
exports.Default = Template.bind({});
exports.Hover = Template.bind({});
exports.Hover.args = { hover: true };
exports.Colors = ColorsTemplate.bind({});
exports.Colors.args = [{ color: 'primary' }, { color: 'secondary' }];
