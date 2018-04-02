
//challenge 1

function getPiDecimal() {
	var pi = Math.PI;
	var n = pi.toFixed(10);
	var piDecimal = n.slice(11,12); //El decimo decimal de pi es 6 (3.1415926536)
 	return piDecimal;

}

//challenge 2

function getSumEvens(arr=[1,2,3,4,5,6]){
	var sum=0;
	for (var i = 0; i < arr.length; i++) {
		if((arr[i])%2===0){
			sum += arr[i];
		}
	}
	return sum;
}

//challenge 3

function getOrderedVowels(str="just a testing"){
	var newStr = str.match(/[aeiou]/g);
	newStr = newStr.join("");
	return newStr;
}


//challenge 4

function getFirstId(){
 	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
        	var myObj = JSON.parse(this.responseText);
        	return myObj[0].id;
    	}
	};
	xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
	xmlhttp.send();
}


console.log("challenge 1: " + ((getPiDecimal()==5)? "pass" : "fail") + "\n"); //da como resultado fail porque 5 es el octavo decimal de pi.
console.log("challenge 2: " + ((getSumEvens()==12)? "pass" : "fail") + "\n");
console.log("challenge 3: " + ((getOrderedVowels()=="uaei")? "pass" : "fail") + "\n");
console.log("challenge 4: " + ((getFirstId()==1)? "pass" : "fail") + "\n")


//twitter
