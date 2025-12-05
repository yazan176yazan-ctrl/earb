document.addEventListener('DOMContentLoaded', function () {
  const routes = {
    // main entry
    "EXARAI": "index.html",
    "Home": "index.html",
    "Log In": "index.html",
    "Login": "index.html",

    // main tabs on mobile
    "AI-Tools": "index.html",
    "AI Tools": "index.html",
    "Tool": "Tool.html",
    "Member": "Member.html",

    // auth
    "Sign Up": "Sign Up.html",
    "Register": "Sign Up.html",

    // wallet / assets
    "My Assets": "My Assets.html",
    "My Team": "My Team.html",
    "My Works": "My Works.html",
    "Bills": "Bills.html",
    "Swap": "Swap.html",
    "Lucky draw": "Lucky draw.html",
    "Lucky Draw": "Lucky draw.html",
    "Task Center": "Task Center.html",
    "Room task": "Room task.html",
    "Room Task": "Room task.html",
    "Recharge Now": "Recharge Now.html",
    "Withdraw Now": "Withdraw Now.html",

    // profile / settings
    "Account Information": "Account Information.html",
    "Security Center": "Security Center.html",
    "Site message": "Site message.html",
    "Site Message": "Site message.html",
    "Help Center": "Help Center.html",
    "Service Agreement": "Service Agreement.html",
    "Privacy Agreement": "Privacy Agreement.html",
    "About Us": "About Us.html",
    "Invite Friends": "Invite Friends.html",
    "Choose Language": "Choose Language.html",
    "Theme": "Theme.html",

    // AI tools list
    "Midjourney": "Midjourney.html",
    "AI Chat": "AI Chat.html",
    "AI Power": "AI Power.html"
  };

  function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function wireElement(el, target) {
    if (!el || !target) return;
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      if (el.tagName === "A" && el.getAttribute("href")) return;
      window.location.href = target;
    });
  }

  const candidates = Array.from(
    document.querySelectorAll("a, button, div, span, li")
  );

  candidates.forEach(function (el) {
    const txt = normalize(el.textContent || "");
    if (!txt) return;
    if (Object.prototype.hasOwnProperty.call(routes, txt)) {
      wireElement(el, routes[txt]);
    }
  });
});