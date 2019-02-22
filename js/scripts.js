function checkname(event) {
  var name1 =document.getElementById("name1").value;
  var name2=document.getElementById("name2").value;
   var names=[];
   names.push(name1,name2);
   alert(name1 + name2);
    event.preventDefault();
}
function checkgrade(){

    var question1=document.getElementById("question1").value;
    var question1=document.getElementById("question2").value;
    var question1=document.getElementById("question3").value;
    var question1=document.getElementById("question4").value;
    var question1=document.getElementById("question5").value;
    var question1=document.getElementById("question6").value;
    var question1=document.getElementById("question7").value;
    var question1=document.getElementById("question8").value;
    var question1=document.getElementById("question9").value;
    var questions=[];
    questions.push(question1,question2,question3,question4,question5,question6,question7,question8,question9);
    alert(questions);
}
