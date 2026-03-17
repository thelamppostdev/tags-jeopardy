// Andy Griffith Show Jeopardy - Seasons 1-4
// 450 questions, 5 per (category × value) slot for game-to-game variety

export const ALL_QUESTIONS = [

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Characters
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'char-100-a', category: 'Characters', value: 100, clue: 'Mayberry\'s sheriff, a widower who raises his son Opie and keeps his gun unloaded.', answer: 'Who is Andy Taylor?' },
  { id: 'char-100-b', category: 'Characters', value: 100, clue: 'This deputy keeps his one bullet in his shirt pocket rather than in his gun.', answer: 'Who is Barney Fife?' },
  { id: 'char-100-c', category: 'Characters', value: 100, clue: 'Andy\'s aunt who moves in to keep house for him and Opie in the very first episode.', answer: 'Who is Aunt Bee?' },
  { id: 'char-100-d', category: 'Characters', value: 100, clue: 'Andy\'s young son who fishes with him in the opening credits of every episode.', answer: 'Who is Opie Taylor?' },
  { id: 'char-100-e', category: 'Characters', value: 100, clue: 'Mayberry\'s town drunk who locks himself in his own jail cell to sleep it off.', answer: 'Who is Otis Campbell?' },

  // $200
  { id: 'char-200-a', category: 'Characters', value: 200, clue: 'Mayberry\'s barber, whose shop sits next door to the courthouse on Main Street.', answer: 'Who is Floyd Lawson?' },
  { id: 'char-200-b', category: 'Characters', value: 200, clue: 'She works at a store and is Barney\'s steady girlfriend throughout most of the series.', answer: 'Who is Thelma Lou?' },
  { id: 'char-200-c', category: 'Characters', value: 200, clue: 'This good-natured mechanic at Wally\'s Filling Station often exclaims "Shazam!" and "Golly!"', answer: 'Who is Gomer Pyle?' },
  { id: 'char-200-d', category: 'Characters', value: 200, clue: 'Opie\'s schoolteacher who becomes Andy\'s girlfriend, first appearing in "Andy Discovers America."', answer: 'Who is Helen Crump?' },
  { id: 'char-200-e', category: 'Characters', value: 200, clue: 'Gomer\'s cousin who eventually takes his place at Wally\'s Filling Station.', answer: 'Who is Goober Pyle?' },

  // $300
  { id: 'char-300-a', category: 'Characters', value: 300, clue: 'Otis Campbell\'s day job when he is sober enough to show up — he works as one of these at a furniture factory.', answer: 'What is a glue dipper?' },
  { id: 'char-300-b', category: 'Characters', value: 300, clue: 'This wild mountain man appeared in exactly five episodes, each time causing trouble in Mayberry.', answer: 'Who is Ernest T. Bass?' },
  { id: 'char-300-c', category: 'Characters', value: 300, clue: 'Briscoe Darling\'s only daughter, who sings and eventually marries Dud Walsh.', answer: 'Who is Charlene Darling?' },
  { id: 'char-300-d', category: 'Characters', value: 300, clue: 'The pharmacist who is Andy\'s first girlfriend on the show, working at her uncle\'s drugstore.', answer: 'Who is Ellie Walker?' },
  { id: 'char-300-e', category: 'Characters', value: 300, clue: 'Otis Campbell\'s wife, who appeared in a handful of episodes and was played by Dorothy Neumann.', answer: 'Who is Rita Campbell?' },

  // $400
  { id: 'char-400-a', category: 'Characters', value: 400, clue: 'The mountain patriarch of the Darling family who rarely speaks but plays a mean guitar.', answer: 'Who is Briscoe Darling?' },
  { id: 'char-400-b', category: 'Characters', value: 400, clue: 'Andy\'s full name, including his middle name — the same as a famous president.', answer: 'What is Andrew Jackson Taylor?' },
  { id: 'char-400-c', category: 'Characters', value: 400, clue: 'Barney\'s full formal name as it appears on official records.', answer: 'What is Bernard P. Fife?' },
  { id: 'char-400-d', category: 'Characters', value: 400, clue: 'In "Deputy Otis," Otis is temporarily made a deputy to fool these visiting relatives who think he works at the jail.', answer: 'Who is his brother Ralph and Ralph\'s wife Verlaine?' },
  { id: 'char-400-e', category: 'Characters', value: 400, clue: 'This woman was Ellie Walker\'s ailing uncle in the drugstore — specifically, she worked as his pharmacist niece replacing him.', answer: 'Who is Fred Walker?' },

  // $500
  { id: 'char-500-a', category: 'Characters', value: 500, clue: 'The high school Andy and Barney both attended, referenced in the "Class Reunion" episode.', answer: 'What is Mayberry Union High?' },
  { id: 'char-500-b', category: 'Characters', value: 500, clue: 'Opie\'s best friend through the black-and-white seasons — always blamed for the boys\' mischief.', answer: 'Who is Johnny Paul Jason?' },
  { id: 'char-500-c', category: 'Characters', value: 500, clue: 'Andy and Barney\'s family relationship to each other, mentioned in early episodes.', answer: 'What is cousins?' },
  { id: 'char-500-d', category: 'Characters', value: 500, clue: 'The city Barney eventually moves to after leaving Mayberry.', answer: 'What is Raleigh?' },
  { id: 'char-500-e', category: 'Characters', value: 500, clue: 'Ernest T. Bass\'s love interest, whom he always calls "Romeena."', answer: 'Who is Ramona Ankrum?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Places in Mayberry
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'place-100-a', category: 'Places in Mayberry', value: 100, clue: 'Andy and Barney work out of this building on Main Street, which also contains the jail cells.', answer: 'What is the Mayberry Courthouse?' },
  { id: 'place-100-b', category: 'Places in Mayberry', value: 100, clue: 'Floyd Lawson\'s place of business, located next door to the courthouse.', answer: 'What is Floyd\'s Barbershop?' },
  { id: 'place-100-c', category: 'Places in Mayberry', value: 100, clue: 'Andy and Opie\'s home address — 14 of this street.', answer: 'What is Maple Street?' },
  { id: 'place-100-d', category: 'Places in Mayberry', value: 100, clue: 'Gomer Pyle works at this filling station on the edge of Mayberry.', answer: 'What is Wally\'s Filling Station?' },
  { id: 'place-100-e', category: 'Places in Mayberry', value: 100, clue: 'The nearby larger town where Andy and Barney often go to buy things not available in Mayberry.', answer: 'What is Mt. Pilot?' },

  // $200
  { id: 'place-200-a', category: 'Places in Mayberry', value: 200, clue: 'Ellie Walker worked at this drugstore on Main Street, owned by her uncle.', answer: 'What is Walker\'s Drug Store?' },
  { id: 'place-200-b', category: 'Places in Mayberry', value: 200, clue: 'In "The Pickle Story," Andy and Barney drove to this nearby town to buy replacement pickles for Aunt Bee\'s.', answer: 'What is Mt. Pilot?' },
  { id: 'place-200-c', category: 'Places in Mayberry', value: 200, clue: 'This is the number of jail cells in the Mayberry Courthouse.', answer: 'What is two?' },
  { id: 'place-200-d', category: 'Places in Mayberry', value: 200, clue: 'The state that contains Mayberry, North Carolina — and also the state capital that frequently gets involved in Mayberry affairs.', answer: 'What is North Carolina (and Raleigh)?' },
  { id: 'place-200-e', category: 'Places in Mayberry', value: 200, clue: 'Orville Monroe ran both a funeral parlor and this other business in Mayberry.', answer: 'What is a TV repair shop (or furniture store)?' },

  // $300
  { id: 'place-300-a', category: 'Places in Mayberry', value: 300, clue: 'In "The Haunted House," Opie\'s baseball lands inside this old abandoned house on the edge of Mayberry.', answer: 'What is the Rimshaw house?' },
  { id: 'place-300-b', category: 'Places in Mayberry', value: 300, clue: 'The county fair near Mayberry where Aunt Bee enters her pickles in "The Pickle Story."', answer: 'What is the county fair (at Mt. Pilot)?' },
  { id: 'place-300-c', category: 'Places in Mayberry', value: 300, clue: 'At the end of "Dogs Dogs Dogs," all the stray dogs from the courthouse are sent here.', answer: 'What is the governor\'s mansion?' },
  { id: 'place-300-d', category: 'Places in Mayberry', value: 300, clue: 'Barney rents a room at this type of establishment before briefly moving into the jail in Season 4.', answer: 'What is Mrs. Mendelbright\'s boarding house?' },
  { id: 'place-300-e', category: 'Places in Mayberry', value: 300, clue: 'The Mayberry bank that Barney decides to test for security weaknesses in "The Bank Job."', answer: 'What is the Mayberry Security Bank?' },

  // $400
  { id: 'place-400-a', category: 'Places in Mayberry', value: 400, clue: 'In "The Loaded Goat," the goat that ate dynamite is led out of town by Barney playing this instrument.', answer: 'What is a harmonica?' },
  { id: 'place-400-b', category: 'Places in Mayberry', value: 400, clue: 'In "Convicts at Large," Barney and Floyd are held hostage in this location by three escaped female convicts.', answer: 'What is O\'Malley\'s cabin?' },
  { id: 'place-400-c', category: 'Places in Mayberry', value: 400, clue: 'Clara Johnson is Aunt Bee\'s neighbor and rival, and she beats Bee at the pickle competition for this many consecutive years before "The Pickle Story."', answer: 'What is eleven years?' },
  { id: 'place-400-d', category: 'Places in Mayberry', value: 400, clue: 'The town where Sharon DeSpain lives after leaving Mayberry, as revealed at the class reunion.', answer: 'What is Charlotte?' },
  { id: 'place-400-e', category: 'Places in Mayberry', value: 400, clue: 'Mayberry\'s annual county fair competition where Aunt Bee always competes against Clara Johnson.', answer: 'What is the pickle competition (at the county fair)?' },

  // $500
  { id: 'place-500-a', category: 'Places in Mayberry', value: 500, clue: 'In "The Haunted House," Otis and this moonshiner were secretly using the haunted Rimshaw house to hide a still.', answer: 'Who is Big Jack Anderson?' },
  { id: 'place-500-b', category: 'Places in Mayberry', value: 500, clue: 'The name of the mountain community the Darling family comes from.', answer: 'What is the mountains (outside Mayberry / the hill country)?' },
  { id: 'place-500-c', category: 'Places in Mayberry', value: 500, clue: 'Andy and Opie\'s complete street address as stated on the show.', answer: 'What is 14 Maple Street?' },
  { id: 'place-500-d', category: 'Places in Mayberry', value: 500, clue: 'In "Man in a Hurry," businessman Malcolm Tucker was on his way to this city for an important Monday morning meeting when his car broke down.', answer: 'What is Charlotte?' },
  { id: 'place-500-e', category: 'Places in Mayberry', value: 500, clue: 'The name of the gas station owner whose cabin the female convicts use as a hideout in "Convicts at Large."', answer: 'Who is O\'Malley?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Famous Quotes
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'quote-100-a', category: 'Famous Quotes', value: 100, clue: 'Complete Barney\'s famous warning: "Nip it in the ___!"', answer: 'What is "bud"?' },
  { id: 'quote-100-b', category: 'Famous Quotes', value: 100, clue: 'Gomer\'s three-word cry of disbelief and astonishment.', answer: 'What is "Surprise, surprise, surprise!"?' },
  { id: 'quote-100-c', category: 'Famous Quotes', value: 100, clue: 'Gomer\'s one-word exclamation of amazement — a word borrowed from Captain Marvel comics.', answer: 'What is "Shazam!"?' },
  { id: 'quote-100-d', category: 'Famous Quotes', value: 100, clue: 'Ernest T. Bass always finishes his self-introduction: "My name\'s Ernest T. Bass and I\'m a ___!"', answer: 'What is "good\'un"?' },
  { id: 'quote-100-e', category: 'Famous Quotes', value: 100, clue: 'Barney\'s pep talk to himself in the mirror: "You\'re a ___, Barn."', answer: 'What is "tiger"?' },

  // $200
  { id: 'quote-200-a', category: 'Famous Quotes', value: 200, clue: 'Barney recites his jail rules: "Here at the Rock we have two rules — obey all rules, and ___."', answer: 'What is "no writing on the walls"?' },
  { id: 'quote-200-b', category: 'Famous Quotes', value: 200, clue: 'Andy\'s gentle way of setting Barney straight — he calls Barney this nickname when he is being patient with him.', answer: 'What is "Barn"?' },
  { id: 'quote-200-c', category: 'Famous Quotes', value: 200, clue: 'Barney\'s dramatic declaration when he feels his authority is challenged: "I\'m the law in this town — and don\'t you forget it!"', answer: 'What is "I\'m the law in this town"?' },
  { id: 'quote-200-d', category: 'Famous Quotes', value: 200, clue: 'Otis\'s nickname for Aunt Bee when she makes him do chores during his stay at the Taylor house in "Aunt Bee the Warden."', answer: 'What is "the Warden"?' },
  { id: 'quote-200-e', category: 'Famous Quotes', value: 200, clue: 'Andy\'s favorite saying when he wants Barney to calm down and think things through slowly.', answer: 'What is "easy does it" (or "slow down, Barn")?' },

  // $300
  { id: 'quote-300-a', category: 'Famous Quotes', value: 300, clue: 'Barney\'s boast about his physical prowess: "I\'m a trained man. I know ___."', answer: 'What is "karate" (or judo)?' },
  { id: 'quote-300-b', category: 'Famous Quotes', value: 300, clue: 'After Andy sees the cage empty in "Opie the Birdman," he tells Opie that the trees seem full of this.', answer: 'What is "nice and full" (the trees seem nice and full)?' },
  { id: 'quote-300-c', category: 'Famous Quotes', value: 300, clue: 'Charlene\'s heartfelt request to Andy on her wedding day — she asks him to play this specific song.', answer: 'What is "There Is a Time"?' },
  { id: 'quote-300-d', category: 'Famous Quotes', value: 300, clue: 'Barney\'s catchphrase response when he is caught doing something embarrassing: "I was just ___."', answer: 'What is "testing" (or "checking")?' },
  { id: 'quote-300-e', category: 'Famous Quotes', value: 300, clue: 'Briscoe Darling\'s first words upon seeing Barney, implying Barney looks like one of his own kin.', answer: 'What is "Is he one of ours?"?' },

  // $400
  { id: 'quote-400-a', category: 'Famous Quotes', value: 400, clue: 'In "Man in a Hurry," Barney lazily recites his entire Sunday itinerary to Malcolm Tucker, ending with this activity: "Then I go home and I ___ myself a little."', answer: 'What is "rock"?' },
  { id: 'quote-400-b', category: 'Famous Quotes', value: 400, clue: 'Barney\'s full, formal reading of the Miranda-style warning he gives every lawbreaker — it begins: "In the state of North Carolina you are entitled to ___."', answer: 'What is "one phone call"?' },
  { id: 'quote-400-c', category: 'Famous Quotes', value: 400, clue: 'Andy\'s reply when asked why he does not carry a loaded gun: he is already carrying this.', answer: 'What is his badge (or the law)?' },
  { id: 'quote-400-d', category: 'Famous Quotes', value: 400, clue: 'Gomer\'s expression of disapproval, a longer version of his catchphrase: "Well, ___ ___!"', answer: 'What is "Golly, Golly!"?' },
  { id: 'quote-400-e', category: 'Famous Quotes', value: 400, clue: 'Ernest T. Bass\'s rhyming boast that he recites when showing off: "I\'m a little mean, ___."', answer: 'What is "but I\'m awful clean"?' },

  // $500
  { id: 'quote-500-a', category: 'Famous Quotes', value: 500, clue: 'The exact two words Barney says before firing his pistol accidentally into the ceiling of the courthouse.', answer: 'What is "citizen\'s arrest" (no — the quote is "pow, pow")?' },
  { id: 'quote-500-b', category: 'Famous Quotes', value: 500, clue: 'Andy\'s famous front-porch song he hums or plays on guitar — its title.', answer: 'What is "The Fishin\' Hole"?' },
  { id: 'quote-500-c', category: 'Famous Quotes', value: 500, clue: 'In "Barney\'s First Car," Barney\'s description of the car he bought — he calls it a real "cherry." This is what the sawdust in the transmission was meant to disguise.', answer: 'What is worn-out gears (or a lemon)?' },
  { id: 'quote-500-d', category: 'Famous Quotes', value: 500, clue: 'The three words Gomer shouts when placing Barney under arrest in "Citizen\'s Arrest."', answer: 'What is "citizen\'s arrest, citizen\'s arrest!"?' },
  { id: 'quote-500-e', category: 'Famous Quotes', value: 500, clue: 'Sharon DeSpain\'s explanation for why she cannot stay in Mayberry: "I like trying to be a big fish in a ___."', answer: 'What is "a big pond"?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Episodes
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'ep-100-a', category: 'Episodes', value: 100, clue: 'In this Season 2 episode, Aunt Bee enters her homemade pickles at the county fair after Andy and Barney secretly replaced them with store-bought ones.', answer: 'What is "The Pickle Story"?' },
  { id: 'ep-100-b', category: 'Episodes', value: 100, clue: 'In this Season 4 premiere, Opie accidentally kills a mother bird with his slingshot and must raise her three orphaned babies.', answer: 'What is "Opie the Birdman"?' },
  { id: 'ep-100-c', category: 'Episodes', value: 100, clue: 'In this Season 4 episode, Gomer places Barney under arrest for making an illegal U-turn.', answer: 'What is "Citizen\'s Arrest"?' },
  { id: 'ep-100-d', category: 'Episodes', value: 100, clue: 'In this Season 3 episode, a big-city businessman stranded in Mayberry on a Sunday eventually decides he no longer wants to leave.', answer: 'What is "Man in a Hurry"?' },
  { id: 'ep-100-e', category: 'Episodes', value: 100, clue: 'In this Season 3 episode, Barney and Floyd are held captive in a cabin by three escaped female convicts.', answer: 'What is "Convicts at Large"?' },

  // $200
  { id: 'ep-200-a', category: 'Episodes', value: 200, clue: 'In this Season 3 episode, a goat eats dynamite and Barney must lead it out of town.', answer: 'What is "The Loaded Goat"?' },
  { id: 'ep-200-b', category: 'Episodes', value: 200, clue: 'In this Season 3 episode, Barney spends his entire life savings of $300 on a used car sold to him by an old lady who turns out to be a car thief.', answer: 'What is "Barney\'s First Car"?' },
  { id: 'ep-200-c', category: 'Episodes', value: 200, clue: 'In this Season 4 episode, Andy and Barney discover that the Rimshaw house is haunted only by moonshiners hiding a still.', answer: 'What is "The Haunted House"?' },
  { id: 'ep-200-d', category: 'Episodes', value: 200, clue: 'In this Season 4 episode, Ernest T. Bass wants to enlist in the army solely to get a uniform and impress women.', answer: 'What is "Ernest T. Bass Joins the Army"?' },
  { id: 'ep-200-e', category: 'Episodes', value: 200, clue: 'This is the very first episode of the series, in which Opie resists accepting the new housekeeper.', answer: 'What is "The New Housekeeper"?' },

  // $300
  { id: 'ep-300-a', category: 'Episodes', value: 300, clue: 'In this Season 3 episode, Opie talks about a friend named Mr. McBeevee who walks in the treetops — and turns out to be a real telephone lineman.', answer: 'What is "Mr. McBeevee"?' },
  { id: 'ep-300-b', category: 'Episodes', value: 300, clue: 'In this Season 2 episode, Andy and Barney organize their 20th high school reunion and Andy reconnects with his old flame Sharon DeSpain.', answer: 'What is "Class Reunion"?' },
  { id: 'ep-300-c', category: 'Episodes', value: 300, clue: 'In this Season 3 episode, the Darling family arrives in Mayberry for the first time, led by Briscoe and singing daughter Charlene.', answer: 'What is "The Darlings Are Coming"?' },
  { id: 'ep-300-d', category: 'Episodes', value: 300, clue: 'In this Season 3 episode, Aunt Bee falls for the pitch of a traveling medicine man named Colonel Harvey whose tonic is mostly alcohol.', answer: 'What is "Aunt Bee\'s Medicine Man"?' },
  { id: 'ep-300-e', category: 'Episodes', value: 300, clue: 'In this Season 2 episode, Barney disguises himself as a cleaning woman to rob the bank vault and prove the bank\'s security is weak.', answer: 'What is "The Bank Job"?' },

  // $400
  { id: 'ep-400-a', category: 'Episodes', value: 400, clue: 'In this Season 4 episode, Andy tries to pass Ernest T. Bass off as his cousin "Oliver Gossage from Raleigh" at a Mayberry social.', answer: 'What is "My Fair Ernest T. Bass"?' },
  { id: 'ep-400-b', category: 'Episodes', value: 400, clue: 'In this Season 3 episode, Andy must help the Darling family deal with Ernest T. Bass, who refuses to accept that Charlene is already married.', answer: 'What is "Mountain Wedding"?' },
  { id: 'ep-400-c', category: 'Episodes', value: 400, clue: 'In this Season 2 episode, Otis is made a temporary deputy so his visiting relatives won\'t know he is the town drunk.', answer: 'What is "Deputy Otis"?' },
  { id: 'ep-400-d', category: 'Episodes', value: 400, clue: 'In this Season 1 episode, Opie gives only three cents to a charity drive — but it turns out he is saving his money to buy a coat for his poor girlfriend.', answer: 'What is "Opie\'s Charity"?' },
  { id: 'ep-400-e', category: 'Episodes', value: 400, clue: 'In this Season 2 episode, a big-city newspaper publisher seeks revenge on Andy by having his reporter trick Barney into giving dirt about the sheriff.', answer: 'What is "Andy on Trial"?' },

  // $500
  { id: 'ep-500-a', category: 'Episodes', value: 500, clue: 'The Andy Griffith Show\'s first episode technically aired on this other show as a "backdoor pilot" in 1960.', answer: 'What is "The Danny Thomas Show" (Make Room for Daddy)?' },
  { id: 'ep-500-b', category: 'Episodes', value: 500, clue: 'In "Opie\'s Ill-Gotten Gain," Opie receives a new bicycle as reward for straight A\'s, but then discovers the teacher made this mistake on the report card.', answer: 'What is she gave him an A instead of an F in arithmetic?' },
  { id: 'ep-500-c', category: 'Episodes', value: 500, clue: 'In "Opie and the Bully," the bully Sheldon extorts Opie for this amount of money each day to let him pass.', answer: 'What is a nickel?' },
  { id: 'ep-500-d', category: 'Episodes', value: 500, clue: 'In "The Bank Job," Barney accidentally reveals the bank\'s security weakness to these people while trying to prove his point to the bank manager.', answer: 'Who are actual bank robbers?' },
  { id: 'ep-500-e', category: 'Episodes', value: 500, clue: 'In "Mountain Wedding," Barney is dressed in this disguise to trick Ernest T. Bass during the wedding ceremony.', answer: 'What is a wedding dress (with veil)?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Mayberry Life
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'life-100-a', category: 'Mayberry Life', value: 100, clue: 'Andy and Opie\'s favorite pastime — seen in the show\'s opening credits every week.', answer: 'What is fishing?' },
  { id: 'life-100-b', category: 'Mayberry Life', value: 100, clue: 'The musical instrument Andy plays on the front porch in many episodes.', answer: 'What is a guitar?' },
  { id: 'life-100-c', category: 'Mayberry Life', value: 100, clue: 'Otis Campbell does this every weekend, which is why he ends up in the Mayberry jail.', answer: 'What is drinking (getting drunk)?' },
  { id: 'life-100-d', category: 'Mayberry Life', value: 100, clue: 'This is the name of Mayberry\'s county, in which the town is located.', answer: 'What is Mayberry County (or Macon County)?' },
  { id: 'life-100-e', category: 'Mayberry Life', value: 100, clue: 'Aunt Bee\'s specialty item she cooks for every special occasion, her pride and joy in the kitchen — though her pickles are another matter.', answer: 'What is her home cooking (or her pies)?' },

  // $200
  { id: 'life-200-a', category: 'Mayberry Life', value: 200, clue: 'In "Aunt Bee the Warden," the jail is full because Andy arrested these four brothers for moonshining.', answer: 'Who are the Gordon brothers?' },
  { id: 'life-200-b', category: 'Mayberry Life', value: 200, clue: 'This is how Otis always enters the Mayberry jail when he comes in after a binge — he has his own copy of this.', answer: 'What is his own key (to the jail)?' },
  { id: 'life-200-c', category: 'Mayberry Life', value: 200, clue: 'The name of the Mayberry choir that Barney joins in Season 2, only to be a terrible singer.', answer: 'What is the Mayberry choir?' },
  { id: 'life-200-d', category: 'Mayberry Life', value: 200, clue: 'In "The Loaded Goat," the goat named Jimmy is in town because blasting at a construction site was making it nervous. The goat wandered into a shack and ate these.', answer: 'What is dynamite (blasting caps)?' },
  { id: 'life-200-e', category: 'Mayberry Life', value: 200, clue: 'Aunt Bee always loses the pickle competition to this neighbor until the events of "The Pickle Story."', answer: 'Who is Clara Johnson?' },

  // $300
  { id: 'life-300-a', category: 'Mayberry Life', value: 300, clue: 'In "Man in a Hurry," Malcolm Tucker is so charmed by Mayberry\'s Sunday pace that he pretends to hear something wrong with his car just to do this.', answer: 'What is stay another night (or not leave)?' },
  { id: 'life-300-b', category: 'Mayberry Life', value: 300, clue: 'The number of bullets Barney Fife is issued — and allowed to carry at any one time.', answer: 'What is one?' },
  { id: 'life-300-c', category: 'Mayberry Life', value: 300, clue: 'Andy\'s dual role in Mayberry beyond being sheriff — he also serves as this official.', answer: 'What is justice of the peace?' },
  { id: 'life-300-d', category: 'Mayberry Life', value: 300, clue: 'In "Stranger in Town," newcomer Ed Sawyer knows everyone\'s name and business because he had done this for years.', answer: 'What is read the Mayberry paper (and befriended a man from Mayberry in the army)?' },
  { id: 'life-300-e', category: 'Mayberry Life', value: 300, clue: 'In "The Pickle Story," Aunt Bee\'s homemade pickles are so bad that Andy and Barney privately call them by this unflattering nickname.', answer: 'What is "kerosene cucumbers"?' },

  // $400
  { id: 'life-400-a', category: 'Mayberry Life', value: 400, clue: 'In "Barney\'s First Car," the trick used to disguise the worn-out gears in Barney\'s $300 lemon — the oldest car hustlers\' trick in the book.', answer: 'What is sawdust in the transmission?' },
  { id: 'life-400-b', category: 'Mayberry Life', value: 400, clue: 'In "The Haunted House," the ghostly effects in the Rimshaw house — moving painting eyes and floating axe — were actually caused by these two people.', answer: 'Who are Otis Campbell and Big Jack Anderson (the moonshiner)?' },
  { id: 'life-400-c', category: 'Mayberry Life', value: 400, clue: 'Opie\'s teacher Helen Crump first appeared in this Season 3 episode in which Opie and his classmates call her "old lady Crump."', answer: 'What is "Andy Discovers America"?' },
  { id: 'life-400-d', category: 'Mayberry Life', value: 400, clue: 'In "Aunt Bee\'s Medicine Man," the traveling salesman Colonel Harvey\'s tonic is revealed to be this percentage alcohol.', answer: 'What is 85 percent?' },
  { id: 'life-400-e', category: 'Mayberry Life', value: 400, clue: 'In "The New Housekeeper," Opie changes his mind about Aunt Bee leaving when he realizes she could not survive without his skills in these three activities.', answer: 'What is baseball, fishing, and frog hunting?' },

  // $500
  { id: 'life-500-a', category: 'Mayberry Life', value: 500, clue: 'In "Barney\'s First Car," Myrt "Hubcaps" Lesh runs a gang of car thieves. The "sweet old lady" role she plays to sell Barney the car is her cover for this criminal operation.', answer: 'What is a car theft ring (chop shop)?' },
  { id: 'life-500-b', category: 'Mayberry Life', value: 500, clue: 'In "Convicts at Large," the ringleader of the three escaped female convicts who holds Barney and Floyd hostage.', answer: 'Who is Big Maude Tyler?' },
  { id: 'life-500-c', category: 'Mayberry Life', value: 500, clue: 'In the pilot episode on "The Danny Thomas Show," Andy arrested Danny Williams for this specific traffic violation.', answer: 'What is running a stop sign?' },
  { id: 'life-500-d', category: 'Mayberry Life', value: 500, clue: 'In "Class Reunion," Andy and Barney graduated from Mayberry Union High in this year.', answer: 'What is 1945?' },
  { id: 'life-500-e', category: 'Mayberry Life', value: 500, clue: 'In "The Bank Job," Barney disguised himself as this type of worker to sneak into the bank vault unnoticed.', answer: 'What is a cleaning woman (or cleaning lady)?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Friends & Family
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'fam-100-a', category: 'Friends & Family', value: 100, clue: 'Barney\'s girlfriend throughout the series, who works at a five-and-dime.', answer: 'Who is Thelma Lou?' },
  { id: 'fam-100-b', category: 'Friends & Family', value: 100, clue: 'Opie\'s father, who also serves as Mayberry\'s sheriff and justice of the peace.', answer: 'Who is Andy Taylor?' },
  { id: 'fam-100-c', category: 'Friends & Family', value: 100, clue: 'The housekeeper who left the Taylor household to get married in the very first episode.', answer: 'Who is Rose?' },
  { id: 'fam-100-d', category: 'Friends & Family', value: 100, clue: 'Gomer Pyle\'s cousin who later takes over his job at the filling station.', answer: 'Who is Goober Pyle?' },
  { id: 'fam-100-e', category: 'Friends & Family', value: 100, clue: 'Floyd Lawson\'s profession, which makes him the central gossip hub of Mayberry.', answer: 'What is barber?' },

  // $200
  { id: 'fam-200-a', category: 'Friends & Family', value: 200, clue: 'Otis Campbell\'s wife, who appears in a few episodes and is not shy about arguing with him.', answer: 'Who is Rita?' },
  { id: 'fam-200-b', category: 'Friends & Family', value: 200, clue: 'In "Deputy Otis," Otis\'s brother Ralph visits Mayberry — and he has the same problem as Otis in his own town.', answer: 'What is he is also the town drunk (in his own community)?' },
  { id: 'fam-200-c', category: 'Friends & Family', value: 200, clue: 'Aunt Bee\'s best friend and neighbor, who consistently beats her at the pickle competition.', answer: 'Who is Clara Johnson?' },
  { id: 'fam-200-d', category: 'Friends & Family', value: 200, clue: 'In "Opie\'s Charity," the little girl Opie is saving his money for, to buy her a winter coat.', answer: 'Who is Charlotte (his girlfriend)?' },
  { id: 'fam-200-e', category: 'Friends & Family', value: 200, clue: 'Andy\'s high school sweetheart who reappears at the class reunion in Season 3.', answer: 'Who is Sharon DeSpain?' },

  // $300
  { id: 'fam-300-a', category: 'Friends & Family', value: 300, clue: 'Charlene Darling\'s husband, a soldier who had been betrothed to her since childhood.', answer: 'Who is Dud Walsh?' },
  { id: 'fam-300-b', category: 'Friends & Family', value: 300, clue: 'The relationship between Andy Taylor and Barney Fife, as mentioned in early episodes.', answer: 'What is cousins?' },
  { id: 'fam-300-c', category: 'Friends & Family', value: 300, clue: 'Opie\'s best friend through most of the black-and-white seasons, who is always blamed when the boys get into trouble.', answer: 'Who is Johnny Paul Jason?' },
  { id: 'fam-300-d', category: 'Friends & Family', value: 300, clue: 'In "Briscoe Declares for Aunt Bee," Briscoe Darling\'s attempt to court Aunt Bee ends when she does this to his mountain home.', answer: 'What is tries to civilize it (forces him to clean and work hard)?' },
  { id: 'fam-300-e', category: 'Friends & Family', value: 300, clue: 'Ellie Walker\'s uncle, whose drugstore she comes to help run in Season 1.', answer: 'Who is Fred Walker?' },

  // $400
  { id: 'fam-400-a', category: 'Friends & Family', value: 400, clue: 'In "Opie the Birdman," the three baby birds Opie raises after killing their mother are eventually released. What does Andy say the cage looks like after they are gone?', answer: 'What is empty (but the trees seem nice and full)?' },
  { id: 'fam-400-b', category: 'Friends & Family', value: 400, clue: 'In "Opie and the Bully," the outcome for Opie after he finally stands up to Sheldon the bully.', answer: 'What is a black eye (but freedom from the bully)?' },
  { id: 'fam-400-c', category: 'Friends & Family', value: 400, clue: 'Thelma Lou\'s cousin who comes to visit in Season 4 and sets off a jealous rivalry between Andy and Barney.', answer: 'Who is Karen (Barney\'s matchmaking disaster date)?' },
  { id: 'fam-400-d', category: 'Friends & Family', value: 400, clue: 'The first name of the newspaper reporter who tricks Barney into giving dirt on Andy in "Andy on Trial."', answer: 'What is the reporter works for J. Howard Jackson\'s paper (the reporter)?' },
  { id: 'fam-400-e', category: 'Friends & Family', value: 400, clue: 'Opie\'s initial nickname for Helen Crump when she becomes his teacher in Season 3.', answer: 'What is "old lady Crump"?' },

  // $500
  { id: 'fam-500-a', category: 'Friends & Family', value: 500, clue: 'In "Mr. McBeevee," Mr. McBeevee\'s actual profession — the reason he "walks in the treetops" and "jingles."', answer: 'What is a telephone lineman (power line worker)?' },
  { id: 'fam-500-b', category: 'Friends & Family', value: 500, clue: 'The name of the newspaper publisher who puts Andy on trial for misconduct in Season 2.', answer: 'Who is J. Howard Jackson?' },
  { id: 'fam-500-c', category: 'Friends & Family', value: 500, clue: 'In "Stranger in Town," newcomer Ed Sawyer knew everything about Mayberry because he had done this for years before moving there.', answer: 'What is subscribed to the Mayberry paper and befriended a soldier from Mayberry?' },
  { id: 'fam-500-d', category: 'Friends & Family', value: 500, clue: 'The revolutionary war hero Otis Campbell turns out to be descended from, making the Women\'s Historical Society want to honor him.', answer: 'Who is Nathan Tibbs?' },
  { id: 'fam-500-e', category: 'Friends & Family', value: 500, clue: 'In "The New Housekeeper," Opie finally accepts Aunt Bee after realizing she would be helpless without his knowledge of these three things.', answer: 'What is baseball, fishing, and frog hunting?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Barney Fife
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'barn-100-a', category: 'Barney Fife', value: 100, clue: 'Where Barney keeps his one bullet at all times.', answer: 'What is his shirt pocket?' },
  { id: 'barn-100-b', category: 'Barney Fife', value: 100, clue: 'Barney\'s full formal name.', answer: 'What is Bernard P. Fife?' },
  { id: 'barn-100-c', category: 'Barney Fife', value: 100, clue: 'Barney\'s steady girlfriend throughout most of the series.', answer: 'Who is Thelma Lou?' },
  { id: 'barn-100-d', category: 'Barney Fife', value: 100, clue: 'The one word Barney shouts to cut off any problem before it starts: "Nip it in the ___!"', answer: 'What is "bud"?' },
  { id: 'barn-100-e', category: 'Barney Fife', value: 100, clue: 'Barney\'s job title in the Mayberry Sheriff\'s Department.', answer: 'What is deputy?' },

  // $200
  { id: 'barn-200-a', category: 'Barney Fife', value: 200, clue: 'In "Citizen\'s Arrest," Barney would rather spend five days in jail than do this to settle the matter.', answer: 'What is pay the five-dollar fine?' },
  { id: 'barn-200-b', category: 'Barney Fife', value: 200, clue: 'In "Barney\'s First Car," the amount of money Barney spent from his life savings on the used car.', answer: 'What is $300?' },
  { id: 'barn-200-c', category: 'Barney Fife', value: 200, clue: 'In "Barney\'s Replacement," Barney quits the sheriff\'s department and gets a job selling these door-to-door.', answer: 'What is vacuum cleaners?' },
  { id: 'barn-200-d', category: 'Barney Fife', value: 200, clue: 'Barney recites this speech to all new inmates: "Here at the Rock we have two rules — obey all rules, and no writing on the walls."', answer: 'What is the jail rules speech?' },
  { id: 'barn-200-e', category: 'Barney Fife', value: 200, clue: 'The city Barney eventually moves to after leaving Mayberry as a deputy.', answer: 'What is Raleigh?' },

  // $300
  { id: 'barn-300-a', category: 'Barney Fife', value: 300, clue: 'In "Convicts at Large," Barney manages to capture the female ringleader Big Maude by dancing her out the door — using this dance.', answer: 'What is the tango?' },
  { id: 'barn-300-b', category: 'Barney Fife', value: 300, clue: 'In "The Bank Job," Barney disguised himself as one of these workers to break into the bank vault.', answer: 'What is a cleaning woman?' },
  { id: 'barn-300-c', category: 'Barney Fife', value: 300, clue: 'In "Man in a Hurry," Barney lazily recites his entire Sunday afternoon schedule to the irritated Malcolm Tucker, ending with "then I go home and rock myself a little."', answer: 'What is his Sunday itinerary?' },
  { id: 'barn-300-d', category: 'Barney Fife', value: 300, clue: 'The name of Barney\'s childhood and high school, which he shares with Andy.', answer: 'What is Mayberry Union High?' },
  { id: 'barn-300-e', category: 'Barney Fife', value: 300, clue: 'Barney\'s pep talk to himself in the mirror, calling himself a "tiger." He does this before entering any challenging situation.', answer: 'What is the mirror pep talk (or "You\'re a tiger, Barn")?' },

  // $400
  { id: 'barn-400-a', category: 'Barney Fife', value: 400, clue: 'In "Ernest T. Bass Joins the Army," Andy resolves the situation by giving Ernest T. one of Barney\'s uniforms. Barney describes the fabric as "genuine ___."', answer: 'What is "whiplash cord"?' },
  { id: 'barn-400-b', category: 'Barney Fife', value: 400, clue: 'In "Mountain Wedding," Barney is put in this disguise to trick Ernest T. Bass during Charlene\'s wedding.', answer: 'What is a wedding dress (with a veil)?' },
  { id: 'barn-400-c', category: 'Barney Fife', value: 400, clue: 'In "My Fair Ernest T. Bass," Andy tries to pass Ernest T. off as his cousin from Raleigh using this fake name.', answer: 'What is Oliver Gossage (or "Ollie Gossage")?' },
  { id: 'barn-400-d', category: 'Barney Fife', value: 400, clue: 'In "Barney and the Choir," Andy finds a clever way to keep Barney in the choir without embarrassing him — by having him do this instead of actually singing.', answer: 'What is lip-sync (or mouth the words without sound)?' },
  { id: 'barn-400-e', category: 'Barney Fife', value: 400, clue: 'Barney\'s high school extracurricular roles included being hall monitor, and membership in this club.', answer: 'What is the Spanish Club?' },

  // $500
  { id: 'barn-500-a', category: 'Barney Fife', value: 500, clue: 'In "Barney\'s First Car," the woman who sold Barney the car — her full nickname.', answer: 'Who is Myrt "Hubcaps" Lesh?' },
  { id: 'barn-500-b', category: 'Barney Fife', value: 500, clue: 'The specific traffic violation Barney committed that led Gomer to place him under citizen\'s arrest.', answer: 'What is an illegal U-turn?' },
  { id: 'barn-500-c', category: 'Barney Fife', value: 500, clue: 'In "Citizen\'s Arrest," after Barney resigns from the force, Gomer calls in a fake report of this crime to get Barney back in action.', answer: 'What is a robbery (at the filling station)?' },
  { id: 'barn-500-d', category: 'Barney Fife', value: 500, clue: 'In "The Loaded Goat," Barney leads the dynamite-filled goat out of town by playing this instrument, which soothes the animal.', answer: 'What is a harmonica?' },
  { id: 'barn-500-e', category: 'Barney Fife', value: 500, clue: 'Barney\'s high school "accomplishment" — he was on the Board of Directors for this patriotic drive.', answer: 'What is the Tin Foil Drive?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Andy Taylor
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'andy-100-a', category: 'Andy Taylor', value: 100, clue: 'Andy\'s job title in Mayberry.', answer: 'What is sheriff (and justice of the peace)?' },
  { id: 'andy-100-b', category: 'Andy Taylor', value: 100, clue: 'Andy\'s musical instrument of choice, often played on the front porch.', answer: 'What is guitar?' },
  { id: 'andy-100-c', category: 'Andy Taylor', value: 100, clue: 'Andy\'s young son, who appears in the opening fishing scene of every episode.', answer: 'Who is Opie?' },
  { id: 'andy-100-d', category: 'Andy Taylor', value: 100, clue: 'Andy\'s live-in aunt and housekeeper.', answer: 'Who is Aunt Bee?' },
  { id: 'andy-100-e', category: 'Andy Taylor', value: 100, clue: 'Andy\'s approach to law enforcement — he trusts this over force and rarely carries a loaded weapon.', answer: 'What is common sense (or reason, or talking it through)?' },

  // $200
  { id: 'andy-200-a', category: 'Andy Taylor', value: 200, clue: 'Andy\'s full name, including his presidential middle name.', answer: 'What is Andrew Jackson Taylor?' },
  { id: 'andy-200-b', category: 'Andy Taylor', value: 200, clue: 'Andy and Opie\'s home street address in Mayberry.', answer: 'What is 14 Maple Street?' },
  { id: 'andy-200-c', category: 'Andy Taylor', value: 200, clue: 'Andy\'s girlfriend in Season 1, who works at her uncle\'s drugstore.', answer: 'Who is Ellie Walker?' },
  { id: 'andy-200-d', category: 'Andy Taylor', value: 200, clue: 'Andy\'s girlfriend beginning in Season 3, who is also Opie\'s schoolteacher.', answer: 'Who is Helen Crump?' },
  { id: 'andy-200-e', category: 'Andy Taylor', value: 200, clue: 'The high school Andy and Barney both attended.', answer: 'What is Mayberry Union High?' },

  // $300
  { id: 'andy-300-a', category: 'Andy Taylor', value: 300, clue: 'In "The Darlings Are Coming," Charlene Darling falls for Andy before reuniting with Dud. The song she later asks Andy to play at her wedding.', answer: 'What is "There Is a Time"?' },
  { id: 'andy-300-b', category: 'Andy Taylor', value: 300, clue: 'In "My Fair Ernest T. Bass," Andy tries to pass Ernest T. off as his cousin with this fake name.', answer: 'What is Oliver "Ollie" Gossage?' },
  { id: 'andy-300-c', category: 'Andy Taylor', value: 300, clue: 'Andy\'s dual official roles in Mayberry beyond sheriff.', answer: 'What is justice of the peace?' },
  { id: 'andy-300-d', category: 'Andy Taylor', value: 300, clue: 'Andy\'s old high school flame who returns for the class reunion but ultimately chooses city life over Mayberry.', answer: 'Who is Sharon DeSpain?' },
  { id: 'andy-300-e', category: 'Andy Taylor', value: 300, clue: 'Andy and Barney\'s family relationship to one another, as mentioned in early Season 1 episodes.', answer: 'What is cousins?' },

  // $400
  { id: 'andy-400-a', category: 'Andy Taylor', value: 400, clue: 'In "Andy on Trial," Andy is put on trial for official misconduct after refusing to let this newspaper publisher off the hook for a traffic violation.', answer: 'Who is J. Howard Jackson?' },
  { id: 'andy-400-b', category: 'Andy Taylor', value: 400, clue: 'The musical number Andy and the Darlings perform together in the early episodes — the song they all pick up their instruments for.', answer: 'What is "There Is a Time" (or "Dooley" or bluegrass standards)?' },
  { id: 'andy-400-c', category: 'Andy Taylor', value: 400, clue: 'In "Opie the Birdman," after Opie releases the baby birds, Andy says the cage looks empty but this looks nice and full.', answer: 'What is the trees?' },
  { id: 'andy-400-d', category: 'Andy Taylor', value: 400, clue: 'Andy\'s role in the pilot episode on "The Danny Thomas Show" — besides sheriff, he held these two titles.', answer: 'What is mayor and justice of the peace (and newspaper editor)?' },
  { id: 'andy-400-e', category: 'Andy Taylor', value: 400, clue: 'The season and episode where Helen Crump makes her first appearance as Opie\'s teacher.', answer: 'What is Season 3, "Andy Discovers America"?' },

  // $500
  { id: 'andy-500-a', category: 'Andy Taylor', value: 500, clue: 'Andy\'s high school activities included being 2nd-Vice-President of 4H and secretary of this organization.', answer: 'What is the Philomathian Literary Society?' },
  { id: 'andy-500-b', category: 'Andy Taylor', value: 500, clue: 'In "Mountain Wedding," Andy reveals to Ernest T. Bass that he performed Charlene\'s marriage to Dud in his capacity as this official.', answer: 'What is justice of the peace?' },
  { id: 'andy-500-c', category: 'Andy Taylor', value: 500, clue: 'In "Class Reunion," Sharon DeSpain says she prefers to be "a big fish in a big pond" — meaning she chooses this over staying in Mayberry.', answer: 'What is life in Charlotte (or the city)?' },
  { id: 'andy-500-d', category: 'Andy Taylor', value: 500, clue: 'The theme song Andy hums and plays on guitar in the opening credits — its official title.', answer: 'What is "The Fishin\' Hole"?' },
  { id: 'andy-500-e', category: 'Andy Taylor', value: 500, clue: 'In "Opie\'s Charity," the reason Andy finally understands why Opie gave only three cents to the charity drive.', answer: 'What is Opie was saving his money to buy his poor girlfriend a winter coat?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Opie Taylor
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'opie-100-a', category: 'Opie Taylor', value: 100, clue: 'In "Opie the Birdman," Opie accidentally kills a mother bird with this weapon.', answer: 'What is a slingshot?' },
  { id: 'opie-100-b', category: 'Opie Taylor', value: 100, clue: 'Opie\'s favorite hobby, which he shares with his father in the show\'s opening credits.', answer: 'What is fishing?' },
  { id: 'opie-100-c', category: 'Opie Taylor', value: 100, clue: 'Opie\'s father\'s job in Mayberry.', answer: 'What is sheriff?' },
  { id: 'opie-100-d', category: 'Opie Taylor', value: 100, clue: 'The woman who moved in to take care of Opie after his housekeeper Rose got married.', answer: 'Who is Aunt Bee?' },
  { id: 'opie-100-e', category: 'Opie Taylor', value: 100, clue: 'Opie\'s schoolteacher in Mayberry, who also becomes his father\'s girlfriend.', answer: 'Who is Helen Crump?' },

  // $200
  { id: 'opie-200-a', category: 'Opie Taylor', value: 200, clue: 'In "Opie the Birdman," Opie raises these three creatures after their mother is killed.', answer: 'What are three baby birds?' },
  { id: 'opie-200-b', category: 'Opie Taylor', value: 200, clue: 'In "Opie and the Bully," Opie\'s bully classmate extorts him for this amount of money each day.', answer: 'What is a nickel?' },
  { id: 'opie-200-c', category: 'Opie Taylor', value: 200, clue: 'In "Opie\'s Charity," Opie only gives three cents to the charity drive because he is saving his money to buy this for his girlfriend.', answer: 'What is a winter coat?' },
  { id: 'opie-200-d', category: 'Opie Taylor', value: 200, clue: 'Opie\'s best friend in the black-and-white seasons, always blamed when the boys get in trouble.', answer: 'Who is Johnny Paul Jason?' },
  { id: 'opie-200-e', category: 'Opie Taylor', value: 200, clue: 'In "Opie\'s Ill-Gotten Gain," Opie receives this reward for his (mistaken) perfect report card.', answer: 'What is a new bicycle?' },

  // $300
  { id: 'opie-300-a', category: 'Opie Taylor', value: 300, clue: 'In "Mr. McBeevee," Opie\'s mysterious friend is revealed to be one of these real workers who climbs power line poles.', answer: 'What is a telephone lineman?' },
  { id: 'opie-300-b', category: 'Opie Taylor', value: 300, clue: 'The imaginary-seeming features Opie describes about Mr. McBeevee: "He walks in the treetops, wears a silver hat, has twelve extra hands, blows smoke from his ___."', answer: 'What is ears?' },
  { id: 'opie-300-c', category: 'Opie Taylor', value: 300, clue: 'In "Opie the Birdman," Andy tells Opie after the birds are released that while the cage looks empty, these look nice and full.', answer: 'What is the trees?' },
  { id: 'opie-300-d', category: 'Opie Taylor', value: 300, clue: 'In "Opie\'s Ill-Gotten Gain," the subject in which Opie\'s teacher says she mistakenly gave him an A when he actually earned an F.', answer: 'What is arithmetic?' },
  { id: 'opie-300-e', category: 'Opie Taylor', value: 300, clue: 'In "Opie and the Bully," the outcome for Opie after he finally stands up to Sheldon — he gets this but gains his freedom.', answer: 'What is a black eye?' },

  // $400
  { id: 'opie-400-a', category: 'Opie Taylor', value: 400, clue: 'In "Opie\'s Charity," Opie\'s girlfriend\'s name — the poor girl he is saving his money for.', answer: 'Who is Charlotte?' },
  { id: 'opie-400-b', category: 'Opie Taylor', value: 400, clue: 'In "The Haunted House," Opie and his friend Arnold lost their baseball when it flew through the window of this specific house.', answer: 'What is the Rimshaw house?' },
  { id: 'opie-400-c', category: 'Opie Taylor', value: 400, clue: 'Opie\'s nickname for Helen Crump when she first becomes his teacher in Season 3.', answer: 'What is "old lady Crump"?' },
  { id: 'opie-400-d', category: 'Opie Taylor', value: 400, clue: 'In "Opie\'s Ill-Gotten Gain," after learning about the report card mistake, Opie eventually runs away to do this.', answer: 'What is join the navy?' },
  { id: 'opie-400-e', category: 'Opie Taylor', value: 400, clue: 'In "The New Housekeeper," the pet bird whose cage Aunt Bee accidentally left open — its name.', answer: 'What is Dickie?' },

  // $500
  { id: 'opie-500-a', category: 'Opie Taylor', value: 500, clue: 'In "Opie the Birdman," the specific type of bird whose mother Opie kills with his slingshot.', answer: 'What is a songbird (or mother bird)?' },
  { id: 'opie-500-b', category: 'Opie Taylor', value: 500, clue: 'The name of the bully who extorts Opie for milk money in "Opie and the Bully."', answer: 'Who is Sheldon?' },
  { id: 'opie-500-c', category: 'Opie Taylor', value: 500, clue: 'Opie\'s friend in the color seasons, the doctor\'s son who replaces Johnny Paul Jason as his best pal.', answer: 'Who is Arnold Bailey?' },
  { id: 'opie-500-d', category: 'Opie Taylor', value: 500, clue: 'In "Mr. McBeevee," the item Opie brings home that Andy thinks proves the boy is lying — Mr. McBeevee gave it to him.', answer: 'What is a quarter?' },
  { id: 'opie-500-e', category: 'Opie Taylor', value: 500, clue: 'In "The Haunted House," Opie\'s friend Arnold was played by this young actor (his full character name).', answer: 'Who is Arnold (Ronnie Dapo)?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Aunt Bee
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'bee-100-a', category: 'Aunt Bee', value: 100, clue: 'Aunt Bee\'s relationship to Andy Taylor.', answer: 'What is his aunt?' },
  { id: 'bee-100-b', category: 'Aunt Bee', value: 100, clue: 'Aunt Bee moves in to the Taylor household in this very first episode of the series.', answer: 'What is "The New Housekeeper"?' },
  { id: 'bee-100-c', category: 'Aunt Bee', value: 100, clue: 'Aunt Bee\'s homemade specialty that Andy and Barney secretly replace with store-bought versions in Season 2.', answer: 'What are pickles?' },
  { id: 'bee-100-d', category: 'Aunt Bee', value: 100, clue: 'Aunt Bee\'s neighbor and pickle rival, who had beaten her at the county fair eleven years in a row.', answer: 'Who is Clara Johnson?' },
  { id: 'bee-100-e', category: 'Aunt Bee', value: 100, clue: 'Aunt Bee\'s full name as used throughout the series.', answer: 'What is Aunt Bee Taylor?' },

  // $200
  { id: 'bee-200-a', category: 'Aunt Bee', value: 200, clue: 'In "Aunt Bee the Warden," Otis is sent to stay at the Taylor house because the jail was full of these four criminals.', answer: 'Who are the Gordon brothers (moonshiners)?' },
  { id: 'bee-200-b', category: 'Aunt Bee', value: 200, clue: 'In "Aunt Bee the Warden," Otis calls Aunt Bee this unflattering title after she makes him do all the household chores.', answer: 'What is "the Warden"?' },
  { id: 'bee-200-c', category: 'Aunt Bee', value: 200, clue: 'In "The Pickle Story," Andy and Barney must eat all eight jars of replacement pickles because Aunt Bee decides to do this.', answer: 'What is enter her pickles in the county fair?' },
  { id: 'bee-200-d', category: 'Aunt Bee', value: 200, clue: 'In "Aunt Bee\'s Medicine Man," the traveling salesman whose tonic Aunt Bee falls for.', answer: 'Who is Colonel Harvey?' },
  { id: 'bee-200-e', category: 'Aunt Bee', value: 200, clue: 'In "Briscoe Declares for Aunt Bee," what Briscoe mistakes Aunt Bee\'s hospitality for.', answer: 'What is romantic affection (or a marriage proposal)?' },

  // $300
  { id: 'bee-300-a', category: 'Aunt Bee', value: 300, clue: 'Andy and Barney\'s private nickname for Aunt Bee\'s terrible homemade pickles.', answer: 'What is "kerosene cucumbers"?' },
  { id: 'bee-300-b', category: 'Aunt Bee', value: 300, clue: 'In "Aunt Bee\'s Medicine Man," Colonel Harvey\'s Indian Elixir turns out to be this percentage alcohol.', answer: 'What is 85 percent?' },
  { id: 'bee-300-c', category: 'Aunt Bee', value: 300, clue: 'In "The Pickle Story," the number of jars of store-bought pickles Andy and Barney must eat before the county fair.', answer: 'What is eight jars?' },
  { id: 'bee-300-d', category: 'Aunt Bee', value: 300, clue: 'In "Briscoe Declares for Aunt Bee," how Andy gets Briscoe to call off his courtship of Aunt Bee.', answer: 'What is convincing Bee to try to civilize Briscoe (making him clean and work hard)?' },
  { id: 'bee-300-e', category: 'Aunt Bee', value: 300, clue: 'In "Aunt Bee the Warden," what Otis swears off after working so hard under Aunt Bee\'s supervision.', answer: 'What is liquor (drinking)?' },

  // $400
  { id: 'bee-400-a', category: 'Aunt Bee', value: 400, clue: 'In "The New Housekeeper," Opie finally accepts Aunt Bee when he realizes she cannot survive without his skills in these three activities.', answer: 'What is baseball, fishing, and frog hunting?' },
  { id: 'bee-400-b', category: 'Aunt Bee', value: 400, clue: 'The number of consecutive years Clara Johnson had beaten Aunt Bee at the pickle competition before the events of "The Pickle Story."', answer: 'What is eleven years?' },
  { id: 'bee-400-c', category: 'Aunt Bee', value: 400, clue: 'In "Briscoe Declares for Aunt Bee," Briscoe whisks Aunt Bee away to this location to marry her.', answer: 'What is his mountain cabin?' },
  { id: 'bee-400-d', category: 'Aunt Bee', value: 400, clue: 'After the events of "The Pickle Story," Aunt Bee announces she will make this many jars of new pickles.', answer: 'What is sixteen jars?' },
  { id: 'bee-400-e', category: 'Aunt Bee', value: 400, clue: 'In "The New Housekeeper," the name of the pet bird whose disappearance is blamed on Aunt Bee.', answer: 'What is Dickie?' },

  // $500
  { id: 'bee-500-a', category: 'Aunt Bee', value: 500, clue: 'The new canned item Aunt Bee starts making at the end of "The Pickle Story," whose smell Andy and Barney mistake for ammonia.', answer: 'What is marmalade?' },
  { id: 'bee-500-b', category: 'Aunt Bee', value: 500, clue: 'In "Aunt Bee the Warden," the previous housekeeper who left to get married — setting the whole series in motion.', answer: 'Who is Rose?' },
  { id: 'bee-500-c', category: 'Aunt Bee', value: 500, clue: 'In "Briscoe Declares for Aunt Bee," the Darling family performs music throughout the episode. The song Charlene sings that becomes associated with the family.', answer: 'What is "There Is a Time"?' },
  { id: 'bee-500-d', category: 'Aunt Bee', value: 500, clue: 'Clara Johnson\'s streak of winning the pickle blue ribbon at the county fair before "The Pickle Story" — she was going for her twelfth win.', answer: 'What is eleven consecutive wins (going for twelve)?' },
  { id: 'bee-500-e', category: 'Aunt Bee', value: 500, clue: 'In "Aunt Bee\'s Medicine Man," what Andy does to finally expose Colonel Harvey\'s tonic as mostly alcohol.', answer: 'What is has it tested (by a doctor or chemist)?' },


  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Otis Campbell
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'otis-100-a', category: 'Otis Campbell', value: 100, clue: 'How Otis always gets into the Mayberry jail after a long night out — he has his own copy of this.', answer: 'What is his own key (to the jail)?' },
  { id: 'otis-100-b', category: 'Otis Campbell', value: 100, clue: 'Otis Campbell\'s unofficial title in Mayberry, since he spends most weekends in a cell.', answer: 'What is the town drunk?' },
  { id: 'otis-100-c', category: 'Otis Campbell', value: 100, clue: 'Otis locks himself into this specific part of the Mayberry Courthouse to sleep things off.', answer: 'What is a jail cell?' },
  { id: 'otis-100-d', category: 'Otis Campbell', value: 100, clue: 'Otis Campbell\'s wife, who appears in a handful of episodes and is never shy about arguing with him.', answer: 'Who is Rita?' },
  { id: 'otis-100-e', category: 'Otis Campbell', value: 100, clue: 'Otis\'s weekday job at the furniture factory — he dips items into a large vat of this substance.', answer: 'What is glue?' },

  // $200
  { id: 'otis-200-a', category: 'Otis Campbell', value: 200, clue: 'In "Aunt Bee the Warden," Otis is sent to stay at the Taylor house because both jail cells are taken up by these four brothers.', answer: 'Who are the Gordon brothers?' },
  { id: 'otis-200-b', category: 'Otis Campbell', value: 200, clue: 'In "Aunt Bee the Warden," Otis nicknames Aunt Bee "the Warden" because she makes him do all of these while at the Taylor house.', answer: 'What is chores (household work)?' },
  { id: 'otis-200-c', category: 'Otis Campbell', value: 200, clue: 'In "Deputy Otis," Otis is temporarily given a deputy badge so that his visiting brother won\'t know the real reason he spends so much time at the jail.', answer: 'What is that he locks himself in as the town drunk?' },
  { id: 'otis-200-d', category: 'Otis Campbell', value: 200, clue: 'In "The Loaded Goat," Otis lets himself into the jail with his key and kicks the goat out of his regular cell — because he considers it his personal space.', answer: 'What is his cell?' },
  { id: 'otis-200-e', category: 'Otis Campbell', value: 200, clue: 'In "Hot Rod Otis," Andy and Barney become concerned when Otis buys one of these — they fear he might use it recklessly.', answer: 'What is a car?' },

  // $300
  { id: 'otis-300-a', category: 'Otis Campbell', value: 300, clue: 'In "Deputy Otis," Otis\'s brother Ralph comes to visit. The funny twist is that Ralph has the same problem as Otis back in his own town.', answer: 'What is Ralph is also his town\'s town drunk?' },
  { id: 'otis-300-b', category: 'Otis Campbell', value: 300, clue: 'In "Aunt Bee the Warden," after being worked so hard by Aunt Bee, Otis swears off this entirely — at least until the next weekend.', answer: 'What is liquor?' },
  { id: 'otis-300-c', category: 'Otis Campbell', value: 300, clue: 'In "Hot Rod Otis," to teach Otis a lesson about driving unsafely, Andy and Barney trick him into believing he did this while behind the wheel.', answer: 'What is died (faked his own death / had a fatal accident)?' },
  { id: 'otis-300-d', category: 'Otis Campbell', value: 300, clue: 'The Women\'s Historical Society wants to honor Otis after discovering he is descended from this Revolutionary War hero.', answer: 'Who is Nathan Tibbs?' },
  { id: 'otis-300-e', category: 'Otis Campbell', value: 300, clue: 'In "The Loaded Goat," the reason Otis shows up at the jail only to find a goat in his usual cell.', answer: 'What is Andy and Barney locked the dynamite-eating goat there for safekeeping?' },

  // $400
  { id: 'otis-400-a', category: 'Otis Campbell', value: 400, clue: 'In "Deputy Otis," the name of Otis\'s visiting brother who thinks Otis works at the jail as a lawman.', answer: 'Who is Ralph Campbell?' },
  { id: 'otis-400-b', category: 'Otis Campbell', value: 400, clue: 'Otis\'s full-time weekday occupation — he is a glue dipper at this type of business.', answer: 'What is a furniture factory?' },
  { id: 'otis-400-c', category: 'Otis Campbell', value: 400, clue: 'In "Aunt Bee the Warden," the four moonshiners who fill the jail and force Otis to stay at the Taylor house.', answer: 'Who are the Gordon brothers?' },
  { id: 'otis-400-d', category: 'Otis Campbell', value: 400, clue: 'In the episode "Ellie for Council," Otis is jailed for assault after trying to hit Rita with one of these household items during an argument — and missing.', answer: 'What is a leg of lamb?' },
  { id: 'otis-400-e', category: 'Otis Campbell', value: 400, clue: 'Otis\'s routine when he sobers up — after a night in the cell he always does this on his way out.', answer: 'What is unlock and let himself out (using his own key)?' },

  // $500
  { id: 'otis-500-a', category: 'Otis Campbell', value: 500, clue: 'The Revolutionary War hero Otis turns out to be descended from — whose story the Women\'s Historical Society wants to celebrate.', answer: 'Who is Nathan Tibbs?' },
  { id: 'otis-500-b', category: 'Otis Campbell', value: 500, clue: 'In "Deputy Otis," Otis\'s brother\'s wife, who accompanies Ralph on the visit to Mayberry and also believes Otis is a deputy.', answer: 'Who is Verlaine?' },
  { id: 'otis-500-c', category: 'Otis Campbell', value: 500, clue: 'The fine Otis faced in a Season 1 episode — he chose to spend 24 hours in jail rather than pay this small amount.', answer: 'What is two dollars?' },
  { id: 'otis-500-d', category: 'Otis Campbell', value: 500, clue: 'In "Hot Rod Otis," after the near-death scare trick, Otis vows to follow this rule about his new car.', answer: 'What is only drive it when sober (or never drive after celebrating)?' },
  { id: 'otis-500-e', category: 'Otis Campbell', value: 500, clue: 'The episode in which Otis\'s wife Rita appears and argues with him on screen — set in Season 2.', answer: 'What is "Ellie for Council"?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Gomer Pyle
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'gomer-100-a', category: 'Gomer Pyle', value: 100, clue: 'Gomer\'s two most famous exclamations — one borrowed from Captain Marvel comics, one just plain amazed.', answer: 'What is "Shazam!" and "Golly!"?' },
  { id: 'gomer-100-b', category: 'Gomer Pyle', value: 100, clue: 'Gomer Pyle\'s job in Mayberry during his time on the show.', answer: 'What is mechanic (or attendant) at Wally\'s Filling Station?' },
  { id: 'gomer-100-c', category: 'Gomer Pyle', value: 100, clue: 'Gomer\'s three-word shout of disbelief that became his most famous catchphrase.', answer: 'What is "Surprise, surprise, surprise!"?' },
  { id: 'gomer-100-d', category: 'Gomer Pyle', value: 100, clue: 'Gomer Pyle\'s cousin, who eventually takes his place at Wally\'s Filling Station.', answer: 'Who is Goober Pyle?' },
  { id: 'gomer-100-e', category: 'Gomer Pyle', value: 100, clue: 'Gomer placed Barney under citizen\'s arrest for making one of these — a maneuver Barney had just ticketed Gomer for.', answer: 'What is an illegal U-turn?' },

  // $200
  { id: 'gomer-200-a', category: 'Gomer Pyle', value: 200, clue: 'In "Citizen\'s Arrest," after Barney resigns over the embarrassment, Gomer calls in a fake report of this crime to lure him back.', answer: 'What is a robbery at the filling station?' },
  { id: 'gomer-200-b', category: 'Gomer Pyle', value: 200, clue: 'In "Gomer the House Guest," Gomer moves in with the Taylors after losing his job. What finally convinces Andy to help Gomer find new work?', answer: 'What is Gomer\'s disruptive nighttime habits (keeping everyone awake)?' },
  { id: 'gomer-200-c', category: 'Gomer Pyle', value: 200, clue: 'The episode in which Gomer first appeared as a recurring character — a famous Season 3 episode with a big-city businessman.', answer: 'What is "Man in a Hurry"?' },
  { id: 'gomer-200-d', category: 'Gomer Pyle', value: 200, clue: 'In "Andy Saves Gomer," Gomer believes Andy saved his life by putting out a fire at the filling station. What does Gomer do to repay Andy?', answer: 'What is follow Andy everywhere and try to do everything for him?' },
  { id: 'gomer-200-e', category: 'Gomer Pyle', value: 200, clue: 'In "The Song Festers," Gomer joins the choir and turns out to have this — which causes problems for Barney, who was already a member.', answer: 'What is a beautiful singing voice (much better than Barney\'s)?' },

  // $300
  { id: 'gomer-300-a', category: 'Gomer Pyle', value: 300, clue: 'In "Gomer Pyle, U.S.M.C." (the Andy Griffith episode), Gomer decides to join the Marines because he realizes he will eventually face this.', answer: 'What is being drafted?' },
  { id: 'gomer-300-b', category: 'Gomer Pyle', value: 300, clue: 'In the season 4 finale pilot episode, Andy secretly tells Gomer\'s drill sergeant that Gomer is the son of a Marine general named this.', answer: 'Who is General Lucius Pyle?' },
  { id: 'gomer-300-c', category: 'Gomer Pyle', value: 300, clue: 'In "A Date for Gomer," Barney sets Gomer up with Thelma Lou\'s cousin for the town dance, but Gomer disappears during the evening and is found doing this.', answer: 'What is watching a movie (alone at the movie theater)?' },
  { id: 'gomer-300-d', category: 'Gomer Pyle', value: 300, clue: 'In "Back to Nature," Gomer goes on a camping trip with Andy, Barney, and Opie. After Barney gets everyone lost, Gomer and Andy do this to save Barney\'s reputation.', answer: 'What is stage a fake rescue to make Barney look like a hero?' },
  { id: 'gomer-300-e', category: 'Gomer Pyle', value: 300, clue: 'In "The Song Festers," Andy resolves the choir situation by secretly having Gomer do this during Barney\'s performance.', answer: 'What is sing offstage so Barney can lip-sync (mouth the words)?' },

  // $400
  { id: 'gomer-400-a', category: 'Gomer Pyle', value: 400, clue: 'In "Citizen\'s Arrest," Barney would rather do this for five days than pay the fine for his U-turn.', answer: 'What is sit in his own jail cell?' },
  { id: 'gomer-400-b', category: 'Gomer Pyle', value: 400, clue: 'The name of the owner of the Mayberry filling station where Gomer works.', answer: 'Who is Wally?' },
  { id: 'gomer-400-c', category: 'Gomer Pyle', value: 400, clue: 'In "A Deal is a Deal," Opie and his friends are tricked into selling this worthless product door-to-door.', answer: 'What is a skin salve (or worthless ointment)?' },
  { id: 'gomer-400-d', category: 'Gomer Pyle', value: 400, clue: 'Gomer\'s last episode as a regular on The Andy Griffith Show — the Season 4 finale that served as a spinoff pilot.', answer: 'What is "Gomer Pyle, U.S.M.C."?' },
  { id: 'gomer-400-e', category: 'Gomer Pyle', value: 400, clue: 'In "Gomer the House Guest," the specific habit of Gomer\'s that most disrupts the Taylor household at night.', answer: 'What is his loud snoring (or talking in his sleep)?' },

  // $500
  { id: 'gomer-500-a', category: 'Gomer Pyle', value: 500, clue: 'Gomer\'s drill instructor in the "Gomer Pyle, U.S.M.C." episode — the character who eventually got his own spinoff show.', answer: 'Who is Gunnery Sergeant Vince Carter?' },
  { id: 'gomer-500-b', category: 'Gomer Pyle', value: 500, clue: 'The name of the cousin Barney set Gomer up with for the town dance in "A Date for Gomer."', answer: 'Who is Mary Grace Gossage?' },
  { id: 'gomer-500-c', category: 'Gomer Pyle', value: 500, clue: 'In "Andy Saves Gomer," Andy extinguishes a fire at Gomer\'s gas station using this — making Gomer believe Andy heroically saved his life.', answer: 'What is a garden hose (or fire extinguisher)?' },
  { id: 'gomer-500-d', category: 'Gomer Pyle', value: 500, clue: 'The specific season and episode number of Gomer\'s first appearance as a recurring character.', answer: 'What is Season 3, Episode 16 ("Man in a Hurry")?' },
  { id: 'gomer-500-e', category: 'Gomer Pyle', value: 500, clue: 'In "The Shoplifters," Barney disguises himself as this in a department store to catch a thief — and then has trouble moving.', answer: 'What is a store mannequin?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Ernest T. Bass
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'ernest-100-a', category: 'Ernest T. Bass', value: 100, clue: 'Ernest T. Bass\'s signature greeting: "My name\'s Ernest T. Bass and I\'m a ___!"', answer: 'What is "good\'un"?' },
  { id: 'ernest-100-b', category: 'Ernest T. Bass', value: 100, clue: 'Ernest T. Bass\'s preferred method of calling attention to himself or expressing displeasure in Mayberry.', answer: 'What is throwing rocks through windows?' },
  { id: 'ernest-100-c', category: 'Ernest T. Bass', value: 100, clue: 'The total number of episodes in which Ernest T. Bass appeared across the entire run of The Andy Griffith Show.', answer: 'What is five?' },
  { id: 'ernest-100-d', category: 'Ernest T. Bass', value: 100, clue: 'Ernest T. Bass always rhymes his boast with "I\'m a little mean, ___."', answer: 'What is "but I\'m awful clean"?' },
  { id: 'ernest-100-e', category: 'Ernest T. Bass', value: 100, clue: 'In "Ernest T. Bass Joins the Army," the real reason Ernest T. wants to enlist — nothing to do with patriotism.', answer: 'What is to get a uniform so women will notice him?' },

  // $200
  { id: 'ernest-200-a', category: 'Ernest T. Bass', value: 200, clue: 'In "My Fair Ernest T. Bass," Andy tries to pass Ernest T. off as his cousin from Raleigh, giving him this fake name.', answer: 'What is Oliver "Ollie" Gossage?' },
  { id: 'ernest-200-b', category: 'Ernest T. Bass', value: 200, clue: 'In "My Fair Ernest T. Bass," Andy takes Ernest T. to a Mayberry social event at the home of this hostess.', answer: 'Who is Mrs. Wiley?' },
  { id: 'ernest-200-c', category: 'Ernest T. Bass', value: 200, clue: 'Ernest T. Bass\'s love interest, whom he calls "Romeena."', answer: 'Who is Ramona Ankrum?' },
  { id: 'ernest-200-d', category: 'Ernest T. Bass', value: 200, clue: 'In "Mountain Wedding," Ernest T. Bass refuses to accept Charlene\'s marriage to Dud because the ceremony was performed by Andy instead of one of these.', answer: 'What is a preacher?' },
  { id: 'ernest-200-e', category: 'Ernest T. Bass', value: 200, clue: 'In "Mountain Wedding," Andy\'s trick to fool Ernest T. Bass during the wedding ceremony — Barney wore this disguise.', answer: 'What is a wedding dress and veil?' },

  // $300
  { id: 'ernest-300-a', category: 'Ernest T. Bass', value: 300, clue: 'In "Ernest T. Bass Joins the Army," Andy resolves the situation by giving Ernest T. one of Barney\'s old uniforms so he can look like a serviceman.', answer: 'What is a deputy sheriff\'s uniform?' },
  { id: 'ernest-300-b', category: 'Ernest T. Bass', value: 300, clue: 'The first episode in which Ernest T. Bass appeared — a Season 3 Darling family episode.', answer: 'What is "Mountain Wedding"?' },
  { id: 'ernest-300-c', category: 'Ernest T. Bass', value: 300, clue: 'In "My Fair Ernest T. Bass," the party scene falls apart when Ernest T. spots Mrs. Wiley\'s niece and does this.', answer: 'What is throws rocks through Mrs. Wiley\'s window to impress her (or climbs through the window)?' },
  { id: 'ernest-300-d', category: 'Ernest T. Bass', value: 300, clue: 'In "The Education of Ernest T. Bass" (Season 5), Ramona refuses to see Ernest T. until he learns to do this.', answer: 'What is read and write (get an education)?' },
  { id: 'ernest-300-e', category: 'Ernest T. Bass', value: 300, clue: 'Ernest T. Bass\'s final episode in the series — a Season 5 episode involving a crossing guard position.', answer: 'What is "Malcolm at the Crossroads"?' },

  // $400
  { id: 'ernest-400-a', category: 'Ernest T. Bass', value: 400, clue: 'In "My Fair Ernest T. Bass," the item Ernest T. cannot stop throwing even after being taught manners — his irresistible habit.', answer: 'What is rocks (through windows)?' },
  { id: 'ernest-400-b', category: 'Ernest T. Bass', value: 400, clue: 'In "Ernest T. Bass Joins the Army," the reason the Army rejected Ernest T.\'s enlistment application.', answer: 'What is he failed the mental or literacy exam (could not pass the test)?' },
  { id: 'ernest-400-c', category: 'Ernest T. Bass', value: 400, clue: 'The episode where Andy attempts to civilize Ernest T. — its exact title, a parody of a famous musical.', answer: 'What is "My Fair Ernest T. Bass"?' },
  { id: 'ernest-400-d', category: 'Ernest T. Bass', value: 400, clue: 'In "Mountain Wedding," Ernest T. claims Charlene\'s marriage to Dud is not valid because Andy performed it in his capacity as justice of the peace, not as a this.', answer: 'What is a preacher (or minister)?' },
  { id: 'ernest-400-e', category: 'Ernest T. Bass', value: 400, clue: 'Ernest T. Bass\'s boastful rhyme about his hygiene: "I\'m a little mean, but I\'m awful clean." He often follows this with a reference to washing in this.', answer: 'What is the creek?' },

  // $500
  { id: 'ernest-500-a', category: 'Ernest T. Bass', value: 500, clue: 'The name Ernest T. Bass uses to describe himself when boasting — a three-word self-introduction ending with his last name.', answer: 'What is "Ernest T. Bass"?' },
  { id: 'ernest-500-b', category: 'Ernest T. Bass', value: 500, clue: 'In "My Fair Ernest T. Bass," the musical classic that the episode title parodies.', answer: 'What is "My Fair Lady"?' },
  { id: 'ernest-500-c', category: 'Ernest T. Bass', value: 500, clue: 'In all five of his episodes, Ernest T. Bass appeared in seasons 3, 4, and 5. The season in which THREE of his five episodes aired.', answer: 'What is Season 4?' },
  { id: 'ernest-500-d', category: 'Ernest T. Bass', value: 500, clue: 'In "Mountain Wedding," the specific mountain law Ernest T. cites to say that Charlene\'s marriage to Dud — performed by a justice of the peace — is not binding.', answer: 'What is that mountain law says a marriage is only valid if performed by a preacher?' },
  { id: 'ernest-500-e', category: 'Ernest T. Bass', value: 500, clue: 'The two Season 4 Ernest T. Bass episodes that are NOT "My Fair Ernest T. Bass."', answer: 'What is "Ernest T. Bass Joins the Army" and "Mountain Wedding" (note: Mountain Wedding is S3)?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: The Darling Family
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'darl-100-a', category: 'The Darling Family', value: 100, clue: 'The patriarch of the Darling clan — the bearded mountain man who plays guitar alongside Andy.', answer: 'Who is Briscoe Darling?' },
  { id: 'darl-100-b', category: 'The Darling Family', value: 100, clue: 'The only Darling daughter, who sings beautifully and eventually marries Dud Walsh.', answer: 'Who is Charlene Darling?' },
  { id: 'darl-100-c', category: 'The Darling Family', value: 100, clue: 'The number of spoken lines the Darling boys have across all of their episodes on the show.', answer: 'What is zero?' },
  { id: 'darl-100-d', category: 'The Darling Family', value: 100, clue: 'The song Charlene asks Andy to play on her wedding day.', answer: 'What is "There Is a Time"?' },
  { id: 'darl-100-e', category: 'The Darling Family', value: 100, clue: 'The title of the first episode in which the Darling family appeared — Season 3, Episode 25.', answer: 'What is "The Darlings Are Coming"?' },

  // $200
  { id: 'darl-200-a', category: 'The Darling Family', value: 200, clue: 'Charlene Darling\'s husband, a soldier she had been betrothed to since childhood.', answer: 'Who is Dud Walsh?' },
  { id: 'darl-200-b', category: 'The Darling Family', value: 200, clue: 'In "Mountain Wedding," the Darlings ask Andy to help them because this mountain man is causing trouble and refuses to accept Charlene\'s marriage.', answer: 'Who is Ernest T. Bass?' },
  { id: 'darl-200-c', category: 'The Darling Family', value: 200, clue: 'The lively bluegrass song the Darlings perform that is named after a moonshiner character.', answer: 'What is "Dooley"?' },
  { id: 'darl-200-d', category: 'The Darling Family', value: 200, clue: 'In "Briscoe Declares for Aunt Bee," Briscoe whisks Aunt Bee away to this location when he mistakes her friendliness for love.', answer: 'What is his mountain cabin?' },
  { id: 'darl-200-e', category: 'The Darling Family', value: 200, clue: 'In "The Darlings Are Coming," Charlene is being brought to Mayberry to reconnect with her betrothed Dud after not seeing him for several years.', answer: 'What is to marry Dud Walsh?' },

  // $300
  { id: 'darl-300-a', category: 'The Darling Family', value: 300, clue: 'The total number of episodes in which the Darling family appeared across the entire run of The Andy Griffith Show.', answer: 'What is six?' },
  { id: 'darl-300-b', category: 'The Darling Family', value: 300, clue: 'In "Divorce Mountain Style," Charlene accidentally betrothes Andy to herself through a mountain ritual. The person who saves Andy from having to marry her.', answer: 'Who is Barney (who tricks the Darlings into thinking the wedding is cursed)?' },
  { id: 'darl-300-c', category: 'The Darling Family', value: 300, clue: 'In "Mountain Wedding," the trick Andy uses to fool Ernest T. during the ceremony — putting Barney in this.', answer: 'What is a wedding dress and veil?' },
  { id: 'darl-300-d', category: 'The Darling Family', value: 300, clue: 'Briscoe Darling\'s first reaction upon seeing Barney Fife for the first time — a question suggesting Barney looks like one of his own kin.', answer: 'What is "Is he one of ours?"?' },
  { id: 'darl-300-e', category: 'The Darling Family', value: 300, clue: 'The first names of Briscoe\'s four sons — they kept their own real first names for the show.', answer: 'What is Rodney, Doug, Dean, and Mitch?' },

  // $400
  { id: 'darl-400-a', category: 'The Darling Family', value: 400, clue: 'In "The Darling Baby," the Darling family returns to Mayberry because Charlene has had a baby. The episode revolves around the family trying to catch this to complete a ceremony.', answer: 'What is a bird (or specific: a hawk)?' },
  { id: 'darl-400-b', category: 'The Darling Family', value: 400, clue: 'In "Divorce Mountain Style," the mountain custom that Charlene uses to divorce Dud — she performs a ceremony when she believes he looked at another woman.', answer: 'What is a mountain divorce ritual (symbolic ceremony)?' },
  { id: 'darl-400-c', category: 'The Darling Family', value: 400, clue: 'The Darling boys\' notable communication style throughout all their episodes — they express themselves only through this.', answer: 'What is music (their instruments, no words)?' },
  { id: 'darl-400-d', category: 'The Darling Family', value: 400, clue: 'In "The Darlings Are Coming," this is what the Darling family arrives in when they roll into Mayberry.', answer: 'What is an old truck (or pickup truck)?' },
  { id: 'darl-400-e', category: 'The Darling Family', value: 400, clue: 'Briscoe Darling\'s musical instrument — what he plays alongside the rest of the family.', answer: 'What is guitar?' },

  // $500
  { id: 'darl-500-a', category: 'The Darling Family', value: 500, clue: 'In "Divorce Mountain Style," Dud Walsh is played by a different actor than in earlier episodes. The comedian who replaced the original actor in this episode.', answer: 'Who is Bob Denver?' },
  { id: 'darl-500-b', category: 'The Darling Family', value: 500, clue: 'The song "There Is a Time" was written by these two members of the Dillards.', answer: 'Who are Rodney Dillard and Mitch Jayne?' },
  { id: 'darl-500-c', category: 'The Darling Family', value: 500, clue: 'In "Briscoe Declares for Aunt Bee," how Andy convinces Briscoe to back off from courting Aunt Bee — he has Bee do something that turns Briscoe off.', answer: 'What is having Aunt Bee try to clean up and civilize Briscoe and his cabin?' },
  { id: 'darl-500-d', category: 'The Darling Family', value: 500, clue: 'The Darling boys\' character names — they used their own real first names as their character names on the show.', answer: 'What is Rodney, Doug, Dean, and Mitch Darling?' },
  { id: 'darl-500-e', category: 'The Darling Family', value: 500, clue: 'In "The Darling Baby," the name of Charlene and Dud\'s baby, born since the family\'s last visit to Mayberry.', answer: 'What is Andy? (named after Andy Taylor)' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Music & Songs
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'music-100-a', category: 'Music & Songs', value: 100, clue: 'The official title of the Andy Griffith Show theme song that Andy whistles and plays on guitar.', answer: 'What is "The Fishin\' Hole"?' },
  { id: 'music-100-b', category: 'Music & Songs', value: 100, clue: 'The song Charlene asks Andy to play at her wedding — a poetic bluegrass ballad.', answer: 'What is "There Is a Time"?' },
  { id: 'music-100-c', category: 'Music & Songs', value: 100, clue: 'Andy\'s instrument of choice, heard throughout the series on the front porch.', answer: 'What is guitar?' },
  { id: 'music-100-d', category: 'Music & Songs', value: 100, clue: 'The Darlings perform this lively bluegrass song about a moonshiner that Andy joins in on.', answer: 'What is "Dooley"?' },
  { id: 'music-100-e', category: 'Music & Songs', value: 100, clue: 'Barney joins the Mayberry choir in a Season 2 episode — the problem is that his voice is this.', answer: 'What is terrible (off-key or tone-deaf)?' },

  // $200
  { id: 'music-200-a', category: 'Music & Songs', value: 200, clue: 'In "The Song Festers," Andy secretly arranges for Gomer to do this from offstage so that Barney can appear to sing beautifully.', answer: 'What is sing offstage while Barney lip-syncs?' },
  { id: 'music-200-b', category: 'Music & Songs', value: 200, clue: 'In "The Guitar Player," Andy tricks this musician into hearing Jim Lindsey play by arranging for them to share a jail cell.', answer: 'Who is Bobby Fleet (and His Band with a Beat)?' },
  { id: 'music-200-c', category: 'Music & Songs', value: 200, clue: 'In "Barney and the Choir," the clever solution Andy finds to let Barney stay in the choir without embarrassing everyone.', answer: 'What is having Barney mouth the words without making any sound (lip-sync)?' },
  { id: 'music-200-d', category: 'Music & Songs', value: 200, clue: 'The instrument Barney plays to lead a goat out of town in "The Loaded Goat."', answer: 'What is a harmonica?' },
  { id: 'music-200-e', category: 'Music & Songs', value: 200, clue: 'Andy and the Darlings often sit together and play — Briscoe plays guitar alongside Andy, but the Darling boys communicate only through their music, never speaking.', answer: 'What is they never speak (have zero spoken lines)?' },

  // $300
  { id: 'music-300-a', category: 'Music & Songs', value: 300, clue: 'The composer who wrote the whistled theme to The Andy Griffith Show and also performs the whistling heard in the original recording.', answer: 'Who is Earle Hagen?' },
  { id: 'music-300-b', category: 'Music & Songs', value: 300, clue: 'In "The Guitar Player," Jim Lindsey gets his big break playing this instrument for Bobby Fleet\'s band.', answer: 'What is guitar?' },
  { id: 'music-300-c', category: 'Music & Songs', value: 300, clue: 'The song "Dooley," performed by the Darlings, tells the story of a man who makes this.', answer: 'What is moonshine (or whiskey)?' },
  { id: 'music-300-d', category: 'Music & Songs', value: 300, clue: 'In "The Sermon for Today," a visiting minister inspires Andy and Barney to organize a Mayberry band concert on this day of the week.', answer: 'What is Sunday?' },
  { id: 'music-300-e', category: 'Music & Songs', value: 300, clue: 'The Darlings also perform the traditional song "Salty Dog" in their episode "The Darling Fortune." The poetic ballad "There Is a Time" was written by these two Dillards members.', answer: 'Who are Rodney Dillard and Mitch Jayne?' },

  // $400
  { id: 'music-400-a', category: 'Music & Songs', value: 400, clue: 'In "The Guitar Player," Andy fines Bobby Fleet and his band for minor infractions, giving them the choice of paying or spending 24 hours in jail, because he wants Jim Lindsey to do this.', answer: 'What is audition for Bobby\'s band (play guitar for him)?' },
  { id: 'music-400-b', category: 'Music & Songs', value: 400, clue: 'The full title of the Andy Griffith Show theme, including its subtitle distinguishing the vocal version from the instrumental.', answer: 'What is "The Fishin\' Hole (Theme to The Andy Griffith Show)"?' },
  { id: 'music-400-c', category: 'Music & Songs', value: 400, clue: 'In "The Sermon for Today," the Mayberry Sunday band concert turns out to require so much work to organize that it defeats the purpose of this concept the visiting minister preached about.', answer: 'What is relaxation (or slowing down / taking it easy)?' },
  { id: 'music-400-d', category: 'Music & Songs', value: 400, clue: 'Among the Darling family songs performed on the show, this one about a folk song featuring the words "shady" and a tree name is a traditional American standard.', answer: 'What is "Shady Grove"?' },
  { id: 'music-400-e', category: 'Music & Songs', value: 400, clue: 'In "The Song Festers," Gomer is asked to join the choir after it is discovered that he has an exceptional voice. The problem is that Barney had already been cast as the featured soloist for this event.', answer: 'What is the Mayberry choir recital (or concert)?' },

  // $500
  { id: 'music-500-a', category: 'Music & Songs', value: 500, clue: 'The lyricist who wrote the words to "The Fishin\' Hole," the vocal version of the Andy Griffith Show theme, in 1961.', answer: 'Who is Everett Sloane?' },
  { id: 'music-500-b', category: 'Music & Songs', value: 500, clue: 'In "The Guitar Player Returns," Jim Lindsey\'s follow-up episode, Jim has left Bobby Fleet\'s band and returned to Mayberry. Andy hatches another plan to get him back on track — he arranges for Jim to play for this.', answer: 'What is another band or music agent who passes through town?' },
  { id: 'music-500-c', category: 'Music & Songs', value: 500, clue: 'Among the Darlings\' repertoire, this song about cooking a vegetable is a traditional folk standard they perform on the show.', answer: 'What is "Boil Them Cabbage Down"?' },
  { id: 'music-500-d', category: 'Music & Songs', value: 500, clue: 'The two words in the Darlings\' signature song "There Is a Time" that the title comes from — the phrase refers to a season for everything.', answer: 'What is "a time"?' },
  { id: 'music-500-e', category: 'Music & Songs', value: 500, clue: 'In "Barney and the Choir," Barney threatens to quit the choir when the director privately suggests he should do this. Andy intervenes to save his feelings.', answer: 'What is not sing (or stop singing / sing more quietly)?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Crimes & Capers
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'crime-100-a', category: 'Crimes & Capers', value: 100, clue: 'In "Citizen\'s Arrest," the specific traffic violation Barney committed that caused Gomer to place him under arrest.', answer: 'What is an illegal U-turn?' },
  { id: 'crime-100-b', category: 'Crimes & Capers', value: 100, clue: 'In "Convicts at Large," Barney and Floyd are held hostage in a cabin by these unusual criminals.', answer: 'Who are three escaped female convicts?' },
  { id: 'crime-100-c', category: 'Crimes & Capers', value: 100, clue: 'In "The Manhunt," the state police come to Mayberry to help capture this type of criminal who is on the loose.', answer: 'What is an escaped convict?' },
  { id: 'crime-100-d', category: 'Crimes & Capers', value: 100, clue: 'In "Barney\'s First Car," the crime Barney unknowingly got involved in when he bought his used car.', answer: 'What is a car theft ring (chop shop operation)?' },
  { id: 'crime-100-e', category: 'Crimes & Capers', value: 100, clue: 'In "The Haunted House," the criminal enterprise Andy discovers is hiding behind the Rimshaw house\'s haunted reputation.', answer: 'What is a moonshine still?' },

  // $200
  { id: 'crime-200-a', category: 'Crimes & Capers', value: 200, clue: 'In "The Bank Job," Barney sneaks into the Mayberry bank vault disguised as this type of worker to prove a security weakness.', answer: 'What is a cleaning woman?' },
  { id: 'crime-200-b', category: 'Crimes & Capers', value: 200, clue: 'In "Convicts at Large," the name of the tough female ringleader who holds Barney and Floyd hostage.', answer: 'Who is Big Maude Tyler?' },
  { id: 'crime-200-c', category: 'Crimes & Capers', value: 200, clue: 'In "The Manhunt," what the state police do to Andy and Barney when they arrive to handle the escaped convict situation.', answer: 'What is dismiss them (or tell them to butt out)?' },
  { id: 'crime-200-d', category: 'Crimes & Capers', value: 200, clue: 'In "Barney Gets His Man," Barney accidentally captures a wanted criminal and becomes a hero — until this happens.', answer: 'What is the criminal escapes from custody?' },
  { id: 'crime-200-e', category: 'Crimes & Capers', value: 200, clue: 'In "The Haunted House," these two people were behind the ghost effects — moving painting eyes and floating axe — to scare people away from their still.', answer: 'Who are Otis Campbell and Big Jack Anderson?' },

  // $300
  { id: 'crime-300-a', category: 'Crimes & Capers', value: 300, clue: 'In "Barney\'s First Car," the trick the car thieves used to disguise the worn-out engine in the lemon they sold Barney.', answer: 'What is sawdust in the transmission?' },
  { id: 'crime-300-b', category: 'Crimes & Capers', value: 300, clue: 'In "Convicts at Large," Barney manages to get the drop on Big Maude by dancing her out the front door using this specific dance.', answer: 'What is the tango?' },
  { id: 'crime-300-c', category: 'Crimes & Capers', value: 300, clue: 'In "The Bank Job," Barney\'s demonstration of the bank\'s security weakness accidentally tips off these real criminals.', answer: 'Who are actual bank robbers (who overhear his plan)?' },
  { id: 'crime-300-d', category: 'Crimes & Capers', value: 300, clue: 'In "Andy on Trial," the Mayberry newspaper publisher who tries to get revenge on Andy by having a reporter dig up dirt on him.', answer: 'Who is J. Howard Jackson?' },
  { id: 'crime-300-e', category: 'Crimes & Capers', value: 300, clue: 'In "The Shoplifters," Barney disguises himself as a store mannequin in this type of Mayberry business to catch a suspected thief.', answer: 'What is a department store?' },

  // $400
  { id: 'crime-400-a', category: 'Crimes & Capers', value: 400, clue: 'In "A Black Day for Mayberry," a shipment of this passes through town under heavy guard — Barney sneaks a peek and notices a potential discrepancy in the cargo.', answer: 'What is gold (bound for Fort Knox)?' },
  { id: 'crime-400-b', category: 'Crimes & Capers', value: 400, clue: 'In "Barney\'s First Car," the woman who posed as a sweet old widow to sell Barney the stolen car — her full nickname.', answer: 'Who is Myrt "Hubcaps" Lesh?' },
  { id: 'crime-400-c', category: 'Crimes & Capers', value: 400, clue: 'In "Andy\'s Vacation," Andy is vacationing in the mountains when a state prisoner Barney was guarding escapes — and heads into those same mountains.', answer: 'What is Andy ends up having to help capture the escaped prisoner on his vacation?' },
  { id: 'crime-400-d', category: 'Crimes & Capers', value: 400, clue: 'In "The Manicurist," a pretty young manicurist comes to work at Floyd\'s barbershop. The "crime" the nervous men of Mayberry initially suspect her of.', answer: 'What is flirting with (or trying to steal) all the husbands?' },
  { id: 'crime-400-e', category: 'Crimes & Capers', value: 400, clue: 'In "Ellie for Council," Otis is jailed for assault after swinging a leg of lamb and accidentally hitting his mother-in-law. The intended target of the swing.', answer: 'Who is Rita (his wife)?' },

  // $500
  { id: 'crime-500-a', category: 'Crimes & Capers', value: 500, clue: 'In "Prisoner of Love," the beautiful female prisoner who charms both Andy and Barney while being held overnight — she is in custody for this crime.', answer: 'What is jewel theft?' },
  { id: 'crime-500-b', category: 'Crimes & Capers', value: 500, clue: 'In "The Manhunt," after the state police dismiss Andy, he ends up capturing the escaped convict himself using this approach rather than force.', answer: 'What is outsmarting him using his knowledge of the local area (or setting a trap with common sense)?' },
  { id: 'crime-500-c', category: 'Crimes & Capers', value: 500, clue: 'In "Andy on Trial," Andy was originally put in J. Howard Jackson\'s bad graces because Andy refused to give special treatment to whose car?', answer: 'What is J. Howard Jackson\'s car (or the publisher himself)?' },
  { id: 'crime-500-d', category: 'Crimes & Capers', value: 500, clue: 'In "The Loaded Goat," the reason Andy and Barney must tiptoe around the explosives-filled goat named Jimmy — the danger if they startle him.', answer: 'What is he might explode (the dynamite he ate could detonate)?' },
  { id: 'crime-500-e', category: 'Crimes & Capers', value: 500, clue: 'In "Convicts at Large," the two names of the other female convicts besides Big Maude who hold Barney and Floyd hostage.', answer: 'Who are Naomi (Jalene) and Sally?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: Tall Tales & Schemes
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'tall-100-a', category: 'Tall Tales & Schemes', value: 100, clue: 'In "The Pickle Story," Andy and Barney\'s scheme to spare Aunt Bee\'s feelings — they secretly replace her terrible pickles with ones from this nearby town.', answer: 'What is Mt. Pilot?' },
  { id: 'tall-100-b', category: 'Tall Tales & Schemes', value: 100, clue: 'In "Barney\'s First Car," the trick the car thieves used to make the worn-out car run smoothly long enough to sell it.', answer: 'What is sawdust in the transmission?' },
  { id: 'tall-100-c', category: 'Tall Tales & Schemes', value: 100, clue: 'In "My Fair Ernest T. Bass," the fake identity Andy creates for Ernest T. to pass him off as a gentleman at a social event.', answer: 'What is Oliver "Ollie" Gossage from Raleigh?' },
  { id: 'tall-100-d', category: 'Tall Tales & Schemes', value: 100, clue: 'In "Deputy Otis," Andy makes Otis a temporary deputy to fool Otis\'s visiting relatives into thinking he holds this respectable position.', answer: 'What is deputy sheriff?' },
  { id: 'tall-100-e', category: 'Tall Tales & Schemes', value: 100, clue: 'In "Mountain Wedding," Andy\'s scheme to trick Ernest T. Bass during the wedding ceremony — he put Barney in this disguise.', answer: 'What is a wedding dress and veil?' },

  // $200
  { id: 'tall-200-a', category: 'Tall Tales & Schemes', value: 200, clue: 'In "Man in a Hurry," businessman Malcolm Tucker pretends to hear something wrong with his car just to have an excuse to do this.', answer: 'What is stay another night in Mayberry (he no longer wants to leave)?' },
  { id: 'tall-200-b', category: 'Tall Tales & Schemes', value: 200, clue: 'In "The Guitar Player," Andy gets Jim Lindsey an audition by cooking up a plan to have him and Bobby Fleet share a jail cell. The minor infractions Andy uses to get Bobby into jail.', answer: 'What is small traffic or noise violations (parking or disturbing the peace)?' },
  { id: 'tall-200-c', category: 'Tall Tales & Schemes', value: 200, clue: 'In "Barney\'s Replacement," Barney quits the force convinced that a new trainee is being groomed to replace him. He then takes a job selling these door-to-door.', answer: 'What is vacuum cleaners?' },
  { id: 'tall-200-d', category: 'Tall Tales & Schemes', value: 200, clue: 'In "Andy Saves Barney\'s Morale," Andy\'s scheme to restore Barney\'s standing in town — he tells everyone he must fire Barney for this reason.', answer: 'What is that nobody respects him (so he has to let him go)?' },
  { id: 'tall-200-e', category: 'Tall Tales & Schemes', value: 200, clue: 'In "Hot Rod Otis," Andy and Barney teach Otis a lesson about car safety by faking this event while Otis is unconscious.', answer: 'What is his own death (tricking him into thinking he died in a car accident)?' },

  // $300
  { id: 'tall-300-a', category: 'Tall Tales & Schemes', value: 300, clue: 'In "The Pickle Story," the problem with Andy and Barney\'s replacement scheme — Aunt Bee decides to enter her pickles at the county fair, meaning Andy and Barney must eat all eight jars of store-bought pickles.', answer: 'What is they have to eat all eight jars of store-bought pickles before the fair?' },
  { id: 'tall-300-b', category: 'Tall Tales & Schemes', value: 300, clue: 'In "Divorce Mountain Style," the person who saves Andy from an unwanted mountain marriage to Charlene — and how they do it.', answer: 'Who is Barney, who tricks the Darlings into thinking the wedding ceremony is cursed?' },
  { id: 'tall-300-c', category: 'Tall Tales & Schemes', value: 300, clue: 'In "The Song Festers," Andy arranges for Gomer to sing from offstage so Barney can appear to be the soloist. The reason this plan is needed in the first place.', answer: 'What is Gomer\'s voice is much better than Barney\'s and Barney was already chosen as soloist?' },
  { id: 'tall-300-d', category: 'Tall Tales & Schemes', value: 300, clue: 'In "Back to Nature," after Barney gets everyone lost on a camping trip, Andy and Gomer stage a fake rescue to protect this.', answer: 'What is Barney\'s pride (his reputation as an outdoorsman)?' },
  { id: 'tall-300-e', category: 'Tall Tales & Schemes', value: 300, clue: 'In "The Bank Job," Barney\'s plan to expose the Mayberry bank\'s weak security backfires when his demonstration tips off actual criminals. The disguise he used.', answer: 'What is a cleaning woman\'s outfit?' },

  // $400
  { id: 'tall-400-a', category: 'Tall Tales & Schemes', value: 400, clue: 'In "Andy Saves Barney\'s Morale," Andy spreads the story that he must fire Barney because of lack of respect. The townspeople then turn on each other defending Barney — and the plan works because they start treating Barney like this.', answer: 'What is a hero (or respected lawman)?' },
  { id: 'tall-400-b', category: 'Tall Tales & Schemes', value: 400, clue: 'In "Opie\'s Hobo Friend," the hobo David Browne schemes to prove to Opie that he is not a role model — he gets himself arrested on purpose to show Opie that his carefree life has this downside.', answer: 'What is ending up in jail (having no real freedom)?' },
  { id: 'tall-400-c', category: 'Tall Tales & Schemes', value: 400, clue: 'In "Barney and the Cave Rescue," Barney organizes a big rescue mission for Andy and Helen who are trapped in a cave — unaware that they have already found this.', answer: 'What is another way out (a second exit)?' },
  { id: 'tall-400-d', category: 'Tall Tales & Schemes', value: 400, clue: 'In "A Deal is a Deal," Opie and his friends were conned into selling a worthless product and must now deal with angry customers. Barney and Gomer\'s attempt to help backfires — the scheme they cook up.', answer: 'What is going to collect customer complaints themselves (making things worse)?' },
  { id: 'tall-400-e', category: 'Tall Tales & Schemes', value: 400, clue: 'In "Stranger in Town," the newcomer Ed Sawyer knew everything about everyone in Mayberry through this scheme — completely harmless, but unsettling to the townsfolk.', answer: 'What is reading the Mayberry paper for years and befriending a man from Mayberry?' },

  // $500
  { id: 'tall-500-a', category: 'Tall Tales & Schemes', value: 500, clue: 'In "Opie\'s Ill-Gotten Gain," Opie gets a bicycle as a reward for straight A\'s — but then his teacher discovers she made a grading error. Opie\'s plan when confronted about keeping the bicycle.', answer: 'What is run away (or join the navy)?' },
  { id: 'tall-500-b', category: 'Tall Tales & Schemes', value: 500, clue: 'In "The Farmer\'s Daughter," Mayor Stoner objects to a farmer representing Mayberry in a musicale because of his appearance. Andy\'s scheme to get the farmer accepted.', answer: 'What is dressing up the farmer (or fixing his appearance to satisfy the mayor)?' },
  { id: 'tall-500-c', category: 'Tall Tales & Schemes', value: 500, clue: 'In "Gomer Pyle, U.S.M.C.," Andy tells Gomer\'s drill sergeant that Gomer is the son of a Marine general. The drill sergeant\'s reaction — why he goes along with it.', answer: 'What is he thinks he is being tested (and takes special care of Gomer to pass)?' },
  { id: 'tall-500-d', category: 'Tall Tales & Schemes', value: 500, clue: 'In "The Loaded Goat," the original plan Andy and Barney had to get the dynamite-filled goat out of town safely — before Barney\'s harmonica idea worked.', answer: 'What is carefully walking the goat out of town themselves without startling it?' },
  { id: 'tall-500-e', category: 'Tall Tales & Schemes', value: 500, clue: 'In "Floyd\'s Barbershop" (Season 3), Floyd has been corresponding with a wealthy widow and has exaggerated his wealth. Andy\'s job is to help Floyd maintain this fiction when the widow actually comes to visit.', answer: 'What is pretending Floyd is a wealthy and successful businessman?' },

  // ══════════════════════════════════════════════════════════════════════
  // CATEGORY: The Law in Mayberry
  // ══════════════════════════════════════════════════════════════════════

  // $100
  { id: 'law-100-a', category: 'The Law in Mayberry', value: 100, clue: 'The number of bullets Barney Fife is officially allowed to have at any one time.', answer: 'What is one?' },
  { id: 'law-100-b', category: 'The Law in Mayberry', value: 100, clue: 'Andy Taylor\'s dual official role beyond sheriff — he also holds this title in Mayberry.', answer: 'What is justice of the peace?' },
  { id: 'law-100-c', category: 'The Law in Mayberry', value: 100, clue: 'Where Barney keeps his one bullet rather than in his loaded gun.', answer: 'What is his shirt pocket?' },
  { id: 'law-100-d', category: 'The Law in Mayberry', value: 100, clue: 'The Mayberry Sheriff\'s Department operates out of this building on Main Street.', answer: 'What is the Mayberry Courthouse?' },
  { id: 'law-100-e', category: 'The Law in Mayberry', value: 100, clue: 'Barney\'s official rank in the Mayberry Sheriff\'s Department.', answer: 'What is deputy?' },

  // $200
  { id: 'law-200-a', category: 'The Law in Mayberry', value: 200, clue: 'In "Citizen\'s Arrest," Barney chose to spend five days in jail rather than pay this small fine for his U-turn.', answer: 'What is five dollars?' },
  { id: 'law-200-b', category: 'The Law in Mayberry', value: 200, clue: 'In "The Manhunt," the state police arrive to handle the escaped convict but do not capture him. Who ultimately catches the criminal?', answer: 'Who is Andy?' },
  { id: 'law-200-c', category: 'The Law in Mayberry', value: 200, clue: 'In the pilot on "The Danny Thomas Show," Andy Taylor held three official titles in Mayberry besides sheriff — including mayor, justice of the peace, and this.', answer: 'What is newspaper editor?' },
  { id: 'law-200-d', category: 'The Law in Mayberry', value: 200, clue: 'In "Andy on Trial," Andy is accused of official misconduct by this man after refusing to let him off the hook for a traffic violation.', answer: 'Who is J. Howard Jackson?' },
  { id: 'law-200-e', category: 'The Law in Mayberry', value: 200, clue: 'In "Barney Gets His Man," Barney accidentally captures a wanted criminal and is hailed as a hero. The criminal then does this to deflate his moment.', answer: 'What is escape from custody?' },

  // $300
  { id: 'law-300-a', category: 'The Law in Mayberry', value: 300, clue: 'Barney\'s formal speech to all new prisoners at the Mayberry jail: "Here at the Rock we have two rules — obey all rules, and ___."', answer: 'What is "no writing on the walls"?' },
  { id: 'law-300-b', category: 'The Law in Mayberry', value: 300, clue: 'In "Andy Saves Barney\'s Morale," Barney jails twenty citizens — including the mayor and the bank president — while Andy is out of town. Andy returns and does this with all the prisoners.', answer: 'What is releases them all?' },
  { id: 'law-300-c', category: 'The Law in Mayberry', value: 300, clue: 'In "Barney\'s Replacement," the official position the state attorney trainee Bob Rogers is sent to Mayberry to study.', answer: 'What is law enforcement (practical deputy training)?' },
  { id: 'law-300-d', category: 'The Law in Mayberry', value: 300, clue: 'The specific department of state government that oversees the Mayberry Sheriff\'s office and occasionally sends people to check on Andy.', answer: 'What is the State Attorney\'s Office (or the State Bureau of Investigation)?' },
  { id: 'law-300-e', category: 'The Law in Mayberry', value: 300, clue: 'In "The Bank Job," after Barney proves the bank has weak security, actual criminals take advantage. Andy has to use this to catch them in the act.', answer: 'What is a stakeout at the bank?' },

  // $400
  { id: 'law-400-a', category: 'The Law in Mayberry', value: 400, clue: 'In "Andy on Trial," the outcome of Andy\'s misconduct hearing — whether Andy is found guilty or cleared.', answer: 'What is Andy is cleared (vindicated)?' },
  { id: 'law-400-b', category: 'The Law in Mayberry', value: 400, clue: 'In "Barney\'s Motorcycle," Barney buys an antique motorcycle to set up a speed trap on Mayberry\'s roads. The year and model of the motorcycle.', answer: 'What is a 1946 Indian motorcycle?' },
  { id: 'law-400-c', category: 'The Law in Mayberry', value: 400, clue: 'In "The Governor," Barney issues a parking ticket to the car of this official — and refuses to tear it up when the owner\'s identity is revealed.', answer: 'Who is the governor (of North Carolina)?' },
  { id: 'law-400-d', category: 'The Law in Mayberry', value: 400, clue: 'In "A Black Day for Mayberry," Barney\'s snooping around the gold shipment leads him to suspect there is less gold than reported. The government officials are guarding it with this unit of security.', answer: 'What is the U.S. Treasury agents (or Secret Service)?' },
  { id: 'law-400-e', category: 'The Law in Mayberry', value: 400, clue: 'In "Citizen\'s Arrest," after Barney resigns as deputy in embarrassment, what title does Gomer technically hold during the incident?', answer: 'What is citizen (performing a citizen\'s arrest, not an officer)?' },

  // $500
  { id: 'law-500-a', category: 'The Law in Mayberry', value: 500, clue: 'In "Barney\'s Replacement," the name of the state attorney trainee whose arrival makes Barney convinced he is being replaced.', answer: 'Who is Bob Rogers?' },
  { id: 'law-500-b', category: 'The Law in Mayberry', value: 500, clue: 'Andy\'s philosophy of law enforcement, which he practices throughout the series: he rarely carries a loaded weapon and relies on this instead of force.', answer: 'What is common sense and reason?' },
  { id: 'law-500-c', category: 'The Law in Mayberry', value: 500, clue: 'In "The Governor," Barney issues a parking ticket to the governor\'s car. The fine amount on the ticket he refuses to void.', answer: 'What is a five-dollar fine?' },
  { id: 'law-500-d', category: 'The Law in Mayberry', value: 500, clue: 'The specific county in North Carolina where Mayberry is located, as referenced in several episodes.', answer: 'What is Macon County?' },
  { id: 'law-500-e', category: 'The Law in Mayberry', value: 500, clue: 'In "Andy Saves Barney\'s Morale," the number of citizens Barney jailed while Andy was out of town — causing the whole town to mock him.', answer: 'What is twenty?' },

];

export const CATEGORIES = [
  'Characters',
  'Places in Mayberry',
  'Famous Quotes',
  'Episodes',
  'Mayberry Life',
  'Friends & Family',
  'Barney Fife',
  'Andy Taylor',
  'Opie Taylor',
  'Aunt Bee',
  'Otis Campbell',
  'Gomer Pyle',
  'Ernest T. Bass',
  'The Darling Family',
  'Music & Songs',
  'Crimes & Capers',
  'Tall Tales & Schemes',
  'The Law in Mayberry',
];

export const VALUES = [100, 200, 300, 400, 500];

/**
 * Pick one random question per (category × value) cell.
 * With 5 questions per slot, each game is different.
 */
export function buildBoard(selectedCategories) {
  const board = [];
  for (const category of selectedCategories) {
    for (const value of VALUES) {
      const pool = ALL_QUESTIONS.filter(
        (q) => q.category === category && q.value === value
      );
      if (pool.length === 0) continue;
      const pick = pool[Math.floor(Math.random() * pool.length)];
      board.push(pick);
    }
  }
  return board;
}

/** Randomly pick n categories from the full pool. */
export function pickCategories(n = 6) {
  const shuffled = [...CATEGORIES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}
