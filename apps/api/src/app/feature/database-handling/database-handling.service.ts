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

  getCollection(colname: string) {
    try {
      return this.Client.db(this.Dbname).collection(colname).findOne({});
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

  createEntry(colname: string, name: string) {
    try {
      let data = {
        name: name,
        colname: colname,
      };
      return this.Client.db(this.Dbname).collection(colname).insertOne(data);
    } catch (err) {
      console.log(err.stack);
    }
  }

  updateEntry(colname: string, oldname: string, newname) {
    try {
      return this.Client.db(this.Dbname)
        .collection(colname)
        .updateOne({ name: oldname }, { $set: { name: newname } }, { upsert: true });
    } catch (err) {
      console.log(err.stack);
    }
  }

  deleteEntry(colname: string, name: string): Promise<any> {
    try {
      console.log('Colname: ' + colname + ', Name: ' + name);
      return this.Client.db(this.Dbname).collection(colname).deleteOne({ name: name });
    } catch (err) {
      console.log(err.stack);
    }
  }
}
