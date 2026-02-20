const display = document.getElementById('display')
const botoes = document.querySelectorAll('.botao')
const operadores = ['+', '-', '*', '/']

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.innerText
    const ultimo = display.innerText.slice(-1)

    // limpar
    if (valor === 'C') {
      display.innerText = '0'
      display.style.fontSize = '32px'
      return
    }

    // calcular
    if (valor === '=') {
      try {
        display.innerText = eval(display.innerText)
        display.classList.add('display-animado')
        setTimeout(() => display.classList.remove('display-animado'), 300)
      } catch {
        display.innerText = 'Erro'
      }
      return
    }

    // impedir operador no começo ou repetido
    if (
      operadores.includes(valor) &&
      (display.innerText === '0' || operadores.includes(ultimo))
    ) {
      return
    }

    // limite de tamanho
    if (display.innerText.length >= 12) return

    // remove zero inicial
    if (display.innerText === '0') display.innerText = ''

    display.innerText += valor

    // ajustar fonte
    display.style.fontSize =
      display.innerText.length > 8 ? '24px' : '32px'
  })
})
