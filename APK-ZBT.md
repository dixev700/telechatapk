# TeleChat — сборка APK для ЗБТ

В этот проект добавлена Android-обёртка на Capacitor 8. Она открывает **реально развёрнутый TeleChat**, поэтому серверные функции, Better Auth и база данных продолжают работать.

## Что уже сделано

- Android package: `com.telechat.app`
- Название приложения: `TeleChat`
- HTTPS-only загрузка сервера
- Capacitor 8
- GitHub Actions: `.github/workflows/build-android.yml`
- APK собирается как `debug` и подходит для ручного ЗБТ
- PWA manifest теперь использует имя `TeleChat`, а не `Grok App`

## Что нужно для рабочего APK

У проекта должен быть **публичный HTTPS URL**, где уже запущен TeleChat с сервером. Например:

`https://telechat.example.com`

Локальный `localhost` или один только ZIP не подходят: текущий TeleChat выполняет чаты, авторизацию и работу с БД на сервере.

## Сборка через GitHub

1. Загрузи этот проект в свой GitHub-репозиторий.
2. Открой `Actions` → `Build TeleChat Android APK` → `Run workflow`.
3. В поле `Public HTTPS URL...` вставь URL развёрнутого TeleChat.
4. После успешной сборки скачай artifact `TeleChat-debug-apk`.
5. Внутри будет `app-debug.apk`; его можно установить на Android для ЗБТ.

## Важно

Если URL приложения меняется, APK нужно собрать заново с новым URL.

Для Google Play позже потребуется отдельная release-сборка с подписью ключом. Для закрытого ЗБТ debug APK значительно проще.
