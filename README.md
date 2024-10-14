# restful-api-user
## Создать RESTFUL для создания нового пользователя, редактирование пользователя, удаление пользователя, вывода одного или всех пользователей. 

- метод GET - вывести список всех пользователей или вывести определенного пользователя, 
- метод POST - добавить нового пользователя со всеми характеристиками, 
- метод PUT - обновить определенные характеристики у выбранного пользователя, 
- метод DELETE - удалить пользователя из списка.

?! pg — это клиент для взаимодействия с PostgreSQL



1.
npm init
npm install
! node app.js
http://localhost:3000/



2.
createdb -U postgres db
! psql -U postgres
\l (List of databases)

! postgres=# \c db
You are now connected to database "db" as user "postgres".

db=# \dt
Did not find any relations.

db=# \i database.sql
CREATE TABLE



3. ____Создать нового пользователя___
db=# INSERT INTO users (name, email, age) VALUES ('Anna', 'anna@gmail.com', 22);
INSERT 0 1

[
    ?! 0 — это количество строк, в которых было выполнено обновление (обновлений не произошло, потому что это операция вставки, а не обновления).
    1 — это количество строк, которые были успешно вставлены в таблицу
]

POST http://localhost:3000/user
{
  "name": "Lyuba",
  "email": "lyuba@gmail.com",
  "age": 28
}

201 Created
{
    "id": 2,
    "name": "Lyuba",
    "email": "lyuba@gmail.com",
    "age": 28
}


4. ___Получить всех пользователей___
db=# SELECT * FROM users;
 id | name  |      email      | age
----+-------+-----------------+-----
  1 | Anna  | anna@gmail.com  |  22
  2 | Lyuba | lyuba@gmail.com |  28
(2 rows)

GET http://localhost:3000/users
[
    {
        "id": 1,
        "name": "Anna",
        "email": "anna@gmail.com",
        "age": 22
    },
    {
        "id": 2,
        "name": "Lyuba",
        "email": "lyuba@gmail.com",
        "age": 28
    }
]


5. _____Получить пользователя по id______
db=# SELECT * FROM users WHERE id = 1;  
 id | name |     email      | age
----+------+----------------+-----
  1 | Anna | anna@gmail.com |  22
(1 row)

GET http://localhost:3000/users/1
{
    "id": 1,
    "name": "Anna",
    "email": "anna@gmail.com",
    "age": 22
}


6. ____Обновить пользователя по id___
db=# UPDATE users SET name = 'Maria', email = 'maria@gmail.com', age = 25 WHERE id = 2 RETURNING *;
 id | name  |      email      | age
----+-------+-----------------+-----
  2 | Maria | maria@gmail.com |  25
(1 row)

UPDATE 1

PUT http://localhost:3000/users/1
{
  "name": "Sofiya",
  "email": "sofiya@gmail.com",
  "age": 30
}
{
    "id": 1,
    "name": "Sofiya",
    "email": "sofiya@gmail.com",
    "age": 30
}


7. ___Удалить пользователя по id___
db=# DELETE FROM users WHERE id = 2 RETURNING *;
 id | name  |      email      | age
----+-------+-----------------+-----
  2 | Maria | maria@gmail.com |  25
(1 row)

DELETE 1

DELETE http://localhost:3000/users/1
{
    "message": "User with ID 1 has been deleted"
}
