drop table if exists account CASCADE;

DROP TABLE if exists account_author_group_follow CASCADE;

DROP TABLE if exists account_author_group_member CASCADE;

DROP TABLE if exists account_book_follow CASCADE;

DROP TABLE if exists account_chapter_follow CASCADE;

DROP TABLE if exists account_genre_follow CASCADE;

DROP TABLE if exists author_group CASCADE;

DROP TABLE if exists book CASCADE;

DROP TABLE if exists book_comment CASCADE;

DROP TABLE if exists chapter CASCADE;

DROP TABLE if exists chapter_comment CASCADE;

DROP TABLE if exists genre CASCADE;

DROP TABLE if exists genre_comment CASCADE;

DROP TABLE if exists user_role CASCADE;

create table user_role (
	user_role_id UUID primary key,
	name varchar(6) not null
);
insert into user_role Values ('2e6f32c1-43b0-49df-8181-52ad541cd23f', 'Admin');
insert into user_role Values ('f45e6a3a-1726-4527-8c4c-f4913f291e37', 'User');

create table language (
	language_id  integer not null primary key,
	language_name varchar(100) not null
);

insert into language Values (1,'English');
insert into language Values (2,'Chinese');
insert into language Values (3,'Hindi');
insert into language Values (4,'Spanish');
insert into language Values (5,'French');
insert into language Values (6,'Arabic');

create table account (
	account_id UUID DEFAULT gen_random_uuid() primary key,
    account_name varchar(50),
	email varchar(50) unique not null,
	account_password varchar(60) not null,
	account_language integer DEFAULT 1 not null references language(language_id),
	password_changed_at timestamp,
	user_role_id UUID DEFAULT 'f45e6a3a-1726-4527-8c4c-f4913f291e37' not null references user_role(user_role_id)
);

create table author_group (
	author_group_id UUID DEFAULT gen_random_uuid() primary key,
    author_group_name varchar(50),
	author_group_rating numeric(3,2),
	author_group_image_url varchar(100)
);

create table account_author_group_member (
	account_id UUID references account(account_id) on delete cascade,
	author_group_id UUID references author_group(author_group_id) on delete cascade,
	primary key(
		account_id,
		author_group_id
	)
);

create table genre (
	genre_id UUID DEFAULT gen_random_uuid() primary key,
	genre_name varchar(50) not null,
	genre_image_url varchar(100),
	created_on timestamp DEFAULT CURRENT_TIMESTAMP not null,
	genre_rating numeric(3,2)
);

create table book (
	book_id UUID DEFAULT gen_random_uuid() primary key,
	book_name varchar(50) not null,
	author_group_id UUID not null references author_group(author_group_id) on delete cascade,
	summary_text varchar(200),
	original_book_id UUID,
	book_image_url varchar(100),
	is_copiable boolean DEFAULT FALSE not null,
	is_published boolean DEFAULT FALSE not null,
	is_flagged_inappropriate boolean DEFAULT FALSE not null,
	created_on timestamp DEFAULT CURRENT_TIMESTAMP not null,
	rating numeric(3,2) DEFAULT 0,
	rating_count integer DEFAULT 0
);

create table book_genre (
	book_id UUID not null references book(book_id) on delete cascade,
	genre_id UUID not null references genre(genre_id) on delete cascade,
	primary key(
		book_id,
		genre_id
	)
);

alter table book add constraint book_original_book_fk foreign key(original_book_id) references book(book_id) on delete set null;

create table chapter ( 
	chapter_id UUID DEFAULT gen_random_uuid() primary key,
	chapter_sequence integer not null,
	chapter_content text not null,
	chapter_rating numeric(3,2),
	chapter_image_url varchar(100),
	created_on timestamp not null,
	book_id UUID not null references book(book_id) on delete cascade
);

-- Comment System
create table genre_comment (
	genre_comment_id UUID primary key,
	genre_comment_text varchar(255) not null,
	genre_id UUID not null references genre(genre_id) on delete cascade,
	account_id UUID not null references account(account_id) on delete cascade
);

create table chapter_comment (
	chapter_comment_id UUID primary key,
	chapter_comment_text varchar(255) not null,
	chapter_id UUID not null references chapter(chapter_id) on delete cascade,
	account_id UUID not null references account(account_id) on delete cascade
);

create table book_comment (
	book_comment_id UUID DEFAULT gen_random_uuid() primary key,
	book_comment_text varchar(255) not null,
	book_rating integer not null,
	book_id UUID not null references book(book_id) on delete cascade,
	account_id UUID not null references account(account_id) on delete cascade
);


-- Following system
create table account_author_group_follow (
	account_id UUID references account(account_id) on delete cascade,
	author_group_id UUID references author_group(author_group_id) on delete cascade,
	primary key(
		account_id,
		author_group_id
	)
);

create table account_genre_follow (
	account_id UUID references account(account_id) on delete cascade,
	genre_id UUID references genre(genre_id) on delete cascade,
	last_followed_on timestamp DEFAULT CURRENT_TIMESTAMP not null, -- New field to track when a genre was last followed
	primary key(
		account_id,
		genre_id
	)
);

create table account_book_follow (
	account_id UUID references account(account_id) on delete cascade,
	book_id UUID references book(book_id) on delete cascade,
	primary key(
		account_id, 
		book_id
	)
);

create table account_chapter_follow (
	account_id UUID references account(account_id) on delete cascade,
	chapter_id UUID references chapter(chapter_id) on delete cascade,
	primary key(
		account_id, 
		chapter_id
	)
);



commit;