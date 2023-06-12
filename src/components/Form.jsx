import { LoadingButton } from "@mui/lab"
import { Box, TextField } from "@mui/material"

export default function Form({onSubmit , city , setCity , error , errorMessage , loading}) {
    return(
    <Box
      sx={{display: "grid", gap: 2}}
      component="form"
      autoComplete="off"
      onSubmit={onSubmit}>
        <TextField
        id="city"
        label="Cuidad"
        variant="outlined"
        size="small"
        required 
        fullWidth
        value={city}
        onChange={(e)=>{setCity(e.target.value)}}
        error = {error}
        helperText = {errorMessage}
        />
      <LoadingButton
      type="submit"
      variant="contained"
      loading={loading}
      loadingIndicator="Cargando..."
      >
        Buscar
      </LoadingButton>
      </Box>
)}