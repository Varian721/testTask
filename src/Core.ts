import { DataBaseManager } from './managers/databaseManager/DataBaseManager';

export class Core< CoreConfigInterface > {
  protected _dataBaseManager: DataBaseManager;
  protected _loaderService: DataBaseManager;
  protected _reporterService: DataBaseManager;

  protected initPromise: Promise< any>;

  protected isInitialized: boolean = false ;

  constructor(
    // tslint:disable-next-line:variable-name
    protected _config: CoreConfigInterface,
    protected allowedJobs: AllowedJobActionsInterface,
    protected app?: { set: (name: string, value: any) => any },
  ) {
    this._dataBaseManager = new DataBaseManager(this._config);
    this._loaderService = new LoaderService(this._dataBaseManager);
    this._reporterService = new ReporterService(this._reporterManager);
  }


  async init() {
    if (!this.isInitialized) {
      this.initPromise = new Promise(async (resolve, reject) => {
        try {
          await this.initDB(this.app);
          return resolve();
        } catch (e) {
          reject(e);
        }
      }).then(() => (this.isInitialized = true));
    }
    return this.initPromise;
  }

  async initDB(app?: { set: (name: string, value: any) => any }) {
    await this._dataBaseManager.reconnect();

    if (app) {
      app.set('mongoose', this._dataBaseManager.getDriver());
    }
  }

  get config(): CoreConfigInterface {
    return this._config;
  }

  get dataBaseManager() {
    if (!this.isInitialized) {
      throw new Error('core_not_initialized');
    }
    return this._dataBaseManager;
  }

  get loaderService() {
    if (!this.isInitialized) {
      throw new Error('core_not_initialized');
    }
    return this._loaderService;
  }

  get reportService() {
    if (!this.isInitialized) {
      throw new Error('core_not_initialized');
    }
    return this._reportService;
  }
}
