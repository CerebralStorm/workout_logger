[
  'Chest and Back',
  'Plyometrics',
  'Shoulders and Arms',
  'Yoga',
  'Legs and Back',
  'Kempo'
].each do |name|
  Routine.where(name: name).first_or_create!
end

chest_and_back = Routine.where(name: 'Chest and Back').first
[
  {name: 'Standard Push-Ups',             rest: false},
  {name: 'Wide Front Pull-Ups',           rest: false},
  {name: 'Military Push-Ups',             rest: false},
  {name: 'Reverse Grip Chin-Ups',         rest: false},
  {name: 'Water Break',                   rest: true },
  {name: 'Wide Fly Push-Ups',             rest: false},
  {name: 'Closed Grip Overhand Pull-Ups', rest: false},
  {name: 'Decline Push-Ups',              rest: false},
  {name: 'Heavy Pants',                   rest: false},
  {name: 'Water Break',                   rest: true },
  {name: 'Diamond Push-Ups',              rest: false},
  {name: 'Lawnmowers',                    rest: false},
  {name: 'Dive-Bomber Push-Ups',          rest: false},
  {name: 'Back Flys',                     rest: false},
  {name: 'Water Break',                   rest: true },
  {name: 'Wide Front Pull-Ups',           rest: false},
  {name: 'Standard Push-Ups',             rest: false},
  {name: 'Reverse Grip Chin-Ups',         rest: false},
  {name: 'Military Push-Ups',             rest: false},
  {name: 'Water Break',                   rest: true },
  {name: 'Closed Grip Overhand Pull-Ups', rest: false},
  {name: 'Wide Fly Push-Ups',             rest: false},
  {name: 'Heavy Pants',                   rest: false},
  {name: 'Decline Push-Ups',              rest: false},
  {name: 'Water Break',                   rest: true },
  {name: 'Lawnmowers',                    rest: false},
  {name: 'Diamond Push-Ups',              rest: false},
  {name: 'Back Flys',                     rest: false},
  {name: 'Dive-Bomber Push-Ups',          rest: false}
].each do |attrs|
  routine_exercise = chest_and_back.routine_exercises.where(name: attrs[:name]).first_or_create!
  routine_exercise.update_attributes!(attrs)
end
