document.addEventListener('DOMContentLoaded', function () {
  // الهدف: تفعيل سهم الرجوع في أعلى كل صفحة
  const backAreas = document.querySelectorAll('.van-nav-bar__left');

  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    // ما في تاريخ؟ نرجع حسب نوع الصفحة
    const path = window.location.pathname.toLowerCase();
    if (path.includes('tool.html')) {
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