import React from 'react';

export default class TabMenu extends React.Component {
    clickHandler = () => {
        console.log("hello")
    }
    render() {
        return (
            <div className="wrapper">
                <ul className="tabs">
                    <li onClick={this.clickHandler}>1</li>
                    <li onClick={this.clickHandler}>2</li>
                    <li onClick={this.clickHandler}>3</li>
                </ul>
                <div className="Tab-contents">

                </div>
            </div>
        )
    }
}