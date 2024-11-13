CREATE TABLE "Skill"(
    "skill_id" SERIAL NOT NULL,
    "skill_name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL
);
ALTER TABLE
    "Skill" ADD PRIMARY KEY("skill_id");
CREATE TABLE "User"(
    "user_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NULL,
    "bio" TEXT NULL,
    "rating" INTEGER NULL
);
ALTER TABLE
    "User" ADD PRIMARY KEY("user_id");
ALTER TABLE
    "User" ADD CONSTRAINT "user_email_unique" UNIQUE("email");
CREATE TABLE "Review"(
    "review_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "reviewer_id" INTEGER NOT NULL,
    "rating" INTEGER NULL,
    "comment" TEXT NULL,
    "timestamp" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "Review" ADD PRIMARY KEY("review_id");
CREATE TABLE "Message"(
    "message_id" SERIAL NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "timestamp" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "Message" ADD PRIMARY KEY("message_id");
CREATE TABLE "Match"(
    "match_id" SERIAL NOT NULL,
    "user_id_1" INTEGER NOT NULL,
    "user_id_2" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'unmatched'
);
ALTER TABLE
    "Match" ADD PRIMARY KEY("match_id");
ALTER TABLE
    "Skill" ADD CONSTRAINT "skill_created_by_foreign" FOREIGN KEY("created_by") REFERENCES "User"("user_id");
ALTER TABLE
    "Review" ADD CONSTRAINT "review_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "User"("user_id");
ALTER TABLE
    "Match" ADD CONSTRAINT "match_user_id_2_foreign" FOREIGN KEY("user_id_2") REFERENCES "User"("user_id");
ALTER TABLE
    "Message" ADD CONSTRAINT "message_sender_id_foreign" FOREIGN KEY("sender_id") REFERENCES "User"("user_id");
ALTER TABLE
    "Message" ADD CONSTRAINT "message_receiver_id_foreign" FOREIGN KEY("receiver_id") REFERENCES "User"("user_id");
ALTER TABLE
    "Review" ADD CONSTRAINT "review_reviewer_id_foreign" FOREIGN KEY("reviewer_id") REFERENCES "User"("user_id");
ALTER TABLE
    "Match" ADD CONSTRAINT "match_user_id_1_foreign" FOREIGN KEY("user_id_1") REFERENCES "User"("user_id");