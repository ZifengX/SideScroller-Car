/// <reference path="../managers/asset.ts" />
module objects {
    // Land Class
    export class Land {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("land"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        }

        reset() {
            this.image.y = -960;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

} 