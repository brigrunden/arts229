/**
 * @title: Random Quote Generator
 * @objective: Get a random quote whenever button is clicked
 */

var quoteArray = [
    {
        content: "I DECLARE BANKRUPTCY!",
        author: "Michael Scott"
    },
    {
        content: "You don't call retarded people retards. It's bad taste. You call your friends retards when they're acting retarded.",
        author: "Michael Scott"
    },
    {
        content: "Yeah, I have a lot of questions. Number one: how dare you?",
        author: "Kelly Kapoor"
    },
    {
     content: "I don't want somebody sucking up to me because they think I am going to help their career...I want them sucking up to me because they genuinely love me.",
     author: "Michael Scott"
   },

   {
     content: "In the wild, there is no healthcare. Healthcare is 'Oh, I broke my leg!' A lion comes and eats you, you're dead. Well, I'm not dead, I'm the lion, you're dead!",
     author: "Dwight Schrute"
   },

   {
     content: "My perfect Valentine's Day? I'm at home, three cell phones in front of me, fielding desperate calls from people who want to buy one of the fifty restaurant reservations I made over 6 months ago.",
     author: "Dwight Schrute"
   },
   {
     content: "What is my perfect crime? I break into Tiffany's at midnight. Do I go for the vault? No, I go for the chandelier. It's priceless. As I'm taking it down, a woman catches me. She tells me to stop. It's her father's business. She's Tiffany. I say no. We make love all night. In the morning the cops come and I escape in one of their uniforms. I tell her to meet me in Mexico but I go to Canada. I don't trust her. Besides, I like the cold. Thirty years later, I get a postcard. I have a son and he's the chief of police. This is where the story gets interesting: I tell Tiffany to meet me in Paris, by the Trocadero. She's been waiting for me all these years; she's never taken another lover. I don't care, I don't show up. I go to Berlin. That's where I stashed the chandelier.",
     author: "Dwight Schrute"
   },
   {
     content: "Toby is in HR, which technically means he works for corporate, so he's really not a part of our family. Also, he's divorced, so he's really not a part of his family.",
     author: "Michael Scott"
 },
 {
     content:  "I think an ordinary paper company like Dunder-Mifflin was a great subject for a documentary. There's a lot of beauty in ordinary things. Isn't that kind of the point?",
     author: "Pam Beesly"
   },
   {
     content: "Let me describe the perfect date: I take her out to a nice dinner; she looks amazing. Some guy tries to hit on her...now he wants to fight, so I grab him, I throw him into the jukebox! Then the other ninja's got a knife, he comes at me, we grapple, I turn his knife on him. Blood on the dance floor! She's scared now. I take her home. I'm holding her in my arms. I reach in for a kiss...I hear something in the leaves, I flip her around, she gets a poison arrow right in her back. She was in on it the whole time...but I knew.",
   author: "Dwight Schrute"
   },
   {
     content: "I have been Michael Scott's #2 guy for about 5 years. And we make a great team. We're like one of those classic famous teams. He's like Mozart, and I'm like Mozart's friend. No. I'm like Butch Cassidy, and Michael Scott is like Mozart. You try and hurt Mozart; you're going to get a bullet in your head courtesy of Butch Cassidy.",
     author: "Dwight Schrute"
 },
 {
      content: "Even if I didn't love every minute of it, everything I have, I owe to this job. This stupid, wonderful, boring, amazing job.",
      author: "Jim Halpert"
  },
  {
      content: "I took a desk at the back because it was empty. But no matter how you get there or where you end up, human beings have this miraculous gift to make that place home.",
      author: "Creed Bratton"
  },
  {
      content: "I wish there was a way to know you're in the good old days before you've actually left them.",
      author: "Andy Bernard"
  },
  {
      content: "It took me so long to do so many important things. It's just hard to accept that I spent so many years being less happy than I could have been. Jim was 5 feet from my desk and it took me four years to get to him. It'd be great if people saw this documentary and learned from my mistakes. Not that I'm a tragic person. I'm really happy now. But it would just make my heart soar if someone out there saw this and she said to herself 'be strong, trust yourself, love yourself.' Conquer your fears. Just go after what you want and act fast, because life just isn't that long.",
      author: "Pam Beesly"
  },
  {
      content: "Why are you the way that you are? Honestly, every time I try to do something fun or exciting, you make it not that way. I hate so much about the things that you choose to be.",
      author: "Michael Scott"
  },
  {
      content: "There is a master key and a spare key for the office. Dwight has them both. When I asked, 'What if you die, Dwight? How will we get into the office?' He said, 'if I'm dead, you guys have been dead for weeks.'",
      author: "Pam Beesly"
  },
];

//grab html elements
var button = document.getElementById('quote-button'),
    quote = document.getElementById('quote'),
    author = document.getElementById('quote-author'),
    tweet = document.getElementById('tweet'),
    random;

//Generate a Random Quote
window.onload = randomQuote;
button.addEventListener('click', randomQuote);

//run the function so there are no double buttons happening
tweetQuote();

//random quote function
function randomQuote (){
    //get a random number to pick a random quote object
    random = Math.floor(Math.random() * quoteArray.length);
    //get that random quote's content
    quote.innerHTML = quoteArray[random].content;
    //get that random quote's author
    author.innerHTML = '&mdash; ' + quoteArray[random].author;

    //Tweet that new generated quote
    tweetQuote();
}

//Dynamically Generate Content + Button
function tweetQuote (){
    var quoteShort = quote.innerHTML,
        quoteShortAuthor = author.innerHTML.substr(2).trim(),
        msg ='';

    //are there two tweet buttons? also from http://jsfiddle.net/LEBz8/1/
    var elem = document.getElementById('twitterbutton');
    if (elem !== null) {
        elem.parentNode.removeChild(elem);
    }

    //cut the message to fit the 140 length + leave some extra
    if(quoteShort.length + quoteShortAuthor.length <= 90){
        msg = '"' +quoteShort + '" by ' + quoteShortAuthor;
    }else {
        msg = '"'+ quoteShort.substr(0, 65) + '[...]" by ' + quoteShortAuthor;
    }

    //select the button using its class reference https://bit.ly/221t0Hw
    var tweetDiv = document.querySelector('.twitter-share-button');

    //make a new twitter button to dynamically generate stuff http://jsfiddle.net/LEBz8/1/
    var link = document.createElement('a');

    //set attributes for new button
    link.setAttribute('href', 'https://twitter.com/share');
    link.setAttribute('class', 'twitter-share-button');
    link.setAttribute('id', 'tweet');
    link.setAttribute('data-text', msg);
    link.setAttribute('data-via', 'littleblacksmth');
    link.setAttribute('data-size', 'large');

    //replace the button for this one
    tweetDiv.parentNode.replaceChild(link, tweetDiv);

    //load twitter -- important
    twttr.widgets.load();
}

! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');
