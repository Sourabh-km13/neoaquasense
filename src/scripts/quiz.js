const quizData = [
    {
        question: "What is a water footprint?",
        options: [
            "The amount of water used for drinking",
            "The total volume of fresh water used to produce goods and services consumed by an individual or community",
            "The size of a lake or river",
            "Water used in households only"
        ],
        answer: "The total volume of fresh water used to produce goods and services consumed by an individual or community",
        tip: "A water footprint measures the amount of fresh water used to produce the goods and services we consume."
    },
    {
        question: "Which crop has the highest water footprint?",
        options: ["Wheat", "Rice", "Corn", "Soybeans"],
        answer: "Rice",
        tip: "Rice is one of the most water-intensive crops, requiring around 2,500 liters of water to produce 1 kilogram of rice."
    },
    {
        question: "What is an effective way for farmers to reduce water usage?",
        options: [
            "Planting water-intensive crops",
            "Using drip irrigation systems",
            "Flooding fields",
            "Planting during the dry season"
        ],
        answer: "Using drip irrigation systems",
        tip: "Drip irrigation is a water-efficient method, delivering water directly to the roots of plants and reducing wastage."
    },
    {
        question: "What percentage of global water use is attributed to agriculture?",
        options: ["10%", "30%", "50%", "70%"],
        answer: "70%",
        tip: "Agriculture accounts for about 70% of global water usage, highlighting the need for water-efficient farming practices."
    },
    {
        question: "What is the largest use of water in households?",
        options: ["Drinking", "Cooking", "Showering", "Toilets"],
        answer: "Toilets",
        tip: "Toilets account for about 24% of water use in a home. Consider upgrading to a water-efficient model."
    },
    {
        question: "How much water can a leaky faucet waste per day?",
        options: ["1 gallon", "5 gallons", "10 gallons", "20 gallons"],
        answer: "20 gallons",
        tip: "A leaky faucet can waste up to 20 gallons of water a day. Fix leaks promptly to save water."
    },
    // Add more questions here if needed
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    const nextButton = document.getElementById('next');
    const submitButton = document.getElementById('submit');
    
    if (currentQuestion < quizData.length) {
        const q = quizData[currentQuestion];
        quizContainer.innerHTML = `
            <div class="question">
                <h3>${currentQuestion + 1}. ${q.question}</h3>
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="q${currentQuestion}" value="${option}">
                        ${option}
                    </label><br>`).join('')}
            </div>
        `;
        
        if (currentQuestion === quizData.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
    }
}

function showResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Clear previous results
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
            resultsContainer.innerHTML += `<p>Question ${index + 1}: Correct! ${q.tip}</p>`;
        } else {
            resultsContainer.innerHTML += `<p>Question ${index + 1}: Incorrect. ${q.tip}</p>`;
        }
    });
    resultsContainer.innerHTML += `<h3>Your Score: ${score}/${quizData.length}</h3>`;
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (!selectedOption) {
        alert("Please select an answer before proceeding.");
        return;
    }
    
    currentQuestion++;
    loadQuiz();
}

document.getElementById('next').addEventListener('click', nextQuestion);
document.getElementById('submit').addEventListener('click', showResults);

// Initial load
loadQuiz();
