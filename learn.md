## SweetAlert2

# É uma biblioteca JS puro, que permite criar alertas ou notificações personalizadas.
 - Pode ser baixada localmente, fazendo com que seu uso com a internet após sua instalação não seja mais necessária,
  ou também via CDN, com o script colocando no html.

  # Ícones padrões
  A SweetAlert2 já vem com ícones padrões por definição,
  no entanto é possível personalizar os mesmos, colocando o caminho de uma imagem:

  Swal.fire({
    title: 'Sucesso',
    text: 'Clicou no botão',
    imageUrl: 'caminho da imagem',
    imageWidth: 'largura da imagem',
    imageHeigth: 'altura da imagem'
  }) 

  # Personalizações via CSS puro
  - Também é possível personalizar os elementos que vêm do alert via CSS.