document.addEventListener('DOMContentLoaded', function () {
  const backAreas = document.querySelectorAll('.van-nav-bar__left');

  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    const path = window.location.pathname.toLowerCase();
    if (path.includes('tool.html')) {
      window.location.href = 'My Assets.html';
    } else if (path.includes('my assets.html')) {
      window.location.href = 'index.html';
    } else if (path.includes('member.html') ||
               path.includes('account information.html') ||
               path.includes('security center.html')) {
      window.location.href = 'Member.html';
    } else {
      window.location.href = 'index.html';
    }
  }

  backAreas.forEach(function (area) {
    area.style.cursor = 'pointer';
    area.addEventListener('click', goBack);
  });
});