let name = $("#input_name");
let surname = $("#input_surname");
let age = $("#input_age");


$("#save").on('click', function(){ 
    window.localStorage.setItem('name', name.val());
    window.localStorage.setItem('surname', surname.val());
    window.localStorage.setItem('age', age.val());

});

$("#showinfo").on('click', function(){
    $('#innerName').text($(name).val());
    $('#innerSurname').text($(surname).val());
    $('#innerAge').text($(age).val());
});

