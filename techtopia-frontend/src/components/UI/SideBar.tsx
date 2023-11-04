import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
    description: string;
    mapObjects: ReadonlyArray<{
        icon: string;
        name: string;
    }>;
    title: string;
}

export default function Sidebar(props: SidebarProps) {
    const { description, mapObjects, title } = props;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.600' }}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Legend of the Map
            </Typography>
            {mapObjects.map((object) => (
                <Link
                    display="block"
                    variant="body1"
                    href="#"
                    key={object.name}
                    sx={{ mb: 0.5 }}
                >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <span>{object.icon}</span>
                        <span>{object.name}</span>
                    </Stack>
                </Link>
            ))}
        </Grid>
    );
}