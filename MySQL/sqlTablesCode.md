# SQL Table Code

- [SQL Table Code](#sql-table-code)
  - [SQL Queries](#sql-queries)
    - [Database Creation](#database-creation)
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
      - [Answer 1](#answer-1)
      - [Answer 2](#answer-2)
      - [Answer 3](#answer-3)

## SQL Queries

### Database Creation
```sql
DROP DATABASE dbms_project;
CREATE DATABASE dbms_project;
USE dbms_project;
```

### Table Creation

#### User

```sql
CREATE TABLE `dbms_project`.`user` (
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
    PRIMARY KEY (`username`)
);
```

#### Question

```sql
CREATE TABLE `dbms_project`.`question` (
    `questionId` integer unsigned NOT NULL AUTO_INCREMENT,
    `doc` datetime NOT NULL,
    `views` integer unsigned NOT NULL,
    `title` varchar(45) NOT NULL,
    `content` text NOT NULL,
    `username` varchar(45) NOT NULL,
    `slug` varchar(200) NOT NULL UNIQUE,
    PRIMARY KEY (`questionId`),
    FOREIGN KEY (`username`) REFERENCES `dbms_project`.`user` (`username`)
) AUTO_INCREMENT = 1;
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
    `doc` datetime NOT NULL,
    `username` varchar(45) NOT NULL,
    PRIMARY KEY (`answerId`),
    FOREIGN KEY (`questionId`) REFERENCES `dbms_project`.`question` (`questionId`),
    FOREIGN KEY (`username`) REFERENCES `dbms_project`.`user` (`username`)
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
        username,
        slug
    )
VALUES (
        '2021-04-09 06:32:12',
        3,
        'Tell me about yourself.',
        'The interviewer here is testing your honesty while also identifying whether you’ve got what it takes. Link your strengths to concrete examples and choose weaknesses that you are working on improving. Always keep in mind to discuss attributes that will eventually qualify you for the job.',
        'akathecoder',
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
        username,
        slug
    )
VALUES (
        '2021/04/10 17:53:55',
        5,
        'What are your strengths and weaknesses?',
        'While interviewers would like to know more about you, they are not just making small talk. They are putting you on the spot by giving you full control of the situation and testing your reaction. ',
        'rg12301',
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
        username,
        slug
    )
VALUES (
        '2021/04/10 11:10:09',
        2,
        'Why are you leaving your current job?',
        'Interviewers typically get hundreds of applications for the same job, and what they would like to know when asking this question is what sets you apart from the rest of the candidates. Chances are that you will not be aware of who the other candidates are so your best bet is to summarise your most impressive traits. The answer to this question can also be used for the question ‘Why do you want to work here?’ and ‘What interests you about this role?’',
        'nonit_m',
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
        username,
        slug
    )
VALUES (
        '2021/04/11 01:45:12',
        6,
        'What is your biggest accomplishment?',
        'The interviewer is looking for details to show that you can do the job. It’s an excellent opportunity to showcase your track record, and this information will also convey to your interviewer, what you would be capable of. The answer to this question can also be used for the question: ‘Tell me about a challenge or conflict you’ve faced at work, and how you’ve dealt with it?’.',
        'nonit_m',
        'ertsjdlfy'
    );
```

#### Answer 1

```sql
INSERT INTO answer (
        answerBody,
        correct,
        upVotes,
        downVotes,
        questionId,
        doc,
        username
    )
VALUES (
        'When describing your strengths, always be accurate. Share your real strengths, not those you think the interviewer wants to hear. Be specific and choose strengths which are relevant and based on the job role requirements. Avoid choosing vague words such as “people skills,” instead say “persuasive communication” or “relationship building.”',
        'I',
        2,
        1,
        2,
        '2021/04/13 11:54:09',
        'akathecoder'
    );
```

#### Answer 2

```sql
INSERT INTO answer (
        answerBody,
        correct,
        upVotes,
        downVotes,
        questionId,
        doc,
        username
    )
VALUES (
        'One helpful way to answer this question is by using the STAR method. Set the context for your story (Situation), explain what was required of you (Task), what you did to achieve the objectives (Activity) and the success of it all (Result).',
        'C',
        12,
        5,
        4,
        '2021/05/01 23:14:52',
        'rg12301'
    );
```

#### Answer 3

```sql
INSERT INTO answer (
        answerBody,
        correct,
        upVotes,
        downVotes,
        questionId,
        doc,
        username
    )
VALUES (
        'When describing your strengths, always be accurate. Share your real strengths, not those you think the interviewer wants to hear. Be specific and choose strengths which are relevant and based on the job role requirements. Avoid choosing vague words such as “people skills,” instead say “persuasive communication” or “relationship building”.',
        '',
        9,
        11,
        2,
        '2021/04/26 00:02:25',
        'vineet_ks'
    );
```
