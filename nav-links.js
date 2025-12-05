document.addEventListener('DOMContentLoaded', function () {
  // Map button / tab text -> local HTML file
  const routes = {
    // Main / home
    "EXARAI": "EXARAI.html",
    "Home": "EXARAI.html",
    "AI-Tools": "EXARAI.html",
    "AI Tools": "EXARAI.html",
    "AI-TOOLS": "EXARAI.html",

    // AI sections
    "AI Chat": "AI Chat.html",
    "AI Power": "AI Power.html",
    "Midjourney": "Midjourney.html",

    // Wallet / assets
    "My Assets": "My Assets.html",
    "My Team": "My Team.html",
    "My Works": "My Works.html",
    "Bills": "Bills.html",
    "Swap": "Swap.html",

    // Recharge / withdraw
    "Recharge": "Recharge Now.html",
    "Recharge Now": "Recharge Now.html",
    "Withdraw": "Withdraw Now.html",
    "Withdraw Now": "Withdraw Now.html",

    // Tools hub
    "Tool": "Tool.html",

    // Tasks / room
    "Lucky draw": "Lucky draw.html",
    "Lucky Draw": "Lucky draw.html",
    "Task Center": "Task Center.html",
    "Room task": "Room task.html",
    "Room Task": "Room task.html",

    // User / account
    "Member": "Member.html",
    "Mine": "Account Information.html",
    "My": "Account Information.html",
    "Account Information": "Account Information.html",
    "Security Center": "Security Center.html",

    // Messages / settings / info
    "Site message": "Site message.html",
    "Site Message": "Site message.html",
    "Choose Language": "Choose Language.html",
    "Theme": "Theme.html",

    // Help / docs
    "Help Center": "Help Center.html",
    "Service Agreement": "Service Agreement.html",
    "Privacy Agreement": "Privacy Agreement.html",
    "About Us": "About Us.html",

    // Auth
    "Log In": "Log In.html",
    "Login": "Log In.html",
    "Sign Up": "Sign Up.html",
    "Register": "Sign Up.html",

    // Team / invite
    "Invite Friends": "Invite Friends.html",

    // Forum / content
    "Content": "Content.html",
    "Forum": "Content.html",
    "forum": "Content.html"
  };

  function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function wireElement(el, target) {
    if (!el || !target) return;
    try {
      el.style.cursor = "pointer";
    } catch (e) {}
    el.addEventListener("click", function (ev) {
      // إذا كان الرابط A وعنده href أصلاً، لا نغيّر سلوكه
      if (el.tagName === "A" && el.getAttribute("href")) return;
      window.location.href = target;
    });
  }

  // نجرب على كل العناصر اللي ممكن تكون أزرار
  const candidates = Array.from(
    document.querySelectorAll("a, button, div, span, li, p")
  );

  candidates.forEach(function (el) {
    const txt = normalize(el.textContent || "");
    if (!txt) return;
    if (routes.hasOwnProperty(txt)) {
      wireElement(el, routes[txt]);
    }
  });
});