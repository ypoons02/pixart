
var color;
var url;
var toggle = "";

//commit 1
$("#set-color").click(function () {
  toggle = "color";
  event.preventDefault();
  color = $("#color-field").val()
  $(".brush").css("background-color", color);
  $(".brush").css('background-image', 'none');

});

//commit 2
$('#set-color').keydown(function (event) {
  toggle = "color";
    if (event.keyCode === 13) {
        $(".brush").css("background-color", color);
    }
});

//commit 3
for (i = 0; i < 1000; i++) {
  $("body").append($('<div class="square" id='+i+' ></div>')) ;
}

//commit 4
// $('.square').on('click', function(){
//     var sqID = $(this).attr("id");
//     $('#'+sqID+'.square').css("background-color", "green");
// });

//commit 5
// $('.square').on('click', function(){
//     var sqID = $(this).attr("id");
//     $('#'+sqID+'.square').css("background-color", color);
// });

//commit 6
function colorGrids (sqID){
  $('#'+sqID+'.square').css("background-color", color);
  $('#'+sqID+'.square').css('background-image', 'none');
}

function imageGrids (sqID,url){
  $('#'+sqID+'.square').css('background-image', 'url(' + url + ')');
}

//commit 7
$("#set-poster").click(function () {
  toggle = "movie";
  event.preventDefault();
  var movie = $("#movie-name").val();
  $.ajax({
    method: "GET",
    url: "http://www.omdbapi.com/?",
    data: { t: movie, apikey: "2f6435d9" }
  }).done(function(msg) {
    var poster_URL = msg['Poster'];
    url = poster_URL;
    $(".brush").css('background-image', 'url(' + url + ')');
  });
});

$('.square').mouseover (function(){
  var sqID = $(this).attr("id");
  if(toggle === "movie"){
    imageGrids (sqID,url);
  }
  if(toggle === "color"){
    colorGrids (sqID);
  }
})  ;
