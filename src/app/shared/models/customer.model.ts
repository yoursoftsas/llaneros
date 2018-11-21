import { Contact } from './contact.model';

export class Customer {
    public Id: number;
    public FirstName: string;
    public LastName: string;
    public EmailAddress: string;
    public PhoneNumber: string;
    public CreditPolicies: string;
    public Days: number;
    public Orders: number;
    public UsedCredit: number;
    public UsedOrders: number;
    public Contacts: Contact[];
    // public Quotations: string;

    constructor(firstName , lastName , emailAddress, phoneNumber, days, creditPolicies, orders , usedCredit, usedOrders,contacts , id? ) {
        if (id) {
            this.Id = id;
        }
        this.FirstName = firstName;
        this.LastName = lastName;
        this.EmailAddress = emailAddress;
        this.Contacts = contacts;
        this.PhoneNumber = phoneNumber;
        this.CreditPolicies = creditPolicies;
        this.Days = days;
        this.Orders = orders;
        this.UsedCredit = usedCredit;
        this.UsedOrders = usedOrders;
    }
}