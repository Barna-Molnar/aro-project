import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { FC } from "react";

/// TODO: Colors should be imported from Module

const CustomTextField = styled(TextField)({

    '& label.MuiInputLabel-root': {
        color: '#A2A2A2',
        // fontSize: '18px', ??? 
    },
    '& label.Mui-focused': {
        color: '#A2A2A2',
        // fontSize: '12px', ??? 
    },
    '& .MuiFilledInput-underline:after': {
        borderBottom: 'none ', // ANIMATED BORDER
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

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInputField: FC<InputFieldProps> = ({ label, value, onChange, ...rest }) => {

    return (
        <CustomTextField
            id={`custom-${label}-input`}
            label={label}
            variant="filled"
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
};

export default CustomInputField