var quotes = [
  'When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light. - BMO',
  'People get built different. We don\'t need to figure it out, we just need to respect it. - Princess Bubblegum',
  'Sucking at something is the first step towards being sorta good at something. - Jake',
  'I\'m just thinking about the future, I guess. We\'re on, like, the bleeding edge of history. Everything ahead of us is totally unknown and there\'s no guarantee that things are going to be all right. It\'s exciting, but it\'s also pretty scary. You know? - Jake Jr.',
  'No one flicks me in the butt without my consent! - Finn',
  'You\'re getting all hung up, all hung up on imaginary problems.You\'ve gotta focus on what\'s real, man! - Jake',
  'Homies help homies. Always. - Finn',
  'I wonder if being a sad loner gives you more raw materials to form song ideas. Is that where creativity comes from? From sad biz? - Finn',
  'Sometimes you want someone and you want to kiss them and be with them, but you can’t because responsibility demands sacrifice. - Princess Bubblegum',
  'Hey, it\'s OK. People make mistakes. It\’s all part of growing up, and you never really stop growing. - The Duke of Nuts',
  'I say \'creepy\' is just another label we use to distance ourselves from stuff we don\'t understand. Or that it reminds us of something in ourselves that we\'re not comfortable with. It just ain\'t a real thing, ya know? Unless you choose to believe it. - Finn',
  'Something weird might just be something familiar viewed from a different angle. - Marcy\s Mom',
  'You won\'t ever be able to tell if everything is going to be totally haywire. - BMO',
  'Hey! Crack open that book and read something for fun\'s sake, alright? - Jake',
]
function newQuote() {
  var random = Math.floor( math.random() * ( quotes.length-1) );
  document.getElementById('quote').innerHTML = quotes[random];
}