import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {Form, Formik, useFormikContext } from 'formik'
import React from "react";
import FormFieldTextInput from './formInputs/FormFieldTextInput';

interface ICreateAccountFormValues {
  firstName: string;
  lastName: string;
  role: "APPLICANT" | "RECRUITER" | ''
}

const SignUpForm = () => {

  const initialFormValues: ICreateAccountFormValues = {
    firstName: '',
    lastName: '',
    role: ''
  } 
  

  const onSubmitSignup = (values: ICreateAccountFormValues ) => {
    console.log(values.firstName, values.lastName, values.role)
  }

  return (
    <Formik<ICreateAccountFormValues>
      initialValues={initialFormValues}
      onSubmit={onSubmitSignup}
  >
    {({values}) => (
      <Stack spacing={2}>
        <Box width="100%">
        <Typography variant='h4' color="blue">
           Create an Account
        </Typography>
        <Typography>
           let's get started with RealHire
        </Typography>
        </Box>
      <Form>
        <Stack>
          <FormFieldTextInput
          label="First Name"
          name='firstName' 
          />
          <FormFieldTextInput
          label="Last Name"
          name="lastName"
          />
          <FormFieldTextInput
          label="Role"
          name="role" 
          />
        </Stack>
        <Button 
          type="submit" 
          variant="contained" 
          size="large"
          sx={{
          background:"black",
          borderRadius: 5,
          width: '100%'
          }}>
          <Typography>
            Create account
          </Typography>
        </Button>
      </Form>
      </Stack>
    )}
  </Formik>
  )
}

export default SignUpForm