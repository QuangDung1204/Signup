import { Box, TextField } from '@mui/material'
import React from 'react'

function Textfiel({ label = "", type = "text", value = "", onChange, required, error, helperText }) {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
            >
                <TextField size="small" label={label} type={type} value={value} onChange={onChange} required={required ?? null} helperText={helperText} error={error} />
            </Box>
        </div>
    )
}

export default Textfiel
