import { useContext, useState } from "react";
import { Card, Elevation, H2, InputGroup } from "@blueprintjs/core";
import { LoginContext } from "../../src/context/context";
import { When } from "react-if";
import { Fab, Button, TextField, Typography } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import "./login.css"
export default function Login() {
  const context = useContext(LoginContext);

  // For the login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //For The signup

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [singupDisplay, setSingupDisplay] = useState(true);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    context.login(username, password);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    context.signup(username, password, firstname, lastname, email, role);
    location.reload();
  };

  return (
    <>
      {singupDisplay ? (
        <When condition={!context.loggedIn}>
          <Card className="cardLogin" interactive elevation={Elevation.FOUR} >
            <Typography variant="h4" component="div" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <label>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  type="text"
                  name="username"
                  required
                  label="username"
                />
              </label>

              <label style={{ margin: "0 10px" }}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  type="password"
                  name="password"
                  required
                  label="password"
                />
              </label>
              <label
                style={{
                  margin: "10px",
                  display: "inline-block",
                }}
              >
                <Button variant="contained" type="submit">
                  Signin
                </Button>
              </label>

              <label>
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => setSingupDisplay(false)}
                >
                  Signup
                </Button>
              </label>
            </form>
          </Card>
        </When>
      ) : (

       

        <Card className="cardsignup" interactive elevation={Elevation.FOUR}
        style={{textAlign:"center"}}       >
          <H2>Signup</H2>
          <form onSubmit={handleSignupSubmit}>
           
               <label
                  style={{
                    display:"inline-block",
                 marginBottom: "15px",
                 textAlign:"center",
                fontWeight:"bold"
                 
               }}
               >
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  type="text"
                  name="username"
                  required
                  label="username"
                 
                />
              </label>
          
            <br />

            {/* <label>
              <span>Firstname</span>
              <InputGroup
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="firstName"
                type="text"
                name="firstname"
              />
            </label> */}

            <label
               style={{
                display:"inline-block",
             marginBottom: "15px",
             textAlign:"center",
           }}
            >
                <TextField
                 onChange={(e) => setFirstname(e.target.value)}
                  placeholder="firstname"
                  type="text"
                  name="firstname"
                  required
                  label="firstname"
                />
              </label>

            <br />

            {/* <label>
              <span>Lastname</span>
              <InputGroup
                onChange={(e) => setLastname(e.target.value)}
                placeholder="lastname"
                type="text"
                name="lastname"
              />
            </label> */}

            <label
             style={{
              display:"inline-block",
           marginBottom: "15px",
           textAlign:"center",
         }}
            >
                <TextField
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="lastname"
                  type="text"
                  name="lastname"
                  required
                  label="lastname"
                />
              </label>
            <br />

            {/* <label>
              <span>Password</span>
              <InputGroup
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                name="password"
              />
            </label> */}

            <label
          style={{
            display:"inline-block",
         marginBottom: "15px",
         textAlign:"center",
       }}
            >
                <TextField
                
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  type="password"
                  name="password"
                  required
                  label="password"
                />
              </label>
            <br />
            {/* <label>
              <span>Email</span>
              <InputGroup
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                type="text"
                name="email"
              />
            </label> */}
            <label
              style={{
                display:"inline-block",
             marginBottom: "15px",
             textAlign:"center",
           }}
            >
                <TextField
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="email"
                  type="text"
                  name="email"
                  required
                  label="email"
                />
              </label>

            <br />
            {/* <label>
              <span>Role</span>
              <InputGroup
                onChange={(e) => setRole(e.target.value)}
                placeholder="role = [admin,user,manager,driver]"
                type="text"
                name="username"
              />
            </label> */}

            <label>
                <TextField
                onChange={(e) => setRole(e.target.value)}
                placeholder="role = [admin,user,manager,driver]"
                  type="text"
                  name="role"
                  required
                  label="Role"
                />
              </label>

            <br />
            <label>
              {/* <Button type="submit">Signup</Button> */}
              <Button
                type="submit"
                variant="contained"
                style={{
                  margin: "10px",
                  display: "inline-block",
                }}
              >
                Signup
              </Button>
            </label>

            <label>
              <Button
                type="button"
                variant="contained"
                onClick={() => setSingupDisplay(true)}
              >
                Signin
              </Button>
            </label>
          </form>
        </Card>
      )}
      <When condition={context.loggedIn}>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          style={{ position: "absolute", right: "30px", top: "12px"}}
          onClick={context.logout}
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Logout
        </Fab>
      </When>
    </>
  );
}
