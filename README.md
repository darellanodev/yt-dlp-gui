# yt-dlp-gui

This a simple graphical user interface (GUI) for the [yt-dlp](https://github.com/yt-dlp/yt-dlp) application. This project if for learning about Electron.

## THIS APPLICATION IS IN AN EARLY STAGE OF DEVELOPMENT

## Github repository

- <https://github.com/darellanodev/yt-dlp-gui>

## Screenshots

![yt-dlp-gui](https://github.com/darellanodev/yt-dlp-gui/blob/main/img_github_readme/screenshot.png?raw=true)

## Installation

I use PNPM, so after you install PNPM, run `pnpm install`

For Windows, download in the `bin` folder the `yt-dlp.exe` and the `ffmpeg.exe`

- yt-dlp: <https://github.com/yt-dlp/yt-dlp/releases/download/2024.11.18/yt-dlp.exe>
- ffmpeg: <https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip> (extract the executable)

## Running the application

- Run `pnpm start` or execute `./run.sh` (they are the same)
- Use this gui to create the commands
- Paste the commands into a `run.bat` file in the `bin` folder
- Move to the `bin` folder and execute the `./run.bat` file

Also you can open the `index.html` with the Live Server VSCode extension or other web server.

## Running the tests

Execute `./run_tests.sh`
