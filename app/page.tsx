import Home from "./(root)/Home"
import Header from './(root)/Header'
import Dishes from './(root)/Dishes'
import HomePage from './page'
import About from './(root)/About'
import Menu from './(root)/Menu'
import Review from './(root)/Review'
import Order from "./(root)/Order"
import AdminSIdeBar from './(root)/AdminSIdeBar'
import  {  GET_FoodProducts }   from "../Graphql/Queries/Products"
import  {  GET_PromoteProducts }   from "../Graphql/Queries/PromoteProduct"

async function Homepage () {
  try{
  const {data} = await GET_FoodProducts()
  const  {data : Promotedata}  = await GET_PromoteProducts()
  return (
    <>     
          <Header/>        
          <Order/>
          <AdminSIdeBar/>      
          <Home  data={Promotedata}/>          
          <Dishes data={data}/>   
          <About/>
          <Menu/>
          <Review/>
    </>
  )
} catch (err) {
  console.warn(err)
}
}

export default Homepage
