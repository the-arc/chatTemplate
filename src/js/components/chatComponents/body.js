import React    from "react";
import $        from "jQuery";


import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './body.scss';

$(function(){

});

export default class Chat extends React.Component {
    render(){
        return (
            <div id="chatBody">
                <div class="answer">{this.props.firstComment}</div>
                <div class="question">question</div>
                <div class="answer">{this.props.answer}</div>
            </div>
        );
    }

}