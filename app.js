const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Установка Pug как шаблонизатора
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Подключение статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Маршруты
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/boost', (req, res) => {
    res.render('boost');
});

app.get('/ref', (req, res) => {
    res.render('ref');
});

app.get('/task', (req, res) => {
    res.render('task');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});