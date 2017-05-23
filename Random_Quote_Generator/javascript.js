var quotes = [
  //Adventure time
  //BMO
  '\"When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.\"<br> - BMO',
  '\"You won\'t ever be able to tell if everything is going to be totally haywire.\"<br> - BMO',
  //Jake
  '\"Sucking at something is the first step towards being sorta good at something.\"<br> - Jake',
  '\"You\'re getting all hung up, all hung up on imaginary problems.You\'ve gotta focus on what\'s real, man!\"<br> - Jake',
  '\"Hey! Crack open that book and read something for fun\'s sake, alright?\" <br> - Jake',
  //Bubblegum
  '\"People get built different. We don\'t need to figure it out, we just need to respect it.\"<br> - Princess Bubblegum',
  '\"Sometimes you want someone and you want to kiss them and be with them, but you can’t because responsibility demands sacrifice.\"<br> - Princess Bubblegum',
  //Jake jr
  '\"I\'m just thinking about the future, I guess. We\'re on, like, the bleeding edge of history. Everything ahead of us is totally unknown and there\'s no guarantee that things are going to be all right. It\'s exciting, but it\'s also pretty scary. You know?\"<br> - Jake Jr.',
  //Finn
  '\"No one flicks me in the butt without my consent!\"<br> - Finn',
  '\"Homies help homies. Always.\"<br> - Finn',
  '\"I wonder if being a sad loner gives you more raw materials to form song ideas. Is that where creativity comes from? From sad biz?\"<br> - Finn',
  '\"I say \'creepy\' is just another label we use to distance ourselves from stuff we don\'t understand. Or that it reminds us of something in ourselves that we\'re not comfortable with. It just ain\'t a real thing, ya know? Unless you choose to believe it.\"<br> - Finn',
 //Duke of Nuts
  '\"Hey, it\'s OK. People make mistakes. It\’s all part of growing up, and you never really stop growing.\"<br> - The Duke of Nuts',
  //Marcy's mom
  '\"Something weird might just be something familiar viewed from a different angle.\"<br> - Marcy\s Mom',

  //Regular Show
  //Rigby
  '\"Ham bon ing will save your life some day and u go what? u try to mug me? I am telling you man! Ham bon ing!\"<br> - Rigby',
  '\"Nothing beats drinking joe with my bro.\"<br> - Rigby',
  //Muscle man
  '\"Yeah losers. It takes more than expired soda to have a party. It takes guests with breasts. And mine don\'t count.\"<br> - Muscle Man',
  '\"Y\'know what else rocks this hard? My Mom!\"<br> - Muscle Man',
  
  
  //Rick and Morty
  //Morty
  '\"Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV.\"<br> - Morty',
  //Rick
   '\"Listen, Morty, I hate to break it to you but what people call \"love\" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science\" - Rick',
  '\"What about the reality where Hitler cured cancer, Morty? The answer is: Don\'t think about it."<br> - Rick',
  '\"You\'re young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.\"<br> - Rick',
  '\"That\'s planning for failure, Morty... Even dumber than regular planning.\"<br> - Rick',
  '\"It\'s like inception, so if it\'s confusing and stupid then so is everyone\'s favourite movie.\" <br> - Rick',
  '\"What, so everyone\'s supposed to sleep every single night now. You realize that nighttime makes up half of all time.\" <br> - Rick',
  
  //pokemon
  //Mewtwo
  '\"I see now that the circumstances of one\'s birth ar irrelevant. It is what you do with the gift of life that determines who you are.\"<br> - Mewtwo',
  '\"Humans may create me, but they cannot enslave me. This cannot be my destiny!\"<br> - Mewtwo',
  //Ash
  '\"Cause i always play to win!\"<br> - Ash Ketchum',
  '\"I\'m always hungry and that\'s that!\"<br> - Ash Ketchum',
  ' \"If anybody\'s out there, you can come out. And if you\'re a monster or a ghost, you can stay where you are.\"<br> - Ash Ketchum',
  //Gary
  '\"Well ash ya snooze ya lose and you\'re behind right from the start\"<br> - Gary Oak',
  '\"Sometimes I wonder why I was cursed with this talent.\"<br> - Gary Oak',
  //Random trainer
  '\"If you need to make a difficult decision and you let someone else decide for you, you will regret it, no matter how it turns out\"<br> - some pokemon trainer on Route 104',
  '\"Living is using the time given to you.<br>You cannot recall lost time.<br>Don\'t forget that.<br> - random pokemon trainer in Driftveil City',
  '\"If we live a monotonous life,<br>do we get used to it and stop thinking about changing it?\"<br> - random pokemon trainer in Icirrus City',
  '\"The more wonderful the meeting,<br>the sadder the parting\"<br> - some pokemon trainer on Stark Mountain',
  '“That BILL! I heard that he\’ll do whatever it takes to get rare Pokemon. He\’s not above doing all sorts of things, I\’ve heard.\"<br> - man in Cerulian City pokemon center',
  '\“Develop amnesia conveniently and forget everything you heard!\”<br> - Team Rocket grunt at the Sevii Islands',
  
  //Elite 4
  '\"Even if you lose in battle, if you surpass what you\'ve done before, you have bested yourself.\<br> - Marshal, Unove Elite Four"',
  '\"A warrior does not dash off in pursuit of another victory, nor does one throw a fit when experiencing a loss. A real warrior ponders the next battle.\<br> - Grimsley, Unova Elite Four”',
  //Professor Oak
  '\“This is my grandson. He\’s been your rival since you were a baby. …Erm, what is his name again?\”<br> - Professor Oak',
  
  
  
  
]
var randomNum = 0;
function newQuote() {
 randomNum = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote').innerHTML = quotes[randomNum];
}
function changeBGImage(){
  //BMO
  if (randomNum < 2) {
    document.body.background = "https://www.walldevil.com/wallpapers/a59/3999-wallpaper-adventure-desktop-images.jpg";
    //Jake
  }else if( randomNum < 5) {
    document.body.background = "http://wallpapercave.com/wp/d422Ff6.png";
     //bubblegum
  }else if( randomNum < 7) {
    document.body.background = "http://images6.fanpop.com/image/photos/35500000/AT-fanart-Classics-forever-adventure-time-35501542-1800-1200.jpg";
     //Jake jr.
  }else if( randomNum < 8) {
    document.body.background = "http://wallpapercave.com/wp/qGqqaGu.png";
     //Finn
  }else if( randomNum < 12) {
    document.body.background = "http://wallpaper-gallery.net/images/adventure-time-wallpaper-hd/adventure-time-wallpaper-hd-23.jpg";
    //Duke of nuts
  }else if (randomNum < 13){
    document.body.background = "https://i.ytimg.com/vi/iRomAbqGiGY/maxresdefault.jpg";
    //Marceline
  }else if (randomNum < 14) {
    document.body.background = "https://s-media-cache-ak0.pinimg.com/originals/75/91/02/759102edabb8bd36c20c35c6a5ef5641.jpg";
   //Regular show
    //Rigby
    }else if (randomNum < 16) {
    document.body.background = "http://wallpapercave.com/wp/CifCHe5.jpg";
    //MuscleMan
  }else if (randomNum < 18) {
    document.body.background = "https://i.ytimg.com/vi/ttDwpySPM-I/maxresdefault.jpg";
    
    //Rick and Morty
    //Morty
  } else if (randomNum < 19) {
    document.body.background = "https://images8.alphacoders.com/642/thumb-1920-642527.jpg";
    //Rick
  } 
  else if (randomNum < 25) {
    document.body.background = "https://images2.alphacoders.com/642/thumb-1920-642540.png";
    
    //Pokemon
    //Mewtwo   
  }else if (randomNum < 27) {
    document.body.background = "http://wallpapercave.com/wp/J5mqL59.jpg";  
  //Ash          
  }else if (randomNum < 30) {
    document.body.background = "http://wallpapercave.com/wp/flsEpjC.jpg";  
  //Gary
  }else if (randomNum < 32) {
    document.body.background = "https://images7.alphacoders.com/592/thumb-1920-592675.jpg";  
  //Random trainer 
  }else if (randomNum < 38) {
    document.body.background = "https://s-media-cache-ak0.pinimg.com/originals/31/84/f4/3184f459a94ef64fea2ca422bc7299a9.jpg";  
  //Elite four       
  }else if (randomNum < 40) {
    document.body.background = "http://www.cartoondistrict.com/wp-content/uploads/2014/12/pokemon-wallpaper-HD-for-desktop-17.jpg";  
  //Professor Oak     
  }else if (randomNum < 41) {
    document.body.background = "http://wallpapersdsc.net/wp-content/uploads/2016/09/Pikachu-HD-Wallpaper.jpg";  
  } 
}
