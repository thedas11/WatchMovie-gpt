import { createBrowserRouter, RouterProvider } from "react-router";
import Browse from "./Browse";
import Login from "./Login";
const Body = ()=>{
    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        },
        
        {
            path: "/browse",
            element: <Browse />
        }
    ])
    

    return (
        <div className="h-3 w-[100vw] ">
            <RouterProvider router={appRouter} />
        </div>
    )


}


    







export default Body;