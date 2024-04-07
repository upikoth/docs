# Терминал

## Как настроить zsh

1. устанавливаем https://iterm2.com/
2. устанавливаем oh-my-zsh
```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
3. устанавливаем тему: 
```sh
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```
4. редактируем ~/.zshrc
```sh
ZSH_THEME="powerlevel10k/powerlevel10k"
```
5. перезапускаем терминал
6. устанавливаем настройки
7. iterm2 -> preferences -> profiles -> keys -> presets -> "Natural Text Editing" (чтобы можно было быстро перемещаться в строке терминала)
8. Открываем стандартный терминал, настройки -> профили -> текст -> меняем шрифт на MesloLGS NF (чтобы иконки корректно отображались)
9.  Открываем VSCode, command + P, settings.json -> Open Settings Json -> вставляем строку "terminal.integrated.fontFamily": "'MesloLGS NF'", (тоже для иконок в терминале VSCode)

Если эта инструкция непонятна, то:

- [Описание с картинками](https://gist.github.com/kevin-smets/8568070)
- [Видео](https://www.youtube.com/watch?v=D2PSsnqgBiw&t=528s)
