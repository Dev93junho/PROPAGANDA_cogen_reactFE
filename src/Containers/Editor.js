/*Docu: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/quick-start.html*/
import React from 'react';
import "./css/article.css"

class Article extends React.Component {
    render() {
        return (
            <div className="article">
                <div className="seriesGraph">
                    <img src={require('./css/icon/Series_graph_example.png')} />
                </div>
                <div className="editoolbar">
                    <div className="upper">
                     
                    </div>
                    <div className="below"></div>
                </div>
                <form className="editor">

                </form>
            </div>

        );
    }
}

export default Article;