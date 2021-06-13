## Node概念

### Node的作用

> 1、`node`是一个`runtime`，可以让JS运行在服务器，让后端也可以解析JS语法，非常适合做前端工具链
> 2、`node`新增了`http`、`fs`、`util`等方法库
> 3、`node`可以做中间层用来解决后端跨域问题，`前端事件格式化`

### Node特点

> 1、主线程是单线程（处理**高并发**）
>
> + 多线程：每来一个请求，就分配一个*线程*来处理，有*线程池*、`线程复用`的概念，但是每次创建线程会占用内存
>   + 优点：多线程可以*充分利用多核CPU*，可以处理复杂的*CPU密集型任务*
>   + 缺点：不能处理高并发，多线程在请求同一个资源需要*上锁*，而且会*频繁切换时间片*
> + 单线程：但是`node`可以支持多进程，可以开N个子进程
>   + 优点：因为大部分任务都是*文件读写*，可以处理复杂的*I/O密集型任务*
>   + 缺点：不适合做*CPU密集型任务*
>
> 2、非阻塞（调用者调用API后当前的状态）
>
> + **阻塞还是非阻塞**：取决于**调用方**需不需要*等待***被调用方**的*结果*
>
> 3、异步I/O（当前这个方法调用完之后不会立刻返回结果）
>
> + **同步还是异步**：取决于**被调用方**是*立即回复*还是*延期回复*
>
> **最常见的是`同步阻塞`以及`异步非阻塞`，Node中只可以实现这两种**
>
> 4、事件驱动（发布订阅模式）



## Node全局对象

> + `this`不是`global`
>
> + `require`、`module`、`exports`、`__filename`、`__dirname`都不是global上的属性，但是可以直接被访问
> + `process`
>   + `process.platform`：操作系统平台（`darwin / win32`）
>   + `process.cpuUsage`：CPU使用率
>   + `process.memoryUsage`：Memory使用率
>   + `process.kill`：杀死进程
>   + `process.exit`：退出进程`process.exit(1)`
>   + `process.nextTick`：微任务，**当前执行栈的底部**，优先级比`promise`要高
>   + `process.stdout`：
>   + `process.stdin`：
>   + `process.stderror`：
>   + `process.cwd`：
>   + `process.env`：所在环境
>   + `process.abort`：终端
>   + `process.argv`：所带参数

