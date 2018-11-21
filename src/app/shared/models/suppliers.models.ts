export class Suppliers {
    public Id: number;
    public Name: string;
    public AccountId: string;
    public Code: string;
    public Commission: string;
    public Factor: string;
   

    constructor(name , accountId , code, commission, factor, id? ) {
        if (id) {
            this.Id = id;
        }
        this.Name = name;
        this.AccountId = accountId;
        this.Code = code;
        this.Commission = commission;
        this.Factor= factor;
    }
}


