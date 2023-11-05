import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InteractiveMap from "./InteractiveMap.tsx";
import { MapObject } from "../../config/Types.ts";

interface MainProps {
    title: string;
    mapObjects: MapObject[]; // An array of MapObject
}

export default function MapSection(props: MainProps) {
    const { title, mapObjects } = props;

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                "& .markdown": {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <InteractiveMap mapObjects={mapObjects} />
        </Grid>
    );
}
