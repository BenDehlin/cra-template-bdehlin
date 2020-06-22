insert into users (
   email,
   username,
   password,
   is_admin
) values ( 
   ${email},
   ${username},
   ${password},
   false
)
returning email, username, user_id, is_admin;