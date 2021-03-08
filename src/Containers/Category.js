import React, { Container } from 'react';
import "../Btn-category.css"

class Category extends Container {
    render() {
        return (

        <div className="category">
            <ul className="btnContainers">
                {
                    this.props.tabs.map(tab => {
                        const active = (tab === this.props.selectec? 'active ' :)
                    } )
                }
                <button onclick="showPanel(0, 'topPost.html')"><li><span style="color: #F67600">Top Post</span></li></button>
                <button onclick="showPanel(0, 'write.html')"><li><span style="color: #6200CE">Subject</span></li></button>
                <button onclick="showPanel(0, '')"><li><span style="color: #6200CE">#tag</span></li></button>
                <button onclick="showPanel(0, '')"><li><span style="color: #00B796">Series</span></li></button>
                <button onclick="showPanel(0, '#000000')"><li><span style="color: #000000">User</span></li></button>
            </ul>
            { this.props.children }
         </div>
      );
    }
}

export default Category;