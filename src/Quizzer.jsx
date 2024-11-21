import React from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./QuizStepper";
import { useState } from "react";
import QuizControls from "./QuizControls";
import Quiz from "./Quiz";

const Quizzer = () => {
  // add quizData
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const quizData = [
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "How many rooms are there, not including the hallways and the set of stairs, in the board game &quot;Clue&quot;?",
      correct_answer: "9",
      incorrect_answers: ["1", "6", "10"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "What do you declare in Rīchi Mahjong when you&#039;ve drawn your winning tile?",
      correct_answer: "Tsumo",
      incorrect_answers: ["Ron", "Rīchi", "Kan"],
    },
    {
      type: "boolean",
      difficulty: "medium",
      category: "Entertainment: Board Games",
      question:
        "In the game &quot;Racko&quot; you may pick up ANY card from the discard pile.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Entertainment: Board Games",
      question:
        "The Angry Video Game Nerd&#039;s alter ego is &quot;Board James&quot;.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Board Games",
      question:
        "What special item did the creators of Cards Against Humanity ship for their Black Friday pack?",
      correct_answer: "Bull Feces",
      incorrect_answers: ["A Card Expansion", "A Racist Toy", "Cat Urine"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "Which character class in Dungeons and Dragons 5th edition gains it&#039;s powers from making a pact with a being of higher power?",
      correct_answer: "Warlock",
      incorrect_answers: ["Wizard", "Sorceror", "Cleric"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Entertainment: Board Games",
      question:
        "In Chess, the Queen has the combined movement of which two pieces?",
      correct_answer: "Bishop and Rook",
      incorrect_answers: [
        "Rook and King",
        "Knight and Bishop",
        "King and Knight",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Board Games",
      question:
        "How many pieces are there on the board at the start of a game of chess?",
      correct_answer: "32",
      incorrect_answers: ["16", "20", "36"],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "In Magic: The Gathering, what card&#039;s flavor text is &quot;Catch!&quot;?",
      correct_answer: "Lava Axe",
      incorrect_answers: [
        "Stone-Throwing Devils",
        "Ember Shot",
        "Throwing Knife",
      ],
    },
    {
      type: "multiple",
      difficulty: "hard",
      category: "Entertainment: Board Games",
      question:
        "The Dice Tower network of board game podcasts and videos is run by which individual?",
      correct_answer: "Tom Vasel",
      incorrect_answers: ["Jason LeVine", "Borth Sampson", "Uncle Pennybags"],
    },
  ];
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px dashed grey",
        minHeight: "600px",
      }}
    >
      <Quiz questionData={quizData[activeStep]} />
      <QuizControls
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        completed={completed}
        setCompleted={setCompleted}
        steps={quizData}
      />
      <QuizStepper
        steps={quizData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        completed={completed}
      />
    </Box>
  );
};

export default Quizzer;
