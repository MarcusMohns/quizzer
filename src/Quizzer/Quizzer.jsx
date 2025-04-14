import {
  useState,
  useEffect,
  useCallback,
  Suspense,
  lazy,
  useMemo,
} from "react";
import Box from "@mui/material/Box";
import QuizStepper from "./Components/QuizStepper.jsx";
import QuizControls from "./Components/QuizControls.jsx";
import Results from "./Components/Results.jsx";
import ResultsModal from "./Components/ResultsModal.jsx";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StartPageSkeleton from "./Components/StartPage/Components/StartPageSkeleton.jsx";
import QuizSkeleton from "./Quiz/Components/QuizSkeleton.jsx";
const StartPage = lazy(() => import("./Components/StartPage/StartPage.jsx"));
const Quiz = lazy(() => import("./Quiz/Quiz.jsx"));

const Quizzer = ({ quizData, setQuizData }) => {
  const [quizState, setQuizState] = useState({
    started: false,
    completed: false,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [timeLimit, setTimeLimit] = useState({ minutes: 1, seconds: 0 });

  // Create an object with keys as question numbers and values as "Not Answered"
  const initialResults = useMemo(
    () =>
      Object.fromEntries(quizData.map((_, index) => [index, "Not Answered"])),
    [quizData]
  );

  const [results, setResults] = useState(initialResults);

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setQuizState({ started: false, completed: false });
    setResults(initialResults);
  }, [initialResults, setActiveStep, setQuizState, setResults]);

  const resetQuizData = useCallback(() => {
    setQuizData([]);
  }, [setQuizData]);

  const completeQuiz = useCallback(() => {
    setQuizState({ ...quizState, completed: true });
  }, [quizState, setQuizState]);

  // Check if all questions are answered
  const allQuestionsAnswered = useMemo(
    () =>
      Object.values(results).filter((result) => result === "Not Answered")
        .length === 0
  );

  useEffect(() => {
    // Reset Quiz when quizData changes
    handleReset();
  }, [quizData]);

  const ControlsAndStepper = () => (
    <>
      <QuizControls
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        completeQuiz={completeQuiz}
        steps={quizData}
        quizState={quizState}
        setResults={setResults}
        results={results}
        handleReset={handleReset}
        allQuestionsAnswered={allQuestionsAnswered}
      />
      <QuizStepper
        steps={quizData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        results={results}
        quizState={quizState}
      />
    </>
  );

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        height: "100%",
        alignItems: "center",
        p: 0,
        backgroundImage: `url("${"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='800' preserveAspectRatio='none' viewBox='0 0 1920 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1128%26quot%3b)' fill='none'%3e%3cpath d='M1633.6504488521182 160.910432988569L1548.5522402300296 308.3048539551225 1695.9466611965831 393.40306257721113 1781.0448698186717 246.00864161065766z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M114.987%2c572.353C192.549%2c571.382%2c251.562%2c510.145%2c288.615%2c441.999C323.764%2c377.355%2c332.657%2c301.011%2c297.738%2c236.243C261.012%2c168.124%2c192.373%2c120.518%2c114.987%2c119.954C36.69%2c119.383%2c-34.426%2c165.092%2c-72.442%2c233.543C-109.387%2c300.065%2c-103.175%2c379.86%2c-66.341%2c446.444C-28.164%2c515.456%2c36.125%2c573.341%2c114.987%2c572.353' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M757.286558717601 159.43050357509912L888.356897639826 60.85762213530509 757.3892688839445 2.547076966347589z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1545.312%2c675.534C1593.687%2c673.118%2c1624.45%2c627.726%2c1645.349%2c584.032C1663.032%2c547.062%2c1664.156%2c504.981%2c1643.94%2c469.333C1623.437%2c433.179%2c1586.718%2c411.245%2c1545.312%2c407.635C1495.489%2c403.292%2c1438.416%2c406.862%2c1411.603%2c449.079C1383.516%2c493.3%2c1399.692%2c549.861%2c1426.327%2c594.972C1452.428%2c639.178%2c1494.039%2c678.095%2c1545.312%2c675.534' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M662.9964268882494 469.048499177565L576.1665199712111 584.275677513603 778.2236052242874 555.8784060946034z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1128'%3e%3crect width='1920' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"}")`,
      }}
    >
      <Button
        variant="outlined"
        // Emptying quizData renders the FrontPage, Quiz is only rendered if quizData has data
        onClick={resetQuizData}
        size="small"
        sx={{ alignSelf: "flex-start", mx: "10%", my: 2 }}
        color="lightSecondary"
        startIcon={<NavigateBeforeIcon />}
      >
        Back to Frontpage
      </Button>
      {quizState.completed && (
        <ResultsModal
          setActiveStep={setActiveStep}
          results={results}
          handleReset={handleReset}
          totalQuestions={quizData.length}
        />
      )}

      {quizState.started ? (
        activeStep === quizData.length ? (
          // If last step render results
          <>
            <Results
              results={results}
              quizData={quizData}
              totalQuestions={quizData.length}
              timeLimit={timeLimit}
            />
            <ControlsAndStepper />
          </>
        ) : (
          <Suspense fallback={<QuizSkeleton />}>
            <Quiz
              questionData={quizData[activeStep]}
              setResults={setResults}
              results={results}
              activeStep={activeStep}
              timeLimit={timeLimit}
              quizState={quizState}
              setQuizState={setQuizState}
              completeQuiz={completeQuiz}
              allQuestionsAnswered={allQuestionsAnswered}
            />
            <ControlsAndStepper />
          </Suspense>
        )
      ) : (
        <Suspense fallback={<StartPageSkeleton />}>
          <StartPage
            timeLimit={timeLimit}
            setTimeLimit={setTimeLimit}
            quizState={quizState}
            setQuizState={setQuizState}
            quizData={quizData}
            resetQuizData={resetQuizData}
          />
        </Suspense>
      )}
    </Box>
  );
};
export default Quizzer;
