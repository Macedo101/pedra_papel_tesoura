// Função para escolher aleatoriamente do computador
function getComputerChoice() {
    const randomNumber = Math.random();  // Gera um número aleatório entre 0 e 1
    if (randomNumber < 0.33) {
      return "rock"; // 33% de chance
    } else if (randomNumber < 0.66) {
      return "paper"; // 33% de chance
    } else {
      return "scissors"; // 34% de chance
    }
  }
  
  // Função para o jogador fazer sua escolha
  function getHumanChoice() {
    let choice = prompt("Escolha entre: 'rock', 'paper' ou 'scissors'");
    return choice.toLowerCase();  // Torna a entrada insensível a maiúsculas e minúsculas
  }
  
  // Função auxiliar para deixar a primeira letra maiúscula
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  // Função para jogar uma rodada
  function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    // Verifica as escolhas e determina o vencedor da rodada
    if (humanChoice === computerChoice) {
      console.log("Empate! Ambos escolheram " + capitalize(humanChoice));
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;  // Incrementa a pontuação do jogador
      console.log("Você ganha! " + capitalize(humanChoice) + " vence " + capitalize(computerChoice));
    } else {
      computerScore++;  // Incrementa a pontuação do computador
      console.log("Você perde! " + capitalize(computerChoice) + " vence " + capitalize(humanChoice));
    }
    return { humanScore, computerScore }; // Retorna as pontuações atualizadas
  }
  
  // Função para jogar o jogo completo de 5 rodadas
  function playGame() {
    let humanScore = 0;  // Pontuação do jogador
    let computerScore = 0;  // Pontuação do computador
    
    // Jogar 5 rodadas
    for (let round = 1; round <= 5; round++) {
      console.log("Rodada " + round + ":");
  
      // Obtém as escolhas do jogador e do computador
      let humanChoice = getHumanChoice();
      let computerChoice = getComputerChoice();
  
      // Chama a função playRound para jogar a rodada e retorna as pontuações atualizadas
      const scores = playRound(humanChoice, computerChoice, humanScore, computerScore);
      humanScore = scores.humanScore;
      computerScore = scores.computerScore;
    }
  
    // Exibe a pontuação final e o vencedor
    console.log("Pontuação final:");
    console.log("Você: " + humanScore);
    console.log("Computador: " + computerScore);
  
    if (humanScore > computerScore) {
      console.log("Você venceu o jogo!");
    } else if (humanScore < computerScore) {
      console.log("O computador venceu o jogo!");
    } else {
      console.log("O jogo terminou em empate!");
    }
  }
  
  // Chama a função para iniciar o jogo
  playGame();
  