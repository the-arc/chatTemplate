import React    from "react";
import $        from "jQuery";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './send.scss';

$(function(){
    $('#sendButton')
});

export default class Chat extends React.Component {
    render(){
        return (
            <div id="chatSend">
                <input type="text" id="input" onKeyDown={(e) => this.handleKeyDown(e)}></input>

                <button onClick={this.onClick.bind(this)} id="sendButton"><i class="fas fa-paper-plane"></i></button>
            </div>
        );
    }

    onClick () {
        if($("#input").val() != ''){
            this.props.onClickSend($("#input").val());
            $("#input").val('');
        }
    }
    handleKeyDown(e) {
        if (e.keyCode === 13) {
          // エンターキーが押された時の処理
          this.onClick();
        }
      }
}