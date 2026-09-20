# Elis Regina Oliveira — Terapias Integrativas

Website oficial de **Elis Regina Oliveira**, terapeuta com atuação em **Terapias Integrativas** (CRTH-BR 13579 / ABRATH), em Franca/SP.

**No ar hoje:** https://terapeuta-next.vercel.app

**Cópia antiga:** https://espacocrieative.ai.studio (nome anterior; só muda republicando no Google AI Studio)

## 🌿 Sobre o projeto

- **Localização:** Rua Lourival Vieira, Residencial São Vicente, Franca/SP — CEP 14405-590 (presencial e on-line).
  > Sem número de casa: o site publica só a rua + CEP (número não confirmado pela cliente). **CONFERIR** o bairro: este README já disse "Parque Moema" e o site diz "Residencial São Vicente".
- **Serviços:** Reflexologia podal e Apometria (os dois focos do site), mais Cone Hindu com cones artesanais, Cromoterapia, Radiestesia com pêndulo, Radiônica e Reiki. **Não há acupuntura, medicina tradicional chinesa nem meridianos** — foi removido a pedido da cliente, e copy/alt/schema não devem reintroduzir esses termos.
- **Stack:** HTML5 semântico + CSS3, **sem framework e sem build**. Uma única página (`index.html`), imagens em `img/`, publicação estática.
- **LGPD:** consentimento explícito no formulário antes de abrir o WhatsApp.

## ⚠️ Estado do endereço do site (ler antes de mexer)

| Endereço | Status |
|---|---|
| `https://terapeuta-next.vercel.app` | **no ar** — publicado automaticamente por este repositório (Vercel) |
| `espacocrieative.com.br` | **NÃO registrado** (RDAP 404) — era o domínio planejado |
| `terapeuta-ten.vercel.app` | **404** (DEPLOYMENT_NOT_FOUND) — deploy antigo removido |

`canonical`, `og:url`, `og:image`, `robots.txt`, `sitemap.xml` e o JSON-LD apontam para
**`https://terapeuta-next.vercel.app`** — o endereço que este repositório publica. Quando houver
domínio próprio, trocar nesses pontos (o `index.html` tem um comentário marcando onde).

## 🖼️ Política de imagem (não negociável)

**Só entra foto real.** A auditoria de 2026-09 encontrou, em produção, 5 imagens **geradas por IA**
apresentadas como se fossem a sala e o trabalho da Elis (sala "Chromotherapy Sanctuary" com placa em
inglês, mãos de duas pessoas diferentes segurando o pêndulo, cliente desconhecida numa maca, e um
mockup de celular com conversa de WhatsApp **em branco** usado como prova de atendimento). Todas foram
**removidas**, junto com o arquivo do site antigo que também ficava público em `/arquivo/`.

- Fotos reais em uso: `elis-regina-hero.jpg` (retrato), `elis-regina-expert.jpg` (retrato no espaço dela),
  `cone-hindu-artesanal.jpg` (os cones que ela enrola à mão), `mapa-consultorio.*` e `qrcode-whatsapp.*`.
- Os cards de terapia **não usam foto** (ícone + texto) porque não existe foto real da prática. Quando a
  cliente mandar fotos reais (sala, pés, mãos, atendimento), devolva as fotos aos cards — não use banco
  de imagens nem gerador.
- Nunca publique conversa de cliente (WhatsApp) sem autorização por escrito: é dado pessoal (LGPD).

## 📱 Regras de celular (a maioria dos acessos é mobile)

Medidas em iPhone 390×844 e 360×640 — não mexer sem remedir:

- **Peso da página:** medido em 390×844 com rolagem completa: **537 KB** (documento 95 KB). As imagens saem em WebP por `<picture>`; as fontes respondem com `Cache-Control: immutable` (regra nova no `vercel.json`).
- **Cabeçalho:** uma linha, **63px** no celular (já ocupou 240px = 28% da tela). Em tela pequena o menu de âncoras fica oculto — a página é única, o botão flutuante do WhatsApp assume o papel de CTA.
- **Legibilidade:** nada abaixo de **14px** em texto de leitura.
- **Área de toque:** mínimo de **44px** de altura em botões e links (WCAG 2.5.8 / Apple HIG).
- **A capa inteira cabe na primeira tela** (inclusive a foto): 39px de sobra em 360×640 e 188px em 390×844 — medido, não estimado.
- **axe-core: 0 violações** (WCAG 2.0/2.1/2.2 AA) nas 7 larguras testadas: 360, 390, 414, 430, 768, 1280, 1440.
- **Toda imagem precisa de `width`/`height`** para não deslocar o layout ao carregar.

## 🔒 Diretrizes do repositório

- Este repositório é **único e protegido**: `main` com force-push e exclusão bloqueados, administradores incluídos (`enforce_admins`).
- **Não criar repositórios, projetos ou deploys paralelos.** Sempre atualizar o que já existe.
- Nada de credenciais no repositório; dados do negócio (endereço, telefone, horários) só quando confirmados pela cliente — **nunca inventar avaliações, números ou endereços**.

## ✅ Verificação automática

`.github/workflows/deploy.yml` roda em cada push e pull request para `main` e falha se:

- `index.html`, `robots.txt`, `sitemap.xml`, `manifest.json`, `vercel.json` ou `img/` faltarem;
- alguma imagem referenciada no HTML não existir no repositório;
- `robots.txt` e `sitemap.xml` apontarem para endereços diferentes.

## 📁 Estrutura

```
index.html      página única (CSS e JS inline)
img/            fotos otimizadas (jpg original + webp 600w/1080w)
manifest.json   PWA (nome, cores, ícones)
robots.txt      indexação + sitemap
sitemap.xml     mapa de URLs
vercel.json     cabeçalhos de segurança e cache
arquivo/        versões antigas, mantidas só para consulta
.github/        validação automática, modelos de issue/PR, dependabot, CODEOWNERS
LICENSE         direitos reservados (conteúdo e marca são da titular)
CONTRIBUTING.md regras para alterar este site (medir no celular antes)
SECURITY.md     como reportar falha de segurança
CODE_OF_CONDUCT.md
```
