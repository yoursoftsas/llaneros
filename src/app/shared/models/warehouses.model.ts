export class Warehouses {
    public Id: number;
    public Name: string;
    public Code: string;
    
   

    constructor(name , code, id? ) {
        if (id) {
            this.Id = id;
        }
        this.Name = name;
        this.Code = code;
        
    }
}


