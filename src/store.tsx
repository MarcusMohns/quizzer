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

interface Tags {
  [key: string]: {
    title: string;
    icon: React.ReactElement;
    image: string;
  };
}

export interface QuizResult {
  selectedAnswer: "Not Answered" | string;
  correctlyAnswered: boolean;
  pickedAnswerIndex: number;
  correctAnswer: string;
  category: string;
  questionText: string;
  questionNum: number;
}

export interface QuizQuestion {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: { text: string };
  tags: string[];
  type: string;
  difficulty: string;
  regions: string[];
  isNiche: boolean;
}

export type QuizState = QuizQuestion[];

export const tags: Tags = {
  music: {
    title: "Music",
    icon: <MusicNoteOutlinedIcon />,
    image: "/images/music.svg",
  },
  sport_and_leisure: {
    title: "Sports and Leisure",
    icon: <SportsSoccerOutlinedIcon />,
    image: "/images/sports-and-leisure.svg",
  },
  film_and_tv: {
    title: "Film and TV",
    icon: <TheatersOutlinedIcon />,
    image: "/images/film-and-tv.svg",
  },
  arts_and_literature: {
    title: "Arts and Literature",
    icon: <BrushOutlinedIcon />,
    image: "/images/arts-and-literature.svg",
  },
  history: {
    title: "History",
    icon: <HistoryOutlinedIcon />,
    image: "/images/history.svg",
  },
  society_and_culture: {
    title: "Society and Culture",
    icon: <Diversity1OutlinedIcon />,
    image: "/images/society-and-culture.svg",
  },
  science: {
    title: "Science",
    icon: <ScienceOutlinedIcon />,
    image: "/images/science.svg",
  },
  geography: {
    title: "Geography",
    icon: <MapOutlinedIcon />,
    image: "/images/geography.svg",
  },
  food_and_drink: {
    title: "Food and Drink",
    icon: <TapasOutlinedIcon />,
    image: "/images/food-and-drink.svg",
  },
  general_knowledge: {
    title: "General Knowledge",
    icon: <SchoolOutlinedIcon />,
    image: "/images/general-knowledge.svg",
  },
};

export default tags;
