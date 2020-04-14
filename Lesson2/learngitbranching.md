# Изучаем git

## 1. Знакомство с Git Commit

- [x] Коммиты в GIT:

```sh
git commit
git commit
git commit
git commit
```

- [x] Ветвление в Git:

```sh
git branch bugFix
git checkout bugFix
```

- [x] Ветки и слияния:

```sh
git branch bugFix
git checkout bugFix
git commit
git checkout master
git commit
git merge bugFix
```

- [x] Git Rebase

```sh
git branch bugFix
git checkout bugFix
git commit
git checkout master
git commit
git checkout bugFix
git rebase master
```

## 2. Едем дальше

- [x] Теряем голову, или detached HEAD
  
```sh
git chechout c4
```

-[x] Относительные ссылки (^)

```sh
git checkout bugFix^
```
- [x] Относительные ссылки №2

```sh
git checkout HEAD^
git branch -f bugFix HEAD~1
git branch -f master c6
```

- [x] Отмена изменений в Git

```sh
git reset local~1
git checkout pushed
git revert pushed
```

## 3. Перемещаем труды туда-сюда

- [x] Введение в Cherry-pick

```sh
git cherry-pick c3 c4 c7
```

- [x] Введение в интерактивный Rebase

```sh

```

## 4. Сборная солянка

- [x] Выберем один коммит

```sh

```

- [x] Жонглируем коммитами

```sh

```

- [x] Жонглируем коммитами №2

```sh

```

- [x] Git tag

```sh

```

- [x] Git describe

```sh

```

## 5. Продвинутый уровень

- [x] Rebase over 9000 раз

```sh

```

- [x] Здоровая семья или несколько родителей

```sh

```

- [x] Спутанные ветки

```sh

```

