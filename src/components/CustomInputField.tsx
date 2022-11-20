import styled from "@emotion/styled";
import { FilledTextFieldProps, TextField } from "@mui/material";
import { FC } from "react";

/// TODO: Colors should be imported from Module

const CustomTextField = styled(TextField)({
    display: 'flex',
    flexGrow: 1,
    '& label.MuiInputLabel-root': {
        color: '#A2A2A2',
        // fontSize: '18px', ??? 
    },
    '& label.MuiInputLabel-root.Mui-error': {
        color: 'red'
    },
    '& label.Mui-focused': {
        color: '#A2A2A2',
        // fontSize: '12px', ??? 
    },
    '& .MuiFilledInput-underline:after': {
        borderBottom: 'none ', // ANIMATED BORDER
    },
    '& .MuiNativeSelect-icon': {
        color: '#696B6B', // is this the correct Color ?

        '&:hover': {
            color: '#EDEFEF', // currently does not work 
        }
    },
    '& .MuiFilledInput-root': {
        backgroundColor: '#191A1A',
        fontFamily: '"Baloo 2", cursive',
        borderRadius: 0,
        color: '#EDEFEF',
        borderBottom: ' 1.5px solid #696B6B',
        transition: 'all .3s ease',
        minWidth: '256px',

        '&.Mui-focused ': {
            borderBottomColor: '#EDEFEF',
        },
        '&:hover': {
            borderBottomColor: '#EDEFEF',
            backgroundColor: '#191A1A',
        },
    },
});


interface BaseProps extends FilledTextFieldProps {
    label: string;
    value: string | Array<{ value: string; label: string; }>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputFieldProps extends Omit<BaseProps, 'variant'> { } // in order to have the variant props internally fixed 

const CustomInputField: FC<InputFieldProps> = ({ label, value, onChange, ...rest }) => {

    return (
        <CustomTextField
            variant="filled"
            id={`custom-${label}-input`}
            label={label}
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
};

export default CustomInputField