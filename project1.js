const quotes = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn't just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Stay focused and never give up.",
  "Hard work beats talent when talent doesn't work hard.",
  "Don't stop until you're proud.",
  "The harder you work, the luckier you get.",
  "Do something today that your future self will thank you for.",
  "Great things never come from comfort zones.",
  "Success is what comes after you stop making excuses.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "Work hard in silence, let success make the noise.",
  "Don't wait for opportunity. Create it.",
  "Small steps every day lead to big results.",
  "Be stronger than your excuses.",
  "It always seems impossible until it's done.",
  "You are capable of amazing things.",
  "Start where you are. Use what you have. Do what you can.",
  "Don't be afraid to fail. Be afraid not to try.",
  "Success is not for the lazy.",
  "Your only limit is your mind.",
  "Make today count.",
  "Consistency is the key to success.",
  "Turn your dreams into plans.",
  "Action is the foundational key to success.",
  "Never give up on something you really want.",
  "The best way to get started is to quit talking and begin doing.",
  "Focus on progress, not perfection."
];

const button=document.querySelector('button');
const quote =document.querySelector('h1');

button.addEventListener("click",()=>{
    const index=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[index];
});
