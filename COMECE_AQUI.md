# 🚀 GUIA RÁPIDO - 3 PASSOS PARA PUBLICAR

## ✅ PASSO 1: CRIAR REPOSITÓRIO GITHUB (2 minutos)

1. Acesse: **https://github.com/new**
2. Preencha:
   - Repository name: `inception-landing-page`
   - Description: `Landing page do filme Inception`
   - Public (importante!)
3. Clique: **Create repository**
4. Copie a URL mostrada (será algo como: https://github.com/SEUUSUARIO/inception-landing-page)

---

## ✅ PASSO 2: FAZER PUSH DO CÓDIGO (3 minutos)

Abra o **PowerShell** e execute:

```powershell
# Entrar na pasta do projeto
cd "c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\19_Projeto_4"

# Inicializar git
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Inception landing page"

# Adicionar remote (SUBSTITUA SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/inception-landing-page.git

# Mudar branch
git branch -M main

# Fazer push
git push -u origin main
```

**Aguarde a sincronização terminar!**

---

## ✅ PASSO 3: PUBLICAR NO VERCEL (1 minuto) ⚡

### Opção A: Vercel (MAIS RÁPIDO - RECOMENDADO)

1. Acesse: **https://vercel.com**
2. Clique: **Sign Up**
3. Escolha: **Continue with GitHub**
4. Autorize se solicitado
5. Clique: **New Project**
6. Selecione: **inception-landing-page**
7. Clique: **Import**
8. Clique: **Deploy**

**Pronto! Seu site estará em:**
```
https://inception-landing-page-XXXXX.vercel.app
```

---

### Opção B: Netlify

1. Acesse: **https://netlify.com**
2. Clique: **Sign up**
3. Escolha: **GitHub**
4. Autorize
5. Clique: **New site from Git**
6. Selecione: **inception-landing-page**
7. Clique: **Deploy**

**Seu site estará em:**
```
https://inception-landing-page-XXXXX.netlify.app
```

---

### Opção C: GitHub Pages (GRÁTIS)

1. Vá para: **https://github.com/SEU_USUARIO/inception-landing-page**
2. Clique em: **Settings**
3. Procure: **GitHub Pages**
4. Em Source, selecione: **Deploy from a branch**
5. Escolha: **main**
6. Clique: **Save**

**Seu site estará em:**
```
https://seu-usuario.github.io/inception-landing-page
```

---

## 📋 CHECKLIST ANTES DE FAZER PUSH

- ✅ Arquivo `index.html` está na raiz?
- ✅ Arquivo `styles.css` está na raiz?
- ✅ Arquivo `main.js` está na raiz?
- ✅ Pasta `.git` não existe duplicada?
- ✅ Todos os arquivos estão salvos?

---

## ⚡ RESUMO RÁPIDO

| Etapa | Tempo | Ação |
|-------|-------|------|
| 1. GitHub | 2 min | Criar repo novo |
| 2. Git Push | 3 min | Enviar código |
| 3. Deploy | 1 min | Publicar online |
| **TOTAL** | **6 min** | **Site online!** |

---

## 🎉 DEPOIS DE PUBLICADO

### Link do seu site:
```
Copie e compartilhe este link!
```

### Para atualizar o site:
```powershell
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

O site será atualizado automaticamente em 1-2 minutos!

---

## 🆘 PROBLEMAS?

### Erro ao fazer push?
```powershell
# Limpar config anterior
git remote remove origin
# Tentar novamente
```

### Arquivo index.html não encontrado?
- Verifique se está na raiz da pasta
- Confirme o caminho: `19_Projeto_4\index.html`

### Estilos não carregam?
- Limpe cache: Ctrl + Shift + Delete
- Verifique se `styles.css` está na raiz

---

## 📞 LINKS ÚTEIS

- GitHub: https://github.com
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- Cloudflare Pages: https://pages.cloudflare.com

---

**STATUS: ✅ PRONTO PARA PUBLICAR**

Siga os 3 passos acima e seu site estará online em menos de 10 minutos!

🚀 BOA SORTE! 🚀
