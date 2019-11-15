let video = document.querySelector(".video");

function success(stream) {
  let vid_url = URL.createObjectURL(stream);

  video.src = vid_url;
  video.play();
}

function fail(error) {
  console.log(error.message);
}

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true
  })
  .then(success)
  .catch(fail);

