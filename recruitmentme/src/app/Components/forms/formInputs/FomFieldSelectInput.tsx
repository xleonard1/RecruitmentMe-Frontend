import { FormHelperText, MenuItem, Select, SelectProps } from "@mui/material"
import { useField } from "formik";
import { ReactNode } from "react";

type FormFieldSelectInput<
T extends 
string | 
number | 
readonly string[] | 
undefined
> = {
    name: string;
    label: ReactNode;
    values: T[];
} & Omit<SelectProps, 'value' | 'onChange'>;

const FormFieldSelectInput = <
T extends 
string | 
number | 
readonly string[] | 
undefined
>({
    name,
    values,
    label,
    ...selectProps
}: FormFieldSelectInput<T>) => {
    const [field, meta ] = useField(name);
    return (
        <>
            <Select
            {...field}
            id={`${name}-form-field-select`}
            label={label}
            error={meta.touched && Boolean(meta.error)}
            variant="standard"
            sx={{my:2}}
            >
            {values.map(((value, index) => (
                   <MenuItem key={index} value={value}>
                    {value}
                   </MenuItem>
                   )))
            }
        </Select>
        {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
        ) : null}
        </>
     
    )

}

export default FormFieldSelectInput;