$(document).ready();
//These objects are my four factions, all of thes values are placeholders until I work out the game mechanics
var $NCR = $("#NCR");
var $BoS = $("#BoS");
var $Khans = $("#Khans");
var $Legion = $("#Legion");

var NCR = {
    HP: 120,
    attack: 6,
    counter_attack: 20,
    name: "New California Republic",
    div: $NCR
}
var BoS = {
    HP: 120,
    attack: 6,
    counter_attack: 20,
    name: "Brotherhood of Steel",
    div: $BoS
}
var Khans = {
    HP: 120,
    attack: 6,
    counter_attack: 20,
    name: "The Great Khans",
    div: $Khans
}
var Legion = {
    HP: 120,
    attack: 6,
    counter_attack: 20,
    name: "Caesar's Legion",
    div: $Legion
}

//When the player clicks on the faction, I want to store that faction as "player"
var player = {};
//When we click on the faction we want to attack, I'm going to have that enemy stored as "defender"
var defender = {};
var enemies = [];
var gamestarted = false;
//The game starts on click, when the player chooses a faction
function choosefaction() {//looks like it only selects NCR at the moment, need to allow for other factions to be chosen.
    $NCR.on("click", function () {
        player = NCR;
        enemies = [BoS, Khans, Legion];
        console.log(player.name);
        console.log(enemies);
    })

    $BoS.on("click", function () {
        player = BoS;
        enemies = [NCR, Khans, Legion];
        console.log(player.name);
        console.log(enemies);
    })
    $Khans.on("click", function () {
        player = Khans;
        enemies = [NCR, BoS, Legion];
        console.log(player.name);
        console.log(enemies);
    })
    $Legion.on("click", function () {
        player = Legion;
        enemies = [NCR, BoS, Khans];
        console.log(player.name);
        console.log(enemies);
    })
}

$("#gamemaster").text("Select your faction to begin!")
function startgame() {
    $("#gamemaster").text("Pick a faction to go to war with");


};
//After choosing your faction, we need to set all other factions as enemies
//maybe add that as an attribute, then set different style rules for said enemies?
$(function () {

    choosefaction();
    $("#stage").on("click", function () {

        if (!gamestarted) {
            startgame();

        }
    })
})