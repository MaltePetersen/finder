import { Injectable, Logger } from '@nestjs/common';
import { environment } from 'apps/api/src/environments/environment.prod';
import { MongoClient, ObjectId } from 'mongodb';
import { inspect } from 'util';

@Injectable()
export class DatabaseHandlingService {
  private readonly url = environment.mongoDbUrl;
  private readonly dbName = environment.clusterName;
  private client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
  private readonly logger = new Logger();

  constructor() {
    this.client.connect();
  }

  private error(err: Error, context: string) {
    this.logger.error(inspect(err.stack), context);
  }

  destructor() {
    this.client.close();
  }
  get db() {
    return this.client.db(this.dbName);
  }

  getallCollections() {
    try {
      return this.db.listCollections().toArray();
    } catch (err) {
      this.error(err, 'getAllCollections');
    }
  }
  async createCollection(name) {
    try {
      this.db.createCollection(name);
      return this.getallCollections();
    } catch (err) {
      this.error(err, 'createCollection');
    }
  }
  updateCollection(name: string, newName: string) {
    try {
      this.db.collection(name).rename(newName);
    } catch (err) {
      this.error(err, 'updateCollection');
    }
  }
  getCollection(colname: string) {
    try {
      return this.db.collection(colname).find().toArray();
    } catch (err) {
      this.error(err, 'getCollection');
    }
  }

  deleteCollection(colname: string) {
    try {
      return this.db.collection(colname).drop();
    } catch (err) {
      this.error(err, 'deleteCollection');
    }
  }

  createEntry(colname: string, entry: Object) {
    try {
      return this.db.collection(colname).insertOne(entry);
    } catch (err) {
      this.error(err, 'createEntry');
    }
  }

  updateEntry(colname: string, id: string, entry: Object) {
    try {
      this.deleteEntry(colname, id);
      return this.createEntry(colname, entry);
    } catch (err) {
      this.error(err, 'updateEntry');
    }
  }

  deleteEntry(colname: string, id: string) {
    try {
      return this.db.collection(colname).deleteOne({ _id: new ObjectId(id) });
    } catch (err) {
      this.error(err, 'deleteEntry');
    }
  }
}
