

# list01

## Mysql使用自定义用户登录

1. 显示密码错误或者密码正确但是不接受你的密码和用户名

   1. 重新安装，安装选项授权用户权限，

   2. `mysql -u custom_user -p`

2. 显示Navicat连接显示不支持用户协议
   1. 将用户端更新或者mysql降级

##  jupyter使用

1. 使用python环境pip3(记得升级pip)命令安装
2. `jupyter nootbook`启动jupyter 默认在localhost:8888/tree

## VUE

<script>
        const app = new Vue({
            el: '#container',
            data: {
                gender: 0,
                age: 9
            }
        });
    </script>
``

<div class="container">
        <button @click="fn">+</button>
        <div>{{count}}</div>
    </div>
```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
<script>
    new Vue({
        el: '.container',
        data: {
            count: 10
        },
        methods: {
            fn() {
                this.count++;
            }
        }
    })
</script>
```

1. 使用this可以不定义vue的名字`const app=new Vue({...});`

2. `v-bind:src="src",v-bind:title="biaoqian"=>:src="src",:title="biaoqian"`
3. `v-for="(item,index) in list" => v-for="item in list"`
4. v-for中的key属性便于列表正确排序，唯一性，不推荐使用Index`:key="item.id"`
5. unshift将数据插入到数组的开头
6. 使用filter方法删除数据
7. v-model="name",实时变化
8. v-if="里面不能使用if等判断语句，可以直接username.length<1"



## Springboot

1. ![image-20230923170759606](C:\Users\赖译骏\AppData\Roaming\Typora\typora-user-images\image-20230923170759606.png)

2. 因为插件运行临时文件在c盘目录下，所以需要修改临时文件的位置，不然插件出错，具体看上面

   首先需要在.mvn里面新建jvm.config类，然后在里面重写路径

3. yml配置里面的环境配置需要注意，有些被弃用的没有错误提醒，最新版会报错误

4. test运行失败，有可能是测试文件出错，比如yml配置没有正确导入，这也不会报错

5. 找不到失败原因，可以先清理下temp缓存和看下maven配置仓库地址以及D:\javae\list1\target\surefire-reports下的文件

   看完后记得关闭，因为每次运行前都会进行删除文件

6. `

7. ```
   <dependency>
       <groupId>org.junit.platform</groupId>
       <artifactId>junit-platform-launcher</artifactId>
       <scope>test</scope>
   </dependency>
   ```

   `

   ```
   <dependency>
       <groupId>org.mockito</groupId>
       <artifactId>mockito-core</artifactId>
       <version>2.9.0</version> <!-- 使用与JDK 17兼容的版本 -->
       <scope>test</scope>
   </dependency>
   ```

   ```
   <dependency>
       <groupId>mysql</groupId>
       <artifactId>mysql-connector-java</artifactId>
       <version>8.0.27</version> <!-- 版本号根据实际情况进行更新 -->
   </dependency>
   ```

8. 解决junit5异常问题加上以上依赖，test通过就没问题

9. `

10. ```
    spring:
      datasource:
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://localhost:3306/world
        username: root
        password: root
    ```

11. `配置好数据库，dao接口类下需要@Mapper注解和写查询sql

12. `@Select("select * from city where id= #{id}")`

13. `driver-class-name: com.mysql.cj.jdbc.Driver`





# List2

## VUE

1. @click.stop组织冒泡，.prevent阻止跳转，trim删除前后空格，可以将数据格式转换

2. `:class({...:true})`增加样式`:style({width:10%})`:增加某个样式、

3. `v-model`控制表单数据，例如复选框需要`<input type="radio" name="gender" v-model="gender" value="1">男

      <input type="radio" name="gender" v-model="gender" value="2">女

4. computed:返回结果，methods:处理逻辑

5. computed:有缓存的，一旦计算出来就回立刻缓存->性能特别高

   method:重复运行

6. ![image-20230924134312604](C:\Users\赖译骏\AppData\Roaming\Typora\typora-user-images\image-20230924134312604.png)

7. watch监听器语法

          1. 简单语法："对象.属性名"(newValue,oldValue){}
          
          2. 完整写法：数据属性名：{deep:true//深度监听,immediate:true//是否立刻执行一次handler,handler(newValue){处理逻辑}}
          
          3. watch里面发送axios请求，需要使用异步请求async await 还有使用settimeout进行计时器，并且使用clearTimeout()进行取消
          
          4. 可以再watch里面获取到所有变化的值，然后存储到本地内存

8. 累加使用reduce函数，会自动遍历和加法，记得给sum一个初始值0 

9. computed里面需要获取到数值需要完整写法get()set(value)

10. every方法可以遍历数组然后进行判断，一个不匹配则返回false

11. checkbox属性的框使用v-model进行实时赋值

12. 通过判断list的长度显示v-for="list.length>0"v-else

13. 使用:class{属性：判断是否为true}动态的赋予样式来响应背景，class='pc active' =>class='pc' :class={actice:num<=0?true:false}



# List3

- [x] vueday3 half
- [x] springboot
- [ ] eng



## VUE

回顾

1. `:class="{active:true or false}"`
2.  `this.fruitList = this.fruitList.filter(item => item.id != id)`

 		// filter创建一个新的数组其中不包含指定id，将数字赋值给原来的数组

3. watch监听器，deep：深度监听，immediate:true：判断是否立即执行，handler(newValue){处理逻辑}

4. localStorage.setItem('list',JSON.stringify(newValue));:将数据存进本地

   JSON.parse(loaclStorage.getItem('list'));:将数据取出

5. A||B：表示，如果A为真的整个表达式都为真，如果A为假的话，就取决于B

day3

1. vue的生命周期，created mounted updated Destroyed
2. created用于初始化数据，mounted 用于渲染dom成功后
3. created可以将页面数据刷新，可将获取数据封装成方法进行调用，



# List4

- [x] Initialvue
- [ ] spring
- [ ] eng
- [ ] 

##  VUE

​		

### MyChart

```js
this.myChart.setOption({
            series: [
              {
                data: 
                  // { value: 1048, name: 'Search Engine' },
                  // { value: 735, name: 'Direct' },
                  // { value: 580, name: 'Email' },
                  // { value: 484, name: 'Union Ads' },
                  // { value: 300, name: 'Video Ads' }
                  this.list.map(item => ({ value: item.price, name: item.name }))
                ,
              }]
          })
```

使用myChart制作饼图，并进行数据渲染，***this.myChart***

1. 当数据显示后加载饼图，所以在mounted方法内创建myChart,使用this可以在不同方法体内使用myChart进行数据传输

   ```js
   this.myChart = echarts.init(document.querySelector('#main'));
           this.myChart.setOption({
             title: {
               text: '消费账单列表',
               subtext: 'Fake Data',
               left: 'center'
             },
             tooltip: {
               trigger: 'item'
             },
             legend: {
               orient: 'vertical',
               left: 'left'
             },
             series: [
               {
                 name: '消费账单',
                 type: 'pie',
                 radius: '50%',
                 data: [
                   // { value: 1048, name: 'Search Engine' },
                   // { value: 735, name: 'Direct' },
                   // { value: 580, name: 'Email' },
                   // { value: 484, name: 'Union Ads' },
                   // { value: 300, name: 'Video Ads' }
   
                 ],
                 emphasis: {
                   itemStyle: {
                     shadowBlur: 10,
                     shadowOffsetX: 0,
                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
                 }
               }
             ]
           })
         },
   ```

   

2. ```js
   const res = await axios.delete(
               `https://applet-base-api-t.itheima.net/bill/${id}`
   
             )
   ```

   delete请求需要使用`${id}`来获取id

3. ```js
   if (!this.name) {
              alert("请输入消费名称");
              return
            }
            if (typeof this.price !== 'number') {
              alert("请输入正确的消费价格");
              return
            }
   ```

   判断是否为空和类型是否为number

4. created需要放在最前面，否则不刷新

5. ```js
   <input v-model.trim="name" type="text" class="form-control" placeholder="消费名称" />
             <input v-model.number="price" type="text" class="form-control" placeholder="消费价格" />
   ```

   使用v-model的时候可以使用类似trim来对数据进行提前的处理

6. 更新vue到最新版本，需要把Node.js和npm升版本，然后直接更新vue，不需要卸载掉之前的代码

7. `vue ui`，命令可以在网页创建vue项目，`vue create my-project`可以直接创建项目到当前目录，时间都挺久的

   进入vue项目文件夹使用`npm run server`启动vue项目

8. Vue文件夹规则：

    node_modules：第三方包文件夹

    public：放html文件的地方

    ​	favicon.ico

    ​	index.html：index.html模板文件

    src：源代码目录

    ​	assets：静态资源目录：存放图片字体

    ​	components：组件目录：存放通用组件

    ​	App.vue：App根组件：项目运行看到的内容就在这里编写

    ​	main.js：入口文件：打包或运行，第一个执行的文件

    babel.config.js

    jsconfig.json：js配置文件

    package.json:项目配置文件：包含项目名，版本号，依赖包

    README.md

    vue.config.js：vue-cil配置文件

    yarn.lock：由yarn自动生成，锁定安装版本

    

9. ```vue
    new Vue({
    render:h=>h(App),
    }).$mount('#app')
    ```

    实例化Vue,将App.vue渲染到index.html容器中

    main.js加载了App.vue渲染了index.html


## Springboot

1. ```
   在Java应用程序中，通常采用分层架构来组织代码，以实现代码的清晰结构和易维护性。以下是常见的不同层次和组件的含义和作用：
   
   Controller（控制器）：
   
   作用： 控制器是应用程序的入口点，用于接收和处理来自客户端的HTTP请求。它负责路由请求到适当的处理程序（Service），然后将结果返回给客户端。
   示例： Spring MVC中的控制器用于处理Web请求。
   Service（服务）：
   
   作用： 服务层包含应用程序的业务逻辑。它负责处理数据和执行各种操作，将请求从控制器分派到DAO（数据访问对象）层，并处理事务。
   示例： 一个电子商务应用的服务层可能包含购物车管理、订单处理等功能。
   ServiceImpl（服务实现）：
   
   作用： 服务实现类是服务层的具体实现，包含业务逻辑的具体实现代码。
   示例： 如果你有一个UserService接口，那么UserService的实现类通常被命名为UserServiceImpl。
   DAO（数据访问对象）：
   
   作用： DAO层负责与数据库进行交互，执行CRUD（创建、读取、更新、删除）操作。它将数据库操作抽象为Java对象和方法。
   示例： 一个UserDAO可能包含与用户相关的数据库操作。
   Domain（领域对象或实体）：
   
   作用： 领域对象代表应用程序中的业务实体，通常映射到数据库表。它包含了实体的属性和方法。
   示例： 如果你的应用程序处理用户数据，User类可以是一个领域对象。
   Mapper（映射器）：
   
   作用： 在MyBatis等ORM（对象关系映射）框架中，Mapper用于定义SQL查询和数据库表之间的映射关系。
   示例： MyBatis的Mapper文件定义了SQL查询和结果集的映射规则。
   Config（配置文件）：
   
   作用： 配置文件包含应用程序的各种配置信息，如数据库连接信息、依赖注入配置、日志配置等。
   示例： Spring框架使用XML或注解配置来管理Bean和依赖。
   ```

2. ```java
   <mapper namespace="com.itheima.mapper.EmpMapper">
   <select id="list" resutlType="com.itheima.pojo.Emp">
   </select>
   </mapper>
   ```

   ```java
   @Mapper
   public interface EmpMapper(){
   public List<Emp> list (String name,Short gender...)
   }
   ```

   <img src="D:\md笔记\image-20231008210658042.png" alt="image-20231008210658042" style="zoom: 50%;" />

# List5

- [x] python

- [x] vue

- [ ] spring

- [ ] mybatis

- [ ] eng

  

## VUE

###  局部注册

1.  在components文件夹里面编写vue组件，注意名字要驼峰命名，可以使用快捷方法`<vue`,产生基础代码

2. 使用编写好的组件，在App.vue里面使用，需要先导入`import HmHeader from '.../.. .vue'`

   然后再`export default`里面使用组件名注册组件，` HmHeader:HmHeader`,

   最后在所需位置，直接使用<HmHeader></HmHeader>直接进行使用

### 全局注册

1.在main.js里面注册` import HmButton from "./components/HmButton.vue"Vue.component("HmButton",HmButton); `

 

# List6

- [x] python 
- [x] vue
- [ ] spring
- [ ] mybaits
- [ ] eng

## VUE

###  Scoped

1. 默认的样式会作用于全局，需要加上scoped属性
2. 原理：当前组件内标签被添加data-v-hash的值的属性

### Data

1. data是一个函数
2. 每次实例化都会执行一次，保证每个组件的独立性

### 组件通信

1. 组件独立性，需要数据传递，使用组件通信

#### 父子关系的组件

```js
data(){
return {
myTile:'黑马'
}	
}
```

##### 父传子

1. 给组件标签，`:title="myTile"`动态传值

2. 子组件使用`props:['title']`接收，直接`{{title}}`使用

3. `props:{m:Number}`判断是否为数字类型，用大括号

4. ```js
   props:{
       w:{
           type:类型,
       required:true,
       default:默认值,
       validator(value){
           return 是否通过校验
       				}
         }
       
   }
   ```

   

##### 子传父

1. 使用`$emit`向父组件发送消息通知`changeFn(){this.$emit('changeTile','发过去的消息')}`
2. 父组件监听son发来的消息，使用@事件名`@changeTitle="handleChange"`

​	

# List7

- [ ] vue

- [x] Thymeleaf

- [ ] spring

- [ ] eng

  

## VUE

1. 要处理谁的数据就到谁的组件中去处理

2. JSON.stringify(newValue)转换为json对象，JSON.parse()转换为js对象

   

   

### 非父子关系的组件

#### 扩展-event bus:

provide&inject:跨层级，provide 发出，inject接收

#### v-model的原理

1. 表单类组件封装-
   1. 拆解v-model=>:value=''childData "  @input="childData = $event"

   2. ![image-20231012213342064](D:\md笔记\image-20231012213342064.png)

      父组件使用v-model进行双向绑定，传给子组件value值，子组件获取value值，触发change发给父组件value

      父组件触发@input方法将数据改变
   
   3. 传递数据到父组件的时候,`this.$emit("input",e.target.value)`如果使用的是v-model传递数据，就使用input方法名
   
      

### 弹窗类属性

1..sync修饰符，`:visible.sync="isShow"`  `this.$emit('update:visible',false)`=>`visible="isShow" @update:visible="isShow=$event"`

### ref和$refs获取dom元素

1.`<BaseForm ref="baseForm"  this.$refs.baseForm.组件方法()`

​		2. `this.$nextTick(()=>{//业务逻辑 this.$refs.baseForm.forse()})` ``



## Spring

1. **Bean定义**：Bean的定义通常包括Bean的类型，ID，作用域，初始化方法，销毁方法等信息。Bean定义可以在XML配置文件、Java注解或Java代码中进行声明。
2. **Bean的作用域**：Spring支持多种Bean的作用域，包括singleton（单例，默认）、prototype（原型）、request（请求）、session（会话）等。不同作用域的Bean在容器中的生命周期和可见性是不同的。
3. **依赖注入**：Spring容器可以自动注入Bean之间的依赖关系，从而实现了控制反转（IoC）。这意味着Bean不再需要手动创建或查找它们所依赖的其他Bean，而是由容器负责管理依赖。
4. **Bean生命周期**：Spring容器管理Bean的整个生命周期，包括初始化和销毁。您可以在Bean上定义初始化和销毁方法，这些方法在Bean创建和销毁时会自动调用。
5. **注解和XML配置**：您可以使用XML配置文件或注解来定义和配置Spring Bean。注解配置更加方便，而XML配置提供了更大的灵活性。
6. **Spring Boot**：Spring Boot是Spring框架的扩展，它简化了Spring应用程序的构建和部署。它提供了自动配置和约定优于配置的原则，使开发者可以更快地启动Spring应用。





# List8

- [x] vue
- [ ] spring
- [ ] eng

## Vue

### 自定义指令

```
1. 全局注册：`Vue.directive('指令名',{inserted(el){el.focus}})`
```

2. 局部注册: `directive:(focus:{inserted(el){el.focus})`

3. `inserted(el,binding){el.style.color=binding.value}`

el绑定的是元素dom，可以修改元素的属性样式内容，binging绑定的是对象，可以获取指令的绑定值value,name,expression

4. 

```
update(el,binding) {
        console.log("指令修改了")
        el.style.color=binding.value;

      }，指令修改时
```



### loading类

​		

```
directives: {
    loading: {
      inserted(el, binding) {

        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
      ,
      update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    }
  }
  ,
  data(){
  return {
  toLoading:true
  }
  },
  setTimeout(()=>{
  this.toLoading=false	,
  3000
  })
  //使用? :判断添加还是删除loading类
  //监听修改后的value值，只有update才能监听到并进行操作
```



```
<div class="box" v-loading="isLoading">
data(){
return {
isLoading:true
}
}
//添加类，需要进行判断是否，v-loading='true or false'

```



### 插槽 

1. `<slot></slot>`占位插槽

2. 具名插槽:`<slot name='head'>   |<template v-slot:head>   |<template #head>`来获取对应的插槽位置

   1. ```vue
      <div>  
         <MyDialog>
           <template v-slot:title>
             开头
           </template>
         </MyDialog>
         --------------------
          <div class="dialog-header">
           <slot name="title"></slot>
           <span class="close">✖️</span>
         </div>
      ```

   2. 




3. 作用域插槽`<slot :自定义数据名="子组件数据名"> | <template v-slot:default="obj"></template>`

   1. obj接收数据，使用obj.自定义数据名.id获取指定数据，使用作用域插槽需要在组件内部使用`<template #default="obj">`

			  2. 有名字就不用default=,直接使用#name="obj"
			  2. 要什么数据就传什么数据，:item="item",:index="index"
			  2. 插槽的作用就是允许你将不同类型的内容加入组件中而不修改组件本身

​				

# List9

- [ ] mysql
- [ ] mybaits
- [ ] spring
- [ ] vue
- [ ] eng



## Mysql

### DDL：对数据库操作

1. 创建表并建立约束

   1. ```mysql
      create table tb_user(
      id int primary key auto_increment comment 'id，主键',
      name not null varchar(20) comment '姓名',
      username not null unique varchar(20)  comment '用户名',
      age int comment '年龄',
      gender char(1) default '男' comment '性别'
      )comment '用户表';
      
      create table tb_user2(
          id int primary key auto_increment comment '主键自增',
          username varchar(20) not null unique comment '用户名',
          name varchar(10) not null comment '姓名',
          gender tinyint unsigned not null default '男' comment '性别',
          password varchar(32) default '12345'comment '密码',
          image varchar(300) comment '图像url',
          job tinyint unsigned comment '工作职位使用1,2,3表示',
          create_date datetime not null comment '创建日期',
          update_data datetime not null comment '修改日期'
      )
      ```
      
      1. tinyint unsigned 使用1,2,3表示性别，或则什么职位时适应这个类型

1. 数据类型

   1. 数值类型：

      |   分类   |   类型    | 大小 |          有符号          |    无符号    |       描述       |                     备注                      |
      | :------: | :-------: | :--: | :----------------------: | :----------: | :--------------: | :-------------------------------------------: |
      | 数值类型 |  tinyint  |  1   |        (-128,127)        |   (0,255)    |     小整数值     |                                               |
      |          | smallint  |  2   |      (-32768,32767)      |  (0,65535)   |     大整数值     |                                               |
      |          | mediumint |  3   |    (-8388608,8388607)    | (0,16777215) |                  |                                               |
      |          |    int    |  4   | (-2147483648,2147483647) |              |     大整数值     |                                               |
      |          |  bigint   |  8   |            ()            |              |    极大整数值    |                                               |
      |          |   float   |  4   |                          |              |  单精度浮点数值  |                                               |
      |          |  double   |  8   |                          |              |  双精度浮点数值  | double(5,2)5表示整个数字长度，2表示小数位个数 |
      |          |  decimal  |      |                          |              | 小数值（更精确） |                                               |

      1. 字符串类型：

         1. 定长字符串char

            char(10) ：最多存储10个字符，占用10个字符空间，性能高

         2. 变长字符串varchar

            varchar(10)：最多存储10个字符，不足10个字符，按照实际长度存储，性能低

      2. 日期类型：

         1. date    3         YYYY-MM-DD     年月日
         2. datetime           8                 YYYY-MM-DD  HH:MM:SS     时分秒

![image-20231016102526642](C:\Users\赖译骏\AppData\Roaming\Typora\typora-user-images\image-20231016102526642.png)

2. 对表操作

   1. ```mysql
      alter table tb_user add qq varchar(11) comment '添加字段';
      alter table tb_user modify qq varchar(13) comment '修改类型';
      alter table tb_user change qq qq_sum varchar(13) comment '修改字段名';
      alter table tb_user drop column qq_sum;
      rename table tb_user to useremp;
      ```
      
      1. add 字段名字 类型 comment “。。。”
      2. modify 字段名 修改类型 comment".。。"
      3. change 字段名 修改字段名 类型 comment".."
      4. drop colum 字段名



### DML

1. `insert into tb_user2(name,username,gender,create_date,update_data) values ('大王','土鸡',1,now(),now());`
   1. 默认值，create_date(),update_date()使用now(),now()赋值
2. `update tb_user2 set name='...' ,update_date=now() where id=1;`
   1. set name='...'，age='...',修改的字段使用逗号连接
   2. update_date=now(),数据直接赋值
3. `delete from tb_user2 where id=1;`

### DQL

1. `select distinct name as 姓名 ,username as 用户名 from tb_user2 where id=1 `

   1. distinct 除去重复数据

   2. as 取别名 ：就是显示在表上的名字更改

2. ```
   select gender,job from tb_user2 where job is null;
   select id from tb_user2 where id<5;
   select * from tb_user2 where name like '_ _';
   select * from tb_user2 where id in (2,5);
   select * from tb_user2 where name like '小%';
   1. _固定一个字，%随便多少个字符 
   2.in(2,5),在2，5之间选择
   3.like模糊查找
   ```

3. 聚合函数

   ```mysql
   select count(id) from tb_user2;
   select count(username) from tb_user2;
   select count('*') from tb_user2;
   select min(create_date) from tb_user2;
   select max(create_date) from tb_user2;
   select avg(id) from tb_user2;
   select sum(id) from tb_user2;
   ```

4. `select gender, count(*) from tb_user where id=1 group by gender having count(*)>1 `

5. `select * from tb_user order by id desc;`

6. 

   ```mysql
   select *
   from tb_user2
   limit 0,1;
   select *
   from tb_user2
   limit 1,1;
   # 页码-1*每页展示的数据=>
   ```

   ### 多表设计

   1. 员工表   和    部门表 

      1. 员工表里需要有部门信息，对应一个部门，所以在员工表里添加 dec_id对应相应的部门表

      2. ```mysql
         alter table tb_user 
         add constraint tb_user_dept_id 
         foreign key (dept_id) 
         references tb_dept(id);
         ```

   2. 多对多

      1. 建立中间表

   3. 一对一

      1. 拆分单表添加外键



## Vue

### VueRouter路由

1. 使用步骤5+2

   1. `yarn add vue-router@3.6.5`

   2. `import VueRouter from 'vue-router'`

   3. `Vue.use(VueRouter)`

   4. `const router=new VueRouter()`

   5. ```js
      new Vue({
        render: h => h(App),
        router
      }).$mount('#app')
      ```

   6. ![image-20231016213027212](D:\md笔记\image-20231016213027212.png)

   7. ```js
      const router=new VueRouter(
        {
            // routes 路由规则们
        // route  一条路由规则 { path: 路径, component: 组件 }
        routes: [
          { path: '/find', component: Find },
          { path: '/my', component: My },
          { path: '/friend', component: Friend },
        ]
        }
      )
      <div src='#/find'>
      ```



# List10

- [ ] vue

- [ ] mysql

- [ ] eng

- [ ] 计算机网络

- [ ] python

- [ ] 页面布局

- [ ] 网课

  

## Vue

### 导出导入

1. `export default router `导出router `import { router} from "@/index.js";`导入使用ES6模块

2. `module.exports = {  myVariable,  sayHello, };`导出 `const myModule = require("./myModule"); // 使用相对路径引入模块 console.log(myModule.myVariable); // 输出 "Hello from myModule.js" myModule.sayHello(); `导入并使用，使用了

   require导入模块

### 路由vueRouter

#### router模块分离

1. 将路由放进router文件夹

2. 在文件夹下的index.js中导入导入组件和定义路由规则(“规则”顾名思义，就是你要路由干嘛就在这里写)

   ```js
   const router = new VueRouter(
       {
           // routes 路由规则们
           // route  一条路由规则 { path: 路径, component: 组件 }
           routes: [
               { path: '/find', component: Find },
               { path: '/my', component: My },
               { path: '/friends', component: Friend },
           ]
       }
   )//定义组件规则
   ```

3. 导出router`export default router`

4. 在App.vue中接收`import router from '@/router/index.js'`

5. 拆分模块利于维护

#### router-link实现导航高亮

1. `<router-link to="/find"></router-link>`替代`<a></a>`

2. 使用自带的类名进行高亮处理`.footer_wrap a.router-link-active`

3. `router-link-acitve`：模糊匹配  /find=>/find/one,/find/two

    ` router-link-exact-acitve`：精确匹配  /find!=>/find/one

4. 自定义高亮类名`linkActiveClass:'active'`

### 数据：跳转传参数$route

1. 查询参数传参`/path?key=...` , `this.$route.query.key`获取数据...，适合多个参数

2. 动态路由传参 `/path/:words`,`this.$route.params.words`获取数据 `/path/:words`配置路由规则，传单个参数

   `/path/words?`？:就算没有参数也能匹配到组件

3. ` mode: 'history',`去掉路径中的#号,写在规则中

   

### 重定向

1. 强制跳转到Path路径，配置路由规则`{path:'/',redirect:'/home'}`，单网页打开自动跳转到主页面

2. 404配置，`{path:'*',component:NotFind}` * :表示任意路径，NotFind组件

3. 点击按钮跳转

   1. ```js
      this.$router.push('/search');  
      ```

      ```js
        this.$router.push(
              {
                path:'search',
                query:{
                    参数名：参数值，
                    参数名：参数值，
                    //适合传递多个参数
                }
               }
           );
      
      this.$router.push('search')
      ```

      使用路径跳转到对应的路径，

      适合简单路径
      
   2. ```js
      this.$router.push(
              {
                name:'search'
              }
            )
      this.$router.push('search')
      ```
      
      在规则里面定义name，使用name跳转，
      
      适合路径长
      
   3. ```js
      data(){
      return {
      valueData:'',
      }
      }
      ----------------
      goSearch(){
      this.$router.push({
      //注意是?不是/
      path:`/search?${this.valueData}`,
      //注意是query不是params
      query:{
      key:this.valueData
      }
      })
      }
      --------------------
      //获取valueData值，使用对应的参数名
      this.$route.query.key
      
      
      //适合传递多个参数
      ```
   
   4. 动态路由传参
   
      ```js
      {name:'search' path:'/search/:words',components:Search}
      -----------------
      this.$route.push({
      path:`/search/${this.valueData}`
      
      })
      //直接在路径里面写
      -----------------
      this.$route.params.words
      ```
   
   5. name命名方式传参
   
      ```
      this.$router.push({
      name:'search',
      query:{
      key:this.valueData
      },
      params:{
      words:this.valueData
      }
      })
      ```
   
      总的意思就是跳转到我想要到的地址，然后把参数携带过去，并由到达的地址的组件获取
   
      push                                                        ?params 										$route	

​	

## Mysql

1. 

```mysql
create table category(

id primary key not null auto_increase int unsigned comment 'id',
id int unsigned not null auto_increment

name varchar(20) not null unique comment 'name',
type tinyint unsigned not null comment 'type',
sort tinyint unsigned comment 'sort',
status tinyint unsigned default 0 comment 'status',
create_date datetime not null comment 'create_date',
update_date datetime not null comment 'update_date'
) comment "分类表"
```

```mysql
create table category (
id int unsigned not null auto_increment primary key comment 'id',
name varchar(20) not null unique comment 'name',
price decimal(8,2) not null comment '价格，小数，使用dicimal()'

)comment "菜品"
```

2. 多表查询

   1. `select * from tb_user ,tb_user2 where tb_user.dept_id =tb_user2.id;`	

      dept_id是user表里对应user2表里的id

   2. 内连接

      1. 隐式内连接就是  表1，表2 

      2. 显式内连接 --- ...inner join ... on...

         `select tb_user.name ,tb_user2.name from tb_user inner join tb_user2 on tb_user.id=tb_user2.id`

      3. 起别名

         `select * from tb_user user ,tb_user2 user2 where user.dept.id=user2.id`

   3. 外连接

      1. `select u.name,u2.name from tb_user u left join tb_user2 u2 on u.dept.id =u2.id `

         只查询到左边的表也就是tb_user u的数据

# **List11**

## Vue

### **一二级路由切换**

```js
const router = new VueRouter({
  routes: [
    {
      path: '/', component: Layout,
      children: [

        { path: '/article', component: Article },
        { path: '/collect', component: Collect },
        { path: '/like', component: Like },
        { path: '/User', component: User }

      ]
    },
```

---

```js
 <div class="content">
      <router-view></router-view>
      内容
    </div>
    <nav class="tabbar">

      <router-link to="/article">面经</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/user">我的</router-link>
```

### 思想：

哪里要用路由就哪里加，然后在路由规则里面配置就行

1. ```js
   @click="$router.push(`/detail?id=${item.id}`)"
   
   this.$router.push({
       path:'detail',
       query:{
           id=${item.id}
       }
   })
   ----------------------
   this.$route.query.id
   ```

   ```js
   @click="$router.push(`/detail/${item.id}`)"
   
   this.$router.push({
       path:'/detail/${item.id}',
    
   })
   //还不如简写
   ------------------------------------------
   this.$route.params.id
   
   --------------------------------
   new VueRouter({
   routes:[
   {
   ...
   }
   ...
   ,
   {
   path:'/detail/:id',component:detail
   }
   ]
   
   })
   ```

2. 返回上一页`$router.back()`

### 组件缓存keep-alive

1. ```js
    <div class="h5-wrapper">
       <!-- 所有一级路由里的组件都被缓存 -->
       <keep-alive>
         <router-view></router-view>
       </keep-alive>
      
     </div>
   ```

2. keep-alive的三个属性inclue,exclude,max

   ```js
       <keep-alive include="LayoutPage">
         <router-view></router-view>
       </keep-alive>
   
   -----------------------------------
       还可以去定义个组件数组，到时候可以吧组件封装进去
   ```

   那个需要缓存，就include哪个组件名

   两个生命周期，activated deactivated,你打开就activated,你看不到就deactivated

3. 自定义创建项目-Vue-cli
   1. `vue create vueName`

### vuex概述


      1. 状态数据管理工具
      2. 某个状态在多个组件使用
      3. 多个组件共同维护一份数据
      4. 数据集中化管理
      5. 响应式变化
      6. 操作简洁

#### 创建一个空仓库

1. yarn add vuex@3 

   1. 确认好版本对不对应，package.config的vue 版本依赖应该是2.17.3

   2. 更改完版本之后，应该删除node_ modules `rmdir /s /q node_modules`然后进行`npm install`

      最后清理缓存`npm cache clean --force`

2. 新建vuex模块文件

   1. 新建store/index.js存放vuex

3. 创建仓库

   1. ```
      import Vue import 'vue'
      import Vuex import 'vuex'
      Vue.use(Vuex)
      const store=new Vuex.Store()
      export default store
      ```

4. main.js导入挂载

   1. ```
      import store from '@/store/index'
      import Vue from 'vue'
      import App from './App.vue'
      Vue.config.productionTip=false
      new Vue({
      render:h=>h(App),
      store
      }).$mount('#app')
      ```

      

#### state状态

1. 存放共享数据

   ```js
   const store=new Vuex.Store({
   state:{
   count:101
   }
   })
   ```

2. 使用数据

   1. 通过store直接访问

      ```js
      {{$store.state.xxxx}}
      组件中:this.$store.state.xxx
      js模块中:$store.state.xxxx
      ```

   2. 通过辅助函数（简化）

      mapState辅助函数

      1. 导入`import {mapState} from 'vuex'`

      2. 数组方式引入state`mapState(['count'])`

         ```js
         computed:{
           ...mapState(['count'])
         }
         =>
         computed:{
         count(){
         return this.$store.state.count
         }
         }
         ----------------------
         {{count}}
         ```

#### mutations

1. 组件不能直接修改仓库的数据，`strict:true`开启严格模式：检测不规范的代码
2. ```js
   change(state,n){
   state.count+=n
   }
   ---
   this.$store.commit('change',n)
   ```

   使用mapMutation

   ```js
   computed:{
   ...mapMutat([
   'change'
   ])
   }
   ```

3. ```js
   new Vuex.Store({
   state:{
   count:100,
   Str:'newnew'
   },
   change(state,n){
   state.count+=n
   },
   changeStr(state,newStr){
   state.Str=newStr
   }
   action:{
   changeCountAction(context,num){
   setTimeout(()=>{
   context.commit('changeStr',num),3000
   })
   
   }
   }
   
   })
   ------
   handleChange(n){
   this.$store.dispatch('changeStr',n)
   }
   
   ```


#### Actions

```js
import {mapActions} from 'vuex'
methods:{
...mapAction([
'changeStr'
])
}
```

```

```



#### getters

1. 对数组数据进行处理

   ```js
   state:{
   list:[1,2,3,4,5,6,7]
   }
   ---
   new Vuex.Store({
       ...
       strict:true,
       state:{},
       mutations:{},
       actions:{
           setTimeout(()=>{
           ,3000
       })
       }
       getters:{
           filterList(state){
               return state.list.filter(item=>item>5)
           }
       }
   })
       
   ----
   this.$store.state.list
   
   ---
   import {mapGetters} from 'vuex'
   computed:{
       ...mapGetters([
           
           'filterList'
       ])
   }
   ```

   



给son组件的button添加点击事件handlerChange，更改数值加一，数值是state仓库里在仓库中添加count数值，和通过mutations

添加修改数值方法addValue,	



用辅助函数，直接在要用到的组件里面添加方法，和辅助方法，辅助方法里面添加仓库里的方法，让组件事件里可以使用到仓库里的方法

就是调用仓库的方法，只是使用前需要将方法名定义到组件中，使用辅助方法定义=>...mapMutation(['subData'])





![image-20231021203451015](D:\md笔记\image-20231021203451015.png)





#### moudules

##### 模块化仓库

1. 将仓库的文件index.js拆分成几个js文件，在里面编写各个类

   ```js
   const state={
       age=11,
       name="xiaoming"
   }
   const mutations={}
   const getters={},
   const actions={}
   //将数据导出
   export default{
       //开启命名空间
       namespaced=true,
   state,
   mutations,
   getters,
   actions
   
   }
   ```

   ```js
   --index.js
   //将模块导入
   import user from '@/store/modules/user.js'
   
   new Vuex.Store({
   
   ...,
   modules:{
   //使用模块
   user
   }
   })
   ```

2. 使用模块中的数据

   ```
   
   computed:{
   ...mapState{'user',['age','name']}
   ...mapGetters{'user',['upper']}
   },
   methods:{
   ...mapMutations{'user',['sumDataM']},
   ...mapActions{'user',['addTouch']},
   add(n){
   this.$store.commit('user/sumDataM',n)
   },
   addM(n){
   this.$store.dispatch('user/addTouch',n)
   }
   }
   
   ---
   const getters={
   upper(state){
   state.vData='cd'
   }
   }
   const mutations={
   sumDataM(state,n){
   state.num+=n
   }
   }
   const actions={
   addTouch(context,n){
   setTimeOut(()=>{
   context.commit('sumDataM',n)
   
   })
   }
   }
   
   ----
   <div>{{$store.getters[user/upper]}}</div>
   <div>{{upper}}</div>
   <button @click='sumDataM(2)'>+2</button>
   <button @click='add(1)'>+1</button>
   <button @click='addTouch(1)'>+1</button>
   <button @click='addM(1)'>+1</button>
   
   ```

   

### 项目总结

修改仓库数据在mutations里面修改

获取数据或者修改后端数据在action里面=> axios.patch(`.....\${obj.id}`,{count:obj.id}

App.vue里面获取数据后分发给子组件数据=>:item=item props:{item:{type:Object}}

子组件里数据通过写方法发送到对应模块的方法中`cart/updateCount`,{count:newCount}

# List12

## Vue

### Vant组件库

1. 安装vant`yarn add vant@latest-v2-S -d `

2. 使用vant 组件

   ```js
   //按需导入
   # 安装插件
   npm i babel-plugin-import -D
   // 在.babelrc 中添加配置
   // 注意：webpack 1 无需设置 libraryDirectory
   {
     "plugins": [
       ["import", {
         "libraryName": "vant",
         "libraryDirectory": "es",
         "style": true
       }]
     ]
   }
   ```

   ```js
   在util包里面导入vant.ui组件
   import { Button } from 'vant'
   import Vue from 'vue'
   Vue.use(Button)
   -------------
   
   ```

### vw适配

1. 安装插件`yarn add postcss-px-to-viewport@1.1.1 -D`

2. 根目录新建postcss.config文件，填入配置

   ```
   module.export={
   plugins:{
   'postcss-px-to-viewport':{
   viewportWidth:375
   }
   }
   }
   ```

   



### 智慧商场项目

#### 登录页面

##### 配置路由 

1. 创建所对应的文件夹极其vue文件，漏掉的以后在补充
2. 配置路由规则：一级路由router / index.js
3. 导入路由vant组件
   1. yarn安装vant
   2. utils/vant-ui.js 按需导入组件
   3. 复制代码
   4. 修改代码
   5. 配置二级路由
      1. 在对应页面的文件夹里创建对应的文件夹及其vue文件
      2. 配置路由规则：二级路由chirldren:[{}
   6. 开启路由模式 `<van-tabber route><van-tabber-item to="/home"></van-tabber-item></van-tabber>`
   7. 提供路由出口`<router-view></router-view>`
   8. 重定向到主页面`redirect:'/home'`

##### 实现静态布局

1. 新建styles/cmmon.less重置默认样式
2. main.js导入common.less
3. 图片拷贝到assets目录

1. 封装axios request.js

   1. 创建实例和配置基础地址，导出对应实例 instance

   2. 配置响应拦截器和请求拦截器，在响应拦截器里配置返回数据return response.data

   3. 验证码图片

      1. 获取数据`base64,key`

         ```js
         methods:{
         async getPinCode(){
         const {data:{base64,key}}=await request.get('.../../..')
         this.picUrl=base64
         this.pickey=key
         }
         }
         ----
         data(){return {picUrl:'',picKey=''}}
         ----
         //进页面前刷新数据
         created(){
         this.getPinCode()
         }
         ----
         
         
         ```

##### 封装api模块

1. 新建api文件夹及其模块文件api/login.js
2. 编写login.js，返回promise值
3. 按需导入`import {} from 'xx/xxx'`
4. 有this.跟无this的注意

##### toast轻提示

1. 注册安装，按需导入`import { Toast } from 'vant' Vue.use(Toast)`
2. 导入调用`import { Toast } from 'vant'  Toast('提示内容')`
3. 直接调用`this.$toast('提示内容')`

##### 倒计时基础效果

1. 准备数据`data(){return {totalSecond,second,timer:null}}`

2. 给按钮添加点击事件`<button @click="getCode">{{second===totalSecond?'获取验证码':second+'秒后重新发送'}}</button>`

3. 开启倒计时`setInterval(()=>{this.second--},1000)`

   1. 添加判断

      ```js
      if(!this.timer&&this.Second===this.totalSecond)
      {
      setInterval(()=>{
      this.second--
      if(this.second<=0){
      clearInterval(this.timer)
      this.seconde=this.totalSecond
      this.timer=null
      }
      })
      }
      ```

4. 删除计时器`destroyed(){clearInterval(this.timer)}`

##### 校验

1. ```js
   data(){return{
    mobile: '',
         msgCode: '',
        picCode: ''
   }} 
   ```

   

2. 判断手机号和图形验证码输入格式

   ```js
    validFn () {
     //以1开头下个数字在3到9之间，接下来的数字要匹配9个数字，最后以数字结尾
         if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
           this.$toast('请输入正确的手机号')
         }
         if (!/^\w{4}$/.test(this.picCode)) {
           this.$toast('请输入正确的图形验证码')
           return false
         }
         return true
       },
           
             getCode () {
         if (!this.validFn()) {
           return
         }
   ```

##### 登录功能

1. 封装登录接口

```js
// 登录接口
export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
```

2. 登录前的校验和登录成功

```js
async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }
      const res = await codeLogin(this.mobile, this.msgCode)
      console.log(res)
      this.$toast('登录成功')
      this.$router.push('/')
    }
```

##### 拦截器处理错误提示

1. 在封装数据传输axios里面进行拦截，utils/request.js

2. 获取后端传过来的数据response.data

3. 判断status是否为200

   ```js
   const res=response.data
   //状态码不等于200说明是错误的
   if(res.status!==200){
   //返回提示；使用toast
   Toast(res.message)
   //返回promise对象
   return Promise.reject(res.message)
   }
   ```

   1. *除了 `Promise.reject`，`Promise` 还有其他两个主要状态：`Pending`（等待）和 `Fulfilled`（已完成）。*

      1. ***Pending（等待）**: 当一个 Promise 对象被创建时，它处于等待状态，这表示异步操作尚未完成，也没有失败。在等待状态下，你可以随时将 Promise 标记为已完成（fulfilled）或拒绝（rejected）。*
      2. ***Fulfilled（已完成）**: 当异步操作成功完成时，Promise 被标记为已完成状态。你可以使用 `.then` 来指定成功时的回调函数，并获取操作的结果。*
      3. ***Rejected（拒绝）**: 当异步操作发生错误或被拒绝时，Promise 被标记为拒绝状态。你可以使用 `.catch` 或 `.then(null, errorHandlingFunction)` 来指定错误处理的回调函数。*

      *这三种状态构成了 Promise 的生命周期，允许你更好地处理异步操作的不同情况。当操作成功时，你可以处理成功的情况，而当操作失败时，你可以捕获和处理错误。这种模型提供了一种更清晰、可管理和可预测的方式来处理异步操作*。

4. 使用Toast时，需要导入Toast，因为不在范围内

##### vuex登录权证信息存储

1. 创建user模块modules/user

2. 在store/index.js导入user模块

3. 编写user模块


~~~js

//创建所需要的数据 token userId 使用对象接收
export default{
//开启命名空间
namespaced:true,
state(){
return{
	userInfo:{
	token:'',
	userId:''
	}
},
mutation:{
    setUserInfo(state,obj){
        state.userInfo=obj
    }
}
    
}
}

4. 将页面数据传到vuex中

this.$store.commit('user/setUserInfo',res.obj)
//放在成功登录后，销毁计时器前面

~~~

##### storage存储模块—vuex持久化处理

1. 防止重名或者重复操作，解析获取等，进行封装处理

2. 创建utils/storage.js

3. 写代码

   ```js
   //通用命名
   const INFO_KEY='hm_shopping_info'
   //获取数据
   export const getInfo = () => {
   const defaultObj={token:'',userId:''}
   const result=localStorage.getItem(INFO_KEY)
   return resutl ? JSON.parse(resutl) : defaultObj
   }
   //设置个人信息
   export const setInfo=()=>{
   localStorage.setItem(INFO_KEY,JSON.stringify(obj))
   }
   //移除个人信息
   export const removeInfo=()=>{
   localStoreage.removeItem(INFO_KEY)
   }
   ```

4. 设置vuex仓库user模块里的数据获取及其存储

   ```js
   import { getInfo , setInfo } from '@/utils/storage.js'
   export default {
       namespaced: true,
       state(){
           return{
               userInfo:getInfo()
           }
       },
       mutations:{
           setUserInfo(state,obj){
               state.userInfo=obj
               setInfo(obj)
           }
       }
       
       
   }
   ```

##### 添加loading效果

1. 防止多次点击，发动无用请求，提高用户体验

2. 请求时添加loading，响应时删除loading

3. 在拦截器里面写代码,utils/request.js

   ```js
   instance.interceptors.request.use(function(config){
       Toast.loading({
           message:'加载中...',
           forbidClick:true,
           //设置样式
           loadingType:'Spinner',
           //设置默认时间为一直
           duration:0
       })
   })
   
   ----
   instance.interceptors.response.use(function(response){
       const res=response.data
       if(res.status!==200){
           Toast(res.message)
          	return Promise.reject(res.message)
       }else{
           //清除loading 
           Toast.clear()
       }
       return response.data
   }),function(error){
       return Promise.reject(error)
   }
   
   ```


##### 页面访问拦截

1. 需要登录后才能进去其他页面

2. 使用导航路由守卫---Vue Router

   ```js
   
   const router=new VueRouter({})
   // 定义数组，存放需要登录的页面
   const authUrl=['/pay','/myorder']
   // 全局路由守卫，
   router.beforeEach((to,from,next)=>{
   // console.log(to,from,next);
   //判断是否包含authUrl的路径
       //如果没有包含就直接通行
       if(!authUrl.includes(to.path))
           {
               next()
               return
           }
       //如果包含通过获取VueX仓库数据token判断是否登录
       // 获取token,封装到store的getters方法里，导入进来使用
       const token=store.getters.token
       if(token)
           {
               next()
           }else{
               next('/login')
           }
   
   })
   export router
   ```

   

#### 首页

##### 获取首页数据 ，之前的获取数据是在登录页面封装的，所以首页数据也要独自封装一个home.js

```js
export const getDataHome=()=>{
return request.get('/page/detail',{
    params:{
        pageId:0
    }
})
}

```

##### 在页面调用数据，创建页面前获取数据给页面刷新

```js
async created(){
const res=await getDataHome()
}
```

##### 创建组件，商品列表，使用组件，需要导入组件和组成组件所需要的vant组件

##### 渲染页面

需要创建对应的数据并且把获取到的数据匹配给每个页面数据

然后使用v-for渲染

```js
bannerList:[],//轮播
navList:[],//导航
proList:[]//商品

```

#### 搜索和历史管理功能

##### 需求

```txt

1.搜索历史基本渲染
2.点击搜索（添加历史）点击搜索按钮或则底下历史记录都能进行搜索，
3.若没有相同关键字，则直接追加(unshift)到最前面，若已有关键字，则将该关键字移除，在追加
4，清空历史，5.持久化，刷新数据不消失
```

##### 搜索历史基本渲染

```
创建搜索页面静态布局，数据渲染，可以给假数据进行渲染，点击搜索和点击关键字都可以进行搜索，可以共用一个搜索方法，getSearch
将数据动态渲染，v-model以便获取数据，以及关键字点击事件getSearch(item)，传进去的参数都是动态的，
```

![image-20231108162544569](C:\Users\赖译骏\AppData\Roaming\Typora\typora-user-images\image-20231108162544569.png)

##### tip

```
splice(index,1)//从哪里开始删除，删除几个 ，indexof():搜索有没有对应的key值，没有的话返回-1,有的话返回对应的index值
```

##### 本地存储

```
本地存储还是需要在stroage.js里面进行封装，因为有定义key值所以不需要担心冲突，然后携带参数跳转到searchList页面去
携带参数需要动态渲染`?searchList=${key}`
```



#### 搜索列表

1. 静态结构，封装接口，获取数据，动态渲染


##### 获取页面数据，在api中新建product.js

```
export const getProductList=(obj)=>{
const {categoryId,goodsName,page} =obj
return request.get('/goods/list',{
params:{

}
})
}
```

##### 获取地址栏的参数

```js
computed:{
 querySearch(){
return this.$route.query.search
}
//将数据渲染到搜索框里面并给与默认值
:value='querySearch|| '搜索商品''
}
```

##### 获取数据

```js
//创建需要的数据
data(){
return {
page:1,
proList:[]
}
}
async create(){
const {data:{list}}=await getProductList({
categoryId:this.$route.query.categoryId,
goodsName:this.querySearch,
page:this.page
})
this.proList=list.data
}
```

##### 动态渲染到子组件

也就是还是商品列表组件`<GoodsItem>`

使用v-for="item in proList"进行渲染，并且将数据传递过去:item="item"



1. 基于分类页渲染 categoryId 

   1. 静态页面

   2. 封装接口category.js

      ```js
      export const getCategoryData=()=>{
      return request.get('/category/list')
      }
      ```

   3. 分类页是在首页页面下的子页面

      1. 获取地址栏中的id参数然后变成搜索的参数之一

         ```js
         // /searchList?categoryId=100023
         //获取地址栏中的参数
         this.$route.query.categoryId
         ```


#### 详情页

1. 静态布局，渲染

2. 接口product.js

   ```js
   export const getProDetail=(goodsId)=>{
   return request.get('/goods/detail',{
   params:{
   goodsId
   }
   })
   }
   ```

3. 动态获取参数id传递给接口

   ```js
   goodsId(){this.$route.params.id	}
   ```

4. 渲染页面

   ```js
   const {data:{detail}} = awite getProDetail(this.goodsId)
   ```

5. 评价列表

   1. 查看文档，获取所需要的数据，封装api，

   2. 将api所需要的数据传递过去，可以给默认值

   3. 获取到数据后，渲染页面，判断是数组还是对象

   4. 评价列表用户图片需要设置默认值

      ```js
      import defaultImg from '@/assets/default-avatar.png'
      -------
      <img :src="item.user.avata_url||defaultImg" alt="">
      ```

6. 商品描述

   1. ```html
       <div class="desc"  v-html="detailList.content"></div>
      ```

7. 购物车弹出

   1. 使用vant组件中的actionSheet组件，导入组件

   2. 控制showPannel属性控制弹框的隐藏出现，动态渲染showPannel数据

   3. 封装方法，打开购物车，立即购买都会弹出

   4. 定义mode属性，动态渲染title`:title="mode==='code'?'加入购物车':'立即购买'"`

   5. 写好静态结构，渲染数据到页面

   6. 动态渲染按钮，判断商品是否抢完，是的话不显示购物车和立即购买按钮

      ```html
      <div v-if="detailStock>0">
          <div v-if="mode==='cart'">加入购物车</div>
          <div v-else>立即购买</div>
      </div>
      ```

   7. 封装数字组件

      1. 创建组件，导入组件

      2. 数据父传子

         ```
         使用v-model传递数字（本质上是@input和value）直接v-model="account"传递给子组件
         //value默认值给1
         子组件=>props:{value:{type:Number,default:1}}  <input :value="value">
         ```

      3. 子传父

         ```js
         handlSub(){
         //判断不小于一
         this.$emit('input',this.value-1)
         }
         ```

      4. 失去焦点变化

         ```js
         //失去焦点，将当前的值赋予给value值，然后发送给父组件
         handleChange(e){
         //转换成数字
         const sum=+e.target.value
         //输入不合法的文本或则输入了负值，回退成原来的值
         if(isNaN(sum)||sum<1)
         {
         e.target.value=this.value
         return
         }
         this.$emit('input',sum)
         }
         ```

         











## Mysql







左连接返回左表所有行，如果右表没有匹配的行则null

![image-20231027212023443](D:\md笔记\表结构)

1. 查询所有价格在10元到50元之间且状态为'起售'的菜品，展示出菜品的名称，价格极其菜品的分类名称

```sql
select d.name,d.price,c.name from dish d left join category c on d.category=c.id where d.price between 10 and 50 and d.status =1;
```

2.查询每个分类下最贵的菜品，展示出分类的名称，最贵菜品的价格

表：category ,dish

```sql
select c.name ,max(price) from category c ,dish d where d.categroy_id =c.id group by c.name;
```



3. 查询各个分类下 菜品状态为'起售'，并且该分类下菜品总数量大于等于3的分类名称

   表：category ,dish

```sql
select c.name count(*)from category c,dish d where d.category_id=c.id and d.status=1 group by c.name having count(*) >=3
```



5.查询出“商务套餐A”中包含哪些菜品（展示出）

```sql
select  from dish d ,category c where d.category_id=c.id and 
select * from tb where status=0 and between price=10 and price=50
select max(price) from cart 
```

# List13

## GSAP

1. 导入插件

   ```js
       <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
   ```

2. 编写代码

   ```js
    <script>
           ScrollTrigger.create({
               trigger: '.screen2',
               start: 'top top',
               end: '+=2500',
               scrub: true,
               markers: true, 
               //改为固定定位
               pin: true,
               animation:
                   gsap.timeline().fromTo('.black', { width: '100px', height: '100px' }, { width: '150px', height: '150px' })
                       .fromTo('.blue', { left: '55.124em' }, { left: '14.3em' }, "<")
                       .fromTo('.red', { right: '63.114em' }, { right: '14.3em' }, "<")
   
           })  
       </script>
   ```

## VIVO官网项目

1. 放大缩小

   ```js
   ScrollTrigger.create({
   start:'top top',
   end:'+=1000',
   srub:true,
   animation:
   gasp.timeline().fromTo('.one',{scale:1},{scale:0.5})
   .fromTo('.two',{},{},"<")
   })
   //当页面缩小，下个页面开始放大
   ```

2. 使用滚动条控制视频播放

   ```js
   ScrollTrigger.create({
   start:'top top',
   end:'+=4000',
   srub:true,
   pin:true,
   animation(){
   const summary=document.querySelector('.summary')
   try{
   //self.progress:滚动的整体进度
   //summary.duration:视频的总时长
   //
   summary.currentTime=self.progress*summary.duration
   }
   catch(e)
   {console.log(e)}
   }
   })
   ```

3. 播放视频

   ```js
   ScrollTrigger.create({
   start:'top top',
   end:'+=4000',
   srub:true,
   
   animation:
   gsap.timeline()
   .fromTo('.title',{opacity:1},{opacity:0})
   .fromTo('video1',
   {
   'margin-top':"100%"
   },
   {
   "margin-top":0,
   
   onStart()
   {
   const video1=document.querySelector('.video1')
   video1.currentTime=0//从开头开始
   vide01.play()//开始播放
   }
   }
   )
   })
   ```

   

























## MFC

1. true有报错或者是其他对的报错打开属性更换字符集

2. 每个组件的属性都有作用，比如Multiline可以允许跨行

3. 类向导可以自动生成函数，双击组件也可以

4. 添加变量，就可以使用变量的名字控制组件

5. 自定义变量，创建自己定义的变量方法名，然后自定义内容在resource.h里面增加，在类向导里面在添加函数

   使用自定义的函数，例如MESSAVE_ON变量名访问到所在类里面的方法

   `void CMFCApplication5Dlg::OnClickedButton1()
   {
   	// TODO: 在此添加控件通知处理程序代码
   	PostMessage(MESSAGE_ON);
   }`

   `afx_msg LRESULT CMFCApplication5Dlg::OnMessageOn(WPARAM wParam, LPARAM lParam)
   {	
   	MessageBox("收到自定义消息MESSAGE_ON");
   	return 0;
   }`		
