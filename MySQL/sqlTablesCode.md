# SQL Table Code

- [SQL Table Code](#sql-table-code)
  - [SQL Queries](#sql-queries)
    - [Table Creation](#table-creation)
      - [User](#user)
      - [Question](#question)
      - [Answer](#answer)
    - [Insert Data](#insert-data)
      - [User 1](#user-1)
      - [User 2](#user-2)
      - [User 3](#user-3)
      - [User 4](#user-4)
      - [Question 1](#question-1)
      - [Question 2](#question-2)
      - [Question 3](#question-3)
      - [Question 4](#question-4)

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

#### User 2

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
        'rg12301',
        'password',
        'Raghav',
        '',
        'Goyal',
        'raghav@email.com',
        'This is my Bio',
        '2023',
        'Btech',
        'CSE',
        '040',
        DATE('2001/03/12'),
        '6350234485'
    );
```

#### User 3

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
        'nonit_m',
        'password',
        'Nonit',
        '',
        'Mittal',
        'nonit@email.com',
        'This is my Bio',
        '2023',
        'Btech',
        'CSE',
        '036',
        DATE('2001/05/02'),
        '9828656000'
    );
```

#### User 4

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
        'vineet_ks',
        'password',
        'Vineet',
        'Kumar',
        'Sharma',
        'vineetkumar@email.com',
        'This is my Bio',
        '2023',
        'Btech',
        'CSE',
        '060',
        DATE('2000/11/24'),
        '7014311221'
    );
```

#### Question 1

```sql
INSERT INTO question (
        doc,
        views,
        title,
        content,
        userId,
        slug
    )
VALUES (
        DATE('2021/04/09'),
        3,
        'Tell me about yourself.',
        'The interviewer here is testing your honesty while also identifying whether you’ve got what it takes. Link your strengths to concrete examples and choose weaknesses that you are working on improving. Always keep in mind to discuss attributes that will eventually qualify you for the job.',
        2,
        'tttttttttt'
    );
```

#### Question 2

```sql
INSERT INTO question (
        doc,
        views,
        title,
        content,
        userId,
        slug
    )
VALUES (
        DATE('2021/04/10'),
        5,
        'What are your strengths and weaknesses?',
        'While interviewers would like to know more about you, they are not just making small talk. They are putting you on the spot by giving you full control of the situation and testing your reaction. ',
        1,
        'wertwysgh'
    );
```

#### Question 3

```sql
INSERT INTO question (
        doc,
        views,
        title,
        content,
        userId,
        slug
    )
VALUES (
        DATE('2021/04/10'),
        2,
        'Why are you leaving your current job?',
        'Interviewers typically get hundreds of applications for the same job, and what they would like to know when asking this question is what sets you apart from the rest of the candidates. Chances are that you will not be aware of who the other candidates are so your best bet is to summarise your most impressive traits. The answer to this question can also be used for the question ‘Why do you want to work here?’ and ‘What interests you about this role?’',
        1,
        'ydhfjiplr'
    );
```

#### Question 4

```sql
INSERT INTO question (
        doc,
        views,
        title,
        content,
        userId,
        slug
    )
VALUES (
        DATE('2021/04/11'),
        6,
        'What is your biggest accomplishment?',
        'The interviewer is looking for details to show that you can do the job. It’s an excellent opportunity to showcase your track record, and this information will also convey to your interviewer, what you would be capable of. The answer to this question can also be used for the question: ‘Tell me about a challenge or conflict you’ve faced at work, and how you’ve dealt with it?’.',
        3,
        'ertsjdlfy'
    );
```
