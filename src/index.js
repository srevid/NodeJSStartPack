import FooScript from "./services/FooScript";

export default class MainApp {

    constructor() {
        this.fooscript = new FooScript();
    }
}

var app = new MainApp();