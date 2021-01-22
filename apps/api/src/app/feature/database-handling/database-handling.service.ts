import { Injectable } from '@nestjs/common';
const { MongoClient, ObjectId } = require('mongodb');

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
      return this.Client.db(this.Dbname).listCollections().toArray();
    } catch (err) {
      console.log(err.stack);
    }
  }
  createCollection(name) {
    try {
      this.Client.db(this.Dbname).createCollection(name);
      return true;
    } catch (err) {
      console.log(err.stack);
    }
  }
  updateCollection(name: string, newName: string) {
    try {
      return this.Client.db(this.Dbname).collection(name).rename(newName).collection;
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
      return this.Client.db(this.Dbname)
        .collection(colname)
        .replaceOne({ _id: new ObjectId(id) }, { $set: entry }, { upsert: true });
    } catch (err) {
      console.log(err.stack);
    }
  }

  deleteEntry(colname: string, id: string) {
    try {
      return this.Client.db(this.Dbname)
        .collection(colname)
        .deleteOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.log(err.stack);
    }
  }
}
