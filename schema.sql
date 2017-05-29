DROP TABLE IF EXISTS information;
DROP TABLE IF EXISTS allergies;




CREATE TABLE allergies(
    userid int PRIMARY KEY NOT NULL ,
    eggsallergy BOOLEAN  NOT NULL,
    fishallergy BOOLEAN  NOT NULL,
    milkallergy BOOLEAN  NOT NULL,
    peanutsallergy BOOLEAN  NOT NULL,
    sesameallergy BOOLEAN  NOT NULL,
    shellfishallergy BOOLEAN  NOT NULL,
    soyallergy  BOOLEAN  NOT NULL,
    treenutsallergy BOOLEAN  NOT NULL,
    wheatallergy BOOLEAN  NOT NULL
);


CREATE TABLE information (
    id SERIAL PRIMARY KEY NOT NULL,
    userid  int REFERENCES allergies(userid) NOT NULL,
    product VARCHAR  NOT NULL,
    barcode VARCHAR  UNIQUE NOT NULL,
    eggs BOOLEAN NOT NULL,
    fish BOOLEAN NOT NULL,
    milk BOOLEAN NOT NULL,
    peanuts BOOLEAN NOT NULL,
    sesame BOOLEAN NOT NULL,
    shellfish BOOLEAN NOT NULL,
    soy BOOLEAN NOT NULL,
    treenuts BOOLEAN NOT NULL,
    wheat BOOLEAN NOT NULL,
    img VARCHAR,
    result BOOLEAN NOT NULL
);


INSERT INTO allergies(userid,eggsallergy,fishallergy,milkallergy, peanutsallergy,sesameallergy,shellfishallergy,soyallergy,treenutsallergy,wheatallergy) VALUES



