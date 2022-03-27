const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  saveImage: (data: string) => {
    ipcRenderer.invoke('disk:save-image', data)
  },
  loadPreferences: () => ipcRenderer.send('load-preferences')
})