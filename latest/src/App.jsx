import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { GitHubUser } from "./GitHubUser";

export function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="counter">Counter</Link></li>
                    <li><Link to="users/:username">My Github</Link></li>
                </ul>
            </nav>
            <Routes>
                 <Route path="/" element={<Welcome />} />
                 <Route path="counter" element={<Counter />} />
                 <Route path="users/:username" element={<GitHubUser username={"gabrieleprovenzano"} />} />
            </Routes>
            </div>
)}