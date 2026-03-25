window.addEventListener('DOMContentLoaded', (event) => {
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
    toggleVisibility(targetData);
    
//show selected county rigs only in table
    
  });

function toggleVisibility(county) {
// GET ALL OPTIONS
 const rigSwitch = document.getElementsByClassName(county + "-rig");
// SHOW THAT WE HAVE THEM 
 console.log(rigSwitch);
// ADD OR REMOVE SHOW
 rigSwitch.forEach(showHide());
 
}

function showHide(rig){
console.log("in showHide");
	//BROKEN RN
 if (rig.style.display === "none") {
      console.log(this);
      rig.style.display = "block !important";
   } else {
      rig.style.display = "none";
   }
}


const rigArray = {
   designator : "",    //STR - a98,etc
   status : "",        //available/txp/etc
   nextTrip : "",      //next planned pickup
   tripDuration : "",  //next trip duration
   estNext : "",       //estimated next ETA
   lunch : ""          //INT - has this unit had a lunch
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
