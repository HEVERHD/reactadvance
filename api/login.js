const axios = require("axios");

export default async function handler(request, response) {
  const res = await axios.post("http://challenge-react.alkemy.org/", {
    email: "challenge@alkemy.org",
    password: "react",
  });

  return response.status(200).json({ data: res.data });
}
