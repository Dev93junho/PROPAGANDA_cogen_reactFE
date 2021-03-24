import React from 'react';
import { CategoryData } from "./CategoryData";
import "./css/CategoryMenu.css"


class Category extends React.Component {
    state = {clicked : false}

    handleClick = () => {
        this.setState({clicked: this.state.clicked})
    }
    render() {
        return (
            <ul className={this.state.clicked ? 'Category active' : 'Category'}>
            {CategoryData.map((item, index) =>{
                return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                        {item.title}
                        </a>
                        <p>Headline</p>
                        <p>Headline</p>
                    </li>
                )
            })}
        </ul>
      );
    }
}

export default Category;