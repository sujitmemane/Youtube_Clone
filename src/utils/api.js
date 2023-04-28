const Base_URL = "https://youtube-v38.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "6d9119f36emsh3cc235e179fc887p14c2f5jsnb2d042e9c309",
    "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
  },
};

const fetchDataFromAPI = async (url) => {
  const response = await fetch(`${Base_URL}/${url}`, options);
  const data = response.json();
  return data;
};

export { fetchDataFromAPI };
