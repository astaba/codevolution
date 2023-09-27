import { Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import SuperHeroes from "./components/SuperHeroes.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";
import Home from "./components/Home.page";
import RQPracticeHook from "./components/RQPracticeHook";
import RQSuperHeroe from "./components/RQSuperHeroe.page";
import RQParallel from "./components/RQParallel.page";
import RQDynamicParallel from "./components/RQDynamicParallel.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
            <li>
              {/* <Link to="/rq-programmatic">RQ Fetching onEvent</Link> */}
              {/* <Link to="/rq-parallel">RQ Parallel</Link> */}
              <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroe />} />
          {/* <Route path="/rq-programmatic" element={<RQPracticeHook />} /> */}
          {/* <Route path="/rq-parallel" element={<RQParallel />} /> */}
          <Route
            path="/rq-dynamic-parallel"
            element={<RQDynamicParallel heroesId={[1, 4]} />}
          />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
