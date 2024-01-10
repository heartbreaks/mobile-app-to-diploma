-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 06 2021 г., 14:41
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `heroku_dbf3f42dc9689a9`
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
  `appointment_by` int(11) DEFAULT NULL,
  `ended` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
  `updatedAt` TIMESTAMP NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `executor`, `title`, `body`, `date`, `level_primary`, `appointment_by`, `ended`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Test Of Stroke Deadline', 'loremasdmansdlsa ld mklsa mdklasj kldjkasljd klasj dklsja kldjklas jdklas jkldaskl djklasj kldaskl mdklas jdklas', '2021-05-12', 3, 19, 1, '2021-05-01', '2021-05-06'),
(2, 1, 'asd', 'asd', '2021-05-28', 3, 19, 1, '2021-05-06', '2021-05-06'),
(1112, 1, 'Тестовое после', 'Тестовое после', '2021-05-20', 1, 1, 1, '2021-05-06', '2021-05-06'),
(1113, 1, 'Ккк', 'Уууу', '2021-05-07', 3, 1, 1, '2021-05-06', '2021-05-06'),
(1114, 1, 'Информативно ', 'Нет\n', '2021-07-15', 1, 1, 1, '2021-05-06', '2021-05-06'),
(1115, 19, 'Кек', 'При\n', '2021-01-01', 1, 1, 1, '2021-05-06', '2021-05-06'),
(1116, 1, 'Тест ', 'Тест', '2021-01-01', 1, 1, 1, '2021-05-06', '2021-05-06');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT 3,
  `position` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `role`, `position`) VALUES
(1, 'khokhlov.so', '$2a$12$TsgyJL67hWmQNsIRGDAK1OpDMuENgCQUbEwxUY3iT2UuzResaM4kG', 'Хохлов Сергей Олегович', 2, 'Developer'),
(19, 'test', '$2a$12$NvkOIHXUyXiRBT0LbIZoJu6ZvsWskC5WYIYnSaSn13tTLk/ACH8cG', 'Суворова Елизавета Андреевна', 5, 'Developer'),
(20, 'Пап', '$2a$12$JY7tEaFz7RQVWuj8c1lICupXHjPM0MK03Q5q3vRVcSZTPzbh/frRG', 'Авв', 2, 'Пап');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1117;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
