"use client"

import { useForm } from "react-hook-form"
import { Container, Typography, Button, Box } from "@mui/material"
import { formFields } from "@/config/form.config"
import DynamicField from "@/components/DynamicField"

export default function SignupPage() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Signup Form</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>

        {formFields.map((field) => (
          <DynamicField
            key={field.id}
            field={field}
            register={register}
            errors={errors}
          />
        ))}

        <Box mt={2}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>

      </form>
    </Container>
  )
}