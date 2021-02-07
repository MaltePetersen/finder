import { Injectable, Logger } from '@nestjs/common';
import { environment } from 'apps/api/src/environments/environment';
import { MongoClient } from 'mongodb';
import { inspect } from 'util';

@Injectable()
export class DaoUsersService {

  private readonly url = environment.mongoDbUrl;
  private readonly dbName = environment.clusterName;
  private client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
  private readonly logger = new Logger();

  constructor() {
    this.client.connect().then(() => this.createUserCollection());
  }
  private error(err: Error, context: string) {
    this.logger.error(inspect(err.stack), context);
  }
 private get db() {
    return this.client.db(this.dbName);
  }
  private async createUserCollection() {
      if(!(await this.getallCollections()).find((collection) => collection.name === 'Users')){
        this.db.createCollection('Users');
      }
  }

 private getallCollections() {
    try {
      return this.db.listCollections().toArray();
    } catch (err) {
      this.error(err, 'getAllCollections');
    }
  }
  getUserCollection() {
    try {
      return this.db.collection('Users').find().toArray();
    } catch (err) {
      this.error(err, 'getCollection');
    }
  }

}
