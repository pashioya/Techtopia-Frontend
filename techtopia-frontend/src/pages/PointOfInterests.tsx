import Header from "../components/UI/Header.tsx";

import Grid from "@mui/material/Grid";
import MapSection from "../components/UI/MapSection.tsx";
import Sidebar from "../components/UI/SideBar.tsx";
import Footer from "../components/UI/Footer.tsx";
import PointOfInterestComponent from "../components/PointOfInterestComponent.tsx";
import { useContext, useState } from "react";
import PointOfInterestContext from "../context/pointOfInterests/PointOfInterestContext.ts";

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

export function PointOfInterests() {
    const [pointOfInterestCount] = useState(0);

    // useEffect(() => {
    //     getPointOfInterests()
    //         .then((data) => setPointOfInterests(data))
    //         .then(() => console.log("Attractions fetched"))
    //         .catch((error) =>
    //             console.error("Error fetching attractions:", error)
    //         );
    // }, []);

    const { pointOfInterests } = useContext(PointOfInterestContext);

    return (
        <>
            <Header sections={sections} title={"Point Of Interests"} />
            <main className="home-content-wrapper">
                <Grid container spacing={4}>
                    {pointOfInterests?.map((pointOfInterest, index) => (
                        <Grid
                            item
                            key={pointOfInterestCount + index}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <PointOfInterestComponent
                                pointOfInterest={pointOfInterest}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    {/* <MapSection
                        title="Interactive Map"
                        mapObjects={pointOfInterests?.map(
                            (pointOfInterest) => ({
                                x: pointOfInterest.x,
                                y: pointOfInterest.y,
                                type: pointOfInterest.type,
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
