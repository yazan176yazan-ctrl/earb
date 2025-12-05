// ربط بسيط بين الأزرار والصفحات بالاعتماد على نص الزر فقط
document.addEventListener('DOMContentLoaded', function () {
  const routes = {
    // التاب السفلي
    "AI-Tools": "EXARAI.html",
    "AI Tools": "EXARAI.html",
    "AI Chat": "AI Chat.html",
    "AI Power": "AI Power.html",
    "Assets": "My Assets.html",
    "Mine": "Member.html",

    // أزرار Asset Center
    "Deposit": "Recharge Now.html",
    "Withdraw": "Withdraw Now.html",
    "Bills": "Bills.html",
    "Swap": "Swap.html",

    // عناصر قائمة Member
    "My Assets": "My Assets.html",
    "My Team": "My Team.html",
    "My Works": "My Works.html",
    "Task Center": "Task Center.html",
    "Room task": "Room task.html",
    "Account Information": "Account Information.html",
    "Security Center": "Security Center.html",
    "Site message": "Site message.html",
    "Help Center": "Help Center.html",
    "Service Agreement": "Service Agreement.html",
    "Privacy Agreement": "Privacy Agreement.html",
    "About Us": "About Us.html",
    "Invite Friends": "Invite Friends.html",
    "Recharge Now": "Recharge Now.html",
    "Withdraw Now": "Withdraw Now.html",
    "Choose Language": "Choose Language.html",
    "Theme": "Theme.html",
    "Sign Up": "Sign Up.html",
    "Register": "Sign Up.html",

    // من صفحات أخرى
    "Tool": "Tool.html",
    "Content": "Content.html",
    "Midjourney": "Midjourney.html",
    "Log In": "Log In.html",
    "Login": "Log In.html"
  };

  function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function wireElement(el, target) {
    if (!el || !target) return;
    // لا نكسر أي رابط عنده href جاهز
    if (el.tagName === "A" && el.getAttribute("href")) return;
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      window.location.href = target;
    });
  }

  const candidates = Array.from(
    document.querySelectorAll("a, button, div, span, li")
  );

  candidates.forEach(function (el) {
    const txt = normalize(el.textContent || "");
    if (!txt) return;
    const target = routes[txt];
    if (target) {
      wireElement(el, target);
    }
  });
});