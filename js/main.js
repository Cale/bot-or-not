const synth = window.speechSynthesis;
let voices = [];
const praise = ["Nicely done!", "Good job.", "You're good at this.", "Correct!", "Yes!", "Good answer.", "Excellent choice.", "You're a professional.", "Fantastic."];
const encouragement = ["Keep trying.", "Maybe next time will be better.", "We all make mistakes.", "You'll get this next one for sure.", "That's okay.", "Oh no!", "Don't worry about it."];

let nps1;
let nps2;

let answer1;
let answer2;
let answer3;
let answer4;
let answer5;
let answer6;
let answer7;
let answer8;
let answer9;
let answer10;

let correct = 0;
let diff;

voices = synth.getVoices().sort(function (a, b) {
  const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
  if ( aname < bname ) return -1;
  else if ( aname == bname ) return 0;
  else return +1;
});

function speak(text) {
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = "en-US";
    utterThis.voice = voices[1];
    utterThis.pitch = .01;
    utterThis.rate = 1;
    console.log(utterThis);
    synth.speak(utterThis);
}

function calcGridHeight() {
  $(".grid").css("height", "auto")
  $(".grid").css("height", document.documentElement.scrollHeight)
}

window.addEventListener('resize', function(event){
  calcGridHeight()
});

function calcScore() {
  var score = (correct / 10) * 100;
  speak("You scored "+score+" percent")
  if ((score >= 60) && (score < 100)) {
    speak("Not bad!")
  } else if (score < 60) {
    speak("Scores are always better on the second try.")
  } else if (score == 100) {
    speak("Doesn't get much better than that!")
  }
  console.log(score);
  return score;
}

function calcNPSDiff() {
  var response;
  response = '<p>At the start, you ranked your A.I. favorability as <span>&nbsp;'+nps1+'&nbsp;</span>.</p><p>At the end, you ranked your A.I. favorability as <span>&nbsp;'+nps2+'&nbsp;</span>.</p>'
  console.log(response);
  if (nps1 > nps2) {
    diff = Math.abs(Math.round(((nps2 - 10) - (nps1 - 10)) / 10 * 100));
    response = response + '<p class="quote">Your A.I. favorability decreased <span>&nbsp;'+diff+'<sup>%</sup>&nbsp;</span></p>'
    console.log(response);
  } else if (nps1 < nps2) {
    diff = Math.abs(Math.round(((nps2 - 10) - (nps1 - 10)) / 10 * 100));
    response = response + '<p class="quote">Your A.I. favorability increased <span>&nbsp;'+diff+'<sup>%</sup>&nbsp;</span></p>'
    console.log(response);
  } else {
    response = response + '<p class="quote">Your A.I. favorability remained the same.</p>'
    console.log(response);
  }
  return response;
}

function displayScore() {
  if (answer1 == false) {
    $("#answer1 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer2 == false) {
    $("#answer2 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer3 == false) {
    $("#answer3 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer4 == false) {
    $("#answer4 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer5 == false) {
    $("#answer5 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer6 == false) {
    $("#answer6 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer7 == false) {
    $("#answer7 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer8 == false) {
    $("#answer8 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer9 == false) {
    $("#answer9 img").attr("src", "img/pill-incorrect.png")
  }
  if (answer10 == false) {
    $("#answer10 img").attr("src", "img/pill-incorrect.png")
  }
}

function blurImage(answer) {
  $(".result p").text(answer);
  if (answer == "Incorrect") {
    $(".column.dark-blue").addClass("img-answer");
    let text = encouragement[Math.floor(Math.random() * encouragement.length)];
    speak(text)
  } else {
    let text = praise[Math.floor(Math.random() * praise.length)];
    speak(text)
  }
  $(".result").fadeIn();
  $(".answer").fadeIn();
}

function removeImageBlur() {
  $(".column.dark-blue").removeClass("img-answer");
}

$( document ).ready(function() {
  $('.home').fadeIn( function() {
    calcGridHeight()
    speak("Welcome to Bot or Not!");
  });

  $('#start').click(function() {
    speak("Let's get started.")
    $('.home').fadeOut(function() {
      $('#nps1').fadeIn(function() {
        calcGridHeight()
      });
    });
  });

  $("#nps1 button").click(function() {
    nps1 = $(this).text();
    console.log("nps1: "+nps1);
    $('#nps1').fadeOut(function() {
      $('#q1').fadeIn(function() {
        calcGridHeight()
      });
    });
  });

  $("#q1 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer1 = true;
      response = "Correct!";
      correct++;
    } else {
      answer1 = false;
      response = "Incorrect"
    }
    console.log("q1: "+answer1);
    $("#q1 .buttons").fadeOut();
    $("#q1 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q2 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer2 = true;
      response = "Correct!";
      correct++;
    } else {
      answer2 = false;
      response = "Incorrect"
    }
    console.log("q2: "+answer2);
    $("#q2 .buttons").fadeOut();
    $("#q2 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q3 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer3 = true;
      response = "Correct!";
      correct++;
    } else {
      answer3 = false;
      response = "Incorrect"
    }
    console.log("q3: "+answer3);
    $("#q3 .buttons").fadeOut();
    $("#q3 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q4 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer4 = true;
      response = "Correct!";
      correct++;
    } else {
      answer4 = false;
      response = "Incorrect"
    }
    console.log("q4: "+answer4);
    $("#q4 .buttons").fadeOut();
    $("#q4 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q5 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer5 = true;
      response = "Correct!";
      correct++;
    } else {
      answer5 = false;
      response = "Incorrect"
    }
    console.log("q5: "+answer5);
    $("#q5 .buttons").fadeOut();
    $("#q5 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q6 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer6 = true;
      response = "Correct!";
      correct++;
    } else {
      answer6 = false;
      response = "Incorrect"
    }
    console.log("q6: "+answer6);
    $("#q6 .buttons").fadeOut();
    $("#q6 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q7 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer7 = true;
      response = "Correct!";
      correct++;
    } else {
      answer7 = false;
      response = "Incorrect"
    }
    console.log("q7: "+answer7);
    $("#q7 .buttons").fadeOut();
    $("#q7 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q8 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer8 = true;
      response = "Correct!";
      correct++;
    } else {
      answer8 = false;
      response = "Incorrect"
    }
    console.log("q8: "+answer8);
    $("#q8 .buttons").fadeOut();
    $("#q8 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q9 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer9 = true;
      response = "Correct!";
      correct++;
    } else {
      answer9 = false;
      response = "Incorrect"
    }
    console.log("q9: "+answer9);
    $("#q9 .buttons").fadeOut();
    $("#q9 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#q10 .buttons button").click(function() {
    var response;
    if ($(this).attr("answer") == "true") {
      answer10 = true;
      response = "Correct!";
      correct++;
    } else {
      answer10 = false;
      response = "Incorrect"
    }
    console.log("q10: "+answer10);
    $("#q10 .buttons").fadeOut();
    $("#q10 h1").fadeOut(function() {
      blurImage(response);
    });
  });

  $("#nps2 button").click(function() {
    nps2 = $(this).text();
    console.log("nps2: "+nps2);
    $('#nps2').fadeOut(function() {
      displayScore();
      $('.score .quote').html('You scored '+calcScore()+'<sup>%</sup>!');
      $('.score .favorability').html(calcNPSDiff());
      $('.score').fadeIn(function() {
        calcGridHeight()
      });
    });
  });

  $(".start-over").click(function() {
    location.reload();
  });

  // Next Buttons
  $("#q1 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q1").fadeOut(function() {
      $('#q2').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q2 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q2").fadeOut(function() {
      $('#q3').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q3 .next").click(function() {
    $("#q3 iframe").remove();
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q3").fadeOut(function() {
      $('#q4').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q4 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q4").fadeOut(function() {
      $('#q5').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q5 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q5").fadeOut(function() {
      $('#q6').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q6 .next").click(function() {
    $("#q6 iframe").remove();
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q6").fadeOut(function() {
      $('#q7').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q7 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q7").fadeOut(function() {
      $('#q8').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q8 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q8").fadeOut(function() {
      $('#q9').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q9 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q9").fadeOut(function() {
      $('#q10').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

  $("#q10 .next").click(function() {
    $(".result").fadeOut();
    $(".answer").fadeOut();
    $("#q10").fadeOut(function() {
      $('#nps2').fadeIn(function() {
        calcGridHeight()
      });
      removeImageBlur();
    });
  });

});