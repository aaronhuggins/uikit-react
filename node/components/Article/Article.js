"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const react_1 = __importDefault(require("react"));
const set_class_names_1 = require("../../utils/set-class-names");
function Article(props) {
    return (react_1.default.createElement("article", { id: props.id ? props.id : null, style: props.style ? props.style : null, className: `
                  uk-article
                  ${set_class_names_1.setClassNames(props)}
              ` },
        react_1.default.createElement("h1", { className: "uk-article-title" }, props.title),
        props.meta ? react_1.default.createElement("p", { className: "uk-article-meta" }, props.meta) : '',
        props.lead ? react_1.default.createElement("p", { className: "uk-text-lead" }, props.lead) : '',
        react_1.default.createElement("div", null, props.children)));
}
exports.Article = Article;
// export class Article extends React.Component<ArticleProps, any> {
//   render() {
//     return (
//       <article
//         id={this.props.id ? this.props.id : null}
//         style={this.props.style ? this.props.style : null}
//         className={`
//                     uk-article
//                     ${setClassNames(this.props)}
//                 `}
//       >
//         <h1 className="uk-article-title">{this.props.title}</h1>
//         {this.props.meta ? <p className="uk-article-meta">{this.props.meta}</p> : ''}
//         {this.props.lead ? <p className="uk-text-lead">{this.props.lead}</p> : ''}
//         <div>{this.props.children}</div>
//       </article>
//     )
//   }
// }
exports.default = Article;
