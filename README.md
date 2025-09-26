# PAM_ConsumerMobile

<div align="center">

[![React Native](https://img.shields.io/badge/React%20Native-0.72-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49.0-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Aplicativo movel nativo para a Plataforma PAM**

[Demo](#demo) â€¢ [Documentacao](#documentacao) â€¢ [Instalacao](#instalacao) â€¢ [Contribuicao](#contribuicao)

</div>

---

## Sobre o Projeto

Aplicativo movel para consumidores da plataforma PAM. Interface intuitiva e moderna que permite solicitar servicos de manutencao, acompanhar pedidos em tempo real, avaliar prestadores, gerenciar pagamentos, comunicar-se via chat e receber notificacoes. Desenvolvido com React Native e Expo para iOS e Android.

### Principais Funcionalidades

- **Busca de Servicos**: Catalogo completo com filtros avancados
- **Solicitacao Rapida**: Processo simplificado de pedidos
- **Geolocalizacao**: Encontre prestadores proximos
- **Agendamento**: Escolha data e horario convenientes
- **Pagamentos**: Multiplas formas de pagamento seguras
- **Acompanhamento**: Status em tempo real dos pedidos
- **Avaliacoes**: Sistema de rating e reviews
- **Chat**: Comunicacao direta com prestadores
- **Notificacoes**: Alertas personalizados
- **Perfil**: Gestao de dados pessoais e preferencias

## Tecnologias

### Mobile Framework
- **[React Native](https://reactnative.dev/)** - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** - Plataforma de desenvolvimento
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estatica

### Navegacao e Estado
- **[React Navigation](https://reactnavigation.org/)** - Navegacao entre telas
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Gerenciamento de estado

## Pre-requisitos

- **[Node.js 18+](https://nodejs.org/)** (versao LTS recomendada)
- **[Expo CLI](https://docs.expo.dev/get-started/installation/)** - Ferramenta de desenvolvimento
- **[Git](https://git-scm.com/)** - Controle de versao

## Instalacao

### 1. Clone o Repositorio

`ash
git clone https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile.git
cd PAM_ConsumerMobile
`

### 2. Instalar Dependencias

`ash
npm install
# ou
yarn install
`

### 3. Configuracao do Ambiente

`ash
cp .env.example .env
`

### 4. Executar em Desenvolvimento

`ash
expo start
`

### 5. Executar no Dispositivo

#### Expo Go (Recomendado)
1. Instale o **Expo Go** no seu dispositivo
2. Escaneie o QR code exibido no terminal

#### Simuladores/Emuladores
`ash
# Android
expo start --android

# iOS (apenas macOS)
expo start --ios
`

## Build e Deploy

### Build de Desenvolvimento

`ash
# Android APK
eas build --platform android --profile development

# iOS IPA
eas build --platform ios --profile development
`

### Build de Producao

`ash
# Android (Google Play)
eas build --platform android --profile production

# iOS (App Store)
eas build --platform ios --profile production
`

## Testes

`ash
npm test
`

## Contribuicao

1. Fork o projeto
2. Crie uma branch (git checkout -b feature/nova-funcionalidade)
3. Commit suas mudancas (git commit -m 'feat: nova funcionalidade')
4. Push para a branch (git push origin feature/nova-funcionalidade)
5. Abra um Pull Request

## Licenca

Este projeto esta sob a licenca **MIT**. Veja [LICENSE](LICENSE) para mais detalhes.

## Suporte

- **Email**: suporte@pam.com
- **Issues**: [GitHub Issues](https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile/issues)

---

<div align="center">

**PAM - Plataforma de Agendamento de Manutencao**  
*Desenvolvido com amor pela equipe PAM*

</div>