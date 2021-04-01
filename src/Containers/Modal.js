import React from 'react';
import "./css/Modal.css";

function newPopupToggle(){
    let newPopup = document.querySelector('.newPopup');
    let toggle = document.querySelector('.bell');
    newPopup.classList.toggle('active');
    toggle.classList.toggle('active');
}

export default class Modal extends React.Component {
    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;

        return (
            <div className={ open ? 'openModal modal': 'modal' }>
                { open ? (  
                    <section>
                        <header>
                            { header }
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                            {this.props.children}
                        </main>
                        <footer>
                            <button className="close" onClick={close}> close </button>
                        </footer>
                    </section>
                ) : null }
            </div>
        )
    }
}
