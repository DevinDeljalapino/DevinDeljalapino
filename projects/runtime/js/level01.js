var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade (x,y){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        //sawBladeHitZone.x = 400;
        //sawBladeHitZone.y = 480;
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/45.png");
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        x = 0;
        y = 0;
        }

        createSawBlade(400,500);
        createSawBlade(1500,400);
        createSawBlade(765,525);
        createSawBlade(1800,375);
        createSawBlade(2200,315);

        function fire (x, y) {
        var hitZoneSize = 35;
        var damageFromObstacle = 5;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/fire2.png");
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -37.5;
        obstacleImage.y = -40;
        x = 0;
        y = 0;
}
        fire (2300,495);
        fire (1300,495);
        fire (3000,495);

        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(60, 120, "red");
        redSquare.x = -30;
        redSquare.y = -57.5;
        enemy.addChild(redSquare);
        enemy.x = 750;
        enemy.y = groundY - 50;
        game.addGameItem(enemy);
        enemy.velocityX = -.5;
        //enemy.rotationalVelocity =1;
        //enemy.velocityY =;
        enemy.onPlayerCollision = function zombie () {
        game.changeIntegrity(-25);
        }


        
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
