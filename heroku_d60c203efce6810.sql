-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 13 2021 г., 16:14
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
-- База данных: `heroku_d60c203efce6810`
--

-- --------------------------------------------------------

--
-- Структура таблицы `backlog`
--

CREATE TABLE `backlog` (
  `id` int(255) NOT NULL,
  `title` varchar(150) NOT NULL,
  `body` text NOT NULL,
  `date` date NOT NULL,
  `level_primary` int(11) NOT NULL,
  `appointment_by` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `backlog`
--

INSERT INTO `backlog` (`id`, `title`, `body`, `date`, `level_primary`, `appointment_by`) VALUES
(24, 'А', 'Жопа секс 2\n', '2021-01-02', 2, 1),
(25, 'А', 'Жопа секс 2\n', '2021-01-02', 2, 1);

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
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `executor`, `title`, `body`, `date`, `level_primary`, `appointment_by`, `ended`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Test Of Stroke Deadline', 'loremasdmansdlsa ld mklsa mdklasj kldjkasljd klasj dklsja kldjklas jdklas jkldaskl djklasj kldaskl mdklas jdklas', '2021-05-12', 3, 19, 1, '2021-05-01', '2021-06-07'),
(2, 1, 'asd', 'asd', '2021-05-28', 3, 19, 1, '2021-05-06', '2021-06-05'),
(1112, 1, 'Тестовое после', 'Тестовое после', '2021-05-20', 1, 1, 1, '2021-05-06', '2021-06-05'),
(1113, 1, 'Ккк', 'Уууу', '2021-05-07', 3, 1, 1, '2021-05-06', '2021-06-07'),
(1114, 1, 'Информативно ', 'Нет\n', '2021-07-15', 1, 1, 1, '2021-05-06', '2021-06-05'),
(1115, 19, 'Кек', 'При\n', '2021-01-01', 1, 1, 1, '2021-05-06', '2021-05-06'),
(1116, 1, 'Тест ', 'Тест', '2021-01-01', 1, 1, 1, '2021-05-06', '2021-05-06'),
(1119, 19, 'То', 'То\n', '2021-01-01', 1, 1, 1, '2021-06-02', '2021-06-05'),
(1149, 1, 'Информативно ', 'Нет информации\n', '2021-01-02', 3, 1, 1, '2021-06-05', '2021-06-05'),
(1151, 1, 'Таращат', 'Ивлвтатал\n', '2021-01-02', 2, 1, 1, '2021-06-05', '2021-06-05'),
(1152, 1, 'Textt 1', 'asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa', '2021-06-18', 1, 1, 1, '2021-06-05', '2021-06-05'),
(1153, 1, 'Textt 2', 'asdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsaasdsa', '2021-06-11', 1, 1, 1, '2021-06-05', '2021-06-05'),
(1154, 1, 'Рот', 'Момордика\n', '2021-01-02', 3, 1, 1, '2021-06-05', '2021-06-05'),
(1155, 1, 'Тест', 'Радаров\n', '2021-01-02', 3, 1, 1, '2021-06-05', '2021-06-05'),
(1156, 1, 'Ршпшмлп', 'Со о лид\n', '2021-01-02', 1, 1, 1, '2021-06-05', '2021-06-05'),
(1158, 1, 'Рвщахоаожажопжосжоаож', 'Исдрсожсжопжомжлмэлмжопзомжомжоажосзопозпозпзопзопзомзоащосозсщомозсщрсжосзомзомозмщрсзрсзрсщрсжрсжоазо\n', '2021-01-02', 1, 1, 1, '2021-06-07', '2021-06-07'),
(1234, 1, 'Не очень длинный текст описания задачи', 'Не очень детальное описание задачи. Оно в целом и пойдет. Главное что оно работает, и слава богу. Кстати говоря, данная задача взята из базы данных.', '2021-06-10', 3, 1, 0, '2021-06-07', '2021-06-07'),
(1235, 1, 'FSD-1', 'На разработку данного приложения тратилось очень много сил. Ко всему прочему приложение зачастую писалось по ночам. Так как приходилось работать до поздна и приезжать домой к 4 утра.', '2021-06-11', 2, 1, 0, '2021-06-07', '2021-06-07'),
(1236, 1, 'А', 'Жопа секс 2\n', '2021-01-02', 2, 1, 1, '2021-06-13', '2021-06-13'),
(1237, 1, 'Говно', 'Залупа', '2021-06-13', 3, 1, 1, '2021-06-13', '2021-06-13'),
(1238, 19, 'FSD-0', 'Diplo-Revolution Unlike Pluto Remix\n', '2021-01-02', 1, 1, 0, '2021-06-13', '2021-06-13');

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
  `position` varchar(30) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `role`, `position`, `isAdmin`) VALUES
(1, 'khokhlov.so', '$2a$12$TsgyJL67hWmQNsIRGDAK1OpDMuENgCQUbEwxUY3iT2UuzResaM4kG', 'Хохлов Сергей Олегович', 2, 'Developer', 1),
(19, 'test', '$2a$12$NvkOIHXUyXiRBT0LbIZoJu6ZvsWskC5WYIYnSaSn13tTLk/ACH8cG', 'Суворова Елизавета Андреевна', 5, 'Developer', 0),
(124, 'Pluto', '$2a$12$hPpVdFbVmE.6T0EtSacYiect4aUclLLxdQVb88VZmvGx/YDEv5csG', 'Pluto Remix', 2, 'Admin', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `backlog`
--
ALTER TABLE `backlog`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT для таблицы `backlog`
--
ALTER TABLE `backlog`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1239;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

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
