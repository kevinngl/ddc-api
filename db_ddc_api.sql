/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : localhost:3306
 Source Schema         : db_ddc_api

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 01/08/2023 19:31:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for campaign
-- ----------------------------
DROP TABLE IF EXISTS `campaign`;
CREATE TABLE `campaign`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_category_id` int(11) NOT NULL,
  `campaign_pic_id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `donation_target` double NULL DEFAULT NULL,
  `donation_achieved` double NULL DEFAULT NULL,
  `duration` int(11) NOT NULL COMMENT 'day',
  `start_date` datetime NULL DEFAULT NULL,
  `end_date` datetime NULL DEFAULT NULL,
  `status` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `notes` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `deleted_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 63 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of campaign
-- ----------------------------
INSERT INTO `campaign` VALUES (28, 1, 51, 'Gempa Tarutung', 'Bantuan dana untuk korban bencana gempa tarutung', 1000000, 10000, 3, '2023-05-30 11:41:26', '2023-06-02 00:00:00', 'live', NULL, '2023-05-28 20:48:58', '51', '2023-05-30 16:49:56', 'system', NULL, NULL);
INSERT INTO `campaign` VALUES (29, 7, 51, 'Bantu Anak-Anak Terlantar Mendapatkan Pendidikan', 'Kampanye ini bertujuan untuk mengumpulkan dana guna menyediakan akses pendidikan yang layak bagi anak-anak terlantar. Donasi akan digunakan untuk membangun sekolah, menyediakan perlengkapan belajar, dan memberikan dukungan pendidikan kepada mereka', 1000000, NULL, 6, '2023-05-28 07:00:00', '2023-06-03 07:00:00', 'rejected', NULL, '2023-05-28 20:58:04', '51', '2023-05-30 11:45:43', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (30, 1, 51, 'Selamatkan Hutan dan Satwa Liar', 'Kampanye ini bertujuan untuk mengumpulkan dana untuk konservasi hutan dan satwa liar yang terancam punah. Donasi akan digunakan untuk melindungi habitat, melakukan penelitian, dan melakukan upaya pemulihan populasi satwa liar yang terancam.', 5000000, NULL, 6, '2023-05-28 07:00:00', '2023-06-03 07:00:00', 'request-revision', 'perbaiki deskripsi', '2023-05-28 21:00:57', '51', '2023-06-08 08:23:28', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (31, 10, 51, 'Sumbangan Duka Cita Mahasiswa John F Kennedy', 'Kampanye ini bertujuan untuk mengumpulkan dana guna membantu keluarga yang menghadapi kabar duka cita akibat kehilangan orang terkasih. Donasi akan digunakan untuk memberikan dukungan finansial kepada keluarga yang sedang berduka', 1000000, NULL, 3, '2023-05-28 07:00:00', '2023-05-31 07:00:00', 'request-revision', 'tolong perbaiki deskripsi', '2023-05-28 21:05:01', '51', '2023-05-30 11:45:06', '51', NULL, NULL);
INSERT INTO `campaign` VALUES (32, 9, 51, 'Berbagi Kasih di Rumah Harapan Panti Asuhan Silamosik', 'Kampanye ini bertujuan untuk mengumpulkan dana guna mendukung panti sosial yang memberikan perlindungan dan perawatan kepada anak-anak yatim, lansia, dan orang-orang dengan kebutuhan khusus. Donasi Anda akan digunakan untuk menyediakan makanan, pakaian, tempat tinggal yang aman, layanan kesehatan, pendidikan, dan kegiatan pendukung lainnya. Dengan bergabung dalam kampanye ini, Anda dapat berkontribusi untuk memberikan kehidupan yang lebih baik dan masa depan yang lebih cerah bagi mereka yang membutuhkan. Bersama-sama, mari berbagi kasih dan memberikan harapan bagi mereka di panti sosial.', 15000000, NULL, 13, '2023-05-28 07:00:00', '2023-06-10 07:00:00', 'live', NULL, '2023-05-28 21:11:47', '51', '2023-05-30 16:46:50', 'system', NULL, NULL);
INSERT INTO `campaign` VALUES (34, 8, 51, 'Bersama Lawan Penyakit: Dukung Akses Kesehatan untuk Semua', 'Kampanye ini bertujuan untuk mengumpulkan dana guna meningkatkan akses kesehatan bagi masyarakat yang membutuhkan. Donasi Anda akan digunakan untuk mendukung upaya pencegahan, pengobatan, dan perawatan penyakit yang mempengaruhi banyak orang, seperti kanker, diabetes, HIV/AIDS, dan penyakit menular lainnya. Dana yang terkumpul akan digunakan untuk membiayai kampanye kesadaran, program vaksinasi, pengadaan obat-obatan, peralatan medis, serta mendukung organisasi kesehatan yang bekerja di wilayah terpencil atau kurang berkembang. Bergabunglah dalam kampanye ini dan bersama-sama kita dapat melawan penyakit dan mewujudkan akses kesehatan yang lebih baik untuk semua orang.', 5000000, NULL, 31, '2023-05-28 21:52:01', '2023-06-28 00:00:00', 'live', NULL, '2023-05-28 21:14:39', '51', '2023-05-28 21:52:01', '51', NULL, NULL);
INSERT INTO `campaign` VALUES (35, 7, 51, 'Bangun Sekolah untuk Orang-orang yang Tidak Mampu', 'Kampanye ini bertujuan untuk mengumpulkan dana guna membangun sekolah yang layak bagi orang-orang yang tidak mampu.', 100000000, NULL, 13, '2023-05-28 21:46:43', '2023-06-10 00:00:00', 'live', NULL, '2023-05-28 21:17:58', '51', '2023-05-28 21:46:43', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (36, 1, 51, 'Perangi Perubahan Iklim: Tanam Pohon untuk Masa Depan Hijau', 'Kampanye ini bertujuan untuk mengumpulkan dana guna menanam pohon dan memerangi perubahan iklim. Donasi akan digunakan untuk menggalakkan penanaman pohon, membangun kebun rakyat, dan melakukan kampanye kesadaran lingkungan.', 2000000, NULL, 13, '2023-05-28 07:00:00', '2023-06-10 07:00:00', 'live', NULL, '2023-05-28 21:23:25', '51', '2023-05-28 21:53:36', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (37, 8, 51, 'Peduli Terhadap Kesehatan Mental Remaja', 'Kampanye ini bertujuan untuk mengumpulkan dana guna meningkatkan kesadaran dan memberikan dukungan kesehatan mental kepada remaja. Donasi akan digunakan untuk menyediakan konseling, program pencegahan bunuh diri, dan meningkatkan akses terhadap layanan kesehatan mental', 500000, NULL, 13, '2023-05-28 07:00:00', '2023-06-10 07:00:00', 'live', NULL, '2023-05-28 21:25:15', '51', '2023-05-28 21:53:37', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (38, 12, 51, 'Berantas Kelaparan di Dunia', 'Kampanye ini bertujuan untuk mengumpulkan dana guna memerangi kelaparan di seluruh dunia. Donasi akan digunakan untuk menyediakan makanan, membangun pertanian berkelanjutan, dan memberikan pendidikan gizi kepada komunitas yang membutuhkan.', 1000000, NULL, 13, '2023-05-28 07:00:00', '2023-06-10 07:00:00', 'live', NULL, '2023-05-28 21:27:14', '51', '2023-05-28 21:53:38', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (39, 1, 51, 'asdasda', 'asdads', 1000000, NULL, 2, '2023-05-28 07:00:00', '2023-05-30 07:00:00', 'rejected', NULL, '2023-05-28 21:54:17', '51', '2023-05-28 21:54:40', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (40, 11, 51, 'Banjir Laguboti', 'Berikan bantuan untuk menangani banjir di laguboti', 10000, NULL, 11, '2023-07-18 18:33:07', '2023-07-29 00:00:00', 'live', NULL, '2023-05-30 11:39:10', '51', '2023-07-28 17:52:08', '51', NULL, NULL);
INSERT INTO `campaign` VALUES (41, 1, 51, 'Tsunami Aceh', 'test', 1000000, NULL, 22, '2023-06-08 08:24:33', '2023-06-30 00:00:00', 'live', NULL, '2023-06-08 08:21:41', '51', '2023-06-08 08:24:33', NULL, NULL, NULL);
INSERT INTO `campaign` VALUES (62, 7, 51, 'test', 'test', 11111, NULL, 3, '2023-07-28 07:00:00', '2023-07-31 07:00:00', 'waiting-for-approval', NULL, '2023-07-28 18:06:45', '51', '2023-07-28 18:06:45', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for campaign_categories
-- ----------------------------
DROP TABLE IF EXISTS `campaign_categories`;
CREATE TABLE `campaign_categories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of campaign_categories
-- ----------------------------
INSERT INTO `campaign_categories` VALUES (1, 'Bencana Alam', 'bantuan untuk korban bencana');
INSERT INTO `campaign_categories` VALUES (7, 'Pendidikan', NULL);
INSERT INTO `campaign_categories` VALUES (8, 'Kesehatan', NULL);
INSERT INTO `campaign_categories` VALUES (9, 'Panti Sosial', NULL);
INSERT INTO `campaign_categories` VALUES (10, 'Kabar Duka Cita', NULL);
INSERT INTO `campaign_categories` VALUES (11, 'Lingkungan', NULL);
INSERT INTO `campaign_categories` VALUES (12, 'Kemanusiaan', NULL);
INSERT INTO `campaign_categories` VALUES (13, 'Kesehatan Hewan', NULL);
INSERT INTO `campaign_categories` VALUES (14, 'test', 'bagus');

-- ----------------------------
-- Table structure for campaign_documents
-- ----------------------------
DROP TABLE IF EXISTS `campaign_documents`;
CREATE TABLE `campaign_documents`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `file_path` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of campaign_documents
-- ----------------------------

-- ----------------------------
-- Table structure for campaign_images
-- ----------------------------
DROP TABLE IF EXISTS `campaign_images`;
CREATE TABLE `campaign_images`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `file_path` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 53 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of campaign_images
-- ----------------------------
INSERT INTO `campaign_images` VALUES (18, 28, 'https://storage.googleapis.com/ddc-file-storage/GempaTarutung-660.jpg');
INSERT INTO `campaign_images` VALUES (19, 29, 'https://storage.googleapis.com/ddc-file-storage/BantuAnak-AnakTerlantarMendapatkanPendidikan-81.jpg');
INSERT INTO `campaign_images` VALUES (20, 30, 'https://storage.googleapis.com/ddc-file-storage/SelamatkanHutandanSatwaLiar-135.jpg');
INSERT INTO `campaign_images` VALUES (21, 31, 'https://storage.googleapis.com/ddc-file-storage/SumbanganDukaCitaMahasiswaJohnFKennedy-598.jpg');
INSERT INTO `campaign_images` VALUES (22, 32, 'https://storage.googleapis.com/ddc-file-storage/BerbagiKasihdiRumahHarapanPantiAsuhanSilamosik-548.jpg');
INSERT INTO `campaign_images` VALUES (23, 33, 'https://storage.googleapis.com/ddc-file-storage/BerbagiKasihdiRumahHarapanPantiAsuhanSilamosik-639.jpg');
INSERT INTO `campaign_images` VALUES (24, 34, 'https://storage.googleapis.com/ddc-file-storage/BersamaLawanPenyakit:DukungAksesKesehatanuntukSemua-393.jpg');
INSERT INTO `campaign_images` VALUES (25, 35, 'https://storage.googleapis.com/ddc-file-storage/BangunSekolahuntukOrang-orangyangTidakMampu-398.jpg');
INSERT INTO `campaign_images` VALUES (26, 36, 'https://storage.googleapis.com/ddc-file-storage/PerangiPerubahanIklim:TanamPohonuntukMasaDepanHijau-889.jpg');
INSERT INTO `campaign_images` VALUES (27, 37, 'https://storage.googleapis.com/ddc-file-storage/PeduliTerhadapKesehatanMentalRemaja-895.jpg');
INSERT INTO `campaign_images` VALUES (28, 38, 'https://storage.googleapis.com/ddc-file-storage/BerantasKelaparandiDunia-48.jpg');
INSERT INTO `campaign_images` VALUES (29, 39, 'https://storage.googleapis.com/ddc-file-storage/asdasda-795.png');
INSERT INTO `campaign_images` VALUES (30, 40, 'https://storage.googleapis.com/ddc-file-storage/BanjirLaguboti-652.jpg');
INSERT INTO `campaign_images` VALUES (31, 41, 'https://storage.googleapis.com/ddc-file-storage/TsunamiAceh-853.jpg');
INSERT INTO `campaign_images` VALUES (32, 42, 'https://storage.googleapis.com/ddc-file-storage/test-114.png');
INSERT INTO `campaign_images` VALUES (33, 43, 'https://storage.googleapis.com/ddc-file-storage/test-180.png');
INSERT INTO `campaign_images` VALUES (34, 44, 'https://storage.googleapis.com/ddc-file-storage/test-92.png');
INSERT INTO `campaign_images` VALUES (35, 45, 'https://storage.googleapis.com/ddc-file-storage/test-203.png');
INSERT INTO `campaign_images` VALUES (36, 46, 'https://storage.googleapis.com/ddc-file-storage/test-487.png');
INSERT INTO `campaign_images` VALUES (37, 47, 'https://storage.googleapis.com/ddc-file-storage/test-683.png');
INSERT INTO `campaign_images` VALUES (38, 48, 'https://storage.googleapis.com/ddc-file-storage/test-602.png');
INSERT INTO `campaign_images` VALUES (39, 49, 'https://storage.googleapis.com/ddc-file-storage/test-14.png');
INSERT INTO `campaign_images` VALUES (40, 50, 'https://storage.googleapis.com/ddc-file-storage/test-873.png');
INSERT INTO `campaign_images` VALUES (41, 51, 'https://storage.googleapis.com/ddc-file-storage/test-364.png');
INSERT INTO `campaign_images` VALUES (42, 52, 'https://storage.googleapis.com/ddc-file-storage/test-687.png');
INSERT INTO `campaign_images` VALUES (43, 53, 'https://storage.googleapis.com/ddc-file-storage/test-397.png');
INSERT INTO `campaign_images` VALUES (44, 54, 'https://storage.googleapis.com/ddc-file-storage/test-770.png');
INSERT INTO `campaign_images` VALUES (45, 55, 'https://storage.googleapis.com/ddc-file-storage/test-642.png');
INSERT INTO `campaign_images` VALUES (46, 56, 'https://storage.googleapis.com/ddc-file-storage/testpendidikan-693.png');
INSERT INTO `campaign_images` VALUES (47, 57, 'https://storage.googleapis.com/ddc-file-storage/testpendidikan-486.png');
INSERT INTO `campaign_images` VALUES (48, 58, 'https://storage.googleapis.com/ddc-file-storage/testpendidikan-274.png');
INSERT INTO `campaign_images` VALUES (49, 59, 'https://storage.googleapis.com/ddc-file-storage/testpendidikan-229.png');
INSERT INTO `campaign_images` VALUES (50, 60, 'https://storage.googleapis.com/ddc-file-storage/testpendidikan-950.png');
INSERT INTO `campaign_images` VALUES (51, 61, 'https://storage.googleapis.com/ddc-file-storage/testpendidikan-740.png');
INSERT INTO `campaign_images` VALUES (52, 62, 'https://storage.googleapis.com/ddc-file-storage/test-698.png');

-- ----------------------------
-- Table structure for campaign_states
-- ----------------------------
DROP TABLE IF EXISTS `campaign_states`;
CREATE TABLE `campaign_states`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of campaign_states
-- ----------------------------

-- ----------------------------
-- Table structure for campaign_states_history
-- ----------------------------
DROP TABLE IF EXISTS `campaign_states_history`;
CREATE TABLE `campaign_states_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `deleted_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of campaign_states_history
-- ----------------------------

-- ----------------------------
-- Table structure for donation
-- ----------------------------
DROP TABLE IF EXISTS `donation`;
CREATE TABLE `donation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign_id` int(11) NOT NULL,
  `donator_id` int(11) NOT NULL,
  `show_name` enum('ya','tidak') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `deleted_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 77 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of donation
-- ----------------------------
INSERT INTO `donation` VALUES (57, 28, 52, 'tidak', 'test', '2023-05-30 16:47:52', 'system', '2023-07-27 19:31:37', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (58, 28, 52, 'ya', 'test', '2023-05-30 17:30:57', 'system', '2023-07-27 19:15:59', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (59, 28, 49, 'ya', 'Semoga bermanfaat', '2023-06-05 08:41:37', 'system', '2023-07-27 19:16:00', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (60, 28, 49, 'ya', 'test', '2023-06-05 08:41:51', 'system', '2023-07-27 19:16:02', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (61, 28, 49, 'ya', 'test', '2023-06-07 21:37:22', 'system', '2023-07-27 19:16:04', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (62, 28, 49, 'ya', 'test', '2023-06-08 03:45:53', 'system', '2023-07-27 19:16:06', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (63, 28, 49, 'ya', 'test', '2023-06-08 04:04:53', 'system', '2023-07-27 19:16:08', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (64, 41, 49, 'ya', 'semoga bermanfaat', '2023-06-08 08:25:47', 'system', '2023-07-27 19:16:10', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (65, 41, 49, 'ya', 'test', '2023-06-08 08:26:05', 'system', '2023-07-27 19:16:13', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (66, 41, 53, 'ya', 'TEST', '2023-07-18 15:44:00', 'system', '2023-07-27 19:16:14', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (67, 40, 50, 'ya', 'TEST', '2023-07-27 18:12:08', 'system', '2023-07-27 19:16:16', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (68, 40, 50, 'ya', 'test', '2023-07-27 18:17:00', 'system', '2023-07-27 19:16:18', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (69, 28, 49, 'ya', 'test', '2023-07-27 18:17:56', 'system', '2023-07-27 19:16:21', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (70, 28, 49, 'ya', 'test', '2023-07-27 19:28:32', 'system', '2023-07-27 19:28:32', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (71, 41, 51, 'ya', 'test', '2023-07-28 14:11:13', 'system', '2023-07-28 14:11:13', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (72, 41, 51, 'tidak', 'test', '2023-07-28 14:11:44', 'system', '2023-07-28 14:11:44', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (73, 41, 50, 'ya', 'test', '2023-08-01 16:40:41', 'system', '2023-08-01 16:40:41', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (74, 41, 49, 'ya', 'bagus', '2023-08-01 17:30:39', 'system', '2023-08-01 17:30:39', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (75, 41, 49, 'tidak', 'test', '2023-08-01 19:20:18', 'system', '2023-08-01 19:20:18', NULL, NULL, NULL);
INSERT INTO `donation` VALUES (76, 41, 49, 'tidak', 'test', '2023-08-01 19:21:11', 'system', '2023-08-01 19:21:11', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `donation_id` int(11) NOT NULL,
  `order_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `transaction_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `payment_link` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `payment_type` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `payment_expiry` datetime NULL DEFAULT NULL,
  `payment_evidence` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `payment_status` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'pending',
  `amount` double NULL DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `deleted_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `transaction_time` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of payment
-- ----------------------------
INSERT INTO `payment` VALUES (49, 57, 'ee7fe739-87fc-40e1-a435-96928069f1b8-123123123', '2e5ef6be-97a0-4aac-b308-6f589f61b414', 'https://app.sandbox.midtrans.com/payment-links/90540373-cef7-4f31-9e4f-57a5cef9e95c', 'digital', '2023-05-30 17:17:52', NULL, 'settlement', 10000, '2023-05-30 16:47:52', 'system', '2023-05-30 16:49:49', 'system', NULL, NULL, '2023-05-22 02:20:47');
INSERT INTO `payment` VALUES (50, 58, '9dda5829-8f0c-4363-a247-0ca6e82e7248', NULL, 'https://app.sandbox.midtrans.com/payment-links/fca094bb-696e-4d41-932c-8b2490af9178', 'digital', '2023-05-30 18:00:57', NULL, 'pending', 10000, '2023-05-30 17:30:57', 'system', '2023-05-30 17:30:57', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (51, 59, '56d71e0c-a921-4180-88aa-d9e2362d47cf', NULL, 'https://app.sandbox.midtrans.com/payment-links/a880f455-3bc5-4b00-ac27-49ac713a63c0', 'digital', '2023-06-05 09:11:37', NULL, 'pending', 10000, '2023-06-05 08:41:37', 'system', '2023-06-05 08:41:37', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (52, 60, '2a09863d-0113-4d53-b158-f0178861040f', NULL, 'https://app.sandbox.midtrans.com/payment-links/33cf63c1-1f26-4ffc-aed2-cf8d12ca28b8', 'digital', '2023-06-05 09:11:51', NULL, 'pending', 10000, '2023-06-05 08:41:51', 'system', '2023-06-05 08:41:51', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (53, 61, '1c695195-4ba0-467f-8b7a-f7d27fecf40b', NULL, 'https://app.sandbox.midtrans.com/payment-links/aa1a2fa4-433d-4ab2-bec4-7e6a73596311', 'digital', '2023-06-07 22:07:22', NULL, 'pending', 20000, '2023-06-07 21:37:22', 'system', '2023-06-07 21:37:22', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (54, 62, '0da88c7a-b1e6-4088-8c70-c798b64a255b', NULL, 'https://app.sandbox.midtrans.com/payment-links/32a041f4-3c2b-42e6-9396-4af0e1c45bd3', 'digital', '2023-06-08 04:15:53', NULL, 'pending', 20000, '2023-06-08 03:45:53', 'system', '2023-06-08 03:45:53', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (55, 63, 'b501ad2a-4e0a-491e-86f7-d6474d135e5e', NULL, 'https://app.sandbox.midtrans.com/payment-links/364c1916-efb3-4d06-b22e-930695a015eb', 'digital', '2023-06-08 04:34:53', NULL, 'pending', 20000, '2023-06-08 04:04:53', 'system', '2023-06-08 04:04:53', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (56, 64, '8142cb31-9a30-42d7-801c-4c699a1ba880', NULL, 'https://app.sandbox.midtrans.com/payment-links/f55a3326-fef4-4b1e-8430-058d4dcddc5e', 'digital', '2023-06-08 08:55:47', NULL, 'pending', 100000, '2023-06-08 08:25:47', 'system', '2023-06-08 08:25:47', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (57, 65, 'da711dcd-ffaa-4ce7-aba3-7cfa9974ea46', NULL, 'https://app.sandbox.midtrans.com/payment-links/6a851705-b9a7-4d24-8ac1-5f40ea1f4cb3', 'digital', '2023-06-08 08:56:05', NULL, 'pending', 10000, '2023-06-08 08:26:05', 'system', '2023-06-08 08:26:05', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (58, 66, '034614b2-baef-4490-acd9-91147065a6ac', NULL, 'https://app.sandbox.midtrans.com/payment-links/74f9108d-b529-4c55-b93c-c3e48034dc13', 'digital', '2023-07-18 16:14:00', NULL, 'pending', 10000, '2023-07-18 15:44:00', 'system', '2023-07-18 15:44:00', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (59, 67, '4b59c69a-93bd-4b15-a7fd-a6254d7b05bb', NULL, 'https://app.sandbox.midtrans.com/payment-links/73793a5e-96aa-4a75-8f74-60100441be4c', 'digital', '2023-07-27 18:42:08', NULL, 'pending', 10000, '2023-07-27 18:12:08', 'system', '2023-07-27 18:12:08', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (60, 68, '0582a17d-15c0-4c23-b98b-83c672f28063', NULL, 'https://app.sandbox.midtrans.com/payment-links/6332a347-d4da-4d09-b827-d481fe0b92aa', 'digital', '2023-07-27 18:47:00', NULL, 'pending', 10000, '2023-07-27 18:17:00', 'system', '2023-07-27 18:17:00', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (61, 69, '50d99d20-1f33-4b17-a4a3-3b328cf809c9', NULL, 'https://app.sandbox.midtrans.com/payment-links/84fd24a2-56a3-424b-adf3-ea21ab8e8845', 'digital', '2023-07-27 18:47:56', NULL, 'pending', 10000, '2023-07-27 18:17:56', 'system', '2023-07-27 18:17:56', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (62, 70, '7f2046f2-604c-4541-a09f-9aa58d672a1c', NULL, 'https://app.sandbox.midtrans.com/payment-links/a20b3ff8-9910-4db5-b47e-8fa2c50b95e0', 'digital', '2023-07-27 19:58:32', NULL, 'pending', 10000, '2023-07-27 19:28:32', 'system', '2023-07-27 19:28:32', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (63, 71, '85ea6a95-3fd9-4d82-9a71-65ebdf027054', NULL, 'https://app.sandbox.midtrans.com/payment-links/8b3f660d-1f51-4d91-a14c-2d5ea3245e37', 'digital', '2023-07-28 14:41:13', NULL, 'pending', 10000, '2023-07-28 14:11:13', 'system', '2023-07-28 14:11:13', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (64, 72, '71882acc-d016-4905-9706-0441dab13e59', NULL, 'https://app.sandbox.midtrans.com/payment-links/97743f99-56fd-44fe-a5eb-0c26a378209f', 'digital', '2023-07-28 14:41:44', NULL, 'pending', 10900, '2023-07-28 14:11:44', 'system', '2023-07-28 14:11:44', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (65, 73, '59efe95c-3bd0-4dec-a2af-6c14aa282243', NULL, 'https://app.midtrans.com/payment-links/d9a7c526-757b-4100-ac1e-db564838245b', 'digital', '2023-08-01 17:10:41', NULL, 'pending', 100000, '2023-08-01 16:40:41', 'system', '2023-08-01 16:40:41', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (66, 74, '837dbec6-257a-4057-b54b-2b4599c1fc8f', NULL, 'https://app.sandbox.midtrans.com/payment-links/e0d62372-ee5f-45f4-a79f-733133d39a74', 'digital', '2023-08-01 18:00:39', NULL, 'pending', 50000, '2023-08-01 17:30:39', 'system', '2023-08-01 17:30:39', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (67, 75, '2d36fb53-c878-405c-b9c1-4f43da6c7646', NULL, 'https://app.midtrans.com/payment-links/d448f934-81fc-44e3-af6e-0125a1e6b130', 'digital', '2023-08-01 19:50:18', NULL, 'pending', 10000, '2023-08-01 19:20:18', 'system', '2023-08-01 19:20:18', NULL, NULL, NULL, NULL);
INSERT INTO `payment` VALUES (68, 76, '1294b69d-f16c-42e7-a8b1-f38c0f2e93bd', NULL, 'https://app.midtrans.com/payment-links/fe44a45a-2b1a-4b2d-a9f8-67da593e8591', 'digital', '2023-08-01 19:51:11', NULL, 'pending', 10000, '2023-08-01 19:21:11', 'system', '2023-08-01 19:21:11', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for payment_logs
-- ----------------------------
DROP TABLE IF EXISTS `payment_logs`;
CREATE TABLE `payment_logs`  (
  `id` int(11) NOT NULL,
  `json_body` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_at` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `updated_by` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `deleted_by` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment_logs
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `code` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `deleted_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'admin', 'admin', NULL, '2023-05-08 00:18:21', 'system', NULL, NULL, NULL, NULL);
INSERT INTO `roles` VALUES (2, 'supervisor', 'supervisor', NULL, '2023-05-08 00:18:21', 'system', NULL, NULL, NULL, NULL);
INSERT INTO `roles` VALUES (3, 'user', 'user', NULL, '2023-05-08 00:18:21', 'system', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` char(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` char(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `deleted_by` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_UN`(`email`) USING BTREE,
  UNIQUE INDEX `users_phone_UN`(`phone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (49, 3, 'Kevin Nainggolan', 'kevin.nainggolan31@gmail.com', '0812615504312', '$2b$10$yU3KjLSe3sfchS6zSzu4deYEcroZCZAT89MMvo26AaWqBjlgRfmre', '2023-05-28 19:33:40', 'system', '2023-07-27 20:06:14', NULL, NULL, NULL);
INSERT INTO `users` VALUES (50, 2, 'Satria Armando Pakpahan', 'satriaarmando@gmail.com', '082267022112', '$2b$10$hPxOvKlkE8wLJRIzJezGFOTG0GjczxtwJpvrKFIlRqDkJT1tWEBy.', '2023-05-28 19:37:08', 'system', '2023-05-28 19:37:48', NULL, NULL, NULL);
INSERT INTO `users` VALUES (51, 1, 'Rafael Sihombing', 'rafaelsihombing@gmail.com', '081261550431', '$2b$10$2CB1M.BJye5cvUDFoksEBunh.3Dd9Cn22jYQ81d3GyTXh9OEFWvcO', '2023-05-28 20:00:17', 'system', '2023-07-27 20:06:16', NULL, NULL, NULL);
INSERT INTO `users` VALUES (52, 3, 'Del Donation Care', 'deldonationcare@gmail.com', '08121212121212', '$2b$10$Om61I34PfaLkkq0yAKU9gO3JaVlv4pRyTQwjHovAIn5n2Up/aY8zi', '2023-05-30 11:50:09', 'system', '2023-05-30 11:50:09', NULL, NULL, NULL);
INSERT INTO `users` VALUES (53, 3, 'kiel', 'Kiel@gmail.com', '08123123123123', '$2b$10$D5MbEoYz3myJq2PTPi9g/e2tKZu.r3JEE6QbmDjga5r37.BrP8UWy', '2023-07-18 14:53:39', 'system', '2023-07-18 14:53:39', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
