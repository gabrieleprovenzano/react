export function MyUncontrolledForm() {
    function handleFormSubmit(event) {
        event.preventDefault()

        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value
        const session = event.target.elements.namedItem("session").value

        const data = {
            username,
            password,
            session
        }

        console.log(data);
    }
    return (
        <form>
            <input name="username" />
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}