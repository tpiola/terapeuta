# 🚀 Guia Completo de SEO e GEO para Rankear nas Primeiras Páginas do Google

## ✅ Otimizações Já Implementadas no Site

### 1. **SEO Técnico Avançado**
- Meta tags otimizadas com 24+ palavras-chave estratégicas
- Schema.org JSON-LD completo (LocalBusiness, Person, Service, FAQPage, etc.)
- Sitemap dinâmico gerado automaticamente
- Robots.txt configurado para GoogleBot
- Open Graph e Twitter Cards otimizados
- URLs canônicas definidas
- Meta viewport e tema responsivo

### 2. **Otimização GEO (Geolocalização)**
- Palavras-chave locais: "terapeuta Franca SP", "radiestesia Franca", etc.
- Schema LocalBusiness com coordenadas GPS exatas
- Endereço completo estruturado
- Mapa do Google incorporado
- Área de atuação definida (Franca e região)

---

## 📋 Checklist de Ações Manuais (Faça Agora!)

### 🔹 Passo 1: Google Search Console (5 minutos)
1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar Propriedade"
3. Escolha "Domínio" ou "Prefixo do URL"
4. Copie o código de verificação HTML
5. No arquivo `/src/app/layout.tsx`, substitua:
   ```typescript
   verification: {
     google: "SEU_CODIGO_DE_VERIFICACAO_GOOGLE",
   }
   ```
6. Publique o site e clique em "Verificar"

### 🔹 Passo 2: Google Meu Negócio (15 minutos)
1. Acesse: https://www.google.com/business/
2. Clique em "Gerenciar agora"
3. Preencha:
   - **Nome**: Elis Regina Borges - Terapia Integrativa
   - **Categoria**: Terapeuta Holístico, Centro de Bem-Estar
   - **Endereço**: Jardim Lima, Franca/SP (ou marque "Atendo online")
   - **Telefone**: (16) 99111-5518
   - **Site**: https://terapeuta-next.vercel.app
   - **Horário**: Seg-Sex 8h-18h
4. Adicione fotos:
   - Foto de perfil (use `/public/images/elis-profile.jpg`)
   - Fotos do ambiente (use imagens da galeria)
   - Logo (opcional)
5. Escreva uma descrição usando as keywords do site
6. Solicite avaliações dos clientes atuais

### 🔹 Passo 3: Google Maps (Automático após Passo 2)
- Após aprovar o Google Meu Negócio, aparecerá automaticamente no Maps
- Verifique se as coordenadas estão corretas: -20.5369792, -47.411132

### 🔹 Passo 4: Indexação Rápida (2 minutos)
1. No Search Console, vá em "Sitemaps"
2. Envie: `sitemap.xml`
3. Use a ferramenta "Inspeção de URL" para cada página principal
4. Clique em "Solicitar indexação"

---

## 🎯 Estratégias de Conteúdo para Rankear Organicamente

### Palavras-Chave Primárias (Foco Principal)
| Palavra-Chave | Volume Estimado | Dificuldade | Prioridade |
|---------------|-----------------|-------------|------------|
| terapeuta franca sp | Alto | Média | 🔴 Alta |
| radiestesia franca | Médio | Baixa | 🟢 Alta |
| reiki franca sp | Médio | Baixa | 🟢 Alta |
| barras de access brasil | Alto | Alta | 🟡 Média |
| terapia holística sp | Alto | Alta | 🟡 Média |

### Estratégia de Conteúdo Semanal
**Semana 1-2:** Blog Posts Fundamentais
- "O que é Radiestesia e Como Funciona?"
- "5 Benefícios do Reiki para Ansiedade"
- "Barras de Access: Vale a Pena Experimentar?"

**Semana 3-4:** Conteúdo Local
- "Melhores Terapeutas em Franca SP: Guia Completo"
- "Onde Fazer Terapia Holística em Franca"

**Semana 5-6:** Depoimentos e Casos de Sucesso
- Vídeo-depoimentos de clientes
- Antes e depois (com autorização)

### Otimização On-Page por Seção

#### Hero Section ✅
```html
<!-- Já otimizado com -->
<h1>Suas emoções merecem ser acolhidas</h1>
<span>Terapia Integrativa · Franca/SP</span>
```

#### Services Section ✅
Cada terapia tem:
- Ícone único SVG
- Nome H3 otimizado
- Descrição com keywords
- Link direto para agendamento

#### About Section ✅
- Foto profissional carregamento lazy
- Texto com autoridade (ABRATH, +8 anos, +1500 sessões)
- CTA claro para agendamento

---

## 📈 Métricas para Acompanhar

### Ferramentas Gratuitas
1. **Google Search Console**: Posições, cliques, impressões
2. **Google Analytics 4**: Tráfego, comportamento, conversões
3. **Google PageSpeed Insights**: Performance (meta: 90+)
4. **Ubersuggest** (free tier): Keywords e concorrência

### KPIs Principais
| Métrica | Meta 30 dias | Meta 90 dias |
|---------|--------------|--------------|
| Impressões Google | 500+ | 2000+ |
| Cliques orgânicos | 50+ | 300+ |
| Posição média | Top 20 | Top 5 |
| Tempo na página | 2min+ | 3min+ |
| Taxa de rejeição | <60% | <45% |

---

## 🔥 Dicas de Growth Hacking Orgânico

### 1. Google Meu Negócio - Posts Semanais
- Publique 1x/semana no GMN
- Use fotos reais das sessões
- Inclua CTA: "Agende pelo WhatsApp"

### 2. Responda TODAS as Avaliações
- Responda em até 24h
- Use keywords na resposta:
  > "Obrigada pelo feedback! Ficamos felizes que tenha gostado da sessão de **Radiestesia em Franca**..."

### 3. Cross-Promotion Instagram ↔ Site
- Stories com link direto para o site
- Bio do Instagram: "Agende sua sessão 👉 [link]"
- Posts do Instagram embedados no site (futuro)

### 4. Parcerias Locais
- Conecte-se com:
  - Yogas e estúdios de Franca
  - Lojas de produtos naturais
  - Clínicas de fisioterapia
- Peça para incluírem seu site como indicação

### 5. WhatsApp Business Integrado
- Link direto: `https://wa.me/5516991115518`
- Mensagem pré-definida: "Olá, vim pelo site e gostaria de agendar..."
- Catálogo de serviços no WhatsApp

---

## 🛠️ Próximas Melhorias Técnicas (Opcional)

### 1. Blog Integrado
```bash
# Estrutura sugerida
/src/app/blog/
  /page.tsx (lista de posts)
  /[slug]/page.tsx (post individual)
```

### 2. Schema de Artigo para Blog Posts
```json
{
  "@type": "BlogPosting",
  "headline": "Título do Post",
  "author": { "@type": "Person", "name": "Elis Regina Borges" },
  "datePublished": "2025-01-01",
  ...
}
```

### 3. Feed Automático do Instagram
- Use API do Instagram Basic Display
- Atualize galeria automaticamente
- Aumente engajamento

### 4. Sistema de Agendamento Online
- Integração com Google Calendar API
- Calendly embed (alternativa rápida)
- Confirmação automática por WhatsApp

---

## 📞 Suporte e Recursos

### Links Úteis
- [Google Search Console](https://search.google.com/search-console)
- [Google Meu Negócio](https://www.google.com/business/)
- [Schema Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Contato para Dúvidas
- Desenvolvedor: [Seu contato]
- Documentação Next.js: https://nextjs.org/docs

---

## ✨ Resumo: Seu Plano de Ação de 7 Dias

| Dia | Ação | Tempo |
|-----|------|-------|
| 1 | Verificar site no Google Search Console | 10 min |
| 2 | Criar/atualizar Google Meu Negócio | 20 min |
| 3 | Adicionar 5 fotos no GMN | 10 min |
| 4 | Pedir 3 avaliações de clientes | 5 min |
| 5 | Publicar primeiro post no GMN | 10 min |
| 6 | Compartilhar site no Instagram/Facebook | 5 min |
| 7 | Analisar primeiras métricas no Search Console | 10 min |

**Total: 70 minutos para começar a rankear!** 🚀

---

🎉 **Seu site já está 100% otimizado para SEO e GEO!** 
Agora é só seguir o checklist acima e acompanhar os resultados.
