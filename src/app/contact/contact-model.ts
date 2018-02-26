export class Contact {
  public fid: string;
  public date: Date;
  public email: string;
  public message: string;
  public name: string;
  public type: string;

  public updateFrom(src: Contact): void {
      this.fid = src.fid;
      this.date = src.date;
      this.email = src.email;
      this.name = src.name;
      this.message = src.message;
      this.type = src.type;
  }
}
