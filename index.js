var meritsDesciptionFlag = -1;
var meritsDesciptionFlagOwned = -1;
var selectedSpecialty;
var selectedSave;
var saveList = new Array();
if(localStorage.getItem("saveList") === null){
	localStorage.setItem("saveList",",");	
}
saveList = localStorage.getItem("saveList").split(",");;
var player = {
	"strength" : 1,
	"dexterity" : 1,
	"stamina" : 1,
	
	"inteligence" : 1,
	"wits" : 1,
	"resolve" : 1,
	
	"presence" : 1,
	"manipulation" : 1,
	"composure" : 1,
	
	"academics" : 0,
	"computer" : 0,
	"crafts" : 0,
	"inestigation" : 0,
	"medicine" : 0,
	"occult" : 0,
	"politics" : 0,
	"science" : 0,
	
	"athletics" : 0,
	"brawl" : 0,
	"drive" : 0,
	"firearms" : 0,
	"larceny" : 0,
	"stealth" : 0,
	"survival" : 0,
	"weaponry" : 0,
	
	"animalKen" : 0,
	"empathy" : 0,
	"expession" : 0,
	"intimidation" : 0,
	"persuasion" : 0,
	"socialize" : 0,
	"streetwise" : 0,
	"subterfuge" : 0,
	
	"meritsList" : [],
	"vice" : '',
	"virtue" : '',
	"morality" : 7,
	"specialty" : []
}
function loadAtributesTab(){
	var atributesPage = genAtrTab();
	document.getElementById("container").innerHTML = atributesPage;
}
function loadSkillsTab(){
	var skillsPage = genSkillsTab();
	document.getElementById("container").innerHTML = skillsPage;
}
function loadMeritsTab () {
	var meritsPage = genMeritsTab();
	document.getElementById("container").innerHTML = meritsPage;
}
function loadOtherTab () {
	var otherPage = genOtherTab();
	document.getElementById("container").innerHTML = otherPage;
}
function loadSaveTab () {
  	var savePage = genSaveTab();
  	document.getElementById("container").innerHTML = savePage;
}
function savePlayer () {
	var saveFlag = 0;
	var saveName = document.getElementById("saveInput").value;
	for(i = 0; i < saveList.length;i++){
		if(saveList[i] === saveName){
			saveFlag = 1;
		}
	}
	if(saveFlag === 0){
		saveList.push(saveName);
	}
  	localStorage.setItem(saveName,JSON.stringify(player));
  	localStorage.setItem("saveList",saveList.join(","));
  	loadSaveTab();
}
function genSaveTab () {
  	var page = "<div>Name:<input id='saveInput' type='text'/><input type='button' value='Save' onclick='savePlayer()' /></div><select size='10'>"
	for(i = 2; i < saveList.length; i++){
		page += "<option onclick='setSelectedSave(" + i + ")'>" + saveList[i] + "</option>"
	}
  	page += "</select><div><input type='button' value='Load' onclick='loadPlayer()' /><input type='button' value='Delete' onclick='deletePlayer()' /><div>";
  	return page;
}
function setSelectedSave (index) {
  	selectedSave = index;
}
function loadPlayer (){
	player = JSON.parse(localStorage.getItem(saveList[selectedSave]));
}
function deletePlayer () {
  saveList.splice(selectedSave,1);
  localStorage.setItem("saveList",saveList.join(","));
  loadSaveTab();
}
function genAtrTab () {
	var page = "<table> <tr> <td class='AtributeHeader'>--Mental--</td> </tr> <tr> <td class='AtributeContainer'>Intelligence</td> <td>";
	for(i = 0;i < 10;i++){
		if(i < player.inteligence){
			page += "<div class='circle filled' onclick='setInteligence(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setInteligence(" + (i + 1) + ")'></div>";
		}
	}
	page += "</td> </tr> <tr> <td class='AtributeContainer'>Wits</td> <td>";
	for(i = 0;i < 10;i++){
		if(i < player.wits){
			page += "<div class='circle filled' onclick='setWits(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setWits(" + (i + 1) + ")'></div>";
		}
	}
	page += "</td> </tr> <tr> <td class='AtributeContainer'>Resolve</td> <td>";
	for(i = 0;i < 10;i++){
		if(i < player.resolve){
			page += "<div class='circle filled' onclick='setResolve(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setResolve(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> </tr> <tr> <td class='AtributeHeader'>--Physical--</td> </tr> <tr> <td class='AtributeContainer'>Strength</td> <td>";
 	for(i = 0;i < 10;i++){
		if(i < player.strength){
			page += "<div class='circle filled' onclick='setStrength(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setStrength(" + (i + 1) + ")'></div>";
		}
	} 
 	page += "</td> </tr> <tr> <td class='AtributeContainer'>Dexterity</td> <td>";
 	for(i = 0;i < 10;i++){
		if(i < player.dexterity){
			page += "<div class='circle filled'onclick='setDexterity(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setDexterity(" + (i + 1) + ")'></div>";
		}
	} 
 	page += "</td> </tr> <tr> <td class='AtributeContainer'>Stamina</td> <td>";
 	for(i = 0;i < 10;i++){
		if(i < player.stamina){
			page += "<div class='circle filled' onclick='setStamina(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setStamina(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> </tr> <tr> <td class='AtributeHeader'>--Social--</td> </tr> <tr> <td class='AtributeContainer'>Presence</td> <td>";
 	for(i = 0;i < 10;i++){
		if(i < player.presence){
			page += "<div class='circle filled' onclick='setPresence(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setPresence(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> </tr> <tr> <td class='AtributeContainer'>Manipulation</td> <td>";
 	for(i = 0;i < 10;i++){
		if(i < player.manipulation){
			page += "<div class='circle filled' onclick='setManipulation(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setManipulation(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> </tr> <tr> <td class='AtributeContainer'>Composure</td> <td>";
 	for(i = 0;i < 10;i++){
		if(i < player.composure){
			page += "<div class='circle filled' onclick='setComposure(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setComposure(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> </tr> </table>";
	return page;
}
function genSkillsTab () {
	var page = "<table class='SkillTable'> <tr> <td class='Collum1'> --Mental-- </td> <td class='SkillDots'> </td> <td class='Collum2'> --Physical-- </td> <td class='SkillDots'> </td> <td class='Collum3'> --Social-- </td> <td class='SkillDots'> </td> </tr> <tr> <td class='Collum1'> Academics </td> <td class='SkillDots'>";
	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setAcademics(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.academics){
			page += "<div class='circle filled' onclick='setAcademics(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setAcademics(" + (i + 1) + ")'></div>";
		}
	}
	page += "</td> <td class='Collum2'> Athletics </td> <td class='SkillDots'>";
	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setAthletics(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.athletics){
			page += "<div class='circle filled' onclick='setAthletics(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setAthletics(" + (i + 1) + ")'></div>";
		}
	} 
 	page += "</td> <td class='Collum3'> Animal Ken </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setAnimalKen(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.animalKen){
			page += "<div class='circle filled' onclick='setAnimalKen(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setAnimalKen(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> </tr> <tr> <td class='Collum1'> Computer </td> <td class='SkillDots'>"; 
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setComputer(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.computer){
			page += "<div class='circle filled' onclick='setComputer(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setComputer(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> <td class='Collum2'> Brawl </td> <td class='SkillDots'>"; 
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setBrawl(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.brawl){
			page += "<div class='circle filled' onclick='setBrawl(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setBrawl(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> <td class='Collum3'> Empathy </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setEmpathy(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.empathy){
			page += "<div class='circle filled' onclick='setEmpathy(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setEmpathy(" + (i + 1) + ")'></div>";
		}
	} 
	page += "</td> </tr> <tr> <td class='Collum1'> Crafts </td> <td class='SkillDots'>";
	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setCrafts(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.crafts){
			page += "<div class='circle filled' onclick='setCrafts(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setCrafts(" + (i + 1) + ")'></div>";
		}
	}
 	page += "</td> <td class='Collum2'> Drive </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setDrive(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.drive){
			page += "<div class='circle filled' onclick='setDrive(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setDrive(" + (i + 1) + ")'></div>";
		}
	}

 	page += "</td> <td class='Collum3'> Expession </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setExpession(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.expession){
			page += "<div class='circle filled' onclick='setExpession(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setExpession(" + (i + 1) + ")'></div>";
		}
	}
 
 	page += "</td> </tr> <tr> <td class='Collum1'> Inestigation </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setInestigation(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.inestigation){
			page += "<div class='circle filled' onclick='setInestigation(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setInestigation(" + (i + 1) + ")'></div>";
		}
	}

 	page += "</td> <td class='Collum2'> Firearms </td> <td class='SkillDots'> ";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setFirearms(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.firearms){
			page += "<div class='circle filled' onclick='setFirearms(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setFirearms(" + (i + 1) + ")'></div>";
		}
	}
	page += "</td> <td class='Collum3'> Intimidation </td> <td class='SkillDots'> ";
	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setIntimidation(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.intimidation){
			page += "<div class='circle filled' onclick='setIntimidation(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setIntimidation(" + (i + 1) + ")'></div>";
		}
	}

 	page += "</td> </tr> <tr> <td class='Collum1'> Medicine </td> <td class='SkillDots'> ";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setMedicine(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.medicine){
			page += "<div class='circle filled' onclick='setMedicine(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setMedicine(" + (i + 1) + ")'></div>";
		}
	}

	page += "</td> <td class='Collum2'> Larceny </td> <td class='SkillDots'> ";
	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setLarceny(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.larceny){
			page += "<div class='circle filled' onclick='setLarceny(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setLarceny(" + (i + 1) + ")'></div>";
		}
	}

 	page += "</td> <td class='Collum3'> Persuasion </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setPersuasion(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.persuasion){
			page += "<div class='circle filled' onclick='setPersuasion(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setPersuasion(" + (i + 1) + ")'></div>";
		}
	}
 
 	page += "</td> </tr> <tr> <td class='Collum1'> Occult </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setOccult(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.occult){
			page += "<div class='circle filled' onclick='setOccult(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setOccult(" + (i + 1) + ")'></div>";
		}
	}
 
	page += "</td> <td class='Collum2'> Stealth </td> <td class='SkillDots'>";
	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setStealth(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.stealth){
			page += "<div class='circle filled' onclick='setStealth(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setStealth(" + (i + 1) + ")'></div>";
		}
	}
 
 	page += "</td> <td class='Collum3'> Socialize </td> <td class='SkillDots'> ";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setSocialize(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.socialize){
			page += "<div class='circle filled' onclick='setSocialize(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setSocialize(" + (i + 1) + ")'></div>";
		}
	}

 	page += "</td> </tr> <tr> <td class='Collum1'> Politics </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setPolitics(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.politics){
			page += "<div class='circle filled' onclick='setPolitics(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setPolitics(" + (i + 1) + ")'></div>";
		}
	}
 
 	page += "</td> <td class='Collum2'> Survival </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setSurvival(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.survival){
			page += "<div class='circle filled' onclick='setSurvival(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setSurvival(" + (i + 1) + ")'></div>";
		}
	}
 
 	page += "</td> <td class='Collum3'> Streetwise </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setStreetwise(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.streetwise){
			page += "<div class='circle filled' onclick='setStreetwise(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setStreetwise(" + (i + 1) + ")'></div>";
		}
	}
 
 	page += "</td> </tr> <tr> <td class='Collum1'> Science </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setScience(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.science){
			page += "<div class='circle filled' onclick='setScience(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setScience(" + (i + 1) + ")'></div>";
		}
	}

 	page += "</td> <td class='Collum2'> Weaponry </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setWeaponry(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.weaponry){
			page += "<div class='circle filled' onclick='setWeaponry(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setWeaponry(" + (i + 1) + ")'></div>";
		}
	}
 
 	page += "</td> <td class='Collum3'> Subterfuge </td> <td class='SkillDots'>";
 	page += "<div style='float:left;margin-right:10px;border: 1px solid black;'onclick='setSubterfuge(0)'>Set to 0</div>"
	for(i = 0;i < 10;i++){
		if(i < player.subterfuge){
			page += "<div class='circle filled' onclick='setSubterfuge(" + (i + 1) + ")'></div>";
		}
		else{
			page += "<div class='circle' onclick='setSubterfuge(" + (i + 1) + ")'></div>";
		}
	}
 
	page += "</td> </tr> </table><div class='specialtyList'>New Specialty:<input id='specialtyInput' class='specialtyInput' type='text' /><input type='button' onclick='addSpecialty()' value='Add'/><input type='button' onclick='removeSpecialty()' value='Remove'/></div><select class='specialtyText' size='10'>"
	for(i = 0; i < player.specialty.length;i++){
		page += "<option onclick='selectSpecialty(" + i + ")'>" + player.specialty[i] + "</option>";
	}
	page += "</select>";
	return page;
}
function genMeritsTab () {
  	var page = "<table class='MeritContainer'> <tr> <td><div> --Owned Merits-- </div><select class='MeritCol1' size='10'>";
  	for(var i = 0; i < player.meritsList.length;i++){
  		if(meritsDesciptionFlagOwned === i){
  			page += "<option id='ownedSelected' class='" + i + "' selected='true' onclick='displayMeritDescriptionOwned(" + i + ")'>" + player.meritsList[i].name + "</option>";
  		}
  		else{
  			page += "<option onclick='displayMeritDescriptionOwned(" + i + ")'>" + player.meritsList[i].name + "</option>";
  		}
  	}
  	page += "</select><input value='Remove Selected Merit' type='button' onclick='removeMerit()' /> </td><td><div>--Description--</div><textarea class='MeritCol3' readonly='readonly' rows='10'>";
  	if(meritsDesciptionFlagOwned >= 0){
		page += player.meritsList[meritsDesciptionFlagOwned].name + "\nRating:" + player.meritsList[meritsDesciptionFlagOwned].rating + "\nBook:"+ player.meritsList[meritsDesciptionFlagOwned].book + "\nPrerequisits:" + player.meritsList[meritsDesciptionFlagOwned].prerequisite;
	}
  	page += "</textarea></td></tr><tr> <td><div> --All Merits-- </div><select class='MeritCol2' size='10'>";
  	for(var i = 0; i < merits.length;i++){
  		if (meritsDesciptionFlag === i) {
  			page += "<option id='allSelected' class='" + i + "' selected='true' onclick='displayMeritDescription(" + i + ")'>" + merits[i].name + "</option>";
  		}
  		else{
  			page += "<option onclick='displayMeritDescription(" + i + ")'>" + merits[i].name + "</option>";
  		}
  	}
	page += "</select> <input value='Add Selected Merit' type='button' onclick='gainMerit()' /> </td> <td><div> --Description-- </div><textarea class='MeritCol3' readonly='readonly' rows='10'>"
	if(meritsDesciptionFlag >= 0){
		page += merits[meritsDesciptionFlag].name + "\nRating:" + merits[meritsDesciptionFlag].rating + "\nBook:"+merits[meritsDesciptionFlag].book + "\nPrerequisits:" + merits[meritsDesciptionFlag].prerequisite;
	}
	page += "</textarea> </td> </tr> </table>";
	return page;
}
function genOtherTab () {
	var page = "<table class='OtherHolder'> <tr> <td><div>--Morality--</div>";
	for(i = 0;i < 10;i++){
		if(player.morality === (10 - i)){
			page += "<div class='circleVert filled' onclick='selectMorality(" + (10 - i) + ")'>" + (10 - i) + "</div>";
		}
		else{
			page += "<div class='circleVert' onclick='selectMorality(" + (10 - i) + ")'>" + (10 - i) + "</div>";
		}
	}
	page += "</td><td class='Virtue'> <div> --Virtue-- </div> <select class='Virtue' size='7'> ";
	if(player.virtue === "Charity"){
		page +=  "<option selected='true' onclick='player.virtue = \"Charity\";'>Charity</option>";
	}
	else{
		page +=  "<option onclick='player.virtue = \"Charity\";'>Charity</option>";
	}
	if(player.virtue === "Faith"){
		page +=  "<option selected='true' onclick='player.virtue = \"Faith\";'>Faith</option>";
	}
	else{
		page +=  "<option onclick='player.virtue = \"Faith\";'>Faith</option>";
	}
	if(player.virtue === "Fortitue"){
		page +=  "<option selected='true' onclick='player.virtue = \"Fortitue\";'>Fortitue</option>";
	}
	else{
		page +=  "<option onclick='player.virtue = \"Fortitue\";'>Fortitue</option>";
	}
	if(player.virtue === "Hope"){
		page +=  "<option selected='true' onclick='player.virtue = \"Hope\";'>Hope</option>";
	}
	else{
		page +=  "<option onclick='player.virtue = \"Hope\";'>Hope</option>";
	}
	if(player.virtue === "Justice"){
		page +=  "<option selected='true' onclick='player.virtue = \"Justice\";'>Justice</option>";
	}
	else{
		page +=  "<option onclick='player.virtue = \"Justice\";'>Justice</option>";
	}
	if(player.virtue === "Prudence"){
		page +=  "<option selected='true' onclick='player.virtue = \"Prudence\";'>Prudence</option>";
	}
	else{
		page +=  "<option onclick='player.virtue = \"Prudence\";'>Prudence</option>";
	}
	if(player.virtue === "Temperance"){
		page +=  "<option selected='true' onclick='player.virtue = \"Temperance\";'>Temperance</option>";
	}
	else{
		page +=  "<option onclick='player.virtue = \"Temperance\";'>Temperance</option>";
	}
	page += "</select></td><td class='Vice'> <div> --Vice-- </div> <select class='Vice' size='7'>";
	if(player.vice === "Envy"){
		page +=  "<option selected='true' onclick='player.vice = \"Envy\";'>Envy</option>";
	}
	else{
		page +=  "<option onclick='player.vice = \"Envy\";'>Envy</option>";
	}
	if(player.vice === "Gluttony"){
		page +=  "<option selected='true' onclick='player.vice = \"Gluttony\";'>Gluttony</option>";
	}
	else{
		page +=  "<option onclick='player.vice = \"Gluttony\";'>Gluttony</option>";
	}
	if(player.vice === "Greed"){
		page +=  "<option selected='true' onclick='player.vice = \"Greed\";'>Greed</option>";
	}
	else{
		page +=  "<option onclick='player.vice = \"Greed\";'>Greed</option>";
	}
	if(player.vice === "Lust"){
		page +=  "<option selected='true' onclick='player.vice = \"Lust\";'>Lust</option>";
	}
	else{
		page +=  "<option onclick='player.vice = \"Lust\";'>Lust</option>";
	}
	if(player.vice === "Pride"){
		page +=  "<option selected='true' onclick='player.vice = \"Pride\";'>Pride</option>";
	}
	else{
		page +=  "<option onclick='player.vice = \"Pride\";'>Pride</option>";
	}
	if(player.vice === "Sloth"){
		page +=  "<option selected='true' onclick='player.vice = \"Sloth\";'>Sloth</option>";
	}
	else{
		page +=  "<option onclick='player.vice = \"Sloth\";'>Sloth</option>";
	}
	if(player.vice === "Wrath"){
		page +=  "<option selected='true' onclick='player.vice = \"Wrath\";'>Wrath</option>";
	}
	else{
		page +=  "<option onclick='player.vice = \"Wrath\";'>Wrath</option>";
	}
	return page;
}
function selectSpecialty (index) {
  	selectedSpecialty = index;
}
function addSpecialty () {
  var input = document.getElementById("specialtyInput").value;
  player.specialty.push(input);
  loadSkillsTab();
}
function removeSpecialty () {
  	player.specialty.splice(selectedSpecialty,1);
  	loadSkillsTab();
}
function selectMorality(morality){
	player.morality = morality;
	loadOtherTab();
}
function displayMeritDescription (meritIndex){
	meritsDesciptionFlag = meritIndex;
	loadMeritsTab();
}
function displayMeritDescriptionOwned (meritIndex){
	meritsDesciptionFlagOwned = meritIndex;
	loadMeritsTab();
}
function gainMerit () {
  var selected = document.getElementById("allSelected");
  var index = parseInt(selected.className);
  player.meritsList.push(merits[index]);
  loadMeritsTab();
}
function removeMerit () {
	var selected = document.getElementById("ownedSelected");
	var index = parseInt(selected.className);
	player.meritsList.splice(index,1);
	meritsDesciptionFlagOwned = -1;
	loadMeritsTab();
}
function setStrength (value) {
  player.strength = value;
  loadAtributesTab();
}
function setDexterity (value) {
  player.dexterity = value;
  loadAtributesTab();
}
function setStamina (value) {
  player.stamina = value;
  loadAtributesTab();
}
function setInteligence (value) {
  player.inteligence = value;
  loadAtributesTab();
}
function setWits (value) {
  player.wits = value;
  loadAtributesTab();
}
function setResolve (value) {
  player.resolve = value;
  loadAtributesTab();
}
function setPresence (value) {
  player.presence = value;
  loadAtributesTab();
}
function setManipulation (value) {
  player.manipulation = value;
  loadAtributesTab();
}
function setComposure (value) {
  player.composure = value;
  loadAtributesTab();
}
function setAcademics (value) {
	player.academics = value;
	loadSkillsTab();
}
function setComputer (value) {
    player.computer = value;
    loadSkillsTab();
}
function setCrafts (value) {
    player.crafts = value;
    loadSkillsTab();
}
function setInestigation (value) {
    player.inestigation = value;
    loadSkillsTab();
}
function setMedicine (value) {
    player.medicine = value;
    loadSkillsTab();
}
function setOccult (value) {
    player.occult = value;
    loadSkillsTab();
}
function setPolitics (value) {
    player.politics = value;
    loadSkillsTab();
}
function setScience (value) {
    player.science = value;
    loadSkillsTab();
}
function setAthletics (value) {
    player.athletics = value;
    loadSkillsTab();
}
function setBrawl (value) {
    player.brawl = value;
    loadSkillsTab();
}
function setDrive (value) {
    player.drive = value;
    loadSkillsTab();
}
function setFirearms (value) {
    player.firearms = value;
    loadSkillsTab();
}
function setLarceny (value) {
    player.larceny = value;
    loadSkillsTab();
}
function setStealth (value) {
    player.stealth = value;
    loadSkillsTab();
}
function setSurvival (value) {
    player.survival = value;
    loadSkillsTab();
}
function setWeaponry (value) {
    player.weaponry = value;
    loadSkillsTab();
}
function setAnimalKen (value) {
    player.animalKen = value;
    loadSkillsTab();
}
function setEmpathy (value) {
    player.empathy = value;
    loadSkillsTab();
}
function setExpession (value) {
    player.expession = value;
    loadSkillsTab();
}
function setIntimidation (value) {
    player.intimidation = value;
    loadSkillsTab();
}
function setPersuasion (value) {
    player.persuasion = value;
    loadSkillsTab();
}
function setSocialize (value) {
    player.socialize = value;
    loadSkillsTab();
}
function setStreetwise (value) {
    player.streetwise = value;
    loadSkillsTab();
}
function setSubterfuge (value) {
    player.subterfuge = value;
    loadSkillsTab();
}


var merits = [
      {
        "name": "A Little Knowledge ",
        "rating": "1",
        "book": " Asylum, p. 50; Reliquary, p. 84 ",
        "prerequisite": " Mortal (non-supernatural) "
      },
      {
        "name": "Area of Expertise ",
        "rating": "2",
        "book": " The Free Council, p. 131 ",
        "prerequisite": " Resolve •• and a Specialty in the appropriate Mental Skill "
      },
      {
        "name": "Combat Awareness ",
        "rating": "2",
        "book": "Dogs Of War, p. 109 ",
        "prerequisite": "Military training or combat back ground. "
      },
      {
        "name": "Common sense ",
        "rating": "4",
        "book": " The World of Darkness Core, p. 108 "
      },
      {
        "name": "Crafter’s Sense ",
        "rating": "3",
        "book": " The Free Council, p. 131 ",
        "prerequisite": " Craft ••• and a Specialty "
      },
      {
        "name": "Danger sense ",
        "rating": "2",
        "book": " The World Of Darkness Core, p. 108 "
      },
      {
        "name": "Difficult to Ride ",
        "rating": "4",
        "book": " Book Of Spirits, p. 108 ",
        "prerequisite": " Composure and Resolve ••• "
      },
      {
        "name": "Driver’s Charm ",
        "rating": "1",
        "book": " Midnight Roads, p. 56 "
      },
      {
        "name": "Easy Ride ",
        "rating": "2",
        "book": " Book Of Spirits, p. 108 ",
        "prerequisite": " Wits ••• "
      },
      {
        "name": "Eidetic Memory ",
        "rating": "2",
        "book": " The World Of Darkness Core, p. 108 "
      },
      {
        "name": "Emotional Detachment ",
        "rating": "1",
        "book": " Asylum, p. 50 ",
        "prerequisite": " Resolve •• "
      },
      {
        "name": "Encyclopedic Knowledge ",
        "rating": "4",
        "book": " The World Of Darkness Core, p. 109 "
      },
      {
        "name": "Entheogenic Synesthesia ",
        "rating": "1",
        "book": " Magical Traditions, p. 137 "
      },
      {
        "name": "EOD ",
        "rating": "2",
        "book": " Armory, p. 208 (errata correction)",
        "prerequisite": " Wits ••• or Dexterity •••, Crafts •••, Demolitions Specialty in Crafts "
      },
      {
        "name": "Good Time Management ",
        "rating": "2",
        "book": " Asylum, p. 50; Reliquary, p. 84 ",
        "prerequisite": " Academics, Medicine or Science •• "
      },
      {
        "name": "Higher Calling ",
        "rating": "2",
        "book": " Tome Of The Watchtowers, p. 125 ",
        "prerequisite": " Resolve ••• "
      },
      {
        "name": "Holistic Awareness ",
        "rating": "3",
        "book": " The World Of Darkness Core, p. 109 "
      },
      {
        "name": "Hollow Soul ",
        "rating": "2",
        "book": " Book Of Spirits, p. 109 "
      },
      {
        "name": "Informative ",
        "rating": "4",
        "book": " The Free Council, p. 131 "
      },
      {
        "name": "Interdisciplinary Specialty ",
        "rating": "1",
        "book": " The Free Council, p. 132 "
      },
      {
        "name": "Language ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 109 (Errata Version)"
      },
      {
        "name": "Locus-Drinker ",
        "rating": "3",
        "book": " Book Of Spirits, p. 109 "
      },
      {
        "name": "Make Do ",
        "rating": "1",
        "book": " The Free Council, p. 132 "
      },
      {
        "name": "Meditative Mind ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 109 "
      },
      {
        "name": "Multi-Lingual ",
        "rating": "1",
        "book": " Reliquary, p. 85 "
      },
      {
        "name": "Rational Explanation ",
        "rating": "4",
        "book": " The Free Council, p. 133 "
      },
      {
        "name": "Residual Spirit Energy ",
        "rating": "2",
        "book": " Book Of Spirits, p. 110 "
      },
      {
        "name": "Scientist’s Sense ",
        "rating": "3",
        "book": " The Free Council, p. 133 ",
        "prerequisite": " Science ••• and a Specialty "
      },
      {
        "name": "Spirit Tongue ",
        "rating": "3",
        "book": " Book Of Spirits, p. 90 "
      },
      {
        "name": "Steady Driver ",
        "rating": "1",
        "book": " Midnight Roads, p. 59 "
      },
      {
        "name": "Technophile ",
        "rating": "1",
        "book": " Armory, p. 208 "
      },
      {
        "name": "Trained Memory ",
        "rating": "1",
        "book": " Guardians Of The Veil, p. 46 ",
        "prerequisite": " Composure ••, Investigation • "
      },
      {
        "name": "Trained Observer ",
        "rating": "4",
        "book": "Dogs Of War, p. 38 "
      },
      {
        "name": "Trip Sitter ",
        "rating": "3",
        "book": " Magical Traditions, p. 137 ",
        "prerequisite": " Composure ••• "
      },
      {
        "name": "Vision ",
        "rating": "1",
        "book": " The Free Council, p. 133 "
      },
      {
        "name": "Unseen Sense ",
        "rating": "3",
        "book": " The World Of Darkness Core, p. 109",
        "prerequisite": " Mortal (non-supernatural); Wits •• "
      },
      {
        "name": "Unseen Sense ",
        "rating": "7",
        "book": " Book Of Spirits, p. 111 "
      },
      {
        "name": "Well-Traveled ",
        "rating": "1",
        "book": " Reliquary, p. 85 "
      },
      {
        "name": "Whispers ",
        "rating": "1",
        "book": " The Mysterium, p. 179 "
      },
      {
        "name": "Ambidextrous ",
        "rating": "3",
        "book": " The World Of Darkness Core, p. 110"
      },
      {
        "name": "Athletics Dodge ",
        "rating": "1",
        "book": "Dogs Of War, p. 38 "
      },
      {
        "name": "Brawling Dodge ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 110",
        "prerequisite": "Strength •• and Brawl • "
      },
      {
        "name": "Direction Sense ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 110"
      },
      {
        "name": "Disarm ",
        "rating": "2",
        "book": " The World Of Darkness Core, p. 110",
        "prerequisite": "Dexterity ••• and Weaponry •• "
      },
      {
        "name": "Driving Style: High Performance Driving ",
        "rating": "1",
        "book": " Midnight Roads, p. 56 "
      },
      {
        "name": "Fast Reflexes ",
        "rating": "3",
        "book": " The World Of Darkness Core, p. 110"
      },
      {
        "name": "Fighting Finesse ",
        "rating": "2",
        "book": " The World Of Darkness Core, p. 110",
        "prerequisite": "Dexterity ••• and Weaponry •• "
      },
      {
        "name": "Fighting Style: Archery ",
        "rating": "2",
        "book": " Armory, p. 208 "
      },
      {
        "name": "Fighting Style: Boxing ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 110"
      },
      {
        "name": "Fighting Style: Chain Weapons ",
        "rating": "1",
        "book": " Armory, p. 209 "
      },
      {
        "name": "Fighting Style: Combat Marksmanship ",
        "rating": "1",
        "book": " 13"
      },
      {
        "name": "Fighting Style: Filipino Martial Arts ",
        "rating": "1",
        "book": " Armory, p. 211 "
      },
      {
        "name": "Fighting Style: Formation Tactics ",
        "rating": "1",
        "book": " Requiem For Rome, p. 109 "
      },
      {
        "name": "Fighting Style: Gladiatorial ",
        "rating": "1",
        "book": " Requiem For Rome, p. 109 "
      },
      {
        "name": "Fighting Style: Grappling ",
        "rating": "1",
        "book": " Adamantine Arrow, p. 50"
      },
      {
        "name": "Fighting Style: Improvised Weaponry",
        "rating": "1",
        "book": " Midnight Roads, p. 57 "
      },
      {
        "name": "Fighting Style: Kendo - Japanese Fencing ",
        "rating": "1",
        "book": " Armory, p. 211 "
      },
      {
        "name": "Fighting Style: Kung Fu ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 111"
      },
      {
        "name": "Fighting Style: MAC ",
        "rating": "2",
        "book": "Dogs Of War, p. 38 "
      },
      {
        "name": "Fighting Style: Police Tactics ",
        "rating": "1",
        "book": " 13"
      },
      {
        "name": "Fighting Style: Sniping ",
        "rating": "1",
        "book": " Armory, p. 212 "
      },
      {
        "name": "Fighting Style: Sojutsu/Jukendo ",
        "rating": "13",
        "book": " Adamantine Arrow, p. 51",
        "prerequisite": " Strength •••, Dexterity •• and Weaponry ••• "
      },
      {
        "name": "Fighting Style: Spetsnaz Knife Fighting ",
        "rating": "2",
        "book": " Armory, p. 213 "
      },
      {
        "name": "Fighting Style: Staff Fighting ",
        "rating": "2",
        "book": " Armory, p. 213 "
      },
      {
        "name": "Fighting Style: Two Weapons ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 112 "
      },
      {
        "name": "Fleet of Foot ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 112 "
      },
      {
        "name": "Fresh Start ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 112 "
      },
      {
        "name": "Giant ",
        "rating": "4",
        "book": " The World Of Darkness Core, p. 112 "
      },
      {
        "name": "Gunslinger ",
        "rating": "3",
        "book": " The World Of Darkness Core, p. 112 "
      },
      {
        "name": "Iron Stamina ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Iron Stomach ",
        "rating": "2",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Natural Immunity ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Outdoorsman ",
        "rating": "2",
        "book": " Midnight Roads, p. 59"
      },
      {
        "name": "Parkour ",
        "rating": "1",
        "book": " Strange Alchemies, p. 74, Tribes Of The Moon, p. 98 "
      },
      {
        "name": "Quick Draw ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Quick Healer ",
        "rating": "4",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Strong Back ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Strong Lungs",
        "rating": "3",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Stunt Driver",
        "rating": "3",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Stunt Rider ",
        "rating": "3",
        "book": " Requiem For Rome, p. 110 "
      },
      {
        "name": "Tolerance for Biology ",
        "rating": "1",
        "book": " Asylum, p. 51 ",
        "prerequisite": " Resolve, Stamina or Composure •• "
      },
      {
        "name": "Toxin Resistance ",
        "rating": "2",
        "book": " The World Of Darkness Core, p. 113 "
      },
      {
        "name": "Weaponry Dodge ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 114 "
      },
      {
        "name": "Wheelman ",
        "rating": "2",
        "book": " Midnight Roads, p. 59 "
      },
      {
        "name": "Allies ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 114 "
      },
      {
        "name": "Animal Affinity ",
        "rating": "1",
        "book": " Skinchangers, p. 20 "
      },
      {
        "name": "Armory ",
        "rating": "1",
        "book": " Banishers, p. 51 "
      },
      {
        "name": "Barfly ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 114 "
      },
      {
        "name": "Bureaucratic Navigator ",
        "rating": "2",
        "book": " Asylum, p. 51 "
      },
      {
        "name": "Contacts ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 114 "
      },
      {
        "name": "Decorated ",
        "rating": "2",
        "book": "Dogs Of War, p. 39 "
      },
      {
        "name": "Fame ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 115 "
      },
      {
        "name": "Fence ",
        "rating": "1",
        "book": " Banishers, p. 51 ",
        "prerequisite": " Streetwise ••• "
      },
      {
        "name": "Friend ",
        "rating": "1",
        "book": " Requiem Chronicler’s Guide, p. 68 "
      },
      {
        "name": "Ingratiating Wanderer ",
        "rating": "2",
        "book": "Midnight Roads, p. 58 "
      },
      {
        "name": "Inspiring ",
        "rating": "4",
        "book": " The World Of Darkness Core, p. 115 ",
        "prerequisite": " Presence •••• "
      },
      {
        "name": "Mentor ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 115 "
      },
      {
        "name": "Pleasing Aura ",
        "rating": "3",
        "book": " Book Of Spirits, p. 109 "
      },
      {
        "name": "Predator’s Bearing ",
        "rating": "2",
        "book": " Skinchangers, p. 20; Changing Breeds, p. 97 "
      },
      {
        "name": "Resources ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 115 "
      },
      {
        "name": "Retainer ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 116 "
      },
      {
        "name": "Saintly ",
        "rating": "3",
        "book": " Book Of Spirits, p. 110 "
      },
      {
        "name": "Shadow Contacts ",
        "rating": "3",
        "book": " Book Of Spirits, p. 110 "
      },
      {
        "name": "Shadowless Chambers ",
        "rating": "1",
        "book": " Book Of Spirits, p. 110 "
      },
      {
        "name": "Small Unit Tactics ",
        "rating": "3",
        "book": "Dogs Of War, p. 39 "
      },
      {
        "name": "Socially Small ",
        "rating": "2",
        "book": " Skinchangers, p. 21; Changing Breeds, p. 97 "
      },
      {
        "name": "Spirit Ear ",
        "rating": "2",
        "book": " Book Of Spirits, p. 111 "
      },
      {
        "name": "Status ",
        "rating": "1",
        "book": " The World Of Darkness Core, p. 116",
        "prerequisite": "Academics Skill Specialty: Religion. "
      },
      {
        "name": "Striking Looks ",
        "rating": "4",
        "book": " The World Of Darkness Core, p. 117"
      },
      {
        "name": "Sworn Officer ",
        "rating": "1",
        "book": " 13",
        "prerequisite": " The character must meet the basic requirements to be an officer in the department she selects. "
      },
      {
        "name": "Abyssal Resonance ",
        "rating": "1",
        "book": " Banishers, p. 39 "
      },
      {
        "name": "Cursed Item ",
        "rating": "1",
        "book": " Book Of Spirits, p. 108 "
      },
      {
        "name": "Den ",
        "rating": "3",
        "book": " Skinchangers, p. 21; Changing Breeds, p. 96 "
      },
      {
        "name": "Fetish ",
        "rating": "1",
        "book": "Blood Of The Wolf, p. 125 "
      },
      {
        "name": "Inherited Ghoul ",
        "rating": "2",
        "book": " Ghouls, p. 71 ",
        "prerequisite": " Ghoul "
      },
      {
        "name": "Lucid Dreaming ",
        "rating": "2",
        "book": " Changeling: The Lost Core, p. 195 "
      },
      {
        "name": "Lunatic Glare ",
        "rating": "2",
        "book": "Blood Of The Wolf, p. 125 "
      },
      {
        "name": "Proximus ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 334 ",
        "prerequisite": "Sleepwalker "
      },
      {
        "name": "Regnant",
        "rating": "1-5",
        "book": " Ghouls, p. 71 ",
        "Prerequisite": "Ghoul"
      },
      {
        "name": "Sexualized ",
        "rating": "2",
        "book": " Ghouls, p. 73 ",
        "prerequisite": " Ghoul "
      },
      {
        "name": "Sleepwalker ",
        "rating": "4",
        "book": " Mage: The Awakening Core, p. 334 ",
        "prerequisite": " Mortal (non-supernatural) "
      },
      {
        "name": "Source Sympathy ",
        "rating": "3",
        "book": " Ghouls, p. 73",
        "prerequisite": " Ghoul, Empathy ••• "
      },
      {
        "name": "Staff ",
        "rating": "1",
        "book": " Ghouls, p. 74 ",
        "prerequisite": " Ghoul, Resources (varies) "
      },
      {
        "name": "Unobtrusive ",
        "rating": "3",
        "book": " Ghouls, p. 74",
        "prerequisite": " Ghoul, Stealth •• "
      },
      {
        "name": "Wolf-Blooded ",
        "rating": "4",
        "book": " Werewolf The Forsaken Core, p. 79"
      },
      {
        "name": "Wolf-Blooded ",
        "rating": "2",
        "book": "Blood Of The Wolf, p. 126 "
      },
      {
        "name": "Astral Projection ",
        "rating": "3",
        "book": "Second Sight, p. 36 "
      },
      {
        "name": "Clairvoyance ",
        "rating": "3",
        "book": "Second Sight, p. 37 "
      },
      {
        "name": "Dowsing ",
        "rating": "1",
        "book": "Second Sight, p. 38 "
      },
      {
        "name": "Dream Travel ",
        "rating": "1",
        "book": "Second Sight, p. 38 "
      },
      {
        "name": "Postcognition ",
        "rating": "3",
        "book": "Second Sight, p. 40 "
      },
      {
        "name": "Precognition ",
        "rating": "4",
        "book": "Second Sight, p. 40 "
      },
      {
        "name": "Psychometry ",
        "rating": "5",
        "book": "Second Sight, p. 41 "
      },
      {
        "name": "Automatic Writing ",
        "rating": "2",
        "book": "Second Sight, p. 42 "
      },
      {
        "name": "Channeling ",
        "rating": "3",
        "book": "Second Sight, p. 43 "
      },
      {
        "name": "Death Sight ",
        "rating": "4",
        "book": "Second Sight, p. 44 "
      },
      {
        "name": "Ghost-Calling ",
        "rating": "3",
        "book": "Second Sight, p. 45 "
      },
      {
        "name": "Biokinesis ",
        "rating": "1",
        "book": "Second Sight, p. 46 "
      },
      {
        "name": "Cryokinesis ",
        "rating": "1",
        "book": "Second Sight, p. 47 "
      },
      {
        "name": "Plant Empathy ",
        "rating": "1",
        "book": "Second Sight, p. 49 "
      },
      {
        "name": "Psychic Healing ",
        "rating": "5",
        "book": "Second Sight, p. 49 "
      },
      {
        "name": "Psychic Vampirism ",
        "rating": "5",
        "book": "Second Sight, p. 49 "
      },
      {
        "name": "Psyrokinesis ",
        "rating": "5",
        "book": "Second Sight, p. 50 "
      },
      {
        "name": "Pyrokinetic Immunity ",
        "rating": "4",
        "book": "Second Sight, p. 52 "
      },
      {
        "name": "Pyrokinetic Shaping ",
        "rating": "5",
        "book": "Second Sight, p. 52 "
      },
      {
        "name": "Telekinesis ",
        "rating": "1",
        "book": "Second Sight, p. 52 "
      },
      {
        "name": "Thermokinesis ",
        "rating": "1",
        "book": "Second Sight, p. 53 "
      },
      {
        "name": "Animal Empathy ",
        "rating": "4",
        "book": "Second Sight, p. 55 "
      },
      {
        "name": "Animal Possession ",
        "rating": "4",
        "book": "Second Sight, p. 56 "
      },
      {
        "name": "Animal Rapport ",
        "rating": "8",
        "book": "Second Sight, p. 57 "
      },
      {
        "name": "Animal Possession ",
        "rating": "4",
        "book": "Second Sight, p. 57 "
      },
      {
        "name": "Mental Blast ",
        "rating": "5",
        "book": "Second Sight, p. 58 "
      },
      {
        "name": "Mind Breaker ",
        "rating": "5",
        "book": "Second Sight, p. 58 "
      },
      {
        "name": "Mind Control ",
        "rating": "5",
        "book": "Second Sight, p. 59 "
      },
      {
        "name": "Mind Reading ",
        "rating": "3",
        "book": "Second Sight, p. 60 "
      },
      {
        "name": "Psychic Empathy ",
        "rating": "6",
        "book": "Second Sight, p. 60 "
      },
      {
        "name": "Psychic Illusions ",
        "rating": "5",
        "book": "Second Sight, p. 61 "
      },
      {
        "name": "Psychic Invisibility ",
        "rating": "5",
        "book": "Second Sight, p. 62 "
      },
      {
        "name": "Telepathic Communication ",
        "rating": "4",
        "book": "Second Sight, p. 63 "
      },
      {
        "name": "Telepathic Rapport ",
        "rating": "3",
        "book": "Second Sight, p. 63 ",
      },
      {
        "name": "Though Projection ",
        "rating": "5",
        "book": "Second Sight, p. 64 "
      },
      {
        "name": "Anti-Psi ",
        "rating": "5",
        "book": "Second Sight, p. 64 "
      },
      {
        "name": "Believers ",
        "rating": "1",
        "book": "Second Sight, p. 64 "
      },
      {
        "name": "Doubting Thomas ",
        "rating": "1",
        "book": "Second Sight, p. 65 "
      },
      {
        "name": "Ghost Ally ",
        "rating": "3",
        "book": "Second Sight, p. 65 "
      },
      {
        "name": "Hypnotic Voice ",
        "rating": "4",
        "book": "Second Sight, p. 66 "
      },
      {
        "name": "Lucid Dreamer ",
        "rating": "1",
        "book": "Second Sight, p. 67 "
      },
      {
        "name": "Psychic Resistance ",
        "rating": "1",
        "book": "Second Sight, p. 67"
      },
      {
        "name": "Relic Creator ",
        "rating": "4",
        "book": " Reliquary, p. 85 "
      },
      {
        "name": "Relic ",
        "rating": "1",
        "book": " Reliquary, p. 85 "
      },
      {
        "name": "Relic Analyst ",
        "rating": "1",
        "book": " Reliquary, p. 86 "
      },
      {
        "name": "Animal Companion ",
        "rating": "1",
        "book": " Changing Breeds, p. 95 "
      },
      {
        "name": "Beast-Kin ",
        "rating": "4",
        "book": " Changing Breeds, p. 95 "
      },
      {
        "name": "Pack ",
        "rating": "1",
        "book": " Changing Breeds, p. 96 "
      },
      {
        "name": "True Breed ",
        "rating": "2",
        "book": " Changing Breeds, p. 97 "
      },
      {
        "name": "Common Sense ",
        "rating": "4",
        "book": "The World Of Darkness Innocents, p. 100 "
      },
      {
        "name": "Danger Sence ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 101 "
      },
      {
        "name": "Ego Boost ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 101 "
      },
      {
        "name": "Eidetic Memory ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 101 "
      },
      {
        "name": "Language ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 101 "
      },
      {
        "name": "Mental Prodigy ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 101 ",
        "prerequisite": "Any Mental Attribute at •••• "
      },
      {
        "name": "Multilingual ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 101 "
      },
      {
        "name": "Prized Possession ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 101 "
      },
      {
        "name": "Trivia Hound ",
        "rating": "4",
        "book": "The World Of Darkness Innocents, p. 101 "
      },
      {
        "name": "Unseen Sense ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 102 ",
        "prerequisite": "Mortal (non-supernatural); Wits •• "
      },
      {
        "name": "Ambidextrous ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 102 "
      },
      {
        "name": "Direction Sense ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 102 "
      },
      {
        "name": "Fast Reflexes ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 102 ",
        "prerequisite": "Dexterity ••• or Wits ••• "
      },
      {
        "name": "Fighting Style: Karate for Kids ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 103 "
      },
      {
        "name": "Fighting Style: Playground Dogpile ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 103 "
      },
      {
        "name": "Fleet of Foot: ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 104 ",
        "prerequisite": "Strength •• "
      },
      {
        "name": "Fresh Start ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 104 ",
        "prerequisite": "Fast Reflexes • or •• "
      },
      {
        "name": "Giant ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 104 "
      },
      {
        "name": "Hard Head ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 104 ",
        "prerequisite": "Stamina ••• or Resolve ••• "
      },
      {
        "name": "Iron Stomach ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 104 ",
        "prerequisite": "Stamina •• "
      },
      {
        "name": "Natural Immunity ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 104 ",
        "prerequisite": "Stamina •• "
      },
      {
        "name": "Physical Prodigy ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 104 ",
        "prerequisite": "Any Physical Attribute at •••• "
      },
      {
        "name": "Quick Draw ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 105 ",
        "prerequisite": "Dexterity ••• "
      },
      {
        "name": "Quick Healer ",
        "rating": "4",
        "book": "The World Of Darkness Innocents, p. 105 ",
        "prerequisite": "Stamina ••• "
      },
      {
        "name": "Strong Back ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 105 ",
        "prerequisite": "Strength •• "
      },
      {
        "name": "Strong Lungs ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 105 ",
        "prerequisite": "Athletics ••• "
      },
      {
        "name": "Tiny ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 105 "
      },
      {
        "name": "Tough ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 105 ",
        "prerequisite": "Stamina ••• or Resolve ••• "
      },
      {
        "name": "Toxin Resistance ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 105 ",
        "prerequisite": "Stamina ••• "
      },
      {
        "name": "Allies ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 105 "
      },
      {
        "name": "Contacts ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 107 "
      },
      {
        "name": "Deep Pockets ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 108 "
      },
      {
        "name": "Fame ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 108 "
      },
      {
        "name": "Guardian ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 108 "
      },
      {
        "name": "Guardian Angel ",
        "rating": "4",
        "book": "The World Of Darkness Innocents, p. 108 "
      },
      {
        "name": "Inspiring ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 109 ",
        "prerequisite": "Presence ••• "
      },
      {
        "name": "Mentor ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 109 "
      },
      {
        "name": "Odd Jobs ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 110 "
      },
      {
        "name": "Pet ",
        "rating": "3",
        "book": "The World Of Darkness Innocents, p. 110 "
      },
      {
        "name": "Social Prodigy ",
        "rating": "1",
        "book": "The World Of Darkness Innocents, p. 111 ",
        "prerequisite": "Any Social Attribute at •••• "
      },
      {
        "name": "Striking Looks ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 111 "
      },
      {
        "name": "Team Player ",
        "rating": "2",
        "book": "The World Of Darkness Innocents, p. 111 "
      },
      {
        "name": "Altar ",
        "rating": "1",
        "book": " Circle Of The Crone, p. 40 ",
        "prerequisite": " Vampire, member of Circle of the Crone. "
      },
      {
        "name": "Bad Breeding",
        "rating": "1",
        "book": " Ventrue - Lords Over The Damned, p. 105",
        "prerequisite": " Cannot have dots in Good Breeding. Only certain bloodlines and clans in the city qualify as “ill bred” for the purposes of this Merit, but the  precise identity of the scorned varies from city tocity. The Storyteller has final say on what clans or bloodlines make a character eligible for this Merit in the local city."
      },
      {
        "name": "Cacophony Listener ",
        "rating": "3",
        "book": "Daeva - Kiss Of The Succubus, p. 116 "
      },
      {
        "name": "Cant Fluency ",
        "rating": "4",
        "book": " Damnation City, p. 200 ",
        "prerequisite": " Politics • or Occult • or Streetwise • "
      },
      {
        "name": "Cant Savvy ",
        "rating": "4",
        "book": " Damnation City, p. 200 ",
        "prerequisite": " Intelligence •• and Investigation • or Occult • or Streetwise • "
      },
      {
        "name": "Carthian Lawyer",
        "rating": "2",
        "book": " Carthians, p. 184"
      },
      {
        "name": "Carthian Pull",
        "rating": "1",
        "book": " Carthians, p. 181",
        "prerequisite": " Vampire, Carthian Pull can never exceed a character’s Covenant Status (Carthians). "
      },
      {
        "name": "Close Family ",
        "rating": "1",
        "book": "Daeva - Kiss Of The Succubus, p. 117 ",
        "prerequisite": "Must be a vampire. "
      },
      {
        "name": "Coder Clique",
        "rating": "1",
        "book": " Carthians, p. 181 ",
        "prerequisite": " Covenant Status (Carthians) •, Computer •• "
      },
      {
        "name": "Connections ",
        "rating": "11",
        "book": " Damnation City, p. 200 ",
        "prerequisite": " Presence •• and Politics •• or Streetwise ••• "
      },
      {
        "name": "Crucible Ritual ",
        "rating": "3",
        "book": " Ordo Dracul, p. 202 ",
        "prerequisite": " Vampire, Convenant Status • (Ordo Dracul), Resolve •• and one or more tiers of Coils "
      },
      {
        "name": "Current Events Circle",
        "rating": "1",
        "book": " Carthians, p. 182",
        "prerequisite": " Covenant Status (Carthians) •, Politics •• "
      },
      {
        "name": "Debate Club ",
        "rating": "1",
        "book": " Carthians, p. 182",
        "prerequisite": " Covenant Status (Carthians) •, Persuasion •• "
      },
      {
        "name": "Domain ",
        "rating": "6",
        "book": " Damnation City, p. 200 ",
        "prerequisite": " Fealty Flaw "
      },
      {
        "name": "Encounter Group ",
        "rating": "1",
        "book": " Carthians, p. 182",
        "prerequisite": " Covenant Status (Carthians) •, Empathy •• "
      },
      {
        "name": "Feeding Ground ",
        "rating": "7",
        "book": " Damnation City, p. 202 ",
        "prerequisite": " Fealty Flaw (for •••• or ••••• only) "
      },
      {
        "name": "Fighting Style: Swarm Tactics",
        "rating": "1",
        "book": " Carthians, p. 183",
        "prerequisite": " Vampire, Covenant Status (Carthians) •, Brawl or Weaponry ••"
      },
      {
        "name": "Font Ritual ",
        "rating": "2",
        "book": " Ordo Dracul, p. 202",
        "prerequisite": " Vampire, Convenant Status • (Ordo Dracul), Academics • and Occult •• "
      },
      {
        "name": "Geomantic Nexus ",
        "rating": "1",
        "book": " Ordo Dracul, p. 202",
        "prerequisite": " Vampire, Convenant Status • (Ordo Dracul), Occult ••• and Wits •• "
      },
      {
        "name": "Good Breeding ",
        "rating": "1",
        "book": " Ventrue - Lords Over The Damned, p. 106",
        "prerequisite": "  Cannot have dots in Bad Breeding. Only certain bloodlines and clans in the city qualify as “well bred” for the purposes of this Merit, but whois esteemed varies from city to city. The Storyteller has final say on what clans or bloodlines make a character eligible for this Merit in the local city."
      },
      {
        "name": "Haven",
        "rating": "1",
        "book": " Vampire: The Requiem Core, p. 100 "
      },
      {
        "name": "Herd ",
        "rating": "1",
        "book": " Vampire: The Requiem Core, p. 102 "
      },
      {
        "name": "House Membership ",
        "rating": "1",
        "book": " The Invictus, p. 187",
        "prerequisite": " Vampire or ghoul "
      },
      {
        "name": "Inherited Resistance ",
        "rating": "9",
        "book": " Ventrue - Lords Over The Damned, p. 106",
        "prerequisite": " Dominate • or Animalism •, Ventrue only"
      },
      {
        "name": "Kindred Medium",
        "rating": "2",
        "book": " New Orleans: City of Dammed, p. 93",
        "prerequisite": " Vampire; Wits •• "
      },
      {
        "name": "Lab Section",
        "rating": "1",
        "book": " Carthians, p. 182 ",
        "prerequisite": " Covenant Status (Carthians) •, Medicine •• "
      },
      {
        "name": "Lordly Palette ",
        "rating": "1",
        "book": " Ventrue - Lords Over The Damned, p. 106",
        "prerequisite": " Kindred only "
      },
      {
        "name": "Mind of the Devouring Worm ",
        "rating": "3",
        "book": " Ordo Dracul, p. 204",
        "prerequisite": " Vampire, Convenant Status • (Ordo Dracul), Intelligence ••• "
      },
      {
        "name": "Mind of the Unblinking Serpent ",
        "rating": "2",
        "book": " Ordo Dracul, p. 204",
        "prerequisite": " Vampire, Convenant Status • (Ordo Dracul) Intelligence •••, Mind of the Devouring Worm, "
      },
      {
        "name": "Mind of the Inscrutable Hydra ",
        "rating": "2",
        "book": " Ordo Dracul, p. 204 ",
        "prerequisite": " Vampire, Convenant Status • (Ordo Dracul) Intelligence •••, Mind of the Unblinking Serpent "
      },
      {
        "name": "Night  Night Doctor Surgery ",
        "rating": "3",
        "book": " Carthians, p. 183",
        "prerequisite": " Vampire,  Covenant Status (Carthians) •••, Membership in a Night Doctor clique (see p. 33), "
      },
      {
        "name": "Site ",
        "rating": "4",
        "book": " Damnation City, p. 202 "
      },
      {
        "name": "Social Chameleon ",
        "rating": "1",
        "book": "Daeva - Kiss Of The Succubus, p. 115"
      },
      {
        "name": "Speaker for the Eclipsedn ",
        "rating": "1",
        "book": " The Invictus, p. 188",
        "prerequisite": " Vampire, Torpor Connection ••• "
      },
      {
        "name": "Status",
        "rating": "1",
        "book": " Vampire: The Requiem Core, p. 102 "
      },
      {
        "name": "Study Group",
        "rating": "1",
        "book": " Carthians, p. 181 ",
        "prerequisite": " Covenant Status (Carthians) •, Academics •• "
      },
      {
        "name": "Tap the Torpid Mind ",
        "rating": "1",
        "book": " The Invictus, p. 188"
      },
      {
        "name": "Temple ",
        "rating": "1",
        "book": " Circle Of The Crone, p. 42 ",
        "prerequisite": " Vampire, member of Circle of the Crone. "
      },
      {
        "name": "Tenant ",
        "rating": "6",
        "book": " Damnation City, p. 202 ",
        "prerequisite": " Domain Size • per Merit, Fealty Flaw "
      },
      {
        "name": "Theater Society",
        "rating": "1",
        "book": " Carthians, p. 182",
        "prerequisite": " Covenant Status (Carthians) •, Expression •• "
      },
      {
        "name": "The Right Bar",
        "rating": "1",
        "book": " Carthians, p. 182",
        "prerequisite": " Covenant Status (Carthians) •, Streetwise •• "
      },
      {
        "name": "Torpor Conection ",
        "rating": "1",
        "book": " The Invictus, p. 187",
        "prerequisite": " Vampire, Presence ••, House Membership • "
      },
      {
        "name": "Vassal ",
        "rating": "6",
        "book": " Damnation City, p. 203 ",
        "prerequisite": " Domain Size • per Merit, Fealty Flaw "
      },
      {
        "name": "Virtue’s Twin ",
        "rating": "3",
        "book": " The Invictus, p. 188",
        "prerequisite": " Vampire, House Membership ••• "
      },
      {
        "name": "Voyeur",
        "rating": "3",
        "book": "Daeva - Kiss Of The Succubus, p. 117 ",
        "prerequisite": "Must be a Daeva. "
      },
      {
        "name": "Will of the Dynasty ",
        "rating": "3",
        "book": " The Invictus, p. 188",
        "prerequisite": " Vampire, House Membership ••• "
      },
      {
        "name": "Debate Style: Reason ",
        "rating": "1",
        "book": " Requiem For Rome, p. 108 "
      },
      {
        "name": "Debate Style: Rhetoric ",
        "rating": "1",
        "book": " Requiem For Rome, p. 110 "
      },
      {
        "name": "Noble Heritage ",
        "rating": "4",
        "book": " Requiem For Rome, p. 111 "
      },
      {
        "name": "Patron ",
        "rating": "1",
        "book": " Requiem For Rome, p. 111 "
      },
      {
        "name": "Status: Camarilla ",
        "rating": "1",
        "book": " Requiem For Rome, p. 112 "
      },
      {
        "name": "Status: Wing ",
        "rating": "1",
        "book": " Requiem For Rome, p. 112 "
      },
      {
        "name": "Altar Stone ",
        "rating": "1",
        "book": "The War Against The Pure, p. 183"
      },
      {
        "name": "Animal Magnetism ",
        "rating": "3",
        "book": "The Rage - Forsaken Player's Guide, p. 105 "
      },
      {
        "name": "Anonymity ",
        "rating": "2",
        "book": "Blood Of The Wolf, p. 46 "
      },
      {
        "name": "Auspice Blessing ",
        "rating": "1",
        "book": "The Rage - Forsaken Player's Guide, p. 103 ",
        "prerequisite": "One auspice Affinity Skill at •• "
      },
      {
        "name": "Be Zoar ",
        "rating": "2",
        "book": "The War Against The Pure, p. 183 "
      },
      {
        "name": "Demolisher ",
        "rating": "1",
        "book": "Blood Of The Wolf, p.62 "
      },
      {
        "name": "Ephemeral Reckoning ",
        "rating": "2",
        "book": "The Rage - Forsaken Player's Guide, p. 103 "
      },
      {
        "name": "Eyrie ",
        "rating": "3",
        "book": "Territories, p. 47 "
      },
      {
        "name": "Fetish ",
        "rating": "1",
        "book": " Werewolf The Forsaken Core, p. 79 "
      },
      {
        "name": "Fighting Style: Savage Fury ",
        "rating": "1",
        "book": "The War Against The Pure, p. 183 "
      },
      {
        "name": "Fighting Style: Tooth and Claw ",
        "rating": "1",
        "book": "The Rage - Forsaken Player's Guide, p. 103 "
      },
      {
        "name": "Fighting Style: Wolf pack ",
        "rating": "1",
        "book": "The War Against The Pure, p. 44 "
      },
      {
        "name": "Flayed Lune ",
        "rating": "4",
        "book": " Blasphemies, p. 136 ",
        "prerequisite": "Bale Hound "
      },
      {
        "name": "Heal Like Stone ",
        "rating": "2",
        "book": " Blood Of The Wolf, p. 22 ",
        "prerequisite": " Werewolve"
      },
      {
        "name": "Howl Code ",
        "rating": "1",
        "book": "Lodges - The Splintered, p. 40 ",
        "prerequisite": "Membership in the Lodge of the Black Woods "
      },
      {
        "name": "Local ",
        "rating": "2",
        "book": "Territories, p. 47 "
      },
      {
        "name": "Metabolic Control ",
        "rating": "2",
        "book": "The Rage - Forsaken Player's Guide, p. 105 ",
        "prerequisite": "Stamina ••• "
      },
      {
        "name": "Moon-Centered ",
        "rating": "2",
        "book": "The Rage - Forsaken Player's Guide, p. 103 "
      },
      {
        "name": "Nimble Defender ",
        "rating": "4",
        "book": "Territories, p. 47 "
      },
      {
        "name": "Old Blood ",
        "rating": "1",
        "book": "The War Against The Pure, p. 184 "
      },
      {
        "name": "Pack Affinity ",
        "rating": "1",
        "book": "The Rage - Forsaken Player's Guide, p. 156"
      },
      {
        "name": "Pack Tactics ",
        "rating": "6",
        "book": "The Rage - Forsaken Player's Guide, p. 156 "
      },
      {
        "name": "Predator’s Gaze ",
        "rating": "2",
        "book": "The Rage - Forsaken Player's Guide, p. 105 "
      },
      {
        "name": "Prey Charm ",
        "rating": "3",
        "book": "The War Against The Pure, p. 185 "
      },
      {
        "name": "Protectorate ",
        "rating": "7",
        "book": "Forsaken Player's Guide, p. 174 "
      },
      {
        "name": "Scout ",
        "rating": "2",
        "book": "Territories, p. 48 "
      },
      {
        "name": "Secret Paths ",
        "rating": "2",
        "book": "Territories, p. 47 "
      },
      {
        "name": "Shield-Bearer ",
        "rating": "1",
        "book": " The War Against The Pure, p. 89 "
      },
      {
        "name": "Short Cuts ",
        "rating": "1",
        "book": "Territories, p. 47 "
      },
      {
        "name": "Staunch Defender ",
        "rating": "3",
        "book": "Territories, p. 48 "
      },
      {
        "name": "Strong Bloodline ",
        "rating": "1",
        "book": " The Pure, p. 111",
        "prerequisite": " Ivory Claw "
      },
      {
        "name": "Synergistics",
        "book": " Tribes Of The Moon, p. 150 ",
        "prerequisite": "Rituals ••• "
      },
      {
        "name": "Synergy ",
        "rating": "2",
        "book": "The Rage - Forsaken Player's Guide, p. 156 "
      },
      {
        "name": "Territorial Familiarity ",
        "rating": "1",
        "book": "Blood Of The Wolf, p. 99 "
      },
      {
        "name": "Totem ",
        "rating": "7",
        "book": " Werewolf The Forsaken Core, p. 79 "
      },
      {
        "name": "Vicious Attacker ",
        "rating": "3",
        "book": "Territories, p. 48 "
      },
      {
        "name": "Watched ",
        "rating": "1",
        "book": "Blood Of The Wolf, p. 126 "
      },
      {
        "name": "Additional Familiars ",
        "rating": "2",
        "book": " Tome Of The Watchtowers, p. 154 ",
        "prerequisite": "Thyrsus Path "
      },
      {
        "name": "Alchemical Lab ",
        "rating": "1",
        "book": " Tome Of The Mysteries, p. 146 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "Ancient Echoes ",
        "rating": "1",
        "book": " Banishers, p. 40 "
      },
      {
        "name": "Ancient Lands Awakening",
        "rating": "4",
        "book": " Grimoire Of Grimoires, p. 23"
      },
      {
        "name": "Ancient Signs ",
        "rating": "3",
        "book": " Guardians Of The Veil, p. 58 ",
        "prerequisite": " Occult •••, Guardians of the Veil Status • "
      },
      {
        "name": "Artifact ",
        "rating": "3",
        "book": " Mage: The Awakening Core , p. 80 "
      },
      {
        "name": "Astral Adept",
        "book": " Magical Traditions, p. 57 ",
        "prerequisite": "  Magical Tradition (Taoist); or Sleepwalker plus Taoist Skill package (see “Becoming a Taoist,” p. 51) "
      },
      {
        "name": "Athenaeum ",
        "rating": "1",
        "book": " The Mysterium, p.66 "
      },
      {
        "name": "Atlantean Hesychia ",
        "rating": "1",
        "book": " Secrets Of The Ruined Temple, p. 111 ",
        "prerequisite": " Awakened, High Speech "
      },
      {
        "name": "Blood of the Oath of Ruin ",
        "rating": "2",
        "book": " Intruders - Encounters With The Abyss, p. 131 "
      },
      {
        "name": "Body-Ravaging Magic",
        "rating": "3",
        "book": " Banishers, p. 41 "
      },
      {
        "name": "Celestial Name ",
        "rating": "1",
        "book": " Legacies: The Ancient, p. 114 "
      },
      {
        "name": "Daimon ",
        "rating": "3",
        "book": " Tome Of The Watchtowers, p. 66 "
      },
      {
        "name": "Destiny ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 81 ",
        "prerequisite": " Awakened "
      },
      {
        "name": "Dream ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 82 "
      },
      {
        "name": "Dreamland ",
        "rating": "1",
        "book": " Legacies: The Ancient, p. 21 ",
        "prerequisite": " Awakened, Dreamspeaker Legacy "
      },
      {
        "name": "Enhanced Item ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 82 "
      },
      {
        "name": "Extemporaneous Affinity ",
        "rating": "1",
        "book": " Banishers, p. 41 ",
        "prerequisite": " Awakened "
      },
      {
        "name": "Familiar ",
        "rating": "3",
        "book": " Mage: The Awakening Core, p. 82 ",
        "prerequisite": " Awakened "
      },
      {
        "name": "Fighting Style: Adamantine Hand ",
        "rating": "1",
        "book": " Adamantine Arrow, p. 53 "
      },
      {
        "name": "Friend of Beasts ",
        "rating": "1",
        "book": " Tome Of The Watchtowers, p. 154 ",
        "prerequisite": " Thyrsus Path "
      },
      {
        "name": "Feral Mien ",
        "rating": "3",
        "book": " Tome Of The Watchtowers, p. 154 ",
        "prerequisite": " Thyrsus Path"
      },
      {
        "name": "Geomancer ",
        "rating": "1",
        "book": "Sanctum And Sigil, p; 99 ",
        "prerequisite": "Occult Skill Specialty in Geomancy Effect: The character has a sense for the ley line energies "
      },
      {
        "name": "Geomancer ",
        "rating": "1",
        "book": " Secrets Of The Ruined Temple, p. 51 ",
        "prerequisite": "Occult Skill Specialty in Geomancy "
      },
      {
        "name": "Gesture Lore ",
        "rating": "1",
        "book": " Tome Of The Mysteries, p. 94 "
      },
      {
        "name": "Glyph Lore ",
        "rating": "1",
        "book": " Tome Of The Mysteries, p. 97 "
      },
      {
        "name": "Goetic Familiar",
        "rating": "4",
        "book": " Grimoire Of Grimoires, p. 96",
        "prerequisite": " Awakened; successful casting of the Goetic Manifestation spell "
      },
      {
        "name": "Graduate of Otranto ",
        "rating": "3",
        "book": " The Mysterium, p. 72 "
      },
      {
        "name": "Guardian Ghost ",
        "rating": "2",
        "book": " Sanctum And Sigil, p. 85 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "Guardian Retainer ",
        "rating": "1",
        "book": " Sanctum And Sigil, p. 85 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "Guardian Spirit ",
        "rating": "2",
        "book": " Sanctum And Sigil, p. 86 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "Hallow ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 83 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "High Speech ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 84 ",
        "prerequisite": " Awakened "
      },
      {
        "name": "Homeward Bound ",
        "rating": "3",
        "book": " Grimoire Of Grimoires, p. 104"
      },
      {
        "name": "Identit Identity Anchor ",
        "rating": "2",
        "book": " Tome Of The Watchtowers, p. 153 ",
        "prerequisite": " Thyrsus Path"
      },
      {
        "name": "Image of Perfection ",
        "rating": "3",
        "book": " Legacies: The Ancient, p. 125 ",
        "prerequisite": " Echo Walker, Death 2 "
      },
      {
        "name": "Imbued Item ",
        "rating": "2",
        "book": " Mage: The Awakening Core, p. 84 "
      },
      {
        "name": "Law of Embodiment ",
        "rating": "5",
        "book": " Tome Of The Mysteries, p.77 ",
        "prerequisite": " Gnosis 3, knowledge of at least five rotes "
      },
      {
        "name": "Library ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 85 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "Long Shifting ",
        "rating": "1",
        "book": " Tome Of The Watchtowers, p. 154 ",
        "prerequisite": " Thyrsus Path"
      },
      {
        "name": "Lu ",
        "rating": "1",
        "book": " Magical Traditions, p. 54 "
      },
      {
        "name": "Magical Tradition ",
        "rating": "2",
        "book": " Magical Traditions, p. 23 ",
        "prerequisite": " Awakened, Occult 2, Academics or Occult Skill Specialty representing the tradition "
      },
      {
        "name": "Mana Self-Sacrifice ",
        "rating": "1",
        "book": " Banishers, p. 41 ",
        "prerequisite": "  Awakened (Banisher or Storyteller’s permission); must be purchased with bonus Merit dots "
      },
      {
        "name": "Manifestation Machine ",
        "rating": "1",
        "book": " The Free Council, p. 131 "
      },
      {
        "name": "Masque ",
        "rating": "1",
        "book": " Guardians Of The Veil, p.69 ",
        "prerequisite": " Manipulation •••, Guardians of the Veil Status • "
      },
      {
        "name": "Master Exorcist ",
        "rating": "2",
        "book": " Tome Of The Watchtowers, p. 153 ",
        "prerequisite": " Thyrsus Path, Spirit ••• "
      },
      {
        "name": "Mystery Initiation ",
        "rating": "1",
        "book": " The Mysterium, p. 102 ",
        "prerequisite": " Mysterium Status of at least equal the rating in this Merit. "
      },
      {
        "name": "Nimbus Sense ",
        "rating": "2",
        "book": " Banishers, p. 42 ",
        "prerequisite": " Awakened (Banisher or Storyteller’s permission) "
      },
      {
        "name": "Oathbound",
        "book": " Adamantine Arrow, p. 63 "
      },
      {
        "name": "Occultation ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 86 ",
        "prerequisite": " Awakened, no Fame Merit dots "
      },
      {
        "name": "Otherwordly Eyes ",
        "rating": "2",
        "book": " Tome Of The Watchtowers, p. 154 ",
        "prerequisite": " Thyrsus Path,Spirit • "
      },
      {
        "name": "Portable ",
        "rating": "1",
        "book": " The Mysterium, p. 141 "
      },
      {
        "name": "Potent Familiar ",
        "rating": "2",
        "book": " Tome Of The Watchtowers, p. 154 ",
        "prerequisite": "Thyrsus Path "
      },
      {
        "name": "Predator’s Innocence ",
        "rating": "3",
        "book": " Tome Of The Watchtowers, p. 154",
        "prerequisite": " Thyrsus Path "
      },
      {
        "name": "Ractain Strain ",
        "rating": "3",
        "book": " Intruders - Encounters With The Abyss, p. 166 "
      },
      {
        "name": "Ritual Synergy ",
        "rating": "3",
        "book": " Tome Of The Mysteries, p.74 ",
        "prerequisite": " Gnosis 3 (for •••) or Gnosis 5 (for •••••) "
      },
      {
        "name": "Rote Specialty ",
        "rating": "1",
        "book": " Banishers, p. 42 "
      },
      {
        "name": "Sanctum ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 86 "
      },
      {
        "name": "Sanctum Gauntlet ",
        "rating": "1",
        "book": " Sanctum And Sigil, p. 86 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "Sanctum Materials ",
        "rating": "7",
        "book": " Sanctum And Sigil, p. 86 ",
        "prerequisite": " Sanctum "
      },
      {
        "name": "Scriptorium ",
        "rating": "2",
        "book": " The Mysterium, p. 67 ",
        "prerequisite": " Sanctum • "
      },
      {
        "rating": "Seventh Son/Daughter of a Seventh Son/Daughter",
        "book": " Magical Traditions, p. 122 "
      },
      {
        "name": "Skald Cant ",
        "rating": "1",
        "book": " Legacies: The Ancient, p. 86 ",
        "prerequisite": " Skald, Composure 2, Expression 2 "
      },
      {
        "name": "Sleepwalker Retainer ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 88 "
      },
      {
        "name": "Spirit Status ",
        "rating": "2",
        "book": " Tome of the Watchtowers, p. 154 ",
        "prerequisite": "Thyrsus Path "
      },
      {
        "name": "Status ",
        "rating": "1",
        "book": " Mage: The Awakening Core, p. 88 "
      },
      {
        "name": "Stranger No More",
        "rating": "5",
        "book": " Grimoire Of Grimoires, p. 104"
      },
      {
        "name": "Supernal Resistance ",
        "rating": "2",
        "book": " Banishers, p. 42 ",
        "prerequisite": "  Awakened (Banisher or Storyteller’s permission); must be purchased with bonus Merit dots "
      },
      {
        "name": "Tendogakure Hyoho",
        "rating": "3",
        "book": " Grimoire Of Grimoires, p. 71",
        "prerequisite": " Awakened, studied the Gogyo Hiden Bujutsu "
      },
      {
        "name": "Tetsujin Undo Hyoho",
        "rating": "4",
        "book": " Grimoire Of Grimoires, p. 69 "
      },
      {
        "name": "Thrall ",
        "rating": "3",
        "book": " Mage: The Awakening Core, p. 89 "
      },
      {
        "name": "Acid Stomach ",
        "rating": "1",
        "book": " Strange Alchemies, p. 55 "
      },
      {
        "name": "Azothic Object ",
        "rating": "1",
        "book": " Strange Alchemies, p. 55 "
      },
      {
        "name": "Companion ",
        "rating": "3",
        "book": " Strange Alchemies, p. 55 ",
        "prerequisite": " Ephemeral Flesh Bestowment "
      },
      {
        "name": "Device ",
        "rating": "2",
        "book": " Saturnine Nights, p. 59 ",
        "prerequisite": " Unfleshed "
      },
      {
        "name": "Elpis ",
        "rating": "1",
        "book": " Promethean: The Created Core, p. 95 "
      },
      {
        "name": "Famous Face ",
        "rating": "1",
        "book": " Strange Alchemies, p. 56 "
      },
      {
        "name": "Fighting Style: Brute Force ",
        "rating": "1",
        "book": " Strange Alchemies, p. 57 "
      },
      {
        "name": "Fighting Style: Multi-Limbed Combat ",
        "rating": "1",
        "book": " Pandora’s Book, p. 50 "
      },
      {
        "name": "Fresh Corpse ",
        "rating": "2",
        "book": " Strange Alchemies, p.58 "
      },
      {
        "name": "Good Brain ",
        "rating": "3",
        "book": " Strange Alchemies, p. 58 "
      },
      {
        "name": "Hideous Anyway ",
        "rating": "2",
        "book": " Strange Alchemies, p. 58 "
      },
      {
        "name": "Incorruptible ",
        "rating": "4",
        "book": " Pandora’s Book, p. 49 "
      },
      {
        "name": "Lair ",
        "rating": "1",
        "book": " Promethean: The Created Core, p. 96 "
      },
      {
        "name": "Pilgrim ",
        "rating": "2",
        "book": " Magnum Opus, p. 53 ",
        "prerequisite": " Promethean; must have experienced (but not necessarily yet completed) the Revelation "
      },
      {
        "name": "Pilgrim ",
        "rating": "5",
        "book": " Strange Alchemies, p.58 "
      },
      {
        "name": "Repute ",
        "rating": "1",
        "book": " Promethean: The Created Core, p. 97 "
      },
      {
        "name": "Residual Memory ",
        "rating": "1",
        "book": " Promethean: The Created Core, p. 97 ",
        "prerequisite": " Promethean "
      },
      {
        "name": "Shabti ",
        "rating": "3",
        "book": " Strange Alchemies, p. 58 ",
        "prerequisite": " Revivification Bestowment "
      },
      {
        "name": "Shepherd ",
        "rating": "4",
        "book": " Strange Alchemies, p. 59 "
      },
      {
        "name": "Unpalatable Aura ",
        "rating": "2",
        "book": " Promethean: The Created Core, p. 98 ",
        "prerequisite": " Promethean "
      },
      {
        "name": "Weatherproof ",
        "rating": "1",
        "book": " Strange Alchemies, p. 59 "
      },
      {
        "name": "Arcadian Body ",
        "rating": "4",
        "book": " Rites Of Spring, p. 87",
        "prerequisite": " Three or more dots on the affected Attribute "
      },
      {
        "name": "Arcadian Metabolism ",
        "rating": "3",
        "book": " Rites Of Spring, p. 87 "
      },
      {
        "name": "Archive ",
        "rating": "1",
        "book": " Rites of Spring, p. 87 ",
        "prerequisite": " Hollow "
      },
      {
        "name": "Bloodied Ground ",
        "rating": "5",
        "book": " Autumn Nightmares, p. 103 "
      },
      {
        "name": "Broken Mirror ",
        "rating": "7",
        "book": " Changeling: The Lost Core, p. 259 "
      },
      {
        "name": "Brownies Boon ",
        "rating": "1",
        "book": " Rites Of Spring, p. 88 "
      },
      {
        "name": "Charmed Life ",
        "rating": "2",
        "book": " Rites Of Spring, p. 88 "
      },
      {
        "name": "Court Goodwill ",
        "rating": "1",
        "book": " Changeling: The Lost Core, p. 93 "
      },
      {
        "name": "Cuckoos Egg ",
        "rating": "7",
        "book": " Autumn Nightmares, p. 103 "
      },
      {
        "name": "Devotee ",
        "rating": "1",
        "book": "Equinox Road, p. 14 ",
        "prerequisite": "Wyrd 7 "
      },
      {
        "name": "Dual Kith ",
        "rating": "3",
        "book": " Winter Masques, p. 98 "
      },
      {
        "name": "Dual Kith ",
        "rating": "2",
        "book": " Rites Of Spring, p. 88 "
      },
      {
        "name": "Enchanted Mortal ",
        "rating": "2",
        "book": "Equinox Road, p. 107 "
      },
      {
        "name": "Enchanting Performance ",
        "rating": "4",
        "book": " Rites Of Spring, p. 88 ",
        "prerequisite": " Expression ••• "
      },
      {
        "name": "Fae Mount ",
        "rating": "1",
        "book": " Rites Of Spring, p. 89 "
      },
      {
        "name": "Fae Pet ",
        "rating": "2",
        "book": " Autumn Nightmares, p. 71 "
      },
      {
        "name": "Faerie Favor ",
        "rating": "3",
        "book": " Rites Of Spring, p. 90 "
      },
      {
        "name": "Faerie Healing ",
        "rating": "2",
        "book": " Rites Of Spring, p. 90 "
      },
      {
        "name": "False Heart ",
        "rating": "7",
        "book": " Autumn Nightmares, p. 103 "
      },
      {
        "name": "Fetch-Bane ",
        "rating": "7",
        "book": " Autumn Nightmares, p. 103 "
      },
      {
        "name": "Fighting Style: Dream Combat ",
        "rating": "1",
        "book": " Rites Of Spring, p. 90",
        "prerequisite": " Wyrd •••, Empathy ••• "
      },
      {
        "name": "Fighting Style: Hedge Duelist ",
        "rating": "1",
        "book": " Rites Of Spring, p. 91",
        "prerequisite": " Wyrd ••• "
      },
      {
        "name": "Gentrified Bearing ",
        "rating": "4",
        "book": " Rites Of Spring, p. 92",
        "prerequisite": " Wyrd ••• "
      },
      {
        "name": "Goblin Vow ",
        "rating": "1",
        "book": " Rites Of Spring, p. 38"
      },
      {
        "name": "Harvest ",
        "rating": "1",
        "book": " Changeling: The Lost Core, p. 94 "
      },
      {
        "name": "181",
        "book": " Autumn Nightmares, p. 132 "
      },
      {
        "name": "Hedge Gate Sense ",
        "rating": "1",
        "book": " Rites Of Spring, p. 92"
      },
      {
        "name": "Hidden Life ",
        "rating": "1",
        "book": " Rites Of Spring, p. 92",
        "prerequisite": " No dots in Fame, Wyrd equal to Hidden Life "
      },
      {
        "name": "Hob Kin ",
        "rating": "2",
        "book": " Rites Of Spring, p. 92",
        "prerequisite": " Hollow •+ "
      },
      {
        "name": "Hobgoblin Trainer ",
        "rating": "2",
        "book": " Rites Of Spring, p. 93"
      },
      {
        "name": "Hollow ",
        "rating": "1",
        "book": " Changeling: The Lost Core, p. 94 "
      },
      {
        "name": "Lethal Mien ",
        "rating": "2",
        "book": " Rites Of Spring, p. 94",
        "prerequisite": " Wyrd 3 "
      },
      {
        "name": "Long of Days ",
        "rating": "2",
        "book": " Rites Of Spring, p. 94"
      },
      {
        "name": "Manymask ",
        "rating": "1",
        "book": "Equinox Road, p. 14 ",
        "prerequisite": "Wyrd 7 "
      },
      {
        "name": "Market Sense ",
        "rating": "1",
        "book": " Rites Of Spring, p. 94"
      },
      {
        "name": "Mantle ",
        "rating": "1",
        "book": " Changeling: The Lost Core, p. 97 "
      },
      {
        "name": "New Identity ",
        "rating": "1",
        "book": " Changeling: The Lost Core, p. 98 "
      },
      {
        "name": "No Seeming ",
        "rating": "2",
        "book": "Equinox Road, p. 107 ",
        "prerequisite": "Changelings only "
      },
      {
        "name": "Outsider Fetish ",
        "rating": "1",
        "book": "Lords Of Summer, p. 150 ",
        "prerequisite": "Changeling "
      },
      {
        "name": "Perfect Stillness ",
        "rating": "1",
        "book": " Rites Of Spring, p. 94",
        "prerequisite": " Stealth • "
      },
      {
        "name": "Pledgesmith ",
        "rating": "1",
        "book": " Rites Of Spring, p. 94"
      },
      {
        "name": "Prophet Circle ",
        "rating": "1",
        "book": " Rites of Spring, p. 94"
      },
      {
        "name": "Rigid Mask ",
        "rating": "2",
        "book": " Rites Of Spring, p. 95",
        "prerequisite": " Subterfuge •• "
      },
      {
        "name": "Ritual Doorway ",
        "rating": "3",
        "book": " Rites Of Spring, p. 95",
        "prerequisite": " Hollow Doors (•••••) "
      },
      {
        "name": "Seeming ",
        "rating": "3",
        "book": "Equinox Road, p. 107 ",
        "prerequisite": "Fae-Touched Mortals Only "
      },
      {
        "name": "Shared Guilt ",
        "rating": "7",
        "book": " Autumn Nightmares, p. 103 "
      },
      {
        "name": "Siren Song ",
        "rating": "3",
        "book": " Rites Of Spring, p. 96"
      },
      {
        "name": "Soul Sense ",
        "rating": "2",
        "book": " Rites Of Spring, p. 96",
        "prerequisite": " A living fetch "
      },
      {
        "name": "Sublime ",
        "rating": "5",
        "book": "Equinox Road, p. 14 ",
        "prerequisite": "Wyrd 9 "
      },
      {
        "name": "Token ",
        "rating": "1",
        "book": " Changeling: The Lost Core, p. 98 "
      },
      {
        "name": "Token Maker ",
        "rating": "3",
        "book": " Rites Of Spring, p. 150"
      },
      {
        "name": "Tokenmaster ",
        "rating": "3",
        "book": "Equinox Road, p. 14 ",
        "prerequisite": "Wyrd 7 "
      },
      {
        "name": "Visionary Dreams ",
        "rating": "2",
        "book": " Rites Of Spring, p. 96",
        "prerequisite": " Wyrd ••• "
      },
      {
        "name": "Wisdom of Dreams ",
        "rating": "3",
        "book": " Rites Of Spring, p. 97",
        "prerequisite": " Wyrd ••+ "
      },
      {
        "name": "Workshop ",
        "rating": "1",
        "book": " Rites Of Spring, p. 97",
        "prerequisite": " Hollow, Hollow Size equal to points in Workshop "
      },
      {
        "name": "Wyrdskill ",
        "rating": "5",
        "book": "Equinox Road, p. 15 ",
        "prerequisite": "Wyrd 6 "
      },
      {
        "name": "Endowments ",
        "rating": "1",
        "book": "Hunter: The Vigil Core, p. 67 ",
        "prerequisite": "Membership (at least one dot of Status) in a third-tier conspiracy. "
      },
      {
        "name": "Favored Weapon ",
        "rating": "2",
        "book": "Hunter: The Vigil Core, p. 67 "
      },
      {
        "name": "Professional Training ",
        "rating": "1",
        "book": "Hunter: The Vigil Core, p. 67 "
      },
      {
        "name": "Safehouse ",
        "rating": "1",
        "book": "Hunter: The Vigil Core, p. 70 "
      },
      {
        "name": "Status, Compact or Conspiracy ",
        "rating": "1",
        "book": "Hunter: The Vigil Core, p. 73 "
      },
      {
        "name": "Torture Suite ",
        "rating": "1",
        "book": "Hunter: The Vigil Core, p. 74 "
      }
    ];
