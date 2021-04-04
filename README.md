# CS1106 Project

**Table of Content**

- [CS1106 Project](#cs1106-project)
  - [Description](#description)
  - [ER Model](#er-model)
    - [Proposed ER Models](#proposed-er-models)
    - [Final ER Model](#final-er-model)
  - [Relational Schema](#relational-schema)
    - [Final Schema](#final-schema)
  - [Tech Stack](#tech-stack)
  - [SQL Queries](#sql-queries)
    - [Table Creation (development@localhost)](#table-creation-developmentlocalhost)
      - [User](#user)
      - [Question](#question)
      - [Answer](#answer)

## Description

The Basic idea for this project is to create an online platform where students from the same college/university can come and ask questions from from there fellow mates.

The Platform will have:

- User Accounts (Sign Up / Sign In) Functionality
- Ability to Posting Questions
- Answer Question
- Database Connectivity
- Password Resetting Functionality
- Ability to vote answers
- Searching Functionality

## ER Model

### Proposed ER Models

- By [@akathecoder](https://github.com/akathecoder)

![Proposed ER Model by @akathecoder](</ER%20Model/ER%20Model%20(Proposed%20-%20Sparsh).png>)

- By [@rg12301](https://github.com/rg12301)

![Proposed ER Model by @rg12301](</ER%20Model/ER%20Model%20(Proposed%20-%20Raghav).png>)

- By [@nonitmittal](https://github.com/nonitmittal)

![Proposed ER Model by @nonitmittal](</ER%20Model/ER%20Model%20(Proposed%20-%20Nonit).png>)

### Final ER Model

![Final ER Model](/ER%20Model/ER%20Model%20-%20Final.png)

## Relational Schema

### Final Schema

![Final Relational Schema](/Relational%20Schema/Final%20Schema.png)

## Tech Stack

| Technology        | Used for             |
| ----------------- | -------------------- |
| ReactJS           | Frontend             |
| NodeJS, ExpressJS | Backend              |
| MySQL             | Database             |
| AWS               | Hosting              |
| Algolia           | Search Functionality |

## SQL Queries

### Table Creation (development@localhost)

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
    PRIMARY KEY (`Question_ID`),
    KEY `fkIdx_60` (`User_ID`),
    CONSTRAINT `FK_59` FOREIGN KEY `fkIdx_60` (`User_ID`) REFERENCES `dbms_project`.`User` (`User_ID`)
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
    KEY `fkIdx_71` (`Question_ID`),
    CONSTRAINT `FK_70` FOREIGN KEY `fkIdx_71` (`Question_ID`) REFERENCES `dbms_project`.`Question` (`Question_ID`),
    KEY `fkIdx_75` (`User_ID`),
    CONSTRAINT `FK_74` FOREIGN KEY `fkIdx_75` (`User_ID`) REFERENCES `dbms_project`.`User` (`User_ID`)
);
```
