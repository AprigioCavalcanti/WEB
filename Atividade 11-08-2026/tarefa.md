# Objetivo

Extrair as disciplinas na página do aluno online da UERJ e salvar em .json

# Formato


Uma lista de objetos com os atributos:
- nome (o nome da disciplina)
- codigo (o código da disciplina)
- periodo (o período recomendado da disciplina)
- tipo (se é eletiva ou obrigatória)
- creditos (quantos créditos ela soma ao ser concluída)
- carga_horaria (a carga horária semestral da disciplina)
- trava_credito (quantos créditos o aluno deve ter, no mínimo, para pedir essa disciplina)

# Desafios

Durante a execução dessa tarefa eu tive muitas dúvidas sobre como executar o script, não solucionando essa dificuldade eu executei, linha a linha, no console.

Outra dúvida foi em como persistir os dados salvos no array disciplinas[] e a solução provisória foi copiar e colar seu conteúdo. Eu encontrei algo como converter para uma string e criar um html com javascript com o conteúdo dessa string, mas achei pouco convencional.

# Resultado

Um arquivo .json salvo com todas as disciplinas do curso de ciência da computação.
