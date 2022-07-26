import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { darkTheme } from "./themes";
import { ThemeProvider } from "@emotion/react";

export const AppBarHeader = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Box display="flex" alignContent="center">
                            <Home />
                            <Typography variant="h6" fontWeight="bold">COPOLA</Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    )
}