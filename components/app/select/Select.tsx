import React from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { styles } from "./select.styles";

interface ISelectProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: string[];
  name: string;
}

export const InputSelect = ({
  label,
  value,
  name,
  onChange,
  options,
}: ISelectProps) => {
  return (
    <FormControl sx={styles.root} size="small" variant="outlined">
      <InputLabel id="demo-select-small-label" sx={styles.label}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Age"
        onChange={onChange}
        name={name}
        sx={styles.select}
        value={value}
        defaultValue=""
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
