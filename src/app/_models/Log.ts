export class Log {
  label: string;
  date: Date = new Date();

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}