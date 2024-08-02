<script setup lang="ts">
import {DesignPanel, Panel, Template} from 'myprint-design';

const emit = defineEmits(['back'])

const templateContent = {
  width: 100,
  height: 100,
  pageUnit: 'mm',
  elementList: [{
    type: 'Text',
    x: 10,
    y: 10,
    width: 50,
    height: 10,
    data: '磨刀霍霍向厨房',
    option: {
      textAlign: 'center',
      verticalAlign: 'center'
    }
  },
    {// 时间
      type: 'TextTime',
      x: 10,
      y: 20,
      width: 50,
      height: 10,
      option: {
        formatter: '{{yyyy年MM月dd日 hh:mm:ss}}',
        textAlign: 'center',
        verticalAlign: 'center'
      }
    },
    {// 图片
      type: 'Image',
      x: 10,
      y: 30,
      width: 20,
      height: 20
    }, {// 横实线
      type: 'Image',
      x: 10,
      y: 30,
      width: 20,
      height: 20
    }]
} as Panel;
const template = {
  content: JSON.stringify(templateContent)
} as Template;

</script>

<template>
  
  <!-- 如果不需要设计面板，只是打印，可以不需要引用这个组件 -->
  <design-panel :template="template"
                class="design-panel-custom"
                @back="emit('back')"
                :module="{
    provider: JSON.stringify({width: 100, height: 100, pageUnit: 'mm'}),
    previewData: '[{}]'
  }" />
</template>

<style>
.design-panel-custom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - 20px);
}
</style>
