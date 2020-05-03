# Kong API Gateway - Implements Demo

![](https://dyltqmyl993wv.cloudfront.net/assets/stacks/kong/img/kong-stack-220x234.png)

In this project I demonstrate how to include an API Gateway using [Kong](https://konghq.com/kong/) to control incoming requests in a microservice architecture. The technologies used were: [Docker](https://www.docker.com/why-docker), [Docker Compose](https://docs.docker.com/compose/), Kong, [Konga](https://github.com/pantsel/konga), Elasticstack: [logstash](https://www.elastic.co/pt/logstash), [elasticsearch](https://www.elastic.co/pt/elasticsearch/), [kibana](https://www.elastic.co/pt/kibana). Two basic services written in NodeJS were used for demonstration.

---

#### Prerequisites

To make use of this project the only prerequisites are to have the [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

#### First Steps

To start, it is necessary that the containers configured in the [docker-compose.yml](https://github.com/paulohenriq/implements-api-gateway/blob/master/docker-compose.yml) file are standing. To do this, simply run the following command on your terminal:

`$ docker-compose up -d`

#### Checking if everything is fine

After performing the previous step you should check that all containers are in UP status. To do this, use the following command on your terminal:

`$ docker-compose ps`

---

### Accessing Kong through the Konga GUI

**Kong**: The worlds most popular open source API gateway. Built for multi-cloud and hybrid, optimized for microservices and distributed architectures.

**Konga**: Konga is a fully featured open source, multi-user GUI, that makes the hard task of managing multiple Kong installations a breeze.

To access the Konga interface open your browser and type in the address bar http://localhost:1337
