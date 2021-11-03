const CONSTANTS = {
    APP_ID: '196508ba26c2db10',
    REGION: 'us',
    AUTH_KEY: '9da79cec26e6c1fba1d79b467515073cd154af56',
    UID: 'SUPERHERO1'
  }

var options = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'apiKey': "1df773b3303e87ed3cb3dfcea3ecaab6898530fb",
  },
  'body': {
    'uid': "tomswayer",
    'name': "someone asd",
  }
};

const fetching = async (req, res) => {
  const response = await fetch("https://196508ba26c2db10.api-us.cometchat.io/v3/users",  options);
  const resp = await response.json();

  // setRes(response.json());

  res.statusCode = 200;
  res.json({ res: resp });
};
export default fetching


 