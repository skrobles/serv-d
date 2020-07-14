import React from "react";
import { FormControl, Input, FormHelperText, Button } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";

const styles = {
  searchContainer: {
    backgroundColor: "white",
    padding: "5px 10px",
    paddingTop: "10px",
    borderRadius: "10px",
    fontStyle: "italic",
    width: "290px",
  },
  helperText: {
    textAlign: "center",
  },
};

export default function Search(prop) {
  return (
    <form onSubmit={(e) => prop.onSubmit(e)}>
      <FormControl style={styles.searchContainer}>
        <Input
          // id="my-input"
          // variant ="outlined"
          name="ingredient"
          type="string"
          value={prop.ingredient}
          onChange={prop.onChange}
        />
        <FormHelperText id="my-helper-text" style={styles.helperText}>
          Enter your ingredients
        </FormHelperText>
        {/* <Button type="submit" disabled={!prop.ingredient}>
          serve!
        </Button> */}
      </FormControl>
    </form>
  );
}
