﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/land.ts" />
/// <reference path="../objects/rasberry.ts" />
/// <reference path="../objects/bomb.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        car.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
        
    }

    export function insButtonClicked(event: MouseEvent) {

        var instructionLabel = new objects.Label(stage.canvas.width / 2, 60, "This is a Car Crash game.");
        var instructionLabel1 = new objects.Label(stage.canvas.width / 2, 100, "Rasberry = 100 points.");
        var instructionLabel2 = new objects.Label(stage.canvas.width / 2, 140, "Bomb = - 1 live");
              
        game.addChild(instructionLabel,instructionLabel1,instructionLabel2);

        
    }

    export function menuState() {
        land.update();
        car.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        land = new objects.Land(stage, game);
        car = new objects.Car(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 20, "Car Crash");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        insButton = new objects.Button(stage.canvas.width / 2, 240, "instructions");
        playButton = new objects.Button(stage.canvas.width / 2, 310, "play");        
        game.addChild(playButton, insButton);

        insButton.addEventListener("click", insButtonClicked)
        playButton.addEventListener("click", playButtonClicked);
        stage.addChild(game);       
    }
}  