-- Migrate existing store entries data to use the new enum values
-- Update 'IN' to 'INCOMING'
UPDATE store_entries SET entry_type = 'INCOMING' WHERE entry_type = 'IN';

-- Update 'OUT' to 'OUTGOING'  
UPDATE store_entries SET entry_type = 'OUTGOING' WHERE entry_type = 'OUT';

-- TRANSFER and ADJUSTMENT should already be correct
-- No changes needed for these values 