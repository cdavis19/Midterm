
$(document).ready(function() {
var seatNumber;
  var seatInfo = [{
      userName: "testUser",
      seatNumber: 0,
      reserved: false
  }];

var seatBox;

function displaySeats() {

  for( i = 1; i < 25; i++){


          seatBox = document.createElement("div");

            seatBox.className = "seatBox";
            seatBox.textContent = "Seat " + i;
           seatBox.id = "seat-" + i;

            $(".container").append(seatBox);

}

  var stage = document.createElement("div");
  stage.className = "stage";
  stage.textContent = "stage";
  $(".container").append(stage);


  $(".seatBox").on("click",
      function() {


          var selSeats = document.createElement("div");
          selSeats.className = "selSeats";
          $(".formContainer").slideDown("slow");
          seatNumber = $(this).text().split(" ");
          var rowNumber = $(this).parent.textContent;

           selSeats.textContent = "Seat: " + seatNumber[1];

        $(".selectedSeats").append(selSeats);
        $(this).addClass("reservedSeat");


      });



}

$(".formContainer").hide();


$('#submitButton').on('click', function() {

console.log($("#seatNumberInput").val());
// var seatIndex = seatNumber - 1;
console.log($("#nameInput").val());
console.log($("#reservedCheckBox:checked").val());
// console.log("ARRAY VAL:" + " " + seatInfo[0].reserved);
var reserveBool = $("#reservedCheckBox:checked").val();

var tempSeat = $("#seatNumberInput").val();
var tempName = $("#nameInput").val();
var tempReserved = $("#reservedCheckBox:checked").val();

seatInfo.push(
  {seatNumber: tempSeat,
    userName: tempName,
    reserved: tempReserved
});

// $(this).className("reservedSeat");
// seatBox.removeClass("seatBox").addClass("reservedSeat");


});




$("#clearButton").on('click', function() {
$(".selectedSeats").empty ();
$(".seatBox").removeClass("reservedSeat");

console.log("!!!");
});


$(".xClose").on('click', function() {

$(".formContainer").hide();

});

displaySeats();
});
