# Next_CICDCD


## Deploy localy
Install dependencies and build the app for production
```
npm install
npm run build
```

If you want to start the project localy
```
npm run start
```

## Deploy with Docker

Install dependencies and build the app for production
```
npm install
npm run build
```

Build the image and run as container
```
docker build -t next_cicdcd .
docker run --name next_cicdcd_container -p 3000:3000 next_cicdcd
```

## Deploy with Jenkins

If not already done start an instance of jenkins_master
```
docker run --name jenkins -p <choose_a_port>:8080 jenkins/jenkins
```

Then build and start an instance of a jenkins_agent
If your are on Windows, execute this command in Powershell or cmd
```
cd Jenkins-agent
docker build -t jenkins-agent-with-docker-and-node .
```

To get the Jenkins master IP adress
```
docker inspect jenkins
```

Link the jenkins agent
```
docker run --init --name jenkins_agent_node -v /var/run/docker.sock:/var/run/docker.sock jenkins-agent-with-docker-and-node -url http://<Jenkins_master_IP_adress>:8080 <secret> <agent_name>
```

Want to try the entire CICD on your own repository and registry ?