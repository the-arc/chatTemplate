import React    from "react";
import $        from "jQuery";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './send.scss';

$(function(){

});

export default class Chat extends React.Component {
    render(){
        return (
            <div id="chatSend">
                <input type="text" id="input"></input>
                <button onClick={this.onClick.bind(this)}><i class="fas fa-paper-plane"></i></button>
            </div>
        );
    }

    onClick () {
        if($("#input").val() != ''){
            this.props.onClickSend($("#input").val());
            $("#input").val('');
        }
    }
}