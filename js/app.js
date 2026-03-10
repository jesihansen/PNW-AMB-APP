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
    var rigSwitch = document.getElementByClassName("rigs");
    
    if (rigSwitch.display === "none") {
	  rigSwitch.display = "block";
	} else {
	  rigSwitch.display = "none";
	}
  });
