import { Categories } from './categories.model';

export class Product {
    public Id: number;
    public Name: string;
    public Description: string;
    public Code: string;
    public Notes: string;
    public Quality: string;
    public Type: number;
    public Categories: Categories[]; 

    constructor(name , description , code, notes, quality, type, categories , id? ) {
        if (id) {
            this.Id = id;
        }
        this.Name = name;
        this.Description = description;
        this.Code = code;
        this.Notes = notes;
        this.Quality = quality;
        this.Type = type;
        this.Categories = categories;
    }
}


