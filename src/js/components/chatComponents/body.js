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
        let qa = [];
        for(let i in this.props.qna.question){
            qa.push(<div class="question">{this.props.qna.question[i]}</div>);
            qa.push(<div class="answer">{this.props.qna.answer[i]}</div>);
        }
        return (
            <div id="chatBody">
                <div class="answer">{this.props.firstComment}</div>
                {qa}
            </div>
        );
    }
}