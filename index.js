const express = require("express");
const dotenv = require("dotenv");
const axios = require('axios');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", async (req,res)=> {
    const imageUrl = 'https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg';

    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imgBase64 = Buffer.from(response.data, 'binary').toString('base64');

      res.send(`
        <html>
          <body style="background: black;">
            <img src="data:image/jpeg;base64,${imgBase64}" alt="404 Not Found" />
          </body>
        </html>
      `);
    } catch (error) {
      console.error('Error fetching the image:', error);
      res.status(500).send('Error fetching the image.');
    }
})

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));
