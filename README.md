#vue-select2
select2基于vue的组件


##使用方法
```

<script>
    module.exports = {
        data: function(){
            return {
                currentTags: [1,2],
                tags: [
                    {id: 1, title: 'CSS3'},
                    {id: 2, title: 'JS'},
                    {id: 3, title: '数据库'},
                    {id: 4, title: 'PHP'},
                    {id: 5, title: 'HTML5'}
                ]
            };
        }
        ...
        components: {
            tags: require('vue-select2');
        }
        ...
    }
</script>

<template>
    
    <select model="{{@ currentTags}}"
            data="{{tags}}"
            tags="true"
            split="[',','#',' ']"
            invariant="[]"
            placeholder="输入你要搜索的标签"></select>

</template>

```

##属性说明

`model`       *必须传入，为已选择的值，数据为id的数组
`data`        *必须传入，为数据源，结构如：`{id: 1, title: 'CSS3'}`
`tags`        是否已标签显示，默认是`true`
`split`       分隔符，默认是`[',', ' ','#']`
`invariant`   不变值，数据为id数组
`placeholder` 输入提示