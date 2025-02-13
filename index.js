
// Questions array
const questions = [
  { q: "What is my favorite dessert?", a: "fruit salad", gif: "dancing brown bear.gif" },
  { q: "On which app did we first meet?", a: "litmatch", gif: "happy bubu dudu.gif" },
  { q: "What is my favorite color?", a: "black", gif: "playing bubbles brown bear.gif" },
  { q: "What is my favorite animal?", a: "penguin", gif: "playing cheeks white bear.gif" },
  { q: "What is my favorite anime movie?", a: "your name", gif: "brown bear with glass.gif" },
  { q: "Which country is my destination?", a: "switzerland", gif: "running brown bear with white bear.gif" },
  ];
  
  let currentQuestion = 0;
  let isAnswering = false;
  const submitButton = document.querySelector(".submit");
  const questionBox = document.getElementById("question-box");
  const questionText = document.getElementById("question-text");
  const answerInput = document.getElementById("answer");
  const finalQuestionBox = document.getElementById("final-question");
  const transitionMessage = document.getElementById("transition-message");
  const finalGif = document.getElementById("final-gif");
  const noButton = document.querySelector(".no");
  const yesButton = document.querySelector(".yes");
  
// Create Intro Screen
const introScreen = document.createElement("div");
introScreen.id = "intro-screen";
introScreen.style.textAlign = "center";
introScreen.style.backgroundColor = "#e1bee7";
introScreen.style.padding = "20px";
introScreen.style.borderRadius = "10px";
introScreen.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
introScreen.style.width = "80%";
introScreen.style.margin = "20px auto";
introScreen.style.fontFamily = "Arial, sans-serif";

const introMessage = document.createElement("h2");
introMessage.textContent = "Before we dive into the main question, I’ve got a few basic ones for you. We’ve been together for a while, so I’m sure this will be easy for you to answer you silly goose 😏";
introMessage.style.color = "#8e24aa";

// Add the GIF under the intro message
const introGif = document.createElement("img");
introGif.src = "writing brown bear.gif"; // Replace with the correct GIF file name
introGif.style.width = "200px"; // Adjust size as needed
introGif.style.marginTop = "10px";
introGif.style.borderRadius = "10px"; // Optional: rounded corners

// Create Start Button
const startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.style.padding = "10px 20px";
startButton.style.fontSize = "18px";
startButton.style.cursor = "pointer";
startButton.style.backgroundColor = "#8e24aa";
startButton.style.color = "white";
startButton.style.border = "none";
startButton.style.borderRadius = "8px";
startButton.style.transition = "all 0.3s ease";
startButton.style.display = "block"; // Ensure it appears below the GIF
startButton.style.margin = "15px auto 0"; // Center the button below the GIF

startButton.addEventListener("click", () => {
    introScreen.style.display = "none"; // Hide intro
    questionBox.style.display = "block"; // Show quiz
    nextQuestion();
});

introScreen.appendChild(introMessage);
introScreen.appendChild(introGif); // Add GIF below the message
introScreen.appendChild(startButton); // Add Start button BELOW the GIF
document.body.insertBefore(introScreen, document.body.firstChild);

  
  // Ensure the quiz does not start automatically
  questionBox.style.display = "none";
  
  submitButton.addEventListener("click", checkAnswer);
  
  // Show the next question
  function nextQuestion() {
  if (currentQuestion < questions.length) {
  const current = questions[currentQuestion];
  questionText.textContent = current.q;
  document.getElementById("question-gif").src = current.gif;
  document.getElementById("question-gif").style.display = "block";
  isAnswering = true;
  submitButton.disabled = false;
  } else {
  showTransitionMessage();
  }
  }
  
  // Transition to the final question
  function showTransitionMessage() {
  questionBox.style.display = "none";
  transitionMessage.style.display = "block";
  
  setTimeout(() => {
  transitionMessage.style.display = "none";
  showFinalQuestion();
  }, 1500);
  }
  
  // Show the final "Will you be my Valentine?" question
  function showFinalQuestion() {
  finalQuestionBox.style.display = "block";
  finalGif.src = "tuxedo brown bear.gif";
  }
  
  // Handle the answer submission
  function checkAnswer() {
  if (!isAnswering) return;
  
  let answer = answerInput.value.trim().toLowerCase();
  
  if (answer === questions[currentQuestion].a) {
  isAnswering = false;
  setTimeout(() => {
  answerInput.value = "";
  currentQuestion++;
  submitButton.disabled = true;
  nextQuestion();
  }, 1000);
  } else {
  alert("Oops! Try again!");
  }
  }
  
  // Make the "No" button avoid the mouse
  noButton.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  });
  
  // Create the greeting message container (hidden initially)
  const greetingContainer = document.createElement("div");
  greetingContainer.style.display = "none";
  greetingContainer.style.textAlign = "center";
  greetingContainer.style.marginTop = "20px";
  greetingContainer.style.position = "relative";
  greetingContainer.style.backgroundColor = "#e1bee7";
  greetingContainer.style.padding = "20px";
  greetingContainer.style.borderRadius = "15px";
  greetingContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  greetingContainer.style.width = "80%";
  greetingContainer.style.margin = "20px auto";
  greetingContainer.style.fontFamily = "Arial, sans-serif";
  
  // Create the greeting message
  const greetingMessage = document.createElement("h2");
  greetingMessage.textContent = "You actually pressed yes!! Happy Valentine's Day, My Love! ❤️";
  greetingMessage.style.fontSize = "32px";
  greetingMessage.style.color = "#d81b60";
  greetingMessage.style.fontWeight = "bold";
  greetingMessage.style.textShadow = "2px 2px 10px rgba(0,0,0,0.2)";
  
  // Create the greeting GIF
  const greetingGif = document.createElement("img");
  greetingGif.src = "ikot ikot bear.gif";
  greetingGif.style.width = "150px";
  greetingGif.style.marginTop = "0px";
  
  // Create the final letter message
  const letterMessage = document.createElement("p");
  letterMessage.textContent = "Thankful po me na dumating ka po sa buhay ko kahit ang sungit mo po,tsaka sorry if I get on your nerves all the time po hehe, pero I love you so much pretty bebe. Please accept these flowers po. d ko pa po afford yung totoo pero next time po totoong flowers na yan HAHAHAH kaya digital flowers nalang muna bebe ha, gusto kita bigyan real bulaklak kaso poorito pa me 😔";
  letterMessage.style.fontSize = "20px";
  letterMessage.style.color = "#4a148c";
  letterMessage.style.marginTop = "20px";
  
  // Create the bouquet image
  const bouquetImage = document.createElement("img");
  bouquetImage.src = "flowers.png";
  bouquetImage.style.width = "200px";
  bouquetImage.style.marginTop = "15px";
  bouquetImage.style.display = "none";
  bouquetImage.style.margin = "0 auto";
  bouquetImage.style.display = "block";
  bouquetImage.style.position = "relative";
  
  // Add CSS for floating effect
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
  }
  
  .floating {
  animation: float 2s ease-in-out infinite;
  }
  `;
  document.head.appendChild(style);
  
  // Apply floating effect to bouquet image
  bouquetImage.classList.add("floating");
  
  // Create the receive button
  const receiveButton = document.createElement("button");
  receiveButton.textContent = "Receive";
  receiveButton.style.display = "block";
  receiveButton.style.margin = "10px auto";
  receiveButton.style.padding = "10px 20px";
  receiveButton.style.fontSize = "18px";
  receiveButton.style.cursor = "pointer";
  receiveButton.style.backgroundColor = "#d81b60";
  receiveButton.style.color = "white";
  receiveButton.style.border = "none";
  receiveButton.style.borderRadius = "8px";
  receiveButton.style.transition = "all 0.3s ease";
  
  // When the receive button is clicked
  receiveButton.addEventListener("click", () => {
  bouquetImage.classList.remove("floating"); // Stop floating
  receiveButton.textContent = "Received"; // Change text
  receiveButton.style.backgroundColor = "gray"; // Change to black & white
  receiveButton.style.color = "white";
  receiveButton.style.cursor = "default";
  receiveButton.disabled = true; // Make it unclickable
  
  // Trigger the automatic download
  const link = document.createElement("a");
  link.href = "flowers.png"; // Make sure this is the correct path
  link.download = "flowers.png"; // File name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  });
  
  // Append elements to the greeting container
  greetingContainer.appendChild(greetingMessage);
  greetingContainer.appendChild(greetingGif);
  greetingContainer.appendChild(letterMessage);
  greetingContainer.appendChild(bouquetImage);
  greetingContainer.appendChild(receiveButton);
  document.body.appendChild(greetingContainer);
  
  // Show greeting when "Yes" is clicked
  yesButton.addEventListener("click", () => {
  finalQuestionBox.style.display = "none"; // Hide the final question
  greetingContainer.style.display = "block"; // Show the greeting message
  setTimeout(() => {
  bouquetImage.style.display = "block";
  receiveButton.style.display = "block";
  }, 2000);
  });
  
  // Initial function to start the quiz
  function startQuiz() {
  questionBox.style.display = "block";
  nextQuestion();
  }