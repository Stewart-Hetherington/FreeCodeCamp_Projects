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
  
  '\"Ham bon ing will save your life some day and u go what? u try to mug me? I am telling you man! Ham bon ing!\"<br> - Rigby',
  '\"Nothing beats drinking joe with my bro.\"<br> - Rigby',
  '\"Yeah losers. It takes more than expired soda to have a party. It takes guests with breasts. And mine don\'t count.\"<br> - Muscle Man',
  '\"Y\'know what else rocks this hard? My Mom!\"<br> - Muscle Man',
  
  
  
  '\"Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV.\"<br> - Morty',
   '\"Listen, Morty, I hate to break it to you but what people call \"love\" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science\" - Rick',
  '\"What about the reality where Hitler cured cancer, Morty? The answer is: Don\'t think about it."<br> - Rick',
  '\"You\'re young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.\"<br> - Rick',
  '\"That\'s planning for failure, Morty... Even dumber than regular planning.\"<br> - Rick',
  '\"It\'s like inception, so if it\'s confusing and stupid then so is everyone\'s favourite movie.\" <br> - Rick',
  '\"What, so everyone\'s supposed to sleep every single night now. You realize that nighttime makes up half of all time.\" <br> - Rick',
  
  
]
var imgArr = new Array();
imgArr[0] = new Image();
imgArr[0].src = "https://images7.alphacoders.com/487/487248.jpg";

imgArr[0] = new Image();
imgArr[0].src = "";

imgArr[0] = new Image();
imgArr[0].src = "";

imgArr[0] = new Image();
imgArr[0].src = "";

imgArr[0] = new Image();
imgArr[0].src = "";

var randomNum = 0;
function newQuote() {
 randomNum = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote').innerHTML = quotes[randomNum];
}
function changeBGImage(){
  if (randomNum < 5) {
    document.body.background = "https://www.walldevil.com/wallpapers/a59/3999-wallpaper-adventure-desktop-images.jpg";
  }else if( randomNum < 10) {
    document.body.background = "http://wallpapercave.com/wp/DJQQ33f.png";
  }else if (randomNum < 14){
    document.body.background = "https://images5.alphacoders.com/312/thumb-1920-312856.png";
  }else if (randomNum < 18) {
    document.body.background = "http://wallpaper-gallery.net/images/regular-wallpaper/regular-wallpaper-15.jpg";
  } else{
    document.body.background = "https://images3.alphacoders.com/606/606020.jpg";
  }   
}
