import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Attraction } from "../model/Attraction";

interface AttractionProps {
    attraction: Attraction;
}

export default function AttractionComponent(props: AttractionProps) {
    const { attraction } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: "flex" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {attraction.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Average waitTime: {attraction.averageWaitTime}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {attraction.description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Current Capacity: {attraction.currentCapacity}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Current x: {attraction.x}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Current y: {attraction.y}
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
