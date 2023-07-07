-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2023 at 07:06 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gebeya`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `aid` int(8) NOT NULL,
  `unme` varchar(30) DEFAULT NULL,
  `pwd` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `typ` varchar(67) DEFAULT NULL,
  `fname` varchar(60) DEFAULT NULL,
  `lnme` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`aid`, `unme`, `pwd`, `typ`, `fname`, `lnme`) VALUES
(1, 'admin', 'FKQQtm+hn+vYGJJUqJ4aIkpz2b0HkhFSipSJsv96RNQ/XhyNjOtaRlVN/pCIsvTmyImNNschbGKDPb0grLTCkxSlcrg7PFxo9w7nFm7BEQw5GKSL5C0txhko4aytn5FTg3jvXNdJ5ruuGvpTgCxt8acU6ITDb8+MX2D1e1Qm6rA=', '1', 'Abenezer', 'Amdie');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cust_id` int(11) NOT NULL,
  `fname` varchar(60) DEFAULT NULL,
  `mname` varchar(60) DEFAULT NULL,
  `lname` varchar(67) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `phone_no` int(21) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `uname` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cust_id`, `fname`, `mname`, `lname`, `email`, `dob`, `phone_no`, `pwd`, `uname`) VALUES
(3, 'ab', NULL, 'am', 'abyuenezeramdie@gmail.com', NULL, NULL, 'yvJlEHklWG0OLktOXkmJIbX6eLvAvFuSeG6I7qH/Wk7kpTFyHoeremv6Pq9mMJAEYN8QbILkbAsrF2cF/YWlqidD0HHz3kna9UxsYE4WnkNbmO85JCrRhsSERRGb7eBCaa9ZiYtF/vfvFbC1rK7OD0r+Nc3H6u1zdFrw1LKgAtc=', NULL),
(28, 'ABRDGDGHDH', NULL, 'YUIDHDHJDJ', 'abenezeramdie@gmail.com', NULL, NULL, 'yvJlEHklWG0OLktOXkmJIbX6eLvAvFuSeG6I7qH/Wk7kpTFyHoeremv6Pq9mMJAEYN8QbILkbAsrF2cF/YWlqidD0HHz3kna9UxsYE4WnkNbmO85JCrRhsSERRGb7eBCaa9ZiYtF/vfvFbC1rK7OD0r+Nc3H6u1zdFrw1LKgAtc=', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `employer`
--

CREATE TABLE `employer` (
  `c_id` int(11) NOT NULL,
  `company` varchar(200) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `LOC` varchar(11) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `c_description` longtext DEFAULT NULL,
  `sid` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employer`
--

INSERT INTO `employer` (`c_id`, `company`, `url`, `LOC`, `logo`, `c_description`, `sid`) VALUES
(1, 'My solution', 'mysolution.et', 'et', 'https://fastly.picsum.photos/id/432/200/300.jpg?hmac=S0muAtaN6T0PXbBlf5O-UL0chTPM6i9FReOIs0IJlDU', 'Company Ahadu Domestic Employment Agency PLC\nQualified candidates meeting the above requirements can submit their applications including the following\nCovering letter specifying the position they are applying to, CV, Non returnable copies of academic diplomas and other testimonials in person or their CV’s and any supporting documents through mail, hrahadu@gmail.com or epherem.amare@ahadulabor.com, Alemayehu.moges@ahadulabor.com\nAhadu Domestic Employment Agency PLC\nBole, Near Edna Mall, United Insurance S.C, 2nd Floor.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hsfs`
--

CREATE TABLE `hsfs` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `j_id` int(11) NOT NULL,
  `c-id` int(200) DEFAULT NULL,
  `remoteFriendly` varchar(64) DEFAULT NULL,
  `market` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `size` int(8) DEFAULT NULL,
  `position` tinytext DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `posted` varchar(255) DEFAULT NULL,
  `deadline` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `salaryRange` varchar(255) DEFAULT NULL,
  `equity` varchar(255) DEFAULT NULL,
  `perks` varchar(255) DEFAULT NULL,
  `apply` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`j_id`, `c-id`, `remoteFriendly`, `market`, `size`, `position`, `title`, `description`, `url`, `type`, `posted`, `deadline`, `location`, `skills`, `salaryRange`, `equity`, `perks`, `apply`) VALUES
(1, 1, '0', 'ecom', 3, 'dev', 'Developer', 'web dev', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders3`
--

CREATE TABLE `orders3` (
  `or_id` int(8) NOT NULL,
  `or_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `details` varchar(60) DEFAULT NULL,
  `shping` varchar(67) DEFAULT NULL,
  `billing` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders3`
--

INSERT INTO `orders3` (`or_id`, `or_date`, `details`, `shping`, `billing`) VALUES
(1, '2023-06-17 17:00:27', 'Tv phone and stuff', 'beu', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products24`
--

CREATE TABLE `products24` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products25`
--

CREATE TABLE `products25` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `primg` varchar(255) CHARACTER SET utf32 COLLATE utf32_bin DEFAULT NULL,
  `mime` varchar(64) DEFAULT NULL,
  `qty` varchar(11) DEFAULT NULL,
  `disc` varchar(8) DEFAULT NULL,
  `size` varchar(8) DEFAULT NULL,
  `color` varchar(64) DEFAULT NULL,
  `rating` varchar(8) NOT NULL,
  `prp` varchar(8) DEFAULT NULL,
  `reviews` mediumtext DEFAULT NULL,
  `descr` mediumtext DEFAULT NULL,
  `primg2` varchar(200) DEFAULT NULL,
  `primg3` varchar(255) DEFAULT NULL,
  `primg4` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products25`
--

INSERT INTO `products25` (`product_id`, `name`, `price`, `data`, `primg`, `mime`, `qty`, `disc`, `size`, `color`, `rating`, `prp`, `reviews`, `descr`, `primg2`, `primg3`, `primg4`) VALUES
(63, 'bottle', '399', NULL, '92b0d48085ec5d3d5bf8738a6100a51f.jpg', 'jpg', '67', '25', 'm', NULL, '3', '299', 'hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs', 'Colour: Sea Blue | Size name:32 GB Take strikingly clear photos with the 13MP + 2MP AI dual camera. Capture the beauty of any scene, while the AI-powered portrait mode with Beautify blurs the background to create portraits that stand out. The octa-core processor takes operational efficiency to the next level which results in brilliant performance.', NULL, NULL, NULL),
(74, 'qwew', '88', NULL, 'cee48a85c22688098c7c436fa8fdae45.jpg', 'jpg', '45', NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL),
(75, 'dgdhhd', '123', NULL, 'ba2303787917d5bfc1953fc24efdf7a1.jpg', 'jpg', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL),
(76, 'shoeeee', '25000', NULL, '8baed98a84300678513312ecebd480d3.jpg', 'jpg', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL),
(77, 'kattt', '3567', NULL, '51272ec4ae6e9b9a40380ada8d5546a1.jpg', 'jpg', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL),
(78, 'doggggggg', '1234', NULL, 'd45fcf9386b921f88d4fb6288929ee2a.jpg', 'jpg', NULL, NULL, NULL, NULL, '', NULL, NULL, 'baaark', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products26`
--

CREATE TABLE `products26` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products27`
--

CREATE TABLE `products27` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products28`
--

CREATE TABLE `products28` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('J5CmERB5vid6uJs5mrDicWexPf2Ld-aC', 1686748511, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"i\":\"63\"}');

-- --------------------------------------------------------

--
-- Table structure for table `sstbl`
--

CREATE TABLE `sstbl` (
  `ss_id` int(11) UNSIGNED NOT NULL,
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sstbl`
--

INSERT INTO `sstbl` (`ss_id`, `session_id`, `expires`, `data`, `status`) VALUES
(9, 'BnfZ0tqkI5Njn5C3_lGcqz5pYAo67XUa', 1687019974, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"i\":\"63\",\"isAdmin\":true,\"ssid\":\"BnfZ0tqkI5Njn5C3_lGcqz5pYAo67XUa\",\"Alogid\":1,\"email\":\"admin\"}', NULL),
(11, '9zLKqq-XLY1TJk0n1vmlun5FNGPTeNoC', 1687192431, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isvalid\":true,\"ssid\":\"9zLKqq-XLY1TJk0n1vmlun5FNGPTeNoC\",\"logid\":28,\"email\":\"abenezeramdie@gmail.com\",\"i\":\"63\"}', NULL),
(13, 'dJ7QuD5RoGwTYFCojBlW00QwpgKeLdYZ', 1687274975, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"i\":\"63\",\"isvalid\":true,\"ssid\":\"dJ7QuD5RoGwTYFCojBlW00QwpgKeLdYZ\",\"logid\":28,\"email\":\"abenezeramdie@gmail.com\"}', NULL),
(15, 'j7xRbPYu7_6C5cDmylD-_szT6ctqeJy9', 1687367090, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isvalid\":true,\"ssid\":\"j7xRbPYu7_6C5cDmylD-_szT6ctqeJy9\",\"logid\":28,\"email\":\"abenezeramdie@gmail.com\",\"i\":\"76\"}', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trans`
--

CREATE TABLE `trans` (
  `trans_id` int(11) NOT NULL,
  `trans_date` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trans24`
--

CREATE TABLE `trans24` (
  `trans_id` int(11) NOT NULL,
  `trans_date` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trans25`
--

CREATE TABLE `trans25` (
  `trans_id` int(11) NOT NULL,
  `trans_date` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trans26`
--

CREATE TABLE `trans26` (
  `trans_id` int(11) NOT NULL,
  `trans_date` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trans27`
--

CREATE TABLE `trans27` (
  `trans_id` int(11) NOT NULL,
  `trans_date` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trans28`
--

CREATE TABLE `trans28` (
  `trans_id` int(11) NOT NULL,
  `trans_date` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `hsfs`
--
ALTER TABLE `hsfs`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`j_id`);

--
-- Indexes for table `orders3`
--
ALTER TABLE `orders3`
  ADD PRIMARY KEY (`or_id`);

--
-- Indexes for table `products24`
--
ALTER TABLE `products24`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `products25`
--
ALTER TABLE `products25`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `products26`
--
ALTER TABLE `products26`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `products27`
--
ALTER TABLE `products27`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `products28`
--
ALTER TABLE `products28`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `sstbl`
--
ALTER TABLE `sstbl`
  ADD PRIMARY KEY (`ss_id`),
  ADD UNIQUE KEY `session_id` (`session_id`);

--
-- Indexes for table `trans`
--
ALTER TABLE `trans`
  ADD PRIMARY KEY (`trans_id`);

--
-- Indexes for table `trans24`
--
ALTER TABLE `trans24`
  ADD PRIMARY KEY (`trans_id`);

--
-- Indexes for table `trans25`
--
ALTER TABLE `trans25`
  ADD PRIMARY KEY (`trans_id`);

--
-- Indexes for table `trans26`
--
ALTER TABLE `trans26`
  ADD PRIMARY KEY (`trans_id`);

--
-- Indexes for table `trans27`
--
ALTER TABLE `trans27`
  ADD PRIMARY KEY (`trans_id`);

--
-- Indexes for table `trans28`
--
ALTER TABLE `trans28`
  ADD PRIMARY KEY (`trans_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `aid` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `employer`
--
ALTER TABLE `employer`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hsfs`
--
ALTER TABLE `hsfs`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `j_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders3`
--
ALTER TABLE `orders3`
  MODIFY `or_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products24`
--
ALTER TABLE `products24`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products25`
--
ALTER TABLE `products25`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `products26`
--
ALTER TABLE `products26`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products27`
--
ALTER TABLE `products27`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products28`
--
ALTER TABLE `products28`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sstbl`
--
ALTER TABLE `sstbl`
  MODIFY `ss_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `trans`
--
ALTER TABLE `trans`
  MODIFY `trans_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trans24`
--
ALTER TABLE `trans24`
  MODIFY `trans_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trans25`
--
ALTER TABLE `trans25`
  MODIFY `trans_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trans26`
--
ALTER TABLE `trans26`
  MODIFY `trans_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trans27`
--
ALTER TABLE `trans27`
  MODIFY `trans_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trans28`
--
ALTER TABLE `trans28`
  MODIFY `trans_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
