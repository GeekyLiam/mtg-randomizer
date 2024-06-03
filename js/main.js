function displayCard() {
    fetch(`https://api.scryfall.com/cards/random?q=is%3Acommander`)
        .then(response => response.json())
        .then(data => {
            let img = document.getElementById('cardImage');
            if (!img) {
                img = document.createElement('img');
                img.id = 'cardImage';
                document.getElementById('cardContainer').appendChild(img);
            }
            img.src = data.image_uris.normal;

            // Add event listeners after the image is created
            const cardContainer = document.querySelector('#cardContainer');

            cardContainer.addEventListener('mousemove', (e) => {
                let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });

            cardContainer.addEventListener('mouseleave', (e) => {
                img.style.transform = `rotateY(0deg) rotateX(0deg)`;
            });
        });
}

document.addEventListener('DOMContentLoaded', displayCard);

document.addEventListener('DOMContentLoaded', (event) => {
    const cardContainer = document.querySelector('#cardContainer');
    const cardImage = document.querySelector('#cardImage');

    cardContainer.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cardImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    cardContainer.addEventListener('mouseleave', (e) => {
        cardImage.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});

particlesJS('particles-js',
  
{
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
}
);