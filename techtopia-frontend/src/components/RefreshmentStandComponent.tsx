import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface RefreshmentStandProps {
    refreshmentStand: {
        name: string;
        description: string;
        status: string;
    };
}

export default function RefreshmentStandComponent(
    props: RefreshmentStandProps
) {
    const { refreshmentStand } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: "flex" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {refreshmentStand.name}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {refreshmentStand.description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Status: {refreshmentStand.status}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 160,
                            display: { xs: "none", sm: "block" },
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                        alt="Random Image"
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}
