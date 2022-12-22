function inicio(){
	
		var nDificuldade = prompt("Para iniciar o jogo, defina o nível de dificuldade: \n 1- Fácil \n 2- Moderado \n 3-Difícil");
		var tentativas = '';

		if (nDificuldade == '1') {
			nivelFacil();

		}else if (nDificuldade == '2') {
			nivelMedio();

		}else if (nDificuldade == '3'){
			nivelDificil();

		} else{
			alert("Você digitou uma OPÇÃO INVÁLIDA, inicie o jogo novamente."); //pedir novamente o nível de dificuldade e chamar a função de acordo com a opção escolhida
		}
	}

	function nivelFacil(){
		numeroSecreto = parseInt(Math.random() * 10);
		tentativas = 1;

		while(tentativas < 6){
			var chute = parseInt(prompt("Você tem " + (6 - tentativas) + " tentativa(s). Digite um número inteiro de 0 a 10:"));

			if (numeroSecreto > chute) {
				alert('O número secreto é maior...')
			}else if (numeroSecreto < chute) {
				alert('O número secreto é menor...');
			}else if (numeroSecreto == chute) {
				alert('Parabéns, você acertou!');
				break;
			}else{
				alert('Você não digitou nenhum número')
			}
			tentativas++;
			
		}

		if (chute != numeroSecreto) {
			alert('Suas tentativas acabaram. O número secreto era ' + numeroSecreto + '.');
		}
	
	}


	function nivelMedio(){
		numeroSecreto = parseInt(Math.random() * 10); 
		tentativas = 1;

		while(tentativas < 5){
			var chute = parseInt(prompt("Você tem " + (5 - tentativas) + " tentativa(s). Digite um número inteiro de 0 a 10:"));

			if (numeroSecreto > chute) {
				alert('O número secreto é maior...')
			}else if (numeroSecreto < chute) {
				alert('O número secreto é menor...');
			}else if (numeroSecreto == chute) {
				alert('Parabéns, você acertou!');
				break;
			}else{
				alert('Você não digitou nenhum número')
			}
			tentativas++;
			
		}

		if (chute != numeroSecreto) {
			alert('Suas tentativas acabaram. O número secreto era ' + numeroSecreto + '.');
		}
	
	}

	function nivelDificil(){
		numeroSecreto = parseInt(Math.random() * 10);
		tentativas = 1;

		while(tentativas < 4){
			var chute = parseInt(prompt("Você tem " + (4 - tentativas) + " tentativa(s). Digite um número inteiro de 0 a 10:"));

			if (numeroSecreto > chute) {
				alert('O número secreto é maior...')
			}else if (numeroSecreto < chute) {
				alert('O número secreto é menor...');
			}else if (numeroSecreto == chute) {
				alert('Parabéns, você acertou!');
				break;
			}else{
				alert('Você não digitou nenhum número')
			}
			tentativas++;
			
		}

		if (chute != numeroSecreto) {
			alert('Suas tentativas acabaram. O número secreto era ' + numeroSecreto + '.');
		}
	
	}