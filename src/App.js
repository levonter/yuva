import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ResponsiveFrame from "./pages/ResponsiveFrame";
import FrameComponent from "./pages/FrameComponent";
import MainFrame from "./pages/MainFrame";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/main-frame":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ResponsiveFrame />} />
      <Route path="/frame-1" element={<FrameComponent />} />
      <Route path="/main-frame" element={<MainFrame />} />
    </Routes>
  );
}
export default App;
