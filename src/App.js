import React, { useState } from 'react';
import './App.css';

// Example quotes array
const quotes = [
  "Hi, I'm Chandler. I make jokes when I'm uncomfortable.",
"Oh dear god. Hold on, there’s something different.",
"I tend to keep talking until somebody stops me.",
"I can handle this. 'Handle' is my middle name. Actually, 'handle' is the middle of my first name.",
"Dehydrated Japanese noodles under fluorescent lights... does it get better than this?",
"Nice camouflage. For a minute, I almost didn’t see you.",
"This must be so hard. 'Oh, no. Two women love me. They’re both gorgeous, my wallet is too small for my 50s, and my diamond shoes are too tight",
"I’m full, and yet I know if I stop eating this, I’ll regret it.",
"Because you’ve only known her for six weeks. I’ve got a carton of milk in my refrigerator I’ve had a longer relationship with.",
"I’m not great at the advice. Can I interest you in a sarcastic comment?",
"Why is your family Ross?",
"What must it be like not to be crippled by fear and self-loathing?",
"Are we greeting each other this way now? Cause I like that.",
"I say more dumb things before 9am than most people say all day.",
"You didn’t ‘get’ me. It’s an electric drill. You ‘get’ me you kill me!",
"When I was younger, I started using humor as a defense mechanism.",
"Someone on the subway licked my neck! Licked my neck!",
"Yes, but in Ross’ case, they both know in two weeks that’s it.",
"I want to start drinking in the morning. Don’t say I don’t have goals!",
"Free as a bird, what’s up?",
"Why yes Ross, pressing my third nipple. It opens the delivery entrance to the magical land of Narnia.",
"You’ll be carrying their baby And giving them a Sony Playstation?",
"So it seems like this internet thing is here to stay.",
"Well, actually, yesterday I was smoking again. Today, I’m smoking still.",
"It’s seven years ago. My time machine works!",
"I am glad we are having a rehearsal dinner. I rarely practice my meals before I eat.",
"No, I want a flabby gut and saggy man-breasts.",
"It’s so hard to care when you’re this relaxed.",
"Yes, Chandler, that’s exactly what it is. It’s your hair.",
"Okay, but you’ll have to give it back when I get a job. Of course, by then, ties will be obsolete and we’ll all be wearing silver jumpsuits."
  // Add more quotes here
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState('#add8e6'); // Initial pastel color (light blue)

  const pastelColors = [
    '#ffd7b5', // pastel orange
    '#b5b9ff', // pastel blue
    '#ffb5e8', // pastel pink
    '#b5ffd7', // pastel green
    // ... more pastel colors
  ];

  const generateRandomQuote = () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomColorIndex = Math.floor(Math.random() * pastelColors.length);
    setQuote(quotes[randomQuoteIndex]);
    setColor(pastelColors[randomColorIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chandler Bing Quote Generator</h1>
        <div className="quote-box" style={{ backgroundColor: color }}>
  <p className="quote-text">{quote}</p>
</div>
        <button onClick={generateRandomQuote}>Generate Quote</button>
      </header>
    </div>
  );
}

export default App;
