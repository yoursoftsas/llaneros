export class BankAccount {
    public Id: number;
    public Bank: string;
    public Branch: string;
    public KeyAccount: string;
    public Number: string;
    public Owner: string;

    constructor(bank , branch , keyAccount, number, owner, id? ) {
        if (id) {
            this.Id = id;
        }
        this.Bank = bank;
        this.Branch = branch;
        this.KeyAccount = keyAccount;
        this.Number = number;
        this.Owner = owner;
    }
}


