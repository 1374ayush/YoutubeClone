import Home from "./Components/Home/home.js"
import Header from "./Components/Shared/navbar.js"
import { Provider } from "react-redux"
import store from "./utils/store.js"
import { Outlet, createBrowserRouter } from "react-router-dom"
import WatchPage from "./Components/WatchPage/watchPage.js"
import SideBar from "./Components/Home/sidebar.js"

const App =()=>{
    return (
        <>
        <Provider store={store}>
            <Header />
            <div>
                <SideBar />
                <Outlet />
            </div>
        </Provider>
        </>
    )
}

export const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {path:'/', element:<Home />},
            {path:'watch',element:<WatchPage />}
        ]
    }
])

