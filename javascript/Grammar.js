// UTC2 Grammar Page JavaScript
// Handles search, filtering, and topic detail display

// Grammar topics data
const grammarTopics = [
    {
        id: 1,
        title: 'Present Simple',
        category: 'tenses',
        description: 'Thì hiện tại đơn - dùng để diễn tả thói quen, sự thật hiển thị, và hành động lặp lại.',
        explanation: 'The Present Simple tense is used to describe habits, facts, and repeated actions. It is one of the most commonly used tenses in English.',
        structure: 'Subject + Verb (base form) + Object\n\nFor third person singular (he/she/it), add -s or -es to the verb.',
        examples: [
            { en: 'I go to school every day.', vi: 'Tôi đi học mỗi ngày.' },
            { en: 'She works in a hospital.', vi: 'Cô ấy làm việc ở bệnh viện.' },
            { en: 'The sun rises in the east.', vi: 'Mặt trời mọc ở phía đông.' },
            { en: 'They play football on weekends.', vi: 'Họ chơi bóng đá vào cuối tuần.' },
            { en: 'Water boils at 100 degrees Celsius.', vi: 'Nước sôi ở 100 độ C.' }
        ],
        mistakes: [
            'Không thêm -s cho động từ khi chủ ngữ là he/she/it',
            'Dùng Present Simple cho hành động đang xảy ra (nên dùng Present Continuous)',
            'Quên dùng do/does trong câu hỏi và phủ định'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "She _____ to work every morning."',
                options: ['go', 'goes', 'going', 'went'],
                correct: 1
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'I am go to school.',
                    'I goes to school.',
                    'I go to school.',
                    'I going to school.'
                ],
                correct: 2
            },
            {
                question: 'Complete: "They _____ English every day."',
                options: ['study', 'studies', 'studying', 'studied'],
                correct: 0
            }
        ]
    },
    {
        id: 2,
        title: 'Present Continuous',
        category: 'tenses',
        description: 'Thì hiện tại tiếp diễn - dùng để diễn tả hành động đang xảy ra tại thời điểm nói.',
        explanation: 'The Present Continuous tense is used to describe actions happening right now or around the current time. It emphasizes the ongoing nature of an action.',
        structure: 'Subject + am/is/are + Verb (-ing) + Object',
        examples: [
            { en: 'I am studying English now.', vi: 'Tôi đang học tiếng Anh bây giờ.' },
            { en: 'She is reading a book.', vi: 'Cô ấy đang đọc sách.' },
            { en: 'They are playing football.', vi: 'Họ đang chơi bóng đá.' },
            { en: 'We are learning grammar.', vi: 'Chúng tôi đang học ngữ pháp.' },
            { en: 'He is working on a project.', vi: 'Anh ấy đang làm dự án.' }
        ],
        mistakes: [
            'Dùng Present Continuous cho động từ chỉ trạng thái (like, know, want)',
            'Quên thêm -ing vào động từ',
            'Sai dạng của am/is/are'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ English right now."',
                options: ['study', 'studies', 'am studying', 'studied'],
                correct: 2
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She is read a book.',
                    'She is reading a book.',
                    'She reading a book.',
                    'She is reads a book.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ football now."',
                options: ['play', 'plays', 'are playing', 'played'],
                correct: 2
            }
        ]
    },
    {
        id: 3,
        title: 'Past Simple',
        category: 'tenses',
        description: 'Thì quá khứ đơn - dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ.',
        explanation: 'The Past Simple tense is used to describe completed actions in the past. Regular verbs add -ed, while irregular verbs have different forms.',
        structure: 'Subject + Verb (past form) + Object\n\nRegular verbs: add -ed\nIrregular verbs: use past form (went, saw, did, etc.)',
        examples: [
            { en: 'I went to school yesterday.', vi: 'Tôi đã đi học hôm qua.' },
            { en: 'She studied English last year.', vi: 'Cô ấy đã học tiếng Anh năm ngoái.' },
            { en: 'They played football last week.', vi: 'Họ đã chơi bóng đá tuần trước.' },
            { en: 'We visited London in 2020.', vi: 'Chúng tôi đã thăm London vào năm 2020.' },
            { en: 'He finished his homework.', vi: 'Anh ấy đã hoàn thành bài tập về nhà.' }
        ],
        mistakes: [
            'Dùng động từ nguyên mẫu thay vì dạng quá khứ',
            'Thêm -ed cho động từ bất quy tắc',
            'Quên dùng did trong câu hỏi và phủ định'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ to the store yesterday."',
                options: ['go', 'goes', 'went', 'going'],
                correct: 2
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She study English yesterday.',
                    'She studied English yesterday.',
                    'She studies English yesterday.',
                    'She studying English yesterday.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ football last week."',
                options: ['play', 'plays', 'played', 'playing'],
                correct: 2
            }
        ]
    },
    {
        id: 4,
        title: 'Present Perfect',
        category: 'tenses',
        description: 'Thì hiện tại hoàn thành - diễn tả hành động đã xảy ra trong quá khứ nhưng còn liên quan đến hiện tại.',
        explanation: 'The Present Perfect tense connects the past with the present. It is used for actions that happened at an unspecified time or have relevance to now.',
        structure: 'Subject + have/has + Past Participle + Object',
        examples: [
            { en: 'I have finished my homework.', vi: 'Tôi đã hoàn thành bài tập về nhà.' },
            { en: 'She has lived here for 5 years.', vi: 'Cô ấy đã sống ở đây được 5 năm.' },
            { en: 'They have visited Paris.', vi: 'Họ đã thăm Paris.' },
            { en: 'We have studied English since 2020.', vi: 'Chúng tôi đã học tiếng Anh từ năm 2020.' },
            { en: 'He has never been to Japan.', vi: 'Anh ấy chưa bao giờ đến Nhật Bản.' }
        ],
        mistakes: [
            'Dùng thời gian cụ thể trong quá khứ (yesterday, last week) với Present Perfect',
            'Nhầm lẫn giữa have và has',
            'Quên dùng past participle (V3)'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ finished my work."',
                options: ['has', 'have', 'had', 'having'],
                correct: 1
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She have lived here for 5 years.',
                    'She has lived here for 5 years.',
                    'She has live here for 5 years.',
                    'She has living here for 5 years.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ never been to Japan."',
                options: ['has', 'have', 'had', 'having'],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        title: 'Conditional Type 1',
        category: 'conditionals',
        description: 'Câu điều kiện loại 1 - diễn tả điều kiện có thể xảy ra trong hiện tại hoặc tương lai.',
        explanation: 'Conditional Type 1 (First Conditional) is used to talk about real and possible situations in the present or future.',
        structure: 'If + Present Simple, + will/can/may + Verb (base form)',
        examples: [
            { en: 'If it rains, I will stay at home.', vi: 'Nếu trời mưa, tôi sẽ ở nhà.' },
            { en: 'If you study hard, you will pass the exam.', vi: 'Nếu bạn học chăm chỉ, bạn sẽ đỗ kỳ thi.' },
            { en: 'If she comes, I will be happy.', vi: 'Nếu cô ấy đến, tôi sẽ vui.' },
            { en: 'If we leave now, we can catch the train.', vi: 'Nếu chúng ta đi bây giờ, chúng ta có thể bắt được tàu.' },
            { en: 'If he calls, tell him I\'m busy.', vi: 'Nếu anh ấy gọi, nói với anh ấy tôi đang bận.' }
        ],
        mistakes: [
            'Dùng will trong mệnh đề if',
            'Dùng quá khứ trong mệnh đề if',
            'Nhầm lẫn với Conditional Type 2'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "If it _____ tomorrow, we will cancel the picnic."',
                options: ['rain', 'rains', 'will rain', 'rained'],
                correct: 1
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'If you will study, you will pass.',
                    'If you study, you will pass.',
                    'If you studied, you will pass.',
                    'If you study, you pass.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "If she _____ early, she can catch the bus."',
                options: ['leave', 'leaves', 'will leave', 'left'],
                correct: 1
            }
        ]
    },
    {
        id: 6,
        title: 'Passive Voice (Basic)',
        category: 'passive',
        description: 'Câu bị động cơ bản - dùng khi chủ ngữ chịu tác động của hành động.',
        explanation: 'Passive voice is used when the focus is on the action or the object of the action, rather than who performs it.',
        structure: 'Subject + be (am/is/are/was/were) + Past Participle + (by + agent)',
        examples: [
            { en: 'The book is written by John.', vi: 'Cuốn sách được viết bởi John.' },
            { en: 'English is spoken all over the world.', vi: 'Tiếng Anh được nói trên toàn thế giới.' },
            { en: 'The house was built in 2020.', vi: 'Ngôi nhà được xây vào năm 2020.' },
            { en: 'The car is being repaired.', vi: 'Chiếc xe đang được sửa.' },
            { en: 'The letter was sent yesterday.', vi: 'Lá thư đã được gửi hôm qua.' }
        ],
        mistakes: [
            'Quên dùng be (am/is/are/was/were)',
            'Dùng động từ nguyên mẫu thay vì past participle',
            'Nhầm lẫn thứ tự chủ ngữ và tân ngữ'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "The book _____ written by John."',
                options: ['is', 'are', 'be', 'being'],
                correct: 0
            },
            {
                question: 'Which sentence is in passive voice?',
                options: [
                    'John writes the book.',
                    'The book is written by John.',
                    'John is writing the book.',
                    'John wrote the book.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "English _____ spoken all over the world."',
                options: ['is', 'are', 'be', 'being'],
                correct: 0
            }
        ]
    },
    {
        id: 7,
        title: 'Relative Clauses (who/which/that)',
        category: 'relative-clauses',
        description: 'Mệnh đề quan hệ - dùng để bổ nghĩa cho danh từ đứng trước.',
        explanation: 'Relative clauses provide additional information about a noun. Use "who" for people, "which" for things, and "that" for both.',
        structure: 'Noun + Relative Pronoun (who/which/that) + Verb + ...',
        examples: [
            { en: 'The man who lives next door is a doctor.', vi: 'Người đàn ông sống bên cạnh là bác sĩ.' },
            { en: 'The book which I bought is interesting.', vi: 'Cuốn sách tôi mua rất thú vị.' },
            { en: 'The car that I drive is old.', vi: 'Chiếc xe tôi lái đã cũ.' },
            { en: 'The students who study hard will succeed.', vi: 'Những học sinh học chăm chỉ sẽ thành công.' },
            { en: 'The house which was built last year is beautiful.', vi: 'Ngôi nhà được xây năm ngoái rất đẹp.' }
        ],
        mistakes: [
            'Dùng who cho vật và which cho người',
            'Thêm đại từ nhân xưng không cần thiết (the man who he lives...)',
            'Nhầm lẫn giữa that và which trong mệnh đề không xác định'
        ],
        quiz: [
            {
                question: 'Choose the correct pronoun: "The man _____ lives next door is a doctor."',
                options: ['who', 'which', 'that', 'whom'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'The book which I bought it is interesting.',
                    'The book which I bought is interesting.',
                    'The book which I buy is interesting.',
                    'The book which I buying is interesting.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "The car _____ I drive is old."',
                options: ['who', 'which', 'that', 'A or C'],
                correct: 3
            }
        ]
    }
];

// State
let currentFilter = 'all';
let currentTopic = null;
let searchTerm = '';

// DOM Elements
const searchInput = document.getElementById('grammar-search-input');
const searchBtn = document.getElementById('grammar-search-btn');
const filterChips = document.querySelectorAll('.grammar-filter-chip');
const cardsContainer = document.getElementById('grammar-cards-container');
const detailPanel = document.getElementById('grammar-detail-panel');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderCards();
    });

    searchBtn.addEventListener('click', () => {
        searchTerm = searchInput.value.toLowerCase();
        renderCards();
    });

    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.category;
            renderCards();
        });
    });
}

// Render Grammar Cards
function renderCards() {
    const filtered = grammarTopics.filter(topic => {
        const matchesFilter = currentFilter === 'all' || topic.category === currentFilter;
        const matchesSearch = !searchTerm || 
            topic.title.toLowerCase().includes(searchTerm) ||
            topic.description.toLowerCase().includes(searchTerm) ||
            topic.category.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        cardsContainer.innerHTML = `
            <div class="grammar-card" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p style="color: #9ca3af; font-size: 16px;">Không tìm thấy chủ đề nào phù hợp.</p>
            </div>
        `;
        return;
    }

    cardsContainer.innerHTML = filtered.map(topic => {
        const categoryLabels = {
            'tenses': 'Thì',
            'sentence-structure': 'Cấu trúc câu',
            'modal-verbs': 'Modal verbs',
            'conditionals': 'Câu điều kiện',
            'passive': 'Câu bị động',
            'relative-clauses': 'Mệnh đề quan hệ'
        };

        const isActive = currentTopic && currentTopic.id === topic.id;

        return `
            <div class="grammar-card ${isActive ? 'active' : ''}" data-topic-id="${topic.id}">
                <div class="grammar-card-header">
                    <h3 class="grammar-card-title">${topic.title}</h3>
                    <span class="grammar-card-tag">${categoryLabels[topic.category] || topic.category}</span>
                </div>
                <p class="grammar-card-description">${topic.description}</p>
            </div>
        `;
    }).join('');

    // Attach click handlers
    document.querySelectorAll('.grammar-card').forEach(card => {
        card.addEventListener('click', () => {
            const topicId = parseInt(card.dataset.topicId);
            const topic = grammarTopics.find(t => t.id === topicId);
            if (topic) {
                showTopicDetail(topic);
                // Update active state
                document.querySelectorAll('.grammar-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });
}

// Show Topic Detail
function showTopicDetail(topic) {
    currentTopic = topic;

    const categoryLabels = {
        'tenses': 'Thì',
        'sentence-structure': 'Cấu trúc câu',
        'modal-verbs': 'Modal verbs',
        'conditionals': 'Câu điều kiện',
        'passive': 'Câu bị động',
        'relative-clauses': 'Mệnh đề quan hệ'
    };

    detailPanel.innerHTML = `
        <div class="grammar-detail-header">
            <h2 class="grammar-detail-title">${topic.title}</h2>
            <span class="grammar-detail-tag">${categoryLabels[topic.category] || topic.category}</span>
        </div>
        <div class="grammar-detail-tabs">
            <button class="grammar-tab-btn active" data-tab="explanation">Giải thích</button>
            <button class="grammar-tab-btn" data-tab="examples">Ví dụ</button>
            <button class="grammar-tab-btn" data-tab="quiz">Mini Quiz</button>
        </div>
        <div class="grammar-tab-content active" id="tab-explanation">
            <div class="grammar-explanation-section">
                <h3 class="grammar-section-title">Giải thích</h3>
                <p class="grammar-section-text">${topic.explanation}</p>
            </div>
            <div class="grammar-explanation-section">
                <h3 class="grammar-section-title">Cấu trúc</h3>
                <div class="grammar-structure-box">
                    <pre><code>${topic.structure}</code></pre>
                </div>
            </div>
            <div class="grammar-mistakes-box">
                <h3 class="grammar-section-title">Common Mistakes</h3>
                <ul class="grammar-mistakes-list">
                    ${topic.mistakes.map(mistake => `<li>${mistake}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="grammar-tab-content" id="tab-examples">
            <div class="grammar-explanation-section">
                <h3 class="grammar-section-title">Ví dụ</h3>
                <ul class="grammar-examples-list">
                    ${topic.examples.map(example => `
                        <li class="grammar-example-item">
                            <div class="grammar-example-en">${example.en}</div>
                            <div class="grammar-example-vi">${example.vi}</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
        <div class="grammar-tab-content" id="tab-quiz">
            <div class="grammar-quiz-container">
                <h3 class="grammar-section-title">Mini Quiz</h3>
                ${topic.quiz.map((q, index) => `
                    <div class="grammar-quiz-question" data-question="${index}">
                        <div class="grammar-quiz-question-title">${index + 1}. ${q.question}</div>
                        <ul class="grammar-quiz-options">
                            ${q.options.map((option, optIndex) => `
                                <li class="grammar-quiz-option">
                                    <input type="radio" name="quiz-${index}" id="quiz-${index}-${optIndex}" value="${optIndex}">
                                    <label for="quiz-${index}-${optIndex}">${option}</label>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
                <button class="grammar-quiz-submit" onclick="checkQuiz()">Kiểm tra kết quả</button>
                <div class="grammar-quiz-result" id="quiz-result"></div>
            </div>
        </div>
    `;

    // Attach tab switching
    document.querySelectorAll('.grammar-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });

    // Scroll to detail panel on mobile
    if (window.innerWidth <= 1024) {
        detailPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Switch Tab
function switchTab(tabName) {
    // Update buttons
    document.querySelectorAll('.grammar-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });

    // Update content
    document.querySelectorAll('.grammar-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Check Quiz
function checkQuiz() {
    if (!currentTopic) return;

    const questions = document.querySelectorAll('.grammar-quiz-question');
    let correctCount = 0;
    let totalQuestions = currentTopic.quiz.length;

    currentTopic.quiz.forEach((quiz, index) => {
        const questionEl = questions[index];
        const selected = questionEl.querySelector('input[type="radio"]:checked');
        
        if (!selected) {
            questionEl.classList.add('incorrect');
            return;
        }

        const selectedValue = parseInt(selected.value);
        const correctValue = quiz.correct;

        // Mark all options
        questionEl.querySelectorAll('.grammar-quiz-option').forEach((option, optIndex) => {
            if (optIndex === correctValue) {
                option.classList.add('correct-answer');
            } else if (optIndex === selectedValue && optIndex !== correctValue) {
                option.classList.add('wrong-answer');
            }
        });

        if (selectedValue === correctValue) {
            correctCount++;
            questionEl.classList.add('correct');
            questionEl.classList.remove('incorrect');
        } else {
            questionEl.classList.add('incorrect');
            questionEl.classList.remove('correct');
        }
    });

    // Show result
    const resultEl = document.getElementById('quiz-result');
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    let message = '';

    if (percentage === 100) {
        message = 'Xuất sắc! Bạn đã trả lời đúng tất cả!';
    } else if (percentage >= 70) {
        message = 'Tốt lắm! Bạn đã hiểu rõ chủ đề này.';
    } else if (percentage >= 50) {
        message = 'Khá tốt! Hãy xem lại phần bạn chưa hiểu.';
    } else {
        message = 'Hãy xem lại bài học và thử lại nhé!';
    }

    resultEl.innerHTML = `
        <div class="grammar-quiz-score">${correctCount}/${totalQuestions}</div>
        <p class="grammar-quiz-message">${message}</p>
    `;
    resultEl.classList.add('show');

    // Disable submit button
    const submitBtn = document.querySelector('.grammar-quiz-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đã kiểm tra';
}

