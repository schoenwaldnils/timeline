import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'de');
  CREATE TYPE "public"."enum_person_gender" AS ENUM('male', 'female');
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar,
  	"sizes_desktop_url" varchar,
  	"sizes_desktop_width" numeric,
  	"sizes_desktop_height" numeric,
  	"sizes_desktop_mime_type" varchar,
  	"sizes_desktop_filesize" numeric,
  	"sizes_desktop_filename" varchar
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "event" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric NOT NULL,
  	"image_id" integer,
  	"wol_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "event_locales" (
  	"name" varchar NOT NULL,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "time" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"start_year" numeric NOT NULL,
  	"end_year" numeric,
  	"image_id" integer,
  	"wol_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "time_locales" (
  	"name" varchar NOT NULL,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "person" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"gender" "enum_person_gender" NOT NULL,
  	"still_active" boolean DEFAULT false,
  	"start_year" numeric,
  	"end_year" numeric,
  	"start_blurriness" numeric DEFAULT 0,
  	"end_blurriness" numeric DEFAULT 0,
  	"image_id" integer,
  	"wol_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "person_locales" (
  	"name" varchar NOT NULL,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "person_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"person_id" integer
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"event_id" integer,
  	"time_id" integer,
  	"person_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event" ADD CONSTRAINT "event_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "event_locales" ADD CONSTRAINT "event_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "time" ADD CONSTRAINT "time_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "time_locales" ADD CONSTRAINT "time_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."time"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "person" ADD CONSTRAINT "person_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "person_locales" ADD CONSTRAINT "person_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "person_rels" ADD CONSTRAINT "person_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "person_rels" ADD CONSTRAINT "person_rels_person_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_event_fk" FOREIGN KEY ("event_id") REFERENCES "public"."event"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_time_fk" FOREIGN KEY ("time_id") REFERENCES "public"."time"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_person_fk" FOREIGN KEY ("person_id") REFERENCES "public"."person"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_tablet_sizes_tablet_filename_idx" ON "media" USING btree ("sizes_tablet_filename");
  CREATE INDEX "media_sizes_desktop_sizes_desktop_filename_idx" ON "media" USING btree ("sizes_desktop_filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "event_image_idx" ON "event" USING btree ("image_id");
  CREATE INDEX "event_updated_at_idx" ON "event" USING btree ("updated_at");
  CREATE INDEX "event_created_at_idx" ON "event" USING btree ("created_at");
  CREATE UNIQUE INDEX "event_locales_locale_parent_id_unique" ON "event_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "time_image_idx" ON "time" USING btree ("image_id");
  CREATE INDEX "time_updated_at_idx" ON "time" USING btree ("updated_at");
  CREATE INDEX "time_created_at_idx" ON "time" USING btree ("created_at");
  CREATE UNIQUE INDEX "time_locales_locale_parent_id_unique" ON "time_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "person_image_idx" ON "person" USING btree ("image_id");
  CREATE INDEX "person_updated_at_idx" ON "person" USING btree ("updated_at");
  CREATE INDEX "person_created_at_idx" ON "person" USING btree ("created_at");
  CREATE UNIQUE INDEX "person_locales_locale_parent_id_unique" ON "person_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "person_rels_order_idx" ON "person_rels" USING btree ("order");
  CREATE INDEX "person_rels_parent_idx" ON "person_rels" USING btree ("parent_id");
  CREATE INDEX "person_rels_path_idx" ON "person_rels" USING btree ("path");
  CREATE INDEX "person_rels_person_id_idx" ON "person_rels" USING btree ("person_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_event_id_idx" ON "payload_locked_documents_rels" USING btree ("event_id");
  CREATE INDEX "payload_locked_documents_rels_time_id_idx" ON "payload_locked_documents_rels" USING btree ("time_id");
  CREATE INDEX "payload_locked_documents_rels_person_id_idx" ON "payload_locked_documents_rels" USING btree ("person_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "event" CASCADE;
  DROP TABLE "event_locales" CASCADE;
  DROP TABLE "time" CASCADE;
  DROP TABLE "time_locales" CASCADE;
  DROP TABLE "person" CASCADE;
  DROP TABLE "person_locales" CASCADE;
  DROP TABLE "person_rels" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_person_gender";`)
}
