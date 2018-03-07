

//show the answer; not exactly 'flippable' but rather answer at bottom
//or it was at one time- it's displaying funky now.
$(document).ready(function() {
 
  $('#flip').click(function(){
    $('#answer').hide();
    $('#answer-bin').toggle();
  })
  $('#flip').click(function(){
    $('#answer').show();
    $('#answer-bin').toggle();
  })

  })

  let qanda = 
  [
    {id:1, question: 'did this work?', ans: 'No, no it did not'},
    {id:2, question:'What is Webpack?', ans:'It is a module bundler for js files'},
    {id:3, question: 'When is a good time to use Map?', ans: 'When keys are unknown until runtime'},
    {id:4, question: 'How do you find an array index in jquery?', ans:'Use Array.findIndex' },
    {id:5, question: 'Who is the tough teacher?', ans: 'Dave'}
  ]


  //now for next button or refresh to next item in array?
  //it worked!!  But need to hide the answer...
  var cardIndex = 0;
  $(document).ready(function () 
 { 
 $('#next').click(function nextCard()
  {
    cardIndex = (cardIndex == qanda.length-1) ? 0 : cardIndex+1;
    $('#question').text(qanda[cardIndex].question);
     $('#answer').text(qanda[cardIndex].ans);
     $('#answer').hide();
    })
    
})
  //use Array.findIndex for editing? hmm



  //move to next card- but first I need to get the 1st one to display!
