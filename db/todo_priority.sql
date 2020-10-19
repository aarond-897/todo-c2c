UPDATE todo
SET priority = NOT priority
WHERE id=${id};