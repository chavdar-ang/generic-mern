import mongoose, { Schema } from "mongoose";

export default class DataModel {
  collection = ""; // ignore jshint error
  schema = {};

  static dbInstance() {
    let mongooseSchema = new Schema(this.schema);
    
    let self = new this();
    // console.log(`${self.constructor.name} created.`);

    return mongoose.model(self.constructor.name, mongooseSchema);
  }

  static create() {
    let self = new this();
    console.log(`${self.constructor.name} created.`);
    console.log(self.collection);
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

    let self = new this();

    try {
      const documents = await model.find();
      res.json(documents);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    res.send(req.document);
    console.log(this.dbInstance().find());

    return id !== null ? self.results[id] : this.fetch();

    // console.log(`${self.constructor.name} created.`);
    // console.log(self.collection);
  }

  save() {
    console.log(`${this.constructor.name} is saved.`);
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
