import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { PointOfInterest } from "../model/PointOfInterest";

interface PointOfInterestProps {
    pointOfInterest: PointOfInterest;
}

export default function PointOfInterestComponent(props: PointOfInterestProps) {
    const { pointOfInterest } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: "flex" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {pointOfInterest.name}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {pointOfInterest.description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Current x: {pointOfInterest.x}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Current y: {pointOfInterest.y}
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
