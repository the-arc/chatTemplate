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
            qna: {
                question:[],
                answer:[]
            }
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
                      qna={this.state.qna}
                />
            </div>
        );
    }

    //ChatButtonが押された場合showChat:trueにします
    showChat (data) { 
        this.setState({ showChat: data });
    }
    //テキスト送信ボタンが押された場合の処理
    onClickSend(data){
        let newQna = this.state.qna;
        newQna.question.push(data);
        //newQna.answer.push(null);
        newQna.answer.splice(newQna.answer.length, 0, config.submit(data));
        this.setState({ qna: newQna });
    }
}

const body = document.body;
ReactDOM.render(<Layout/>, body);