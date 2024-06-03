// Fetch and display a random card
async function displayCard() {
  spinner.style.display = 'block'; // Show the spinner

  try {
      const response = await fetch(`https://api.scryfall.com/cards/random?q=is%3Acommander`);
      const data = await response.json();

      let img = document.getElementById('cardImage');
      if (!img) {
          img = createImageElement();
      }
      img.src = data.image_uris.normal;
      img.style.opacity = '0'; // Initially hide the image

      const cardContainer = document.querySelector('#cardContainer');
      addCardEventListeners(cardContainer, img);

      // Add event listener to the button
      const button = document.querySelector('#buttonContainer button');
      button.addEventListener('click', () => {
          img.style.opacity = '0';
      });

      // Fade in the image
      setTimeout(() => {
          img.style.opacity = '1';
      }, 100); // Delay to allow for image loading
  } catch (error) {
      console.error('Failed to fetch card:', error);
  } finally {
      spinner.style.display = 'none'; // Hide the spinner
  }
}

document.addEventListener('DOMContentLoaded', displayCard);

// Create an image element and append it to the card container
function createImageElement() {
  const img = document.createElement('img');
  img.id = 'cardImage';
  img.style.transform = 'rotateY(0deg) rotateX(0deg)';
  img.style.imageRendering = 'auto';
  document.getElementById('cardContainer').appendChild(img);
  return img;
}

// Add mousemove and mouseleave event listeners to the card
function addCardEventListeners(cardContainer, img) {
  cardContainer.addEventListener('mousemove', (e) => {
      const xAxis = -(window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  cardContainer.addEventListener('mouseleave', () => {
      img.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

// Create a spinner element
const spinner = document.createElement('div');
spinner.className = 'spinner';
document.body.appendChild(spinner);

document.addEventListener('DOMContentLoaded', displayCard);

// ParticleJS configuration
const particleConfig = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 1
      },
    },
    "line_linked": {
        "enable": false,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
    },
    "size": {
        "value": 2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
    },
    "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

particlesJS('particles-js', particleConfig);