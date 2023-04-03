import { React, useState, useEffect } from "react";
import "./App.css";
import WithListLoading from "./components/WithListLoading";
import List from "./components/Lists";
import axios from "axios";

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.github.com/users/gokz1119/repos";
    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((repos) => {
    //     setAppState({ loading: false, repos: repos });
    //   });

    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <div className="App">
      <div className="container">
        <h1>My repositories</h1>
      </div>

      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default App;
