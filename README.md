# 使用
- `npm run dev:h5` 运行到h5
- `npm run dev:weapp` 运行到微信
# 完成
 - 加载cssModule class
   - 新建xxx.module.scss文件
   - script 文件引入 import xx from './xxx.module.scss';
   - 对应的:class="xx.xx" 样式
```javascript
    setup(){
    
        return {
            styles
        }
    }
```
 - vuex集成
