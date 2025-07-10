  const btnEnter = document.querySelector('#btn1')
  const not = document.querySelector('#not-found')
  const reveals = document.querySelectorAll('.reveal');

  btnEnter.addEventListener('click', System)
  not.addEventListener('click', notFound)

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);

  // Executar na primeira carga
  revealOnScroll();

  function System() {
    alert("Redirecionando para o sistema da Txe-Do List")
    window.location = "/system/system.html"
  }

  function notFound() {
    alert("Recurso indisponível no momento. ❌")
  }


