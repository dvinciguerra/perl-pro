-- Deploy table_user_email
-- requires: table_user
-- requires: schema_system

BEGIN;

    SET search_path = 'system';
    SET client_min_messages = 'warning';

    CREATE TABLE "user_email" (
        id SERIAL PRIMARY KEY,
        "user" TEXT NOT NULL,
        email TEXT NOT NULL,
        is_main_address BOOLEAN NOT NULL DEFAULT FALSE,
        FOREIGN KEY("user") REFERENCES "user"(login) ON UPDATE CASCADE ON DELETE CASCADE
    );

COMMIT;