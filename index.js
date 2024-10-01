function calculadoraDePartidas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas
  let classificao

  if (saldoVitorias < 10) {
    classificao = 'Ferro'
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    classificao = 'Bronze'
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    classificao = 'Prata'
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    classificao = 'Ouro'
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    classificao = 'Diamante'
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    classificao = 'Lendário'
  } else if (saldoVitorias >= 101) {
    classificao = 'Imortal'
  }

  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${classificao}`
  )
}

calculadoraDePartidas(50, 10)
