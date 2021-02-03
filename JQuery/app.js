$(document).ready(function () {

    $('#p1').append('<button id="btn1">Click Here</button>');
    $('#btn1').click(function () {
        alert('Hola!');
    })

    $('#btn2').click(function () {
        alert($('#text').val());
    })


    $('#div2').mouseenter(function () {
        $('#div2').css('backgroundColor', 'rgb(82, 180, 82');
    })
    $('#div2').mouseleave(function () {
        $('#div2').css('backgroundColor', 'initial');
    })


    $('#p4').append('<p id="newp">This is random text</p>');
    $('#newp').click(function () {
        $('#newp').css('color', 'pink');
    })

  
    $('#p5').append('<div id="emptyDiv"></dvi>');
    $('#p5').append('<button id="nameBtn">My Name</button>');
    $('#nameBtn').click(function () {
        $('#emptyDiv').append('<span>Mia</span>')
    })


    let friends = [
        "Tim",
        "Tammy",
        "Tom",
        "Tommy",
        "Tommie",
        "Tomy",
        "Thomie",
        "Timmy",
        "Tam",
        "Joe",
    ];
    let i = 0;
    $('#btn6').click(function () {
        if (i < friends.length) {
            let friend = friends[i];
            $('#list').append('<li>' + friends[i] + '</li>')
            i++;
        }
    })

})
