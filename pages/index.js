import React from "react";
import Nav from "../components/nav";
import getArticle from "../api/getArticle";

/*
Instructions: 

getArticle is a function that returns a promise that resolves to an array containing content elements!

all of these content elements are of type text.  Build a simple view that shows these context elements
using markup that is as semantic as possible.

Start simple. just render the elements with little or no style and iterate!
*/

import "@washingtonpost/site-components/css/index.css";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleContent: null
    };
  }
  componentDidMount() {
    // HINT: something needs to go here!
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        {/* HINT: something needs to go here!! */}
      </React.Fragment>
    );
    // Render something!!
  }
}

export default Article;
