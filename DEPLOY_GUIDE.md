# 🚀 GUIA DE PUBLICAÇÃO - INCEPTION LANDING PAGE

## Passo a Passo para Publicar seu Projeto

---

## 📌 OPÇÃO RECOMENDADA: VERCEL

### Por que escolher Vercel?
- ⚡ Deployment instantâneo
- 🎯 Domínio gratuito
- 📊 Analytics inclusos
- 🔄 Updates automáticos com Git
- ✅ Melhor para projetos estáticos HTML/CSS/JS

### Passo 1: Preparar o Repositório Git

```bash
# 1. Abra o terminal na pasta do projeto
cd c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\19_Projeto_4

# 2. Inicialize o git (se ainda não tiver)
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o primeiro commit
git commit -m "Initial commit: Inception landing page"

# 5. Crie um repositório no GitHub
# Acesse https://github.com/new e crie um repositório chamado "inception-landing-page"

# 6. Adicione o remote e faça push
git remote add origin https://github.com/SEU_USUARIO/inception-landing-page.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy no Vercel

1. Acesse **https://vercel.com**
2. Clique em **"Sign Up"** (ou login se já tem conta)
3. Escolha **"Continue with GitHub"**
4. Autorize a integração
5. Clique em **"New Project"**
6. Selecione o repositório **"inception-landing-page"**
7. Clique em **"Import"**
8. Confirme as configurações (não precisa mudar nada)
9. Clique em **"Deploy"**

**✅ Pronto! Seu site estará online em alguns segundos!**

**Seu URL será algo como:**
```
https://inception-landing-page-xyz123.vercel.app
```

---

## 🔗 OPÇÃO 2: NETLIFY

### Passo 1: Conectar ao GitHub

1. Acesse **https://netlify.com**
2. Clique em **"Sign up"**
3. Escolha **"GitHub"**
4. Autorize a aplicação
5. Clique em **"New site from Git"**
6. Selecione **GitHub** como provedor
7. Escolha o repositório **"inception-landing-page"**

### Passo 2: Configuração

- **Branch to deploy:** main
- **Build command:** (deixe vazio)
- **Publish directory:** . (ponto)

8. Clique em **"Deploy site"**

**✅ Seu site estará online!**

**URL:** `https://seu-projeto-nome.netlify.app`

---

## 📘 OPÇÃO 3: GITHUB PAGES

### Passo 1: Configurar o Repositório

1. Acesse seu repositório no GitHub
2. Vá para **"Settings"**
3. Role até **"GitHub Pages"**
4. Em **"Source"**, selecione **"Deploy from a branch"**
5. Escolha **"main"** como branch
6. Clique em **"Save"**

**✅ Seu site estará disponível em:**
```
https://seu-usuario.github.io/inception-landing-page
```

---

## ☁️ OPÇÃO 4: CLOUDFLARE PAGES

### Passo 1: Deploy

1. Acesse **https://pages.cloudflare.com**
2. Clique em **"Create a project"**
3. Conecte seu GitHub
4. Selecione o repositório
5. Confirme as configurações
6. Clique em **"Save and deploy"**

**✅ Seu site estará em:**
```
https://seu-projeto.pages.dev
```

---

## 📋 CHECKLIST PRÉ-PUBLICAÇÃO

Antes de publicar, verifique:

- ✅ Todos os arquivos estão na pasta (index.html, styles.css, main.js, etc)
- ✅ O arquivo `index.html` está na raiz da pasta
- ✅ Não há erros no console do navegador
- ✅ O site funciona corretamente localmente
- ✅ As imagens carregam corretamente
- ✅ O design é responsivo (teste em mobile)
- ✅ Todos os links internos funcionam

---

## 🧪 TESTE LOCAL ANTES DE PUBLICAR

```bash
# Python 3 (recomendado)
python -m http.server 8000

# Abra em seu navegador
http://localhost:8000
```

---

## 📞 RESUMO DOS DOMÍNIOS

| Plataforma | URL | Tempo Deploy |
|-----------|-----|-------------|
| Vercel | inception-xxx.vercel.app | < 1 min |
| Netlify | inception-xxx.netlify.app | < 2 min |
| GitHub Pages | usuario.github.io/inception | < 5 min |
| Cloudflare | inception-xxx.pages.dev | < 3 min |

---

## 💡 DICAS IMPORTANTES

1. **GitHub é obrigatório** para Vercel, Netlify e Cloudflare
2. **Vercel é a mais rápida** para projetos estáticos
3. **GitHub Pages é grátis** se você usar seu domínio pessoal
4. **Mantenha seu repositório público** para deploy automático
5. **Qualquer push para main** faz redeploy automático

---

## ❓ COMO ATUALIZAR O SITE APÓS PUBLICAÇÃO

```bash
# 1. Faça as alterações nos arquivos
# 2. No terminal, execute:

git add .
git commit -m "Descrição das mudanças"
git push origin main

# 3. Aguarde 1-2 minutos
# 4. Seu site será atualizado automaticamente!
```

---

## 🆘 SOLUÇÃO DE PROBLEMAS

### Imagens não carregam
- Verifique se as imagens estão na pasta `/images`
- Confirme que o caminho no HTML está correto

### Estilos não aparecem
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Verifique se o `styles.css` está na raiz

### JavaScript não funciona
- Verifique o console (F12 > Console)
- Confirme que `main.js` está na raiz

---

## ✨ PARABÉNS!

Seu projeto está pronto para ir ao ar! 🎉

**Próximos passos:**
1. Escolha uma plataforma de deployment
2. Siga os passos acima
3. Compartilhe seu link
4. Envie na plataforma EBAC

---

**Última atualização:** Dezembro 2025
**Status:** ✅ Pronto para produção
