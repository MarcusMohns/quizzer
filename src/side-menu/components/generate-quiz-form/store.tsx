import { QuizState } from "../../../store";

export interface FormCheckBox {
  name: string;
  id: string;
  checked: boolean;
  emoji: string;
}

export interface FormData {
  difficulties: FormCheckBox[];
  categories: FormCheckBox[];
  qty: string;
}

export const fetchQuiz = async (
  formData: FormData,
  setQuizData: (data: QuizState | null) => void,
  setLoading: (loading: boolean) => void,
  handleSideMenuOpen: (
    open: boolean,
    event?: React.SyntheticEvent<object, Event>
  ) => void,
  setError: (error: { bool: boolean; name: string; message: string }) => void
) => {
  setLoading(true);

  const queryParams = new URLSearchParams({
    // Pass all checked checkboxes' ids into queryParams
    limit: formData.qty,
    categories: formData.categories
      .filter((category) => category.checked)
      .map((category) => category.id)
      .join(),
    difficulties: formData.difficulties
      .filter((difficulty) => difficulty.checked)
      .map((difficulty) => difficulty.id)
      .join(),
  });

  const reqString = `https://the-trivia-api.com/v2/questions?${queryParams}`;

  try {
    const response = await fetch(reqString);
    const data = await response.json();
    setQuizData(data);
    setLoading(false);
    handleSideMenuOpen(false);
    setError({ bool: false, name: "", message: "" });
    console.log("fetching data...");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("error fetching data...", error);
      setLoading(false);
      setError({ bool: true, name: error.name, message: error.message });
    } else {
      console.error("Unknown error:", error);
      setLoading(false);
      setError({ bool: true, name: "Unknown Error", message: String(error) });
    }
  }
};

export const defaultFormData = {
  difficulties: [
    { name: "Easy", id: "easy", checked: false, emoji: "🍏" },
    { name: "Medium", id: "medium", checked: false, emoji: "🍋" },
    { name: "Hard", id: "hard", checked: false, emoji: "🌶️" },
  ],
  categories: [
    { name: "Music", id: "music", checked: false, emoji: "🎵" },
    {
      name: "Sports and Leisure",
      id: "sport_and_leisure",
      checked: false,
      emoji: "⚽",
    },
    { name: "Film and TV", id: "film_and_tv", checked: false, emoji: "🎬" },
    {
      name: "Arts and Literature",
      id: "arts_and_literature",
      checked: false,
      emoji: "🎨",
    },
    { name: "History", id: "history", checked: false, emoji: "📜" },
    {
      name: "Society and Culture",
      id: "society_and_culture",
      checked: false,
      emoji: "🌍",
    },
    { name: "Science", id: "science", checked: false, emoji: "🔬" },
    { name: "Geography", id: "geography", checked: false, emoji: "🌍" },
    {
      name: "Food and Drink",
      id: "food_and_drink",
      checked: false,
      emoji: "🍔",
    },
    {
      name: "General Knowledge",
      id: "general_knowledge",
      checked: false,
      emoji: "🧠",
    },
  ],
  qty: "10",
};

// return true if all objects in array are checked
export const allChecked = (
  array: FormData["categories"] | FormData["difficulties"]
) => array.every((entry) => entry.checked);

// return true if some objects in array are checked
export const someChecked = (
  array: FormData["categories"] | FormData["difficulties"]
) => array.some((entry) => entry.checked);

export default fetchQuiz;
