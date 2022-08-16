<template>
  <div class="flex-column-align">
    <div class="flex" style="width:1200px;">
      <div class="flex-column" style="width:400px;position:relative;">
        <div class="float_left">
          <div @click="goLink('ts1')">TypeScript是什么</div>
          <div @click="goLink('ts2')">JavaScript 与 TypeScript 的区别</div>
          <div @click="goLink('ts3')">TypeScript 的优势</div>
          <div @click="goLink('ts4')">TypeScript 的缺点</div>
          <div @click="goLink('ts5')">TypeScript安装</div>
          <div @click="goLink('ts6')">查看版本</div>
          <div @click="goLink('ts7')">编译一个 TypeScript 文件</div>
          <div @click="goLink('ts8')">TypeScript 用法</div>
          <div @click="goLink('ts9')">为什么要用到TS</div>
          <div @click="goLink('ts10')">各类型定义</div>
          <div @click="goLink('ts11')">类型别名</div>
          <div @click="goLink('ts12')">类</div>
          <div @click="goLink('ts13')">泛型</div>
          <div @click="goLink('ts14')">枚举</div>
          <div @click="goLink('ts15')">元组</div>
        </div>
      </div>
      <div class="flex-column">
        <div id="ts1">
          <h1>TypeScript是什么</h1>
          <p>TypeScript 是一种由微软开发的自由开源的编程语言，他是JavaScript的一个超集，扩展了JavaScript的语法，主要提供了类型系统和对 ES6 的支持。</p>
          <p>TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。</p>
        </div>
        <div id="ts2">
          <h1>JavaScript 与 TypeScript 的区别</h1>
          <p>TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与
            TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。</p>
          <p>TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。</p>
        </div>
        <div id="ts3">
          <h1>TypeScript 的优势</h1>
          <p>强大的IDE支持:体现在三个特性上，1.类型检查，在TS中允许你为变量指定类型。2.语法提示。3.重 构。</p>
        </div>
        <div id="ts4">
          <h1>TypeScript 的缺点</h1>
          <p>有一定的学习成本，需要理解接口(Interfaces)、泛型(Generics)、类(Classes)、枚举类型
            (Enums)等前端开发可能不是很熟悉的知识点</p>
        </div>
        <div id="ts5">
          <h1>TypeScript安装</h1>
          <p>TypeScript 的命令行工具安装方法如下:
            npm install -g typescript
            以上命令会在全局环境下安装 tsc 命令，安装完成之后，我们就可以在任何地方执行 tsc 命令了。</p>
        </div>
        <div id="ts6">
          <h1>查看版本</h1>
          <p>tsc -v</p>
        </div>
        <div id="ts7">
          <h1>编译一个 TypeScript 文件</h1>
          <p>tsc hello.ts</p>
          <p>使用 TypeScript 编写的文件以 .ts 为后缀</p>
        </div>
        <div id="ts8">
          <h1>TypeScript 用法</h1>
          <p>使用 : 指定变量的类型，: 的前后有没有空格都可以</p>
          <p>let num:number = 15; num(变量名):number(类型) = 15(具体值) 表示定义一个变量num，指定类型为number; let str:string = 'abc';
            表示定义一个变量str，指定类型为string;</p>
        </div>
        <div id="ts9">
          <h1>为什么要用到TS</h1>
          <p>定义一个函数计算二个数据的合计
            function sum(x,y){
            if(typeof x != 'number') { //对于形参的类型要添加转换
            x = parseInt(x);
            }
            return x+y };
            sum('1',2);
            TS的方式，直接约束了类型
            function sum2(x:number,y:number){
            return x+y };</p>
        </div>
        <div id="ts10">
          <h1>各类型定义</h1>
          <p></p>
        </div>
        <div id="ts11">
          <h1>类型别名</h1>
          <p>function myHello(person: n) {
            return 'Hello, ' + person;
            };
            type n = number;
            let name:n = 18;
            console.log(myHello(name));</p>
        </div>
        <div id="ts12">
          <h1>类</h1>
          <p>传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。而在 ES6 中，我们终于迎 来了 class。
          </p>
          <p>类(Class):定义了一件事物的抽象特点，包含它的属性和方法</p>
        </div>
        <div id="ts13">
          <h1>泛型</h1>
          <p>泛型(Generics)是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定 类型的一种特性。</p>
          <p>泛型变量T ， T表示任何类型</p>
        </div>
        <div id="ts14">
          <h1>枚举</h1>
          <p>enum类型是对JavaScript标准数据类型的一个补充</p>
          <p>对于数组中获取数据，只能通过数组来获取，不能通过名称来获取</p>
        </div>
        <div id="ts15">
          <h1>元组</h1>
          <p>数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。</p>
          <p>我们知道数组中元素的数据类型都一般是相同的(any[] 类型的数组可以不同)，如果存储的元素数据类 型不同，则需要使用元组</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
/**
 * 开发功能：TS文档
 * 开发人员：冉敬坤
 * 首次开发时间：2022-6-21
 * 最后更新时间：2022-6-21
 */
import { useStore } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ts",
  setup() {
    const store = useStore()
    store.commit('setHeaderStatus', false)
    const goLink = (val: any) => {
      document.getElementById(val)?.scrollIntoView();
      console.log(1)
    }
    return {
      goLink,
    };
  },
};
</script>
<style scoped>
.float_left{
  position: fixed;
  top: 0;
  left: 0;
}
</style>
