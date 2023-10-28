CREATE DATABASE lab_inventory_tracker;

-- users table 
CREATE TABLE users(
  user_id serial primary key,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL
);

-- chemicals table
create table chemicals(
  chem_id serial primary key,
  user_id serial,
  chem_name varchar(255),
  molar_mass varchar(255),
  amount varchar(255),
  chem_loc varchar(255),
  vendor_name varchar(255),
  cat_num varchar(255),
  cas_num varchar(255),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
