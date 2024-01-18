import { Routes } from "react-router-dom";
import { Container } from "./Container";
import Welcome from "./Welcome";
import { Route } from "react-router-dom";
import { LoginEx } from "./LoginEx";
import { HookCounters } from "./useCounter";

export function App() {
    return (
        <Container>
            <Routes>
                 <Route path="/" element={<Welcome name={"Jimmy"}/>} />
                 <Route path="login" element={<HookCounters />} />
            </Routes>
        </Container>
)}