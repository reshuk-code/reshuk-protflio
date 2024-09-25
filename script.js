
  const button = document.getElementById('button-to-open-nav');
  const navList = document.getElementById('nav-list');


  button.addEventListener('click', function() {
      if (navList.style.display === 'none' || navList.style.display === '') {
          navList.style.display = 'block';  
      } else {
          navList.style.display = 'none';  
      }
  });



  const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});


const changeText = document.querySelector("#change-text");

const words = ["YAY!", "POW!", "ZOOM", "SNAP", "BUZZ", "WOWZ", "ZEST", "POP!", "WHAM", "VIBE"];
let index = 0;


function updateText() {
  changeText.textContent = words[index]; 
  index = (index + 1) % words.length;   
}

setInterval(updateText, 3000);


updateText();


const btn = document.getElementById('view-project');

function takeTOMYWORK() {
  window.location.href = './components/assets/getintouch.html';
}

btn.addEventListener('click', takeTOMYWORK);


function goBack() {
  const previousPage = document.referrer; // Gets the URL of the previous page
  if (previousPage) {
      window.location.assign(previousPage); // Redirects to the previous page
  } else {
      window.location.assign('index.html'); // Fallback in case there's no referrer
  }
}

// Attach the event listener to the Go Back button
const goBackButton = document.querySelector('.go-back-btn');
goBackButton.addEventListener('click', goBack);

// Typewriter effect
function typeWriter(textElement, text, speed, callback) {
  let i = 0;

  function type() {
      // Check if we encounter a <br> tag and add it as a line break
      if (text.substring(i, i + 4) === '<br>') {
          textElement.innerHTML += '<br>';
          i += 4; // Skip over the <br> characters
      } else {
          textElement.innerHTML += text.charAt(i);
          i++;
      }

      if (i < text.length) {
          setTimeout(type, speed); // Continue typing
      } else if (callback) {
          callback(); // Move to the next effect after finishing
      }
  }

  type();
}

window.onload = function() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const paragraphText = document.getElementById('paragraph-text');
  const techStack = document.getElementById('my-tech-stack');

  // Clear text initially
  text1.innerHTML = '';
  text2.innerHTML = '';
  text3.innerHTML = '';
  paragraphText.innerHTML = '';

  // Type each part with delays and line breaks
  typeWriter(text1, 'Reshuk Sapkota', 100, function() {
      typeWriter(text2, 'Web Developer', 100, function() {
          typeWriter(text3, 'digital experiences', 100, function() {
              typeWriter(paragraphText, 'With a deep passion for crafting sleek, high-performance websites,<br> I transform ideas into functional, cutting-edge online solutions.<br> My expertise spans responsive design, modern frameworks like React,<br> and seamless user interfaces that captivate and engage.<br> Always pushing boundaries, I turn every project into a buzz-worthy<br> digital masterpiece.<br> Let’s create something that not only works but wows.', 50, function() {
                  // Show the Tech Stack section after the paragraph finishes typing
                  techStack.style.display = 'block';
              });
          });
      });
  });
};





