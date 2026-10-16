const perguntas = [
  {
    pergunta: "Como a Inteligência Artificial pode auxiliar os profissionais em suas atividades diárias?",
    opcoes: { A: "Substituindo todos os profissionais.", B: "Automatizando tarefas e aumentando a produtividade.", C: "Eliminando a necessidade de treinamento.", D: "Impedindo o uso de ferramentas digitais." },
    correta: "B"
  },
  {
    pergunta: "O que significa automatizar tarefas profissionais com o uso da IA?",
    opcoes: { A: "Realizar todas as tarefas manualmente.", B: "Diminuir a qualidade do trabalho.", C: "Utilizar sistemas inteligentes para executar tarefas automaticamente.", D: "Eliminar todos os empregos existentes." },
    correta: "C"
  },
  {
    pergunta: "Qual é uma das principais vantagens da automação com IA?",
    opcoes: { A: "Aumentar o tempo gasto nas tarefas.", B: "Tornar os processos mais complicados.", C: "Impedir a análise de informações.", D: "Reduzir o uso da tecnologia." },
    correta: "A"
  },
  {
    pergunta: "Por que é importante revisar os conteúdos produzidos pela IA?",
    opcoes: { A: "Para aumentar o tamanho dos textos.", B: "Para evitar o uso de computadores.", C: "Para substituir todas as ferramentas digitais.", D: "Para verificar a precisão e a confiabilidade das informações." },
    correta: "D"
  },
  {
    pergunta: "Qual é a melhor maneira de implementar a IA nas atividades de uma empresa?",
    opcoes: { A: "Substituir todos os funcionários imediatamente.", B: "Identificar necessidades, capacitar a equipe e implementar a tecnologia de forma planejada.", C: "Utilizar a IA sem estabelecer objetivos.", D: "Evitar qualquer supervisão humana." },
    correta: "B"
  },
  {
    pergunta: "Qual é o principal papel da IA como ferramenta de apoio profissional?",
    opcoes: { A: "Eliminar a necessidade de profissionais.", B: "Tomar todas as decisões sem supervisão.", C: "Auxiliar nas tarefas e apoiar a tomada de decisões.", D: "Impedir a criatividade dos trabalhadores." },
    correta: "C"
  },
  {
    pergunta: "Como a IA pode impactar as oportunidades de emprego?",
    opcoes: { A: "Criando novas funções e transformando profissões existentes.", B: "Garantindo que todos os empregos desapareçam.", C: "Impedindo o surgimento de novas profissões.", D: "Tornando desnecessária toda qualificação profissional." },
    correta: "A"
  },
  {
    pergunta: "Qual é um dos principais desafios do avanço da IA no mercado de trabalho?",
    opcoes: { A: "A impossibilidade de automatizar tarefas.", B: "A ausência total de ferramentas digitais.", C: "A eliminação da necessidade de adaptação.", D: "A necessidade de desenvolver novas habilidades e se adaptar às mudanças." },
    correta: "D"
  },
  {
    pergunta: "Por que a participação humana continua importante no uso da IA?",
    opcoes: { A: "Porque a IA não consegue executar nenhuma tarefa.", B: "Porque o julgamento humano, a ética e a criatividade continuam sendo importantes.", C: "Porque os profissionais devem evitar qualquer tecnologia.", D: "Porque a IA sempre apresenta resultados incorretos." },
    correta: "B"
  },
  {
    pergunta: "Qual atitude pode ajudar os profissionais a enfrentar as mudanças causadas pela IA?",
    opcoes: { A: "Ignorar os avanços tecnológicos.", B: "Recusar qualquer aprendizado novo.", C: "Buscar capacitação contínua e desenvolver novas habilidades.", D: "Evitar o uso de ferramentas digitais." },
    correta: "C"
  },
  {
    pergunta: "Como a IA pode contribuir para a tomada de decisões dentro de uma empresa?",
    opcoes: { A: "Substituindo todas as decisões dos gestores.", B: "Analisando dados e fornecendo informações que auxiliam nas decisões.", C: "Eliminando a necessidade de planejamento.", D: "Garantindo que todas as decisões sejam corretas." },
    correta: "B"
  },
  {
    pergunta: "Como a IA pode ajudar na criação de conteúdos profissionais?",
    opcoes: { A: "Criando apenas números", B: "Produzindo textos e apresentações", C: "Substituindo todos os funcionários", D: "Impedindo a criação de documentos" },
    correta: "B"
  },
  {
    pergunta: "Qual é um risco do uso inadequado da IA nas empresas?",
    opcoes: { A: "Aumento da produtividade", B: "Melhoria na comunicação", C: "Vazamento de dados sigilosos", D: "Redução de tarefas repetitivas" },
    correta: "C"
  },
  {
    pergunta: "Qual habilidade é essencial para utilizar a IA de forma eficiente?",
    opcoes: { A: "Conhecimento avançado em programação", B: "Pensamento crítico para avaliar resultados", C: "Capacidade de desenvolver sistemas", D: "Domínio de equipamentos tecnológicos" },
    correta: "B"
  },
  {
    pergunta: "Como a IA pode melhorar a experiência dos clientes?",
    opcoes: { A: "Eliminando a necessidade de funcionários", B: "Oferecendo respostas sempre corretas", C: "Substituindo todas as formas de atendimento", D: "Personalizando serviços com base em dados" },
    correta: "D"
  },
  {
    pergunta: "Qual é o principal propósito da NEXUS?",
    opcoes: { A: "Substituir todos os profissionais", B: "Desenvolver apenas equipamentos tecnológicos", C: "Facilitar tarefas profissionais com IA", D: "Eliminar a necessidade de empresas" },
    correta: "C"
  },
  {
    pergunta: "Quais valores representam a identidade da NEXUS?",
    opcoes: { A: "Tradição, simplicidade e informalidade", B: "Inovação, modernidade e profissionalismo", C: "Competição, exclusividade e entretenimento", D: "Conservadorismo, complexidade e isolamento" },
    correta: "B"
  },
  {
    pergunta: "Como a NEXUS busca transformar o ambiente de trabalho?",
    opcoes: { A: "Integrando IA às atividades profissionais", B: "Aumentando a quantidade de tarefas manuais", C: "Reduzindo o uso de ferramentas digitais", D: "Substituindo totalmente a participação humana" },
    correta: "A"
  },
  {
    pergunta: "Qual resultado a NEXUS pretende alcançar nas rotinas profissionais?",
    opcoes: { A: "Maior dependência de processos manuais", B: "Redução da comunicação entre equipes", C: "Aumento da complexidade das atividades", D: "Mais agilidade, praticidade e eficiência" },
    correta: "D"
  },
  {
    pergunta: "O que diferencia a proposta da NEXUS?",
    opcoes: { A: "Priorizar métodos tradicionais de trabalho", B: "Conectar inovação tecnológica às necessidades profissionais", C: "Desenvolver tecnologias apenas para entretenimento", D: "Limitar a utilização da IA nas empresas" },
    correta: "B"
  }
];