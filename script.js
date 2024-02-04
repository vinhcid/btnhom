document.getElementById('backToTopBtn').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

var backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

var FocusUtility = {
  focusOnElement: function (selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.focus();
    }
  },
};

window.addEventListener("scroll", function () {
  var sideMenu = document.getElementsByClassName("side-menu")[0];
  var navbar = document.getElementsByClassName("navbar")[0]; // Replace 'navbar' with the actual ID of your navbar
  var scrollPosition = window.scrollY;

  // Check if the scroll position is greater than or equal to 10px
  if (scrollPosition >= 10) {
    sideMenu.style.top = "50px";
    navbar.style.top = "0"; // You may need to adjust this value based on your design
  } else {
    sideMenu.style.top = "110px";
    navbar.style.top = "50px"; // You may need to adjust this value based on your design
  }
});

window.addEventListener("resize", function() {
  var sideMenu = document.getElementsByClassName("side-menu")[0];
  var screenWidth = window.innerWidth;

  // Check if the screen width is less than or equal to 768px
  if (screenWidth <= 800) {
    sideMenu.style.display = "none"; // Hide the side menu
  } else {
    sideMenu.style.display = "block"; // Show the side menu
  }
});

function getRandomAds(arr) {
  // code lấy random 3 phần tử
}

// Lấy 3 video random
let randomAds = getRandomAds(allAds);

// Hiển thị 3 video
randomAds.forEach((ad) => {
  document.querySelector(".right-sidebar").innerHTML += generateAdHTML(ad);
});

var allAds = [
  {
    image: "/img/ad1.jpg",
    video: "/ads/ad1.mp4",
    link: "/product1",
  },
  // các video khác
];

function submitComment() {
  // Get the value from the textarea
  var commentValue = document.getElementById('commentTextarea').value;

  // Get the user avatar image
  var avatarImage = document.querySelector('.comment_avatar');

  // Create a new element to display the submitted comment and image
  var submittedCommentElement = document.createElement('div');
  submittedCommentElement.className = 'submitted_comment';

  // Display the avatar image in the submitted comment
  var avatarImageElement = document.createElement('img');
  avatarImageElement.src = avatarImage.src;
  avatarImageElement.alt = 'Avatar';
  submittedCommentElement.appendChild(avatarImageElement);

  // Display the comment text in the submitted comment
  var commentTextElement = document.createElement('div');
  commentTextElement.className = 'comment-text';
  commentTextElement.textContent = commentValue;
  submittedCommentElement.appendChild(commentTextElement);

  // Append the new element next to the comment box
  document.getElementById('submittedCommentsContainer').appendChild(submittedCommentElement);

  // Store the comment in local storage
  storeComment(commentValue);

  // Clear the textarea if needed
  document.getElementById('commentTextarea').value = '';
}

// Function to store the comment in local storage
function storeComment(comment) {
  // Check if there are existing comments in local storage
  var existingComments = JSON.parse(localStorage.getItem('comments')) || [];

  // Add the new comment to the existing comments
  existingComments.push(comment);

  // Store the updated comments back in local storage
  localStorage.setItem('comments', JSON.stringify(existingComments));
}

// Function to load comments from local storage and display them on page load
function loadComments() {
  var existingComments = JSON.parse(localStorage.getItem('comments')) || [];

  existingComments.forEach(function (comment) {
    var submittedCommentElement = document.createElement('div');
    submittedCommentElement.className = 'submitted_comment';

    var commentTextElement = document.createElement('div');
    commentTextElement.className = 'comment-text';
    commentTextElement.textContent = comment;
    submittedCommentElement.appendChild(commentTextElement);

    document.getElementById('submittedCommentsContainer').appendChild(submittedCommentElement);
  });
}

// Call loadComments on page load to display existing comments
loadComments();

let text;
let textarea = document.getElementById('comment_input');
let printedTextElement = document.getElementById('demo');

textarea.addEventListener('input', function getText() {
  text = textarea.value;
  // Update the displayed text
  printedTextElement.textContent = text;
});
