# YouTube Downloader

This repository contains a simple YouTube downloader web application built using HTML, CSS, and JavaScript on the frontend, and Express and ytdl-core on the backend. Users can input a YouTube video URL, choose the desired video quality and format, and download the video.

## Deployment

The application is deployed and can be accessed at [https://youtube-downloader-xtdp.onrender.com/](https://youtube-downloader-xtdp.onrender.com/).


## Getting Started

To run the application locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- NPM (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/youtube-downloader.git
   ```

2. Navigate to the project directory:

   ```bash
   cd youtube-downloader
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the server:

   ```bash
   node index.js
   ```

   The server will run on port 4000.
2.Replace "https://yt-downloder-pcxl.onrender.com" with your hosting domain or "http://localhost:4000" in the specified section.
3. Open your web browser and go to [http://localhost:4000](http://localhost:4000) to access the YouTube downloader.

## Usage

1. Enter a valid YouTube video URL in the input field.
2. Click the "Convert" button to generate download links.
3. Choose the desired video quality and format.
4. Click the corresponding download button to start the download.
5. Optionally, generate a QR code for quick access to the download link.

## Features

- Download YouTube videos in various formats and qualities.
- Responsive design for a user-friendly experience on different devices.
- QR code generation for convenient sharing of download links.

## Acknowledgments

- [ytdl-core](https://github.com/fent/node-ytdl-core): Used for fetching YouTube video information and downloading videos.
- [QRCode.js](https://davidshimjs.github.io/qrcodejs/): Used for generating QR codes.

Feel free to contribute, report issues, or suggest improvements!
