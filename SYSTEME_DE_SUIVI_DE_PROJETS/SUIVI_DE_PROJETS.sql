CREATE TABLE employee (
  employee_id serial PRIMARY KEY,
  nom VARCHAR (50) NOT NULL,
  prenom VARCHAR (50) NOT NULL,
  telephone VARCHAR (50) NOT NULL,
  created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP
);
CREATE TABLE roles(
  role_id serial PRIMARY KEY,
  employee_id INT NOT NULL,
  username VARCHAR (50) UNIQUE NOT NULL,
  password VARCHAR (50) NOT NULL,
  email VARCHAR (255) UNIQUE NOT NULL,
  role_name VARCHAR (255) UNIQUE NOT NULL,
  FOREIGN KEY (employee_id) REFERENCES employee (employee_id)
);
CREATE TABLE organisme(
  organisme_id serial PRIMARY KEY,
  nom VARCHAR (50) NOT NULL,
  adresse VARCHAR (500) NOT NULL,
  telephone VARCHAR (50) NOT NULL,
  nom_contrat VARCHAR (500) UNIQUE NOT NULL,
  email_contrat VARCHAR (255) UNIQUE NOT NULL,
  adresse_contrat VARCHAR (255) UNIQUE NOT NULL
);
CREATE TABLE projet(
  projet_id serial PRIMARY KEY,
  organisme_id int,
  nom VARCHAR (50) NOT NULL,
  adresse TEXT NOT NULL,
  telephone VARCHAR (50) NOT NULL,
  date_debut DATE NOT NULL,
  date_fin DATE NOT NULL,
  montant real NOT NULL,
  FOREIGN KEY (organisme_id) REFERENCES organisme (organisme_id)
);
CREATE TABLE phase(
  phase_id serial PRIMARY KEY,
  projet_id int,
  prc_du_montant real NOT NULL,
  etat_facturation bool NOT NULL,
  etat_realisation bool NOT NULL,
  etat_paiement bool NOT NULL,
  FOREIGN KEY (projet_id) REFERENCES projet (projet_id)
);
CREATE TABLE livrable(
  livrable_id serial PRIMARY KEY,
  phase_id int,
  libelle real NOT NULL,
  description bool NOT NULL,
  link VARCHAR (255) NOT NULL,
  FOREIGN KEY (phase_id) REFERENCES phase(phase_id)
);
CREATE TABLE document(
  document_id serial PRIMARY KEY,
  projet_id int,
  link VARCHAR (255) NOT NULL,
  FOREIGN KEY (projet_id) REFERENCES projet(projet_id)
);
CREATE TABLE phase_details (
  employee_id INT NOT NULL,
  phase_id INT NOT NULL,
  date DATE NOT NULL,
  created_on TIMESTAMP NOT NULL,
  note TEXT NOT NULL,
  PRIMARY KEY (employee_id, phase_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
  FOREIGN KEY (phase_id) REFERENCES phase(phase_id)
);