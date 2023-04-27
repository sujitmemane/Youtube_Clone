const Base_URL = "https://youtube-v38.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "0efa9736f1msh6c766df2f328a27p172326jsn1bfddb811d07",
    "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
  },
};

const fetchDataFromAPI = async (url) => {
  const response = await fetch(`${Base_URL}/${url}`, options);
  const data = response.json();
  return data;
};

export { fetchDataFromAPI };
