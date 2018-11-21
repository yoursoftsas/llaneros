export class ShipmentSources {
    public Id: number;
    public Name: string;
  

    constructor(name , id? ) {
        if (id) {
            this.Id = id;
        }
        this.Name = name;
        
    }
}


