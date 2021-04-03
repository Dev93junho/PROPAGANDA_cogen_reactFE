import React from 'react';
import "./css/sidebar.css";


function toggleMenu(){
  let sidebar = document.querySelector('.sidebar');
  let toggle = document.querySelector('#btn-sidebar');
  sidebar.classList.toggle('active');
  toggle.classList.toggle('active');
}



function Sidebar() {
 
    return (
      <toggleMenu>
      <div className="sidebar">
      <div className="tabList">
               {/* default checked to activity tab */}
              <input type="radio" name="tabmenu" id="tab01" checked />
              <label for="tab01">activity</label>

              <input type="radio" name="tabmenu" id="tab02" />
              <label for="tab02">feed</label>

              <div className="conbox con1">
                <div className="head-row" style={{display: "flex", justifyContent: "space-between", padding: "15px", alignItems: "center;"}}>
                  <span>최근 본 글</span>
                  <span style={{fontSize: "8px", color: "#fff"}}>더보기</span>
                </div>
                <div className="contents-wrap">
                  <span>
                  </span>
                </div>
              </div>
              <div className="conbox con2">02</div>
            </div>
            </div>
            </toggleMenu>
    );
  }

export default Sidebar;

