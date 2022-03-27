/**
 * Entry point of the Election app.
 */
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserWindow, app, ipcMain } from 'electron';
let mainWindow: Electron.BrowserWindow | null;



function createWindow(): void {
  mainWindow = new BrowserWindow({
    minHeight: 600,
    minWidth: 800,
    height: 800,
    width: 1280,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      nodeIntegrationInWorker: true,
      devTools: process.env.NODE_ENV !== 'production',
      preload: path.join(__dirname, './preload.bundle.js')
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  ).finally(() => { /* no action */ });
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

app.on('ready', () => {
  ipcMain.handle('disk:save-image', (event, data) => {
    let buf = Buffer.from(data.replace('data:image/jpeg;base64,', ''), 'base64');
    fs.writeFile(path.join(app.getPath('desktop'), 'dood.jpg'), buf, function (err) { })
  });
  createWindow()
});


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
