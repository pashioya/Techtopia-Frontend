import Header from "../components/UI/Header.tsx";
import MainHeroSection from "../components/UI/MainHeroSection.tsx";
import Grid from "@mui/material/Grid";
import FeaturedPost from "../components/UI/FeaturedPost.tsx";
import MapSection from "../components/UI/MapSection.tsx";
import Sidebar from "../components/UI/SideBar.tsx";
import Footer from "../components/UI/Footer.tsx";
import { useEffect, useState } from "react";
import { getInteractiveMap } from "../services/API.ts";
import {
    InteractiveMapObject,
    mapInteractiveMapToMapObject,
} from "../model/InteractiveMapObject.ts";

const sections = [
    { title: "Attractions", url: "/attractions" },
    { title: "Refreshment Stands", url: "/refreshementStands" },
    { title: "Point of Interests", url: "/pointOfInterests" },
];

const post = {
    description: "Experience the Future of Fun and Technology",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    title: "Welcome to Techtopia Amusement Park!",
};

const featuredPosts = [
    {
        title: "Techtopias Newest Ride: The Future Explorer",
        date: "Nov 12, 2023",
        description:
            "Get ready for an exhilarating journey into the future with Techtopia's latest addition - The Future Explorer! This cutting-edge attraction will take you on a thrilling adventure through the wonders of technology and innovation.",
        image: "https://source.unsplash.com/random?wallpapers",
        imageLabel: "The Future Explorer Ride",
    },
    {
        title: "Discover the Techtopia Virtual Reality Experience",
        date: "Nov 11, 2023",
        description:
            "Immerse yourself in a world of virtual reality at Techtopia! Our VR experiences offer mind-bending adventures that will transport you to new dimensions. Explore virtual worlds, solve puzzles, and experience the future of entertainment.",
        image: "https://source.unsplash.com/random?wallpapers",
        imageLabel: "Virtual Reality Experience at Techtopia",
    },
];

const sidebar = {
    title: "About",
    description:
        "Techtopia is a theme park where you can learn about technology and have fun at the same time!",
    mapObjects: [
        { icon: "🎢", name: "Attractions" },
        { icon: "🍔", name: "Refreshment Stands" },
        { icon: "🏛️", name: "Points of Interest" },
    ],
};

export function Home() {
    const [interactiveMap, setInteractiveMap] =
        useState<InteractiveMapObject | null>(null);

    useEffect(() => {
        // Fetch interactive map data when the component mounts
        getInteractiveMap()
            .then((data) => setInteractiveMap(data))
            .catch((error) =>
                console.error("Error fetching interactive map:", error)
            );
    }, []);
    return (
        <>
            <Header sections={sections} title={"Techtopia"} />
            <main className="home-content-wrapper">
                <MainHeroSection post={post} />
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <MapSection
                        title="Interactive Map"
                        mapObjects={mapInteractiveMapToMapObject(
                            interactiveMap
                        )}
                    />
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
