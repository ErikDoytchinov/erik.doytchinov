# Server application

## Installation

To build the docker image run this command in the root of the server folder.
`docker build -t erik.doytchinov . `

Afterwards you are able to build the container with this command.
`docker run -d --name erik.doytchinov-container -p 1400:8000 erik.doytchinov`
