// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Representing despondency, gloom and despair, (more than just ordinary transient low spirits) reflected in speech, facial expression, and posture. Rate by depth and inability to brighten up.",
    answer1: " No sadness.",
    answer2: "Looks dispirited but does brighten up without difficulty.",
    answer3: "Appears sad and unhappy most of the time.",
    answer4: "Looks miserable all the time. Extremely despondent.",
    options: [
      " No sadness.",
      "Looks dispirited but does brighten up without difficulty.",
      "Appears sad and unhappy most of the time.",
      "Looks miserable all the time. Extremely despondent."
    ]
  },
    {
    numb: 2,
    question: "Representing reports of depressed mood, regardless of whether it is reflected in appearance or not. Includes low spirits, despondency or the feeling of being beyond help and without hope. Rate according to intensity, duration and the extent to which the mood is reported to be influenced by events.",
    answer1: "Occasional sadness in keeping with the circumstances.",
    answer2: "Sad or low but brightens up without difficulty.",
    answer3: "Pervasive feelings of sadness or gloominess. The mood is still influenced by external circumstances.",
    answer4: "Continuous or unvarying sadness, misery or despondency.",
    options: [
      "Occasional sadness in keeping with the circumstances.",
      "Sad or low but brightens up without difficulty.",
      "Pervasive feelings of sadness or gloominess. The mood is still influenced by external circumstances.",
      "Continuous or unvarying sadness, misery or despondency."
    ]
  },
    {
    numb: 3,
    question: "Representing feelings of ill-defined discomfort, edginess, inner turmoil, mental tension mounting to either panic, dread or anguish. Rate according to intensity, frequency, duration and the extent of reassurance called for.",
    answer1: "Placid. Only fleeting inner tension.",
    answer2: "Occasional feelings of edginess and ill-defined discomfort.",
    answer3: "Continuous feelings of inner tension or intermittent panic which the patient can only master with some difficulty.",
    answer4: "Unrelenting dread or anguish. Overwhelming panic.",
    options: [
      "Placid. Only fleeting inner tension.",
      "Occasional feelings of edginess and ill-defined discomfort.",
      "Continuous feelings of inner tension or intermittent panic which the patient can only master with some difficulty.",
      "Unrelenting dread or anguish. Overwhelming panic."
    ]
  },
    {
    numb: 4,
    question: "Representing the experience of reduced duration or depth of sleep compared to the subject’s own normal pattern when well.",
    answer1: " Sleeps as usual.",
    answer2: "Slight difficulty dropping off to sleep or slightly reduced, light or fitful sleep.",
    answer3: "Sleep reduced or broken by at least two hours.",
    answer4: "Less than two or three hours sleep.",
    options: [
      " Sleeps as usual.",
      "Slight difficulty dropping off to sleep or slightly reduced, light or fitful sleep.",
      "Sleep reduced or broken by at least two hours.",
      "Less than two or three hours sleep."
    ]
  },
    {
    numb: 5,
    question: "Representing the feeling of a loss of appetite compared with when well. Rate by loss of desire for food or the need to force oneself to eat.",
    answer1: "Normal or increased appetite.",
    answer2: "Slightly reduced appetite.",
    answer3: "No appetite. Food is tasteless",
    answer4: "Needs persuasion to eat at all.",
    options: [
      "Normal or increased appetite.",
      "Slightly reduced appetite.",
      "No appetite. Food is tasteless",
      "Needs persuasion to eat at all."
    ]
  },
  {
    numb: 6,
    question: "Representing difficulties in collecting one’s thoughts mounting to incapacitating lack of concentration. Rate according to intensity, frequency, and degree of incapacity produced.",
    answer1: "No difficulties in concentrating.",
    answer2: "Occasional difficulties in collecting one’s thoughts.",
    answer3: "Difficulties in concentrating and sustaining thought which reduces ability to read or hold a conversation.",
    answer4: "Unable to read or converse without great difficulty.",
    options: [
      "No difficulties in concentrating.",
      "Occasional difficulties in collecting one’s thoughts.",
      "Difficulties in concentrating and sustaining thought which reduces ability to read or hold a conversation.",
      "Unable to read or converse without great difficulty."
    ]
  },
  {
    numb: 7,
    question: "Representing a difficulty getting started or slowness initiating and performing everyday activities.",
    answer1: "Hardly any difficulties in getting started. No sluggishness.",
    answer2: "Difficulties in starting activities.",
    answer3: "Difficulties in starting simple routine activities, which are carried out with effort.",
    answer4: "Complete lassitude. Unable to do anything without help.",
    options: [
      "Hardly any difficulties in getting started. No sluggishness.",
      "Difficulties in starting activities.",
      "Difficulties in starting simple routine activities, which are carried out with effort.",
      "Complete lassitude. Unable to do anything without help."
    ]
  },
  {
    numb: 8,
    question: "Representing the subjective experience of reduced interest in the surroundings, or activities that normally give pleasure.The ability to react with adequate emotion to circumstances or people is reduced.",
    answer1: "Normal interest in the surroundings and in other people.",
    answer2: "Reduced ability to enjoy usual interests.",
    answer3: " Loss of interest in the surroundings. Loss of feelings for friends and acquaintances.",
    answer4: "The experience of being emotionally paralyzed, inability to feel anger, grief or pleasure and a complete or even painful failure to feel for close relatives and friends.",
    options: [
      "Normal interest in the surroundings and in other people.",
      "Reduced ability to enjoy usual interests.",
      " Loss of interest in the surroundings. Loss of feelings for friends and acquaintances.",
      "The experience of being emotionally paralyzed, inability to feel anger, grief or pleasure and a complete or even painful failure to feel for close relatives and friends."
    ]
  },
  {
    numb: 9,
    question: "Representing thoughts of guilt, inferiority, self-reproach, sinfulness, remorse and ruin.",
    answer1: "No pessimistic thoughts.",
    answer2: "Fluctuating ideas of failure, self-reproach or self-depreciation.",
    answer3: "Persistent self-accusations, or definite but still rational ideas of guilt or sin. Increasingly pessimistic about the future.",
    answer4: "Delusions of ruin, remorse and irredeemable sin. Self-accusations which are absurd and unshakable.",
    options: [
      "No pessimistic thoughts.",
      "Fluctuating ideas of failure, self-reproach or self-depreciation.",
      "Persistent self-accusations, or definite but still rational ideas of guilt or sin. Increasingly pessimistic about the future.",
      "Delusions of ruin, remorse and irredeemable sin. Self-accusations which are absurd and unshakable."
    ]
  },
  {
    numb: 10,
    question: "Representing the feeling that life is not worth living, that a natural death would be welcome, suicidal thoughts, and preparations for suicide. Suicidal attempts should not in themselves influence the rating.",
    answer1: "Enjoys life or takes it as it comes.",
    answer2: "Weary of life. Only fleeting suicidal thoughts.",
    answer3: " Probably better off dead. Suicidal thoughts are common, and suicide is considered as a possible solution, but without specific plans or intention.",
    answer4: "Explicit plans for suicide when there is an opportunity. Active preparations for suicide.",
    options: [
      "Enjoys life or takes it as it comes.",
      "Weary of life. Only fleeting suicidal thoughts.",
      " Probably better off dead. Suicidal thoughts are common, and suicide is considered as a possible solution, but without specific plans or intention.",
      "Explicit plans for suicide when there is an opportunity. Active preparations for suicide."
    ]
  },
  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

     //{
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];