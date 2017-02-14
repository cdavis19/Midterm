$(document).ready(function() {

function displaySeats() {

for( i = 1; i < 7; i++){

// move(append) into a row div with seats

  var rowCount = document.createElement("div");
  rowCount.className = "rowCount";
  rowCount.textContent = "Row " + i;
  rowCount.id = "rowCount";
  $(".container").append(rowCount);

    for (j = 1; j < 5; j++) {

        // seatInfo.push({
        //     userName: "testUser",
        //     seatNumber: i,
        //     reserved: false
        // });

        seatBox = document.createElement("div");
        seatBox.className = "seatBox";
        seatBox.textContent = "Seat " + j;
        // seatBox.textContent = "seatBox" + " " + j + " " + seatInfo[i].seatNumber;

        seatBox.id = "seatBox";
        $(".container").append(seatBox);
        // seatInfo[0].reserved = true;
        // seatInfo[0].seatNumber = i;

    };



  };

  var stage = document.createElement("div");
  stage.className = "stage";
  stage.textContent = "stage";
  $(".container").append(stage);
};



displaySeats();
});
