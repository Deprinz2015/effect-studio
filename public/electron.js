const path = require('path');

const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        show: false
    });

    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    if (isDev) {
        win.webContents.openDevTools({mode: 'detach'});
    }

    win.once('ready-to-show', win.show);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', app.quit);
