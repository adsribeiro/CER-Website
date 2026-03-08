# C.E.R - Soluções para Empresas

Repositório principal do portal corporativo da **C.E.R - Consultoria Empresarial e Tecnologia**. O projeto consiste em uma Landing Page / Corporate Site de alta performance, projetado com uma estética premium, dark mode nativo e foco na melhor experiência de usuário.

## 🚀 Tecnologias Utilizadas

Este projeto front-end foi arquitetado de forma pura e fluida ("Vanilla" stack otimizada), garantindo pontuação máxima de performance.

- **HTML5 Semântico**: Estruturação acessível.
- **Tailwind CSS**: Estilização baseada em utilitários, com configuração customizada via objeto global.
- **CSS3 Avançado**: Variáveis CSS, Glassmorphism e gradientes radiais.
- **GSAP (GreenSock Animation Platform)**: Motor de física em JavaScript usado para as animações Core.
- **ScrollTrigger**: Plugin da GSAP para coreografia de eventos de interface atrelados ao scroll (ex: Fade Ups Bento Grid).
- **HTML Canvas API**: Utilizado meticulosamente para orquestrar as sequências de imagem interpoladas (simulando um vídeo pesado de fundo) de modo a garantir 60FPS fluidos igual ao design da "Apple".
- **Phosphor Icons**: Biblioteca vetorial de ícones.

## 📁 Estrutura de Diretórios ("The Enterprise Way")

```
/
├── assets/                  # Arquivos estáticos servidos no App
│   ├── css/                 # Estilos isolados (ex: animações frame-a-frame e cursores)
│   ├── frames/              # (Obrigatório) Sequência extraída em .webp do background
│   ├── images/              # Logos vetoriais, fundos e thumbnails 
│   ├── js/                  # Scripts customizados que controlam UX/UI (GSAP main)
│   └── videos/              # Vídeos inteiros em alta-definição
├── docs/                    # Referências (Design Systems, Mocks de arquitetura bruta)
├── .gitignore               # Ignoráveis para proteção do controle de versão
├── manifest.json            # Manifesto PWA configurável para o navegador mobile
└── index.html               # Entry-point (Página Principal)
```

## ⚙️ Ambiente de Desenvolvimento e Deploy

### Como Rodar:
Como o projeto consome uma stack front-end estática pura e sem pré-processadores complexos exigindo `node_modules` para transpilar, basta servir o HTML em um container Web local:

**Usando VSCode:**
1. Instale a extensão nativa **Live Server**.
2. Clique com botão direito no arquivo `index.html` e selecione **Open with Live Server**.

**Usando Node.js (Servidor Simples CLI):**
```bash
npx serve .
```

### Deploy:
O projeto **está 100% pronto para Deploy**. Basta vincular o repositório GitHub ao serviço de nuvem estática (ex: Vercel, Netlify ou Github Pages). Nenhuma "Build Command" (`npm run build`) é necessária. O Output (Publish directory) natural já é o root `/`.

---
*C.E.R Soluções para Empresas - Desenvolvido para escalar resultados.*
