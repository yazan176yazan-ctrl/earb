document.addEventListener('DOMContentLoaded', function () {
  // قواعد ربط بسيطة تعتمد على وجود الكلمة داخل النص، مش تطابق كامل
  const rules = [
    // الصفحة الرئيسية / الدخول
    { match: 'exarai',        to: 'index.html' },
    { match: 'home',          to: 'index.html' },
    { match: 'log in',        to: 'index.html' },
    { match: 'login',         to: 'index.html' },

    // التاب السفلي
    { match: 'ai-tools',      to: 'index.html' },
    { match: 'ai tools',      to: 'index.html' },
    { match: 'assets',        to: 'My Assets.html' },
    { match: 'mine',          to: 'Member.html' },
    { match: 'member',        to: 'Member.html' },
    { match: 'ai chat',       to: 'AI Chat.html' },
    { match: 'ai power',      to: 'AI Power.html' },

    // أزرار أعلى My Assets
    { match: 'deposit',       to: 'Recharge Now.html' },
    { match: 'withdraw',      to: 'Withdraw Now.html' },
    { match: 'bills',         to: 'Bills.html' },
    { match: 'swap',          to: 'Swap.html' },

    // صفحات الحساب / الإعدادات
    { match: 'my assets',             to: 'My Assets.html' },
    { match: 'my team',               to: 'My Team.html' },
    { match: 'my works',              to: 'My Works.html' },
    { match: 'task center',           to: 'Task Center.html' },
    { match: 'room task',             to: 'Room task.html' },
    { match: 'recharge now',          to: 'Recharge Now.html' },
    { match: 'withdraw now',          to: 'Withdraw Now.html' },
    { match: 'account information',   to: 'Account Information.html' },
    { match: 'security center',       to: 'Security Center.html' },
    { match: 'site message',          to: 'Site message.html' },
    { match: 'help center',           to: 'Help Center.html' },
    { match: 'service agreement',     to: 'Service Agreement.html' },
    { match: 'privacy agreement',     to: 'Privacy Agreement.html' },
    { match: 'about us',              to: 'About Us.html' },
    { match: 'invite friends',        to: 'Invite Friends.html' },
    { match: 'choose language',       to: 'Choose Language.html' },
    { match: 'theme',                 to: 'Theme.html' },
    { match: 'sign up',               to: 'Sign Up.html' },
    { match: 'register',              to: 'Sign Up.html' },

    // صفحات الأدوات
    { match: 'midjourney',    to: 'Midjourney.html' },
    { match: 'content',       to: 'Content.html' }
  ];

  function normalize(text) {
    return text.replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function resolveTarget(text) {
    const t = normalize(text);
    for (const rule of rules) {
      if (t.includes(rule.match)) return rule.to;
    }
    return null;
  }

  function wireElement(el, target) {
    if (!el || !target) return;
    el.style.cursor = 'pointer';
    el.addEventListener('click', function () {
      // لو هو <a> وعنده href جاهز ما نكسره
      if (el.tagName === 'A' && el.getAttribute('href')) return;
      window.location.href = target;
    });
  }

  const candidates = Array.from(
    document.querySelectorAll('a, button, div, span, li')
  );

  candidates.forEach(function (el) {
    const txt = el.textContent || '';
    const target = resolveTarget(txt);
    if (target) {
      wireElement(el, target);
    }
  });
});