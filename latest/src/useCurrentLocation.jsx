import { useEffect, useState } from "react"

export function useCurrentLocation() {
    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getCurrentLocation = () => {
        setLoading(true)
        setError(null)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords
                setLocation({ latitude, longitude })
                setLoading(false)
              },
              (error) => {
                setError(error.message)
                setLoading(false)
              }
            )
          } else {
            setError('Geolocation is not supported by your browser')
            setLoading(false)
          }
        }    

        useEffect(() => {
            getCurrentLocation()
          }, [])

          return {
            location,
            loading,
            error,
            getCurrentLocation,
          }
}