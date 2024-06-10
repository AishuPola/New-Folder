
TASK-1
Find the title of each film ✓
```sql
SELECT Title FROM movies;
```
Find the director of each film 
```sql
SELECT director FROM movies;
```
Find the title and director of each film 
```sql
SELECT Title,director FROM movies;
```

Find the title and year of each film
```sql
SELECT  title, year FROM movies;
```

Find all the information about each film
```sql 
SELECT * from Movies;
```
![alt text](image-9.png)  

## TASK-2:
Find the movie with a row id of 6 ✓
```sql
SELECT title FROM movies where id=6;

```
Find the movies released in the years between 2000 and 2010  
```sql 
select title from movies where year >2000 and year <=2010
```
Find the movies not released in the years between 2000 and 2010  
```sql 
select title from movies where year not between 2000 and 2010
```
Find the first 5 Pixar movies and their release year
```sql

select title,year from movies where id between 1 and 5
```
![](image-11.png)  

# task 3:
Find all the Toy Story movies
```sql
SELECT title from movies where  title like "%toy story%"
```
Find all the movies directed by John Lasseter 
```sql
select title from movies where director="John Lasseter";
```

Find all the movies (and director) not directed by John Lasseter  

```sql 
select title,director from movies where director not like "John Lasseter";
```
Find all the WALL-* movies
```sql
select title from movies where title like "%wall%"
```
![alt text](image-12.png)   

# task-4  
List all directors of Pixar movies (alphabetically), without duplicates
```sql
SELECT distinct director from movies order by director asc;
```
List the last four Pixar movies released (ordered from most recent to least)

```sql 
SELECT  title from movies order by year desc limit 4
```
List the first five Pixar movies sorted alphabetically

``` sql 
SELECT  title from movies order by title asc limit 5
```
List the next five Pixar movies sorted alphabetically 
```sql 
SELECT  title from movies order by title asc limit 5 offset 5
```
![alt text](image-13.png) 

## task-5

List all the Canadian cities and their populations ✓
```sql
select city,population from North_american_cities where country="Canada";

```
Order all the cities in the United States by their latitude from north to south  
```sql
select city from North_american_cities where country="United States" order by latitude desc;
```

List all the cities west of Chicago, ordered from west to east  
```sql
select city from North_american_cities where longitude< -87.629798 order by longitude ;
```
List the two largest cities in Mexico (by population) 

```sql

select city from  North_american_cities where country="Mexico" order by population  desc limit 2;
```
List the third and fourth largest cities (by population) in the United States and their population
```sql
select city,population from  North_american_cities where country="United States" order by population desc  limit 2 offset 2;
```  
![alt text](image-14.png)