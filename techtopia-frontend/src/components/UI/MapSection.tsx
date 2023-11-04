import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InteractiveMap from "./InteractiveMap.tsx";

interface MainProps {
    title: string;
}

export default function MapSection(props: MainProps) {
    const { title } = props;

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <InteractiveMap/>
        </Grid>
    );
}