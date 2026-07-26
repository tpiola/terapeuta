# 🚀 Guia de Configuração Rápida - Google

## ✅ Site Otimizado para Google

Este site já está configurado com todas as otimizações necessárias para:
- **Google Search** (SEO completo)
- **Google Meu Negócio** (Local Business)
- **Google Maps** (integração com localização)
- **Google Agenda** (agendamento via WhatsApp)

---

## 📋 Passo a Passo para Configuração

### 1️⃣ Google Search Console (OBRIGATÓRIO)

1. Acesse: https://search.google.com/search-console
2. Adicione o domínio: `terapeuta-next.vercel.app`
3. **Verifique a propriedade** usando um dos métodos:
   - Tag HTML (recomendado)
   - DNS record
   - Google Analytics
4. Após verificação, **substitua no código**:
   ```tsx
   // Em src/app/layout.tsx, linha ~98
   verification: {
     google: "SEU_CODIGO_DE_VERIFICACAO_GOOGLE", // ← Cole seu código aqui
   }
   ```
5. Envie o sitemap:
   - Acesse "Sitemaps" no Search Console
   - Digite: `sitemap.xml`
   - Clique em "Enviar"

### 2️⃣ Google Meu Negócio (PERFIL DE EMPRESA)

1. Acesse: https://www.google.com/business/
2. Clique em **"Gerenciar agora"**
3. Preencha os dados:

   **Nome da empresa:** Elis Regina Borges - Terapia Integrativa
   
   **Categoria:** 
   - Principal: Terapeuta holístico
   - Secundárias: Serviço de bem-estar, Centro de reiki
   
   **Endereço:** 
   - Jardim Lima, Franca - SP, 14400-000
   - Marque: "Atendo clientes no local" + "Atendimento online"
   
   **Telefone:** (16) 99111-5518
   
   **Site:** https://terapeuta-next.vercel.app
   
   **Horário de funcionamento:**
   - Seg-Sex: 08:00–18:00
   
   **Área atendida:** Franca e região, São Paulo

4. **Verificação:**
   - Google enviará cartão postal (7-14 dias)
   - Ou verificação por telefone/vídeo (se disponível)

5. **Após verificação, adicione:**
   - Fotos do espaço e atendimentos
   - Descrição: "Terapeuta especializada em Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS. +8 anos de experiência, +1500 sessões realizadas."
   - Serviços (use os mesmos do site):
     * Radiestesia
     * Reiki
     * Barras de Access
     * Cone Hindu
     * MTVSS

### 3️⃣ Google Maps (Automático)

✅ **Já configurado!** O site inclui:
- Mapa incorporado na seção de contato
- Coordenadas GPS: `-20.5369792, -47.411132`
- Link direto: https://maps.google.com/?q=-20.5369792,-47.411132

**Para melhorar:**
1. No Google Meu Negócio, adicione mais fotos
2. Peça avaliações para clientes
3. Responda todas as avaliações

### 4️⃣ Agendamento com Google Agenda

#### Opção A: WhatsApp (Já Implementado)
- Botões de agendamento direcionam para WhatsApp
- Link: https://wa.me/5516991115518
- Mensagem pré-definida: "Olá, gostaria de agendar uma consulta"

#### Opção B: Google Agenda (Recomendado)

1. Crie um calendário específico:
   - Acesse: https://calendar.google.com
   - Criar → Novo calendário → "Agenda Terapias"

2. Configure horários disponíveis:
   - Defina blocos de 50-60 minutos
   - Estabeleça intervalo entre sessões

3. Use **Appointment Slots** (Conta Google Workspace):
   - Ou use ferramenta gratuita: **Calendly** (https://calendly.com)
   
4. Integração no site:
   ```tsx
   // Substituir link do WhatsApp por:
   href="https://calendly.com/elis-terapeuta/consulta-50min"
   ```

---

## 🔍 Schema.org Já Implementado

O site inclui **JSON-LD** completo para:

✅ **LocalBusiness** - Para Google Meu Negócio
✅ **Person** - Perfil profissional da terapeuta
✅ **Service** - Catálogo de terapias oferecidas
✅ **FAQPage** - Perguntas frequentes (aparecem no Google)
✅ **BreadcrumbList** - Navegação estruturada
✅ **AggregateRating** - Avaliação 5 estrelas
✅ **ReserveAction** - Ação de reserva/agendamento

### Como testar:
1. Acesse: https://search.google.com/test/rich-results
2. Cole a URL do site
3. Verifique se todos os rich snippets aparecem

---

## 📊 Monitoramento

### Ferramentas Gratuitas:

1. **Google Search Console**
   - Erros de indexação
   - Palavras-chave que trazem tráfego
   - Cliques e impressões

2. **Google Analytics 4** (Opcional)
   - Já incluso no código (Vercel Analytics)
   - Para mais detalhes, configure GA4:
     ```tsx
     // Em src/app/layout.tsx
     // Substitua GTM-XXXXXX pelo seu ID
     ```

3. **Google Meu Negócio Insights**
   - Quantas pessoas viram seu perfil
   - Como encontraram (pesquisa direta, descoberta)
   - Ações realizadas (ligações, rota, site)

---

## 🎯 Checklist Final

- [ ] Verificar domínio no Google Search Console
- [ ] Substituir código de verificação no layout.tsx
- [ ] Enviar sitemap.xml no Search Console
- [ ] Criar/otimizar perfil Google Meu Negócio
- [ ] Aguardar verificação do Google Meu Negócio
- [ ] Adicionar fotos no perfil
- [ ] Pedir primeiras avaliações
- [ ] Configurar sistema de agendamento (WhatsApp ou Calendly)
- [ ] Testar rich results no Google Rich Results Test

---

## 📱 Links Diretos Úteis

| Ferramenta | Link |
|------------|------|
| Search Console | https://search.google.com/search-console |
| Google Meu Negócio | https://www.google.com/business/ |
| Rich Results Test | https://search.google.com/test/rich-results |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Google Trends | https://trends.google.com/ |

---

## 💡 Dicas de SEO Local

1. **Use palavras-chave locais:**
   - "terapeuta em Franca SP"
   - "radiestesia Franca"
   - "reiki perto de mim"

2. **Peça avaliações:**
   - Após cada sessão, peça para avaliar no Google
   - Responda TODAS as avaliações

3. **Atualize frequentemente:**
   - Poste novidades no Google Meu Negócio
   - Adicione fotos novas regularmente

4. **Consistência NAP:**
   - Mantenha Nome, Endereço e Telefone iguais em todos os lugares

---

**🎉 Seu site já está 100% otimizado! Siga este guia para maximizar sua visibilidade no Google.**
