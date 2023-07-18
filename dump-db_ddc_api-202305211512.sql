-- MySQL dump 10.13  Distrib 5.7.41, for osx10.17 (x86_64)
--
-- Host: localhost    Database: db_ddc_api
-- ------------------------------------------------------
-- Server version	5.7.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campaign`
--

DROP TABLE IF EXISTS `campaign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campaign` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_category_id` int(11) NOT NULL,
  `campaign_pic_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `donation_target` double NOT NULL,
  `donation_achieved` double DEFAULT NULL,
  `duration` int(11) NOT NULL COMMENT 'day',
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `status` char(20) DEFAULT NULL,
  `notes` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) NOT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_by` char(30) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign`
--

LOCK TABLES `campaign` WRITE;
/*!40000 ALTER TABLE `campaign` DISABLE KEYS */;
INSERT INTO `campaign` VALUES (1,2,39,'Provide Shelter to Homeless','We are working towards providing shelter to homeless people.',15000,10000,45,'2023-05-12 07:13:52','2023-06-25 17:00:00','live',NULL,'2023-05-09 17:22:25','2','2023-05-20 19:45:09','system',NULL,NULL),(2,1,2,'Help us feed the hungry!','We\'re raising funds to provide meals for those in need.',10000,NULL,30,'2023-06-01 00:00:00','2023-06-30 23:59:59','waiting-for-approval',NULL,'2023-05-09 17:25:58','2','2023-05-09 17:25:58',NULL,NULL,NULL),(3,1,2,'Help us feed the hungry!','We\'re raising funds to provide meals for those in need.',10000,NULL,30,'2023-06-01 00:00:00','2023-06-30 23:59:59','waiting-for-approval',NULL,'2023-05-12 07:15:07','2','2023-05-12 07:15:07',NULL,NULL,NULL);
/*!40000 ALTER TABLE `campaign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campaign_categories`
--

DROP TABLE IF EXISTS `campaign_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campaign_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign_categories`
--

LOCK TABLES `campaign_categories` WRITE;
/*!40000 ALTER TABLE `campaign_categories` DISABLE KEYS */;
INSERT INTO `campaign_categories` VALUES (1,'Bencana Alam',NULL),(2,'Pendidikan',NULL),(3,'Kesehatan','sumbangan untuk orang sakit'),(4,'Pembangunan','sumbangan untuk pembangunan');
/*!40000 ALTER TABLE `campaign_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campaign_documents`
--

DROP TABLE IF EXISTS `campaign_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campaign_documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `file_path` text NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign_documents`
--

LOCK TABLES `campaign_documents` WRITE;
/*!40000 ALTER TABLE `campaign_documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `campaign_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campaign_images`
--

DROP TABLE IF EXISTS `campaign_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campaign_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `file_path` text NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign_images`
--

LOCK TABLES `campaign_images` WRITE;
/*!40000 ALTER TABLE `campaign_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `campaign_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campaign_states`
--

DROP TABLE IF EXISTS `campaign_states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campaign_states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign_states`
--

LOCK TABLES `campaign_states` WRITE;
/*!40000 ALTER TABLE `campaign_states` DISABLE KEYS */;
/*!40000 ALTER TABLE `campaign_states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campaign_states_history`
--

DROP TABLE IF EXISTS `campaign_states_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campaign_states_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) NOT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_by` char(30) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaign_states_history`
--

LOCK TABLES `campaign_states_history` WRITE;
/*!40000 ALTER TABLE `campaign_states_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `campaign_states_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donation`
--

DROP TABLE IF EXISTS `donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `donator_id` int(11) NOT NULL,
  `comment` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) NOT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_by` char(30) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donation`
--

LOCK TABLES `donation` WRITE;
/*!40000 ALTER TABLE `donation` DISABLE KEYS */;
INSERT INTO `donation` VALUES (19,1,39,'amanah','2023-05-20 19:24:02','system','2023-05-20 19:24:02',NULL,NULL,NULL);
/*!40000 ALTER TABLE `donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `donation_id` int(11) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `payment_link` text,
  `payment_type` char(50) NOT NULL,
  `payment_expiry` datetime DEFAULT NULL,
  `payment_evidence` text,
  `payment_status` varchar(50) NOT NULL DEFAULT 'pending',
  `amount` double DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) NOT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_by` char(30) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (12,19,'8b21857e-f3c9-4ca8-bc60-595c2666f5ec','https://app.sandbox.midtrans.com/payment-links/3b769812-bdcf-4335-bb0d-663917430aeb','digital','2023-05-20 19:54:03',NULL,'settlement',10000,'2023-05-20 19:24:03','system','2023-05-20 19:45:06','system',NULL,NULL);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `code` char(30) NOT NULL,
  `description` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) NOT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_by` char(30) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','admin',NULL,'2023-05-08 00:18:21','system',NULL,NULL,NULL,NULL),(2,'supervisor','supervisor',NULL,'2023-05-08 00:18:21','system',NULL,NULL,NULL,NULL),(3,'user','user',NULL,'2023-05-08 00:18:21','system',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` char(100) NOT NULL,
  `phone` char(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) NOT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `deleted_by` char(30) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `users_email_UN` (`email`) USING BTREE,
  UNIQUE KEY `users_phone_UN` (`phone`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,3,'Kevin User','kevindeldc@yopmail.com','081231423526','$2b$10$dAAKjfq7IWW0QDfCng8A8O34H2FifhVYZ1BVqwBLhbuTacY1WPq.a','2023-05-07 18:18:18','system','2023-05-09 11:35:09',NULL,NULL,NULL),(10,3,'matt','Matthew@gmail.com','081261550431','$2b$10$/1g2he7I5fDMWSUJfm3UOe9k1.m/SwK9mESmFxiFRjCE1HbYpq73W','2023-05-09 03:51:31','system','2023-05-09 03:51:31',NULL,NULL,NULL),(39,1,'admin','admin@gmail.com','08232828282','$2b$10$iSACjkW4b5H7/0M8uQ9/TetIpMtK7L6xHZmpoGpeCrjCPyoRdRTO6','2023-05-09 04:36:41','system','2023-05-09 18:21:49',NULL,NULL,NULL),(40,2,'supervisor','supervisor@gmail.com','081231245152','$2b$10$2Iv4B1BaYXzRHaOM/HDei.LUftaiQQOerPklwGBQGDiFAXpNklp/2','2023-05-09 10:07:20','system','2023-05-09 17:50:32',NULL,NULL,NULL),(41,3,'Nathan','nathan@gmail.com','082212341234','$2b$10$mA94gQQLnvsNWkM/KzlaOeci67f4XVZ3Mwm4UPiBG2gsUp/r3eDLe','2023-05-12 06:16:36','system','2023-05-12 06:16:36',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_ddc_api'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-21 15:12:39
