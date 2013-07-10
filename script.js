$(function(){
  var numberOfCards = 4;
  var cardHeight = 100;
  var totalHeight = numberOfCards * cardHeight;
  $('.dragger').css('height', totalHeight)
  $('.dragger').draggable({axis: 'y', containment: [0, -totalHeight, 100, 0]});
  $('.dragger').on( "drag", function(event, ui) {
    var offset = ui.offset.top;
    var diff = cardHeight + offset
    if(diff >= 0){
      $('.card1').css('margin-bottom', offset);
    }
    else if(diff + cardHeight >= 0){
      $('.card1').css('margin-bottom', -cardHeight);
      $('.card2').css('margin-bottom', diff);
    }
    else{
      console.log('aoeu');
      $('.card1').css('margin-bottom', -cardHeight);
      $('.card2').css('margin-bottom', -cardHeight);
      $('.card3').css('margin-bottom', diff + cardHeight);
    }

  });

});