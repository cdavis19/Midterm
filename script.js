
$(document).ready(function() {
var seatNumber;
  var seatInfo = [{
      userName: "testUser",
      seatNumber: 0,
      reserved: false
  }];

// var seatInfo;
var seatBox;

function displaySeats() {

// for( i = 1; i < 4; i++){
//
// // move(append) into a row div with seats
//
//   var rowCount = document.createElement("div");
//   rowCount.className = "rowCount";
//   rowCount.textContent = "Row " + i;
//   rowCount.id = "rowCount";
//   $(".container").append(rowCount);
//
//     for (j = 1; j < 6; j++) {
//
//         // seatInfo.push({
//         //     userName: "testUser",
//         //     seatNumber: i,
//         //     reserved: false
//         // });
//
//       var seatBox = document.createElement("div");
//         seatBox.className = "seatBox";
//         seatBox.textContent = "Seat " + j;
//         // seatBox.textContent = "seatBox" + " " + j + " " + seatInfo[i].seatNumber;
//
//         seatBox.id = "seatBox";
//         $(".rowCount").append(seatBox);
//         // seatInfo[0].reserved = true;
//         // seatInfo[0].seatNumber = i;
//
//     };
//


  // };
  for( i = 1; i < 25; i++){


          seatBox = document.createElement("div");

            seatBox.className = "seatBox";
            seatBox.textContent = "Seat " + i;
           seatBox.id = "seat-" + i;

            //seatBox.textContent = "seatBox" + " " + j + " " + seatInfo[i].seatNumber;
            $(".container").append(seatBox);


            // seatInfo.push({
            //     userName: "testUser",
            //     seatNumber: i,
            //     reserved: false
            // });
            //
            // console.log(seatInfo);

}

  var stage = document.createElement("div");
  stage.className = "stage";
  stage.textContent = "stage";
  $(".container").append(stage);


  // $(".seatBox").hover(
  //     function() {
  //         $(this).css("background-color", "red");
  //
  //     }).mouseout(function() {
  //     $(this).css("background-color", "grey");
  // });


  $(".seatBox").on("click",
      function() {


        //  $(this).css("background-color", "pink");
          var selSeats = document.createElement("div");
          selSeats.className = "selSeats";
          $(".formContainer").show();
          seatNumber = $(this).text().split(" ");
          var rowNumber = $(this).parent.textContent;
          console.log(rowNumber);
           console.log("Seat Number:" + " " +seatNumber[1] +" " + "row: " + " " + rowNumber);
           selSeats.textContent = "Seat: " + seatNumber[1];

        $(".selectedSeats").append(selSeats);
        $(this).addClass("reservedSeat");

      });



}

// $(".container.seatBox").mouseover(function(){
//
// $(this).css("opacity", "0.25");
//
// });
//


// function checkReserved(){

// for (i = 0; i < 25; i++){
//
//   if (seatInfo[0].reserved === true){
//
//       //
//       var rerserveTemp = seatInfo[i].reserved;
//
//     console.log("reserved Seat" + " " + i + " " + seatNumber);
//   }
// }



// }

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
// seatInfo[0].reserved = {reserveBool};

seatInfo.push(
  {seatNumber: tempSeat,
    userName: tempName,
    reserved: tempReserved
});

// $(this).className("reservedSeat");
// seatBox.removeClass("seatBox").addClass("reservedSeat");




});

$("#clearButton").on('click', function() {

$(".seatBox").removeClass("reservedSeat");

console.log("!!!");
});

displaySeats();
//checkReserved()
});
