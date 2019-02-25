$(document).ready(function(){
       $("input[type='button']").click(function(event){
  var name1 = $("input[name='name1']").val();
  var name2 = $("input[name='name2']").val();
  var queone = parseInt($("input[name='num1']:checked").val());
  var quetwo = parseInt($("input[name='num2']:checked").val());
  var quethree = parseInt($("input[name='num3']:checked").val());
  var quefour = parseInt($("input[name='num4']:checked").val());
  var quefive = parseInt($("input[name='num5']:checked").val());
  var quesix = parseInt($("input[name='num6']:checked").val());
  var queseven = parseInt($("input[name='num7']:checked").val());
  var queeight = parseInt($("input[name='num8']:checked").val());
  var quenine = parseInt($("input[name='num9']:checked").val());
  var queten = parseInt($("input[name='num10']:checked").val());
  var questions=[];
    questions.push(queone,quetwo,quethree,quefour,quefive,quesix,queseven,queeight,quenine,queten);
    var total =0;
      questions.forEach(function(question) {
        total += question;
});
        

      event.preventDefault();



  });
});
