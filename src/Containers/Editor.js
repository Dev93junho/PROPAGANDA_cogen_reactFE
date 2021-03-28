/*Docu: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/quick-start.html*/
import React from 'react';
import "./css/article.css"

class Article extends React.Component {
    render() {
        return (
            <div className="article">
                <div className="seriesGraph">
                </div>
                <div className="editoolbar">
                    <div className="upper">
                     
                    </div>
                    <div className="below"></div>
                </div>
                <form className="editor">
                    <input />

                </form>
            </div>

        );
    }
}

export default Article;