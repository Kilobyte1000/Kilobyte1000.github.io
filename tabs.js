var sportsPrefectTab, housePrefectTab;
var defaultTab, secondTab

function init(argument) {
	housePrefectTab = document.getElementById("house_prefect_tab");
	sportsPrefectTab = document.getElementById("sports_prefect_tab");

	defaultTab = document.getElementById("default_tab");
	secondTab = document.getElementById("second_tab");

	defaultTab.click();
}

function openTab(evt, tabName) {

	if (tabName == "house_prefect_tab")
	{
		sportsPrefectTab.style.display = "none";
		housePrefectTab.style.display = "grid";

		secondTab.className = "";
	}
	else
	{
		sportsPrefectTab.style.display = "grid";
		housePrefectTab.style.display = "none";

		defaultTab.className = "";
	}
	evt.currentTarget.className += "active";
}

function writePrefectBoy(el) {
	// body...
	document.getElementById("house_boy").innerHTML = el.nextElementSibling.innerHTML;
}

function writePrefectGirl(el) {
	// body...
	document.getElementById("house_girl").innerHTML = el.nextElementSibling.innerHTML;
}

function writeSportsBoy(el) {
	document.getElementById("sports_boy").innerHTML = el.nextElementSibling.innerHTML;
}

function writeSportsGirl(el) {
	// body...
	document.getElementById("sports_girl").innerHTML = el.nextElementSibling.innerHTML;
}