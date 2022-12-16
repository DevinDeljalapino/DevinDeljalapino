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
                { "type": "sawblade", "x": 400, "y": groundY -95 },
                { "type": "sawblade", "x": 1500, "y": groundY - 10 },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "fire", "x": 1200, "y": groundY },
                { "type": "enemy", "x": 1700, "y": groundY },
                { "type": "reward", "x": 2000, "y": groundY },
            ]
            
        };
        var firstGameItemObject = levelData.gameItems[0];
        var firstX = firstGameItemObject.x;
        var firstY = firstGameItemObject.y;
        createSawBlade(firstX, firstY);
        for (var i = 0; i < levelData.gameItems.length; i++) {
        var eachElement = levelData.gameItems[i];
        

  // code to do something with each element
}

        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade (x, y){
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
        // x = 0;
        // y = 0;
        }

        createSawBlade(400, groundY - 95);
        createSawBlade(1500, groundY - 10);
        createSawBlade(765,groundY - 20);
        createSawBlade(1800,groundY - 100);
        createSawBlade(2200,groundY - 40);

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
        fire (2300,groundY - 10);
        fire (1300,groundY - 10);
        fire (3000,groundY - 10);

        // var enemy = game.createGameItem("enemy", 25);
        // var redSquare = draw.rect(60, 120, "red");
        // redSquare.x = -30;
        // redSquare.y = -57.5;
        // enemy.addChild(redSquare);
        // enemy.x = 750;
        // enemy.y = groundY - 50;
        // game.addGameItem(enemy);
        // enemy.velocityX = -.5;
        // //enemy.rotationalVelocity =1;
        // //enemy.velocityY =;
        // enemy.onPlayerCollision = function zombie () {
        // game.changeIntegrity(-25);
        // }

        // enemy.onProjectileCollision = function health () {
        //     game.increaseScore(1000);
        //     //enemy.fadeOut();
        //     //enemy.shrink();
        //     enemy.flyTo(1000,350);

        // }
        function createEnemy (x, y) {
        var enemy = game.createGameItem("enemy", 25);
        //var redSquare = draw.rect(60, 120, "red");
        var redSquare = draw.bitmap("img/zomb.png");
        redSquare.x = -30;
        redSquare.y = -57.5;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -.85;
        //enemy.rotationalVelocity =1;
        //enemy.velocityY =;
        enemy.onPlayerCollision = function () {
        game.changeIntegrity(-25);
        }
        enemy.onProjectileCollision = function () {
            game.increaseScore(500);
            //enemy.fadeOut();
            //enemy.shrink();
            enemy.flyTo(1000,350);
        }
        }
        createEnemy (1090,groundY - 70);
        createEnemy (2000,groundY - 70);
        createEnemy (1250,groundY - 70);
        createEnemy (700,groundY - 70);
        createEnemy (2300,groundY - 70);

        function createReward (x, y){
        var goldenApple = game.createGameItem("goldenApple", 25);
        var apple = draw.bitmap("img/apple (2).png");
        goldenApple.x = x;
        goldenApple.y = y;
        goldenApple.addChild(apple);
        apple.x = -30;
        apple.y = -30;
        game.addGameItem(goldenApple);
        goldenApple.velocityX = -.9;
        goldenApple.onPlayerCollision = function () {
        game.changeIntegrity(25);
        game.increaseScore(150);
        goldenApple.fadeOut();

        }
        goldenApple.onProjectileCollision = function () {
         
            //enemy.fadeOut();
            //enemy.shrink();
            goldenApple.flyTo(1000,350);
        }
        

        }
        createReward (1090,groundY - 10); 
        createReward (1750,groundY - 20); 
        createReward (2000,groundY - 30); 

    
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
