import "../css/style.css";
import "../sass/style.scss";

import './lib/lib';

$('button').on('click', function(){
    $('div').eq(0).toggleClass('active');
});

$('div').click(function(){
    console.log($(this).index());
});

console.log($('div').eq(2).find('.some'));