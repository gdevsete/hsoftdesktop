# Sistema de Cadastro de Clientes - H-SOFT

Este projeto é uma implementação em React de uma página de cadastro de clientes, criada com base no design do Figma.

## 🚀 Funcionalidades

- **Navegação principal** com menu de módulos (Cadastros, Comercial, Financeiro, Fiscal, Relatórios)
- **Filtros de busca** com campos de seleção para Cliente, Estado/Cidade, Situação, Empresa, E-mail, Celular, Vendedor, Grupo, Rota e Tipo
- **Tabela de clientes** com informações detalhadas:
  - Razão Social / Código
  - Nome Fantasia / CPF ou CNPJ
  - Cidade / Estado
  - Telefone / E-mail
- **Botões de ação** para Incluir e Imprimir
- **Ícones de notificação**, ajuda e configurações
- **Avatar do usuário**

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

### Se você está usando VS Code via Flatpak:

1. Instale as dependências usando o npm do host:
```bash
flatpak-spawn --host npm install
```

Ou use o script auxiliar:
```bash
./npm.sh install
```

### Se você está usando terminal normal do sistema:

```bash
npm install
```

## ▶️ Executando o projeto

### No VS Code (Flatpak):

```bash
flatpak-spawn --host npm start
```

Ou use o script auxiliar:
```bash
./npm.sh start
```

### No terminal normal:

```bash
npm start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

## 📦 Build para produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── Cadastral.js         # Componente principal
│   ├── Cadastral.css
│   ├── Navbar.js            # Barra de navegação
│   ├── Navbar.css
│   ├── PageTitle.js         # Título da página e botões
│   ├── PageTitle.css
│   ├── FormContainer.js     # Formulário de filtros
│   ├── FormContainer.css
│   ├── TableContainer.js    # Tabela de clientes
│   └── TableContainer.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎯 Características do Design

- **Cores principais:**
  - Verde Cadastral: `#008236`
  - Azul Comercial: `#0047CC`
  - Laranja Financeiro: `#E66400`
  - Roxo Fiscal: `#8300E6`
  - Azul Relatórios: `#0096B8`

- **Tipografia:**
  - Títulos: Poppins
  - Textos: Inter

- **Layout:**
  - Largura fixa: 1280px
  - Design responsivo aos componentes
  - Tabela com scroll vertical

## 📝 Dados de Exemplo

A aplicação vem com 9 clientes de exemplo pré-cadastrados, incluindo empresas e pessoas físicas de diversos estados do Brasil.

## 🛠️ Tecnologias Utilizadas

- React 18.2.0
- CSS3 (sem frameworks CSS externos)
- Imagens hospedadas no Figma

## 📄 Licença

Este projeto foi criado para fins educacionais/demonstrativos.
