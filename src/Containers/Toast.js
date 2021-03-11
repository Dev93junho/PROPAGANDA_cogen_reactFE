import React, { Container } from 'react';
import "./css/toast.css"


class Toast extends Container {
    render(){
        return(
            <div class="toast" role="alert" aria-live="control" aria-atomic="true" style="background: #575757; width: 362px; height: 76px; top: 90%; left: 90%;">
		
            <div class="toast-body" style="color: white; vertical-align: middle; display: flex;">
             <strong>예시용 메세지</strong>
                <a href="#" style="color:#FF9C41 "> 되돌리기 </a>
                <a href="#" style="color:#FF9C41 "> 보러가기 </a>
                <a href="#" style="color:#FF9C41 "> 삭제하기 </a>
                <a href="#" style="color:#FF9C41 "> 추가하기 </a>	
            </div>
          </div>

        )
    }

}

export default Toast