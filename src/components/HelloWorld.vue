<script setup lang="ts">
import {DesignPanel} from 'myprint-design';
import {template} from "../constant/constant.ts";

const emit = defineEmits(['back'])

</script>

<template>
  
  <!-- 如果不需要设计面板，只是打印，可以不需要引用这个组件 -->
  <design-panel :template="template"
                class="design-panel-custom"
                @back="emit('back')"
                :module="{
    provider: JSON.stringify({width: 100, height: 100, pageUnit: 'mm'}),
    previewData: '[{}]'
  }"/>
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
