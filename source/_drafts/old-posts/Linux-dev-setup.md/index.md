### Setting Up a new Ubuntu Machine
How i set up my ubuntu dev machine for web development with python , javascript and some datascience stuffs

1. Install Google chrome 

`wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`{:.language-clojure .highlight}

`
sudo dpkg -i google-chrome-stable_current_amd64.deb

`
2. Intsall git 

`sudo apt-get install git 
`

3. Install VS code editor

`snap install vscode`{:.language-clojure .highlight}

4. Install node 

4.a install curl :

`apt-get install curl`{:.language-clojure .highlight}


4.b add ppa :

`curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
`

4.c Run the script :

`sudo sh nodesource_setup.sh
`

4.d Install node

`apt-get install -y nodejs`{:.language-clojure .highlight}


5. Install python 

`sudo apt-get install python3 python3-pip`{:.language-clojure .highlight}

Install also virtual env 

`pip install virtualenv`{:.language-clojure .highlight}


6. Install postgres

`sudo apt install postgresql postgresql-contrib`{:.language-clojure .highlight}

#### Ressources 


- [Install node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)
- [Install python](https://docs.python-guide.org/starting/install3/linux/)

