function openMenu() {
  const body = document.querySelector("body");
  const btnOpen = document.querySelector(".header__icon-open");

  function menuClick() {
    btnOpen.addEventListener("click", () => {
      const isActive = body.classList.toggle("menu__active");
      if (isActive) {
        btnOpen.setAttribute("aria-expended", 'true');
      } else {
        btnOpen.setAttribute("aria-expended", 'false');
      }
    });
  }
menuClick();

// aria-expandedатрибут устанавливается для элемента, 
// чтобы указать, развернут или свернут элемент управления, 
// а также отображаются или скрываются элементы управления.
/**
 * Когда меню menuотображается, объект кнопки, переключающий видимость этого меню, 
 * имеет aria-expanded="true"атрибут `aria-expanded`. 
 * Когда меню скрыто, атрибут `aria-expanded` можно опустить. 
 * Если атрибут `aria-expanded` указан, когда меню скрыто, 
 * его следует установить как ` aria-expanded="false".`. 
 * Когда дочернее меню не видно, его родительское меню 
 * menuitemимеет атрибут `aria-expanded` aria-expanded. 
 * Его следует установить как `.` true, когда дочернее меню видно.
 */
  function escapeMenu() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && body.classList.contains('menu__active')) {
            body.classList.remove('menu__active');
            btnOpen.setAttribute("aria-expended", 'false');
        }
    })
  }
  escapeMenu();
}
openMenu();

/**
 * Когда будешь писать JavaScript, старайся делать функции универсальными. Вместо того чтобы привязываться к конкретным ID (например, #select-time), используй классы и поиск элементов через closest() или querySelector() внутри родительского контейнера. Так один и тот же код будет обслуживать и выбор времени, и твой второй селект без дублирования строк.
Что может пригодиться при разработке:
classList.toggle('active') — для открытия/закрытия выпадашки.
Событие change на радио-кнопках — чтобы мгновенно узнавать о выборе.
event.stopPropagation() — чтобы список не закрывался случайно при клике внутри него (например, по кнопке Clear).
Как планируешь реализовать закрытие списка: по клику на выбранный элемент или при клике в любую область экрана?



 */

