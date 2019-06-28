$(document).ready();
//These objects are my four factions, all of thes values are placeholders until I work out the game mechanics
//var $NCR = $("#NCR");
//var $BoS = $("#BoS");
//var $Khans = $("#Khans");
//var $Legion = $("#Legion");

//global variables
var characters = {
    "NCR": {
        name: "New California Republic",
        HP: 120,
        attack: 6,
        base_attack: 6,
        counter_attack: 15,
        imgurl: "assets/images/NCR.png"
    },
    "BoS": {
        name: "Brotherhood of Steel",
        HP: 100,
        attack: 8,
        base_attack: 8,
        counter_attack: 10,
        imgurl: "assets/images/BoS.png"
    },
    "Khans": {
        name: "The Great Khans",
        HP: 100,
        attack: 8,
        base_attack: 8,
        counter_attack: 10,
        imgurl: "assets/images/GreatKhans.png"
    },
    "Legion": {
        name: "Caesar's Legion",
        HP: 180,
        attack: 2,
        base_attack: 2,
        counter_attack: 25,
        imgurl: "assets/images/Legion.png"
    }
}
var enemies = [];
var selectedFaction;
var renderOne = function (characters, renderArea) {
    var charDiv = $("<div class='faction' data-name='" + characters.name + "'>");
    var charName = $("<div class ='character-name'>").text(characters.name);
    var charImg = $("<img class='character-image'>").attr("src", characters.imgurl);
    var charHealth = $("<div class ='character-health'>").text(characters.HP + " HP");
    charDiv.append(charName).append(charImg).append(charHealth);
    $(renderArea).append(charDiv);
}

console.log(characters)
var renderCharacters = function (charObj, areaRender) {
    if (areaRender === "#stage") {
        $(areaRender).empty();
        for (var key in charObj) {
            if (charObj.hasOwnProperty(key)) {
                renderOne(charObj[key], areaRender);
            }
        }
    }
}

renderCharacters(characters, "#stage");

//This part of the code is where the actual interactivity comes in to play
$(document).on("click", ".faction", function () {
    var name = $(this).attr("data-name");
    if (!selectedFaction) {
        for (var key in characters) {
            if (key !== name) {
                enemies.push(characters[key])
            }
        }
        $("#stage").hide();
    }
})

