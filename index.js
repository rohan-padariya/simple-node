const express = require("express");
const dotenv = require("dotenv");
const axios = require('axios');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", async (req,res)=> {
    res.send("Hello there! Api is working")

    const imageUrl = 'https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg';

    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imgBase64 = Buffer.from(response.data, 'binary').toString('base64');

      res.send(`
        <html>
          <body style="color=black">
            <img style="height=50vh;width=50vh" src="data:image/jpeg;base64,${imgBase64}" alt="404 Not Found" />
          </body>
        </html>
      `);
    } catch (error) {
      console.error('Error fetching the image:', error);
      res.status(500).send('Error fetching the image.');
    }
})

app.get('/image', async (req, res) => {
    const imageUrl = 'https://img.freepik.com/free-vector/image-upload-landing-page_52683-23795.jpg?t=st=1729411214~exp=1729414814~hmac=5f32f8ce66a83ad91c945a43220b09b1f54fe4e6d2904155b622bbfd637a68ca&w=1480';

    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imgBase64 = Buffer.from(response.data, 'binary').toString('base64');

      res.send(`
        <html>
          <body>
            <img style="height=80vh;width=80vh" src="data:image/jpeg;base64,${imgBase64}" alt="404 Not Found" />
          </body>
        </html>
      `);
    } catch (error) {
      console.error('Error fetching the image:', error);
      res.status(500).send('Error fetching the image.');
    }
});

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));
