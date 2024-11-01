function formatarData(data) {
    const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const mesesDoAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const dia = data.getDate().toString().padStart(2, '0');
    const mes = mesesDoAno[data.getMonth()];
    const ano = data.getFullYear();

    return `${dia} de ${mes} de ${ano}`;
}

function atualizarRelogio() {
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const dataFormatada = formatarData(agora);

    document.getElementById('time').textContent = `${horas}:${minutos}`;
    document.getElementById('date').textContent = dataFormatada;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Inicializa ao carregar a página
