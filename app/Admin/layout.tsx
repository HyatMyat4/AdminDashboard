
import HomePage from "./Adminleft"
import RightHeader from "./RightHeader"
import Providers from "../Providers"

export default function RootLayout({children,}: {  children: React.ReactNode}) {
  return (
    <main  className="w-full h-auto flex flex-row justify-between flex-wrap overflow-x-hidden">
        <div className=" w-[0%] 6xl:w-[16%] bg-gray-300 h-auto z-[9999]">
        <HomePage/>
        </div>              
        <div className="w-[100%]  6xl:w-[84%] h-auto flex flex-col items-center dark:bg-[#141937]   " >          
          <div className='dark:bg-[#141937] w-[100%] h-[7vh]'>      
          <RightHeader/>
          </div>
          <Providers>{children}</Providers>
        </div>
    </main>
  )
}