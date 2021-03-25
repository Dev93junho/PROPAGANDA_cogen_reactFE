/*Docu: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/quick-start.html*/
import React from 'react';


class Article extends React.Component {
    render() {
        return (
            <div id="article">
                <div className="editoolbar"></div>
                <div className="editor"></div>
            </div>

        );
    }
}

export default Article;