
// poblem_solution number: 1



const formatString = (input:string, toUpper?:boolean):string => {

    let result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
    return result
}

  // Test:


// console.log(formatString("hellow"))
// console.log(formatString("hellow", true))
// console.log(formatString("hellow", false))










// poblem_solution number: 2

      type TRatingTypes = {
        title?:string,
        rating:number,
      }

const filterByRating = (items:TRatingTypes[]):TRatingTypes[] => {

    let result1= items.filter(item => item.rating >=4)
    return result1

}


     const books = [
         { title: "Book A", rating: 4.5 },
         { title: "Book B", rating: 3.2 },
         { title: "Book C", rating: 5.0 }
      ];

        // Test:

        // console.log(filterByRating(books));
      







// poblem_solution number: 3




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = [];
    arrays.forEach(arr => result.push(...arr));
    return result;
  };


    // Test:


// console.log(concatenateArrays(["a", "b"], ["c"]));       
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     


  

// poblem_solution number: 4




class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); 
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  

  const myCar = new Car("Toyota", 2020, "Corolla");

    // Test:

// console.log(myCar.getInfo());  
// console.log(myCar.getModel());  




// poblem_solution number: 5





type Tstring = string ;
type Tnumber = number ;

type combine = Tstring | Tnumber;

const processValue = (value:combine) => {
    if( typeof value === "string"){
        return value.length
    }
    else{
        return value * 2
    }   
}

  // Test:

// console.log(processValue("Next_Level_Web_Development"));
// console.log(processValue(10))







// poblem_solution number: 6





interface Product {
    name: string;
    price: number;
  }
  
  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if (products.length === 0) return null;
  
    let maxProduct: Product = products[0];
  
    products.map((product) => {
      if (product.price > maxProduct.price) {
        maxProduct = product;
      }
    });
  
    return maxProduct;
  };

  

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];

    // Test:
  
//   console.log(getMostExpensiveProduct(products));





// poblem_solution number: 7



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  const getDayType = (day: Day): string =>{
   return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
  }
    
  
  // Test:
//   console.log(getDayType(Day.Monday));  
//   console.log(getDayType(Day.Sunday));  
  




// poblem_solution number: 8



const squareAsync = (n: number): Promise<number> =>
    new Promise((resolve, reject) => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        setTimeout(() => resolve(n * n), 1000);
      }
    });

    

    // test:
  
//   squareAsync(4)
//   .then(console.log)
//   .catch(console.error);  


//   squareAsync(-3)
//   .then(console.log)
//   .catch(console.error);  
  




