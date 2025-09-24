# ðŸ“± PAM_ConsumerMobile

<div align="center">

[![React Native](https://img.shields.io/badge/React%20Native-0.72-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49.0-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Aplicativo mÃ³vel nativo para a Plataforma PAM**

[ðŸš€ Demo](#-demo) â€¢ [ðŸ“– DocumentaÃ§Ã£o](#-documentaÃ§Ã£o) â€¢ [ðŸ› ï¸ InstalaÃ§Ã£o](#ï¸-instalaÃ§Ã£o) â€¢ [ðŸ¤ ContribuiÃ§Ã£o](#-contribuiÃ§Ã£o)

</div>

---

## ðŸ“‹ Sobre o Projeto

**Aplicativo mÃ³vel para consumidores** da plataforma PAM. Interface intuitiva e moderna que permite solicitar serviÃ§os de manutenÃ§Ã£o, acompanhar pedidos em tempo real, avaliar prestadores, gerenciar pagamentos, comunicar-se via chat e receber notificaÃ§Ãµes. Desenvolvido com React Native e Expo para iOS e Android.

### ðŸŽ¯ Principais Funcionalidades

- ðŸ” **Busca de ServiÃ§os**: CatÃ¡logo completo com filtros avanÃ§ados
- ðŸ“± **SolicitaÃ§Ã£o RÃ¡pida**: Processo simplificado de pedidos
- ðŸ“ **GeolocalizaÃ§Ã£o**: Encontre prestadores prÃ³ximos
- ðŸ“… **Agendamento**: Escolha data e horÃ¡rio convenientes
- ðŸ’³ **Pagamentos**: MÃºltiplas formas de pagamento seguras
- ðŸ“Š **Acompanhamento**: Status em tempo real dos pedidos
- â­ **AvaliaÃ§Ãµes**: Sistema de rating e reviews
- ðŸ’¬ **Chat**: ComunicaÃ§Ã£o direta com prestadores
- ðŸ”” **NotificaÃ§Ãµes**: Alertas personalizados
- ðŸ‘¤ **Perfil**: GestÃ£o de dados pessoais e preferÃªncias

### ðŸ—ï¸ Arquitetura do Projeto

`
PAM_ConsumerMobile/
â”œâ”€â”€ ðŸ“ assets/             # ðŸ–¼ï¸ Recursos EstÃ¡ticos
â”‚   â”œâ”€â”€ images/            # Imagens e ilustraÃ§Ãµes
â”‚   â”œâ”€â”€ icons/             # Ãcones da aplicaÃ§Ã£o
â”‚   â””â”€â”€ fonts/             # Fontes customizadas
â”œâ”€â”€ ðŸ“ src/                # ðŸ“¦ CÃ³digo Fonte
â”‚   â”œâ”€â”€ components/        # ðŸ§© Componentes ReutilizÃ¡veis
â”‚   â”‚   â”œâ”€â”€ ui/            # Componentes de UI bÃ¡sicos
â”‚   â”‚   â”œâ”€â”€ forms/         # FormulÃ¡rios
â”‚   â”‚   â””â”€â”€ layout/        # Layout components
â”‚   â”œâ”€â”€ screens/           # ðŸ“± Telas da AplicaÃ§Ã£o
â”‚   â”‚   â”œâ”€â”€ auth/          # AutenticaÃ§Ã£o
â”‚   â”‚   â”œâ”€â”€ home/          # Tela inicial
â”‚   â”‚   â”œâ”€â”€ profile/       # Perfil do usuÃ¡rio
â”‚   â”‚   â””â”€â”€ orders/        # Pedidos
â”‚   â”œâ”€â”€ navigation/        # ðŸ§­ ConfiguraÃ§Ã£o de NavegaÃ§Ã£o
â”‚   â”‚   â”œâ”€â”€ AppNavigator.tsx
â”‚   â”‚   â””â”€â”€ AuthNavigator.tsx
â”‚   â”œâ”€â”€ services/          # ðŸŒ ServiÃ§os e APIs
â”‚   â”‚   â”œâ”€â”€ api/           # Chamadas para APIs
â”‚   â”‚   â”œâ”€â”€ auth/          # ServiÃ§os de autenticaÃ§Ã£o
â”‚   â”‚   â””â”€â”€ storage/       # Armazenamento local
â”‚   â”œâ”€â”€ hooks/             # ðŸª Custom Hooks
â”‚   â”œâ”€â”€ utils/             # ðŸ”§ UtilitÃ¡rios
â”‚   â”‚   â”œâ”€â”€ helpers/       # FunÃ§Ãµes auxiliares
â”‚   â”‚   â””â”€â”€ constants/     # Constantes
â”‚   â”œâ”€â”€ styles/            # ðŸŽ¨ Estilos e Temas
â”‚   â”‚   â”œâ”€â”€ colors.ts      # Paleta de cores
â”‚   â”‚   â”œâ”€â”€ typography.ts  # Tipografia
â”‚   â”‚   â””â”€â”€ spacing.ts     # EspaÃ§amentos
â”‚   â””â”€â”€ types/             # ðŸ“ DefiniÃ§Ãµes TypeScript
â”œâ”€â”€ ðŸ“„ app.json            # âš™ï¸ ConfiguraÃ§Ã£o do Expo
â”œâ”€â”€ ðŸ“„ eas.json            # ðŸ—ï¸ ConfiguraÃ§Ã£o EAS Build
â”œâ”€â”€ ðŸ“„ babel.config.js     # ðŸ”§ ConfiguraÃ§Ã£o Babel
â””â”€â”€ ðŸ“„ README.md           # ðŸ“– Este arquivo
`

## ðŸš€ Tecnologias e Ferramentas

### Mobile Framework
- **[React Native](https://reactnative.dev/)** - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** - Plataforma de desenvolvimento
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estÃ¡tica

### NavegaÃ§Ã£o e Estado
- **[React Navigation](https://reactnavigation.org/)** - NavegaÃ§Ã£o entre telas
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Gerenciamento de estado
- **[React Query](https://tanstack.com/query)** - Cache e sincronizaÃ§Ã£o

### UI/UX
- **[React Native Elements](https://reactnativeelements.com/)** - Biblioteca de componentes
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)** - Ãcones
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - AnimaÃ§Ãµes

### Funcionalidades Nativas
- **[Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)** - CÃ¢mera
- **[Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)** - GeolocalizaÃ§Ã£o
- **[Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)** - NotificaÃ§Ãµes push
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)** - Armazenamento local

### ComunicaÃ§Ã£o
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[Socket.io](https://socket.io/)** - ComunicaÃ§Ã£o em tempo real
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulÃ¡rios

### DevOps e Qualidade
- **[EAS Build](https://docs.expo.dev/build/introduction/)** - Build e deploy
- **[ESLint](https://eslint.org/)** - Linting de cÃ³digo
- **[Prettier](https://prettier.io/)** - FormataÃ§Ã£o de cÃ³digo

## ðŸ“¦ PrÃ©-requisitos

Antes de comeÃ§ar, certifique-se de ter instalado:

- **[Node.js 18+](https://nodejs.org/)** (versÃ£o LTS recomendada)
- **[Expo CLI](https://docs.expo.dev/get-started/installation/)** - Ferramenta de desenvolvimento
- **[Git](https://git-scm.com/)** - Controle de versÃ£o

### Para Desenvolvimento Nativo:
- **[Android Studio](https://developer.android.com/studio)** (para Android)
- **[Xcode](https://developer.apple.com/xcode/)** (para iOS - apenas macOS)

## ðŸ› ï¸ InstalaÃ§Ã£o e ConfiguraÃ§Ã£o

### 1ï¸âƒ£ Clone o RepositÃ³rio

`ash
git clone https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile.git
cd PAM_ConsumerMobile
`

### 2ï¸âƒ£ Instalar DependÃªncias

`ash
# Usando npm
npm install

# Ou usando yarn
yarn install
`

### 3ï¸âƒ£ ConfiguraÃ§Ã£o do Ambiente

`ash
# Copie o arquivo de exemplo
cp .env.example .env

# Configure suas variÃ¡veis de ambiente
# Edite o arquivo .env
`

### 4ï¸âƒ£ ConfiguraÃ§Ã£o das VariÃ¡veis de Ambiente

`env
# API Configuration
API_URL=https://api.pam.com
API_VERSION=v1

# Maps Configuration
GOOGLE_MAPS_API_KEY=your-google-maps-key

# Push Notifications
EXPO_PUSH_TOKEN=your-expo-push-token

# Environment
NODE_ENV=development
`

### 5ï¸âƒ£ Executar em Desenvolvimento

`ash
# Iniciar servidor Expo
expo start

# Ou com limpeza de cache
expo start -c
`

### 6ï¸âƒ£ Executar no Dispositivo

#### Expo Go (Recomendado para desenvolvimento)
1. Instale o **Expo Go** no seu dispositivo
2. Escaneie o QR code exibido no terminal
3. O app serÃ¡ carregado automaticamente

#### Simuladores/Emuladores
`ash
# Android
expo start --android

# iOS (apenas macOS)
expo start --ios

# Web
expo start --web
`

## ðŸ“± Build e Deploy

### Build de Desenvolvimento

`ash
# Android APK
eas build --platform android --profile development

# iOS IPA
eas build --platform ios --profile development
`

### Build de ProduÃ§Ã£o

`ash
# Android (Google Play)
eas build --platform android --profile production

# iOS (App Store)
eas build --platform ios --profile production
`

### Deploy nas Lojas

`ash
# Google Play Store
eas submit --platform android

# Apple App Store
eas submit --platform ios
`

## ðŸŽ¨ Funcionalidades Principais

### ðŸ” AutenticaÃ§Ã£o Segura
- Login com email/senha
- AutenticaÃ§Ã£o biomÃ©trica (Touch ID/Face ID)
- Login social
- RecuperaÃ§Ã£o de senha
- AutenticaÃ§Ã£o por SMS/OTP

### ðŸ“± Interface Nativa
- Design system consistente
- AnimaÃ§Ãµes fluidas
- Gestos nativos
- Feedback tÃ¡til
- Modo escuro/claro

### ðŸŒ Funcionalidades AvanÃ§adas
- GeolocalizaÃ§Ã£o em tempo real
- CÃ¢mera integrada
- NotificaÃ§Ãµes push
- Armazenamento offline
- SincronizaÃ§Ã£o automÃ¡tica

### ðŸ’¬ ComunicaÃ§Ã£o
- Chat em tempo real
- NotificaÃ§Ãµes inteligentes
- Chamadas de vÃ­deo/Ã¡udio
- Compartilhamento de arquivos

## ðŸ“Š Performance e OtimizaÃ§Ã£o

### OtimizaÃ§Ãµes Implementadas
- **Bundle Splitting**: Carregamento otimizado
- **Image Optimization**: CompressÃ£o automÃ¡tica
- **Lazy Loading**: Componentes sob demanda
- **Memory Management**: GestÃ£o eficiente de memÃ³ria
- **Network Optimization**: Cache inteligente

### MÃ©tricas de Performance
- **App Startup Time**: < 3 segundos
- **Screen Transition**: < 300ms
- **Memory Usage**: < 150MB
- **Battery Optimization**: Modo de economia

## ðŸ“± Compatibilidade

### Android
- **VersÃ£o MÃ­nima**: Android 6.0 (API 23)
- **VersÃ£o Alvo**: Android 13 (API 33)
- **Arquiteturas**: arm64-v8a, armeabi-v7a, x86_64

### iOS
- **VersÃ£o MÃ­nima**: iOS 12.0
- **VersÃ£o Alvo**: iOS 16.0
- **Dispositivos**: iPhone 6s+ e iPad Air 2+

### Recursos Nativos Suportados
- âœ… CÃ¢mera e galeria
- âœ… GeolocalizaÃ§Ã£o GPS
- âœ… NotificaÃ§Ãµes push
- âœ… Biometria (Touch ID/Face ID)
- âœ… Armazenamento seguro
- âœ… Compartilhamento nativo
- âœ… Deep linking
- âœ… Background tasks

## ðŸ§ª Testes

### Executar Testes

`ash
# Testes unitÃ¡rios
npm test

# Testes com cobertura
npm run test:coverage

# Testes E2E
npm run test:e2e

# Testes de componentes
npm run test:components
`

### Estrutura de Testes

`
__tests__/
â”œâ”€â”€ components/        # Testes de componentes
â”œâ”€â”€ screens/          # Testes de telas
â”œâ”€â”€ services/         # Testes de serviÃ§os
â”œâ”€â”€ utils/            # Testes de utilitÃ¡rios
â”œâ”€â”€ fixtures/         # Dados de teste
â””â”€â”€ __mocks__/        # Mocks
`

## ðŸ“Š Scripts DisponÃ­veis

| Script | DescriÃ§Ã£o |
|--------|-----------|
| expo start | Servidor de desenvolvimento |
| expo start -c | Iniciar com cache limpo |
| expo build | Build da aplicaÃ§Ã£o |
| eas build | Build com EAS |
| eas submit | Submit para lojas |
| 
pm test | Executar testes |
| 
pm run lint | Verificar cÃ³digo |

## ðŸŒ ConfiguraÃ§Ã£o do Expo

### app.json
`json
{
  "expo": {
    "name": "PAM_ConsumerMobile",
    "slug": "pam-consumer",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.pam.consumer"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.pam.consumer"
    }
  }
}
`

## ðŸ¤ ContribuiÃ§Ã£o

ContribuiÃ§Ãµes sÃ£o sempre bem-vindas! Siga estas etapas:

### 1ï¸âƒ£ Fork o Projeto
`ash
git clone https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile.git
`

### 2ï¸âƒ£ Criar Branch
`ash
git checkout -b feature/nova-funcionalidade
`

### 3ï¸âƒ£ Commit das MudanÃ§as
`ash
git commit -m "feat: adiciona nova funcionalidade incrÃ­vel"
`

### 4ï¸âƒ£ Push para Branch
`ash
git push origin feature/nova-funcionalidade
`

### 5ï¸âƒ£ Abrir Pull Request
Abra um PR descrevendo suas mudanÃ§as detalhadamente.

### ðŸ“ PadrÃµes de CÃ³digo
- **ESLint**: Seguir regras configuradas
- **Prettier**: FormataÃ§Ã£o automÃ¡tica
- **TypeScript**: Tipagem obrigatÃ³ria
- **Conventional Commits**: PadrÃ£o de commits

## ðŸ“„ LicenÃ§a

Este projeto estÃ¡ sob a licenÃ§a **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ðŸ†˜ Suporte e Contato

### ðŸ“ž Canais de Suporte
- **ðŸ“§ Email**: suporte@pam.com
- **ðŸ’¬ WhatsApp**: +55 (11) 99999-9999
- **ðŸ› Issues**: [GitHub Issues](https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile/issues)
- **ðŸ“– Wiki**: [DocumentaÃ§Ã£o Completa](https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile/wiki)

### ðŸ‘¥ Equipe de Desenvolvimento
- **Mobile Lead**: Emmanuel Menezes
- **UI/UX**: Equipe PAM
- **DevOps**: Equipe PAM

---

<div align="center">

**[â¬† Voltar ao Topo](#-PAM_ConsumerMobile)**

**PAM - Plataforma de Agendamento de ManutenÃ§Ã£o**
*Desenvolvido com â¤ï¸ pela equipe PAM*

[![GitHub](https://img.shields.io/badge/GitHub-PAM-181717?style=for-the-badge&logo=github)](https://github.com/EmmanuelSMenezes)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-PAM-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/company/pam)

</div>
