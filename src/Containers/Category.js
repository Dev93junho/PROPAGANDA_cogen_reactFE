import React, { Component } from 'react';
import { CategoryData } from "./CategoryData";
import "./css/CategoryMenu.css"

class Category extends Component {
    render() {
        return (
        <div className="btn-category">
            <button>{this.props.tabs.map(tab => {
                const active = (tab === this.props.selected ? 'active' : '');

                return (
                    <li className="category-title" key={ tab }>
                        <a className={ "category-link" + active } onClick={ () => this.props.setSelected(tab)}>
                            { tab }

                        </a>
                    </li>

                );
            })}</button>
        </div>
      );
    }
}

export default Category;