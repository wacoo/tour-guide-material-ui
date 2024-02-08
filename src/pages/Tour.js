import { Tornado } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction, Box, Button, Container, Paper, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => {
    return <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: 'flex' }}>
            <img src="https://c4.wallpaperflare.com/wallpaper/830/615/666/5bd3657bf39f0-wallpaper-preview.jpg" alt="Vegas" height={325} />
            <ImageCollage />
        </Box>
        <Box marginBottom={10}>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this Ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Velit anim voluptate laborum incididunt aute est minim pariatur ex laboris commodo culpa.Aute exercitation consequat culpa id commodo amet deserunt qui sint officia pariatur.Enim duis ea ut eiusmod fugiat voluptate commodo.Ea dolor commodo id cupidatat ex.Tempor ea dolor deserunt sit reprehenderit enim exercitation duis.Aliqua excepteur deserunt voluptate mollit tempor Lorem magna nostrud officia sint ut adipisicing officia.Quis anim deserunt ex est id aliqua amet duis amet.Quis consequat culpa velit do est qui labore ut.Consectetur qui sit est velit eu amet laboris.Deserunt velit deserunt consequat velit tempor nisi culpa laborum.
            </Typography>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal />
            </BottomNavigation>
        </Paper>
    </Container>
}

export default Tour;