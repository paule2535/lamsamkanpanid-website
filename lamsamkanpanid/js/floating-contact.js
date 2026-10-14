// ปุ่มโทรลอย: กดแล้วเปิด/ปิดเมนูเบอร์โทร กดที่อื่นหรือกด Esc เพื่อปิด
(function () {
  var button = document.querySelector('.float-btn-phone');
  var menu = document.getElementById('float-phone-menu');
  if (!button || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  }

  button.addEventListener('click', function (event) {
    event.stopPropagation();
    setOpen(menu.hidden);
  });

  document.addEventListener('click', function (event) {
    if (!menu.hidden && !menu.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      button.focus();
    }
  });
})();
