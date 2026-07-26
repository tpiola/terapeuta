# Checklist de entrega e deploy

## Variáveis de ambiente na Vercel

Configure em **Project Settings → Environment Variables** para Production, Preview e Development:

- `NEXT_PUBLIC_SITE_URL`: URL pública final, sem barra no final.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: token real fornecido pelo Google Search Console. Não use o valor demonstrativo do arquivo `.env.example`.
- `NEXT_PUBLIC_GTM_ID`: opcional; use apenas depois de criar o contêiner no Google Tag Manager.

O site continua funcionando quando os dois identificadores Google estão vazios. Nesse caso, nenhuma tag falsa é publicada.

## Verificação do Google Search Console

1. Faça o deploy no domínio final.
2. Adicione a propriedade do domínio no Search Console.
3. Escolha o método **Tag HTML**.
4. Copie somente o valor do atributo `content` da meta tag.
5. Salve esse valor em `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` na Vercel.
6. Gere um novo deploy e conclua a verificação no Google.
7. Envie `https://SEU-DOMINIO/sitemap.xml`.

## Validação antes da entrega

```bash
npm ci
npm run lint
npm run build
```

Depois do deploy, valide:

- formulário abrindo o WhatsApp com os dados preenchidos;
- mapa incorporado;
- links de Instagram e Facebook;
- `/robots.txt` e `/sitemap.xml`;
- metadados no Rich Results Test;
- layout em celular e desktop;
- política de cookies, telefone, e-mail, endereço e alegações profissionais com a cliente.

## Observação sobre dados estruturados

Avaliações e quantidades não devem ser simuladas. O schema de avaliação foi removido até existirem avaliações verificáveis da cliente. Informações profissionais e alegações de experiência devem ser confirmadas antes da publicação no domínio definitivo.
