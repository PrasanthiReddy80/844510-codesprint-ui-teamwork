var trainerpreference="";
var fitnessArray=[];
function funM()
{
    trainerpreference=document.getElementById("Male").value
}
function funF()
{
    trainerpreference=document.getElementById("FeMale").value
}
function funN()
{
    trainerpreference=document.getElementById("None").value
}
function fitnessTracker(){
    
    var fitness={
        firstname:document.getElementById("firstname"). value+"" + document.getElementById("lastname").value,
        address:document.getElementById("address").value, /*+"" + document.getElementById("state").value+"" + document.getElementById("country").value,*/
        city:document.getElementById("city").value,
        phone:document.getElementById("contact").value,
        package:document.getElementById("pack1").value,
        trainerpreference:trainerpreference
    };

    if(fitnessArray.firstname !== "" && fitness.address !== "" &&  fitness.city!== ""  && fitness.phone !== "" && fitness.package!=="" && fitness.trainerpreference!==""){
        fitnessArray = JSON.parse(localStorage.getItem("fitness")) || [];
        fitnessArray.push(fitness);
        localStorage.setItem("fitness",JSON.stringify(fitnessArray));

        window.open('viewtable.html');

    }

}