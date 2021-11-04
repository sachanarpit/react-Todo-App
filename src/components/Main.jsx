import { nanoid } from "nanoid";
import React, { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Checkbox from "@mui/material/Checkbox";
import { deepOrange, deepPurple } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import { AlignHorizontalCenter } from "@mui/icons-material";

function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  let handleChange = (e) => {
    let val = e.target.value;

    setTodo(val);
  };
  let handleSubmit = () => {
    if (todo !== "") {
      setList([...list, { key: nanoid(4), val: todo }]);
    } else {
      setTodo("");
    }
    setTodo("");
  };

  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  console.log(list);
  return (
    <div>
      <TextField
        id="standard-basic"
        label="type your todo 😊👨‍💻"
        variant="standard"
        type="text"
        onChange={handleChange}
        value={todo}
      />

      <Button variant="outlined" onClick={handleSubmit} color="success">
        ➕
      </Button>
      <div>
        {list.map((i) => (
          <List
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
            key={i.key}
          >
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{i.val}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={i.val} />
              <Checkbox />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>

          // <p key={i.key}>
          //   {i.val}
          //   <Checkbox />
          // </p>
        ))}
      </div>
    </div>
  );
}
export default Todo;
