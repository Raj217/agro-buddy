import React from "react";
import { Button } from "@mui/material";
import * as Pallete from '../../../configs/pallete'
import './styles.css';

function CustomTextField({ type = "text", height = 50, width = 200, hasButton=true }) {

  const [focus, setFocus] = React.useState(false);

  return (
    <div>
      <input
        type={type}
        style={{ height: height, width: width, 
          borderColor: Pallete.colorAccent,
          borderWidth: (!focus) ? 2.5 : 3.5,
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {(hasButton) && (
        <Button 
        variant="contained"
        >Send</Button>
      )}
    </div>
  );
}

export default CustomTextField;
