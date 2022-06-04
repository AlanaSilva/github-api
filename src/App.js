import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import { Fab } from "@mui/material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Container } from 'react-floating-action-button'

const darkTheme = {
  body: '#121212',
  text: '#FAFAFA',
  nameColor: '#0288d1',

  buttonColor: '#0288d1',
  searchBoxBackgroundColor: '#282c34',
};

const lightTheme = {
  body: '#ffffff',
  text: '#363537',
  nameColor: '#0288d1',

  buttonColor: "#0288d1",
  searchBoxBackgroundColor: '#ffffff',
};



const App = () => {
  const { githubState } = useGithub();
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
 

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       <Layout>
        <Container>
          <Fab  color="primary" aria-label="theme" onClick={() => themeToggler()}>
            <LightbulbIcon />
          </Fab>
        </Container>
            {githubState.hasUser ? (
              <>
                {githubState.loading ? (
                  <p>Loading</p>
                ) : (
                  <>
                    <Profile />
                    <Repositories />
                  </>
                )}
              </>
            ) : (
            <NoSearch />
          )}

      </Layout>
    </ThemeProvider>
  );
};

export default App;