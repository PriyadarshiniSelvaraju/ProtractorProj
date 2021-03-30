STEPS TO RUN :

## Setup Instructions to run Protractor UI Tests using Chrome

## Download and install nvm & node
```	
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm install 8.11.3
or (for latest version)
nvm install node 

```	
OR 
## Download and install node manually
```	
### Download & install Node  https://nodejs.org/en/download/  (install Node v8.11.3)
```

## Install NPM and node modules 
```		
npm install

## Clone the repository
```	
git clone "https://github.com/PriyadarshiniSelvaraju/ProtractorProj.git"
cd ProtractorProj
```	


## Updating latest version of Chrome Driver 
Locate ./package.json file
Update "chromedriver:" version to your chrome version 
Note: You will see the following error if the driver version mismatches
"This version of ChromeDriver only supports Chrome version"
```	
"dependencies": {
	"chromedriver": "^83.0",
	"grunt-cli": "^1.2.0"
}```

## Run the Test Suite
```
Run npm run webdriver-start to start the selenium server
Command to start the test:  npm run start
