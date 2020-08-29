import mongoose, { Schema } from "mongoose";

export default class DataModel {
  collection = ""; // ignore jshint error
  schema = {};

  static instance() {
    // console.log(this);
    return new this();
  }

  fill(attributes) {
    this.attributes = attributes;
    console.log("attributes", attributes);
  }

  async save() {
    let model = this.mongooseModel();

    const document = new model(this.attributes);

    try {
      let newDocument = await document.save();
      console.log(`${this.constructor.name} is saved.`);
      console.log("The data", this.attributes);
      return newDocument;
    } catch (err) {
      return err.message;
    }
  }

  mongooseModel() {
    console.log('current class', this.constructor.name);
    let className = this.constructor.name;

    let mongooseSchema = new Schema(this.schema);

    // console.log(`${instance.constructor.name} created.`);

    // check if the mongoose model is already existing (compiled)
    return mongoose.models && mongoose.models[className]
      ? // or this -> mongoose.connection.models[className]
        mongoose.models[className]
      : mongoose.model(className, mongooseSchema);
  }

  static async create(data) {
    let instance = new this();
    // let self = this.instance();
    instance.fill(data);
    instance.save();
    console.log(`${instance.constructor.name} created.`);
    console.log(instance.collection);

    return instance;

    // let model = self.db;
    // console.log(model);
    // let document = new this.db()(data);

    // try {
    //   let newDocument = await document.save();
    //   // res.status(201).json(newDocument);
    //   return newDocument;
    // } catch (err) {
    //   return err.message;
    //   // res.status(500).json({ message: err.message });
    // }
  }

  static update(id) {
    let self = new this();
    console.log(`${self.constructor.name} with id ${id} update.`);
    console.log(self.collection);
  }

  static fetch() {
    let self = new this();
    return self.results;
  }

  static async find(id = null) {
    try {
      // let self = new this();
      this.db();
      this.db();
      const documents = await this.db().find();
      console.log(documents);
      // res.json(documents);
    } catch (err) {
      console.log(err.message);
      // res.status(500).json({ message: err.message });
    }
    // res.send(req.document);
    // console.log(this.dbInstance().find());

    // return;

    // return id !== null ? self.results[id] : this.fetch();

    // console.log(`${self.constructor.name} created.`);
    // console.log(self.collection);
  }
}

//   class User extends Model {
//     collection = "users";

//     results = ["user1", "user2", "user3", "user4"];
//   }

//   let u = new User();

//   // u.save();

//   // console.log(u.collection);

//   // console.log(u);

//   // User.create();
//   let res = User.find();

//   console.log(res);
