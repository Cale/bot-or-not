let nps1;
let nps2;

let answer1;
let answer2;
let answer3;
let answer4;
let answer5;

let correct = 0;
let diff;

function calcScore() {
  console.log((correct / 5) * 100 + "%");
}

function calcNPSDiff() {
  console.log("Your first NPS was "+nps1+". Your second NPS was "+nps2+".");
  if (nps1 > nps2) {
    diff = Math.abs(Math.round(((nps2 - 10) - (nps1 - 10)) / 10 * 100));
    console.log("Your AI favorability has decreased "+diff+"%!");
  } else if (nps1 < nps2) {
    diff = Math.abs(Math.round(((nps2 - 10) - (nps1 - 10)) / 10 * 100));
    console.log("Your AI favorability has increased "+diff+"%!");
  } else {
    console.log("Your AI favorability has remained the same.");
  }
}

function blurImage(answer) {
  $(".result p").text(answer);
  if (answer == "Incorrect") {
    $("img").addClass("img-answer");
  }
  $(".result").fadeIn();
  $(".answer").fadeIn();
}

$( document ).ready(function() {
  $('.home').fadeIn();

  $('#start').click(function() {
    $('.home').fadeOut(function() {
      $('#nps1').fadeIn();
    });
  });

  $("#nps1 button").click(function() {
    nps1 = $(this).text();
    console.log("nps1: "+nps1);
    $('#nps1').fadeOut(function() {
      $('#q1').fadeIn();
    });
  });

  $("#q1 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q1: "+answer1);
    $("#q1 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q2 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q2: "+answer1);
    $("#q2 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  // Next Buttons
  $("#q1 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q1").fadeOut(function() {
      $('#q2').fadeIn();
    });
  });

  $("#q2 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q2").fadeOut(function() {
      $('#q3').fadeIn();
    });
  });


});







$("#q3 button").click(function() {
  if ($(this).text() == "True") {
    answer3 = true;
    correct++;
  } else {
    answer3 = false;
  }
  console.log("q3: "+answer3);
});

$("#q4 button").click(function() {
  if ($(this).text() == "True") {
    answer4 = true;
    correct++;
  } else {
    answer4 = false;
  }
  console.log("q4: "+answer4);
});

$("#q5 button").click(function() {
  if ($(this).text() == "True") {
    answer5 = true;
    correct++;
  } else {
    answer5 = false;
  }
  console.log("q5: "+answer5);
});

$("#nps2 button").click(function() {
  nps2 = $(this).text()
  console.log("nps2: "+nps2);
});


$("#score").click(function() {
  calcScore();
  calcNPSDiff();
});
