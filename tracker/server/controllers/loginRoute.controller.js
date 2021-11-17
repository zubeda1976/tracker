const axios = require("axios");

//**********************GET TOKEN FROM CODE*************************

module.exports.getToken = async (req, res) => {
  const clientId = process.env.CLIENT_ID; //"8580190df859fba0b01f";//
  const clientSecret = process.env.CLIENT_SECRET; //"a9aa391754d8ce22d0b1b512d2c3e973d85f1602";

  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.body.code,
  };

  const opts = { headers: { accept: "application/json" } };
  await axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((res) => res.data["access_token"])
    .then(async (token) => {
      res.redirect(`login/${token}`);
    })
    .catch((error) => {
      console.log(`GET TOKEN: ${error.message}`);
    });
};

//*********************GET USER FROM TOKEN**************************

module.exports.getUser = async (req, res) => {
  if (req.params.token) {
    await axios
      .get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${req.params.token}`,
        },
      })
      .then((response) => {
        res.send({ ...response.data }).end();
      })
      .catch((error) => {
        res.send(`GET USER: ${error.message}`);
      });
  }
};
