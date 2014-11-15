module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        //image
        { id: "land", src: "assets/images/land.jpg" },

        //sounds
        { id: "engine", src: "assets/sounds/engine.wav" },
        { id: "bom", src: "assets/sounds/bom.wav" },
        { id: "rasb", src: "assets/sounds/rasb.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [

            [216, 132, 214, 68],
            [356, 2, 90, 90],
            [2, 147, 80, 54],
            [2, 2, 222, 70],
            [2, 74, 212, 71],
            [226, 2, 128, 128]
        ],
        "animations": {

            "again": [0],
            "bomb": [1],
            "car": [2],
            "instructions": [3],
            "play": [4],
            "rasberry": [5]
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
}  