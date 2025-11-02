-- Update the store_entries table constraint to match the new enum values
-- Drop the existing constraint if it exists
ALTER TABLE store_entries DROP CONSTRAINT IF EXISTS store_entries_entry_type_check;

-- Add the new constraint with the correct enum values
ALTER TABLE store_entries ADD CONSTRAINT store_entries_entry_type_check 
CHECK (entry_type IN ('INCOMING', 'OUTGOING', 'TRANSFER', 'ADJUSTMENT')); 