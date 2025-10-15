document.getElementById("year").textContent = new Date().getFullYear();

const langBtn = document.getElementById("langBtn");
let currentLang = "ar";

const translations = {
  ar: {
    name:"سوسن أحمد العجاب", title:"مطورة واجهة أمامية",
    nav_about:"نبذة", nav_skills:"مهارات", nav_projects:"مشاريع", nav_contact:"تواصل",
    hero_heading:"أبني واجهات نظيفة وسريعة وتجربة استخدام بسيطة.",
    hero_text:"متخصصة في HTML, CSS, JavaScript — أُبدع في تصميم صفحات هبوط وتطبيقات واجهة أمامية متجاوبة ومصمَّمة بعناية.",
    see_projects:"اطلع على مشاريعي", contact_me:"أرسل رسالة",
    about_heading:"نبذة عني", about_text:"طالبة تكنولوجيا معلومات ومطوّرة واجهة أمامية شغوفة ببناء واجهات مستخدم جذابة وفعّالة.",
    skills_heading:"مهاراتي التقنية", skill1:"HTML و CSS", skill2:"JavaScript", skill3:"Bootstrap و GitHub",
    projects_heading:"مشاريعي", view_project:"عرض المشروع",
    contact_heading:"تواصل معي", name_label:"الاسم", email_label:"البريد الإلكتروني", msg_label:"الرسالة", send_btn:"إرسال",
    footer_text:"سوسن أحمد — مطوّرة واجهة أمامية"
  },
  en: {
    name:"Sawsan Ahmed Al-Ajab", title:"Front-End Developer",
    nav_about:"About", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
    hero_heading:"I build clean, fast interfaces with smooth user experiences.",
    hero_text:"Specialized in HTML, CSS, and JavaScript — crafting responsive, modern front-end applications and landing pages.",
    see_projects:"See My Projects", contact_me:"Contact Me",
    about_heading:"About Me", about_text:"IT student and front-end developer passionate about creating elegant, functional user interfaces.",
    skills_heading:"Technical Skills", skill1:"HTML & CSS", skill2:"JavaScript", skill3:"Bootstrap & GitHub",
    projects_heading:"Projects", view_project:"View Project",
    contact_heading:"Get In Touch", name_label:"Name", email_label:"Email", msg_label:"Message", send_btn:"Send",
    footer_text:"Sawsan Ahmed — Front-End Developer"
  },
  de: {
    name:"Sawsan Ahmed Al-Ajab", title:"Front-End-Entwicklerin",
    nav_about:"Über mich", nav_skills:"Fähigkeiten", nav_projects:"Projekte", nav_contact:"Kontakt",
    hero_heading:"Ich entwickle saubere, schnelle Benutzeroberflächen mit einfacher Nutzererfahrung.",
    hero_text:"Spezialisiert auf HTML, CSS und JavaScript — ich gestalte responsive und moderne Weboberflächen und Landingpages.",
    see_projects:"Meine Projekte ansehen", contact_me:"Kontakt aufnehmen",
    about_heading:"Über mich", about_text:"IT-Studentin und Front-End-Entwicklerin mit Leidenschaft für funktionale, elegante Benutzeroberflächen.",
    skills_heading:"Technische Fähigkeiten", skill1:"HTML & CSS", skill2:"JavaScript", skill3:"Bootstrap & GitHub",
    projects_heading:"Projekte", view_project:"Projekt ansehen",
    contact_heading:"Kontakt", name_label:"Name", email_label:"E-Mail", msg_label:"Nachricht", send_btn:"Senden",
    footer_text:"Sawsan Ahmed — Front-End-Entwicklerin"
  }
};

langBtn.addEventListener("click", () => {
  if (currentLang === "ar") currentLang = "en";
  else if (currentLang === "en") currentLang = "de";
  else currentLang = "ar";

  langBtn.textContent = currentLang === "ar" ? "EN" : currentLang === "en" ? "DE" : "AR";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  updateTexts();
});

function updateTexts(){
  document.querySelectorAll("[data-lang]").forEach(el=>{
    const key = el.getAttribute("data-lang");
    if(translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
}
