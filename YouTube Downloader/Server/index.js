const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.listen(4000, () => {
    console.log('Server working and listening at port 4000');
});

// Making the server listen to GET requests on the /download path
app.get('/download', (req, res) => {
    var URL = req.query.URL;
    // res.json({ url: URL });

    res.header('content-disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});
