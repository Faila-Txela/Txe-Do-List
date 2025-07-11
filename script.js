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

 function System(){
    Swal.fire({
    title: 'Sucesso',
    text: 'Redirecionando ao sistema da Txe-Do list',
    icon: 'success'
    })
  setTimeout(() => {
    window.location = "/system/system.html"
  }, 2000)
 }

  function notFound() {
    Swal.fire({
    title: 'Aviso',
    text: 'Recurso indisponível no momento.',
    icon: 'warning'
    })
  }


