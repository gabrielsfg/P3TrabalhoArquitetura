document.getElementById("recomendar").addEventListener("click", () => {
    const dispositivo = document.getElementById("dispositivo").value;
    const desempenho = document.getElementById("desempenho").value;
    const custo = document.getElementById("custo").value;
    const aplicacao = document.getElementById("aplicacao").value;

    let resultado = "";

    if (aplicacao === "jogos") {
        if (desempenho === "rapido" && custo === "alto" && dispositivo === "pc") {
            resultado = "Recomendação: AMD Ryzen 7 5800X - RISC, Cache L1: 64KB, L2: 512KB, 3.8GHz (PC de Mesa)";
        } else if (desempenho === "moderado" && custo === "medio" && dispositivo === "notebook") {
            resultado = "Recomendação: Intel Core i5-11600K - CISC, Cache L1: 64KB, L2: 256KB, 3.6GHz (Notebook)";
        } else {
            resultado = "Recomendação: AMD Ryzen 5 5600G - RISC, Cache L1: 64KB, L2: 512KB, 3.9GHz (Indiferente)";
        }
    } else if (aplicacao === "edicao") {
        if (desempenho === "rapido" && custo === "alto" && dispositivo === "pc") {
            resultado = "Recomendação: Intel Core i9-12900K - CISC, Cache L1: 128KB, L2: 1MB, 3.2GHz (PC de Mesa)";
        } else if (desempenho === "moderado" && custo === "medio" && dispositivo === "notebook") {
            resultado = "Recomendação: AMD Ryzen 7 5700G - RISC, Cache L1: 64KB, L2: 512KB, 3.8GHz (Notebook)";
        } else {
            resultado = "Recomendação: Intel Core i5-11400 - CISC, Cache L1: 64KB, L2: 256KB, 2.9GHz (Indiferente)";
        }
    } else if (aplicacao === "ia") {
        if (desempenho === "rapido" && custo === "alto" && dispositivo === "pc") {
            resultado = "Recomendação: AMD EPYC 7742 - RISC, Cache L1: 128KB, L2: 2MB, 2.2GHz (PC de Mesa)";
        } else if (desempenho === "moderado" && custo === "medio" && dispositivo === "notebook") {
            resultado = "Recomendação: Intel Xeon W-2295 - CISC, Cache L1: 128KB, L2: 1MB, 3.0GHz (Notebook)";
        } else {
            resultado = "Recomendação: AMD Ryzen 9 3900X - RISC, Cache L1: 64KB, L2: 512KB, 3.8GHz (Indiferente)";
        }
    } else {
        resultado = "Não foi possível encontrar uma recomendação para os critérios selecionados.";
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = resultado;
});
