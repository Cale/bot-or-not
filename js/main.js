let nps1;
let nps2;

let answer1;
let answer2;
let answer3;
let answer4;
let answer5;

let correct = 0;

function calcScore() {
  console.log((correct / 5) * 100 + "%");
}

function calcNPSDiff() {
  console.log("Your first NPS was "+nps1+". Your second NPS was "+nps2+".");
  if (nps1 > nps2) {
    console.log("Your AI favorability has decreased!");
  } else if (nps1 < nps2) {
    console.log("Your AI favorability has increased!");
  } else {
    console.log("Your AI favorability has remained the same.");
  }
}

$("#nps1 button").click(function() {
  nps1 = $(this).text();
  console.log("nps1: "+nps1);
});

$("#q1 button").click(function() {
  if ($(this).text() == "True") {
    answer1 = true;
    correct++;
  } else {
    answer1 = false;
  }
  console.log("q1: "+answer1);
});

$("#q2 button").click(function() {
  if ($(this).text() == "True") {
    answer2 = true;
    correct++;
  } else {
    answer2 = false;
  }
  console.log("q2: "+answer2);
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
