$(document).ready();
//These objects are my four factions, all of thes values are placeholders until I work out the game mechanics
var $NCR = $("#NCR");
var $BoS = $("#BoS");
var $Khans = $("#Khans");
var $Legion = $("#Legion");

var NCR = {
    HP: 120,
    attack: 6,
    base_attack: 6,
    counter_attack: 15,
    name: "New California Republic",
    div: $("#NCR")
}
var BoS = {
    HP: 100,
    attack: 8,
    base_attack: 8,
    counter_attack: 10,
    name: "Brotherhood of Steel",
    div: $("#BoS")
}
var Khans = {
    HP: 150,
    attack: 4,
    base_attack: 4,
    counter_attack: 20,
    name: "The Great Khans",
    div: $("#Khans")
}
var Legion = {
    HP: 180,
    attack: 2,
    base_attack: 2,
    counter_attack: 25,
    name: "Caesar's Legion",
    div: $("#Legion")
}

//When the player clicks on the faction, I want to store that faction as "player"
var player = {};
//When we click on the faction we want to attack, I'm going to have that enemy stored as "defender"
var defender = {};
var enemies = [];
var gamestarted = false;
//The game starts on click, when the player chooses a faction
$("#gamemaster").text("Select your faction to begin!")
var choosefaction = function () {
    //if (gamestarted = false) {
    $NCR.on("click", function () {

        player = NCR;
        enemies = [BoS, Khans, Legion];
        console.log(player.name);
        console.log(enemies);
        $("#gamemaster").text("Pick a faction to go to war with");
        gamestarted = true;

    })

    $BoS.on("click", function () {
        player = BoS;
        enemies = [NCR, Khans, Legion];
        console.log(player.name);
        console.log(enemies);
        $("#gamemaster").text("Pick a faction to go to war with");
        gamestarted = true;

    })
    $Khans.on("click", function () {
        player = Khans;
        enemies = [NCR, BoS, Legion];
        console.log(player.name);
        console.log(enemies);
        $("#gamemaster").text("Pick a faction to go to war with");
        gamestarted = true;

    })
    $Legion.on("click", function () {
        player = Legion;
        enemies = [NCR, BoS, Khans];
        console.log(player.name);
        console.log(enemies);
        $("#gamemaster").text("Pick a faction to go to war with");
        gamestarted = true;

    })
}
//else {
player.div.detach().appendTo("#player");
for (var i = 0; i < enemies.length; i++) {
    enemies[i].div.detach().appendTo("#enemies");
}
//}
//}

//After choosing your faction, we need to set all other factions as enemies
//maybe add that as an attribute, then set different style rules for said enemies?
choosefaction();

//I need a better way to track damage.
//var attack = function () {
//    player.HP - defender.counter_attack;
//    defender.HP - player.attack;
//    player.attack + base_attack;
//};
//$("#attack").click(attack());