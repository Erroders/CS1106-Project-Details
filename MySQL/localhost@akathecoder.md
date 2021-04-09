# localhost@akathecoder

- [localhost@akathecoder](#localhostakathecoder)
  - [SQL Queries](#sql-queries)
    - [Table Creation](#table-creation)
      - [User](#user)
      - [Question](#question)
      - [Answer](#answer)
    - [Insert Data](#insert-data)
      - [User 1](#user-1)

## SQL Queries

### Table Creation

#### User

```sql
CREATE TABLE `dbms_project`.`User` (
    `User_ID` integer unsigned NOT NULL AUTO_INCREMENT,
    `Username` varchar(45) NOT NULL,
    `Password` char(64) NOT NULL,
    `First_Name` varchar(45) NOT NULL,
    `Middle_Name` varchar(45) NOT NULL,
    `Last_Name` varchar(45) NOT NULL,
    `Email` varchar(45) NOT NULL,
    `Bio` text NULL,
    `Batch` varchar(45) NOT NULL,
    `Degree` varchar(45) NOT NULL,
    `Field` varchar(45) NOT NULL,
    `Roll_No` varchar(45) NOT NULL,
    `DOB` date NOT NULL,
    `Mobile_Number` varchar(11) NOT NULL,
    PRIMARY KEY (`User_ID`)
) AUTO_INCREMENT = 1;
```

#### Question

```sql
CREATE TABLE `dbms_project`.`Question` (
    `Question_ID` integer unsigned NOT NULL AUTO_INCREMENT,
    `DOC` date NOT NULL,
    `Views` integer unsigned NOT NULL,
    `Title` varchar(45) NOT NULL,
    `Content` text NOT NULL,
    `User_ID` integer unsigned NOT NULL,
    `slug` varchar(10) NOT NULL,
    PRIMARY KEY (`Question_ID`),
    FOREIGN KEY (`User_ID`) REFERENCES `dbms_project`.`User` (`User_ID`)
);
```

#### Answer

```sql
CREATE TABLE `dbms_project`.`Answer` (
    `Answer_ID` integer NOT NULL,
    `Answer_Body` text NOT NULL,
    `Correct` char NULL,
    `Upvotes` integer unsigned NOT NULL,
    `Downvotes` integer unsigned NOT NULL,
    `Question_ID` integer unsigned NOT NULL,
    `DOC` date NOT NULL,
    `User_ID` integer unsigned NOT NULL,
    PRIMARY KEY (`Answer_ID`),
    FOREIGN KEY (`Question_ID`) REFERENCES `dbms_project`.`Question` (`Question_ID`),
    FOREIGN KEY (`User_ID`) REFERENCES `dbms_project`.`User` (`User_ID`)
);
```

### Insert Data

#### User 1

```sql
INSERT INTO User (
        Username,
        Password,
        First_Name,
        Middle_Name,
        Last_Name,
        Email,
        Bio,
        Batch,
        Degree,
        Field,
        Roll_No,
        DOB,
        Mobile_Number
    )
VALUES (
        'akathecoder',
        'password',
        'Sparsh',
        '',
        'Agarwal',
        'sparsh@email.com',
        'This is my Bio',
        '2023',
        'Btech',
        'CSE',
        '052',
        DATE('2001/12/25'),
        '9876543210'
    );
```
