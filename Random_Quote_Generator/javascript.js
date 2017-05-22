var quotes = [
  'When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.<br> - BMO',
  'People get built different. We don\'t need to figure it out, we just need to respect it.<br> - Princess Bubblegum',
  'Sucking at something is the first step towards being sorta good at something.<br> - Jake',
  'I\'m just thinking about the future, I guess. We\'re on, like, the bleeding edge of history. Everything ahead of us is totally unknown and there\'s no guarantee that things are going to be all right. It\'s exciting, but it\'s also pretty scary. You know?<br> - Jake Jr.',
  'No one flicks me in the butt without my consent!<br> - Finn',
  'You\'re getting all hung up, all hung up on imaginary problems.You\'ve gotta focus on what\'s real, man!<br> - Jake',
  'Homies help homies. Always.<br> - Finn',
  'I wonder if being a sad loner gives you more raw materials to form song ideas. Is that where creativity comes from? From sad biz?<br> - Finn',
  'Sometimes you want someone and you want to kiss them and be with them, but you can’t because responsibility demands sacrifice.<br> - Princess Bubblegum',
  'Hey, it\'s OK. People make mistakes. It\’s all part of growing up, and you never really stop growing.<br> - The Duke of Nuts',
  'I say \'creepy\' is just another label we use to distance ourselves from stuff we don\'t understand. Or that it reminds us of something in ourselves that we\'re not comfortable with. It just ain\'t a real thing, ya know? Unless you choose to believe it.<br> - Finn',
  'Something weird might just be something familiar viewed from a different angle.<br> - Marcy\s Mom',
  'You won\'t ever be able to tell if everything is going to be totally haywire.<br> - BMO',
  'Hey! Crack open that book and read something for fun\'s sake, alright?<br> - Jake',
]

function newQuote() {
var randomNum = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote').innerHTML = quotes[randomNum];
}
