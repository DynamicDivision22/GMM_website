CREATE DATABASE  IF NOT EXISTS `makermarket` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `makermarket`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: makermarket
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `biography` text,
  `video_link` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `featured_background` varchar(255) DEFAULT NULL,
  `account_featured` tinyint DEFAULT '0',
  `account_verified` tinyint DEFAULT '0',
  `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (7,'admin@uark.edu','$2a$12$8eTsOZKL8L/fyA.u7x5Ra.Su1NywJPAugpblZtUpP9csyrTtrcl46','admin','admin','Edited from admin panel','','/images/avatar_images/d7791070-7d4c-4648-b214-7689406f8a90.png','/images/featured_images/default.png',0,1,'2023-09-17 11:21:28','2023-11-29 18:20:42'),(12,'boogy@uark.edu','$2a$12$aSGNmRIRUbacQTBJ/EvEkOdz1quBP5QCM92/RodJPAJfiUMIDqKui','boogy','test','Bio edited by an admin','','/images/avatar_images/default.png','/images/featured_images/default.png',1,1,'2023-11-29 14:13:16','2023-11-29 18:41:34'),(13,'kap044@uark.edu','$2a$12$mi1O/KfS.RPKdMsZQqtKtOTnwNQ3SsJG0usmtjmpjL4R1vSKV77Li','Mr','Staples','American office supply retail company headquartered in Framingham, Massachusetts','','/images/avatar_images/f2737d40-3e7c-43e2-9419-b8a13bd87bce.jpg','/images/featured_images/default.png',0,1,'2024-10-20 13:05:27','2024-10-20 13:33:32'),(9,'lol@uark.edu','$2a$12$zGvaUDo/gMsw1sF3NTX2Guck7FftLqi3Z.H4Bzmz1qiGXsTyKpD8C','sdfsdf','sdfsdf',NULL,NULL,'/images/avatar_images/default.png','/images/featured_images/default.png',1,1,'2023-09-17 13:22:57','2023-09-17 13:22:57'),(10,'mh150@uark.edu','$2a$12$kjMQpXUtg3hF6LsO1rl3Fuwt.9KvZAfznbmuaF35lWroSFBYgYMNu','Michael','Hall',NULL,NULL,'/images/avatar_images/default.png','/images/featured_images/default.png',1,1,'2023-10-09 13:26:44','2023-10-09 13:26:44'),(4,'mhumland@uark.edu','$2a$12$8O2o3sOaGEHjKF1xLisRnOPCgQvpmiOn.X4mshCRB2sSUWjoYF2Kq','Homer','Simpson','Welcome to my profile. FFFF','jfVBrpIhH60','/images/avatar_images/a28e0800-8052-407e-bde5-2ff50ec8dde3.jpg','/images/featured_images/default.png',1,1,'2023-09-13 22:37:43','2023-11-29 13:51:05'),(8,'ryan@uark.edu','$2a$12$Je4XN7mxelYCwj3JyUcpf.HU/rmP4xwrXrYR34XEgxOa84jVj4uVO','Ryan','Cazares','ddd','','/images/avatar_images/default.png','/images/featured_images/default.png',0,1,'2023-09-17 11:21:53','2023-11-29 18:16:28'),(6,'scoob@l4d2.own','$2a$12$u0NwTTuA9XaOppBXFC2op.6GYa9jEBVyqLY.g4xTFdY3u3KuSN5Lq','Scoob','Doo','well shucks','','/images/avatar_images/cec23523-3ba5-4e8c-8350-0a4d95e29637.png','/images/featured_images/default.png',0,1,'2023-09-16 18:23:33','2023-11-29 22:23:22'),(5,'test@test.com','$2a$12$QlKLI3YwDfNCVR/kD5u3fON8QIAtPM2HwKfDvS.E.aHsqvfg2qmE2','test','test',NULL,NULL,'/images/avatar_images/default.png','/images/featured_images/default.png',0,1,'2023-09-14 18:38:00','2023-09-14 18:38:00'),(11,'ymehri@uark.edu','$2a$12$dIsgmc2QzrfaOVnViDaAPOZeD6lehByXwpUWK.aKGkhOO475lZTlm','Yosr','Mehri','','','/images/avatar_images/default.png','/images/featured_images/default.png',0,0,'2023-10-09 13:27:09','2023-10-09 13:27:59');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_form_submissions`
--

DROP TABLE IF EXISTS `event_form_submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_form_submissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(255) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_form_submissions`
--

LOCK TABLES `event_form_submissions` WRITE;
/*!40000 ALTER TABLE `event_form_submissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_form_submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gsmm_applications`
--

DROP TABLE IF EXISTS `gsmm_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gsmm_applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `university_id` varchar(255) NOT NULL,
  `program` varchar(255) NOT NULL,
  `business` varchar(255) DEFAULT NULL,
  `summary` text,
  `products` text,
  `signature` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gsmm_applications`
--

LOCK TABLES `gsmm_applications` WRITE;
/*!40000 ALTER TABLE `gsmm_applications` DISABLE KEYS */;
INSERT INTO `gsmm_applications` VALUES (5,'admin@uark.edu','sdlkjfksdl','klsdjkfldjksl','090210','sdlksdfk','sdklsdfkl','sefsdfsdfsdfsdfsdfdfssdfsdfsdfsdfsdfsdfsdf','rrr, 4\nsss, 5\nggg, 6\ndgg, 7','sign lol','approved','2023-09-17 14:08:22','2023-09-17 14:08:22'),(6,'mh150@uark.edu','Michael','Hall','011009226','CLCS','melodic Bread Metal','Bread, just so much bread.  Focaccia and boules mainly. Çčĉĥĵķłøįþřðđ§ßæåëö','Boule, 10\nFocaccia piece,  5\nFocaccia whole, 15','Michael Hall','approved','2023-10-09 13:30:22','2023-10-09 13:30:22');
/*!40000 ALTER TABLE `gsmm_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `product_owner` varchar(255) NOT NULL,
  `product_product` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (5,'/images/product_images/c1ea0b9b-b1c9-48b9-a3f3-baa4eb50f5d2.png','2023-09-14 01:56:21','2023-09-14 01:56:21','mhumland@uark.edu','test'),(6,'/images/product_images/0d959ca7-2d69-47ca-9870-0d551da5597d.png','2023-09-14 01:56:21','2023-09-14 01:56:21','mhumland@uark.edu','test'),(7,'/images/product_images/2d56b291-6fb2-4e74-a757-d3f8b682802d.png','2023-09-14 19:26:31','2023-09-14 19:26:31','mhumland@uark.edu','Test 2'),(8,'/images/product_images/994acfd0-60e0-400d-9c02-448602e25bdb.png','2023-09-14 19:26:36','2023-09-14 19:26:36','mhumland@uark.edu','Test 3'),(9,'/images/product_images/93328756-6ddd-4bf9-ac91-1c6727678373.png','2023-09-14 19:26:42','2023-09-14 19:26:42','mhumland@uark.edu','Test 4'),(10,'/images/product_images/735e9283-9e97-4a74-8fcf-d51a4eb57158.png','2023-09-14 19:26:45','2023-09-14 19:26:45','mhumland@uark.edu','Test 5'),(11,'/images/product_images/55c68044-05dd-439f-b29b-4a4078684825.png','2023-09-14 19:26:48','2023-09-14 19:26:48','mhumland@uark.edu','Test 6'),(12,'/images/product_images/55bbfde6-6561-4f34-a2bf-fe06a1809472.png','2023-09-14 19:26:50','2023-09-14 19:26:50','mhumland@uark.edu','Test 7'),(13,'/images/product_images/e3501291-7db8-432b-a94b-a1de3d9f3c5a.png','2023-09-14 19:26:53','2023-09-14 19:26:53','mhumland@uark.edu','Test 8'),(14,'/images/product_images/3429e31b-359b-4aaf-96ea-bba3a07d7acd.png','2023-09-14 19:26:56','2023-09-14 19:26:56','mhumland@uark.edu','Test 9'),(15,'/images/product_images/1665f76b-7c52-4c62-a852-bddbab271437.png','2023-09-14 19:26:59','2023-09-14 19:26:59','test@invalid.com','Test 10'),(16,'/images/product_images/default.png','2023-09-15 09:32:45','2023-09-15 09:32:45','test@test.com','Super Widget'),(17,'/images/product_images/default.png','2023-09-15 09:35:01','2023-09-15 09:35:01','test@test.com','Test Man Product'),(18,'/images/product_images/default.png','2023-09-15 09:35:56','2023-09-15 09:35:56','test@test.com','sdfsdffsd'),(20,'/images/product_images/83ab406b-113f-4102-8c99-36d2535f4a97.png','2023-09-15 09:36:41','2023-09-15 09:36:41','test@test.com','sdfsdffsd555'),(21,'/images/product_images/02b1c7d0-9fb1-4b83-954f-9bc9851dfcb4.png','2023-09-15 09:36:41','2023-09-15 09:36:41','test@test.com','sdfsdffsd555'),(25,'/images/product_images/efe61ae6-1dfe-43aa-a39f-8d0e8bf71db6.png','2023-09-15 09:48:09','2023-09-15 09:48:09','test@test.com','sdfsdffsd555'),(29,'/images/product_images/75f7519f-a548-4040-be51-b7e9bbac776a.png','2023-09-17 13:57:36','2023-09-17 13:57:36','admin@uark.edu','sdfsdsdfsdfsdf123234'),(30,'/images/product_images/4ad11905-4598-4246-af13-5d8cf09ee3ab.png','2023-11-29 17:59:18','2023-11-29 17:59:18','boogy@uark.edu','test2223'),(31,'/images/product_images/555b86a7-6efb-44cd-b373-2b2da974204d.png','2023-11-29 18:09:03','2023-11-29 18:09:03','boogy@uark.edu','boogyproduct1'),(35,'/images/product_images/12ebb1a3-f369-48a2-a60f-1144c09c2bad.webp','2024-10-20 13:41:32','2024-10-20 13:41:32','kap044@uark.edu','Stapler'),(46,'/images/product_images/2d688941-d445-4a36-9e8f-8f7d604c6764.jpg','2024-11-25 15:20:57','2024-11-25 15:20:57','kap044@uark.edu','Staper 2'),(47,'/images/product_images/bebab281-d264-4964-9c2f-5f5150078954.jpg','2024-11-25 16:38:28','2024-11-25 16:38:28','kap044@uark.edu','Staper 2');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_models`
--

DROP TABLE IF EXISTS `product_models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_models` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL,
  `product_owner` varchar(255) NOT NULL,
  `product_product` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_models`
--

LOCK TABLES `product_models` WRITE;
/*!40000 ALTER TABLE `product_models` DISABLE KEYS */;
INSERT INTO `product_models` VALUES (1,'/images/product_models/71ce4aa9-857e-4eba-a4d1-e4f1440f82ba.glb','kap044@uark.edu','Stapler'),(4,'/images/product_models/82f562c9-ff7d-4433-bad6-ad45ac394320.glb','kap044@uark.edu','Staper 2');
/*!40000 ALTER TABLE `product_models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product` varchar(255) NOT NULL,
  `summary` text,
  `product_featured` tinyint DEFAULT '0',
  `product_website` varchar(255) DEFAULT NULL,
  `purchase_link` varchar(255) DEFAULT NULL,
  `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `account_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product`),
  UNIQUE KEY `product_UNIQUE` (`product`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (24,'boogyproduct1','This is boogy&#x27;s test product. Edited by boogy!',0,'https:&#x2F;&#x2F;www.test.com','https:&#x2F;&#x2F;www.test.com','2023-11-29 18:09:03','2023-11-29 18:09:03','boogy@uark.edu'),(20,'sdfsdffsd','sdfsdfdsdfsdf',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-15 09:35:56','2023-09-15 09:35:56','test@test.com'),(21,'sdfsdffsd555','Riddle me this, riddle me that.',0,'https:&#x2F;&#x2F;www.google.com3','https:&#x2F;&#x2F;www.google.com3','2023-09-15 09:36:41','2023-09-15 09:36:41','test@test.com'),(22,'sdfsdsdfsdfsdf123234','sefsfsdfsdfsdfsdfsdf',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-17 13:57:36','2023-09-17 13:57:36','admin@uark.edu'),(26,'Staper 2','test',0,'https:&#x2F;&#x2F;www.staples.com&#x2F;staples-one-touch-desktop-stapler-20-sheet-capacity-gray-black-red-44425&#x2F;product_1798852','https:&#x2F;&#x2F;www.staples.com&#x2F;staples-one-touch-desktop-stapler-20-sheet-capacity-gray-black-red-44425&#x2F;product_1798852','2024-11-25 15:20:57','2024-11-25 15:20:57','kap044@uark.edu'),(25,'Stapler','It&#x27;s a stapler... It staples...',0,'https:&#x2F;&#x2F;www.staples.com&#x2F;swingline-desktop-stapler-20-sheet-capacity-black-44401&#x2F;product_504308','https:&#x2F;&#x2F;www.staples.com&#x2F;swingline-desktop-stapler-20-sheet-capacity-black-44401&#x2F;product_504308','2024-10-20 13:41:32','2024-10-20 13:41:32','kap044@uark.edu'),(18,'Super Widget','Super widget deluxe plus ultra.',0,'https:&#x2F;&#x2F;www.widget.com','https:&#x2F;&#x2F;www.widget.com&#x2F;purchase','2023-09-15 09:32:45','2023-09-15 09:32:45','test@test.com'),(8,'test','sdfsdfdsdfsdf',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 01:56:21','2023-09-14 01:56:21','mhumland@uark.edu'),(17,'Test 10','This is another test product',1,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:59','2023-09-14 19:26:59','mhumland@uark.edu'),(9,'Test 2','This is another test product',1,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:31','2023-09-14 19:26:31','mhumland@uark.edu'),(10,'Test 3','This is another test product',1,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:36','2023-09-14 19:26:36','mhumland@uark.edu'),(11,'Test 4','This is another test product',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:42','2023-09-14 19:26:42','mhumland@uark.edu'),(12,'Test 5','This is another test product',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:45','2023-09-14 19:26:45','mhumland@uark.edu'),(13,'Test 6','This is another test product',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:48','2023-09-14 19:26:48','mhumland@uark.edu'),(14,'Test 7','This is another test product',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:50','2023-09-14 19:26:50','mhumland@uark.edu'),(15,'Test 8','This is another test product',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:53','2023-09-14 19:26:53','mhumland@uark.edu'),(16,'Test 9','This is another test product',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-14 19:26:56','2023-09-14 19:26:56','mhumland@uark.edu'),(19,'Test Man Product','TEST',0,'https:&#x2F;&#x2F;www.google.com','https:&#x2F;&#x2F;www.google.com','2023-09-15 09:35:00','2023-09-15 09:35:00','test@test.com'),(23,'test2223','edited by an admin',0,'https:&#x2F;&#x2F;www.test.com','https:&#x2F;&#x2F;www.test.com','2023-11-29 17:59:18','2023-11-29 17:59:18','mhumland@uark.edu');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  `issuer` varchar(255) DEFAULT NULL,
  `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `account_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (9,'maker','system','2023-09-13 22:37:43','mhumland@uark.edu'),(10,'maker','system','2023-09-14 18:38:00','test@test.com'),(11,'maker','system','2023-09-16 18:23:33','test@uark.edu'),(12,'maker','system','2023-09-17 11:21:28','admin@uark.edu'),(13,'maker','system','2023-09-17 11:21:53','ryan@uark.edu'),(14,'admin','system','2023-09-17 12:22:36','admin@uark.edu'),(15,'admin','system','2023-09-17 12:23:49','ryan@uark.edu'),(16,'maker','system','2023-09-17 13:22:58','lol@uark.edu'),(17,'maker','system','2023-10-09 13:26:44','mh150@uark.edu'),(18,'maker','system','2023-10-09 13:27:09','ymehri@uark.edu'),(19,'admin','system','2023-10-09 13:27:09','mhumland@uark.edu'),(20,'maker','system','2023-11-29 14:13:16','boogy@uark.edu'),(25,'banned','mhumland@uark.edu','2023-11-29 18:47:39','boogy@uark.edu'),(26,'admin','system','2024-10-20 13:05:29','kap044@uark.edu');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `socialmedia_links`
--

DROP TABLE IF EXISTS `socialmedia_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `socialmedia_links` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `account_email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `socialmedia_links`
--

LOCK TABLES `socialmedia_links` WRITE;
/*!40000 ALTER TABLE `socialmedia_links` DISABLE KEYS */;
INSERT INTO `socialmedia_links` VALUES (36,'https:&#x2F;&#x2F;www.twitter.com&#x2F;testfromadmin','2023-11-29 13:52:13','2023-11-29 13:52:13','mhumland@uark.edu'),(38,'https:&#x2F;&#x2F;www.google.com&#x2F;admintest&#x2F;','2023-11-29 18:29:49','2023-11-29 18:29:49','admin@uark.edu');
/*!40000 ALTER TABLE `socialmedia_links` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09 12:17:00
