import Home from "./Components/Home/home.js"
import Header from "./Components/Shared/navbar.js"
import { Provider } from "react-redux"
import store from "./utils/store.js"

const App =()=>{
    return (
        <>
        <Provider store={store}>
            <Header />
            <Home />
        </Provider>
        </>
    )
}

export default App