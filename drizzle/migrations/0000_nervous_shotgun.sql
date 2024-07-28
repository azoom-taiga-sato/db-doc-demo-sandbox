CREATE TABLE `attribute` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `attribute_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`email_verified` varchar(50),
	`password` varchar(255) NOT NULL,
	`birthday` date NOT NULL,
	`plate_number` varchar(50) NOT NULL,
	`attribute_id` bigint NOT NULL,
	`created_at` timestamp,
	`updated_at` timestamp,
	`deleted_at` timestamp,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `user` ADD CONSTRAINT `user_attribute_id_attribute_id_fk` FOREIGN KEY (`attribute_id`) REFERENCES `attribute`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `name_idx` ON `attribute` (`name`);--> statement-breakpoint
CREATE INDEX `name_idx` ON `user` (`name`);