export interface IElectronAPI {
  loadPreferences: () => Promise<void>,
  saveImage: (path: string) => Promise<void>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}