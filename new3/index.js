const quizData = [
    {
        question: "আমাদের সৃষ্টিকর্তার নাম কি?",
        choices: ["ঈসা", "দুর্গা", "আল্লাহ্", "গণেশ"],
        correct: 2
    },
    {
        question: "সর্বশেষ আসমানী কিতাবের নাম কি?",
        choices: ["তাওরাত", "জাবুর", "ইনজিল", "কোরআন"],
        correct: 3
    },
    {
        question: "কোরআন কার উপর নাজিল হয়েছে ছিল?",
        choices: ["ঈসা আ", "মুহাম্মদ স.", "মুসা আ.", "দাউদ আ."],
        correct: 1
    },
    {
        question: "পবিত্র কোরআন নাযিল হতে কত সময় লেগেছে?",
        choices: ["২২", "১০", "১৫", "২৩"],
        correct: 3
    },
    {
        question: "পবিত্র কুরআনুল কারীমে কতগুলো সুরা আছে?",
        choices: ["৯৯", "১১৩", "১১৫", "১১৪"],
        correct: 3
    },
    {
        question: "পবিত্র কোরআনের প্রথম সুরার নাম কি?",
        choices: ["বাকারা", "ফাতিহা", "নাস", "কাউসার"],
        correct: 1
    },
    {
        question: "পবিত্র কোরআনের সবচেয়ে ছোট সুরার নাম কি?",
        choices: ["ইখলাস", "ফালাক", "কাউসার", "আন-নাসর"],
        correct: 2
    },
    {
        question: "পবিত্র কোরআনের সবচেয়ে বড় সুরার নাম কি?",
        choices: ["আল-বাকারা", "আন-নিসা", "আলে-ইমরান", "আল-আ'রাফ"],
        correct: 0
    },
    {
        question: " পবিত্র কোরআনের মধ্যে সবচেয়ে ফজিলতপূর্ণ আয়াত কোনটি?",
        choices: ["সুরা বাকারার শেষ ২ আয়াত", "সুরা হাশর এর শেষ ৩ আয়াত", "আয়াতুল কুরসী", "সুরা ইখলাস এর ৪ আয়াত"],
        correct: 2
    },
    {
        question: "তাওহীদ শব্দের অর্থ কি ?",
        choices: ["বিশ্বাস", "অনুগত্য", "একনিষ্ঠতা", "একত্ববাদ"],
        correct: 3
    },
    {
        question: "ঈমান শব্দের অর্থ কি ?",
        choices: ["বিশ্বাস", "একনিষ্ঠতা", "অনুগত্য", "একত্ববাদ"],
        correct: 0
    },
    {
        question: " ঈমান কি কমে ও বাড়ে (পরিবর্তন হয় )?",
        choices: ["না", "হ্যাঁ", "এ বিষয়ে কুরআন-হাদিসে কিছু বলা নাই ", "উপরের কোনটি সঠিক নয় "],
        correct: 1
    },
    {
        question: "ঈমানের সর্বোচ্চ স্তর কি?",
        choices: ["নামাজ/সালাত", "রোজা/সিয়াম", "কালিমা / লা-ইলাহা ইল্লাল্লাহু", "হজ্জ"],
        correct: 2
    },
    {
        question: "ঈমানের স্তম্ভ কয়টি?",
        choices: ["৫", "৬", "৮", "৩"],
        correct: 1
    },
    {
        question: "ঈমানের সর্বনিম্ন শাখা কি?",
        choices: ["টাকা ধার/হাওলাদ/ঋণ দেওয়া", "রাস্তা থেকে কষ্টদায়ক বস্তু অপসারণ করা", "সত্য কথা বলা", "গালি না দেওয়া"],
        correct: 1
    },
    {
        question: "পবিত্র কোরআনের সর্বপ্রথম কোন সুরাটি পূর্ণাঙ্গরূপে নাযিল হয়?",
        choices: ["সুরা ফাতিহা", "সুরা বাকারা", "সুরা ইখলাস", "সুরা কাউসার"],
        correct: 0
    },
    {
        question: "সর্বপ্রথম কে কোরআন একত্রিত করেন?",
        choices: ["উমার (রাঃ)", "আবুবকর (রাঃ)", "আলী (রাঃ)", "উসামান (রাঃ)"],
        correct: 1
    },
    {
        question: "পবিত্র কোরআনের কোন সুরায় প্রথমে বিসমিল্লাহ নেই?",
        choices: ["সুরা বাকারা", "সুরা আল-মাঊন", "সুরা তওবা", "সুরা আল-কুরাইশ"],
        correct: 2
    },
    {
        question: "আল্লাহর কোরআনের পর সবচেয়ে বিশুদ্ধতম গ্রন্থ কোনটি?",
        choices: ["সহীহ মুসলিম", "সহীহ বুখারী", "তিরমিজি", "মুসনাদে আহমদ"],
        correct: 1
    },
    {
        question: "নবীজী কতবার ওমরাহ করেছেন?",
        choices: ["৪", "৩", "৫", "১"],
        correct: 0
    },
    {
        question: "নবীজী কতবার হজ্জ করেছেন?",
        choices: ["১", "২", "৩", "৪"],
        correct: 0
    },
    {
        question: " কত বছর বয়সে নবীজী ইন্তেকাল করেন?",
        choices: ["৬২", "৬৪", "৬৩", "৬০"],
        correct: 2
    },
    {
        question: "সর্বপ্রথম নবী কে?",
        choices: ["ঈশা (আঃ", "আদম (আঃ)", "মুহাম্মদ (সাঃ", "মুসা (আঃ)"],
        correct: 1
    },
    {
        question: "সর্বশেষ নবী কে?",
        choices: ["ঈশা (আঃ", "আদম (আঃ)", "মুহাম্মদ (সাঃ", "মুসা (আঃ)"],
        correct: 2
    },
    {
        question: "কোন নবী পিতা ছাড়াই মায়ের গর্ভে এসেছিলেন?",
        choices: ["ঈশা (আঃ", "আদম (আঃ)", "মুহাম্মদ (সাঃ", "মুসা (আঃ)"],
        correct: 0
    },
    {
        question: "কোন নবী পশু-পাখি,বাতাসের সাথে কথা বলতেন?",
        choices: ["ঈশা (আঃ", "সুলাইমান (আঃ)", "মুহাম্মদ (সাঃ", "মুসা (আঃ)"],
        correct: 1
    },
    {
        question: "কোন নবী জেল খেটেছেন?",
        choices: ["ইউসুফ(আঃ)", "সুলাইমান(আঃ)", "যাকারিয়া(আঃ)", "দাউদ(আঃ)"],
        correct: 0
    },
    {
        question: "ইউসুফ(আঃ) কতদিন জেল খেটেছেন?",
        choices: ["৫ বছর", "৬ বছর", "৭ বছর", "৮ বছর"],
        correct: 2
    },
    {
        question: "কোন নবীকে নবীদের পিতা বলা হয়?",
        choices: ["মুহাম্মাদ সাঃ", "ঈসা আ.", "ইউসুফ(আঃ)", "ইব্রাহীম(আঃ)"],
        correct: 3
    },
    {
        question: " শির্ক কত প্রকার ?",
        choices: ["১", "২", "৩", "৪"],
        correct: 1
    },
    {
        question: "কোন পাপ নিয়ে তওবা ছাড়া মৃত্যু বরণ করলে চিরকাল জাহান্নামে থাকতে হবে?",
        choices: ["সুদ", "জিনা/ব্যাভিচার", "শিরক / শির্ক", "বিদআত"],
        correct: 2
    },
    {
        question: "মক্কার কাফেরগণকে মুশরিক বলার কারণ কি?",
        choices: ["তারা মুর্তি পুজা করত", "তারা রাসূল (স) কে কষ্ট দিতো", "তারা মারামারি/হানাহানি তে লিপ্ত ছিলো", "তারা আত্নীয়তার সম্পর্ক নষ্ট করতো"],
        correct: 0
    },
    {
        question: " নবী-রাসূলগণের দা’ওয়াতের মূল বক্তব্য কী ছিল?",
        choices: ["সালাত কায়েম", "পরোপকার", "জিহাদ", "আল্লাহ ছাড়া সত্য কোন মা’বূদ নেই (তাওহিদ)"],
        correct: 3
    },
    {
        question: "তাবিজ-কবচ ব্যবহার সম্পর্কে ইসলামের হুকুম কি?",
        choices: ["জায়েজ", "নাজায়েজ", "মাকরূহ", "কোনটি সঠিক নয়"],
        correct: 1
    },
    {
        question: "ছোট শির্কে লিপ্ত হলে তার পরিণতি কি?",
        choices: ["সগীরা গুনাহগার", "কবীরা গুনাহগার", "কাবীরা গুনাহের চাইতে বড় গুনাহগার", "কাফের (ইসলাম থেকে বের হয়ে যাবে )"],
        correct: 2
    },
    {
        question: " ইসরাফীল (আঃ) এর দায়িত্ব কি?",
        choices: ["জান কবজ", "বৃষ্টি বর্ষণ, উদ্ভিদ উৎপাদন", "শিংগায় ফুৎকার", "উপরের কোনটি নয়"],
        correct: 2
    },
    {
        question: "কোন ফেরেশতাকে সকল ফেরেশতার সরদার বলা হয়?",
        choices: ["ইসরাফীল (আঃ)", "মালাকুল মওত (আঃ)", "মীকাঈল (আঃ)", "জিবরাঈল (আঃ)"],
        correct: 3
    },
    {
        question: "ওহী নাযিল করার দায়িত্ব কোন ফেরেশতার ছিল?",
        choices: ["জিবরাঈল (আঃ)", "ইসরাফীল (আঃ)", "মালাকুল মওত (আঃ)", "মীকাঈল (আঃ)"],
        correct: 0
    },
    {
        question: "ফেরেশতাদের সংখ্যা কত?",
        choices: ["২৬ হাজার", "৯২ হাজার", "১ লক্ষ ৩৫ হাজার", "অসংখ্য ( আল্লাহ ছাড়া কেউ জানে না)"],
        correct: 3
    },
    {
        question: "আল্লাহর ফেরেশতাগণ কিসের তৈরী?",
        choices: ["আগুনের", "নূরের", "মাটির", "পানি ও বাতাসের"],
        correct: 1
    },
    {
        question: "হজ্জ ইসলামের কততম স্তম্ভ?",
        choices: ["৪", "৩", "২", "১"],
        correct: 0
    },
    {
        question: "জুম্মার নামাজে ফরজ কত রাকাত?",
        choices: ["৪", "২", "৬", "৩"],
        correct: 1
    },
    {
        question: "কোন গোনাহ তওবা ছাড়া আল্লাহ মাফ করেননা?",
        choices: ["শির্কের গোনাহ", "নামায না পড়ার গোনাহ", "মিথ্যা বলার গোনাহ", "রোজা না রাখার গোনাহ"],
        correct: 0
    },
    {
        question: " আল্লাহর শ্রেষ্ট সৃষ্টি কি?",
        choices: ["জিন", "ফেরেশতা", "পৃথিবী", "মানুষ"],
        correct: 3
    },
    {
        question: "কোন নবী আল্লাহকে দেখতে চেয়েছিলেন?",
        choices: ["ঈসা (আঃ)", "মুহাম্মাদ সাঃ", "ইব্রাহিম (আঃ)", "মুসা (আঃ)"],
        correct: 3
    },
    {
        question: " ইসরাইল (আঃ) আরএক নাম কি?",
        choices: ["ঈসা (আঃ)", "ইয়াকুব (আঃ)", "মুসা (আঃ)", "ইব্রাহিম (আঃ)"],
        correct: 1
    },
    {
        question: "কোন নবী নিজ দুশমনের বাড়িতে লালিত পালিত হন?",
        choices: ["ঈসা (আঃ)", "ইয়াকুব (আঃ)", "মুসা (আঃ)", "ইব্রাহিম (আঃ)"],
        correct: 2
    },
    {
        question: " কোন নবী তাঁর ছেলেকে সাথে নিয়ে কাবাঘর তৈরি করেন?",
        choices: ["ঈসা (আঃ)", "ইয়াকুব (আঃ)", "মুসা (আঃ)", "ইব্রাহিম (আঃ)"],
        correct: 3
    },
    {
        question: "গণক বা জ্যোতীষীদের কথা বিশ্বাস করার পরিণাম কি?",
        choices: ["কুফরী যার কারণে জাহান্নামে যেতে হবে", "ছোট/অল্প গুনাহগার হতে হবে", "এটা করলে বিদআত হবে", "বিশ্বাস না করায় ভালো তবে করলেও সমস্যা নাই"],
        correct: 0
    },
    {
        question: "দুনিয়াতে থাকতেই জান্নাতের সু-সংবাদ প্রাপ্ত সাহাবীর (রা) সংখ্যা কতো ?",
        choices: ["৭", "৮", "১০", "৯"],
        correct: 2
    },
];

let currentQuestion = 0;
let score = 0;



function loadQuestion() {

    let currentQuestionData = quizData[currentQuestion] // quizData[0]

    // add question title
    document.getElementById("question").textContent = currentQuestion + 1 + ") " + currentQuestionData.question

    let choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = currentQuestionData.choices[index];
        choice.style.background = "#007bff"
        choice.disabled = false;
    })

    document.getElementById("nextButton").style.display = "none"

}


function selectAnswer(index) {
    let currentQuestionData = quizData[currentQuestion]
    let choices = document.querySelectorAll(".choice");

    if (index === currentQuestionData.correct) {
        score++
        choices[index].style.backgroundColor = "#28a745"
    } else {
        choices[index].style.backgroundColor = "#dc3545"
        choices[currentQuestionData.correct].style.backgroundColor = "#28a745"
    }

    choices.forEach(choice => {
        choice.disabled = true
    })

    document.getElementById("nextButton").style.display = "block"

}

function nextQuestion() {
    currentQuestion++
    if (currentQuestion < quizData.length) {
        loadQuestion()
    } else {
        showScore()
    }
}


function showScore() {
    document.getElementById('quiz').innerHTML = `
    
    <h2>Your score: ${score} out of ${quizData.length} </h2> 
    <button id="restartButton">Restart Quiz</button>
    
    `

    document.getElementById("restartButton").addEventListener("click", restartQuiz)
}

function restartQuiz() {
    window.location.reload();
}


window.onload = loadQuestion()