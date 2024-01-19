import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGitHubUsers";
import { GithubUsersSWR } from "./GithubUsersSWR";
import { GitHubUser } from "./GitHubUser";
import { TodoList } from "./TodoList";

export function App() {


    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/users/:username">My Github</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
            <Routes>
                 <Route path="/" element={<Welcome />} />
                 <Route path="/counter" element={<Counter />} />
                 <Route path="*" element={<div><p>Not Found</p><Link to="/">Go Home</Link></div>} /> 
                 <Route path="/users" element={<GithubUsersSWR />}>
                    <Route path=":username" element={<GitHubUser /> }></Route>
                 </Route>
                 <Route path="/users/:id" element={<ShowGithubUser />} />   
            </Routes>
            </div>
)}