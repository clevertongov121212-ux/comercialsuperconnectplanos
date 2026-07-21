/* Super Connect — landing page
   Página estática (HTML/CSS/JS puro), pronta para GitHub Pages.
   As animações de entrada e hover são feitas em CSS (style.css).
   Este script adiciona apenas melhorias progressivas leves. */
(function () {
  'use strict';

  // Revela seções ao rolar (reforça as animações de entrada em telas longas).
  var io;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = 'running';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('main > section').forEach(function (s) {
      io.observe(s);
    });
  }

  // Garante que os links de WhatsApp abram em nova aba com segurança.
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (a) {
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
