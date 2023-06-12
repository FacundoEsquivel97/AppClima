import { Typography } from "@mui/material";

      export default function Credits({title, url}){
        return(
      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
      >
        <a
          href={url}
          title={title}
        >
          {title}
        </a>
      </Typography>
      
        )}