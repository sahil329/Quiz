var quiz={
	question:["What is name of God Ghanashyam's Father?",
			  "Which one of the following non metals is not a poor conductor of electricity",
			  "Which one of the following is not a chemical change ?",
			  "Commercially, sodium bicarbonate is known as..",
			  "Acetyl salicylic acid is commonly used as..",
			  "Which metal is commonly used for making an electromagnet?",
			  "The gas that is responsible for global warming is",
			  "Which of the following is the source of common salt?",
			  "What is the main constituent of coal gas? ",
			  "For Which one of the following is the density maximum ?"],
	option:[["Ram","Krushna","Dharmdev","Ram-pratap"],
			["Sulphur","Selenium","Bromine","Phosphorus"],
			["Burning of coal in air","Fermentation of sugarcane juice","Cracking of petroleum","Crystallization of table salt from sea water"],
			["Washing soda","Baking soda","Bleaching powder","Soda ash"],
			["A pain killer","A sedative","Tear gas","A fertilizer"],
			["Copper","Cobalt","Iron","Nickel"],
			["Carbon dioxide","Oxygen","Methane","Sulphur dioxide"],
			["Bauxite","Pyrite","Calcite","Halite"],
			["Oxygen","Water","Nitrogen","Methane"],
			["Chloroform","Water","Benzene","Ice"],
		   ],
	answer:["Dharmdev","Selenium","Crystallization of table salt from sea water",
			"Baking soda","A pain killer","Iron","Carbon dioxide","Halite","Methane","Water"
		   ],
	correctA:0
};
var i=0;
var a=[];
var b=[];
var flag;
var rand;
function change(selected){								/* EventTarget.addEventListener("click",*/

	selected.style.background="rgba(0,0,0,0.4)";
	
	var sub=selected.children;
	if((flag==true) && (sub[1].innerHTML == quiz.answer[rand])){
		console.log("correct");
		quiz.correctA++;
		selected.style.background="white";
		flag=false;
	}else{
		console.log("wrong");
		console.log(quiz.answer[rand]);
		selected.style.background="white";
		flag=false;
	}
	document.getElementById("btnM").style.display="block";

}														/*,{once : true});*/
function changeQue(){
	setnewTime();
	document.getElementById("btnM").style.display="none";
	basicChange();
	flag=true;
	if(i >= quiz.question.length){
		document.body.innerHTML="Thank you !! <br> You Score : "+quiz.correctA+"/"+quiz.question.length;
		window.location = "file:///C:/XAMPP/htdocs/Quize/resourse/php/result.php";
	}
	var exp=" "+(i+1)+". ";
	var sequnce=document.getElementById("number")
	sequnce.innerHTML=exp;

	while(b.length<10){
		rand=randomNumber(0,9);
		if(b.indexOf(rand)===-1){
			b.push(rand);
			break;
		}
	}

	console.log("question is : "+rand);
	var q=document.getElementById("que");
	q.innerHTML = quiz.question[rand];

	var op=document.getElementsByClassName("ans");
	var rand1;
	for(var j=0;j<op.length;j++){
			while(a.length<4){
				rand1=randomNumber(0,3);
				if(a.indexOf(rand1)===-1){
					a.push(rand1);
					break;
				}
			}
		op[j].innerHTML=quiz.option[rand][rand1];
		console.log("R n. "+rand1+" "+op[j].innerHTML);
	}
	a.pop();a.pop();a.pop();a.pop();
	i++;
}
function randomNumber(min,max){
	return Math.floor(Math.random() * (max-min+1) + min);
}
function basicChange(){
	var x1=document.getElementsByClassName("option");
	for(var t=0;t<4;t++){
		x1[t].style.cssText = "border: 2px solid pink; border-radius:45%;"
	}
}
function setnewTime(){
	var x=document.getElementById("timer");
	var b;
	x.style.display="block";
	var second=3;
	x.textContent=second;
	var countdown=setInterval(function(){
		second--;
		b=document.getElementById("btnM").style.display;
		x.textContent=second;
		if(b=="block"){
			window.clearInterval(countdown);
		}	
		if(second<=0){ 
			changeQue();
			window.clearInterval(countdown);
		}
		
	},1000);
	// setTimeout(function(){changeQue()},1000)
}