
var playerName = window.prompt("What is yo robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;



var fight = function(enemyName) {
    // repeat and execute as long as enemy is alive
    while(enemyHealth > 0) {

        // Alerts players that they are starting th round
        window.alert("Welcome to Robot Gladiators!");

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

        // If player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy health by subtracting amount set in playerattack
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
            );
        

            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + "has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove players health
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left. "
            );

            // check to see if we have died
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight");
                playerMoney = playerMoney - 2;

            }
            else {
                fight();
            }
        } 

        else {
            window.alert("You need to choose a valid option, try again");
        }
    }

};



// Executes the Fight function
// fight()

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
