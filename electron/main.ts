import { app, BrowserWindow, Menu } from 'electron'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, 'public')
  : RENDERER_DIST

let win: BrowserWindow | null

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }

  const menu = Menu.buildFromTemplate([
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: () => openAboutWindow(),
        },
      ],
    },
  ])

  Menu.setApplicationMenu(menu)
}

function openAboutWindow() {
  const aboutWindow = new BrowserWindow({
    width: 400,
    height: 300,
    title: 'About yt-dlp-gui',
    resizable: false,
    minimizable: false,
    maximizable: false,
    modal: true,
    parent: win!,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  aboutWindow.loadURL(
    'data:text/html;charset=utf-8,' +
      encodeURIComponent(`
    <html>
    <head>
      <title>About yt-dlp-gui</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        h2 { margin-bottom: 10px; }
        p { margin: 5px 0; }
        a { color: #007bff; text-decoration: none; }
      </style>
    </head>
    <body>
      <h2>yt-dlp-gui</h2>
      <p>Version: 0.1beta</p>
      <p>This is a simple graphical user interface (GUI) for the yt-dlp application for learning purposes.</p>
      <p>Author: darellanodev</p>
      <p><a href="https://github.com/darellanodev/yt-dlp-gui" target="_blank">GitHub Repository</a></p>
    </body>
    </html>
  `),
  )
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow)
