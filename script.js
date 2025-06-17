document.addEventListener("DOMContentLoaded", () => {
  const tracks = [
    { title: "🔥 SDK's Intro Theme", src: "Intro.mp3" },
  ];

  let currentIndex = 0;
  const audio = document.getElementById("audio-player");
  const trackInfo = document.getElementById("track-info");
  const playBtn = document.getElementById("play");

  function loadTrack(index) {
    audio.src = tracks[index].src;
    trackInfo.textContent = tracks[index].title;
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playBtn.textContent = "▶️";
    }
  }

  function playNext() {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.textContent = "⏸️";
  }

  function playPrev() {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.textContent = "⏸️";
  }

  // Initial setup
  loadTrack(currentIndex);

  // Event listeners
  playBtn.addEventListener("click", togglePlay);
  nextBtn.addEventListener("click", playNext);
  prevBtn.addEventListener("click", playPrev);
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.custom-dropdown');
  const button = dropdown.querySelector('.dropdown-btn');
  const content = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', function() {
    dropdown.classList.toggle('open');
  });

  content.querySelectorAll('div').forEach(item => {
    item.addEventListener('click', function() {
      button.textContent = this.textContent;
      dropdown.classList.remove('open');
      // Optionally: console.log(item.dataset.value);
    });
  });

  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

