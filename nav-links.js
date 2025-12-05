// ربط احترافي للروابط الداخلية بين الصفحات
// يعتمد على نص الزر/العنصر (بعد تبسيطه) ويوجه لملف الـ HTML المناسب.
document.addEventListener('DOMContentLoaded', function () {
  const rules = [
    // نقطة الدخول الرئيسية + الهوم
    { match: 'log in',          to: 'index.html' },
    { match: 'login',           to: 'index.html' },

    // الهوم / ai-tools
    { match: 'ai-tools',        to: 'EXARAI.html' },
    { match: 'ai tools',        to: 'EXARAI.html' },
    { match: 'home',            to: 'EXARAI.html' },

    // التاب السفلي
    { match: 'ai chat',         to: 'AI Chat.html' },
    { match: 'ai power',        to: 'AI Power.html' },
    { match: 'assets',          to: 'My Assets.html' },
    { match: 'mine',            to: 'Member.html' },
    { match: 'member',          to: 'Member.html' },

    // أزرار أعلى صفحة الأصول
    { match: 'deposit',         to: 'Recharge Now.html' },
    { match: 'withdraw',        to: 'Withdraw Now.html' },
    { match: 'bills',           to: 'Bills.html' },
    { match: 'swap',            to: 'Swap.html' },

    // عناصر قائمة العضو (member)
    { match: 'my assets',           to: 'My Assets.html' },
    { match: 'my team',             to: 'My Team.html' },
    { match: 'my works',            to: 'My Works.html' },
    { match: 'task center',         to: 'Task Center.html' },
    { match: 'room task',           to: 'Room task.html' },
    { match: 'recharge now',        to: 'Recharge Now.html' },
    { match: 'withdraw now',        to: 'Withdraw Now.html' },
    { match: 'account information', to: 'Account Information.html' },
    { match: 'security center',     to: 'Security Center.html' },
    { match: 'site message',        to: 'Site message.html' },
    { match: 'help center',         to: 'Help Center.html' },
    { match: 'service agreement',   to: 'Service Agreement.html' },
    { match: 'privacy agreement',   to: 'Privacy Agreement.html' },
    { match: 'about us',            to: 'About Us.html' },
    { match: 'invite friends',      to: 'Invite Friends.html' },
    { match: 'choose language',     to: 'Choose Language.html' },
    { match: 'theme',               to: 'Theme.html' },
    { match: 'sign up',             to: 'Sign Up.html' },
    { match: 'register',            to: 'Sign Up.html' },

    // صفحات الأدوات
    { match: 'tool',                to: 'Tool.html' },
    { match: 'content',             to: 'Content.html' },
    { match: 'midjourney',          to: 'Midjourney.html' },

    // احتياط: lucky draw
    { match: 'lucky draw',          to: 'Lucky draw.html' }
  ];

  function normalize(text) {
    return text.replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function resolveTarget(text) {
    const t = normalize(text);
    if (!t) return null;
    for (const rule of rules) {
      if (t.includes(rule.match)) {
        return rule.to;
      }
    }
    return null;
  }

  function wireElement(el, target) {
    if (!el || !target) return;
    // لا نكسر الروابط الخارجية الموجودة أصلاً
    if (el.tagName === 'A' && el.getAttribute('href')) return;
    el.style.cursor = 'pointer';
    el.addEventListener('click', function () {
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