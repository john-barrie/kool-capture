enum MediaDeviceKind {
  AudioInput = "audioinput",
  AudioOutput = "audiooutput",
  VideoInput = "videoinput"
}


class WebCamUtil {
  private __id: string = Math.random().toString(36);
  private __video: HTMLVideoElement | null;

  async attachVideoStream(video: string) {
    navigator.mediaDevices.getUserMedia({ video: { width: { min: 640, max: 640, }, height: { min: 360, max: 360 } } }).then((stream) => {
      this.__video = document.querySelector(video)
      const track = stream.getVideoTracks()[0];
      const settings = track.getSettings();

      if (this.__video) { this.__video.srcObject = stream; }
    }).catch(function () {
      alert('could not connect stream');
    });
  }



  listWebcams() {
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      devices.forEach(function (device) {
        if (device.kind === MediaDeviceKind.VideoInput) {
          console.log(device.kind + ": " + device.label +
            " id = " + device.deviceId);

        }
      })
    })
  }

  capture() {
    var canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.id = "CursorLayer";
    canvas.width = 1280;
    canvas.height = 720;
    canvas.getContext("2d")?.drawImage(this.__video as CanvasImageSource, 0, 0, this.__video?.videoWidth || 1280, this.__video?.videoHeight || 720, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg");
  }
}

const WebCam = new WebCamUtil();
export { WebCam }