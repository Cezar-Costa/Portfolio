# Portfólio — Cézar Costa

Portfólio pessoal desenvolvido com **React + Vite**, tema dark/light, bilíngue (PT-BR / EN) e totalmente responsivo.

## Stack

- **React 18** + **Vite 5**
- **CSS Modules** (sem dependência de UI library)
- **Formspree** (formulário de contato)


## Funcionalidades

- Tema claro/escuro com persistência no `localStorage`
- Toggle de idioma PT-BR / EN
- Typewriter animado no Hero
- Animações de entrada com Intersection Observer
- Barra de progresso de scroll
- Active link na navbar (destaca a seção visível)
- Cursor personalizado com glow (desktop)
- Botão "Voltar ao topo"
- Page loader animado
- Formulário de contato funcional via Formspree
- Meta tags Open Graph (preview no WhatsApp/LinkedIn)
- 100% responsivo (mobile, tablet, desktop)
  

## Estrutura

```
src/
├── components/       # Navbar, Hero, About, Projects, Timeline, Contact, Footer + utilitários
├── context/          # LangContext (idioma) · ThemeContext (tema)
├── hooks/            # useTypewriter · useInView · useActiveSection
├── i18n/             # Traduções PT-BR e EN
└── styles/           # CSS global e variáveis
```



O portfólio fica disponível em `portfolio.cezarvault.uk`.

---

Desenvolvido por **Cézar Costa** · [github.com/Cezar-Costa](https://github.com/Cezar-Costa)
