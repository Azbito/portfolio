export const pt = {
	homeMetadataTitle: "Portfólio",
	technologies: "Tecnologias",
	success: "Sucesso",
	successCopy: "E-mail copiado com sucesso!",
	homeMetadataDescription: "Site Portfólio de desenvolvedor",
	introduction: "Olá! Chamo-me Thiago!",
	history: `<p>Sou desenvolvedor com experiência em C++, para <b class="text-primary">desenvolvimento de softwares.</b> No <b class="text-primary">front-end</b>, trabalho com ReactJS, NextJS, Remix e Vue, sempre focado em melhorar a experiência do usuário com interfaces simples e funcionais. No <b class="text-primary">backend,</b> utilizo ferramentas como Fastify, PostgreSQL e MySQL para criar soluções que atendem às necessidades do projeto. Além disso, no <b class="text-primary">desenvolvimento de aplicativos móveis</b> utilizo React Native e Flutter, sempre buscando entregar algo prático e acessível.<br/><br/> Trabalho também com serviços como Docker para containerização e outros serviços como AWS, Firebase e Cloudflare. Sempre procurando as melhores ferramentas para cada situação.</p>`,
	iAm: "Sou",
	role: "desenvolvedor",
	contactMe: "Contato",
	projects: "Trabalhos",
	whoseLogo: "Logo - ",
	sourceCode: "Código fonte",
	site: "Site",
	padlock: "Cadeado",
	privateSourceCode: "O código fonte desse projeto é privado",
	"project-gfchaos": `Desenvolvedor de sistemas para um servidor MMORPG privado, focado na implementação de novos recursos, correções de bugs e otimização de desempenho.
<br/>
Desenvolvimento e manutenção de interfaces front-end para o servidor MMORPG GFChaos, garantindo uma experiência otimizada para aproximadamente 100 jogadores online diariamente.
<br/>
Responsável pela construção e gestão do servidor Discord, facilitando a interação e comunicação entre aproximadamente 1000 membros.
<br/>
Adição de novos conteúdos e funcionalidades ao jogo para proporcionar uma experiência dinâmica e envolvente para a comunidade.
<br/>
Utilização de habilidades de engenharia reversa para resolver problemas técnicos complexos e otimizar o desempenho do servidor.
<br/>
Revisão e correção de traduções em inglês e francês.
<br/>
Melhoria do launcher, desenvolvido em Electron, para medidas de segurança contra cheats.
`,
	"project-chaosify-editor": `
Editor de mapas de jogo que gera mapas a partir de arquivos de FSM e colisões via arquivos SMP para o jogo GFChaos.
<br/>
<br/>
RECURSOS:
<br/>
- Manipulação de objetos em um mapa;
<br/>
- Manipulação de heightmap;
<br/>
- Manipulação de texturas;
<br/>
- Manipulação de colisões.
`,
	"project-chaosify": `DLL que Impede que o usuário manipule a memória do jogo GFChaos, bloqueando programas como IDA, OLLYDBG, CheatEngine, etc., para que não sejam executados simultaneamente ao jogo. Para evitar que o jogador trapaceie em filas ranqueadas para obter a classificação mais alta, foi aplicada a técnica de mutex. Portanto, o jogador não pode abrir o launcher/executável mais de uma vez. Se tentar abrir, ele fechará e o jogo continuará normalmente. Atividades maliciosas são detectadas e enviadas para um chat de servidor de Staff via webhooks.
<br/>
Acompanha também com a biblioteca do Discord RPC para sinalizar aos seus amigos do Discord o jogo que você está jogando, nome do seu personagem, nível, classe e o mapa que você está.
<br/>
Em seu código original de GFChaos, não é possível manipulação gráfica de névoa. Foi adicionado também uma tecla que ao ser pressionada, a névoa desaparecerá; deixando assim o mapa limpo.
`,
	"project-babama": `
Site desenvolvido para facilitar aos jogadores ãs buscas de itens do jogo Grand Fantasia, utilizando algoritmo de Levenshtein para buscas de aproximidade, já que os jogadores utilizam gírias ou minificam o nome para certos itens. Além disso, contém filtros de flags de bitwise para encontrar itens que tem as características desejadas
`,
	"project-bood-pdv": `
  Software desenvolvido para atender as necessidades dos restaurantes para gestão financeira e pedidos.
`,
	"project-gym": `
Um projeto backend que realiza CRUD de academias, check-ins e alunos. Os alunos só podem fazer check-in se estiverem realmente na academia usando uma fórmula matemática para calcular isso. A autenticação dos alunos é feita por token JWT.
`,
	"project-nes": `
	Os emuladores de NES utilizam CPU6502, o qual é utilizado em diversos consoles retrôs. Como, por exemplo, Nintendo Game Boy, Atari 2600, Atari 7800, Commodore 64, Apple II e BBC Micro. Para interpretação de jogos de NES, foi utilizado compilador Just-In-Time (JIT) com uma tabela escrita a mão das instruções Assembly que são utilizadas nesse modelo de CPU.
`,
	"project-pigz": `
Aplicativo móvel para entregadores. O entregador pode se registrar usando e-mail e senha ou mesmo com sua conta do Google. Se o cliente fizer o pedido, uma nova entrega será notificada no celular do entregador com o endereço. Cada entrega aceita/recusada será contada e mostrará na tela quantas foram aceitas e recusadas. No final, o valor ganho no dia aparece na tela.
`,
	"project-hardware": `
CLI desenvolvida para monitoramento da CPU
`,
	"project-forum": `
Um projeto fullstack de fórum. A autenticação é feita por token JWT. Os usuários podem postar suas opiniões com a comunidade, excluir suas próprias postagens e também usar sua própria foto de perfil fazendo upload delas no bucket AWS S3.
`,
} as const
