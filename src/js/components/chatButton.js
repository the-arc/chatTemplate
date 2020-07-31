import React    from "react";
import $        from "jQuery";
import styles   from "./scss/chatButton.scss";

$(function(){

});

export default class ChatButton extends React.Component {
    render(){
        return (
            <input type='button' id="chat-button" onClick={this.onClick.bind(this)} value='chat'/>
        );
    }

    onClick () {
        this.props.onClickChatButton(true);
    }
}
