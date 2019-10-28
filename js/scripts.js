$(document).ready(function() {
  $("form#sentenceForm").submit(function(event) {
    event.preventDefault();

    var almostSentence = []

    var originalSentence = $("input#sentence").val().split(" ");
    var finalSentence = originalSentence.map(function(word){
      if (word.length < 3) {
        return;
      }
      else {
        almostSentence.push(word);
      }
    })
    console.log("almostSentence: ",almostSentence);
      var evenCloser = almostSentence.reverse().join(" ");
    console.log("evenCloser: ",evenCloser);

      $("#newSentence").text(evenCloser);



    });
  });
