import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation,useHistory } from "react-router-dom";

export default function ServerError() {
    const history = useHistory();
    const {state} = useLocation<any>();
    return (
        <Container component ={Paper}>
            {state?.error ?  (
                    <>
                    <Typography variant = 'h5' gutterBottom>Server Error</Typography>
                    <Divider />
                    <Typography>{state.error.detail || 'Internal Server Error'}</Typography>
                    </>
            ) : (
                <Typography variant = 'h5' gutterBottom>Server Error</Typography>
            )}
        </Container>
    )
}