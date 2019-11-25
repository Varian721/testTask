
export interface DataBaseManagerInterface {
  PatientSchema: any;
  EmailSchema: any;
  disconnect(): Promise<void>;
  reconnect(): Promise<void>;
  connect(cb);
  getDriver();
}
