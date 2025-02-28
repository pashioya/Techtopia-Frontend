import Header from "../components/UI/Header.tsx";

import Grid from "@mui/material/Grid";
import MapSection from "../components/UI/MapSection.tsx";
import Sidebar from "../components/UI/SideBar.tsx";
import Footer from "../components/UI/Footer.tsx";
import { useContext, useState } from "react";
import AttractionComponent from "../components/AttractionComponent.tsx";
import AttractionsContext from "../context/attractions/AttractionsContext.ts";

const sections = [
    { title: "Attractions", url: "/attractions" },
    { title: "Refreshment Stands", url: "/refreshmentStands" },
    { title: "Point of Interests", url: "/pointOfInterests" },
];

const sidebar = {
    title: "About",
    description:
        "Techtopia is a theme park where you can learn about technology and have fun at the same time!",
    mapObjects: [{ icon: "🎢", name: "Attractions" }],
};

export function Attractions() {
    const [attractionCount] = useState(0);
    const { attractions } = useContext(AttractionsContext);

    return (
        <>
            <Header sections={sections} title={"Attractions"} />
            <main className="home-content-wrapper">
                <Grid container spacing={4}>
                    {attractions?.map((attraction, index) => (
                        <Grid
                            item
                            key={attractionCount + index}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <AttractionComponent attraction={attraction} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    {/* <MapSection
                        title="Interactive Map"
                        mapObjects={attractions?.map((attraction) => ({
                            x: attraction.x,
                            y: attraction.y,
                            type: attraction.type,
                        }))}
                    /> */}
                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        mapObjects={sidebar.mapObjects}
                    />
                </Grid>
            </main>
            <Footer />
        </>
    );
}
