import React from "react";
import getArticle from "../api/getArticle";

/*
Instructions: 

"getArticle" is a function that returns a promise that resolves to an array containing content for an article.

Each of these content elements are of type "header" or "text".  Build a simple view that shows these content elements
using markup that is as semantic as possible.

Try to break components up into small, atomic pieces.

Start simple. Just render the elements with little or no style and iterate!
*/

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleContent: []
    };
  }
  componentDidMount() {
    // HINT: something needs to go here!
  }
  render() {
    return (
      <React.Fragment>
        {/* HINT: something needs to go here!! */}
      </React.Fragment>
    );
  }
}

export default Article;
