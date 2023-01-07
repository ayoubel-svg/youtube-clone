const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "38c840f94dmsh42f172faf60acd8p1db4cbjsn67c220b761f2",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const FetchFromApi = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}&maxResults=50`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default FetchFromApi;
