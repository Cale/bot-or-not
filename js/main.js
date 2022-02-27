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

function removeImageBlur() {
  $("img").removeClass("img-answer");
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

  $("#q3 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q3: "+answer1);
    $("#q3 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q4 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q4: "+answer1);
    $("#q4 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q5 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q5: "+answer1);
    $("#q5 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q6 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q6: "+answer1);
    $("#q6 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q7 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q7: "+answer1);
    $("#q7 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q8 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q8: "+answer1);
    $("#q8 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q9 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q9: "+answer1);
    $("#q9 .buttons").fadeOut(function() {
      blurImage(response);
    });
  });

  // Next Buttons
  $("#q1 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q1").fadeOut(function() {
      $('#q2').fadeIn();
      removeImageBlur();
    });
  });

  $("#q2 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q2").fadeOut(function() {
      $('#q3').fadeIn();
      removeImageBlur();
    });
  });

  $("#q3 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q3").fadeOut(function() {
      $('#q4').fadeIn();
      removeImageBlur();
    });
  });

  $("#q4 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q4").fadeOut(function() {
      $('#q5').fadeIn();
      removeImageBlur();
    });
  });

  $("#q5 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q5").fadeOut(function() {
      $('#q6').fadeIn();
      removeImageBlur();
    });
  });

  $("#q6 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q6").fadeOut(function() {
      $('#q7').fadeIn();
      removeImageBlur();
    });
  });

  $("#q7 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q7").fadeOut(function() {
      $('#q8').fadeIn();
      removeImageBlur();
    });
  });

  $("#q8 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q8").fadeOut(function() {
      $('#q9').fadeIn();
      removeImageBlur();
    });
  });

  $("#q9 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q9").fadeOut(function() {
      $('#q10').fadeIn();
      removeImageBlur();
    });
  });


});

$("#nps2 button").click(function() {
  nps2 = $(this).text()
  console.log("nps2: "+nps2);
});


$("#score").click(function() {
  calcScore();
  calcNPSDiff();
});
