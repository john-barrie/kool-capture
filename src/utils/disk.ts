import { IElectronAPI } from '_/@types/commands'
class DiskUtilClass {
  save(data: string, path: string) {
    (window['electronAPI'] as IElectronAPI).saveImage(data);
    //console.log(window)
  }
}

const DiskUtil = new DiskUtilClass()
export { DiskUtil }