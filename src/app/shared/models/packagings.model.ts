export class Packagings {
    public Id: number;
    public Name: string;
    public UnitPrice: string;

    constructor(name , unitPrice , id? ) {
        if (id) {
            this.Id = id;
        }
        this.Name = name;
        this.UnitPrice = unitPrice;
    }
}


