"use client"

import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material"

export default function DynamicField({ field, register, errors }: any) {

  const { name, label, fieldType, defaultValue, required, listOfValues } = field

  // Dynamic validation rules
  const validationRules: any = {}

  if (required) {
    validationRules.required = `${label} is required`
  }

  if (name === "Email") {
    validationRules.pattern = {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email address"
    }
  }

  if (name === "Name") {
    validationRules.pattern = {
      value: /^[A-Za-z ]+$/,
      message: "Only letters allowed"
    }
  }

  // TEXT FIELD
  if (fieldType === "TEXT") {
    return (
      <TextField
        label={label}
        defaultValue={defaultValue}
        fullWidth
        margin="normal"
        error={!!errors[name]}
        helperText={errors[name]?.message}
        {...register(name, validationRules)}
      />
    )
  }

  // LIST / SELECT
  if (fieldType === "LIST") {
    return (
      <TextField
        select
        label={label}
        defaultValue={defaultValue}
        fullWidth
        margin="normal"
        error={!!errors[name]}
        helperText={errors[name]?.message}
        {...register(name, validationRules)}
      >
        {listOfValues?.map((val: string, idx: number) => (
          <MenuItem key={idx} value={val}>
            {val}
          </MenuItem>
        ))}
      </TextField>
    )
  }

  // RADIO
  if (fieldType === "RADIO") {
    return (
      <FormControl margin="normal" error={!!errors[name]}>
        <FormLabel>{label}</FormLabel>

        <RadioGroup defaultValue={defaultValue} row>
          {listOfValues?.map((val: string, idx: number) => (
            <FormControlLabel
              key={idx}
              value={val}
              control={<Radio />}
              label={val}
              {...register(name, validationRules)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  }

  return null
}