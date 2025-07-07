docker run -d \
  --name redis-primary \
  redis:7.2 \
  redis-server --appendonly yes --replica-announce-ip redis-primary

docker run -d \
  --name redis-replica-1 \
  --link redis-primary \
  redis:7.2 \
  redis-server --replicaof redis-primary 6379

docker run -d \
  --name redis-replica-2 \
  --link redis-primary \
  redis:7.2 \
  redis-server --replicaof redis-primary 6379

docker build -t thanhtutln2020/nodejs .

docker run -d \
  --name nodeapp \
  --link redis-primary \
  --link redis-replica-1 \
  --link redis-replica-2 \
  -p 3000:3000 \
  -v nodeapp-logs:/var/log/nodeapp \
  thanhtutln2020/nodejs

docker run -d \
  --name log-watcher \
  --volumes-from nodeapp \
  busybox \
  sh -c 'tail -f /var/log/nodeapp/app.log'


docker network create nodeapp-net

docker network connect nodeapp-net redis-primary
docker network connect nodeapp-net redis-replica-1
docker network connect nodeapp-net redis-replica-2
docker network connect nodeapp-net nodeapp
docker network connect nodeapp-net log-watcher

