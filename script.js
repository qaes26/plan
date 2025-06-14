document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    const submitButton = document.getElementById('submit-quiz');
    const resultDiv = document.getElementById('quiz-result');

    // --- إنشاء الورود المتساقطة ---
    const rosesContainer = document.querySelector('.falling-roses-background');
    const numberOfRoses = 15; // يمكنك زيادة أو تقليل هذا العدد

    if (rosesContainer) { // تأكد أن الحاوية موجودة
        for (let i = 0; i < numberOfRoses; i++) {
            let rose = document.createElement('div');
            rose.classList.add('rose');
            // سنقوم بتعيين خصائص left, animation-duration, animation-delay, font-size, color
            // بشكل عشوائي أو محدد في CSS باستخدام :nth-child كما فعلنا
            rosesContainer.appendChild(rose);
        }
    }
    // --- نهاية إنشاء الورود المتساقطة ---


    const questions = [
        // ... أسئلة الامتحان تبقى كما هي من الكود السابق ...
        // قسم: مفهوم وأهمية التنظيم
        {
            question: "1. ما هو جوهر 'مفهوم التنظيم' كما ورد في التلخيص؟",
            options: {
                a: "عملية التخطيط المالي للمؤسسة.",
                b: "تأسيس علاقات ودمج موارد من خلال هيكل رسمي للمهام والسلطات.",
                c: "تسويق منتجات الشركة وزيادة المبيعات.",
                d: "إدارة العلاقات مع العملاء فقط."
            },
            answer: "b"
        },
        {
            question: "2. أي من التالي يعتبر من 'أهمية التنظيم'؟",
            options: {
                a: "يعتبر عملية ثابتة لا تتغير.",
                b: "يساعد على خلق روح التعاون والتضامن بين الأفراد.",
                c: "يركز فقط على تحقيق الأهداف الفردية للموظفين.",
                d: "يقلل من أهمية العمل المنظم."
            },
            answer: "b"
        },
        // قسم: مبادئ التنظيم
        {
            question: "3. مبدأ 'نطاق الإشراف' يتعلق بـ:",
            options: {
                a: "نوع السلطة التي يمتلكها المدير.",
                b: "عدد المرؤوسين الذين يمكن للمدير الإشراف عليهم بكفاءة.",
                c: "المسؤوليات المالية للمدير.",
                d: "الوقت اللازم لإكمال مهمة معينة."
            },
            answer: "b"
        },
        {
            question: "4. 'المركزية' في التنظيم تعني:",
            options: {
                a: "توزيع السلطة على جميع مستويات المنظمة بالتساوي.",
                b: "تركيز سلطة اتخاذ القرار في المستويات الإدارية العليا.",
                c: "إلغاء الحاجة إلى مديرين.",
                d: "أن كل موظف يتخذ قراراته بشكل مستقل تمامًا."
            },
            answer: "b"
        },
        {
            question: "5. 'تفويض السلطة' يتضمن:",
            options: {
                a: "التخلي الكامل عن المسؤولية.",
                b: "منح الحق في توجيه جهود الآخرين واتخاذ قرارات متعلقة بمهام محددة.",
                c: "زيادة عدد المهام للمدير نفسه.",
                d: "تقليل صلاحيات الموظفين."
            },
            answer: "b"
        },
        {
            question: "6. الهدف الرئيسي من 'التنسيق' هو:",
            options: {
                a: "ضمان عمل الوحدات والأقسام بتناغم لتحقيق الأهداف.",
                b: "زيادة المنافسة بين الموظفين.",
                c: "تقليل عدد الأقسام في المنظمة.",
                d: "إعطاء كل قسم استقلالية تامة."
            },
            answer: "a"
        },
        {
            question: "7. ما الفرق الرئيسي بين 'السلطة' و 'المسؤولية'؟",
            options: {
                a: "لا يوجد فرق، كلاهما يعني نفس الشيء.",
                b: "السلطة هي الحق في إصدار الأوامر، والمسؤولية هي الالتزام بأداء الواجبات.",
                c: "المسؤولية تأتي قبل السلطة دائمًا.",
                d: "السلطة تقتصر على المديرين، والمسؤولية على الموظفين."
            },
            answer: "b"
        },
        // قسم: أنواع التنظيم
        {
            question: "8. 'التنظيم الرسمي' يتميز بـ:",
            options: {
                a: "أنه ينشأ بشكل عفوي بين الموظفين.",
                b: "وجود مستويات محددة للاختصاصات وتسلسل يحقق التنسيق.",
                c: "أنه يعتمد على العلاقات الشخصية فقط.",
                d: "عدم وجود هيكل أو قواعد واضحة."
            },
            answer: "b"
        },
        {
            question: "9. من خصائص 'التنظيم غير الرسمي':",
            options: {
                a: "يتم تخطيطه من قبل الإدارة.",
                b: "ليس له نظام أو هيكل محدد ويحقق إشباع حاجات لا يشبعها التنظيم الرسمي.",
                c: "يكون دائمًا كبير العضوية ويشمل كل الموظفين.",
                d: "يتبع قواعد صارمة مكتوبة."
            },
            answer: "b"
        },
        // قسم: خطوات ونظريات التنظيم
        {
            question: "10. ما هي أول خطوة في 'خطوات التنظيم' المذكورة؟",
            options: {
                a: "تصنيف الأنشطة.",
                b: "تفويض العمل والسلطات.",
                c: "احترام الخطط والأهداف.",
                d: "تصميم مستويات العلاقات."
            },
            answer: "c"
        },
        {
            question: "11. 'النظرية الكلاسيكية' في التنظيم تركز على:",
            options: {
                a: "الجوانب السلوكية للموظفين بشكل أساسي.",
                b: "تقييم العمل، نطاق الإشراف، والتدرج الهرمي.",
                c: "المنظمة كنظام مفتوح يتفاعل مع البيئة.",
                d: "التنظيم غير الرسمي وتأثيره."
            },
            answer: "b"
        },
        {
            question: "12. 'نظرية النظم' تنظر إلى المنظمة على أنها:",
            options: {
                a: "مجموعة من الأفراد المنعزلين.",
                b: "هيكل ثابت لا يتغير.",
                c: "نظام متكامل من أجزاء مترابطة ومتفاعلة تشمل الفرد والتكنولوجيا.",
                d: "تركز فقط على الترتيب الرسمي للعمل."
            },
            answer: "c"
        },
        // قسم: الهيكل التنظيمي وعناصره وأنواعه
        {
            question: "13. 'الهيكل التنظيمي' هو:",
            options: {
                a: "مجموعة القواعد واللوائح التي تعطي الحق في إصدار الأوامر لتحقيق الرشد والكفاءة.",
                b: "العلاقات الاجتماعية بين الموظفين.",
                c: "قائمة رواتب الموظفين.",
                d: "الأهداف الاستراتيجية للشركة فقط."
            },
            answer: "a"
        },
        {
            question: "14. أي من التالي يعتبر من 'عناصر الهيكل التنظيمي'؟",
            options: {
                a: "تحديد مواقع اتخاذ القرار (المركزي واللامركزي).",
                b: "تجاهل التخصص في العمل.",
                c: "عدم تحديد خطوط السلطة.",
                d: "التركيز على الأهداف الفردية فقط."
            },
            answer: "a"
        },
        {
            question: "15. 'الهيكل التنظيمي التنفيذي' يوصف بأنه:",
            options: {
                a: "معقد جدًا ويتطلب العديد من الخبراء.",
                b: "أبسط الأنواع مع خط سلطة واضح وسرعة في اتخاذ القرارات.",
                c: "يركز على التخصص الوظيفي بشكل كبير.",
                d: "يعتمد على فرق عمل مؤقتة."
            },
            answer: "b"
        },
        {
            question: "16. الهيكل الذي يتيح للأفراد الوصول إلى أقصى تخصص وظيفي ممكن هو:",
            options: {
                a: "الهيكل التنفيذي.",
                b: "هيكل المصفوفة.",
                c: "الهيكل الوظيفي.",
                d: "الهيكل الشبكي."
            },
            answer: "c"
        },
        {
            question: "17. 'هياكل المصفوفة' تستخدم غالبًا لـ:",
            options: {
                a: "المهام الروتينية اليومية.",
                b: "إدارة المشاريع حيث يتم تجميع أفراد من أقسام مختلفة.",
                c: "الشركات الصغيرة جدًا ذات الهيكل البسيط.",
                d: "التركيز على الاستشارات الخارجية."
            },
            answer: "b"
        },
        {
            question: "18. 'الهياكل الشبكية' تتميز بأنها:",
            options: {
                a: "تقتصر على العمل داخل حدود بلد واحد.",
                b: "معاصرة وتلائم المنظمات التي تعمل بإطار واسع من العلاقات وقد تمتد خارج حدود البلد.",
                c: "تعتمد على هيكل هرمي صارم.",
                d: "لا تستفيد من التخصص."
            },
            answer: "b"
        },
        // قسم: خصائص الهيكل التنظيمي الفعال والعوامل المؤثرة
        {
            question: "19. من 'خصائص الهيكل التنظيمي' الفعال:",
            options: {
                a: "الإسراف في الموارد.",
                b: "صعوبة التنسيق.",
                c: "الاستفادة من التخصص ومراعاة الظروف البيئية.",
                d: "الجمود وعدم المرونة."
            },
            answer: "c"
        },
        {
            question: "20. 'درجة الرسمية' كعامل مؤثر في التصميم التنظيمي تشير إلى:",
            options: {
                a: "مدى تطور التكنولوجيا.",
                b: "مدى اعتماد المنظمة على القواعد والإجراءات المكتوبة.",
                c: "عدد الموظفين في المنظمة.",
                d: "حجم الأرباح السنوية."
            },
            answer: "b"
        },
        {
            question: "21. 'الاستراتيجية' كعامل مؤثر في التصميم التنظيمي تعني أن:",
            options: {
                a: "استراتيجية المنظمة (نمو، توسع، ابتكار) تؤثر على نوع الهيكل المناسب.",
                b: "الهيكل التنظيمي يحدد استراتيجية المنظمة.",
                c: "الاستراتيجية لا علاقة لها بالتصميم التنظيمي.",
                d: "كل المنظمات يجب أن تتبع نفس الهيكل بغض النظر عن استراتيجيتها."
            },
            answer: "a"
        },
        // قسم: تصميم الوظيفة
        {
            question: "22. 'تصميم الوظيفة' هو نشاط ذهني يتضمن:",
            options: {
                a: "تحديد راتب الموظف فقط.",
                b: "تحديد الأنشطة والواجبات وخصائص الفرد الذي سيؤديها لتحقيق الأهداف.",
                c: "تقييم أداء الموظف السنوي.",
                d: "ترتيب أثاث مكتب الموظف."
            },
            answer: "b"
        },
        {
            question: "23. 'نطاق الوظيفة' يتعلق بـ:",
            options: {
                a: "مدى الحرية الممنوحة للموظف.",
                b: "تنوع واجبات الوظيفة وعددها.",
                c: "العلاقات مع الزملاء والرؤساء.",
                d: "أهمية الوظيفة للمنظمة."
            },
            answer: "b"
        },
        {
            question: "24. 'عمق الوظيفة' يشير إلى:",
            options: {
                a: "عدد المهام في الوظيفة.",
                b: "مدى الحرية التي يتمتع بها الفرد لتحديد واجباته ونتائجها وأسلوب الأداء.",
                c: "أهمية الوظيفة الاقتصادية.",
                d: "تنوع المهارات المطلوبة."
            },
            answer: "b"
        },
        {
            question: "25. من 'أهداف تصميم الوظيفة':",
            options: {
                a: "زيادة تكلفة العمل.",
                b: "تحقيق أهداف اقتصادية وتكنولوجية وسلوكية.",
                c: "تقليل التحدي في العمل.",
                d: "جعل العمل روتينياً ومملاً."
            },
            answer: "b"
        },
        {
            question: "26. أي من التالي يعتبر من 'أهمية تصميم الوظيفة'؟",
            options: {
                a: "لا يؤثر على تحفيز العاملين.",
                b: "يوفر عنصر التحدي و التنويع في استخدام المهارات.",
                c: "يزيد من دوران العمال.",
                d: "لا علاقة له بثقافة المنظمة."
            },
            answer: "b"
        },
        {
            question: "27. 'المدخل السلوكي' لتصميم الوظيفة يشمل:",
            options: {
                a: "قيام العامل بواجبات نمطية متكررة.",
                b: "الاغناء الوظيفي من خلال تدوير العمل، توسيع العمل، وإثراء العمل.",
                c: "الاعتماد على نموذج واحد ثابت لكل المنظمات.",
                d: "التركيز على الجوانب الفنية فقط."
            },
            answer: "b"
        },
        {
            question: "28. 'مدخل إدارة الجودة الشاملة' في تصميم الوظيفة يهدف إلى:",
            options: {
                a: "الحفاظ على الوضع الراهن دون تغيير.",
                b: "إحداث تغييرات إيجابية جذرية لتحسين المكونات وجودة المخرجات بأقل تكلفة.",
                c: "زيادة عدد خطوات العمل.",
                d: "تقليل استقلالية العاملين."
            },
            answer: "b"
        },
        {
            question: "29. 'مدخل إعادة هندسة الأعمال' يهدف إلى:",
            options: {
                a: "جعل المنظمة أقل مرونة.",
                b: "جعل المنظمة أكثر قدرة على خلق التحفيز والحماس والشعور بالحرية والمرونة.",
                c: "تقليل دور التكنولوجيا في العمل.",
                d: "التركيز على الأساليب التقليدية فقط."
            },
            answer: "b"
        },
        {
            question: "30. 'تنوع المهارة' كأحد أبعاد تصميم الوظيفة يعني:",
            options: {
                a: "أن الوظيفة تتطلب مهارة واحدة فقط.",
                b: "مدى تطلب الوظيفة لمجموعة متنوعة من الأنشطة المختلفة التي تتضمن استخدام عدد من المهارات والمواهب المختلفة للفرد.",
                c: "أن الموظف يحدد مهامه بنفسه.",
                d: "أن الوظيفة سهلة جداً ولا تتطلب أي مهارات."
            },
            answer: "b"
        }
    ];

    function buildQuiz() {
        questions.forEach((currentQuestion, questionNumber) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('quiz-question');

            const questionText = document.createElement('p');
            questionText.textContent = currentQuestion.question;
            questionDiv.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('quiz-options');

            for (letter in currentQuestion.options) {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'question' + questionNumber;
                radio.value = letter;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(" " + currentQuestion.options[letter]));
                optionsDiv.appendChild(label);
            }
            questionDiv.appendChild(optionsDiv);
            quizForm.appendChild(questionDiv);
        });
    }

    function showResults() {
        const answerContainers = quizForm.querySelectorAll('.quiz-options');
        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            
            answerContainer.querySelectorAll('label').forEach(label => {
                label.classList.remove('highlight-correct', 'highlight-user-incorrect');
            });

            if (userAnswer === currentQuestion.answer) {
                numCorrect++;
                if(answerContainer.querySelector(selector)) {
                    answerContainer.querySelector(selector).parentElement.classList.add('highlight-correct');
                }
            } else {
                if(answerContainer.querySelector(selector)) {
                    answerContainer.querySelector(selector).parentElement.classList.add('highlight-user-incorrect');
                }
                const correctSelector = `input[value=${currentQuestion.answer}]`;
                if(answerContainer.querySelector(correctSelector)) {
                     answerContainer.querySelector(correctSelector).parentElement.classList.add('highlight-correct');
                }
            }
        });

        resultDiv.innerHTML = `لقد أجبت بشكل صحيح على ${numCorrect} من أصل ${questions.length} سؤال.`;
        if (numCorrect >= questions.length * 0.6) {
            resultDiv.className = 'quiz-result correct-answer';
        } else {
            resultDiv.className = 'quiz-result incorrect-answer';
        }
        submitButton.style.display = 'none';
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});