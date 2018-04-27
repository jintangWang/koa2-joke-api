# koa2写的api

>我的数据是从聚合网来的，由于免费会员有 100次/天 的限额，所以我决定把数据存到自己的数据库，写个接口用于自己的应用。

需要的环境:

- node7以上，因为我用了es6
- mysql   
  目前需要手动建库和表，后面优化

``` bash
git clone https://github.com/jintangWang/koa2-joke-api.git

cd koa2-joke-api

npm install

npm run loadData #初始化数据

npm run dev # 访问http://localhost:3000
```
即可访问接口了，比如：
访问 http://localhost:3000/jokeImg 即可看到数据