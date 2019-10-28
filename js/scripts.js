$(document).ready(function() {
  $("form#sentenceForm").submit(function(event) {
    event.preventDefault();

    var almostSentence = []

    var originalSentence = $("input#sentence").val().split(" ");

// ***** THIS ONE IS TOO LONG *****
    // var finalSentence = originalSentence.map(function(word){
    //   if (word.length < 3) {
    //     return;
    //   }
    //   else {
    //     almostSentence.push(word);
    //   }
    // })


// ***** THIS ONE IS ONLY A LITTLE LONG *****
    // var almostSentence = originalSentence.filter(function(word){
    //   return word.length >= 3;
    // });


// ***** THIS ONE IS JUST RIGHT! *****
    var almostSentence = originalSentence.filter(word => word.length >= 3);




    console.log("almostSentence: ",almostSentence);
      var evenCloser = almostSentence.reverse().join(" ");
    console.log("evenCloser: ",evenCloser);

      $("#newSentence").text(evenCloser);



    });
  });
