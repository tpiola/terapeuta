# Política de Segurança

## Sobre este site

Site estático de página única: **não tem banco de dados, servidor de aplicação
nem área de login**. Não há dados de usuário armazenados. O formulário apenas
monta uma mensagem e abre o WhatsApp da titular.

## Como reportar uma vulnerabilidade

Envie um e-mail para **contato@reidasvendas.com.br** com:

- o endereço afetado e o que acontece;
- passos para reproduzir;
- se possível, uma captura de tela.

**Não** abra issue pública para falhas de segurança. Respondemos em até 5 dias
úteis.

## O que cuidamos

- Cabeçalhos de segurança no `vercel.json` (nosniff, SAMEORIGIN, referrer).
- Nenhuma credencial, token ou chave no repositório.
- Nenhum script de terceiros na página (sem analytics, sem rastreador — só o
  mapa do Google em `iframe`).
- Links externos com `rel="noopener noreferrer"`.

## Fora do escopo

- Ataques de força bruta (não há login).
- Vulnerabilidades do Google Maps (iframe de terceiro) ou da hospedagem.
- Conteúdo de texto sugerindo tratamento médico — é questão editorial, não de
  segurança.
