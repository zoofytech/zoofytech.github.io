---
layout: table
title: docker
---
# Docker
This page will go over the basics of docker.

## What is docker?
Docker is a platform that allows you to develop, ship, and run applications in containers. Containers are lightweight, portable, and self-sufficient units that package an application along with its dependencies, libraries, and configuration settings. This enables consistent and reliable deployment across different environments, from development to testing and production.

## Key concepts and components
Below we will go over some of the key concepts and components for docker. We will go over into more details of each in later sections.

1. **Containers** 
Containers are isolated environments that encapsulate an application and its dependencies. They are more lightweight than a virtual machine(VM) since they share the hosts OS's kernel, but they still provide a level of isolation. Containers ensure that applications run the same way across different environments, which reduces the "Well, it works on my machine" problem.
2. **Images**
An image is a read-only template that contains everything needed to run an application. It includes the application's code, runtime, libraries and settings. Images are used to create containers. The best practice is to build images using a `Dockerfile`, which is a script-like configuration file that defines the steps to create the image.
3. **Dockerfile**
 A Dockerfile is a plain text file that contains a series of instructions for building a Docker image. These instructions specify the base image, copy files, install packages, set environment variables, and more. Dockerfiles provide a way to automate the image creation process.
 4. **Registry**
A Docker registry is a repository for Docker images. The most commonly used public registry is `Docker Hub`, where you can find and share images. Organizations often set up private registries to store and manage their proprietary images.
5. **Containerization**
Containerization is the process of packaging an application and its dependencies into a container. This encapsulation ensures that the application runs consistently regardless of the underlying environment.
6. **Docker Engine**
Docker Engine is the core component of Docker that manages containers. It consists of a server that listens for Docker API requests and a command-line interface (CLI) for interacting with Docker.


## Installing
To install docker head over to https://docs.docker.com/get-docker/ there will be specific guides for each OS. If you are installing on Linux, docker desktop is not necessary and you only need to install docker engine: https://docs.docker.com/engine/install/

## Containers

### Containers vs Virtual Machines
As explained earlier, containers are more lightweight than virtual machines. Take the following image as an example

![dockervsvm](cvsvm.png)

We can see from the above example that Virtual Machines require another operating system. 

### Running a container
Let's run a simple nginx container.
Run the following on a terminal:
`docker run -d -p 8080:80 nginx`

Now if you open up a browser and go to `localhost:8080` the default nginx page will open.
You can also run `curl localhost:8080` to view it in terminal.


1. `docker run` runs processes in isolated containers. 
**Syntax**
`docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]`

    **Available Options**

    1. **Foreground** 
    By default if detached option is not specified the container will run in foreground mode. In foreground mode, the container can be attached to standard input, output and standard error and this can be configured. 
    ```
    -a=[]           : Attach to `STDIN`, `STDOUT` and/or `STDERR`
    -t              : Allocate a pseudo-tty
   --sig-proxy=true: Proxy all received signals to the process (non-TTY mode only)
   -i              : Keep STDIN open even if not attached
    ```
    If `-a` is not specified, then docker will attach be attached to stdout and stderr. 
    
    `docker run -a stdin -a stdout -it ubuntu /bin/bash`
    The above example will run an ubuntu container in interactive shell mode with stdin and stdout
    2. **Detached** 
    `-d` when starting a container you must decide weather you want to start in detached mode or foreground mode. Containers started in detached mode exit when the root process used to run the container exists, unless you also specify the `--rm` option. If you use `-d` along with `--rm`, the container is removed when it exists or when the daemon exists, whichever happens first. 
    `docker run -d -p 8080:80 nginx`
    The above example will run nginx in detached mode
    3. **Name** 
    The operator can identify a container in 3 ways: UUID long id , UUID short id, or Name. The `--name` option allows you to specify a string name making it easier for you to identify a container. 
    `docker run --name mynginx -d -p 80:8080 nginx` 
    4. **image** 
    You can specify a version of an image you'd like by running `image:tag` so for example `docker run nginx:1.0.1` 
    5. **Process ID**
    By default, all containers have the PID namespace enabled. PID namespace provides separation of processes. The PID Namespace removes the view of the system processes, and allows process ids to be reused. You can even use pid 1.

    **Syntax:**
    ```
    --pid=""  : Set the PID (Process) Namespace mode for the container,
             'container:<name|id>': joins another container's PID namespace
             'host': use the host's PID namespace inside the container
    ```
    In some cases you may want your container to share the host's process namespace, basically allowing the processes within the container to see all the processes on the system. 
    ```
    # Run a Docker container with PID namespace sharing
    docker run --rm -it --name pid-sharing --pid=host busybox

    # Inside the container, install htop
    # You might need to adjust the package manager based on the container's base image
    apk add htop

    # Run htop to monitor host system processes from within the container
    htop

    ```
    The above example, you run the container with the `--pid host` option which shares the same host's PID namespace with the container. This allows the processes within the container to see and interact with the processes on the host system. Byh installing and running `htop` inside the container, you can monitor the host system's processes in real-time.
    6. **Network Settings**
    By default, all containers have networking enabled and they can make any outgoing connections. The operator can completely disable networking with `docker run -network none` which disables all incoming and outgoing networking. In cases like this, you would perform I/O through files or `STDIN` and `STDOUT` only. 
    Publishing ports and linking to other containers only work with the default network(bridge). THe linking feature is a legacy feature. YOu should always prefer using Docker network drivers over linking.
    **Syntax**
    ```
    --dns=[]           : Set custom dns servers for the container
    --network="bridge" : Connect a container to a network
                        'bridge': create a network stack on the default Docker bridge
                        'none': no networking
                        'container:<name|id>': reuse another container's network stack
                        'host': use the Docker host network stack
                        '<network-name>|<network-id>': connect to a user-defined network
    --network-alias=[] : Add network-scoped alias for the container
    --add-host=""      : Add a line to /etc/hosts (host:IP)
    --mac-address=""   : Sets the container's Ethernet device's MAC address
    --ip=""            : Sets the container's Ethernet device's IPv4 address
    --ip6=""           : Sets the container's Ethernet device's IPv6 address
    --link-local-ip=[] : Sets one or more container's Ethernet device's link local IPv4/IPv6 addresses
    ```
    Your container will always use the same DNS servers as the host by default, but oyu can override this by using `--dns`

    By default, the MAC address is generated using the IP address allocated to the container.  You can set the container’s MAC address explicitly by providing a MAC address via the `--mac-address` parameter `(format:12:34:56:78:9a:bc)`.

    **Supported networks**
    |Network| 	Description|
    | ----------- | ----------- |
    |none |	No networking in the container.|
    |bridge (default) |	Connect the container to the bridge via veth interfaces.|
    |host| 	Use the host's network stack inside the container.|
    |container:[name\|id] |	Use the network stack of another container, specified via its name or id.|
    |NETWORK 	| Connects the container to a user created network (using docker network create command)|
    **none**
    With the network is `none` a container will not have any access to external routes. 
    **bridge**
    With bridge the container will use docker's default networking setup. A brdige is setup on the host, commonly `docker0` and a pair of `veth` interfaces will be created for the container. 
    An IP address will be allocated for containers on the bridge's network and traffic will be routed through this bridge to the container. Containers can communicate via their IP addresses by default. 
    **host**
    When `host` is used the network will share the host's network stack and all interfaces form the host will be available to the container. The hostname of the container will be the same as the host's hostname. 
    **container**
    Using `container` a container will share the network stack of another container. The other container's name must be provided in the format of `--network container: <name|id>`. 
    **User-defined network**
    You can create a network using a Docker network driver or an external network driver plugin. You can connect multiple containers to the same network. Once connected to a user-defined network, the containers can communicate easily using only another container’s IP address or name.

    For `overlay` networks or custom plugins that support multi-host connectivity, containers connected to the same multi-host network but launched from different Engines can also communicate in this way.
    7. **Restart policies**
    The `--restart` flag allows you to specify a restart policy for how a container should or shouldn't be restarted on exit.
    The following policies are allowed:
    **no**
    Do not automatically restart container when exits. This is the default option.
    **on-failure:maxretries**
    Restart only if the container exits with a non-zero exit status. Optionally, limit the number of restart retries.
    **always**
    Always restart the container regardless of exit status. 
    **unless-stopped**
    Always restart the container regardless of the exit status except if the container was put into a stopped state before the Docker daemon was stopped.
    8. **Clean  up**
    By default a container's file system persists even after the container exits. You can automatically clean up the container and remove the file system when the container exists using the `--rm` flag.
    `docker run -rm busybox`
    9. **Kernel memory and user memory**
    You can set the user memory using the `-m` flag along with the amount
    `docker run -it -m 500M ubuntu  /bin/bash`
    You can also set the kernel memory using the flag `--kernel-memory` along with the amount.
    `docker run -it -m 500M --kernel-memory 50M ubtunu`
    10. **CMD**
    You can run docker with a command using a command. `docker run ubuntu echo "Hello world"`
    11. **ENTRYPOINT**
    The `--entrypoint=` option is similar to the CMD option because it specifies what to run when the container starts but it is more difficult to override. 
    ```
    docker run -it --entrypoint /bin/bash example/redis -c ls -l
    ```
    The above example runs the entrypoint to `/bin/bash` on the image `example/redit` with the command `ls -l`
    11.  **EXPOSE**
    The following are options for container networking for incoming ports:
    ```
    --expose=[]: Expose a port or a range of ports inside the container.
             These are additional to those exposed by the `EXPOSE` instruction
    -P         : Publish all exposed ports to the host interfaces
    -p=[]      : Publish a container's port or a range of ports to the host
               format: ip:hostPort:containerPort | ip::containerPort | hostPort:containerPort | containerPort
               Both hostPort and containerPort can be specified as a
               range of ports. When specifying ranges for both, the
               number of container ports in the range must match the
               number of host ports in the range, for example:
                   -p 1234-1236:1234-1236/tcp

               When specifying a range for hostPort only, the
               containerPort must not be a range.  In this case the
               container port is published somewhere within the
               specified hostPort range. (e.g., `-p 1234-1236:1234/tcp`)

               (use 'docker port' to see the actual mapping)

    --link=""  : Add link to another container (<name or id>:alias or <name or id>)
    ```
    `docker run --expose=3030 -name mycontainer mycontainer`
    The above example exposes port 3030 for mycontainer
    12. **ENV**
    You can set more environment variables using the `-e` flag. 
    `docker run -e "hello=world" alpine env`
    The above example runs the apline container with the environment variable `hello=world` and shows all of the containers variables using the `env` command.
    13. **Volumes**
    The volume option allow you to mount filesystem volumes to the container. 
    **Syntax**
    ```
    -v, --volume=[host-src:]container-dest[:<options>]: Bind mount a volume.
    The comma-delimited `options` are [rw|ro], [z|Z],
    [[r]shared|[r]slave|[r]private], and [nocopy].
    The 'host-src' is an absolute path or a name value.

    If neither 'rw' or 'ro' is specified then the volume is mounted in
    read-write mode.

    The `nocopy` mode is used to disable automatically copying the requested volume
    path in the container to the volume storage location.
    For named volumes, `copy` is the default mode. Copy modes are not supported
    for bind-mounted volumes.

    --volumes-from="": Mount all volumes from the given container(s)
    ```
    `docker run -v /path/on/host:/path/in/container:ro -it ubuntu`
    The above example will bind a volume `/path/on/host` to `/pth/in/container` with the read-only option on the `ubuntu` container.
    13. **USER**
    You can create additional users using the `-u ` or `--user` option.
    **Syntax**
    ```
    -u="", --user="": Sets the username or UID used and optionally the groupname or GID for the specified command.

    The followings examples are all valid:
    --user=[ user | user:group | uid | uid:gid | user:gid | uid:group ]
    ```
    By default, user `0` is `root` on the container. 
    `docker run -u username:1000 -it ubuntu`
    The above example will create the user `username` with the group id number of `1000`
    14. **WORKDIR**
    The default working directory for containers is `/`. To change the default working directory you can use `--workdir` or `-w=` option.
    `docker run -w /hello/world -it ubuntu`
    The above example will run the container `ubuntu` with the working dir of `/hello/world`

### Docker images

#### docker commit

#### Docker build

#### Docker Pull
The `docker pull` command will allow you to pull images from a registry. We will talk about registries in a later section. 
**Syntax**
`docker pull [OPTIONS] NAME[:TAG|@DIGEST]`

**OPTIONS**
| Name                                         | Type     | Default | Description                                      |
|:---------------------------------------------|:---------|:--------|:-------------------------------------------------|
| [`-a`](#all-tags), [`--all-tags`](#all-tags) |          |         | Download all tagged images in the repository     |
| `--disable-content-trust`                    |          |         | Skip image verification                          |
| `--platform`                                 | `string` |         | Set platform if server is multi-platform capable |
| `-q`, `--quiet`                              |          |         | Suppress verbose output                          |

**Examples**
`docker pull ubuntu`
The above example will pull the latest ubuntu
`docker pull ubuntu:22.04`
The above example will pull ubuntu 22.04
`docker pull ubuntu@sha256:26c68657ccce2cb0a31b330cb0be2b5e108d467f641c62e13ab40cbec258c68d`
You can even pull by the digest as the above example shows.
#### Docker tag
A docker tag allows you to label specific versions of an image.  Tags are used to differentiate and manage different versions or variations of an image. Images are typically identified by a combination of their repository name and tag.

**Syntax**
`docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`
**Examples**
`docker tag myapp:latest myregistry/myapp:v1.0
`
The above example tags `myapp:latest` to a registry `myregistry` with a new tag of `1.0`
`docker tag 0e152351 myapp:1.0`
The above example tags the image id of `0e152351` using the default docker registry to `myapp:1.0`

#### Docker Push
THe `docker push` command allows you to push images into a registry
**Syntax**
`docker push [OPTIONS] NAME[:TAG]`

**Options**



### Docker Registry
 By default, docker uses docker hub - https://hub.docker.com/ as a registry to pull and push images. 
#### docker login
#### dock logout
 ### Archive containers
 #### Docker export
 #### Docker import

### Cleanup
#### docker kill
#### docker stop
#### docker rm
#### docker rmi

### Troubleshooting
#### docker ps
#### docker image history
#### docker info
#### docker events
#### docker top
#### docker inspect
#### docker status
#### docker search
#### docker exec
#### docker diff

### docker volume
#### create
#### rm
#### ls
#### update
#### inspect
#### prune

### Docker secrets
#### create
#### inspect
#### ls
#### rm

### Dockerfile