import { Box, Container, Grid, Typography } from "@mui/material";
import CustomCard from "./components/classSlide";
import theme from "../configs/colors";
export default function App() {
  return (
    <>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ height: "100vh", margin: 0, bgcolor: theme.palette.primary.main }}
      >
        <Box
          sx={{
            justifyItems: "center",
            paddingTop: 2,
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff" }} textAlign={"center"}>
            Hi there, welcome!
          </Typography>

          <br />
          <Typography
            variant="h5"
            sx={{ color: "#fff", marginBottom: 2 }}
            textAlign={"center"}
          >
            Ready to get in touch with your classmates by chatting in real time?
            <br /> Join the chat groups below
          </Typography>
        </Box>
        <Container maxWidth="lg" sx={{ padding: 10 }}>
          <Grid
            container
            spacing={2} // Controls the gap between the cards
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center", // Centers the cards on large screens
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <CustomCard
                title="ACS311B"
                subtitle="Principles of programming languages"
                author="By Mr. Fredrick Ogore"
                buttonLabel="Join chat"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCard
                title="ACS314A"
                subtitle="Mobile Application Development"
                author="By Mr. Anthony Wambua"
                buttonLabel="Join chat"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCard
                title="ACS332A"
                subtitle="Computer System Security"
                author="By Mrs Harriet Ratemo"
                buttonLabel="Join chat"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCard
                title="ACS355A"
                subtitle="Internet Web Design & Application"
                author="By Mr. Daniel"
                buttonLabel="Join chat"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCard
                title="MAT322B"
                subtitle="Probability & statistics"
                author="By Prof. Richard"
                buttonLabel="Join chat"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCard
                title="ACS303B"
                subtitle="Software Project Management"
                author="By Mr. Watson"
                buttonLabel="Join chat"
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Container maxWidth="lg"
          sx={{
            display:"flex",
            flexDirection:"row",
            
            gap:6,
            
          }}
        >
          <CustomCard
            title="ACS311B"
            subtitle="Principles of programming languages"
            author="By Mr. Fredrick Ogore"
            buttonLabel="Join chat"
          />
          <CustomCard
            title="ACS314A"
            subtitle="Mobile Application Development"
            author="By Mr. Anthony Wambua"
            buttonLabel="Join chat"
          />
          <CustomCard
            title="ACS332A"
            subtitle="Computer System Security"
            author="By Mrs Harriet Ratemo"
            buttonLabel="Join chat"
          />
          <CustomCard
            title="ACS355A"
            subtitle="Internet Web Design & Application"
            author="By Mr. Daniel"
            buttonLabel="Join chat"
          />
          <CustomCard
            title="MAT322B"
            subtitle="Probability & statistics"
            author="By Prof. Richard"
            buttonLabel="Join chat"
          />
          <CustomCard
            title="ACS303B"
            subtitle="Software Project Management"
            author="By Mr. Watson"
            buttonLabel="Join chat"
          />
        </Container> */}
      </Container>
    </>
  );
}
