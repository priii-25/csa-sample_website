const messageElement = document.querySelector('.message');
const adjectives = ['leader', 'learners', 'innovative', 'achievers','future','confident'];
let currentIndex = 0;
function changeAdjective() 
{
  currentIndex = (currentIndex + 1) % adjectives.length;
  messageElement.textContent = adjectives[currentIndex];
}
setInterval(changeAdjective, 2000);
