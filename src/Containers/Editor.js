/*Docu: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/quick-start.html*/
import React from 'react';
import "./css/article.css"

class Article extends React.Component {
    render() {
        return (
            <div>
            <div className="article">
                <div className="seriesGraph">
                </div>
                <div className="editoolbar">
                    <div className="upper">
                        아이콘 1
                    </div>
                    <div className="below">
                        툴바 들어갈자리 
                    </div>
                </div>
                <form className="editor">
                    <span className="date"></span>
                    <span>뒤로가기</span>
                    <span>주제를 입력하세요</span>
                    <div className="middleRow">
                        <input placeholder="제목을 입력하세요"/>
                        <span>user</span>
                    </div>
                    <input placeholder="[부제목을 입력하세요]" />
                    <textarea placeholder="내용을 입력하세요" />
                </form>
            </div>
            </div>

        );
    }
}

export default Article;