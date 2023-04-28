const Base_URL = "https://youtube-v38.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "5e40a646b0mshaa888b22d9c4612p1b5afajsn918783b7449f",
    "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
  },
};
const fetchDataFromAPI = async (url) => {
  const response = await fetch(`${Base_URL}/${url}`, options);
  const data = response.json();
  return data;
};

export { fetchDataFromAPI };
