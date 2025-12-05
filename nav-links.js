document.addEventListener('DOMContentLoaded', function () {
  // Simple text-based navigation mapping.
  const routes = {
    "EXARAI": "EXARAI.html",
    "Home": "EXARAI.html",
    "AI Chat": "AI Chat.html",
    "AI Power": "AI Power.html",
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
    "Member": "Member.html",
    "Help Center": "Help Center.html",
    "Service Agreement": "Service Agreement.html",
    "Privacy Agreement": "Privacy Agreement.html",
    "About Us": "About Us.html",
    "Log In": "Log In.html",
    "Login": "Log In.html",
    "Sign Up": "Sign Up.html",
    "Register": "Sign Up.html",
    "Choose Language": "Choose Language.html",
    "Theme": "Theme.html",
    "Security Center": "Security Center.html",
    "Site message": "Site message.html",
    "Site Message": "Site message.html",
    "Account Information": "Account Information.html",
    "Invite Friends": "Invite Friends.html",
    "Recharge Now": "Recharge Now.html",
    "Withdraw Now": "Withdraw Now.html",
    "Tool": "Tool.html",
    "Midjourney": "Midjourney.html",
    "AI Tools": "Tool.html"
  };

  function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function wireElement(el, target) {
    if (!el || !target) return;
    el.style.cursor = "pointer";
    el.addEventListener("click", function (ev) {
      // Don’t break normal links if they already have href.
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
    if (routes[txt]) {
      wireElement(el, routes[txt]);
    }
  });
});