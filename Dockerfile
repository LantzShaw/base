# docker images: 查看所有镜像
# docker image rm:  镜像名(包括版本号，不写默认是latest)或者ID

# docker build -t 镜像名(自定义):v1(版本号, 不写默认是latest) .(表示当前文件下的Dockerfile)
# docker build -t litecase/image:v1 .


# docker ps: 查看所有容器
# docker rm:  容器名或者容器ID
# docker run -dp 8080:80 --name 容器名(自定义) 镜像(已经构建好的镜像)

FROM alpine/git

RUN echo "hello world"
