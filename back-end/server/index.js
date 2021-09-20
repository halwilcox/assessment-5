const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
//Fortune teller
app.get("/api/fortune", (req, res) => {
  const fortune = ["A pleasant surprise is waiting for you.",
					 "A hunch is creativity trying to tell you something.",
					 "All your hard work will soon pay off.",
           "A person of words and not deeds is like a garden full of weeds",
           "Be careful or you could fall for some tricks today.",
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});


app.get("/api/users", (req, res) => {
  let family = ["Adelaide", "Mitchell", "Wyatt", "Ranger", "Bowie"];
  res.status(200).send(family);
});

app.listen(4000, () => console.log("Hi Wyatt"));

