let player;

// Initialize the YouTube player
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-video", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Function called when player is ready
function onPlayerReady(event) {
  // Player is ready to control
}

document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("video-modal").classList.remove("hidden");
  document.getElementById("youtube-video").src =
    "https://www.youtube.com/embed/l8FqHLjcRJ0?si=Hd_0TUasHl42OVqg";
});

// Close the modal and stop the video
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("video-modal").classList.add("hidden");
  document.getElementById("youtube-video").src = "";
  if (player && player.pauseVideo) {
    player.pauseVideo();
  }
});

// Close the modal when clicking outside the video
document
  .getElementById("video-modal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("video-modal").classList.add("hidden");
      document.getElementById("youtube-video").src = "";
      if (player && player.pauseVideo) {
        player.pauseVideo();
      }
    }
  });
