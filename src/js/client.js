import React    from "react";
import ReactDOM from "react-dom";
import ChatButton from "./components/chatButton";
import Chat from "./components/chat";

var config = require("./config");

class Layout extends React.Component {
    constructor (props) {
        config = new config();
        super(props);
        this.state = { 
            showChat: false, //chat画面の表示の処理
            comment: config.firstComment(), //start時のbotコメント
            answer: "" //回答取得時のテキスト
        }
    }
    render(){
        return (
            <div>
                <ChatButton onClickChatButton={this.showChat.bind(this)} data={this.state.showChat}/>
                <Chat onClickChatButton={this.showChat.bind(this)} 
                      onClickSend={this.onClickSend.bind(this)} 
                      data={this.state.showChat} 
                      firstComment={this.state.comment}
                      answer={this.state.answer}
                />
            </div>
        );
    }

    //ChatButtonが押された場合showChat:trueにします
    showChat (data) { 
        this.setState({ showChat: data });
    }
    onClickSend(data){
        this.setState({ answer: config.submit(data) });
    }
}

const body = document.body;
ReactDOM.render(<Layout/>, body);