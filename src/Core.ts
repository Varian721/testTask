import { DataBaseManager } from './managers/databaseManager/DataBaseManager';
import { LoaderService } from '.';
import { ConfigInterface } from './interfaces';
import { PatientManager, PatientRepository } from './managers';

export class Core< CoreConfigInterface extends ConfigInterface = ConfigInterface > {
  protected _dataBaseManager: DataBaseManager;
  protected _loaderService: LoaderService;
  protected _reporterService: DataBaseManager;
  protected _patientManager: PatientManager;

  protected initPromise: Promise<any>;

  protected isInitialized: boolean = false ;

  constructor(
    // tslint:disable-next-line:variable-name
    protected _config: CoreConfigInterface,
    protected app?: { set: (name: string, value: any) => any },
  ) {
    this._dataBaseManager = new DataBaseManager(this._config);
    this._patientManager = new PatientManager(
      new PatientRepository(
        this._dataBaseManager.PatientSchema,
        this._dataBaseManager.EmailSchema,
        ),
        this._dataBaseManager,
      );
    this._loaderService = new LoaderService(this._patientManager);
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
    return this._dataBaseManager;
  }
}
