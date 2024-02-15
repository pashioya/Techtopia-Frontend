import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import SecurityContext from "../../context/SecurityContext";
import { useContext } from "react";

interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    title: string;
}

export default function Header(props: HeaderProps) {
    const { sections, title } = props;
    const navigate = useNavigate();
    const { isAuthenticated, logout, loggedInUser } =
        useContext(SecurityContext);

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate("/")}
                >
                    Home
                </Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                {!isAuthenticated() && (
                    <Button variant="outlined" size="small">
                        Sign In
                    </Button>
                )}
                {isAuthenticated() && (
                    <>
                        <Typography>Hello, {loggedInUser}</Typography>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => logout()}
                        >
                            Logout
                        </Button>
                    </>
                )}
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: "space-between", overflowX: "auto" }}
            >
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        onClick={() => {
                            navigate(section.url);
                        }}
                        sx={{ p: 1, flexShrink: 0, cursor: "pointer" }}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}
