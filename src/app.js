import Auth from "./components/auth";
import LoginProvider from "./context/context";
import Login from "./components/login";

export default function App(props) {
    return (
        <LoginProvider>
            
            <Login />
            {/* user - editor - admin */}
            <Auth capability="read">
                <h2>you can read this!!</h2>
            </Auth>
            {/* editor - admin */}
            <Auth capability="update">
                <button>update</button>
            </Auth>
            {/* editor - admin */}
            <Auth capability="create">
                <button>create</button>
            </Auth>
            {/* admin */}
            <Auth capability="delete">
                <button>delete</button>
            </Auth>
        </LoginProvider>
    )
}
