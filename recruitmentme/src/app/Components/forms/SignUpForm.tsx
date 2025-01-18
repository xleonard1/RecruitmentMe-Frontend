import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {Form, Formik, useFormikContext } from 'formik'
import React from "react";
import FormFieldTextInput from './formInputs/FormFieldTextInput';
import FormFieldSelectInput from './formInputs/FomFieldSelectInput';

type Role = "APPLICANT" | "RECRUITER"
interface ICreateAccountFormValues {
  firstName: string;
  lastName: string;
  role: "APPLICANT" | "RECRUITER" | ''
}

const SignUpForm = () => {
  const {setValues}= useFormikContext<ICreateAccountFormValues>()

  const initialFormValues: ICreateAccountFormValues = {
    firstName: '',
    lastName: '',
    role: ''
  } 
  const roleSectionTransformation: Record<Role, string> = {
    APPLICANT: "Applicant",
    RECRUITER: "Recruiter"
  }
  const roleSelectionMenuOptions = [ roleSectionTransformation.APPLICANT, roleSectionTransformation.RECRUITER]
  const onRoleSelectionChange = () => {
    return setValues((vaues) => ({

    }))
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
          <FormFieldSelectInput 
          name={"Role"} 
          label={"Role"} 
          values={roleSelectionMenuOptions}
          
        
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