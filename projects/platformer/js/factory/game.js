/* global Phaser */
(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    opspark.createGame = function (create, update, renderDebug) {
        let game, config;
        
        config = {
            preload: opspark.preload,
            create: create,
            update: update,
        };
        
        function render() {
            const asset = game.player.asset;
            game.debug.bodyInfo(asset, 32, 32);
            //game.debug.spriteBounds(asset);
            game.debug.body(asset);
            if(game.projectile) {
                game.projectile.forEach(function(projectile){
                    game.debug.body(projectile);    
                });
            }
        }
        
        if (renderDebug) config.render = render;
        game = new Phaser.Game(900, 700, Phaser.AUTO, '', config);
        
        // create namespace on the game //
        game.opspark = {};
        game.opspark.init = function() {
            game.stage.backgroundColor = "rgb(0,130,245)";
            document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7RbPuFH-KUu_jGm5Xv4vRcve7TmVn_i0RsAgbwp8F2ftbRfNhts1b0DrXuMAq9Z7bRY:https://i.pinimg.com/originals/5e/93/44/5e93446c8e04d4eebb641b953266846c.jpg&usqp=CAU)";
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.physics.arcade.TILE_BIAS = 2;
        };
        return game;
    };
})(window);