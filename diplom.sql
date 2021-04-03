-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 30 2021 г., 22:22
-- Версия сервера: 10.1.44-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `diplom`
--

-- --------------------------------------------------------

--
-- Структура таблицы `level_primary`
--

CREATE TABLE `level_primary` (
  `id` int(11) NOT NULL,
  `title` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `level_primary`
--

INSERT INTO `level_primary` (`id`, `title`) VALUES
(1, 'Normal'),
(2, 'Danger'),
(3, 'Critical');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `title` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `title`) VALUES
(1, 'Manager'),
(2, 'Admin'),
(3, 'Worker'),
(4, 'HR'),
(5, 'Team lead'),
(6, 'Product manager');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `executor` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `body` text NOT NULL,
  `date` date NOT NULL,
  `level_primary` int(11) NOT NULL,
  `appointment_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `executor`, `title`, `body`, `date`, `level_primary`, `appointment_by`) VALUES
(1, 1, 'Сделать API ', 'Необходимо сделать API для создания карточки на человека', '2021-01-03', 3, 19),
(3, 19, 'Сворганить нормальный рендер', 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test ', '2021-01-06', 3, 1),
(33, 1, 'Сверстать корректно карточку', 'Надо как то уместить текст тела, или скроллить его, потому что енто pi*dec если все отвалится.\r\n\r\nПлюс необходимо сварганить отображение уровная сроков карточки', '2021-01-16', 1, 19),
(667, 1, 'Тестовое апи на добавление карточки', 'Тестовое тело для апи на добавление карточки', '2021-05-04', 1, 19),
(668, 1, 'Тестовое апи на добавление карточки', 'Тестовое тело для апи на добавление карточки', '2021-05-04', 1, 19),
(672, 1, 'Тесто', 'Тестовое тело для апи на добавление карточки', '2021-05-04', 3, 19),
(673, 1, 'Тесто', 'Тестовое тело для апи на добавление карточки', '2021-05-04', 3, 19);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT '3',
  `position` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `role`, `position`) VALUES
(1, 'khokhlov.so', '$2a$12$TsgyJL67hWmQNsIRGDAK1OpDMuENgCQUbEwxUY3iT2UuzResaM4kG', 'Хохлов Сергей Олегович', 2, 'Developer'),
(19, 'test', '$2a$12$NvkOIHXUyXiRBT0LbIZoJu6ZvsWskC5WYIYnSaSn13tTLk/ACH8cG', 'Хохлов Сергей Олегович', 5, 'Developer');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `level_primary`
--
ALTER TABLE `level_primary`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `executor` (`executor`),
  ADD KEY `level_primary` (`level_primary`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `level_primary`
--
ALTER TABLE `level_primary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=674;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`level_primary`) REFERENCES `level_primary` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`executor`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
