
import axios from 'axios';

const GOOGLE_GEOCODING_API_KEY = 'AIzaSyDa5oS5i3LG4Ix4b_TgCYoWY_-g3VSeTLI';

const getCoordinates = async (location) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${GOOGLE_GEOCODING_API_KEY}`
    );

    if (response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    } else {
      return null; 
    }
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
    return null;
  }
};

export default getCoordinates;
