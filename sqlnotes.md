# what is database?
special software to store data.   
 
<b>ram is 10,000 faster than hard-disk.(hdd)</b>  
ram is temporary (fast)   
hdd:permanent.(slow)  
 ssd is min 10 times faster than hdd.  

 ## why database?  
automatically, if we query again and again ,it will store the data in RAM.
![alt text](image-8.png)
bottle neck---which is limiting, (it is not ram). 
    
1. requently asked data, it will store it in ram. 
2. querying become easier. 
3. Crud-easy  
4. backups are inbuilt.  
5. undo-easily(time limit)(keep on undo ing, )
6. performance




can i keep twitter db in a laptop?  
300million people.   
is storage a problem?
No  
it cant handle somany requests, so we dont keep in our laptop.  


 ## where does database live?
   - cloud  .

## what is cloud?   

-- renting pc's   

cloud provider----aws,azure,gcp(google cloud pslatform),ibm cloud,alibaba cloud,salesforce. 
aws--- ahead because they started 1st.  (33% ahead)
netflix is the customer of aws.   

next microsoft azure..... 
its hard to move from one cloud to another. 
because data migration is difficult. 



## best cloud storage providers--  

 
 - they are part of cloud.  
 google drive  
 pcloud 
 dropbox      

##  if ur buying: 
 - initial cost is more or high  
 - rent room 
 - a/c
 - power bill
 - maintenance  
 - spares should be there.  
 - generator  
 ## if ur renting:(server is online all the time)
 Disaster management:   
 1. flood,earthquake, occurs choose a place where all these dont happen which is not prone to disaster.
 2. fire occurs, then backup.  
 
 ## how do u rent pc? 
 ![alt text](<Screenshot 2024-06-10 125217-1.png>)  


1. choosing 
2. installing os-  
   what os in cloud?
    - linux is in cloud
the most used os is linux.  
-  what is the problem with windows:---> we hve to pay license   

# advantage of linux
1. free  
2. open source(linux is used my manyyyyy people like google,amazon etccc so if any bug is found then it can be modified by any developer coz their company system will be crashed .so they will develop / correct the bug.)  
3. secure(everybody fixex bu if any vulneralbility comes)
4. small footprint(pay as u go, lesser storage,less ram---> less money)
5. automation(every thing can be done using cmd, it can done easily )


linux has flavors like fedora,tails;windows has versions
- distros or distribution:we are using alpine  

 # # scaling:
-  increasing the no.of customers.   
scenario: when there is so much load on page:  

-  vertical scaling:increase ram or proccesor thus making system powerful.     

- people can add 256gb of ram   
horizontal scaling: keep on adding more pc's.  

![alt text](image-3.png)    

which ever is cheaper that is used. 

# auto-scaling:

![alt text](image-5.png):
it is upscaling and downscaling.  

# how DDoS attack work?
attack from multiple computers and fake traffic can be solved by:
 
![alt text](<MicrosoftTeams-image (3).png>)

![alt text](image-6.png)  
if malicious traffic is there , then it is sent to dummy site. 

  ## SQL VS NOSQL  
  SQL:  
  It is stored in the form of tables. 
  pl/sql, mysql.


  NOSQL:
  it is stored in the form of documents
  mangoDB,couchDB, Redis,cassandra(netflix used it)