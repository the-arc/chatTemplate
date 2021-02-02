import React    from "react";
import $        from "jQuery";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './chatButton.scss';

$(function(){

});

export default class ChatButton extends React.Component {
    render(){
        return (
            <button id="chat-button" 
                    onClick={this.onClick.bind(this)} 
                    style={{
                        display: this.props.data ? 'none' : ''
                        }}>
                        <i class="fas fa-comment fa-2x"></i>
            </button>
        );
    }

    onClick () {
        this.props.onClickChatButton(true);
    }
}
