require("dotenv").config();
const app = require("./server");

const port = process.env.PORT;

const init = async () => {
  app.listen(PORT, () => console.log(`server flyin on port ${port}`));
};

init();
