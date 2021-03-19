import React, { Component } from 'react';
import "./css/sidebar.css"


class Sidebar extends Component {
    render(){
        return(
            <div class="sidebar">
                <div class="tabList">

                    <input type="radio" name="tabmenu" id="tab01" checked></input>
                    <label for="tab01">activity</label>

                    <input type="radio" name="tabmenu" id="tab02"></input>
                    <label for="tab02">feed</label>

                    <div class="conbox con1">
                        <div class="head-row" style="display: flex; justify-content: space-between; padding: 15px; align-items: center;">
                            <span>최근 본 글</span>
                            <span style="font-size: 8px; color: #fff"><a>더보기</a></span>
                        </div>
                        <div class="contents-wrap">
                            <span>
                            </span>
                        </div>
                    </div>
                    <div class="conbox con2">02</div>

                </div>
            </div>
        );
    }
}

export default Sidebar;