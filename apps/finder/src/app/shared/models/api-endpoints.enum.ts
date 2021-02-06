export enum ApiEndpoints {
  //auth
  API_GET_AUTH = 'auth/login',
  //file and folder handling
  API_GET_STATS = 'file/stats/{path}',
  API_GET_FILE = 'file/{path}',
  API_DELETE_FILE = 'file/{path}',
  API_POST_FILE = 'file',
  API_PUT_FILE = 'file',
  API_GET_FILE_COPY = 'file/copy/{from}/{to}',
  API_GET_DIR = 'directory/{path}',
  API_DELETE_DIR = 'directory/{path}',
  API_POST_DIR = 'directory',
  API_PUT_DIR = 'directory',
  API_GET_DIR_COPY = 'directory/copy/{from}/{to}',
  API_GET_WORKSPACE = 'directory/workspace',
  API_GET_DIR_FILENODE = 'directory/filenode',
  // Mongodb
  API_GET_COLLECTIONS = 'database/collections',
  API_GET_COLLECTION = 'database/collection/{colname}',
  API_DELETE_COLLECTION = 'database/collection/{colname}',
  API_POST_COLLECTION = 'database/collection',
  API_PUT_COLLECTION = 'database/collection',
  API_POST_ENTRY = 'database/collection/{colname}/entry',
  API_PUT_ENTRY = 'database/collection/{colname}/entry/{id}',
  API_DELETE_ENTRY = 'database/collection/{colname}/entry/{id}',
}
