import mongoose, { Schema } from "mongoose";

export default class DataModel {
  collection = ""; // ignore jshint error
  schema = {};
  mongooseSchema;

  constructor() {
    this.mongooseSchema = new Schema(this.schema);
  }

  static create() {
    let self = new this();
    console.log(`${self.constructor.name} created.`);
    console.log(self.collection);
  }

  static fetch() {
    let self = new this();
    return self.results;
  }

  static find(id = null) {
    let self = new this();

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
