CREATE DATABASE lab_inventory_tracker;

-- users table 
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL
);

-- chemicals table
create table chemicals(
  chem_id SERIAL PRIMARY KEY,
  user_id SERIAL,
  chem_name VARCHAR(255),
  molar_mass VARCHAR(255),
  current_amt VARCHAR(255),
  units VARCHAR(255),
  chem_loc VARCHAR(255),
  vendor_name VARCHAR(255),
  cat_num VARCHAR(255),
  cas_num VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO chemicals (user_id, chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num) values ('1', 'ehtanol', '123', '50', 'g', 'fridge', 'sigma', '1345', '12-123-1234');
