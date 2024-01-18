import { useState } from 'react'

const useForm = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return { data, handleInputChange }
}

export function HookForm() {
    const {data , handleInputChange} = useForm()

    const handleSubmit = (el) => {
        el.preventDefault()

        console.log('Form submitted with:', data)
      }

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )
    }
    