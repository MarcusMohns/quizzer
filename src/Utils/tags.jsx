import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TapasOutlinedIcon from "@mui/icons-material/TapasOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";

const tags = {
  music: {
    title: "Music",
    icon: <MusicNoteOutlinedIcon />,
    image: "/images/music-card.jpg",
  },
  sports_and_leisure: {
    title: "Sports and Leisure",
    icon: <SportsSoccerOutlinedIcon />,
    image: "/images/sports-and-leisure-card.jpg",
  },
  film_and_tv: {
    title: "Film and TV",
    icon: <TheatersOutlinedIcon />,
    image: "/images/film-and-tv-card.jpg",
  },
  arts_and_literature: {
    title: "Arts and Literature",
    icon: <BrushOutlinedIcon />,
    image: "/images/arts-and-literature-card.jpg",
  },
  history: {
    title: "History",
    icon: <HistoryOutlinedIcon />,
    image: "/images/history-card.jpg",
  },
  society_and_culture: {
    title: "Society and Culture",
    icon: <Diversity1OutlinedIcon />,
    image: "/images/society-and-culture-card.jpg",
  },
  science: {
    title: "Science",
    icon: <ScienceOutlinedIcon />,
    image: "/images/science-card.jpg",
  },
  geography: {
    title: "Geography",
    icon: <MapOutlinedIcon />,
    image: "/images/geography-card.jpg",
  },
  food_and_drink: {
    title: "Food and Drink",
    icon: <TapasOutlinedIcon />,
    image: "/images/food-and-drink-card.jpg",
  },
  general_knowledge: {
    title: "General Knowledge",
    icon: <SchoolOutlinedIcon />,
    image: "/images/general-knowledge-card.jpg",
  },
};

export default tags;
