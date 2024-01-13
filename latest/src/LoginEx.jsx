export const LoginEx = () => {
    const [toggle, setToggle] = useState(false);

    const handleOnClickButton = () => {
       setValue((value) => !value)
    }

    return (
        <div>
            <p>Pls Log in</p>
            <button onClick={handleOnClickButton}>{value ? "Log in" : "Log out"}</button>
        </div>
    )
}