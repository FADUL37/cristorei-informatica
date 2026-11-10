# Cristo Rei Informática — GitHub + Cloudflare

Site completo: serviços, 4 banners editáveis, pedidos de agendamento, chat com atualização a cada 2,5 segundos e painel /painel. O horário depende de confirmação pela equipe. Dados persistem no D1; este pacote não contém atendimentos ou senhas do site anterior.

## 1. GitHub
Crie um repositório `cristorei-informatica` na conta FADUL37. Extraia o ZIP e envie o conteúdo para a raiz do repositório (não envie o ZIP). Inclua `.github` e `.openai`. Use a branch `main`. Não use GitHub Pages nesta versão.

## 2. Cloudflare
Na sua conta, configure seu subdomínio workers.dev e crie um banco D1 chamado `cristorei-informatica-db`. Copie o Database ID e o Account ID. Crie um API Token restrito à conta com permissões de edição de Workers Scripts e D1. Não envie o token na conversa nem o coloque nos arquivos do site.

## 3. GitHub: Settings → Secrets and variables → Actions
Em Secrets crie:
- CLOUDFLARE_API_TOKEN: token Cloudflare.
- CLOUDFLARE_ACCOUNT_ID: ID da conta.
- ADMIN_KEY: senha longa e exclusiva para o painel. Não reutilize a senha anterior.
Em Variables crie:
- CLOUDFLARE_D1_DATABASE_ID: ID do banco D1.

## 4. Publicar
Em Actions, abra `Publicar site completo` e clique em `Run workflow`. O fluxo instala, verifica TypeScript, compila, aplica migrações pendentes, configura a senha e publica. Também roda a cada push na main. Se a primeira execução ocorrer antes de configurar os Secrets, ela falhará: configure e execute novamente.
Abra o endereço workers.dev mostrado nos logs. A gestão fica em `/painel`, usando ADMIN_KEY como senha.
Na hospedagem própria, o frontend fica acessível aos visitantes; o painel exige senha. Não há login ChatGPT obrigatório.

## 5. Teste completo
1. No site, crie um pedido com dados de teste.
2. Em outro navegador, entre em /painel e selecione o pedido.
3. Responda e confira a resposta no chat do cliente.
4. Solicite data e horário; confirme no painel e confira a situação do pedido.
5. Altere um banner e atualize a página inicial.
6. Atualize os navegadores e confira que o histórico permanece.
O cliente recupera a conversa no mesmo navegador. Não há recuperação em outro dispositivo nem envio automático por WhatsApp/e-mail; o contato informado permite retorno manual.

## Desenvolvimento local (Node 22.13+)
Execute `npm ci`. Defina CLOUDFLARE_D1_DATABASE_ID no ambiente (para banco local pode ser 00000000-0000-4000-8000-000000000000). Execute `npm run build:cloudflare`, depois `npm run db:local`. Copie `.dev.vars.example` para `.deploy/.dev.vars` e escolha a senha local. Execute `npm run dev:built`. O banco local é separado do D1 remoto.

## Estado da entrega
A preparação não significa que o site já está publicado na sua conta. A implantação depende dos IDs, token e senha configurados por você. Hospedagem PHP/cPanel exige adaptação.
