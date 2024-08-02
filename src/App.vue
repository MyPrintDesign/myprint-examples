<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";
import {MyPrinter} from "myprint-design";
import {template} from "./constant/constant";

const exampleType = ref('')
const printerList = ref([])
const defaultPrinter = ref({})

/**
 * 预览面板
 */
function handlePreviewPanel() {
  MyPrinter.chromePreview({
    panel: template.content,
    previewDataList: [{}],
    timeout: 10 * 1000
  }).then(res => {
    // 预览页面进行打印时，回调，预览页面的停留时间也会记入超时时间
    if (res.status == 'SUCCESS') {
      console.log('打印成功');
    } else if (res.status == 'ERROR') {
      console.log('打印失败', res.msg);
    } else if (res.status == 'TIMEOUT') {
      console.log('打印超时');
    }
  });
}

/**
 * 浏览器打印
 */
function handleChromePrint() {
  MyPrinter.chromePrinter({
    panel: template.content,
    previewDataList: [{}]
  }).then(res => {
    console.log(res)
    if (res.status == 'SUCCESS') {
      console.log('打印成功');
    } else if (res.status == 'ERROR') {
      console.log('打印失败', res.msg);
    } else if (res.status == 'TIMEOUT') {
      console.log('打印超时');
    }
  });
  
}

/**
 * 客户端打印
 */
function handleClientPrint() {
  MyPrinter.clientPrinter({
    panel: template.content,
    printer: defaultPrinter.value.name,
    previewDataList: [{}]
  }).then(res => {
    console.log(res)
    if (res.status == 'SUCCESS') {
      console.log('打印成功');
    } else if (res.status == 'ERROR') {
      console.log('打印失败', res.msg);
    } else if (res.status == 'TIMEOUT') {
      console.log('打印超时');
    }
  });
  
}

/**
 * 浏览器生成pdf
 */
function handlePdfChrome() {
  MyPrinter.pdfChrome({
    panel: template.content,
    previewDataList: [{}]
  }).then(res => {
    console.log(res)
    download(res.blob)
  });
  
}

/**
 * 客户端生成pdf
 */
function handlePdfClient() {
  MyPrinter.pdfClient({
    panel: template.content,
    previewDataList: [{}]
  }).then(res => {
    console.log(res)
    download(res.blob)
  });
  
}

/**
 * 服务端生成pdf
 */
function handlePdfServer() {
  MyPrinter.pdfServer({
    panel: template.content,
    previewDataList: [{}]
  }).then(res => {
    console.log(res)
    download(res.blob)
  });
}

/**
 * 浏览器生成图片
 */
function handleImgChrome() {
  MyPrinter.imgChrome({
    panel: template.content,
    previewDataList: [{}]
  }).then(res => {
    console.log(res)
    for (let blob of res.blobList) {
      download(blob, 'myprint.png')
    }
  });
  
}

/**
 * 服务端生成图片
 */
function handleImgServer() {
  MyPrinter.imgServer({
    panel: template.content,
    previewDataList: [{}]
  }).then(res => {
    console.log(res)
    download(res.blob, 'myprint.png')
  });
  
}

/**
 * 获取打印机列表
 */
function handleGetPrinterList() {
  printerList.value = MyPrinter.getPrinterList()
  console.log(printerList)
}

/**
 * 获取打印机列表（异步）
 */
function handleAsyncGetPrinterList() {
  MyPrinter.asyncGetPrinterList().then(res => {
    console.log(res)
    printerList.value = res
  }).catch(e => {
    console.log(e)
  });
}

/**
 * 获取默认打印机
 */
function handleDefaultPrinter() {
  defaultPrinter.value = MyPrinter.getDefaultPrinter();
  console.log(defaultPrinter.value)
}

function click(item) {
  if (item.click == null) {
    exampleType.value = item.exampleType
    return
  }
  item.click()
}

MyPrinter.asyncGetPrinterList().then(_res => {
  handleDefaultPrinter()
}).catch(e => {
  console.log(e)
});

const buttonList = ref([
  [{exampleType: 'designPanel', label: '设计面板'}],
  [{exampleType: 'chromePreview', label: '预览页面', click: handlePreviewPanel},
    {exampleType: 'chromePrinter', label: '浏览器打印', click: handleChromePrint},
    {exampleType: 'clientPrinter', label: '客户端打印', click: handleClientPrint}],
  [{exampleType: 'pdfChrome', label: '浏览器下载pdf', click: handlePdfChrome},
    {exampleType: 'pdfClient', label: '客户端下载pdf', click: handlePdfClient},
    {exampleType: 'pdfServer', label: '服务器下载pdf', click: handlePdfServer}],
  [{exampleType: 'imgChrome', label: '浏览器下载图片', click: handleImgChrome},
    {exampleType: 'imgServer', label: '服务器下载图片', click: handleImgServer}],
  [{exampleType: 'asyncGetPrinterList', label: '打印机列表（异步）', click: handleAsyncGetPrinterList},
    {exampleType: 'getPrinterList', label: '打印机列表（同步）', click: handleGetPrinterList},
    {exampleType: 'getPrinterList', label: '默认打印机', click: handleDefaultPrinter}],
])

function download(blob, fileName = 'myprint.pdf') {
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(blobUrl);
}

</script>

<template>
  <div class="examples_wrapper">
    <div class="examples-button_wrapper">
      <div class="examples-button_wrapper_row" v-for="(rowList, rowIndex) in buttonList" :key="rowIndex">
        <button class="examples-button"
                v-for="(item, index) in rowList"
                :key="index"
                @click="click(item)">{{ item.label }}
        </button>
      </div>
    
    </div>
  </div>
  
  <div style="margin-top: 40px; margin-left: 15px">
    客户端连接状态：{{ MyPrinter.clientConnectIs() }}
  </div>
  
  <div style="margin-top: 10px; margin-left: 15px">
    <span>打印机列表：</span>
    <span v-for="(item, index) in printerList" :key="index">{{ item.displayName }}</span>
  </div>
  
  <div style="margin-top: 10px; margin-left: 15px">
    默认打印机：
    <span>{{ defaultPrinter.displayName }}</span>
  </div>
  
  <HelloWorld @back="exampleType = ''" v-if="exampleType == 'designPanel'"/>

</template>

<style scoped>

</style>
