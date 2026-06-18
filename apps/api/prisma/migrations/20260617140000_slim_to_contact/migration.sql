-- Site content now lives in the frontend (bilingual). Remove the content tables.
-- ContactMessage is preserved; this only drops the unused content models.
DROP TABLE IF EXISTS "Certification";
DROP TABLE IF EXISTS "Education";
DROP TABLE IF EXISTS "Industry";
DROP TABLE IF EXISTS "Experience";
DROP TABLE IF EXISTS "SkillGroup";
DROP TABLE IF EXISTS "Stat";
DROP TABLE IF EXISTS "Profile";

-- Track the visitor's language on new messages.
ALTER TABLE "ContactMessage" ADD COLUMN IF NOT EXISTS "locale" TEXT;
