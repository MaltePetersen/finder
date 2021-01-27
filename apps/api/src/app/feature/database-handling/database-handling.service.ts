import { Injectable, Logger } from '@nestjs/common';
const { MongoClient, ObjectId } = require('mongodb');

@Injectable()
export class DatabaseHandlingService {
  public Url = 'mongodb+srv://Peter:lauch123@clustera.wy2in.mongodb.net/ClusterA?retryWrites=true&w=majority';
  public Client = new MongoClient(this.Url, { useNewUrlParser: true, useUnifiedTopology: true });
  public Dbname = 'ClusterA';
  private readonly logger = new Logger();

  constructor() {
    this.Client.connect();
  }

  private error(err: Error) {
    this.logger.error(err.stack);
  }

  destructor() {
    this.Client.close();
  }

  getallCollections() {
    try {
      return this.Client.db(this.Dbname).listCollections().toArray();
    } catch (err) {
      this.error(err);
    }
  }
  async createCollection(name) {
    try {
      this.Client.db(this.Dbname).createCollection(name);
      return this.getallCollections();
    } catch (err) {
      this.error(err);
    }
  }
  updateCollection(name: string, newName: string) {
    try {
      return this.Client.db(this.Dbname).collection(name).rename(newName).collection;
    } catch (err) {
      this.error(err);
    }
  }
  getCollection(colname: string) {
    try {
      return this.Client.db(this.Dbname).collection(colname).find().toArray();
    } catch (err) {
      this.error(err);
    }
  }

  deleteCollection(colname: string) {
    try {
      return this.Client.db(this.Dbname).collection(colname).drop();
    } catch (err) {
      this.error(err);
    }
  }

  createEntry(colname: string, entry: Object) {
    try {
      return this.Client.db(this.Dbname).collection(colname).insertOne(entry);
    } catch (err) {
      this.error(err);
    }
  }

  updateEntry(colname: string, id: string, entry: Object) {
    try {
      this.deleteEntry(colname, id);
      return this.createEntry(colname, entry);
    } catch (err) {
      this.error(err);
    }
  }

  deleteEntry(colname: string, id: string) {
    try {
      return this.Client.db(this.Dbname)
        .collection(colname)
        .deleteOne({ _id: new ObjectId(id) });
    } catch (err) {
      this.error(err);
    }
  }
}
