-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 15, 2018 at 05:34 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CS230_Assignment4`
--

-- --------------------------------------------------------

--
-- Table structure for table `choices`
--

CREATE TABLE `choices` (
  `id` int(11) NOT NULL,
  `question_number` int(11) NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT '0',
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `choices`
--

INSERT INTO `choices` (`id`, `question_number`, `is_correct`, `text`) VALUES
(1, 1, 1, 'Astavakrasana'),
(2, 1, 0, 'Bhuja-Vrischikasana'),
(3, 1, 0, 'Navasana'),
(4, 1, 0, 'Baddhakona'),
(5, 2, 0, 'Yoganidrasana'),
(6, 2, 1, 'Dhanurasana'),
(7, 2, 0, 'Setu Bandhasanasan'),
(8, 2, 0, 'Sirsa Setu Bandhasanasana'),
(9, 3, 0, 'Anantasana'),
(10, 3, 0, 'Adho-Mukha-Vrksasana'),
(11, 3, 0, 'Akarna-Dhanurasana'),
(12, 3, 1, 'Adho-Muka-Kapotasana'),
(13, 4, 0, 'Bheka-Parsva-Sarvangasana'),
(14, 4, 0, 'Utthita Pada Sirsasana'),
(15, 4, 1, 'Vrksasana'),
(16, 4, 0, 'Astangasana'),
(17, 5, 0, 'True'),
(18, 5, 1, 'False'),
(19, 6, 0, 'True'),
(20, 6, 1, 'False'),
(21, 7, 0, 'a'),
(22, 7, 0, 'b'),
(23, 7, 1, 'c'),
(24, 8, 0, 'a'),
(25, 8, 1, 'b'),
(26, 8, 0, 'c'),
(27, 9, 1, 'True '),
(28, 9, 0, 'False'),
(29, 10, 1, 'a'),
(30, 10, 0, 'b'),
(31, 10, 0, 'c'),
(32, 11, 0, 'a'),
(33, 11, 0, 'b'),
(34, 11, 1, 'c');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_number` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_number`, `text`) VALUES
(1, 'What is this Yoga pose called?'),
(2, 'What is this Yoga pose called?\r\n'),
(3, 'What is this Yoga pose called?'),
(4, 'What is this Yoga pose called?'),
(5, 'This pose is called the Half Revolved Belly Pose (Ardha-Jathara-Parivarttanas).\r\nTrue or False? '),
(6, 'This pose is called the Downward Facing Tree (Adho-Mukha-Vrksasana). True or False? '),
(7, 'Choose which card is incorrect: '),
(8, 'Choose which card is incorrect: '),
(9, 'Are these cards correct?  '),
(10, 'Which card is the Serpent Vishnu Slept On (Anantasana)? '),
(11, 'Which card is the Side Headstand pose (Parsva Sirsasana)');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `trn_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `trn_date`) VALUES
(1, 'jojo', 'jojo@gmail.com', '7510d498f23f5815d3376ea7bad64e29', '2018-04-11 14:42:02'),
(2, 'jimbo', 'jimbo@gmail.com', '910212d01c6ca98d108561a645b21e84', '2018-04-11 14:46:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `choices`
--
ALTER TABLE `choices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_number`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `choices`
--
ALTER TABLE `choices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
