document.addEventListener("DOMContentLoaded", () => {
    const branchSelectionSection = document.getElementById("branch-selection");
    const branchDetailsSection = document.getElementById("branch-details");
    const branchCards = document.querySelectorAll(".branch-card");
    const backButton = document.getElementById("back-button");
    const langToggleButton = document.getElementById("lang-toggle");
    const sliderImages = document.querySelectorAll(".slider-image"); // Get slider images
    let currentImageIndex = 0;

    const branchData = {
        khilda: {
            ar: {
                name: "فرع خلدا",
                phone: "00962775605543",
                location: "https://maps.app.goo.gl/9gLRLKVr4x8frL6AA?g_st=ic",
                locationText: "عرض على الخريطة",
                whatsapp: "00962775605543",
                homeVisit: "00962775605543",
                email: "Biostarlabsjo@gmail.com"
            },
            en: {
                name: "Khilda Branch",
                phone: "00962775605543",
                location: "https://maps.app.goo.gl/9gLRLKVr4x8frL6AA?g_st=ic",
                locationText: "View on Map",
                whatsapp: "00962775605543",
                homeVisit: "00962775605543",
                email: "Biostarlabsjo@gmail.com"
            }
        },
        "5thcircle": {
            ar: {
                name: "فرع الدوار الخامس",
                phone: "00962775605544",
                location: "https://maps.app.goo.gl/UMWXW99atiCYZvKo7",
                locationText: "عرض على الخريطة",
                whatsapp: "00962775605544",
                homeVisit: "00962775605544",
                email: "Biostarlabsjo@gmail.com"
            },
            en: {
                name: "5th Circle Branch",
                phone: "00962775605544",
                location: "https://maps.app.goo.gl/UMWXW99atiCYZvKo7",
                locationText: "View on Map",
                whatsapp: "00962775605544",
                homeVisit: "00962775605544",
                email: "Biostarlabsjo@gmail.com"
            }
        }
    };

    const translations = {
        ar: {
            siteTitle: "مختبرات بيوستار - اختر الفرع",
            langSwitch: "English",
            labSummaryTitle: "عن مختبر بيوستار",
            labSummaryText: "أسس مختبر بيوستار مطلع العام 2019 من كادر ذو خبرة أكثر من 25 عام في مجال المختبرات الطبية واتخذ مختبر بيوستار لنفسه مكانة متميزة بين افضل الوجهات الطبية ليكون احد افضل المختبرات لخدمة المرضي المحليين والاقليميين والدوليين كما نسعى نقدم أفضل الخدمات الطبية المخبرية لعملائنا و نفخر بالتزامنا بأن تكون صحة المريض هي اولى اولوياتنا و ان تكون التجربة المتميزة للمريض هي مقياس نجاحنا.",
            selectBranchTitle: "اختر الفرع",
            khildaBranch: "فرع خلدا",
            fifthCircleBranch: "فرع الدوار الخامس",
            backButton: "رجوع",
            phoneLabel: "الهاتف:",
            locationLabel: "الموقع:",
            whatsappLabel: "واتساب:",
            homeVisitLabel: "خدمة منزلية:",
            emailLabel: "الإيميل:",
            footerText: "&copy; 2025 مختبرات بيوستار. جميع الحقوق محفوظة.",
            healthBannerTitle: "صحتك أولويتنا",
            healthBannerText: "الفحص الدوري يساعد في الكشف المبكر عن الأمراض ويساهم في حمايتك وحماية أحبائك. لا تتردد في زيارتنا."
        },
        en: {
            siteTitle: "Biostar Labs - Select Branch",
            langSwitch: "العربية",
            labSummaryTitle: "About Biostar Labs",
            labSummaryText: "Biostar Laboratory was established in early 2019 by a cadre with more than 25 years of experience in the field of medical laboratories. Biostar Laboratory has taken a distinguished position among the best medical destinations to be one of the best laboratories to serve local, regional, and international patients. We also strive to provide the best laboratory medical services to our clients. We are proud of our commitment that the patient’s health is our top priority and that the patient’s distinguished experience is the measure of our success.",
            selectBranchTitle: "Select Branch",
            khildaBranch: "Khilda Branch",
            fifthCircleBranch: "5th Circle Branch",
            backButton: "Back",
            phoneLabel: "Phone:",
            locationLabel: "Location:",
            whatsappLabel: "WhatsApp:",
            homeVisitLabel: "Home Visit:",
            emailLabel: "Email:",
            footerText: "&copy; 2025 Biostar Labs. All rights reserved.",
            healthBannerTitle: "Your Health is Our Priority",
            healthBannerText: "Regular check-ups help in early detection of diseases and contribute to protecting you and your loved ones. Feel free to visit us."
        }
    };

    let currentLang = "ar";

    function updateTexts() {
        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.getAttribute("data-translate");
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
        const visibleBranch = document.querySelector(".branch-card.active");
        if (visibleBranch) {
            const branch = visibleBranch.dataset.branch;
            displayBranchDetails(branch);
        }
    }

    function displayBranchDetails(branchKey) {
        const data = branchData[branchKey][currentLang];
        document.getElementById("branch-name-display").textContent = data.name;
        
        const phoneLink = document.getElementById("branch-phone");
        phoneLink.href = `tel:${data.phone}`;
        phoneLink.textContent = data.phone;

        const locationLink = document.getElementById("branch-location");
        locationLink.href = data.location;
        locationLink.textContent = data.locationText || (currentLang === "ar" ? "عرض على الخريطة" : "View on Map");

        const whatsappLink = document.getElementById("branch-whatsapp");
        whatsappLink.href = `https://wa.me/${data.whatsapp.replace("+", "")}`;
        whatsappLink.textContent = data.whatsapp;

        const homeVisitLink = document.getElementById("branch-home-visit");
        homeVisitLink.href = `tel:${data.homeVisit}`;
        homeVisitLink.textContent = data.homeVisit;

        const emailLink = document.getElementById("branch-email");
        emailLink.href = `mailto:${data.email}`;
        emailLink.textContent = data.email;

        branchSelectionSection.classList.add("hidden");
        branchDetailsSection.classList.remove("hidden");
        
        branchCards.forEach(card => card.classList.remove("active"));
        document.querySelector(`.branch-card[data-branch="${branchKey}"]`).classList.add("active");
    }

    branchCards.forEach(card => {
        card.addEventListener("click", () => {
            const branchKey = card.dataset.branch;
            displayBranchDetails(branchKey);
        });
    });

    backButton.addEventListener("click", () => {
        branchDetailsSection.classList.add("hidden");
        branchSelectionSection.classList.remove("hidden");
        document.querySelectorAll(".branch-card.active").forEach(c => c.classList.remove("active"));
    });

    langToggleButton.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        updateTexts();
    });

    // Image Slider Functionality
    function nextImage() {
        sliderImages[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
        sliderImages[currentImageIndex].classList.add("active");
    }

    if (sliderImages.length > 0) {
        setInterval(nextImage, 5000); // Change image every 5 seconds
    }

    // Initial text setup
    updateTexts();

    if (!document.getElementById("health-banner")) {
        const healthBanner = document.createElement("section");
        healthBanner.id = "health-banner";
        healthBanner.classList.add("health-theme-banner");
        healthBanner.innerHTML = `
            <h3 data-translate="healthBannerTitle"></h3>
            <p data-translate="healthBannerText"></p>
        `;
        const mainElement = document.querySelector("main");
        const labSummaryContainer = document.getElementById("lab-summary-container"); // Use new container
        if (labSummaryContainer && labSummaryContainer.nextSibling) {
            mainElement.insertBefore(healthBanner, labSummaryContainer.nextSibling);
        } else if (labSummaryContainer) {
            mainElement.appendChild(healthBanner); 
        } else {
            mainElement.insertBefore(healthBanner, mainElement.firstChild);
        }
        updateTexts(); 
    }
});

