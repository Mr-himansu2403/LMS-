-- Update all existing users to APPROVED status
UPDATE users SET status = 'APPROVED' WHERE status IS NULL OR status != 'APPROVED';

-- Show current users and their status
SELECT id, name, email, status, role_id FROM users; 