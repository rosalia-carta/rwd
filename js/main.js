$(function () {
    'use strict';

    var Testolorem, lorem1, lorem2, lorem3, lorem4;

    Testolorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    lorem1 =  '<header><h1>Titolo 1</h1></header>' + '<div class="imageborder"><img src="images/rai.jpg"></div>'+ Testolorem   + Testolorem + Testolorem;
    lorem2 =  '<header><h1>Titolo 2</h1></header>' + Testolorem +  Testolorem +'<div class="imageborder"><img src="images/rai0.jpg"></div>' + Testolorem;
    lorem3 =  '<header><h1>Titolo 3</h1></header>' + '<div class="imageborder"><img src="images/rai00.jpg"></div>' + Testolorem +  Testolorem + Testolorem;
    lorem4 =  '<header><h1>Titolo 4</h1></header>' + Testolorem + Testolorem + Testolorem +'<div class="imageborder"><img src="images/rai000.jpg"></div>';

    $(".lorem_testo1").html(lorem1);
    $(".lorem_testo2").html(lorem2);
    $(".lorem_testo3").html(lorem3);
    $(".lorem_testo4").html(lorem4);
});
