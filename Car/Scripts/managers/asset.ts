module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        //images
        { id: "again", src: "assets/images/again.png" },
        { id: "bomb", src: "assets/images/bomb.png" },
        { id: "car", src: "assets/images/car.png" },
        { id: "instructions", src: "assets/images/instructions.png" },
        { id: "land", src: "assets/images/land.jpg" },
        { id: "play", src: "assets/images/play.png" },
        { id: "rasberry", src: "assets/images/rasberry.gif" },

        //sounds
        { id: "engine", src: "assets/sounds/engine.wav" },
        { id: "bom", src: "assets/sounds/bom.wav" },
        { id: "rasb", src: "assets/sounds/rasb.wav" }
    ];


    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
        }

    }
}  