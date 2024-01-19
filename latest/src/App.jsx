import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { GitHubUser } from "./GitHubUser";

export function App() {
    return (
        <div>
            <Routes>
                 <Route path="/" element={<Welcome />} />
                 <Route path="counter" element={<Counter />} />
                 <Route path="users/:username" element={<GitHubUser username={"gabrieleprovenzano"} />} />
            </Routes>
            </div>
)}