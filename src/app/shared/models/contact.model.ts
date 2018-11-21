export class Contact {
    public ContactId: number;
    public FirstName: string;
    public LastName: string;
    public Phone: string;
    public EmailAddress: string;
    public CustomerId: number;
    public Deleted: boolean;

    constructor(firstName, lastName, phone , emailAddress, id?, customerId?) {
        this.ContactId = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Phone = phone;
        this.EmailAddress = emailAddress;
        this.CustomerId = customerId;
    }
}


