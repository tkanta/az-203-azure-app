CREATE USER dbUser1 WITH PASSWORD='dbuser@1234'
CREATE USER dbUser2 WITH PASSWORD='dbuser@1234'

CREATE TABLE users
(
    id INT IDENTITY PRIMARY KEY,
    name NVARCHAR(255),
    email NVARCHAR(255),
);

SELECT * FROM users