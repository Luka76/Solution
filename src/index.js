import "./Scss/styles.scss"
import Slider from "./Slider"

$(document).ready(function (){
    const sliders = $('.slider');
    const leftBtn = $('#left-button');
    const rightBtn = $('#right-button')

    new Slider(
        $(sliders[0]),
        leftBtn,
        rightBtn

    );

    new Slider(
        $(sliders[1]),
        leftBtn,
        rightBtn
    );

});
