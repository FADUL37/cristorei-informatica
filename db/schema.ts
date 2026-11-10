import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const tickets = sqliteTable('tickets',{id:text('id').primaryKey(), token:text('token').notNull(),name:text('name').notNull(),contact:text('contact').notNull(),service:text('service').notNull(),date:text('date'),time:text('time'),status:text('status').notNull().default('Pendente'),created:integer('created').notNull()});
export const messages = sqliteTable('messages',{id:text('id').primaryKey(),ticket:text('ticket').notNull(),role:text('role').notNull(),body:text('body').notNull(),created:integer('created').notNull()});
export const banners = sqliteTable('banners',{id:integer('id').primaryKey(),title:text('title').notNull(),description:text('description').notNull(),image:text('image'),tag:text('tag').notNull()});
