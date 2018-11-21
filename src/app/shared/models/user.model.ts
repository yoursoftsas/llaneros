export class User {
    public Id: number;
    public FirstName: string;
    public LastName: string;
    public UserName: string;
    public EmailAddress: string;
    public Position: string;
    public Phone: string;
    public Address: string;
    public Password: string;
    public Hash: string;
    public Salt: string;
    public Deleted: boolean;
    public Assigned: boolean;
    public DateRegistered: Date;
    public DateConfirmed: Date;
    public EmailConfirmed: boolean;
    public Token: string;

    constructor(firstName, lastName , emailAddress , position , phone , address , password? , id? , username?) {
        if (id) {
            this.Id = id;
        }
        if (username) {
            this.UserName = username;
        }
        if (password) {
            this.Password = password;
        }
        this.FirstName = firstName;
        this.LastName = lastName;
        this.EmailAddress = emailAddress;
        this.Position = position;
        this.Phone = phone;
        this.Address = address;

    }
}


