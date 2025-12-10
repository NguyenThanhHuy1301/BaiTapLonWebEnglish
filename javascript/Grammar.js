// UTC2 Grammar Page JavaScript
// Handles search, filtering, and topic detail display

// Grammar topics data
const grammarTopics = [
    // ========== 12 THÌ TRONG TIẾNG ANH ==========
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
    },
    // ========== CÁC THÌ CÒN LẠI ==========
    {
        id: 8,
        title: 'Present Perfect Continuous',
        category: 'tenses',
        description: 'Thì hiện tại hoàn thành tiếp diễn - diễn tả hành động bắt đầu trong quá khứ, tiếp tục đến hiện tại và có thể tiếp tục trong tương lai.',
        explanation: 'The Present Perfect Continuous tense emphasizes the duration of an action that started in the past and continues to the present, or has just finished.',
        structure: 'Subject + have/has + been + Verb (-ing) + Object',
        examples: [
            { en: 'I have been studying English for 3 years.', vi: 'Tôi đã học tiếng Anh được 3 năm.' },
            { en: 'She has been working here since 2020.', vi: 'Cô ấy đã làm việc ở đây từ năm 2020.' },
            { en: 'They have been waiting for 2 hours.', vi: 'Họ đã đợi được 2 giờ.' },
            { en: 'We have been living in Hanoi for 5 years.', vi: 'Chúng tôi đã sống ở Hà Nội được 5 năm.' },
            { en: 'He has been reading that book all day.', vi: 'Anh ấy đã đọc cuốn sách đó cả ngày.' }
        ],
        mistakes: [
            'Dùng for với thời điểm cụ thể (since 2020, not for 2020)',
            'Quên dùng been giữa have/has và động từ -ing',
            'Dùng với động từ chỉ trạng thái (know, like, want)'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ studying English for 3 years."',
                options: ['have been', 'has been', 'am', 'was'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She has working here since 2020.',
                    'She has been working here since 2020.',
                    'She has been work here since 2020.',
                    'She has working here for 2020.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ waiting for 2 hours."',
                options: ['have been', 'has been', 'are', 'were'],
                correct: 0
            }
        ]
    },
    {
        id: 9,
        title: 'Past Continuous',
        category: 'tenses',
        description: 'Thì quá khứ tiếp diễn - diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ.',
        explanation: 'The Past Continuous tense describes actions that were in progress at a specific time in the past, or actions interrupted by another action.',
        structure: 'Subject + was/were + Verb (-ing) + Object',
        examples: [
            { en: 'I was studying when you called.', vi: 'Tôi đang học khi bạn gọi.' },
            { en: 'She was reading a book at 8 PM yesterday.', vi: 'Cô ấy đang đọc sách lúc 8 giờ tối hôm qua.' },
            { en: 'They were playing football when it started raining.', vi: 'Họ đang chơi bóng đá khi trời bắt đầu mưa.' },
            { en: 'We were watching TV at that time.', vi: 'Chúng tôi đang xem TV lúc đó.' },
            { en: 'He was working on his project all day yesterday.', vi: 'Anh ấy đã làm dự án cả ngày hôm qua.' }
        ],
        mistakes: [
            'Nhầm lẫn was/were (was cho I/he/she/it, were cho you/we/they)',
            'Quên thêm -ing vào động từ',
            'Dùng Past Continuous cho hành động hoàn thành'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ studying when you called."',
                options: ['was', 'were', 'am', 'is'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'They was playing football.',
                    'They were playing football.',
                    'They were play football.',
                    'They playing football.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "She _____ reading at 8 PM yesterday."',
                options: ['was', 'were', 'is', 'are'],
                correct: 0
            }
        ]
    },
    {
        id: 10,
        title: 'Past Perfect',
        category: 'tenses',
        description: 'Thì quá khứ hoàn thành - diễn tả hành động xảy ra trước một hành động khác trong quá khứ.',
        explanation: 'The Past Perfect tense is used to show that one action happened before another action in the past. It emphasizes the order of past events.',
        structure: 'Subject + had + Past Participle + Object',
        examples: [
            { en: 'I had finished my homework before you arrived.', vi: 'Tôi đã hoàn thành bài tập trước khi bạn đến.' },
            { en: 'She had already left when I called.', vi: 'Cô ấy đã rời đi khi tôi gọi.' },
            { en: 'They had studied English before moving to London.', vi: 'Họ đã học tiếng Anh trước khi chuyển đến London.' },
            { en: 'We had eaten dinner before the movie started.', vi: 'Chúng tôi đã ăn tối trước khi phim bắt đầu.' },
            { en: 'He had never been to Japan before last year.', vi: 'Anh ấy chưa bao giờ đến Nhật Bản trước năm ngoái.' }
        ],
        mistakes: [
            'Dùng had với động từ nguyên mẫu thay vì past participle',
            'Nhầm lẫn với Past Simple',
            'Dùng Past Perfect khi không cần thiết (không có hành động trước đó)'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ finished before you arrived."',
                options: ['had', 'have', 'has', 'was'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She had already leave when I called.',
                    'She had already left when I called.',
                    'She had already leaving when I called.',
                    'She has already left when I called.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ studied before moving."',
                options: ['had', 'have', 'has', 'were'],
                correct: 0
            }
        ]
    },
    {
        id: 11,
        title: 'Past Perfect Continuous',
        category: 'tenses',
        description: 'Thì quá khứ hoàn thành tiếp diễn - diễn tả hành động đã xảy ra và kéo dài đến trước một thời điểm trong quá khứ.',
        explanation: 'The Past Perfect Continuous tense emphasizes the duration of an action that was happening before another past action or time.',
        structure: 'Subject + had + been + Verb (-ing) + Object',
        examples: [
            { en: 'I had been studying for 2 hours when you called.', vi: 'Tôi đã học được 2 giờ khi bạn gọi.' },
            { en: 'She had been working here for 3 years before she quit.', vi: 'Cô ấy đã làm việc ở đây được 3 năm trước khi nghỉ.' },
            { en: 'They had been waiting for an hour when the bus arrived.', vi: 'Họ đã đợi được 1 giờ khi xe buýt đến.' },
            { en: 'We had been living in Hanoi for 5 years before moving.', vi: 'Chúng tôi đã sống ở Hà Nội được 5 năm trước khi chuyển đi.' },
            { en: 'He had been reading that book all morning.', vi: 'Anh ấy đã đọc cuốn sách đó cả buổi sáng.' }
        ],
        mistakes: [
            'Quên dùng been giữa had và động từ -ing',
            'Nhầm lẫn với Past Perfect',
            'Dùng với động từ chỉ trạng thái'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ studying for 2 hours when you called."',
                options: ['had been', 'have been', 'was', 'were'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She had working here for 3 years.',
                    'She had been working here for 3 years.',
                    'She had been work here for 3 years.',
                    'She has been working here for 3 years.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ waiting for an hour."',
                options: ['had been', 'have been', 'were', 'was'],
                correct: 0
            }
        ]
    },
    {
        id: 12,
        title: 'Future Simple (will)',
        category: 'tenses',
        description: 'Thì tương lai đơn - diễn tả hành động sẽ xảy ra trong tương lai, quyết định tức thời, hoặc dự đoán.',
        explanation: 'The Future Simple tense (will) is used for predictions, spontaneous decisions, promises, and future facts.',
        structure: 'Subject + will + Verb (base form) + Object',
        examples: [
            { en: 'I will go to school tomorrow.', vi: 'Tôi sẽ đi học ngày mai.' },
            { en: 'She will finish her homework tonight.', vi: 'Cô ấy sẽ hoàn thành bài tập tối nay.' },
            { en: 'They will visit Paris next month.', vi: 'Họ sẽ thăm Paris tháng tới.' },
            { en: 'We will help you with your project.', vi: 'Chúng tôi sẽ giúp bạn với dự án.' },
            { en: 'It will rain tomorrow.', vi: 'Ngày mai trời sẽ mưa.' }
        ],
        mistakes: [
            'Thêm -s, -ed, hoặc -ing vào động từ sau will',
            'Dùng will với if trong câu điều kiện loại 1',
            'Nhầm lẫn will và going to'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ go to school tomorrow."',
                options: ['will', 'will goes', 'will going', 'will went'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She will finishes her homework.',
                    'She will finish her homework.',
                    'She will finishing her homework.',
                    'She will finished her homework.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ visit Paris next month."',
                options: ['will', 'will to', 'will going', 'will goes'],
                correct: 0
            }
        ]
    },
    {
        id: 13,
        title: 'Future Continuous',
        category: 'tenses',
        description: 'Thì tương lai tiếp diễn - diễn tả hành động sẽ đang xảy ra tại một thời điểm cụ thể trong tương lai.',
        explanation: 'The Future Continuous tense describes actions that will be in progress at a specific time in the future.',
        structure: 'Subject + will + be + Verb (-ing) + Object',
        examples: [
            { en: 'I will be studying at 8 PM tomorrow.', vi: 'Tôi sẽ đang học lúc 8 giờ tối ngày mai.' },
            { en: 'She will be working when you arrive.', vi: 'Cô ấy sẽ đang làm việc khi bạn đến.' },
            { en: 'They will be playing football this time tomorrow.', vi: 'Họ sẽ đang chơi bóng đá giờ này ngày mai.' },
            { en: 'We will be traveling to Japan next week.', vi: 'Chúng tôi sẽ đang đi du lịch Nhật Bản tuần tới.' },
            { en: 'He will be reading a book at that time.', vi: 'Anh ấy sẽ đang đọc sách lúc đó.' }
        ],
        mistakes: [
            'Quên dùng be giữa will và động từ -ing',
            'Thêm -s, -ed vào động từ',
            'Nhầm lẫn với Future Simple'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ studying at 8 PM tomorrow."',
                options: ['will be', 'will', 'will being', 'will is'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She will working when you arrive.',
                    'She will be working when you arrive.',
                    'She will be work when you arrive.',
                    'She will working when you arrive.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ playing this time tomorrow."',
                options: ['will be', 'will', 'will being', 'will is'],
                correct: 0
            }
        ]
    },
    {
        id: 14,
        title: 'Future Perfect',
        category: 'tenses',
        description: 'Thì tương lai hoàn thành - diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai.',
        explanation: 'The Future Perfect tense is used to show that an action will be completed before a specific time in the future.',
        structure: 'Subject + will + have + Past Participle + Object',
        examples: [
            { en: 'I will have finished my homework by 8 PM.', vi: 'Tôi sẽ hoàn thành bài tập trước 8 giờ tối.' },
            { en: 'She will have graduated by next year.', vi: 'Cô ấy sẽ tốt nghiệp trước năm tới.' },
            { en: 'They will have arrived by the time you get there.', vi: 'Họ sẽ đến trước khi bạn đến đó.' },
            { en: 'We will have completed the project by Friday.', vi: 'Chúng tôi sẽ hoàn thành dự án trước thứ Sáu.' },
            { en: 'He will have lived here for 10 years by 2025.', vi: 'Anh ấy sẽ sống ở đây được 10 năm trước năm 2025.' }
        ],
        mistakes: [
            'Quên dùng have giữa will và past participle',
            'Dùng động từ nguyên mẫu thay vì past participle',
            'Nhầm lẫn với Future Simple'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ finished by 8 PM."',
                options: ['will have', 'will', 'will has', 'will having'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She will have graduate by next year.',
                    'She will have graduated by next year.',
                    'She will have graduating by next year.',
                    'She will graduate by next year.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ arrived by the time you get there."',
                options: ['will have', 'will', 'will has', 'will having'],
                correct: 0
            }
        ]
    },
    {
        id: 15,
        title: 'Future Perfect Continuous',
        category: 'tenses',
        description: 'Thì tương lai hoàn thành tiếp diễn - diễn tả hành động sẽ đang xảy ra và kéo dài đến một thời điểm trong tương lai.',
        explanation: 'The Future Perfect Continuous tense emphasizes the duration of an action that will be happening up to a specific time in the future.',
        structure: 'Subject + will + have + been + Verb (-ing) + Object',
        examples: [
            { en: 'I will have been studying for 3 hours by 10 PM.', vi: 'Tôi sẽ đã học được 3 giờ trước 10 giờ tối.' },
            { en: 'She will have been working here for 5 years by next month.', vi: 'Cô ấy sẽ đã làm việc ở đây được 5 năm trước tháng tới.' },
            { en: 'They will have been waiting for 2 hours when the bus arrives.', vi: 'Họ sẽ đã đợi được 2 giờ khi xe buýt đến.' },
            { en: 'We will have been living in Hanoi for 10 years by 2025.', vi: 'Chúng tôi sẽ đã sống ở Hà Nội được 10 năm trước năm 2025.' },
            { en: 'He will have been reading that book for a week by tomorrow.', vi: 'Anh ấy sẽ đã đọc cuốn sách đó được 1 tuần trước ngày mai.' }
        ],
        mistakes: [
            'Quên dùng been giữa have và động từ -ing',
            'Quên dùng have',
            'Dùng với động từ chỉ trạng thái'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ studying for 3 hours by 10 PM."',
                options: ['will have been', 'will have', 'will be', 'will'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'She will have working here for 5 years.',
                    'She will have been working here for 5 years.',
                    'She will have been work here for 5 years.',
                    'She will have working here for 5 years.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "They _____ waiting for 2 hours when the bus arrives."',
                options: ['will have been', 'will have', 'will be', 'will'],
                correct: 0
            }
        ]
    },
    // ========== CẤU TRÚC CÂU ==========
    {
        id: 16,
        title: 'Câu đơn (Simple Sentences)',
        category: 'sentence-structure',
        description: 'Câu đơn là câu chỉ có một mệnh đề độc lập, chứa một chủ ngữ và một vị ngữ.',
        explanation: 'A simple sentence contains one independent clause with a subject and a predicate. It expresses a complete thought.',
        structure: 'Subject + Verb + (Object/Complement)\n\nExamples:\n- Subject + Verb: "Birds fly."\n- Subject + Verb + Object: "I love English."\n- Subject + Verb + Complement: "She is a teacher."',
        examples: [
            { en: 'Birds fly.', vi: 'Chim bay.' },
            { en: 'I love English.', vi: 'Tôi yêu tiếng Anh.' },
            { en: 'She is a teacher.', vi: 'Cô ấy là giáo viên.' },
            { en: 'The sun shines brightly.', vi: 'Mặt trời chiếu sáng rực rỡ.' },
            { en: 'They play football every weekend.', vi: 'Họ chơi bóng đá mỗi cuối tuần.' }
        ],
        mistakes: [
            'Thiếu chủ ngữ hoặc vị ngữ',
            'Dùng nhiều động từ chính trong một câu đơn',
            'Nhầm lẫn với câu phức'
        ],
        quiz: [
            {
                question: 'Which is a simple sentence?',
                options: [
                    'I study English and I love it.',
                    'I study English.',
                    'I study English because I love it.',
                    'I study English, and I love it.'
                ],
                correct: 1
            },
            {
                question: 'What is the subject in "The cat sleeps."?',
                options: ['The cat', 'sleeps', 'The', 'cat'],
                correct: 0
            },
            {
                question: 'Which sentence is NOT a simple sentence?',
                options: [
                    'She reads books.',
                    'They play football.',
                    'I study English and I love it.',
                    'He works hard.'
                ],
                correct: 2
            }
        ]
    },
    {
        id: 17,
        title: 'Câu ghép (Compound Sentences)',
        category: 'sentence-structure',
        description: 'Câu ghép là câu có ít nhất hai mệnh đề độc lập được nối với nhau bằng liên từ (and, but, or, so).',
        explanation: 'A compound sentence contains two or more independent clauses joined by coordinating conjunctions (and, but, or, so, for, yet, nor).',
        structure: 'Independent Clause + Coordinating Conjunction + Independent Clause\n\nCoordinating conjunctions: and, but, or, so, for, yet, nor',
        examples: [
            { en: 'I study English, and I love it.', vi: 'Tôi học tiếng Anh, và tôi yêu nó.' },
            { en: 'She wanted to go, but it was raining.', vi: 'Cô ấy muốn đi, nhưng trời đang mưa.' },
            { en: 'You can study now, or you can study later.', vi: 'Bạn có thể học bây giờ, hoặc bạn có thể học sau.' },
            { en: 'He was tired, so he went to bed early.', vi: 'Anh ấy mệt, nên anh ấy đi ngủ sớm.' },
            { en: 'I like coffee, but my friend prefers tea.', vi: 'Tôi thích cà phê, nhưng bạn tôi thích trà hơn.' }
        ],
        mistakes: [
            'Thiếu dấu phẩy trước liên từ',
            'Dùng liên từ phụ thuộc (because, although) thay vì liên từ kết hợp',
            'Tạo câu run-on (thiếu liên từ)'
        ],
        quiz: [
            {
                question: 'Which is a compound sentence?',
                options: [
                    'I study English.',
                    'I study English, and I love it.',
                    'I study English because I love it.',
                    'Studying English, I love it.'
                ],
                correct: 1
            },
            {
                question: 'What conjunction is used in "I was tired, so I went to bed."?',
                options: ['and', 'but', 'so', 'or'],
                correct: 2
            },
            {
                question: 'Which sentence needs a comma?',
                options: [
                    'I study English and I love it.',
                    'I study English, and I love it.',
                    'I study English because I love it.',
                    'I study English.'
                ],
                correct: 0
            }
        ]
    },
    {
        id: 18,
        title: 'Câu phức (Complex Sentences)',
        category: 'sentence-structure',
        description: 'Câu phức là câu có một mệnh đề độc lập và ít nhất một mệnh đề phụ thuộc được nối bằng liên từ phụ thuộc.',
        explanation: 'A complex sentence contains one independent clause and at least one dependent clause joined by subordinating conjunctions (because, although, when, if, etc.).',
        structure: 'Independent Clause + Subordinating Conjunction + Dependent Clause\n\nOR\n\nSubordinating Conjunction + Dependent Clause + , + Independent Clause\n\nSubordinating conjunctions: because, although, when, if, while, since, until, etc.',
        examples: [
            { en: 'I study English because I love it.', vi: 'Tôi học tiếng Anh vì tôi yêu nó.' },
            { en: 'Although it was raining, we went out.', vi: 'Mặc dù trời đang mưa, chúng tôi vẫn đi ra ngoài.' },
            { en: 'When you arrive, call me.', vi: 'Khi bạn đến, gọi cho tôi.' },
            { en: 'She will pass the exam if she studies hard.', vi: 'Cô ấy sẽ đỗ kỳ thi nếu cô ấy học chăm chỉ.' },
            { en: 'I was reading while he was cooking.', vi: 'Tôi đang đọc trong khi anh ấy đang nấu ăn.' }
        ],
        mistakes: [
            'Thiếu dấu phẩy khi mệnh đề phụ đứng trước mệnh đề chính',
            'Dùng liên từ kết hợp thay vì liên từ phụ thuộc',
            'Tạo câu không hoàn chỉnh (fragment)'
        ],
        quiz: [
            {
                question: 'Which is a complex sentence?',
                options: [
                    'I study English, and I love it.',
                    'I study English because I love it.',
                    'I study English. I love it.',
                    'I study English and love it.'
                ],
                correct: 1
            },
            {
                question: 'What is the dependent clause in "I study English because I love it."?',
                options: ['I study English', 'because I love it', 'I love it', 'because'],
                correct: 1
            },
            {
                question: 'Which sentence needs a comma?',
                options: [
                    'I study English because I love it.',
                    'Because I love it I study English.',
                    'Because I love it, I study English.',
                    'I study English, because I love it.'
                ],
                correct: 1
            }
        ]
    },
    // ========== MODAL VERBS ==========
    {
        id: 19,
        title: 'Modal Verbs',
        category: 'modal-verbs',
        description: 'Động từ khuyết thiếu (Modal Verbs) - dùng để diễn tả khả năng, sự cho phép, nghĩa vụ, khả năng, và các ý nghĩa khác.',
        explanation: 'Modal verbs are auxiliary verbs that express ability, permission, obligation, possibility, and other meanings. They are followed by the base form of the verb.',
        structure: 'Subject + Modal Verb + Verb (base form) + Object\n\nModal verbs: can, could, may, might, must, shall, should, will, would\n\nNote: Modal verbs do not change form (no -s, -ed, -ing)',
        examples: [
            { en: 'I can speak English.', vi: 'Tôi có thể nói tiếng Anh.' },
            { en: 'You must finish your homework.', vi: 'Bạn phải hoàn thành bài tập về nhà.' },
            { en: 'She should study harder.', vi: 'Cô ấy nên học chăm chỉ hơn.' },
            { en: 'We may go to the party.', vi: 'Chúng tôi có thể đi dự tiệc.' },
            { en: 'They might arrive late.', vi: 'Họ có thể đến muộn.' },
            { en: 'He would like some coffee.', vi: 'Anh ấy muốn một chút cà phê.' },
            { en: 'You could help me with this.', vi: 'Bạn có thể giúp tôi với việc này.' }
        ],
        mistakes: [
            'Thêm -s, -ed, hoặc -ing vào modal verb',
            'Dùng to sau modal verb (can to go → sai, can go → đúng)',
            'Dùng hai modal verbs cùng lúc (can must → sai)',
            'Nhầm lẫn nghĩa của các modal verbs'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "I _____ speak English."',
                options: ['can', 'can to', 'can speaking', 'can speaks'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'You must to finish your homework.',
                    'You must finish your homework.',
                    'You must finishing your homework.',
                    'You must finished your homework.'
                ],
                correct: 1
            },
            {
                question: 'What does "must" express?',
                options: ['ability', 'permission', 'obligation', 'possibility'],
                correct: 2
            }
        ]
    },
    // ========== CÂU ĐIỀU KIỆN ==========
    {
        id: 20,
        title: 'Conditional Type 2',
        category: 'conditionals',
        description: 'Câu điều kiện loại 2 - diễn tả điều kiện không có thật ở hiện tại, giả định về tương lai hoặc hiện tại.',
        explanation: 'Conditional Type 2 (Second Conditional) is used to talk about unreal or hypothetical situations in the present or future.',
        structure: 'If + Past Simple, + would/could/might + Verb (base form)',
        examples: [
            { en: 'If I were rich, I would travel the world.', vi: 'Nếu tôi giàu, tôi sẽ đi du lịch thế giới.' },
            { en: 'If you studied harder, you would pass the exam.', vi: 'Nếu bạn học chăm chỉ hơn, bạn sẽ đỗ kỳ thi.' },
            { en: 'If she had time, she would help you.', vi: 'Nếu cô ấy có thời gian, cô ấy sẽ giúp bạn.' },
            { en: 'If we won the lottery, we could buy a house.', vi: 'Nếu chúng tôi trúng số, chúng tôi có thể mua nhà.' },
            { en: 'If he were here, he might solve this problem.', vi: 'Nếu anh ấy ở đây, anh ấy có thể giải quyết vấn đề này.' }
        ],
        mistakes: [
            'Dùng was thay vì were với I/he/she/it (trong câu điều kiện loại 2)',
            'Dùng would trong mệnh đề if',
            'Nhầm lẫn với Conditional Type 1 hoặc Type 3'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "If I _____ rich, I would travel."',
                options: ['was', 'were', 'am', 'is'],
                correct: 1
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'If you would study, you would pass.',
                    'If you studied, you would pass.',
                    'If you study, you would pass.',
                    'If you studied, you pass.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "If she _____ time, she would help you."',
                options: ['has', 'had', 'have', 'having'],
                correct: 1
            }
        ]
    },
    {
        id: 21,
        title: 'Conditional Type 3',
        category: 'conditionals',
        description: 'Câu điều kiện loại 3 - diễn tả điều kiện không có thật trong quá khứ, thể hiện sự hối tiếc hoặc giả định về quá khứ.',
        explanation: 'Conditional Type 3 (Third Conditional) is used to talk about unreal situations in the past and their hypothetical results.',
        structure: 'If + Past Perfect, + would/could/might + have + Past Participle',
        examples: [
            { en: 'If I had studied harder, I would have passed the exam.', vi: 'Nếu tôi đã học chăm chỉ hơn, tôi đã đỗ kỳ thi.' },
            { en: 'If you had arrived earlier, you would have met her.', vi: 'Nếu bạn đã đến sớm hơn, bạn đã gặp cô ấy.' },
            { en: 'If she had known, she would have helped you.', vi: 'Nếu cô ấy đã biết, cô ấy đã giúp bạn.' },
            { en: 'If we had left on time, we could have caught the train.', vi: 'Nếu chúng tôi đã đi đúng giờ, chúng tôi đã có thể bắt được tàu.' },
            { en: 'If he had called me, I might have answered.', vi: 'Nếu anh ấy đã gọi cho tôi, tôi có thể đã trả lời.' }
        ],
        mistakes: [
            'Dùng Past Simple thay vì Past Perfect trong mệnh đề if',
            'Quên dùng have + past participle sau would/could/might',
            'Nhầm lẫn với Conditional Type 2'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "If I _____ studied harder, I would have passed."',
                options: ['had', 'have', 'has', 'was'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'If you had arrived earlier, you would meet her.',
                    'If you had arrived earlier, you would have met her.',
                    'If you arrived earlier, you would have met her.',
                    'If you had arrive earlier, you would have met her.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "If she _____ known, she would have helped."',
                options: ['had', 'have', 'has', 'was'],
                correct: 0
            }
        ]
    },
    {
        id: 22,
        title: 'Mixed Conditionals',
        category: 'conditionals',
        description: 'Câu điều kiện hỗn hợp - kết hợp các loại câu điều kiện để diễn tả tình huống phức tạp hơn.',
        explanation: 'Mixed conditionals combine different conditional types to express complex relationships between past and present situations.',
        structure: 'Type 1: If + Past Simple, + would + Verb (base form)\nType 2: If + Past Perfect, + would + Verb (base form)\n\nThese show how past actions affect present situations, or how present situations would have different past results.',
        examples: [
            { en: 'If I had studied harder (past), I would be a doctor now (present).', vi: 'Nếu tôi đã học chăm chỉ hơn (quá khứ), tôi sẽ là bác sĩ bây giờ (hiện tại).' },
            { en: 'If you were more careful (present), you wouldn\'t have made that mistake (past).', vi: 'Nếu bạn cẩn thận hơn (hiện tại), bạn đã không mắc lỗi đó (quá khứ).' },
            { en: 'If she had taken that job (past), she would be living in London now (present).', vi: 'Nếu cô ấy đã nhận công việc đó (quá khứ), cô ấy sẽ đang sống ở London bây giờ (hiện tại).' },
            { en: 'If I were you (present), I would have accepted that offer (past).', vi: 'Nếu tôi là bạn (hiện tại), tôi đã chấp nhận lời đề nghị đó (quá khứ).' }
        ],
        mistakes: [
            'Nhầm lẫn thứ tự thời gian giữa mệnh đề if và mệnh đề chính',
            'Không nhất quán về thì giữa hai mệnh đề',
            'Dùng sai cấu trúc của từng loại câu điều kiện'
        ],
        quiz: [
            {
                question: 'Which is a mixed conditional?',
                options: [
                    'If I study, I will pass.',
                    'If I had studied, I would have passed.',
                    'If I had studied, I would be a doctor now.',
                    'If I studied, I would pass.'
                ],
                correct: 2
            },
            {
                question: 'What does "If I had studied, I would be a doctor now" express?',
                options: [
                    'Past action → Past result',
                    'Past action → Present result',
                    'Present action → Present result',
                    'Present action → Past result'
                ],
                correct: 1
            },
            {
                question: 'Complete: "If you were more careful, you _____ made that mistake."',
                options: ['wouldn\'t have', 'wouldn\'t', 'won\'t have', 'don\'t'],
                correct: 0
            }
        ]
    },
    // ========== CÂU BỊ ĐỘNG ==========
    {
        id: 23,
        title: 'Passive Voice - Present Tenses',
        category: 'passive',
        description: 'Câu bị động ở các thì hiện tại - diễn tả hành động bị tác động ở hiện tại.',
        explanation: 'Passive voice in present tenses (Simple, Continuous, Perfect) is used when the focus is on the action or the object, not the doer.',
        structure: 'Present Simple: Subject + am/is/are + Past Participle\nPresent Continuous: Subject + am/is/are + being + Past Participle\nPresent Perfect: Subject + have/has + been + Past Participle',
        examples: [
            { en: 'English is spoken all over the world. (Present Simple)', vi: 'Tiếng Anh được nói trên toàn thế giới.' },
            { en: 'The car is being repaired. (Present Continuous)', vi: 'Chiếc xe đang được sửa.' },
            { en: 'The work has been completed. (Present Perfect)', vi: 'Công việc đã được hoàn thành.' },
            { en: 'The house is being built. (Present Continuous)', vi: 'Ngôi nhà đang được xây.' },
            { en: 'Many books have been written about this topic. (Present Perfect)', vi: 'Nhiều cuốn sách đã được viết về chủ đề này.' }
        ],
        mistakes: [
            'Quên dùng be (am/is/are) trong Present Simple passive',
            'Quên dùng being trong Present Continuous passive',
            'Quên dùng been trong Present Perfect passive'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "English _____ spoken all over the world."',
                options: ['is', 'are', 'be', 'being'],
                correct: 0
            },
            {
                question: 'Which sentence is in Present Continuous passive?',
                options: [
                    'The car is repaired.',
                    'The car is being repaired.',
                    'The car has been repaired.',
                    'The car was repaired.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "The work _____ been completed."',
                options: ['has', 'have', 'is', 'are'],
                correct: 0
            }
        ]
    },
    {
        id: 24,
        title: 'Passive Voice - Past Tenses',
        category: 'passive',
        description: 'Câu bị động ở các thì quá khứ - diễn tả hành động bị tác động trong quá khứ.',
        explanation: 'Passive voice in past tenses (Simple, Continuous, Perfect) emphasizes actions that happened to the subject in the past.',
        structure: 'Past Simple: Subject + was/were + Past Participle\nPast Continuous: Subject + was/were + being + Past Participle\nPast Perfect: Subject + had + been + Past Participle',
        examples: [
            { en: 'The house was built in 2020. (Past Simple)', vi: 'Ngôi nhà được xây vào năm 2020.' },
            { en: 'The car was being repaired when I arrived. (Past Continuous)', vi: 'Chiếc xe đang được sửa khi tôi đến.' },
            { en: 'The work had been completed before you arrived. (Past Perfect)', vi: 'Công việc đã được hoàn thành trước khi bạn đến.' },
            { en: 'The letter was sent yesterday. (Past Simple)', vi: 'Lá thư đã được gửi hôm qua.' },
            { en: 'The problem had been solved by then. (Past Perfect)', vi: 'Vấn đề đã được giải quyết trước đó.' }
        ],
        mistakes: [
            'Nhầm lẫn was/were trong Past Simple passive',
            'Quên dùng being trong Past Continuous passive',
            'Quên dùng been trong Past Perfect passive'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "The house _____ built in 2020."',
                options: ['was', 'were', 'is', 'are'],
                correct: 0
            },
            {
                question: 'Which sentence is in Past Continuous passive?',
                options: [
                    'The car was repaired.',
                    'The car was being repaired.',
                    'The car had been repaired.',
                    'The car is being repaired.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "The work _____ been completed before you arrived."',
                options: ['had', 'has', 'have', 'was'],
                correct: 0
            }
        ]
    },
    {
        id: 25,
        title: 'Passive Voice - Future Tenses',
        category: 'passive',
        description: 'Câu bị động ở các thì tương lai - diễn tả hành động sẽ bị tác động trong tương lai.',
        explanation: 'Passive voice in future tenses emphasizes actions that will happen to the subject in the future.',
        structure: 'Future Simple: Subject + will + be + Past Participle\nFuture Continuous: Subject + will + be + being + Past Participle\nFuture Perfect: Subject + will + have + been + Past Participle',
        examples: [
            { en: 'The work will be completed tomorrow. (Future Simple)', vi: 'Công việc sẽ được hoàn thành ngày mai.' },
            { en: 'The house will be being built next month. (Future Continuous)', vi: 'Ngôi nhà sẽ đang được xây tháng tới.' },
            { en: 'The project will have been finished by Friday. (Future Perfect)', vi: 'Dự án sẽ đã được hoàn thành trước thứ Sáu.' },
            { en: 'The letter will be sent next week. (Future Simple)', vi: 'Lá thư sẽ được gửi tuần tới.' },
            { en: 'All tasks will have been completed by the end of the day. (Future Perfect)', vi: 'Tất cả nhiệm vụ sẽ đã được hoàn thành trước cuối ngày.' }
        ],
        mistakes: [
            'Quên dùng be sau will trong Future Simple passive',
            'Quên dùng being trong Future Continuous passive',
            'Quên dùng been trong Future Perfect passive'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "The work _____ be completed tomorrow."',
                options: ['will', 'will to', 'will going', 'will is'],
                correct: 0
            },
            {
                question: 'Which sentence is in Future Perfect passive?',
                options: [
                    'The project will be finished.',
                    'The project will be being finished.',
                    'The project will have been finished.',
                    'The project will finish.'
                ],
                correct: 2
            },
            {
                question: 'Complete: "The project _____ have been finished by Friday."',
                options: ['will', 'will to', 'will going', 'will is'],
                correct: 0
            }
        ]
    },
    {
        id: 26,
        title: 'Passive Voice with Modal Verbs',
        category: 'passive',
        description: 'Câu bị động với động từ khuyết thiếu - diễn tả khả năng, nghĩa vụ, sự cho phép ở dạng bị động.',
        explanation: 'Passive voice with modal verbs combines the meaning of modals (ability, obligation, permission) with passive voice structure.',
        structure: 'Subject + Modal Verb + be + Past Participle\n\nModal verbs: can, could, may, might, must, should, will, would',
        examples: [
            { en: 'The work can be done by tomorrow.', vi: 'Công việc có thể được làm xong trước ngày mai.' },
            { en: 'This problem must be solved immediately.', vi: 'Vấn đề này phải được giải quyết ngay lập tức.' },
            { en: 'The door should be locked at night.', vi: 'Cửa nên được khóa vào ban đêm.' },
            { en: 'The report might be finished today.', vi: 'Báo cáo có thể được hoàn thành hôm nay.' },
            { en: 'The car could be repaired by a mechanic.', vi: 'Chiếc xe có thể được sửa bởi thợ máy.' }
        ],
        mistakes: [
            'Dùng to be thay vì be sau modal verb',
            'Quên dùng be giữa modal verb và past participle',
            'Dùng past participle sai'
        ],
        quiz: [
            {
                question: 'Choose the correct form: "The work _____ be done by tomorrow."',
                options: ['can', 'can to', 'can being', 'can is'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'This problem must to be solved.',
                    'This problem must be solved.',
                    'This problem must being solved.',
                    'This problem must is solved.'
                ],
                correct: 1
            },
            {
                question: 'Complete: "The door _____ be locked at night."',
                options: ['should', 'should to', 'should being', 'should is'],
                correct: 0
            }
        ]
    },
    // ========== MỆNH ĐỀ QUAN HỆ ==========
    {
        id: 27,
        title: 'Relative Clauses - whom/whose',
        category: 'relative-clauses',
        description: 'Mệnh đề quan hệ với whom và whose - whom dùng cho tân ngữ của người, whose dùng để chỉ sở hữu.',
        explanation: 'Use "whom" for the object of a verb or preposition when referring to people. Use "whose" to show possession for both people and things.',
        structure: 'Noun (person) + whom + Subject + Verb\nNoun + whose + Noun + Verb\n\nNote: "whom" is formal; "who" or "that" is often used in informal English.',
        examples: [
            { en: 'The man whom I met yesterday is a doctor.', vi: 'Người đàn ông mà tôi gặp hôm qua là bác sĩ.' },
            { en: 'The woman whose car was stolen called the police.', vi: 'Người phụ nữ có xe bị mất đã gọi cảnh sát.' },
            { en: 'The student whom the teacher praised is very smart.', vi: 'Học sinh mà giáo viên khen ngợi rất thông minh.' },
            { en: 'The company whose products are popular is expanding.', vi: 'Công ty có sản phẩm phổ biến đang mở rộng.' },
            { en: 'The person to whom I spoke was very helpful.', vi: 'Người mà tôi nói chuyện rất hữu ích.' }
        ],
        mistakes: [
            'Dùng who thay vì whom khi làm tân ngữ (trong văn phong trang trọng)',
            'Dùng whose sai (whose + noun, không phải whose + verb)',
            'Thêm đại từ nhân xưng không cần thiết sau whom'
        ],
        quiz: [
            {
                question: 'Choose the correct pronoun: "The man _____ I met is a doctor."',
                options: ['who', 'whom', 'whose', 'which'],
                correct: 1
            },
            {
                question: 'Which sentence uses "whose" correctly?',
                options: [
                    'The woman whose car was stolen.',
                    'The woman whose was stolen car.',
                    'The woman whose stolen car.',
                    'The woman whose car stolen.'
                ],
                correct: 0
            },
            {
                question: 'Complete: "The student _____ the teacher praised is smart."',
                options: ['who', 'whom', 'whose', 'which'],
                correct: 1
            }
        ]
    },
    {
        id: 28,
        title: 'Relative Clauses - where/when',
        category: 'relative-clauses',
        description: 'Mệnh đề quan hệ với where và when - where dùng cho địa điểm, when dùng cho thời gian.',
        explanation: 'Use "where" to refer to places and "when" to refer to times. They replace "in which", "at which", "on which", etc.',
        structure: 'Noun (place) + where + Subject + Verb\nNoun (time) + when + Subject + Verb',
        examples: [
            { en: 'This is the house where I was born.', vi: 'Đây là ngôi nhà nơi tôi được sinh ra.' },
            { en: 'I remember the day when we first met.', vi: 'Tôi nhớ ngày chúng ta lần đầu gặp nhau.' },
            { en: 'The school where I studied is very famous.', vi: 'Trường học nơi tôi học rất nổi tiếng.' },
            { en: 'That was the year when I graduated.', vi: 'Đó là năm tôi tốt nghiệp.' },
            { en: 'The restaurant where we had dinner was excellent.', vi: 'Nhà hàng nơi chúng tôi ăn tối rất tuyệt vời.' }
        ],
        mistakes: [
            'Dùng which/that thay vì where cho địa điểm',
            'Dùng which/that thay vì when cho thời gian',
            'Thêm giới từ không cần thiết (the house where in I was born → sai)'
        ],
        quiz: [
            {
                question: 'Choose the correct pronoun: "This is the house _____ I was born."',
                options: ['where', 'which', 'that', 'who'],
                correct: 0
            },
            {
                question: 'Which sentence is correct?',
                options: [
                    'I remember the day when we first met.',
                    'I remember the day which we first met.',
                    'I remember the day where we first met.',
                    'I remember the day who we first met.'
                ],
                correct: 0
            },
            {
                question: 'Complete: "The school _____ I studied is famous."',
                options: ['where', 'when', 'which', 'who'],
                correct: 0
            }
        ]
    },
    {
        id: 29,
        title: 'Defining vs Non-defining Relative Clauses',
        category: 'relative-clauses',
        description: 'Mệnh đề quan hệ xác định và không xác định - mệnh đề xác định cần thiết cho nghĩa câu, mệnh đề không xác định chỉ bổ sung thông tin.',
        explanation: 'Defining relative clauses are essential to the meaning of the sentence (no commas). Non-defining relative clauses add extra information (use commas).',
        structure: 'Defining: Noun + Relative Pronoun + Verb (no commas)\nNon-defining: Noun, + Relative Pronoun + Verb, (with commas)\n\nNote: "that" cannot be used in non-defining clauses.',
        examples: [
            { en: 'The students who study hard will succeed. (Defining)', vi: 'Những học sinh học chăm chỉ sẽ thành công.' },
            { en: 'My brother, who lives in London, is a doctor. (Non-defining)', vi: 'Anh trai tôi, người sống ở London, là bác sĩ.' },
            { en: 'The book that I bought is interesting. (Defining)', vi: 'Cuốn sách tôi mua rất thú vị.' },
            { en: 'Paris, which is the capital of France, is beautiful. (Non-defining)', vi: 'Paris, thủ đô của Pháp, rất đẹp.' },
            { en: 'The car which was stolen was red. (Defining)', vi: 'Chiếc xe bị mất có màu đỏ.' }
        ],
        mistakes: [
            'Thiếu dấu phẩy trong mệnh đề không xác định',
            'Dùng that trong mệnh đề không xác định',
            'Nhầm lẫn khi nào cần mệnh đề xác định và không xác định'
        ],
        quiz: [
            {
                question: 'Which sentence has a non-defining clause?',
                options: [
                    'The students who study hard will succeed.',
                    'My brother, who lives in London, is a doctor.',
                    'The book that I bought is interesting.',
                    'The car which was stolen was red.'
                ],
                correct: 1
            },
            {
                question: 'Which pronoun CANNOT be used in non-defining clauses?',
                options: ['who', 'which', 'that', 'where'],
                correct: 2
            },
            {
                question: 'Which sentence needs commas?',
                options: [
                    'The students who study hard will succeed.',
                    'My brother who lives in London is a doctor.',
                    'The book that I bought is interesting.',
                    'The car which was stolen was red.'
                ],
                correct: 1
            }
        ]
    },
    {
        id: 30,
        title: 'Reduced Relative Clauses',
        category: 'relative-clauses',
        description: 'Mệnh đề quan hệ rút gọn - bỏ đại từ quan hệ và động từ be để tạo câu ngắn gọn hơn.',
        explanation: 'Relative clauses can be reduced by omitting the relative pronoun and the verb "be" when the clause is in passive voice or uses "be + adjective/ing".',
        structure: 'Full: The book which was written by John is interesting.\nReduced: The book written by John is interesting.\n\nFull: The students who are studying will pass.\nReduced: The students studying will pass.',
        examples: [
            { en: 'The book written by John is interesting. (The book which was written...)', vi: 'Cuốn sách được viết bởi John rất thú vị.' },
            { en: 'The students studying hard will succeed. (The students who are studying...)', vi: 'Những học sinh đang học chăm chỉ sẽ thành công.' },
            { en: 'The car parked outside is mine. (The car which is parked...)', vi: 'Chiếc xe đậu bên ngoài là của tôi.' },
            { en: 'Anyone interested in English should join. (Anyone who is interested...)', vi: 'Bất kỳ ai quan tâm đến tiếng Anh nên tham gia.' },
            { en: 'The problem discussed yesterday was solved. (The problem which was discussed...)', vi: 'Vấn đề được thảo luận hôm qua đã được giải quyết.' }
        ],
        mistakes: [
            'Rút gọn mệnh đề không xác định (chỉ rút gọn mệnh đề xác định)',
            'Rút gọn khi không có be + past participle/ing',
            'Nhầm lẫn giữa active và passive trong mệnh đề rút gọn'
        ],
        quiz: [
            {
                question: 'Which is the reduced form of "The book which was written by John"?',
                options: [
                    'The book written by John',
                    'The book writing by John',
                    'The book write by John',
                    'The book which written by John'
                ],
                correct: 0
            },
            {
                question: 'Which sentence is correctly reduced?',
                options: [
                    'The students studying hard will succeed.',
                    'The students study hard will succeed.',
                    'The students studied hard will succeed.',
                    'The students who studying hard will succeed.'
                ],
                correct: 0
            },
            {
                question: 'Can we reduce "My brother, who lives in London, is a doctor."?',
                options: ['Yes', 'No', 'Sometimes', 'Only in formal English'],
                correct: 1
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

