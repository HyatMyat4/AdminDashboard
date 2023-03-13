type Category = 
| "Home"
| "Food"
| "About"
| "Menus"
| "Review"
| "Order" ;


type canOrderCountry ={
    name : string
    Countryname: string
} 

interface FoodReviews {
    _id: string;
    ReviewerName: string;
    ReviewerProfile: string;
    Reviewe: string;
    Rating: string;
}
interface RATING {
    RATING: string;
}
interface Order_data {
    quantity : number;         
    Price : number           
    name : string;
    description : string;
    images : string;
}
interface UserBuyingProduct {
    id : string;
    FoodImage : string;
    Price : string;
    name : string;
}

type FoodProduct ={
    id: string
    name: string
    Price:string
    FoodImage: string
    Popular: string
    Foodinfo:string        
    FoodReviews: FoodReviews [];
    CanOrder: boolean,
    Rating: RATING  
    Outofstock: string 
}

type FoodProducts ={
    FoodProducts: []
}
type PropsCross ={   
    roles : any 
    name: string
    Price:string
    FoodImage: string   
    Foodinfo:string     
    CanOrder: boolean,    
    Outofstock: string 
}
type PropsCross_Promote ={    
    name: string
    Price:string
    FoodImage: string   
    Foodinfo:string     
    CanOrder: boolean,    
    Outofstock: string 
}

type All_Users = {
    name : string    
    id : string
    userProfile : string
    email : string
    Userstatus : string
    TotalBuyingPrice  : Number
    UserBuyingProduct  : UserBuyingProduct[]
}


type Transaction = {
    _id: string;
    userId: string;
    cost: number;
    products: string[];
}
type monthlyData = {
    month: string;
    totalSales: number;
    totalUnits: number;
}

type salesByCategory = {
    Jucie: number ;
    Coffee:  number;
    Pizza:  number;
    Taco:  number;
    Burger:  number;
    Cake:  number;
}

type Dailydata = {
     date:string, 
     totalSales:  number, 
     totalUnits: number ,
}

type User_Orders =  {
    id :string,    
    email  :string,            
    name :string,           
    amount :  number,        
      phone :string,        
    city  :string,
    country :string,
    town :string,
    postal_code  :string,
    state  :string,
    Order_data : Order_data[]
}

type Reviews_data = {
    user_img: string
    user_name : string
    Review_text : string
} 
