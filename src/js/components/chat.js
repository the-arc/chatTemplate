import React        from "react";
import $            from "jQuery";
import ChatHeader   from "./chatComponents/header";
import ChatBody     from "./chatComponents/body";
import ChatSend     from "./chatComponents/send";
import './chat.scss';

$(function(){

});

export default class Chat extends React.Component {
    render(){
        return (
            <div id="chat" style={{
                display: this.props.data ? '' : 'none' 
            }}>
                <ChatHeader onClick={this.onClick.bind(this)}/>
                <ChatBody firstComment={this.props.firstComment}
                          qna={this.props.qna}/>
                <ChatSend onClickSend={this.onClickSend.bind(this)}/>
            </div>
        );
    }
    onClick (data) {
        this.props.onClickChatButton(data);
    }
    onClickSend(data){
        this.props.onClickSend(data);
    }
}