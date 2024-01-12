const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

let downloadLink = null; // Change from const to let

app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/download', async (req, res) => {
    try {
        const URL = req.query.URL;
        const qualityLabel = req.query.qualityLabel || "1080p60";
        const fps = parseInt(req.query.fps) || 30;
        const container = req.query.container || 'mp4';

        const info = await ytdl.getInfo(URL);

        // Check if the requested format is available, otherwise default to highest quality
        const format = info.formats.find(format => format.qualityLabel === qualityLabel && format.fps === fps && format.container === container);

        if (!format) {
            return res.status(400).send('Requested format not available.');
        }

        const videoName = info.videoDetails.title;
        downloadLink = `${req.protocol}://${req.get('host')}/download?URL=${encodeURIComponent(URL)}&qualityLabel=${qualityLabel}&fps=${fps}&container=${container}`

        res.header('Content-Disposition', `attachment; filename="${videoName}_${qualityLabel}_${fps}fps.${container}"`);

        let response =res;
        ytdl(URL, {
            format: format
        }).pipe(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/link",async(req,res)=>{
    res.send(downloadLink);
})

