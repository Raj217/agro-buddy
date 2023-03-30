import React from "react";
import { Button } from "@mui/material";
import * as Pallete from '../../../configs/pallete'
import './styles.css';

function CustomTextField({ type = "text", height = 50, width = 500, hasButton=false, buttonText }) {

  const [focus, setFocus] = React.useState(false);

  return (
    <form style={{
      height: height,
      width: width,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderColor: (!focus) ? Pallete.colorAccent : Pallete.colorAccentDark,
      borderWidth: (!focus) ? 2.5 : 3.5,
      }}>
      <input
        type={type}
        style={{ height: height, width: width,}}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {(hasButton) && (
        <Button variant="contained" style={{boxShadow: 0, height: height, width: height*2.5, borderRadius: '45px'}} >{buttonText}</Button>
      )}
    </form>
  );
}

export default CustomTextField;
