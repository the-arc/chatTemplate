import React    from "react";
import ReactDOM from "react-dom";
import ChatButton from "./components/chatButton";
import Chat from "./components/chat";

class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state = { 
            showChat: false //chat画面の表示の処理
        }
    }
    render(){
        return (
            <div>
                <ChatButton onClickChatButton={this.showChat.bind(this)}/>
                <Chat data={this.state.showChat}/>
            </div>
        );
    }

    //ChatButtonが押された場合showChat:trueにします
    showChat (data) { 
        this.setState({ showChat: data }) 
    }
}

const body = document.body;
ReactDOM.render(<Layout/>, body);