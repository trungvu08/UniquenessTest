import React, { useState } from 'react';

const sea_admit_questions = [
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
  { id: 24, text: 'Plays Valorant or League of Legends', value: 1 },
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

const seated_questions = [
  { id: 1, text: 'Gained freshman 15', value: 2 },
  { id: 2, text: 'Has/had a crush on your TA', value: 2 },
  { id: 3, text: 'Received a participation award', value: 2 },
  { id: 4, text: "Thought your friend's sibling was hot", value: 2 },
  { id: 5, text: 'Used ChatGPT or Chegg', value: 2 },
  { id: 6, text: "Slid in someone's DMs", value: 2 },
  { id: 7, text: 'Thought a professor was hot', value: 2 },
  { id: 8, text: "Used a family member's \"death\" to get an extension", value: 2 },
  { id: 9, text: 'Has perfect attendance', value: 2 },
  { id: 10, text: 'Pulled an all-nighter', value: 2 },
  { id: 11, text: 'Let it rip in public and pretended nothing happened', value: 2 },
  { id: 12, text: 'Is/has been in a situationship', value: 2 },
  { id: 13, text: 'Has/had an existential crisis', value: 2 },
  { id: 14, text: 'Lied to parent(s)/guardian(s) about grades', value: 2 },
  { id: 15, text: 'Has ghosted someone', value: 2 },
  { id: 16, text: 'Actively uses TikTok', value: 2 },
  { id: 17, text: 'Ran into classmates at a party', value: 2 },
  { id: 18, text: 'Slept in class/lecture', value: 2 },
  { id: 19, text: 'Has gotten a ticket', value: 2 },
  { id: 20, text: 'Is/was on a dating app', value: 2 },
  { id: 21, text: 'Gone on a roadtrip with college friends', value: 2 },
  { id: 22, text: "Has been friend-zoned (Trung is so sorry for you)", value: 2 },
  { id: 23, text: "Bought a gaming laptop for \"school\"", value: 2 },
  { id: 24, text: 'Has a crippling boba addiction', value: 2 },
  { id: 25, text: "Can't handle alcohol", value: 2 },
  { id: 26, text: 'Bombed an exam', value: 2 },
  { id: 27, text: 'Taken a midterm/final without studying', value: 2 },
  { id: 28, text: 'Caught COVID-19', value: 2 },
  { id: 29, text: "Can't live without caffeine", value: 2 },
  { id: 30, text: "Avid Cupid by Fifty Fifty enjoyer", value: 2 },
  { id: 31, text: "Religiously starts assignments the day they're due", value: 2 },
  { id: 32, text: 'Is fake on BeReal', value: 2 },
  { id: 33, text: 'Cannot speak your ethnic language', value: 2 },
  { id: 34, text: 'Has not sung in the shower (real ppl sing in the shower)', value: 2 },
  { id: 35, text: "Doesn't know about the legit Rice Purity test", value: 2 },
  { id: 36, text: 'Does not think UCLA has all the baddies (u weird bruh)', value: 2 },
  { id: 37, text: 'Wears Air Force 1s', value: 2 },
  { id: 38, text: 'Watched World Cup not understanding soccer', value: 2 },
  { id: 39, text: 'Calls soccer football (have u no pride?)', value: 2 },
  { id: 40, text: 'Thinks Berkeley > UCLA (i swear if u check this box...)', value: 2 },
  { id: 41, text: 'Has a finsta', value: 2 },
  { id: 42, text: 'Has not attempted vlogging (I used to do vuLOGS on Instagram)', value: 2 },
  { id: 43, text: 'Loves Keshi (why he is soooo hot)', value: 2 },
  { id: 44, text: 'Plays Valorant or League of Legends', value: 2 },
  { id: 45, text: 'Has cracked their phone screen', value: 2 },
  { id: 46, text: 'Drives a white Lexus and unironically says "ahaha" (Kevin?)', value: 2 },
  { id: 47, text: "Lied about your height (I'm 6ft btw)", value: 2 },
  { id: 48, text: 'Does not love Gordon Ramsay (idiot sandwich <3)', value: 2 },
  { id: 49, text: 'Has an Essentials hoodie', value: 2 },
  { id: 50, text: "Is not enjoying SEATED (plz don't check this)", value: 2 },
]

function UniquenessTest() {
  const [score, setScore] = useState(100);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questionsAreRevealed, setQuestionsIsRevealed] = useState(false); // track reveal state
  const [isRevealed, setIsRevealed] = useState(false); // track reveal state
  const [questions, setQuestions] = useState([]);

  function handleReveal() {
    setIsRevealed(true); // set reveal state to true
  }

  function handleQuestionReveal() {
    setQuestionsIsRevealed(true); // set reveal state to true
  }

  function selectQuestionSet(event) {
    if (event === 'SEA ADMIT') {
      setQuestions(sea_admit_questions);
      console.log("SEA ADMIT");
    }
    else {
      setQuestions(seated_questions);
      console.log("SEATED");
    }
  }

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

  return (
    <div>
      {questionsAreRevealed ? ( // the main part of web app; will render if setQuestionsIsRevealed is true
        <div>
          {isRevealed ? ( // display the player's score; conditionally render if isRevealed is true
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
                The Uniqueness Test asked you a series of questions to determine your
                level of uniqueness on a scale of 0 to 100. The closer you
                are to 100, the more unique you are. The closer to 0 you are,
                the more of an NPC you are. Ultimately, this game was made for
                fun and these questions don't actually reflect what makes someone unique
                or not. You are unique and special regardless of your score :)
              </p>
            </div>
          ) : ( // display certain set of questions to player; render current content if isRevealed is false
            <div>
              <h1>
                Uniqueness Test
              </h1>
              <h4>
                Are you an NPC??
              </h4>
              <blockquote>
                Inspired by the Purity Test, the Uniqueness Test serves as a measure of a
                high school (SEA ADMIT version) or college (SEATED version) student's individuality. Check every item that describes you
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
      ) : ( // this is the starting screen code; will render if setQuestionsIsRevealed is false
        <div>
          <h1>
            Uniqueness Test
          </h1>
          <h4>
            Are you an NPC??
          </h4>
          <blockquote>
            Which event are you taking this test for??
          </blockquote>
          <button type="submit" onClick={() => { selectQuestionSet("SEA ADMIT"); handleQuestionReveal(); }}>
            SEA ADMIT 2023
          </button>
          <button type="submit" onClick={() => { selectQuestionSet("SEATED"); handleQuestionReveal(); }}>
            SEATED 2023
          </button>
        </div>
      )}
    </div>
  );
}

export default UniquenessTest;