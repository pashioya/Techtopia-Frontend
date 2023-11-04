import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    By Paul Ashioya KdG
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Inspired By Material UI
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                >
                    {"Incomplete Project from "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </Box>
    );
}
