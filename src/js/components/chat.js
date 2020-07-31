import React        from "react";
import $            from "jQuery";
import ChatHeader   from "./chatComponents/header";
import ChatBody     from "./chatComponents/body";
import ChatSend     from "./chatComponents/send";

$(function(){

});

export default class Chat extends React.Component {
    render(){
        return (
            <div id="chat" style={{ display: this.props.data ? '' : 'none' }}>
                <ChatHeader />
                <ChatBody />
                <ChatSend />
            </div>
        );
    }

}
/*

*/