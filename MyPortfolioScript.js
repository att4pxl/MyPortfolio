document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", () => {
        const header = document.querySelector(".headerbar");

        if (window.scrollY <= 50) {
            // ถ้าอยู่ใกล้ด้านบนสุดของหน้า
            header.classList.add("show");
        } else {
            // ถ้าเลื่อนลงไปข้างล่าง
            header.classList.remove("show");
        }
    });

    // --- ปุ่มกลับไปหน้าแรก --- //
    const logo = document.querySelector(".logo_text");
    const homeBtn = document.querySelector(".nav-home");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (logo) logo.addEventListener("click", scrollToTop);
    if (homeBtn) homeBtn.addEventListener("click", scrollToTop);

    // --- ปุ่ม About --- //
    const aboutBtn = document.querySelector(".nav-about");
    const aboutSection = document.querySelector(".section_about");
    if (aboutBtn && aboutSection) {
        aboutBtn.addEventListener("click", () => {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // --- ปุ่ม Skill --- //
    const skillBtn = document.querySelector(".nav-skill");
    const skillSection = document.querySelector(".section_skill");
    if (skillBtn && skillSection) {
        skillBtn.addEventListener("click", () => {
            skillSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // --- ปุ่ม Contact --- //
    const contactBtns = document.querySelectorAll(".nav-contact, .btn_group");
    const contactSection = document.querySelector(".contact_content");

    if (contactBtns.length > 0 && contactSection) {
        contactBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                contactSection.scrollIntoView({ behavior: "smooth" });
            });
        });
    }
    // --- ปุ่ม Download CV  --- //
    const downloadBtns = document.querySelectorAll(".btn-download");
    downloadBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = "./CV_example.pdf"; // 👈 ใส่ path ไฟล์จริง
            link.download = "Attapol_Natekunchorn_CV.pdf";
            link.click();
        });
    });


});
