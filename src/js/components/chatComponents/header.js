import React    from "react";
import $        from "jQuery";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import './header.scss';

$(function(){

});

export default class Chat extends React.Component {
    render(){
        return (
            <div id="chatHeader">
                <button onClick={this.onClick.bind(this)}><i class="fas fa-times fa-2x"></i></button>
            </div>
        );
    }
    onClick () {
        this.props.onClick(false);
    }
}