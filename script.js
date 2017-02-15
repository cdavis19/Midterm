$(document).ready(function() {

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

          var seatBox = document.createElement("div");
            seatBox.className = "seatBox";
            seatBox.textContent = "Seat " + i;
            //seatBox.textContent = "seatBox" + " " + j + " " + seatInfo[i].seatNumber;
            $(".container").append(seatBox);


}

  var stage = document.createElement("div");
  stage.className = "stage";
  stage.textContent = "stage";
  $(".container").append(stage);


  $(".seatBox").hover(
      function() {
          $(this).css("background-color", "red");

      }).mouseout(function() {
      $(this).css("background-color", "grey");
  });


  $(".seatBox").on("click",
      function() {
          $(this).css("background-color", "pink");
          $(".formContainer").toggle();
          var seatNumber = $(this).text().split(" ");
          var rowNumber = $(this).parent.textContent;
          console.log(rowNumber);
           console.log("Seat Number:" + " " +seatNumber[1] +" " + "row: " + " " + rowNumber);
             });



};

// $(".container.seatBox").mouseover(function(){
//
// $(this).css("opacity", "0.25");
//
// });
//


$(".formContainer").hide();


displaySeats();
});
