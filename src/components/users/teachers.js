import React, { useEffect, useState } from "react";
import faker from "faker";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  ListItemAvatar,
  Avatar,
  Checkbox,
  Typography,
  List,
  Divider,
  ListItem,
} from "@mui/material";
function Teacher() {
  const [studentList, setStudent] = useState([]);

  useEffect(() => {
    setStudent(
      new Array(20).fill(0).map((ele, index) => {
        return (
          <>
            <ListItem
              style={{
                marginBottom: "20px",
                background: "#F3F1F5",
                borderRadius: "3rem",
                margin: "0 5px",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 77, height: 77 }}
                  alt="Travis Howard"
                  src={faker.internet.avatar()}
                />
              </ListItemAvatar>
              <Typography
                paddingLeft={5}
                gutterBottom
                variant="h5"
                component="div"
              >
                {faker.name.findName()}
              </Typography>
              <Checkbox inputProps={{ "aria-label": "controlled" }} />
            </ListItem>
            <Divider variant="inset" component="br" />
          </>
        );
      })
    );
  }, []);

  return (
    <div>
      <Typography
        color="primary"
        paddingLeft={5}
        gutterBottom
        variant="h2"
        component="div"
      >
        Teachers
      </Typography>
      <Divider variant="inset" component="br" />
      <List>{studentList}</List>
    </div>
  );
}

export default Teacher;
