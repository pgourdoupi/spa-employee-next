-- Drop table

-- DROP TABLE public.employee;

CREATE TABLE public.employee (
	id bigserial NOT NULL,
	last_name varchar(50) NOT NULL,
	first_name varchar(50) NOT NULL,
	is_active bool NOT NULL,
	date_of_birth date NOT NULL,
	CONSTRAINT employee_pkey PRIMARY KEY (id)
);
