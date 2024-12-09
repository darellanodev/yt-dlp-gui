# yt-dlp-gui

This a simple graphical user interface (GUI) for the [yt-dlp](https://github.com/yt-dlp/yt-dlp) application for learning purposes.

## THIS APPLICATION IS IN AN EARLY STAGE OF DEVELOPMENT

## Github repository

- <https://github.com/darellanodev/yt-dlp-gui>

## Technologies

[![Electron](https://img.shields.io/badge/Electron-191970?style=flat&logo=Electron&logoColor=white)](https://www.electronjs.org)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io)
[![pnpm](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat&logo=pnpm&logoColor=f69220)](https://pnpm.io)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io)

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
