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
            game.stage.backgroundColor = "rgb(224, 63, 216)";
            document.body.style.backgroundImage = "url(https://s3.envato.com/files/dce18b3a-9d8e-414e-892e-471334e96665/inline_image_preview.jpg)";
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.physics.arcade.TILE_BIAS = 2;
        };
        return game;
    };
})(window);