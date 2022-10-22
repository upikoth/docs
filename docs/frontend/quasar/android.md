# Разработка приложений под androind с использованием Quasar

## Установка quasar и создание проекта

```bash
sudo npm i -g @quasar/cli
npm init quasar
```

Настройки, которые устанавливаем для проекта

```bash
✔ What would you like to build? › App with Quasar CLI, let's go!
✔ Project folder: … quasar-project
✔ Pick Quasar version: › Quasar v2 (Vue 3 | latest and greatest)
✔ Pick script type: › Typescript
✔ Pick Quasar App CLI variant: › Quasar App CLI with Vite
✔ Package name: … quasar-project
✔ Project product name: (must start with letter if building mobile apps) … Quasar App
✔ Project description: … A Quasar Project
✔ Author: …
✔ Pick a Vue component style: › Composition API with <script setup>
✔ Pick your CSS preprocessor: › None (the others will still be available)
✔ Check the features needed for your project: › ESLint, State Management (Pinia), Axios
✔ Pick an ESLint preset: › Standard
```

Запускаем проект

```bash
cd quasar-project
quasar dev
```

## Установка cordova и зависимостей

Установка cordova.

```bash
sudo npm install -g cordova
```

Устанавливаем android studio по [ссылке](https://developer.android.com/studio/index.html)

Добавляем настройки env переменной в файл .zshrc (пример)

```bash
export ANDROID_SDK_ROOT="$HOME/Library/Android/Sdk"
export ANDROID_HOME="$HOME/Library/Android/Sdk"
export PATH=$PATH:$ANDROID_SDK_ROOT/tools; PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

Перезагрузив терминал, можно проверить, что путь установлен корректно

```bash
echo $PATH
```

В настройках android studio нужно установить требующиеся версии sdk для cordova-android.

Android project created with cordova-android@10.1.2

[Ссылка](https://cordova.apache.org/docs/en/11.x/guide/platforms/android/), где можно найти какую версию sdk нужно установить

### Установка Java Development Kit

Установка brew и добав

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Добавляем настройки env переменной в файл .zshrc (пример)

```bash
export PATH=/opt/homebrew/bin:$PATH
```

С помощью brew устанавливаем 11 версию JDK

```bash
brew install openjdk@11
```

```bash
export PATH="/opt/homebrew/opt/openjdk@11/bin:$PATH"
```

### Установка Gradle

```bash
brew install gradle
```

## Добавление возможности разработки на android в проект

```bash
quasar mode add cordova
cd src-cordova
cordova platform add android
```

Проверяем, что все установлено корректно

Android target: not installed - пропускаем

```bash
cordova requirements
```

Запуск приложения

```bash
quasar dev -m android --ide
```

Теперь можно выбрать устройство на котором будет тестироваться приложение.

## Сборка приложения под android

```bash
quasar build -m android
```
