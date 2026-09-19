# Como contribuir

Site oficial de **Elis Regina Oliveira** (Terapias Integrativas — Franca/SP).
É uma página única em HTML/CSS/JS, **sem framework e sem build**.

## Antes de abrir um pull request

1. **Rode a validação:** `bash .github/workflows/deploy.yml` é executado
   automaticamente em cada PR. Localmente, o essencial é:
   ```bash
   test -f index.html && test -d img && test -f manifest.json
   ```
2. **Meça no celular, não no olho.** A maior parte dos acessos é mobile.
   Verificar em 390×844 **e** 360×640:
   - nenhum texto de leitura abaixo de **14px**;
   - nenhuma área de toque abaixo de **44px** de altura;
   - sem rolagem horizontal;
   - peso da página abaixo de **1MB** (hoje ~0,6MB).
3. **Imagem nova entra em dois tamanhos** (`-600.webp` e `-1080.webp`) com o
   JPG original como reserva em `<picture>`, com `width`/`height` no `<img>`.
   Sem isso a página volta a pesar 4MB.
4. **Nunca inventar dados.** Endereço, telefone, horários, registro
   profissional e avaliações só entram com confirmação da titular. Nada de
   texto genérico ou "cara de IA".
5. **Não criar repositórios, projetos ou deploys paralelos.** Atualizar sempre
   o que já existe.

## Fluxo

```bash
git checkout -b fix/o-que-muda
# editar
git commit -m "fix: descreve a mudança"
git push origin fix/o-que-muda
```
Abra o pull request para `main`. A branch `main` é protegida: sem force-push e
sem exclusão.

## O que NÃO fazer

- Reescrever o `index.html` inteiro por causa de um ajuste.
- Trocar as fotos por imagens de banco de imagens.
- Mexer nas URLs de `canonical`/`robots.txt`/`sitemap.xml` sem trocar as três
  juntas (a validação falha de propósito).
