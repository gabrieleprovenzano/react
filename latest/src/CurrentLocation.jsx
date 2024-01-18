import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
    const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Current Location: {location.latitude}, {location.longitude}
        </p>
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  )
}
