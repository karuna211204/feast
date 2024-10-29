// import app from "./app.js";

// app.listen(process.env.PORT, ()=>{
//     console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
// })

import app from './app.js';

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
