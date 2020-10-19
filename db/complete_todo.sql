UPDATE todo
SET complete = NOT complete
WHERE id=${id};