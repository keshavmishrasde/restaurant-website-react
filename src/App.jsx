import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Welcome from "./components/welcome/Welcome.jsx";
import Menu from "./components/menu/Menu.jsx";
import Story from "./components/story/Story.jsx";
import Gathering from "./components/gathering/Gathering.jsx";
import Visit from "./components/visit/visit.jsx";

const STRIPS = 5;
const ease = [0.76, 0, 0.24, 1];
const Page = ({ children }) => (
  <>
    <div className="curtain">
      {Array.from({ length: STRIPS }).map((_, i) => (
        <motion.div
          key={i}
          className="strip"
          initial={{ scaleY: 1 }}
          animate={{
            scaleY: 0,
            transition: { duration: 0.6, ease, delay: 0.3 + i * 0.08 },
          }}
          exit={{
            scaleY: 1,
            transition: { duration: 0.5, ease, delay: i * 0.08 },
          }}
        />
      ))}
      <motion.p
        className="curtain_text"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
        exit={{ opacity: 1, transition: { duration: 0.3, delay: 0.4 } }}
      >
        Ember &amp; Olive
      </motion.p>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  </>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page>
              <Welcome />
            </Page>
          }
        />
        <Route
          path="/menu"
          element={
            <Page>
              <Menu />
            </Page>
          }
        />
        <Route
          path="/story"
          element={
            <Page>
              <Story />
            </Page>
          }
        />
        <Route
          path="/gatherings"
          element={
            <Page>
              <Gathering />
            </Page>
          }
        />
        <Route
          path="/visit"
          element={
            <Page>
              <Visit />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
