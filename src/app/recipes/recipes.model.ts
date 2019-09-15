import { Ingredients } from "../shered/ingredient.model";

export class Recipe{
    public name:string;
    public details:string;
    public imagepath:string;
    public ingredients: Ingredients[];

    constructor(name:string, details:string,imagepath: string, ingredients: Ingredients[]){
        this.name= name;
        this.details= details;
        this.imagepath= imagepath;
        this.ingredients=ingredients;
    }
}