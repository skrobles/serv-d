import { FormControl, Input, FormHelperText } from "@material-ui/core";
import React from "react";

export default function Search() {
  return (
    <FormControl>
      <FormHelperText id="my-helper-text">
        Search for a recipe by an ingredient:
      </FormHelperText>
      <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
  );
}
