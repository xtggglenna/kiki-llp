-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 24, 2022 at 02:42 AM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kiki`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `username` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password_hash` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`username`, `password_hash`) VALUES
('glenna', '$2y$10$as1HtjCR7K0ySck66e0dgOBq6hJG2T9H.sbqCyGhmU9vqeObGKjla'),
('yuxin', '$2y$10$CWHQIagD4wCZ9QtmOKrnEeEUvVW74vLUld/r2NvzZllq.XEzkbjH2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

DROP TABLE IF EXISTS `cases`;
CREATE TABLE IF NOT EXISTS `cases` (
  `caseno` int NOT NULL AUTO_INCREMENT,
  `requestor` varchar(25) NOT NULL,
  `assignee` varchar(25) NOT NULL,
  `casestatus` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `details` json NOT NULL,
  `priority` varchar(25) NOT NULL,
  `updatedby` varchar(25) NOT NULL,
  PRIMARY KEY (`caseno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cases`
--

INSERT INTO `cases` (`caseno`, `requestor`, `assignee`, `casestatus`, `details`, `priority`, `updatedby`, `updatedat`) VALUES
(1, 'glenna', 'jiemin', 'pending', '{\"category\": [\"Robbery\", \"Assault\"], \"description\": \"I, (client), owner of X shop, am filing a complaint for theft against (accused). On 20 June 2022, the accused arrived at X shop at around 2pm. The accused requested to view certain products in the shop and was attended to by (employee victim). At around 2.20pm, while making payment at the counter, the accused took out a folding knife and threatened (employee victim) to hand over all the cash in the cash register. Refusing the demand of the accused, (employee victim) was slashed with the folding knife, resulting in a deep cut on his forehead. The victim was also pushed into the storeroom and restrained with rope and tape. This caused the victim to suffer multiple bruises and contusions. While (employee victim) was restrained, (accused) emptied the cash register and fled the scene. A total of $2,500 was stolen, and only $120 was recovered from the accused upon arrest five days after the robbery.\"}', 'high', 'glenna', '2019-01-23 22:00:00');
COMMIT;

