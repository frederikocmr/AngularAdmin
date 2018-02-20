export class Order {
  public address: string;
  public contactName: string;
  public date: string;
  public deliveryOption: string;
  public document: string;
  public email: string;
  public id: number;
  public itens: string;
  public paidValue: number;
  public paymentMethod: string;
  public status: number;

  constructor(
    address: string,
    contactName: string,
    date: string,
    deliveryOption: string,
    document: string,
    email: string,
    id: number,
    itens: string,
    paidValue: number,
    paymentMethod: string,
    status: number
  ) {
    this.address = address;
    this.contactName = contactName;
    this.date = date;
    this.deliveryOption = deliveryOption;
    this.document = document;
    this.email = email;
    this.id = id;
    this.itens = itens;
    this.paidValue = paidValue;
    this.paymentMethod = paymentMethod;
    this.status = status;
  }
}
