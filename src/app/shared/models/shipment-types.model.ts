export class ShipmentTypes {
    public Id: number;
    public ADescription: string;
    
   

    constructor(aDescription, id? ) {
        if (id) {
            this.Id = id;
        }
        
        this.ADescription = aDescription;
       
    }
}


