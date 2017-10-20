//commit 1
$("#set-color").click(function () {
  event.preventDefault();
  var color = $("#color-field").val()
  $(".brush").css("background-color", color);
});

//commit 2
$('#set-color').keydown(function (event) {
    if (event.keyCode === 13) {
        $(".brush").css("background-color", color);
    }
});

//commit 3
for (i = 0; i < 1000; i++) {
  $("body").append($('<div class="square"></div>')) ;
}

//commit 4
$('body').on('click', function(){
    alert($(this).attr("class"));
});
