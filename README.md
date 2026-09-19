# Elis Regina Oliveira — Terapias Integrativas

Website oficial de **Elis Regina Oliveira**, terapeuta com atuação em **Terapias Integrativas** (CRTH-BR 13579 / ABRATH), em Franca/SP.

**No ar hoje:** https://terapeuta-next.vercel.app

**Cópia antiga:** https://espacocrieative.ai.studio (nome anterior; só muda republicando no Google AI Studio)

## 🌿 Sobre o projeto

- **Localização:** R. Lourival Vieira, 1 — Parque Moema, Franca/SP (presencial e on-line).
- **Serviços:** Cone Hindu, cones artesanais, Cromoterapia, Radiestesia com pêndulo, Radiônica, Meridianos/Reflexologia, Apometria on-line e Reiki.
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

## 📱 Regras de celular (a maioria dos acessos é mobile)

Medidas em iPhone 390×844 e 360×640 — não mexer sem remedir:

- **Peso da página:** as fotos saem em WebP por `<picture>` (600w e 1080w) com o JPG original como reserva. Sem isso a página pesava **4,2MB**; com isso, **~0,3–0,6MB**.
- **Cabeçalho:** uma linha, **55px** (já ocupou 240px = 28% da tela). Em tela pequena o menu de âncoras fica oculto — a página é única, o botão flutuante do WhatsApp assume o papel de CTA.
- **Legibilidade:** nada abaixo de **14px** em texto de leitura.
- **Área de toque:** mínimo de **44px** de altura em botões e links (WCAG 2.5.8 / Apple HIG).
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
```
