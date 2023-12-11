import { HelloWorld } from "./helloworld";
import { Message } from "./Message";

export function App() {
    return (
    <div>
        <HelloWorld /> {/*nothing wrong happen, the hello func will be printed on screen already*/}
        <HelloWorld />
        <p>What a beautiful day</p>
        <Message /> {/*App function become useless because we can't use more than an import inside the function*/}
    </div>
)}

