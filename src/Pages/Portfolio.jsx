import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Project Data
const projects = [
  {
    id: 1,
    Title: "Vireo - Telehealth Platform",
    Description: "Telehealth platform for rural patients.",
    Link: "https://github.com/Gregz-tech",
    Img: "/vireo.png",
  },
  {
    id: 2,
    Title: "QPrep - Academic PQs",
    Description: "Past question practice app for students.",
    Link: "https://qprep-demo.netlify.app",
    Img: "/qprep.png",
  },
  {
    id: 3,
    Title: "RuralCheck",
    Description: "Offline symptom checker for rural areas.",
    Link: "https://github.com/Gregz-tech",
    Img: "/ruralcheck.png",
  },
  {
    id: 4,
    Title: "Tectrax Academy",
    Description: "Tech education platform.",
    Link: "https://tectrax.com",
    Img: "/tectrax.png",
  }
];

const certificates = [
  { ImgSertif: "/cert1.png" },
  { ImgSertif: "/cert2.png" },
];

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "firebase.svg", language: "Firebase" },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[100px] bg-[#030014] overflow-hidden" id="Portfolio">
      <div className="text-center pb-10" data-aos="fade-up">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          <span style={{ color: "#6366f1", backgroundImage: "none" }}>Portfolio Showcase</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#3b82f6", /* Blue Indicator */
                height: "3px",
                borderRadius: "3px",
              },
              "& .MuiTab-root": {
                color: "#94a3b8",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&.Mui-selected": {
                  color: "#3b82f6", /* Blue Selected Text */
                  background: "rgba(59, 130, 246, 0.1)",
                },
                "&:hover": {
                  color: "#60a5fa", /* Light Blue Hover */
                }
              },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award className="mb-2 w-5 h-5" />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/* Projects Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <CardProject
                  key={project.id}
                  id={project.id}
                  Img={project.Img}
                  Title={project.Title}
                  Description={project.Description}
                  Link={project.Link}
                />
              ))}
            </div>
          </TabPanel>

          {/* Certificates Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <Certificate key={index} ImgSertif={cert.ImgSertif} />
              ))}
            </div>
          </TabPanel>

          {/* Tech Stack Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {techStacks.map((stack, index) => (
                <TechStackIcon key={index} TechStackIcon={stack.icon} Language={stack.language} />
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}