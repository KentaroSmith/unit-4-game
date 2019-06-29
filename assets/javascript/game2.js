$(document).ready();
//These objects are my four factions, all of thes values are placeholders until I work out the game mechanics


//global variables
var factions = {
    "New California Republic": {
        name: "New California Republic",
        HP: 120,
        attack: 6,
        base_attack: 6,
        counter_attack: 15,
        imgurl: "assets/images/NCR.png"
    },
    "Brotherhood of Steel": {
        name: "Brotherhood of Steel",
        HP: 100,
        attack: 8,
        base_attack: 8,
        counter_attack: 10,
        imgurl: "assets/images/BoS.png"
    },
    "The Great Khans": {
        name: "The Great Khans",
        HP: 100,
        attack: 8,
        base_attack: 8,
        counter_attack: 10,
        imgurl: "assets/images/GreatKhans.png"
    },
    "Legion": {
        name: "Legion",
        HP: 180,
        attack: 2,
        base_attack: 2,
        counter_attack: 25,
        imgurl: "assets/images/Legion.png"
    }
}
var enemies = [];
var selectedFaction;
var currDefender;
var turnCounter = 1;
var kills = 0;
var renderOne = function (factions, renderArea, factionStatus) {
    var facDiv = $("<div class='faction' data-name='" + factions.name + "'>");
    var facName = $("<div class ='faction-name'>").text(factions.name);
    var facImg = $("<img class='faction-image'>").attr("src", factions.imgurl);
    var facHealth = $("<div class ='faction-health'>").text(factions.HP + " HP");
    facDiv.append(facName).append(facImg).append(facHealth);
    $(renderArea).append(facDiv);

    if (factionStatus === "enemy") {
        $(facDiv).addClass("enemy");

    }
    else if (factionStatus === "defender") {
        currDefender = defender;
        $(facDiv).addClass("target");
    }
}
var renderMessage = function (message) {
    var gameMessageSet = $("#gamemaster");
    var newMessage = $("<div>").text(message)
    gameMessageSet.append(newMessage);

    if (message === "clearMessage") {
        gameMessageSet.text("");
    }
}

var renderFactions = function (charObj, areaRender) {
    if (areaRender === "#stage") {
        $(areaRender).empty();
        for (var key in charObj) {
            if (charObj.hasOwnProperty(key)) {
                renderOne(charObj[key], areaRender, "");
            }
        }
    }
    if (areaRender === "#player") {
        renderOne(charObj, areaRender, "");
    }
    if (areaRender === "#enemies") {
        for (var i = 0; i < charObj.length; i++) {
            renderOne(charObj[i], areaRender, "enemy");
        }
        $(document).on("click", ".enemy", function () {
            var name = ($(this).attr("data-name"));
            if ($("#defender").children().length === 0) {
                renderFactions(name, "#defender");
                $(this).hide();
            }
        })
    }
    if (areaRender === "#defender") {
        $(areaRender).empty();
        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i].name === charObj) {
                renderOne(enemies[i], areaRender, "#defender")
            }
        }
    }
    if (areaRender === "enemyDamage") {
        $("#player").empty();
        renderOne(charObj, "#player", "")
    }
    if (areaRender === "enemyDefeated") {
        $("#defender").empty();
    }
}

renderFactions(factions, "#stage");

//on click listener will allow the user to pick their faction, and push all other factions as enemies
$(document).on("click", ".faction", function () {
    var name = $(this).attr('data-name');
    console.log(name);
    if (!selectedFaction) {
        selectedFaction = factions[name];
        for (var key in factions) {
            if (key !== name) {
                enemies.push(factions[key])
            }
        }
        $("#stage").hide();
        renderFactions(selectedFaction, "#player");
        renderFactions(enemies, "#enemies");
    }
})
$("#attack").on("click", function () {
    if ($("#defender").children().length !== 0) {
        currDefender = $("#defender").children().attr('data-name');//adding this line in, having trouble choosing the defender
        currDefender.HP -= (selectedFaction.attack * turnCounter)
        if (currDefender.HP > 0) {
            renderFactions(currDefender, "playerDamage");
            selectedFaction.HP -= currDefender.counter_attack;
            renderFactions(selectedFaction, "enemyDamage")
        }
        else {
            renderFactions(currDefender, "enemyDefeated")
            kills++;
            if (kills >= 3) {

            }
        }


    }
    turnCounter++;

})

//current progress: Needs some work in the attack function -  kills aren't registering, and 'attack' just one shots everything