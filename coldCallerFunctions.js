/*ColdCaller.js, built for Girls Who Code ATL Classroom #1
Written By: Annabel Rothschild
Last Modified: 2017
*/

//names yet to be called, names already called
var names = Array("student1", "student2", "student3");
var usedNames = Array();
//shuffle if no names left, else pull name --> remove from names and add to usedNames 
function pullName(){
    console.log("checking usedNames at pn:" + usedNames);
    var index = Math.floor(Math.random() * names.length);
    var pulledName = names[index];
    var removeValue = names.indexOf(pulledName);
    names.splice(removeValue, 1);
    document.getElementById("nameText").innerHTML = pulledName;
    usedNames.push(pulledName);
    if (names.length < 1){
        //console.log("time to shuffle")
        //var temp = names.pop();
        //console.log("name popped from names: " + temp);
        //usedNames.push(temp);
        console.log("un right before shuffling: " + usedNames);
        shuffle();
    }
}
//remove all in usedNames and put back in names
function shuffle(){
    console.log("entered shuffle, len(usedNames): " +usedNames.length);
    for (i=0; i < usedNames.length+2; i++) {
        console.log("un remaining in for loop: " + usedNames);
        var temp = usedNames.pop();
        console.log("name being added to names: " + temp);
        names.push(temp);
        console.log("name in names: " + names);
    }
    console.log("names after shuffling: " + names);
}

