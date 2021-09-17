const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["A pleasant surprise is waiting for you.",
					 "A hunch is creativity trying to tell you something.",
					 "All your hard work will soon pay off.",
           "A person of words and not deeds is like a garden full of weeds",
           "Be careful or you could fall for some tricks today.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

let user = {
  username: 'Dragon',
  firstName: 'Joey',
  lastName: 'Tribiani'
}

app.post('/api/users', (req,res) => {
  console.log(req.body)
  let username = req.body.username
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  res.status(200).send(`Welcome, ${username}! It is nice to meet you ${firstName} ${lastName}.`)
})

app.get("/api/users", (req, res) => {
  let family = ["Adelaide", "Mitchell", "Wyatt", "Ranger", "Bowie"];
  res.status(200).send(family);
});

app.listen(4000, () => console.log("Server running on 4000"));

