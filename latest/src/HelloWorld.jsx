import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function HelloWorld() {
const language = useContext(LanguageContext)
    return <h1>{language === "en" ? "Hello, World" : "Ciao, Mondo"}</h1>
}