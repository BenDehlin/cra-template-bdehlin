CREATE TABLE users (
   user_id serial primary key,
   username varchar(50) not null,
   email varchar(150) not null,
   password varchar(300) not null,
   is_admin boolean not null
);