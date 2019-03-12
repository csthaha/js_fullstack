// let enc_qq="631758924";
// //字符串是字符集合
// console.log(enc_qq.length,enc_qq[0]);

// 数组是最廉价的数据结构
// let enc_qq=[6,3,1,7,5,8,9,2,4];
// enc_qq.shift();        //移除数组的第一个元素
// console.log(enc_qq);
// enc_qq.pop();
// console.log(enc_qq);
let enc_qq=[6,3,1,7,5,8,9,2,4],
    qq=[];   //真正的QQ
    head=0;    //队首指针  （移除元素）
    tail=9;     //队尾指针  （添加元素）
    //第一个数移除到新的qq
  while(head<tail) {  
     qq.push(enc_qq[head]);
     head++;
     enc_qq[tail]=enc_qq[head];
     tail++;
     head++;
     console.log(qq);
   }
   // enc_qq.shift();
    