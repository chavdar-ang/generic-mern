import app from "../App/app.js";

export default class Route {

    static get() {

    }

    static post() {
        
    }

    static put() {
        
    }

    static patch() {
        
    }

    static delete() {
        
    }

    static resource(route, model) {
        // load express route function
        
        // loads the route using the function
        app.use(route, require('./../../routes/' + model));
        // creates a full api resource from a model
    }

    static middleware() {
        
    }
    // let self = new this();
}
