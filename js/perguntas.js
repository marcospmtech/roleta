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
  },
  {
    pergunta: "Qual é a principal diferença entre um aparelho comum e um dispositivo com IA?",
    opcoes: { A: "O dispositivo com IA pode aprender padrões e adaptar algumas ações", B: "O dispositivo com IA nunca precisa de energia", C: "O aparelho comum sempre é mais rápido" },
    correta: "A"
  },
  {
    pergunta: "Como a IA pode ajudar a reduzir o consumo de energia em casa?",
    opcoes: { A: "Mantendo todos os aparelhos ligados", B: "Ajustando luzes e temperatura conforme o uso", C: "Desligando a internet permanentemente" },
    correta: "B"
  },
  {
    pergunta: "Como assistentes virtuais conseguem responder a comandos de voz?",
    opcoes: { A: "Por meio de reconhecimento e processamento da linguagem", B: "Por meio de leitura de pensamentos", C: "Por meio de comandos escritos em papel" },
    correta: "A"
  },
  {
    pergunta: "Qual é um risco de conectar muitos dispositivos domésticos à internet?",
    opcoes: { A: "A casa não poderá ter lâmpadas", B: "Os aparelhos deixam de precisar de manutenção", C: "Aumenta a possibilidade de ataques digitais" },
    correta: "C"
  },
  {
    pergunta: "O que significa personalização em sistemas de IA?",
    opcoes: { A: "O sistema adapta sugestões às preferências do usuário", B: "O sistema oferece sempre a mesma resposta", C: "O sistema funciona sem receber informações" },
    correta: "A"
  },
  {
    pergunta: "Como um aspirador robô pode escolher seu caminho pela casa?",
    opcoes: { A: "Seguindo sempre uma linha reta", B: "Usando sensores e recursos de navegação para mapear o ambiente", C: "Esperando que alguém o carregue por todos os cômodos" },
    correta: "B"
  },
  {
    pergunta: "Por que a privacidade é importante ao usar assistentes virtuais?",
    opcoes: { A: "Porque eles não podem executar tarefas", B: "Porque podem coletar ou processar dados pessoais", C: "Porque eliminam todas as senhas" },
    correta: "B"
  },
  {
    pergunta: "Qual alternativa apresenta um uso da IA na alimentação?",
    opcoes: { A: "Impedir que alimentos estraguem em qualquer situação", B: "Garantir que toda receita fique perfeita", C: "Sugerir receitas com base nos ingredientes disponíveis" },
    correta: "C"
  },
  {
    pergunta: "O que é automação doméstica?",
    opcoes: { A: "O uso de tecnologias para executar tarefas com pouca intervenção humana", B: "A realização manual de todas as tarefas", C: "A substituição de todos os móveis por aparelhos" },
    correta: "A"
  },
  {
    pergunta: "Por que a IA pode cometer erros ao reconhecer pessoas?",
    opcoes: { A: "Porque todas as câmeras funcionam sem sensores", B: "Porque os sistemas podem interpretar dados de forma incorreta", C: "Porque a IA só funciona durante o dia" },
    correta: "B"
  },
  {
    pergunta: "Como a IA pode contribuir para a acessibilidade?",
    opcoes: { A: "Impedindo que usuários controlem aparelhos", B: "Exigindo que todas as tarefas sejam manuais", C: "Permitindo controlar dispositivos por voz e automatizar atividades" },
    correta: "C"
  },
  {
    pergunta: "Qual prática ajuda a proteger uma casa inteligente?",
    opcoes: { A: "Usar a mesma senha em todos os serviços", B: "Manter os aparelhos atualizados e usar senhas fortes", C: "Compartilhar senhas com desconhecidos" },
    correta: "B"
  },
  {
    pergunta: "O que pode ser uma consequência da dependência excessiva da IA?",
    opcoes: { A: "A perda de prática em resolver certas tarefas sem tecnologia", B: "A garantia de que nunca haverá falhas", C: "O fim de todos os riscos digitais" },
    correta: "A"
  },
  {
    pergunta: "Como a IA pode ajudar na manutenção de eletrodomésticos?",
    opcoes: { A: "Impedindo qualquer desgaste", B: "Substituindo todas as peças automaticamente", C: "Identificando sinais de falhas e alertando sobre manutenção" },
    correta: "C"
  },
  {
    pergunta: "O que é processamento local em um dispositivo inteligente?",
    opcoes: { A: "Enviar sempre todos os dados para redes sociais", B: "Realizar parte do processamento no próprio dispositivo", C: "Desligar os sensores para economizar espaço" },
    correta: "B"
  },
  {
    pergunta: "Por que dispositivos de marcas diferentes podem ter problemas para funcionar juntos?",
    opcoes: { A: "Porque todos usam exatamente a mesma tecnologia", B: "Porque dispositivos inteligentes não usam internet", C: "Porque podem utilizar padrões ou sistemas incompatíveis" },
    correta: "C"
  },
  {
    pergunta: "Qual é um benefício de usar IA para organizar compromissos?",
    opcoes: { A: "Receber lembretes e organizar horários com mais facilidade", B: "Eliminar a necessidade de conferir a agenda", C: "Garantir que nenhum compromisso seja esquecido" },
    correta: "A"
  },
  {
    pergunta: "Por que é importante verificar informações fornecidas pela IA?",
    opcoes: { A: "Porque a IA sempre acessa informações corretas", B: "Porque ela pode produzir respostas incorretas ou desatualizadas", C: "Porque todas as respostas são anúncios" },
    correta: "B"
  },
  {
    pergunta: "Como a IA pode contribuir para uma casa mais sustentável?",
    opcoes: { A: "Aumentando o desperdício de água", B: "Mantendo luzes acesas o tempo todo", C: "Ajudando a monitorar e reduzir o uso de energia e água" },
    correta: "C"
  },
  {
    pergunta: "Qual é a atitude mais responsável ao utilizar IA nas tarefas diárias?",
    opcoes: { A: "Usar a tecnologia com senso crítico e proteger os dados pessoais", B: "Aceitar todas as sugestões sem pensar", C: "Permitir acesso irrestrito a todas as informações pessoais" },
    correta: "A"
  }
];
