   // Data for Committees
        const committeesData = [
            { title: "اللجنة العلمية", color: "rgba(245, 185, 79, 0.8)", hasRing: true, content: `<h4 class="text-xl font-semibold text-accent mb-3">🎯 الهدف</h4><p class="mb-4">تهدف اللجنة العلمية باتحاد طلاب هندسة طنطا إلى تنمية مهارات الطلاب في المجالات العلمية والعملية، والمساهمة في تعزيز النشاط العلمي داخل الكلية، بالإضافة إلى المشاركة الفعالة في المسابقات والفعاليات على مستوى الجامعة.</p><h4 class="text-xl font-semibold text-accent mt-4 mb-3">الجمعيات العلمية</h4><p class="mb-4">الجمعيات العلمية هي كيانات طلابية بتربط بين الدراسة النظرية والتطبيق العملي، وبتساعد الطلاب يطوّروا نفسهم من خلال أنشطة، مشاريع، ومسابقات بتنمّي مهاراتهم العلمية والعملية.</p><h4 class="text-xl font-semibold text-accent mt-4 mb-3">📌 الأنشطة</h4><ul class="list-disc list-inside space-y-2"><li><b>الورش الصيفية:</b> مجموعة ورش متنوعة لتنمية مهارات الطلاب خلال الإجازة الصيفية.</li><li><b>المسابقات العلمية.</b></li><li><b>الرحلات العلمية.</b></li><li><b>الندوات العلمية والاجتماعية.</b></li><ul>` },
            { title: "اللجنة الثقافية", color: "rgba(59, 130, 246, 0.8)", hasRing: true, content: `<h4 class="text-xl font-semibold text-accent mb-3">🎯 الهدف</h4><p class="mb-4">لجنة الثقافية مسؤولة عن تنظيم الأنشطة الثقافية داخل الكلية، و مسؤولة عن شرح اللوائح الدراسية ولوائح الأنشطة الطلابية وكذلك لوائح حقوق الطلاب و واجباتهم.</p><h4 class="text-xl font-semibold text-accent mt-4 mb-3">📌 الأنشطة</h4><ul class="list-disc list-inside space-y-2"><li><b>مسؤولة عن تنظيم الانشطة و المسابقات الثقافية</b></li><li><b>مسابقة القرآن الكريم:</b> شارك فيها عدد كبير من الطلاب بهدف تشجيعهم على الحفظ والتدبر.</li></ul>` },
            { title: "لجنة الجوالة والخدمة العامة", color: "rgba(34, 197, 94, 0.8)", hasRing: true, content: `<h4 class="text-xl font-semibold text-accent mb-3">🎯 الهدف</h4><p class="mb-4">تختص بتنظيم أنشطة الحركة الكشفية والإرشادية داخل الكلية، بجانب تنفيذ برامج خدمة المجتمع والبيئة. تهدف إلى المساهمة في تنمية المجتمع وإشراك الطلاب في مشروعات الخدمة العامة القومية.</p><h4 class="text-xl font-semibold text-accent mt-4 mb-3">🛠️ مهام اللجنة</h4><div class="space-y-3"><div><h5 class="font-bold text-lg text-white">🔹 عشيرة الجوالة</h5><p>حركة كشفية واجتماعية تنظم فعاليات وأنشطة مثل المهرجان الكشفي لتوفير الدعم المعنوي والأنشطة التربوية للطلاب.</p></div><div><h5 class="font-bold text-lg text-white">🔹 الخدمات العامة</h5><p>متابعة جودة وأسعار الكافيتيريا، الحفاظ على نظافة المسجد، ومتابعة وصيانة الأعطال التي تؤثر على الطلاب.</p></div></div>` },
            { title: "لجنة الأسر", color: "rgba(239, 68, 68, 0.8)", hasRing: true, content: `<h4 class="text-xl font-semibold text-accent mb-3">🎯 الهدف</h4><p>تهدف لجنة الأسر إلى خلق بيئة طلابية نشطة داخل الكلية من خلال تشجيع الطلاب على تكوين أسر طلابية، وتبني أفكارهم ومبادراتهم. تسعى اللجنة إلى:</p><ul class="list-disc list-inside space-y-2 mt-3"><li>تنمية روح الانتماء والعمل الجماعي بين الطلاب.</li><li>دعم المواهب الطلابية في المجالات الثقافية، الرياضية، والفنية.</li><li>تيسير التصاريح اللازمة لأنشطة الأسر.</li><li>تنسيق الأنشطة المشتركة بين الأسر.</li><li>توفير الدعم اللازم للأسر لإفادة المجتمع الطلابي.</li></ul>` },
            { title: "اللجنة الاجتماعية والرحلات", color: "rgba(168, 85, 247, 0.8)", hasRing: true, content: `<h4 class="text-xl font-semibold text-accent mb-3">🎯 الأهداف</h4><ul class="list-disc list-inside space-y-2 mb-4"><li>تنمية الروابط الاجتماعية بين الطلاب وأعضاء هيئة التدريس.</li><li>إشاعة روح التعاون والأخوة وبث الروح الجامعية.</li><li>تنظيم الفعاليات والرحلات والمعسكرات.</li><li>دعم الطلاب غير القادرين ماديًا من خلال ميزانية التكافل.</li><li>توزيع دعم الكتاب الجامعي بما يحقق مبدأ تكافؤ الفرص.</li></ul><h4 class="text-xl font-semibold text-accent mt-4 mb-3">📌 الأنشطة والبرامج</h4><ul class="list-disc list-inside space-y-2"><li><b>مبادرات التكافل والدعم</b></li><li><b>الرحلات:</b> تنظيم رحلات ترفيهية لتجديد طاقات الطلاب.</li><li><b>الأنشطة الاجتماعية:</b> دورات الشطرنج.</li></ul>` },
            { title: "اللجنة الرياضية", color: "rgba(249, 115, 22, 0.8)", hasRing: true, content: `<h4 class="text-xl font-semibold text-accent mb-3">🎯 الهدف</h4><ul class="list-disc list-inside space-y-2 mb-4"><li>بث الروح الرياضية بين الطلاب وتشجيع المواهب.</li><li>تنمية المهارات الرياضية وصقلها.</li><li>تنظيم الأنشطة الرياضية داخل الكلية.</li><li>تنظيم البطولات الرياضية المختلفة.</li><li>المشاركة في المهرجانات الرياضية وتمثيل الكلية.</li></ul><h4 class="text-xl font-semibold text-accent mt-4 mb-3">📌 الأنشطة</h4><ul class="list-disc list-inside space-y-2"><li>دورة كرة القدم السنوية.</li><li>دورة تنس الطاولة (البنج).</li><li>دورة كرة السلة.</li><li>دورة الكرة الطائرة.</li><li>متابعة منتخبات الكلية في مختلف الألعاب.</li></ul>` },
            { title: "اللجنة الفنية", color: "rgba(217, 70, 239, 0.8)", hasRing: true, content: `<h4 class="text-xl font-semibold text-accent mb-3">🎯 الهدف</h4><p class="mb-4">تهدف اللجنة الفنية إلى اكتشاف المواهب الفنية بين الطلاب ورعايتها، وتشجيع التعبير الإبداعي في مختلف المجالات مثل الرسم، والموسيقى، والتمثيل، والتصوير. تعمل اللجنة على إثراء الحياة الجامعية بالأنشطة الفنية التي تساهم في تنمية الذوق العام وبناء شخصية الطالب.</p><h4 class="text-xl font-semibold text-accent mt-4 mb-3">📌 الأنشطة</h4><ul class="list-disc list-inside space-y-2"><li>تنظيم المعارض الفنية لعرض أعمال الطلاب.</li><li>إقامة المسابقات الفنية في مختلف المجالات.</li><li>عقد ورش عمل فنية لتطوير مهارات الطلاب.</li><li>المشاركة في المهرجانات والفعاليات الفنية على مستوى الجامعة.</li><li>الإشراف على النشاط المسرحي .</li></ul>` },
            { title: "Prep Helper", color: "rgba(224, 224, 224, 0.9)", hasRing: false, content: `<h4 class="text-xl font-semibold text-accent mb-3">💡 إيه هو تيم بريب؟</h4><p class="mb-4">تيم بريب هو الصديق الرسمي لطلاب المستوى الصفري (إعدادي)، موجود دايمًا للرد على أي استفسار أو مشكلة بتواجههم.<br>ببساطة… هو ChatGPT بتاع طالب إعدادي 👨‍🎓✨</p><h4 class="text-xl font-semibold text-accent mt-4 mb-3">🎯 الهدف من وجوده</h4><ul class="list-disc list-inside space-y-2 mb-4"><li>تسهيل التواصل مع الدكاترة وإدارة الكلية واختيار مناديب الدفعة.</li><li>توفير وسيلة سهلة للتواصل بين طلاب إعدادي والمسؤولين عنهم.</li><li>سرعة الرد على الاستفسارات.</li><li>توحيد مصدر المعلومة وضمان صحتها وموثوقيتها.</li></ul><h4 class="text-xl font-semibold text-accent mt-4 mb-3">📞 إزاي نتواصل معاهم؟</h4><p>عن طريق الواتساب على الرقم المخصص للفريق:<br><a href="https://wa.me/201228487925" class="font-bold text-white hover:underline text-lg" target="_blank" dir="ltr">📱 +20 12 28487925</a></p>` },
        ];

        // Main App Logic
        document.addEventListener('DOMContentLoaded', () => {
            const elements = {
                loader: document.getElementById('loader'),
                mainContent: document.getElementById('main-content'),
                starCanvas: document.getElementById('star-canvas'),
                modal: {
                    backdrop: document.getElementById('modal-backdrop'),
                    content: document.getElementById('modal-content'),
                    title: document.getElementById('modal-title'),
                    body: document.getElementById('modal-body'),
                    closeBtn: document.getElementById('modal-close')
                }
            };

            function debounce(func, delay = 100) {
                let timeout;
                return function(...args) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(this, args), delay);
                };
            }
            
            // --- Starfield Module ---
            function initStarfield() {
                const ctx = elements.starCanvas.getContext('2d');
                let stars = [];
                let shootingStars = [];
                let animationFrameId;

                function setCanvasDimensions() {
                    elements.starCanvas.width = window.innerWidth;
                    elements.starCanvas.height = window.innerHeight;
                }

                function createStars() {
                    stars = [];
                    const starCount = window.innerWidth < 768 ? 150 : 300;
                    for (let i = 0; i < starCount; i++) {
                        stars.push({
                            x: Math.random() * elements.starCanvas.width,
                            y: Math.random() * elements.starCanvas.height,
                            radius: Math.random() * 1.5 + 0.5,
                            vx: (Math.random() - 0.5) * 0.7, // ✨ MODIFIED: Increased speed from 0.2
                            vy: (Math.random() - 0.5) * 0.7, // ✨ MODIFIED: Increased speed from 0.2
                            opacity: Math.random() * 0.5 + 0.5,
                            twinkleSpeed: Math.random() * 0.02
                        });
                    }
                }

                function createShootingStar() {
                    // ✨ MODIFIED: Increased probability from 0.005
                    if (Math.random() < 0.02 && shootingStars.length < 3) { 
                        shootingStars.push({
                            x: Math.random() * elements.starCanvas.width,
                            y: Math.random() * 100,
                            len: Math.random() * 80 + 10,
                            speed: Math.random() * 10 + 6,
                            opacity: 1
                        });
                    }
                }
                
                function draw() {
                    ctx.clearRect(0, 0, elements.starCanvas.width, elements.starCanvas.height);
                    
                    stars.forEach(s => {
                        ctx.beginPath();
                        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
                        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
                        ctx.fill();
                    });

                    shootingStars.forEach(ss => {
                        ctx.beginPath();
                        ctx.moveTo(ss.x, ss.y);
                        ctx.lineTo(ss.x + ss.len, ss.y - ss.len);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${ss.opacity})`;
                        ctx.lineWidth = 2;
                        ctx.stroke();
                    });
                }
                
                function update() {
                    stars.forEach(s => {
                        s.x += s.vx;
                        s.y += s.vy;
                        s.opacity += s.twinkleSpeed;
                        if (s.opacity > 1 || s.opacity < 0.3) s.twinkleSpeed *= -1;

                        if (s.x < 0) s.x = elements.starCanvas.width;
                        if (s.x > elements.starCanvas.width) s.x = 0;
                        if (s.y < 0) s.y = elements.starCanvas.height;
                        if (s.y > elements.starCanvas.height) s.y = 0;
                    });

                    shootingStars.forEach((ss, index) => {
                        ss.x -= ss.speed;
                        ss.y += ss.speed;
                        ss.opacity -= 0.02;
                        if(ss.opacity <= 0) shootingStars.splice(index, 1);
                    });

                    createShootingStar();
                }

                function animate() {
                    draw();
                    update();
                    animationFrameId = requestAnimationFrame(animate);
                }

                function reset() {
                    cancelAnimationFrame(animationFrameId);
                    setCanvasDimensions();
                    createStars();
                    animate();
                }

                window.addEventListener('resize', debounce(reset));
                reset();
            }

            function initLoader() {
                window.addEventListener('load', () => {
                    setTimeout(() => {
                        elements.loader.style.opacity = '0';
                        elements.loader.style.visibility = 'hidden';
                        elements.mainContent.style.opacity = '1';
                    }, 2500);
                });
            }

            // ✨ REFACTORED: This function creates any celestial body
            const createCelestialBody = (committee, isMoon = false) => {
                const planetContainer = document.createElement('div');
                planetContainer.className = 'planet-container';
                planetContainer.dataset.index = committeesData.indexOf(committee);

                if (isMoon) {
                    planetContainer.classList.add('prep-helper-moon');
                } else {
                    planetContainer.classList.add('orbiting-planet');
                }
                
                if (committee.hasRing) {
                    planetContainer.classList.add('has-ring');
                }
                
                planetContainer.style.animationDelay = `${Math.random() * 0.5}s`;
                planetContainer.style.animationDuration = `${Math.random() * 4 + 6}s`;

                const planetDiv = document.createElement('div');
                planetDiv.className = `planet w-24 h-24 md:w-32 md:h-32`;
                planetDiv.style.backgroundColor = committee.color;
                planetDiv.style.setProperty('--planet-color', committee.color);
                
                if (isMoon) {
                    for(let i = 1; i <= 3; i++) {
                        const crater = document.createElement('div');
                        crater.className = `moon-crater crater-${i}`;
                        planetDiv.appendChild(crater);
                    }
                }

                const planetNameSpan = document.createElement('span');
                planetNameSpan.className = 'planet-name';
                planetNameSpan.textContent = committee.title;

                planetContainer.appendChild(planetDiv);
                planetContainer.appendChild(planetNameSpan);
                return planetContainer;
            };

            // ✨ REFACTORED: Initialize both galaxy and prep helper sections
            function initCelestialBodies() {
                const galaxyDisplay = document.getElementById('galaxy-display');
                const prepHelperDisplay = document.getElementById('prep-helper-display');
                if (!galaxyDisplay || !prepHelperDisplay) return;

                galaxyDisplay.innerHTML = ''; 
                prepHelperDisplay.innerHTML = '';

                const prepHelperData = committeesData.find(c => c.title.includes("Prep Helper"));
                const otherCommittees = committeesData.filter(c => !c.title.includes("Prep Helper"));

                // Create and place the Prep Helper Moon
                if (prepHelperData) {
                    prepHelperDisplay.appendChild(createCelestialBody(prepHelperData, true));
                }
                
                // Create and place the other planets in the galaxy
                otherCommittees.forEach(committee => {
                    galaxyDisplay.appendChild(createCelestialBody(committee, false));
                });
            }
            
            function positionPlanetsInOrbit() {
                const galaxyDisplay = document.getElementById('galaxy-display');
                if (!galaxyDisplay || window.innerWidth < 768) {
                    const orbitingPlanets = galaxyDisplay.querySelectorAll('.orbiting-planet');
                    orbitingPlanets.forEach(p => {
                        p.style.left = '';
                        p.style.top = '';
                    });
                    return;
                }

                const orbitingPlanets = galaxyDisplay.querySelectorAll('.orbiting-planet');
                const numPlanets = orbitingPlanets.length;
                if (numPlanets === 0) return;

                const radiusX = galaxyDisplay.offsetWidth * 0.5 - 80;
                const radiusY = galaxyDisplay.offsetHeight * 0.5 - 80;
                const centerX = galaxyDisplay.offsetWidth / 2;
                const centerY = galaxyDisplay.offsetHeight / 2;

                orbitingPlanets.forEach((planet, index) => {
                    const angle = (index / numPlanets) * 2 * Math.PI - (Math.PI / 2);
                    
                    const x = centerX + radiusX * Math.cos(angle) - (planet.offsetWidth / 2);
                    const y = centerY + radiusY * Math.sin(angle) - (planet.offsetHeight / 2);

                    planet.style.left = `${x}px`;
                    planet.style.top = `${y}px`;
                });
            }
            
            function initModal() {
                let lastFocusedElement;

                function openModal(index) {
                    const data = committeesData[index];
                    if (!data) return;
                    
                    lastFocusedElement = document.activeElement;
                    
                    elements.modal.title.textContent = data.title;
                    elements.modal.body.innerHTML = data.content;
                    elements.modal.backdrop.classList.add('visible');
                    document.body.style.overflow = 'hidden';
                    elements.modal.body.scrollTop = 0;
                    
                    elements.modal.backdrop.setAttribute('role', 'dialog');
                    elements.modal.backdrop.setAttribute('aria-modal', 'true');
                    elements.modal.backdrop.setAttribute('aria-labelledby', 'modal-title');
                    elements.modal.closeBtn.focus();
                }

                function closeModal() {
                    elements.modal.backdrop.classList.remove('visible');
                    document.body.style.overflow = '';
                    elements.modal.backdrop.removeAttribute('role');
                    elements.modal.backdrop.removeAttribute('aria-modal');
                    elements.modal.backdrop.removeAttribute('aria-labelledby');
                    
                    if (lastFocusedElement) lastFocusedElement.focus();
                }

                // Attach listener to the whole document to catch clicks from both sections
                document.addEventListener('click', (e) => {
                    const planetContainer = e.target.closest('.planet-container');
                    if (planetContainer) {
                        const index = planetContainer.getAttribute('data-index');
                        openModal(index);
                    }
                });

                elements.modal.closeBtn.addEventListener('click', closeModal);
                elements.modal.backdrop.addEventListener('click', (e) => {
                    if (e.target === elements.modal.backdrop) closeModal();
                });
                
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && elements.modal.backdrop.classList.contains('visible')) {
                        closeModal();
                    }
                });
            }

            function initScrollAnimations() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                document.querySelectorAll('.fade-in-section').forEach(section => {
                    observer.observe(section);
                });
            }

            // --- Initialize all modules ---
            initStarfield();
            initLoader();
            initCelestialBodies();
            initModal();
            initScrollAnimations();
            
            // Wait a moment for layout to settle before positioning planets
            setTimeout(() => {
                positionPlanetsInOrbit();
                window.addEventListener('resize', debounce(positionPlanetsInOrbit, 150));
            }, 100);
        });

