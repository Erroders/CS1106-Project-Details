# SQL Table Code

- [SQL Table Code](#sql-table-code)
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
CREATE TABLE `dbms_project`.`user` (
    `userId` integer unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(45) NOT NULL UNIQUE,
    `password` char(64) NOT NULL,
    `firstName` varchar(45) NOT NULL,
    `middleName` varchar(45) NOT NULL,
    `lastName` varchar(45) NOT NULL,
    `email` varchar(45) NOT NULL UNIQUE,
    `bio` text NULL,
    `batch` varchar(45) NOT NULL,
    `degree` varchar(45) NOT NULL,
    `field` varchar(45) NOT NULL,
    `rollNo` varchar(45) NOT NULL,
    `dob` date NULL,
    `mobileNumber` varchar(11) NULL,
    PRIMARY KEY (`userId`)
) AUTO_INCREMENT = 1;
```

#### Question

```sql
CREATE TABLE `dbms_project`.`question` (
    `questionId` integer unsigned NOT NULL AUTO_INCREMENT,
    `doc` date NOT NULL,
    `views` integer unsigned NOT NULL,
    `title` varchar(45) NOT NULL,
    `content` text NOT NULL,
    `userId` integer unsigned NOT NULL,
    `slug` varchar(10) NOT NULL UNIQUE,
    PRIMARY KEY (`questionId`),
    FOREIGN KEY (`userId`) REFERENCES `dbms_project`.`user` (`userId`)
)AUTO_INCREMENT = 1;
```

#### Answer

```sql
CREATE TABLE `dbms_project`.`answer` (
    `answerId` integer unsigned NOT NULL AUTO_INCREMENT,
    `answerBody` text NOT NULL,
    `correct` char NULL,
    `upVotes` integer unsigned NOT NULL,
    `downVotes` integer unsigned NOT NULL,
    `questionId` integer unsigned NOT NULL,
    `doc` date NOT NULL,
    `userId` integer unsigned NOT NULL,
    PRIMARY KEY (`answerId`),
    FOREIGN KEY (`questionId`) REFERENCES `dbms_project`.`question` (`questionId`),
    FOREIGN KEY (`userId`) REFERENCES `dbms_project`.`user` (`userId`)
)AUTO_INCREMENT = 1;
```

### Insert Data

#### User 1

```sql
INSERT INTO user (
        username,
        password,
        firstName,
        middleName,
        lastName,
        email,
        bio,
        batch,
        degree,
        field,
        rollNo,
        dob,
        mobileNumber
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
