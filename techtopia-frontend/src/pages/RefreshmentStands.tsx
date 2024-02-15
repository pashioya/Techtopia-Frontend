import Header from "../components/UI/Header.tsx";

import Grid from "@mui/material/Grid";
import MapSection from "../components/UI/MapSection.tsx";
import Sidebar from "../components/UI/SideBar.tsx";
import Footer from "../components/UI/Footer.tsx";
import { useContext, useState } from "react";
import RefreshmentStandComponent from "../components/RefreshmentStandComponent.tsx";
import RefreshmentStandContext from "../context/refreshmentStands/RefreshmentStandContext.ts";
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

export function RefreshmentStands() {
    const [refreshmentStandsCount] = useState(0);
    const { refreshmentStands } = useContext(RefreshmentStandContext);

    return (
        <>
            <Header sections={sections} title={"Attractions"} />
            <main className="home-content-wrapper">
                <Grid container spacing={4}>
                    {refreshmentStands?.map((refreshmentStand, index) => (
                        <Grid
                            item
                            key={refreshmentStandsCount + index}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <RefreshmentStandComponent
                                refreshmentStand={refreshmentStand}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    {/* <MapSection
                        title="Interactive Map"
                        mapObjects={refreshmentStands.map(
                            (refreshmentStand) => ({
                                x: refreshmentStand.x,
                                y: refreshmentStand.y,
                                type: refreshmentStand.type,
                            })
                        )}
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
