window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

document.getElementById("county").addEventListener('change', (event) => {
    var selectedOption = event.target.options[event.target.selectedIndex];
    var targetData = selectedOption.getAttribute('data-target');
    console.log(targetData);
    var rigSwitch = document.getElementByClassName("rigs");
    if (rigSwitch.display === "none") {
	  rigSwitch.display = "block";
	} else {
	  rigSwitch.display = "none";
	}
  });