import { Injectable } from '@nestjs/common';
const MongoClient = require('mongodb').MongoClient;

@Injectable()
export class DatabaseHandlingService {
  public Url = 'mongodb+srv://Peter:lauch123@clustera.wy2in.mongodb.net/ClusterA?retryWrites=true&w=majority';
  public Client = new MongoClient(this.Url, { useNewUrlParser: true, useUnifiedTopology: true });
  public Dbname = 'ClusterA';

  constructor() {
    this.Client.connect();
  }

  destructor() {
    this.Client.close();
  }

  getallCollections() {
    try {
      console.log(this.Client.db(this.Dbname).listCollections().toArray());
      return this.Client.db(this.Dbname).listCollections().toArray();
    } catch (err) {
      console.log(err.stack);
    }
  }

  getCollection(colname: string) {
    try {
      return this.Client.db(this.Dbname).collection(colname).find().toArray();
    } catch (err) {
      console.log(err.stack);
    }
  }

  deleteCollection(colname: string) {
    try {
      return this.Client.db(this.Dbname).collection(colname).drop();
    } catch (err) {
      console.log(err.stack);
    }
  }

  createEntry(colname: string, entry: Object) {
    try {
      return this.Client.db(this.Dbname).collection(colname).insertOne(entry);
    } catch (err) {
      console.log(err.stack);
    }
  }

  updateEntry(colname: string, id: string, entry: Object) {
    try {
      return this.Client.db(this.Dbname).collection(colname).updateOne({ _id: id }, { $set: entry }, { upsert: true });
    } catch (err) {
      console.log(err.stack);
    }
  }

  deleteEntry(colname: string, id: string) {
    try {
      return this.Client.db(this.Dbname).collection(colname).deleteOne({ _id: id });
    } catch (err) {
      console.log(err.stack);
    }
  }
}
