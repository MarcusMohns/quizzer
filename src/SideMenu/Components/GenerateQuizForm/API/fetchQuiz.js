const fetchQuiz = async (
  formData,
  setQuizData,
  setLoading,
  setOpenSideMenu,
  setError
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
    setOpenSideMenu(false);
    setError(false);
    console.log("fetching data...");
  } catch (error) {
    console.error("error fetching data...", error);
    setLoading(false);
    setError({ bool: true, name: error.name, message: error.message });
  }
};

export default fetchQuiz;
