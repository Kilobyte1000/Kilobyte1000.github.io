var sportsTab, houseTab;
var houseButton, sportsButton

function init() {
	houseTab = document.getElementById("house_prefect_tab");
	sportsTab = document.getElementById("sports_prefect_tab");

	houseButton = document.getElementById("houseButton");
	sportsButton = document.getElementById("sportsButton");

	houseButton.click();
}

function openTab(evt, tabName) {

	if (tabName == "house_prefect_tab")
	{
		houseTab.className = "visible";
		sportsTab.className = "";
		sportsButton.className = "";
	}
	else
	{
		sportsTab.className = "visible";
		houseTab.className = "";
		houseButton.className = "";
	}
	evt.currentTarget.className = "active";
}

function writeHouseBoy(el) {
	document.getElementById("house_boy").innerHTML = el.nextElementSibling.innerHTML;
}

function writeHouseGirl(el) {
	document.getElementById("house_girl").innerHTML = el.nextElementSibling.innerHTML;
}

function writeSportsBoy(el) {
	document.getElementById("sports_boy").innerHTML = el.nextElementSibling.innerHTML;
}

function writeSportsGirl(el) {
	document.getElementById("sports_girl").innerHTML = el.nextElementSibling.innerHTML;
}