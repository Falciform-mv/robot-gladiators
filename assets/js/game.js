
var playerName = window.prompt("What is yo robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function() {
    // Alerts players that they are starting th round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract value of playerAttack from enemyHealth and use that result to update value in enemyHealth var
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know that it worked
    console.log(
        playerName + "attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract value of enemyAttack from value of playerHealth and use that result to update value in playerHealth var
    playerHealth = playerHealth - enemyAttack;

    // log a resulting message to console so we know it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    // check to see if we have died
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }


};




fight()