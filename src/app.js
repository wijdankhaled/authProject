import Auth from "./components/auth";
import LoginProvider from "./context/context";
import Login from "./components/login";
import Students from "./components/users/Students";
import Teacher from "./components/users/teachers";
import Workers from "./components/users/allworkers";
import Members from "./components/users/allmembers";
export default function App(props) {
  return (
    <LoginProvider>
      <Login />
      {/* user - editor - admin */}
      <Auth capability="read">
        <Students />
      </Auth>
      {/* editor - admin */}
      <Auth capability="update">
        <Teacher />
      </Auth>
      {/* editor - admin */}
      <Auth capability="create">
        <Workers />
      </Auth>
      {/* admin */}
      <Auth capability="delete">
        <Members />
      </Auth>
    </LoginProvider>
  );
}
