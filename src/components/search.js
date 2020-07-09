import { FormControl, Input, FormHelperText } from "@material-ui/core";
import React from "react";

const styles = {
  searchContainer: {
    backgroundColor: "white",
    padding: "0 20px",
    borderRadius: "10px",
    fontStyle: "italic",
  },
};

export default function Search() {
  return (
    <FormControl style={styles.searchContainer}>
      <FormHelperText id="my-helper-text">
        Search for a recipe by an ingredient:
      </FormHelperText>
      <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
  );
}
