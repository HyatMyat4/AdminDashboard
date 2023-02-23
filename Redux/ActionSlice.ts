import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  SideBarOpenCLose:false,
  AddProductOPenClose:false,
  PromoteOpenClose:false,
  Productdata: [] as FoodProduct[],
  Delete_Items_id: {},
  User_data: {},
  All_User: [] ,
  Promote_Product : [] as FoodProduct[],  
  LoginUserdata: {},
  Orderproduct: []  as FoodProduct[],
  Pure_OrderProduct: [] as FoodProduct[],
  TotalCost : "" ,
  AdminSideBar: false
}


export const Actionslice = createSlice({
    name: 'actionslice',
    initialState,
    reducers:{
        SideBarOpenCLoseENgin: (state , action) => {
           state.SideBarOpenCLose = action.payload
        },
        AddProductOPenCloseENgin: (state , action) => {
           state.AddProductOPenClose = action.payload
        },
        ProductdataEngin: (state , action) => {
           state.Productdata = [...action.payload]
        },
        AddProductdataEngin: (state , action) => {
           state.Productdata = [ ...action.payload ,...state.Productdata]
        },
        DeleteProductdataEngin: (state , action) => {
           state.Productdata  = state.Productdata.filter((product: FoodProduct) => product.id !== action.payload )
        },
        Delete_Items_idEngin: (state , action) => {
          state.Delete_Items_id = action.payload
        },
        User_dataEngin: (state , action) => {
          state.User_data = action.payload
        },
        All_UserEngin: (state , action) => {
          state.All_User = action.payload
        },
        Delete_UserEngin: (state , action) => {
         state.All_User  = state.All_User.filter((data : All_Users ) => data.id !== action.payload )
      },
      Promote_ProductEngin: (state , action) => {
         state.Promote_Product  = action.payload
      },
      PromoteOpenCloseEngin: (state , action) => {
         state.PromoteOpenClose  = action.payload
      },
      AddPromotedataEngin: (state , action) => {
         state.Promote_Product = [ ...action.payload , ...state.Promote_Product]
      },
      Delete_PromoteProductEngin: (state , action) => {
         state.Promote_Product  = state.Promote_Product.filter((product : any ) => product.id !== action.payload )
      },
      LoginUserdataEngin: (state , action) => { 
         state.LoginUserdata  = action.payload
      },
      TotalCostEngin: (state , action) => { 
         state.TotalCost  = action.payload
      },
      AdminSideBarEngin: (state , action) => { 
         state.AdminSideBar  = action.payload
      },
      OrderproductEngin: (state , action) => {     
            state.Orderproduct  = [ action.payload , ...state.Orderproduct]    
           const  data_Product =  state.Pure_OrderProduct.filter((data) => data.id !== action.payload.id)
            state.Pure_OrderProduct = [ action.payload , ...data_Product]
      },
      OrderproductRemoveEngin: (state , action) => { 
        const index =  state.Orderproduct.findIndex((index) => index.id === action.payload ) 

        let NewProduct = [...state.Orderproduct]

        if(index  >= 0){
         NewProduct.splice(index , 1)
        }else{
         console.warn(`Not Found Product of your id:${action.payload}`)
        }

        state.Orderproduct = NewProduct;
      }
    } 
})

export const  { 
    SideBarOpenCLoseENgin,
    AddProductOPenCloseENgin,
    ProductdataEngin,
    AddProductdataEngin,
    Delete_Items_idEngin,
    DeleteProductdataEngin,
    User_dataEngin,
    All_UserEngin,
    Delete_UserEngin,
    Promote_ProductEngin,
    Delete_PromoteProductEngin,
    PromoteOpenCloseEngin,
    AddPromotedataEngin,
    LoginUserdataEngin,
    OrderproductEngin,
    OrderproductRemoveEngin,
    TotalCostEngin,
    AdminSideBarEngin
} = Actionslice.actions

export const  SideBarOpenCLoseC = (state : any) => state.actionslice.SideBarOpenCLose
export const  AddProductOPenCloseC = (state : any) => state.actionslice.AddProductOPenClose
export const  ProductdataC = (state : any) => state.actionslice.Productdata
export const  Delete_Items_idC = (state : any) => state.actionslice.Delete_Items_id
export const  User_dataC = (state : any) => state.actionslice.User_data
export const  All_UserEnginC = (state : any) => state.actionslice.All_User
export const  Promote_ProductC = (state : any) => state.actionslice.Promote_Product
export const  PromoteOpenCloseC = (state : any) => state.actionslice.PromoteOpenClose
export const  LoginUserdataC = (state : any) => state.actionslice.LoginUserdata
export const  OrderproductC = (state : any) => state.actionslice.Orderproduct
export const  Pure_OrderProductC = (state : any) => state.actionslice.Pure_OrderProduct
export const  TotalCostC = (state : any) => state.actionslice.TotalCost
export const  AdminSideBarC = (state : any) => state.actionslice.AdminSideBar
export const  TotalPrice = (state : any) => state.actionslice.Orderproduct.reduce((total : any , items : any) => total + Number(items.Price) , 0)
export const  Orderproduct__id = (state : any , id : any) => state.actionslice.Orderproduct.filter((product : FoodProduct) => product.id === id )


export default Actionslice.reducer;