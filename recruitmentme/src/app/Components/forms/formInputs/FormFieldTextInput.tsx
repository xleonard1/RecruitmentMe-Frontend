import { TextField, TextFieldProps } from "@mui/material"
import { useField } from "formik";
import { ReactNode } from "react";

type FormFieldTextInputProps = {
    name: string; 
    label: ReactNode; 
} & Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur'>; 

const FormFieldTextInput  = ({
    name,
    label,
    ...rest
}:FormFieldTextInputProps) => {
    const [field, meta] = useField(name); // Use name prop for useField

    return (
        <TextField
            {...field} 
            label={label}
            variant="standard"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error} 
            sx={{
                width: 400,
                py: 2
            }}
            {...rest} // Spread remaining props
        />
    );
};

export default FormFieldTextInput