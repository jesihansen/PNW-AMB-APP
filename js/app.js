const rigArray = {
   designator : "",    //STR - a98,etc
   status : "",        //available/txp/etc
   nextTrip : "",      //next planned pickup
   tripDuration : "",  //next trip duration
   estNext : "",       //estimated next ETA
   lunch ; ""          //INT - has this unit had a lunch
}
/*
STATUSES
AT LUNCH
QUICK DETAIL
AVAILABLE
EN ROUTE
ON SCENE
TRANSPORTING
AT DESTINATION
NOT IN SERVICE
*/

window.addEventListener('DOMContentLoaded', (event) => {
    var a96 = {}
    console.log('DOM fully loaded and parsed');
});

document.getElementById("county").addEventListener('change', (event) => {
	//ON CHANGE, GET DATA
    var selectedOption = event.target.options[event.target.selectedIndex];
    	//STORE COUNTY
    var targetData = selectedOption.getAttribute('data-target');
    	//LOG
    console.log(targetData);
    	//ONLY SHOW THAT COUNTY'S RIGS
    var rigSwitch = document.getElementByClassName("rigs");
    
//show selected county rigs only in table
//NOT WORKING YET
    if (rigSwitch.display === "none") {
	  rigSwitch.display = "block";
	} else {
	  rigSwitch.display = "none";
	}
  });

