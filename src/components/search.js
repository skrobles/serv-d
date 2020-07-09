import { FormControl, Input, FormHelperText, Button } from "@material-ui/core";
import React from "react";

const styles = {
  searchContainer: {
    backgroundColor: "white",
    padding: "0 20px",
    borderRadius: "10px",
    fontStyle: "italic",
  },
};

export default function Search(prop) {
  return (
    <form onSubmit={(e) => prop.onSubmit(e)}>
      <FormControl style={styles.searchContainer}>
        <FormHelperText id="my-helper-text">
          Search for a recipe by an ingredient:
        </FormHelperText>
        <Input
          id="my-input"
          name="ingredient"
          type="string"
          value={prop.ingredient}
          onChange={prop.onChange}
        />
        <Button type="submit" disabled={!prop.ingredient}>
          serve!
        </Button>
      </FormControl>
    </form>
  );
}
