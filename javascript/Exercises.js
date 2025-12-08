// =======================
// UTC2 Exercises JavaScript
// =======================

// Exercise Data
const exercisesData = [
    {
        id: 1,
        title: "Present Simple Quiz – Basic",
        description: "Test your understanding of the present simple tense with basic sentences and questions.",
        skill: "grammar",
        level: "A2",
        questionsCount: 10,
        estimatedTime: "8-10 minutes",
        questions: [
            {
                question: "She _____ to work every day.",
                options: ["go", "goes", "going", "went"],
                correct: 1
            },
            {
                question: "They _____ English on Mondays.",
                options: ["study", "studies", "studying", "studied"],
                correct: 0
            },
            {
                question: "I _____ coffee in the morning.",
                options: ["drink", "drinks", "drinking", "drank"],
                correct: 0
            },
            {
                question: "He _____ TV in the evening.",
                options: ["watch", "watchs", "watches", "watching"],
                correct: 2
            },
            {
                question: "We _____ to the park on weekends.",
                options: ["go", "goes", "going", "went"],
                correct: 0
            },
            {
                question: "What time _____ you wake up?",
                options: ["do", "does", "did", "done"],
                correct: 0
            },
            {
                question: "Where _____ she live?",
                options: ["do", "does", "did", "done"],
                correct: 1
            },
            {
                question: "They _____ like pizza.",
                options: ["don't", "doesn't", "didn't", "not"],
                correct: 0
            },
            {
                question: "She _____ speak French.",
                options: ["don't", "doesn't", "didn't", "not"],
                correct: 1
            },
            {
                question: "I _____ understand this question.",
                options: ["don't", "doesn't", "didn't", "not"],
                correct: 0
            }
        ]
    },
    {
        id: 2,
        title: "Vocabulary: Daily Activities",
        description: "Learn and practice vocabulary related to daily routines and activities.",
        skill: "vocabulary",
        level: "A1",
        questionsCount: 8,
        estimatedTime: "6-8 minutes",
        questions: [
            {
                question: "What do you do in the morning to clean your teeth?",
                options: ["brush teeth", "wash teeth", "clean teeth", "polish teeth"],
                correct: 0
            },
            {
                question: "What meal do you eat in the morning?",
                options: ["lunch", "dinner", "breakfast", "supper"],
                correct: 2
            },
            {
                question: "What do you do when you go to bed?",
                options: ["sleep", "eat", "work", "exercise"],
                correct: 0
            },
            {
                question: "What do you do to get clean?",
                options: ["shower", "cook", "read", "drive"],
                correct: 0
            },
            {
                question: "What do you do to go to work or school?",
                options: ["commute", "sleep", "eat", "play"],
                correct: 0
            },
            {
                question: "What do you do to prepare food?",
                options: ["cook", "sleep", "read", "drive"],
                correct: 0
            },
            {
                question: "What do you do to move from one place to another?",
                options: ["travel", "sleep", "eat", "read"],
                correct: 0
            },
            {
                question: "What do you do to relax and have fun?",
                options: ["entertain", "work", "study", "sleep"],
                correct: 0
            }
        ]
    },
    {
        id: 3,
        title: "Reading Comprehension: The Library",
        description: "Read a short passage about a library and answer comprehension questions.",
        skill: "reading",
        level: "B1",
        questionsCount: 5,
        estimatedTime: "10-12 minutes",
        passage: "The local library is a wonderful place for people of all ages. It offers thousands of books, magazines, and digital resources. Many libraries also provide free internet access and computer services. Libraries often host events like book clubs, children's story time, and educational workshops. They are quiet places where people can study, read, and learn. Most libraries are free to use, and you only need a library card to borrow books. Libraries play an important role in communities by providing access to information and knowledge for everyone.",
        questions: [
            {
                question: "What resources can you find in a library?",
                options: ["Only books", "Books, magazines, and digital resources", "Only computers", "Only internet"],
                correct: 1
            },
            {
                question: "What do libraries often host?",
                options: ["Only book clubs", "Book clubs, story time, and workshops", "Only workshops", "Nothing"],
                correct: 1
            },
            {
                question: "What do you need to borrow books from a library?",
                options: ["Money", "A library card", "A computer", "Nothing"],
                correct: 1
            },
            {
                question: "What is the main purpose of libraries according to the passage?",
                options: ["To make money", "To provide access to information and knowledge", "To sell books", "To provide internet only"],
                correct: 1
            },
            {
                question: "Are libraries usually free to use?",
                options: ["No, they cost money", "Yes, they are usually free", "Sometimes", "Only for children"],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "Past Simple vs Past Continuous",
        description: "Practice distinguishing between past simple and past continuous tenses.",
        skill: "grammar",
        level: "B1",
        questionsCount: 10,
        estimatedTime: "10-12 minutes",
        questions: [
            {
                question: "While I _____ dinner, the phone rang.",
                options: ["was having", "had", "have", "am having"],
                correct: 0
            },
            {
                question: "She _____ when I saw her yesterday.",
                options: ["studies", "was studying", "study", "studied"],
                correct: 1
            },
            {
                question: "They _____ to the beach last summer.",
                options: ["go", "went", "going", "goes"],
                correct: 1
            },
            {
                question: "What _____ you doing at 8 PM yesterday?",
                options: ["was", "were", "are", "is"],
                correct: 1
            },
            {
                question: "I _____ my homework when my friend called.",
                options: ["do", "did", "was doing", "am doing"],
                correct: 2
            },
            {
                question: "He _____ a book while waiting for the bus.",
                options: ["read", "reads", "was reading", "reading"],
                correct: 2
            },
            {
                question: "We _____ TV when the power went out.",
                options: ["watch", "watched", "were watching", "watching"],
                correct: 2
            },
            {
                question: "She _____ to work by bus yesterday.",
                options: ["goes", "went", "was going", "going"],
                correct: 1
            },
            {
                question: "They _____ football when it started raining.",
                options: ["play", "played", "were playing", "playing"],
                correct: 2
            },
            {
                question: "I _____ him at the party last night.",
                options: ["see", "saw", "was seeing", "seeing"],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        title: "Vocabulary: Food and Cooking",
        description: "Expand your vocabulary with words related to food, cooking methods, and kitchen items.",
        skill: "vocabulary",
        level: "A2",
        questionsCount: 8,
        estimatedTime: "7-9 minutes",
        questions: [
            {
                question: "What do you use to cut vegetables?",
                options: ["spoon", "knife", "fork", "plate"],
                correct: 1
            },
            {
                question: "What cooking method uses hot water?",
                options: ["fry", "bake", "boil", "grill"],
                correct: 2
            },
            {
                question: "What do you call a person who cooks professionally?",
                options: ["cooker", "chef", "baker", "waiter"],
                correct: 1
            },
            {
                question: "What do you use to mix ingredients?",
                options: ["bowl", "pan", "oven", "refrigerator"],
                correct: 0
            },
            {
                question: "What is a sweet dish eaten after the main meal?",
                options: ["appetizer", "dessert", "main course", "starter"],
                correct: 1
            },
            {
                question: "What do you call food that is not cooked?",
                options: ["raw", "fried", "baked", "grilled"],
                correct: 0
            },
            {
                question: "What do you use to measure ingredients?",
                options: ["cup", "plate", "bowl", "pan"],
                correct: 0
            },
            {
                question: "What cooking method uses an oven?",
                options: ["fry", "boil", "bake", "steam"],
                correct: 2
            }
        ]
    },
    {
        id: 6,
        title: "Reading: Climate Change",
        description: "Read about climate change and its effects, then answer questions to test your understanding.",
        skill: "reading",
        level: "B2",
        questionsCount: 6,
        estimatedTime: "12-15 minutes",
        passage: "Climate change is one of the most pressing issues of our time. It refers to long-term changes in temperature and weather patterns. While climate change can occur naturally, scientific evidence shows that human activities have been the main driver of climate change since the mid-20th century. The burning of fossil fuels, deforestation, and industrial processes release greenhouse gases into the atmosphere, trapping heat and causing global temperatures to rise. This leads to various consequences such as melting ice caps, rising sea levels, extreme weather events, and changes in precipitation patterns. Addressing climate change requires global cooperation and individual actions to reduce carbon emissions and protect our planet for future generations.",
        questions: [
            {
                question: "What is the main cause of climate change since the mid-20th century?",
                options: ["Natural processes", "Human activities", "Animal behavior", "Ocean currents"],
                correct: 1
            },
            {
                question: "What do greenhouse gases do?",
                options: ["Cool the planet", "Trap heat in the atmosphere", "Create oxygen", "Prevent rain"],
                correct: 1
            },
            {
                question: "Which of the following is NOT mentioned as a consequence of climate change?",
                options: ["Melting ice caps", "Rising sea levels", "More earthquakes", "Extreme weather events"],
                correct: 2
            },
            {
                question: "What is needed to address climate change?",
                options: ["Only individual actions", "Only global cooperation", "Global cooperation and individual actions", "Nothing"],
                correct: 2
            },
            {
                question: "What activities contribute to climate change?",
                options: ["Burning fossil fuels and deforestation", "Planting trees", "Using renewable energy", "Recycling"],
                correct: 0
            },
            {
                question: "What does climate change refer to?",
                options: ["Short-term weather changes", "Long-term changes in temperature and weather patterns", "Daily temperature changes", "Seasonal variations"],
                correct: 1
            }
        ]
    },
    {
        id: 7,
        title: "Present Perfect Tense",
        description: "Master the present perfect tense with various exercises and real-life examples.",
        skill: "grammar",
        level: "B1",
        questionsCount: 10,
        estimatedTime: "10-12 minutes",
        questions: [
            {
                question: "I _____ to London three times.",
                options: ["go", "went", "have been", "am going"],
                correct: 2
            },
            {
                question: "She _____ her homework yet.",
                options: ["doesn't finish", "hasn't finished", "didn't finish", "won't finish"],
                correct: 1
            },
            {
                question: "Have you ever _____ sushi?",
                options: ["eat", "ate", "eaten", "eating"],
                correct: 2
            },
            {
                question: "They _____ here since 2020.",
                options: ["live", "lived", "have lived", "are living"],
                correct: 2
            },
            {
                question: "How long _____ you known him?",
                options: ["do", "did", "have", "are"],
                correct: 2
            },
            {
                question: "We _____ this movie before.",
                options: ["see", "saw", "have seen", "seeing"],
                correct: 2
            },
            {
                question: "He _____ just arrived.",
                options: ["has", "have", "is", "was"],
                correct: 0
            },
            {
                question: "I _____ never been to Japan.",
                options: ["have", "has", "am", "was"],
                correct: 0
            },
            {
                question: "She _____ worked here for five years.",
                options: ["work", "works", "has worked", "working"],
                correct: 2
            },
            {
                question: "Have you _____ the news today?",
                options: ["read", "readed", "reading", "reads"],
                correct: 0
            }
        ]
    },
    {
        id: 8,
        title: "Vocabulary: Travel and Tourism",
        description: "Learn essential vocabulary for traveling, booking hotels, and exploring new places.",
        skill: "vocabulary",
        level: "B1",
        questionsCount: 8,
        estimatedTime: "8-10 minutes",
        questions: [
            {
                question: "What do you call a person who shows tourists around?",
                options: ["traveler", "tourist", "guide", "passenger"],
                correct: 2
            },
            {
                question: "What do you need to enter another country?",
                options: ["ticket", "passport", "map", "suitcase"],
                correct: 1
            },
            {
                question: "What do you call a place where you stay on vacation?",
                options: ["restaurant", "airport", "hotel", "station"],
                correct: 2
            },
            {
                question: "What do you call a plan of your trip?",
                options: ["itinerary", "ticket", "passport", "luggage"],
                correct: 0
            },
            {
                question: "What do you call the place where planes take off and land?",
                options: ["station", "port", "airport", "terminal"],
                correct: 2
            },
            {
                question: "What do you call a discount for early booking?",
                options: ["fine", "fee", "early bird discount", "penalty"],
                correct: 2
            },
            {
                question: "What do you call a person traveling on a plane?",
                options: ["pilot", "passenger", "guide", "tourist"],
                correct: 1
            },
            {
                question: "What do you call the bags you take on a trip?",
                options: ["luggage", "ticket", "passport", "map"],
                correct: 0
            }
        ]
    }
];

// State Management
let currentExercise = null;
let userAnswers = {};
let isSubmitted = false;
let filteredExercises = [...exercisesData];

// DOM Elements
const searchInput = document.getElementById('exercises-search-input');
const skillFilter = document.getElementById('exercises-skill-filter');
const levelFilter = document.getElementById('exercises-level-filter');
const randomBtn = document.getElementById('exercises-random-btn');
const cardsContainer = document.getElementById('exercises-cards-container');
const panel = document.getElementById('exercises-panel');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    skillFilter.addEventListener('change', handleFilter);
    levelFilter.addEventListener('change', handleFilter);
    randomBtn.addEventListener('click', handleRandomExercise);
}

// Render Exercise Cards
function renderCards() {
    cardsContainer.innerHTML = '';
    
    if (filteredExercises.length === 0) {
        cardsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #999;">
                <i class="fa-solid fa-search" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                <p style="font-size: 1.2rem;">Không tìm thấy bài tập nào phù hợp</p>
            </div>
        `;
        return;
    }

    filteredExercises.forEach(exercise => {
        const card = createExerciseCard(exercise);
        cardsContainer.appendChild(card);
    });
}

// Create Exercise Card
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = 'exercises-card';
    if (currentExercise && currentExercise.id === exercise.id) {
        card.classList.add('active');
    }

    card.innerHTML = `
        <div class="exercises-card-header">
            <h3 class="exercises-card-title">${exercise.title}</h3>
        </div>
        <div class="exercises-card-tags">
            <span class="exercises-tag exercises-tag-skill">${capitalizeFirst(exercise.skill)}</span>
            <span class="exercises-tag exercises-tag-level">${exercise.level}</span>
        </div>
        <p class="exercises-card-description">${exercise.description}</p>
        <div class="exercises-card-meta">
            <div class="exercises-card-meta-item">
                <i class="fa-solid fa-list-check"></i>
                <span>${exercise.questionsCount} questions</span>
            </div>
            <div class="exercises-card-meta-item">
                <i class="fa-solid fa-clock"></i>
                <span>~ ${exercise.estimatedTime}</span>
            </div>
        </div>
        <button class="exercises-card-btn">Start exercise</button>
    `;

    card.addEventListener('click', () => {
        loadExercise(exercise.id);
    });

    return card;
}

// Load Exercise
function loadExercise(exerciseId) {
    const exercise = exercisesData.find(e => e.id === exerciseId);
    if (!exercise) return;

    currentExercise = exercise;
    userAnswers = {};
    isSubmitted = false;

    // Update active card
    document.querySelectorAll('.exercises-card').forEach(card => {
        card.classList.remove('active');
    });
    const activeCard = Array.from(document.querySelectorAll('.exercises-card'))
        .find(card => card.querySelector('.exercises-card-title').textContent === exercise.title);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    renderExercisePanel();
}

// Render Exercise Panel
function renderExercisePanel() {
    if (!currentExercise) {
        panel.innerHTML = `
            <div class="exercises-panel-placeholder">
                <i class="fa-solid fa-clipboard-question"></i>
                <p>Chọn một bài tập để bắt đầu làm bài</p>
            </div>
        `;
        return;
    }

    let panelHTML = `
        <div class="exercises-panel-header">
            <h2 class="exercises-panel-title">${currentExercise.title}</h2>
            <div class="exercises-panel-info">
                <div class="exercises-panel-info-item">
                    <i class="fa-solid fa-tag"></i>
                    <span>${capitalizeFirst(currentExercise.skill)}</span>
                </div>
                <div class="exercises-panel-info-item">
                    <i class="fa-solid fa-signal"></i>
                    <span>Level ${currentExercise.level}</span>
                </div>
                <div class="exercises-panel-info-item">
                    <i class="fa-solid fa-list-check"></i>
                    <span>${currentExercise.questionsCount} questions</span>
                </div>
            </div>
        </div>
    `;

    // Reading passage if exists
    if (currentExercise.passage) {
        panelHTML += `
            <div class="exercises-reading-passage">
                <p>${currentExercise.passage}</p>
            </div>
        `;
    }

    // Questions
    panelHTML += '<div class="exercises-questions-list">';
    currentExercise.questions.forEach((q, index) => {
        panelHTML += `
            <div class="exercises-question-item" data-question="${index}">
                <div class="exercises-question-text">${index + 1}. ${q.question}</div>
                <div class="exercises-options-list">
        `;
        q.options.forEach((option, optIndex) => {
            const isChecked = userAnswers[index] === optIndex;
            const isCorrect = optIndex === q.correct;
            const isWrong = isSubmitted && isChecked && !isCorrect;
            const showCorrect = isSubmitted && isCorrect;
            
            let optionClass = '';
            if (isSubmitted) {
                if (showCorrect) optionClass = 'correct-answer';
                if (isWrong) optionClass = 'wrong-answer';
                optionClass += ' disabled';
            }

            panelHTML += `
                <div class="exercises-option-item ${optionClass}">
                    <input type="radio" 
                           name="question-${index}" 
                           id="q${index}-opt${optIndex}" 
                           value="${optIndex}"
                           ${isChecked ? 'checked' : ''}
                           ${isSubmitted ? 'disabled' : ''}>
                    <label for="q${index}-opt${optIndex}">${option}</label>
                </div>
            `;
        });
        panelHTML += `
                </div>
            </div>
        `;
    });
    panelHTML += '</div>';

    // Actions
    if (!isSubmitted) {
        panelHTML += `
            <div class="exercises-panel-actions">
                <button class="exercises-panel-btn exercises-panel-btn-submit" id="submit-btn">Nộp bài</button>
                <button class="exercises-panel-btn exercises-panel-btn-reset" id="reset-btn">Làm lại</button>
            </div>
        `;
    } else {
        panelHTML += `
            <div class="exercises-panel-actions">
                <button class="exercises-panel-btn exercises-panel-btn-reset" id="reset-btn">Làm lại</button>
            </div>
        `;
    }

    panel.innerHTML = panelHTML;

    // Add event listeners
    if (!isSubmitted) {
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', handleAnswerChange);
        });
        document.getElementById('submit-btn').addEventListener('click', handleSubmit);
    }
    document.getElementById('reset-btn').addEventListener('click', handleReset);
}

// Handle Answer Change
function handleAnswerChange(e) {
    const questionIndex = parseInt(e.target.name.split('-')[1]);
    userAnswers[questionIndex] = parseInt(e.target.value);
}

// Handle Submit
function handleSubmit() {
    if (!currentExercise) return;

    // Check if all questions are answered
    const totalQuestions = currentExercise.questions.length;
    const answeredQuestions = Object.keys(userAnswers).length;
    
    if (answeredQuestions < totalQuestions) {
        if (confirm(`Bạn chưa trả lời hết các câu hỏi. Bạn có muốn nộp bài không?`)) {
            submitAnswers();
        }
    } else {
        submitAnswers();
    }
}

function submitAnswers() {
    isSubmitted = true;
    
    let correctCount = 0;
    currentExercise.questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / currentExercise.questions.length) * 100);
    
    let message = '';
    let messageClass = '';
    if (percentage >= 80) {
        message = "Great job! Keep it up!";
        messageClass = "high";
    } else if (percentage >= 60) {
        message = "Good! Try this exercise again to improve.";
        messageClass = "medium";
    } else {
        message = "Don't worry, keep practicing and try again.";
        messageClass = "low";
    }

    const resultsHTML = `
        <div class="exercises-results">
            <div class="exercises-results-score">${correctCount}/${currentExercise.questions.length}</div>
            <div class="exercises-results-text">${percentage}% Correct</div>
            <div class="exercises-results-message ${messageClass}">${message}</div>
        </div>
    `;

    // Insert results at the beginning of panel
    const panelHeader = panel.querySelector('.exercises-panel-header');
    panelHeader.insertAdjacentHTML('afterend', resultsHTML);

    // Highlight correct/incorrect answers
    currentExercise.questions.forEach((q, index) => {
        const questionItem = panel.querySelector(`[data-question="${index}"]`);
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;
        
        if (isCorrect) {
            questionItem.classList.add('correct');
        } else if (userAnswer !== undefined) {
            questionItem.classList.add('incorrect');
        }
    });

    renderExercisePanel();
}

// Handle Reset
function handleReset() {
    if (!currentExercise) return;
    
    userAnswers = {};
    isSubmitted = false;
    renderExercisePanel();
}

// Handle Search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    applyFilters(searchTerm);
}

// Handle Filter
function handleFilter() {
    applyFilters();
}

// Apply Filters
function applyFilters(searchTerm = null) {
    const skill = skillFilter.value;
    const level = levelFilter.value;
    const term = searchTerm !== null ? searchTerm : searchInput.value.toLowerCase().trim();

    filteredExercises = exercisesData.filter(exercise => {
        const matchSkill = skill === 'all' || exercise.skill === skill;
        const matchLevel = level === 'all' || exercise.level === level;
        const matchSearch = term === '' || 
            exercise.title.toLowerCase().includes(term) ||
            exercise.description.toLowerCase().includes(term) ||
            exercise.skill.toLowerCase().includes(term);

        return matchSkill && matchLevel && matchSearch;
    });

    renderCards();
    
    // Clear panel if current exercise is filtered out
    if (currentExercise && !filteredExercises.find(e => e.id === currentExercise.id)) {
        currentExercise = null;
        userAnswers = {};
        isSubmitted = false;
        renderExercisePanel();
    }
}

// Handle Random Exercise
function handleRandomExercise() {
    if (filteredExercises.length === 0) {
        alert('Không có bài tập nào phù hợp với bộ lọc hiện tại.');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredExercises.length);
    const randomExercise = filteredExercises[randomIndex];
    loadExercise(randomExercise.id);
    
    // Scroll to panel
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

