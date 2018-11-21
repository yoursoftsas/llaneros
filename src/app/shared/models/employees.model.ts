export class Employees {
    public Id: number;
    public Name: string;
    public AccountId: number;
    public Address: string;
    public Area: string;
    public CURP: string;
    public ContactName: string;
    public EmailAddress: string;
    public CURPFirstName: string;
    public HeadId: string;
    public LastName: string;
    public Movil1: string;
    public Movil2: string;
    public PhoneNumber: string;
    public Position: string;
    public Type: string;






    
  

    constructor(name , accountId, address, area, cURP, contactName, emailAddress, cURPFirstName, headId, lastName, movil1, movil2, phoneNumber, position, type,  id? ) {
        if (id) {
            this.Id = id;
        }
        this.Name = name;
        this.AccountId = accountId;
        this.Address = address;
        this.Area = area;
        this.CURP = cURP;
        this.ContactName = contactName;
        this.EmailAddress = emailAddress;
        this.CURPFirstName = cURPFirstName;
        this.HeadId = headId;
        this.LastName = lastName;
        this.Movil1 = movil1;
        this.Movil2 = movil2;
        this.PhoneNumber = phoneNumber;
        this.Position = position;
        this.Type = type;



        
    }
}


