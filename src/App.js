import React, { useState } from 'react';

const questions = [
  { id:  1, text: 'Involved in Key Club', value: 1 },
  { id:  2, text: 'Held an club officer position', value: 1 },
  { id:  3, text: 'Took an AP class or IB program', value: 1 },
  { id:  4, text: 'Went to prom', value: 1 },
  { id:  5, text: 'Went to homecoming', value: 1 },
  { id:  6, text: 'Committed academic dishonesty (cheated)', value: 1 },
  { id:  7, text: 'Cheated on a romantic partner', value: 1 },
  { id:  8, text: 'Cannot run a mile under 7 minutes', value: 1 },
  { id:  9, text: 'Pulled an all-nighter before', value: 1 },
  { id: 10, text: 'Sleeps after midnight', value: 1 },
  { id: 11, text: 'Made a tiktok', value: 1 },
  { id: 12, text: 'Not involved in a sport', value: 1 },
  { id: 13, text: 'Submitted UC apps the night they were due', value: 1 },
  { id: 14, text: 'Followed at least one clothing trend', value: 1 },
  { id: 15, text: 'Loves BTS', value: 1 },
  { id: 16, text: 'Marvel fan', value: 1 },
  { id: 17, text: 'Keshi fan', value: 1 },
  { id: 18, text: 'Listens only to 4th gen kpop groups (stan New Jeans)', value: 1 },
  { id: 19, text: 'Has white Air Force 1 shoes', value: 1 },
  { id: 20, text: 'Watched anime only when it became popular', value: 1 },
  { id: 21, text: 'Cannot swim', value: 1 },
  { id: 22, text: 'Has/had a crush', value: 1 },
  { id: 23, text: 'Did not get asked out (note: i feel u dawg)', value: 1 },
  { id: 24, text: 'Plays Valorant or League or Legends', value: 1 },
  { id: 25, text: 'Gets boba a lot', value: 1 },
  { id: 26, text: 'Has an iPhone', value: 1 },
  { id: 27, text: 'Got into the massive headphone trend', value: 1 },
  { id: 28, text: 'Snuck out of the house', value: 1 },
  { id: 29, text: 'Lied to parents/guardians', value: 1 },
  { id: 30, text: 'Involved in ASB', value: 1 },
  { id: 31, text: 'Tried mechanical pencils and never went back', value: 1 },
  { id: 32, text: 'Played games during class', value: 1 },
  { id: 33, text: 'Purposely logged someone out of their class computer', value: 1 },
  { id: 34, text: 'Eaten poke', value: 1 },
  { id: 35, text: 'Took Spanish as foreign language', value: 1 },
  { id: 36, text: 'Learned how to drive as soon as you could', value: 1 },
  { id: 37, text: 'Does not read books anymore', value: 1 },
  { id: 38, text: 'Has to watch something while eating', value: 1 },
  { id: 39, text: 'Fallen asleep in class', value: 1 },
  { id: 40, text: 'Said any of the following words: “rizz”, “slay”, “lowkey/highkey”', value: 1 },
  { id: 41, text: 'Watched an “A Day in the Life of …” video', value: 1 },
  { id: 42, text: 'Has an Essentials hoodie', value: 1 },
  { id: 43, text: 'Has straight A’s', value: 1 },
  { id: 44, text: 'Went to a football game', value: 1 },
  { id: 45, text: 'Have no idea what you want in life', value: 1 },
  { id: 46, text: 'Underwent some change during covid lockdown', value: 1 },
  { id: 47, text: 'Got covid', value: 1 },
  { id: 48, text: 'Played Clash of Clans, Clash Royale, or Brawl Stars', value: 1 },
  { id: 49, text: 'Played Minecraft/Roblox', value: 1 },
  { id: 50, text: 'Watched Disney shows as a kid', value: 1 },
  { id: 51, text: 'Went to DisneyLand, Six Flags, or Knotts Berry Farm', value: 1 },
  { id: 52, text: 'Cannot speak your ethnic language', value: 1 },
  { id: 53, text: 'Popcorned your crush during popcorn reading', value: 1 },
  { id: 54, text: 'Hit in the face by a dodgeball, basketball, etc.', value: 1 },
  { id: 55, text: 'Believes Berkeley > UCLA (we’re actually tied for #1 public uni)', value: 1 },
  { id: 56, text: 'Has Nintendo Switch', value: 1 },
  { id: 57, text: 'Has a Jansport backpack', value: 1 },
  { id: 58, text: 'Hiding their romantic relationship from parents/guardians', value: 1 },
  { id: 59, text: 'Has Converse or Vans', value: 1 },
  { id: 60, text: 'In CSF', value: 1 },
  { id: 61, text: 'Has not had a job', value: 1 },
  { id: 62, text: 'Has DM’d someone on instagram or snapchat', value: 1 },
  { id: 63, text: 'Has had braces', value: 1 },
  { id: 64, text: 'Has had non-prescription glasses or blue-light glasses (Fashion trend)', value: 1 },
  { id: 65, text: 'Plays an instrument (piano)', value: 1 },
  { id: 66, text: 'Does not wear skinny jeans', value: 1 },
  { id: 67, text: 'Has a spam account (finsta)', value: 1 },
  { id: 68, text: 'Only takes pictures in 0.5', value: 1 },
  { id: 69, text: 'Goes thrift shopping', value: 1 },
  { id: 70, text: 'Is a procrastinator', value: 1 },
  { id: 71, text: 'Listens to Harry Styles', value: 1 },
  { id: 72, text: 'Watched World Cup but doesn’t understand soccer', value: 1 },
  { id: 73, text: 'Owns a Hydroflask', value: 1 },
  { id: 74, text: 'Has stickers on laptop or water bottle', value: 1 },
  { id: 75, text: 'Owns a pearl necklace', value: 1 },
  { id: 76, text: 'Has an Apple Watch', value: 1 },
  { id: 77, text: 'Does not use wired headphones', value: 1 },
  { id: 78, text: 'Has not dyed their hair', value: 1 },
  { id: 79, text: 'Has an ear piercing', value: 1 },
  { id: 80, text: 'In NHS', value: 1 },
  { id: 81, text: 'Has volunteered before', value: 1 },
  { id: 82, text: 'Likes Acai Bowls', value: 1 },
  { id: 83, text: 'Has gotten detention', value: 1 },
  { id: 84, text: 'Has LED lights in their room', value: 1 },
  { id: 85, text: 'Drinks Starbucks', value: 1 },
  { id: 86, text: 'Has a perm or curtain bangs', value: 1 },
  { id: 87, text: 'types in lowercase', value: 1 },
  { id: 88, text: 'Has an RGB keyboard or gaming PC', value: 1 },
  { id: 89, text: 'Ditched school before', value: 1 },
  { id: 90, text: 'Had an emo phase', value: 1 },
  { id: 91, text: 'Doesn’t eat school lunch', value: 1 },
  { id: 92, text: 'Watches/watched Twilight', value: 1 },
  { id: 93, text: 'Has a Lululemon item', value: 1 },
  { id: 94, text: 'Has a journal', value: 1 },
  { id: 95, text: 'Does not want to live in their hometown', value: 1 },
  { id: 96, text: 'Is a sneakerhead', value: 1 },
  { id: 97, text: 'Has a caffeine addiction', value: 1 },
  { id: 98, text: 'Obsessed with follower/following count', value: 1 },
  { id: 99, text: 'Is a GATE or MAGNET student', value: 1 },
  { id:100, text: 'Wears a fanny pack', value: 1 },
];

function UniquenessTest() {
  const [score, setScore] = useState(100);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isRevealed, setIsRevealed] = useState(false); // track reveal state

  function handleAnswerSelected(answerId) {
    const answerIndex = selectedAnswers.indexOf(answerId);
    if (answerIndex === -1) {
      // answer is not selected, add it to the list
      setSelectedAnswers([...selectedAnswers, answerId]);
      setScore(score - questions.find(q => q.id === answerId).value);
    } else {
      // answer is already selected, remove it from the list
      setSelectedAnswers(selectedAnswers.filter(id => id !== answerId));
      setScore(score + questions.find(q => q.id === answerId).value);
    }
  }

  function handleReveal() {
    setIsRevealed(true); // set reveal state to true
  }

  return (
    <div>
      {isRevealed ? ( // conditionally render new content if isRevealed is true
        <div>
          <h1>
            Uniqueness Test
          </h1>
          <h2>
            Your score:
          </h2>
          <h2 style={{color:'red'}}>
            {score}
          </h2>
          <blockquote style={{textDecorationLine:'underline'}}>
            What does your score mean?
          </blockquote>
          <p>
            The Uniqueness Test asked you 100 questions to determine your
            level of uniqueness of a scale of 0 to 100. The closer you
            are to 100, the more unique you are. The closer to 0 you are,
            the more of an NPC you are. Ultimately, this game was made for
            fun and these questions don't actually reflect what makes someone unique
            or not. You are unique and special regardless of your score :)
          </p>
        </div>
      ) : ( // render current content if isRevealed is false
        <div>
          <h1>
            Uniqueness Test
          </h1>
          <h4>
            Are you an NPC??
          </h4>
          <blockquote>
            Inspired by the Purity Test, the Uniqueness Test serves as a measure of a
            high school student's individuality. Check every item that describes you
            and click the "Calculate Score" button once you're done. Let's see how much of an NPC you are! 
          </blockquote>
          <blockquote style={{fontStyle:'normal',fontWeight:'bold'}}>
            DISCLAIMER: This is not an accurate measure of an individual's uniqueness!
          </blockquote>
          <text>
            {questions.map(question => (
              <div key={question.id}>
                <label>
                  {question.id}.
                  <input
                    type="checkbox"
                    name={`question-${question.id}`}
                    value={question.id}
                    checked={selectedAnswers.includes(question.id)}
                    onChange={() => handleAnswerSelected(question.id)}
                  />
                  {question.text}
                </label>
              </div>
            ))}
            <button type="submit" onClick={handleReveal}>
              Calculate Score
            </button>
          </text>
        </div>
      )}
    </div>
  );
}

export default UniquenessTest;