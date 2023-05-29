USE nodedb;

CREATE TABLE people (
    id integer not null auto_increment,
    name varchar(200),
    PRIMARY KEY (ID)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO people (name) VALUES ('Raissa'), ('Maria'), ('Nick'), ('Loki'), ('Joaquim');