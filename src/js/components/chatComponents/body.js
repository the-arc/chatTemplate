import React    from "react";
import $        from "jQuery";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './body.scss';
import './loading.scss';

$(function(){
    
});

export default class Chat extends React.Component {
    render(){
        let qa = [];
        for(let i in this.props.qna.question){
            qa.push(<div class="question">{this.props.qna.question[i]}</div>);
            console.log(this.props.qna.answer[i]);
            qa.push(<div class="answer">
                {this.props.qna.answer[i] == null ? 
                    (<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>) : 
                    (<span>{this.props.qna.answer[i]}</span>)
                } 
            </div>);
            this.scrollDown();
        }
        return (
            <div id="chatBody">
                <div class="answer">{this.props.firstComment}</div>
                {qa}
            </div>
        );
    }
    scrollDown(){
        var obj = document.getElementById('chatBody');
        obj.scrollTop = obj.scrollHeight;
    }
}
