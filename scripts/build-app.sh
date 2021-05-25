#!/bin/bash

#clear  build    directory
cd /home/ubuntu/badlav-app/badlav-client
sudo rm -rf build
sudo mkdir build

#client (Generates a new `build` directory)
cd /home/ubuntu/badlav-app/badlav-client
sudo sh set-prod-env-aws.sh
sudo rm -rf node_modules
sudo npm i
sudo npm run build

#server
cd /home/ubuntu/badlav-app/badlav-server
sudo sh set-prod-env.sh

#back to root
cd /home/ubuntu