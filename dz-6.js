class Car {
    #brand;
    #model;
    #_miles;
    constructor(brand,model,miles){
        this.#brand = brand;
        this.#model = model;
        this.#miles = miles;
    }
    set #miles(miles){
        return this.#_miles = miles;
    }
    get #miles(){
        return this.#_miles;
    }
    info(){
        console.log(this.#brand,this.#model,this.#miles);
    }
}