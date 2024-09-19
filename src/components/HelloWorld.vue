<script setup lang="ts">
import {DesignPanel, SaveResult, Template} from 'myprint-design';
import {template} from "../constant/constant.ts";

const emit = defineEmits(['back'])
const provider = '{"pageSize":"A4","width":210,"height":297,"elementList":[{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"购货人","field":"buyName","data":"铁拐李"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"发货单号","field":"orderCode","data":"202408020900001"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"承运人","field":"carrierName","data":"顺丰快递"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"支付方式","field":"payType","data":"支付宝"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"收货人","field":"consignee","data":"铁拐李"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"电话","field":"tel","data":"150****9992"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"邮编","field":"postcode","data":"532039"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"下单时间","field":"orderTime","data":"2024-08-03 12:23:45"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"付款时间","field":"payTime","data":"2024-08-03 13:23:45"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"收货地址","field":"detailAddrss","data":"‌上海市，上海市，青浦区上海市青浦区盈港东路6655号"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"发货时间","field":"deliveryTime","data":"2024-08-04 14:23:45"},{"type":"DataTable","contentType":"Text","width":200,"height":100,"option":{"fontFamily":"heiti","fontSize":13},"label":"商品列表","field":"detailList","columnList":[{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"商品名称","field":"productName","data":"诺基亚N95"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"商品编码","field":"sku","data":"No-N95"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"商品条码","field":"sku69","data":"6901285991219"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"价格","field":"amount","data":"¥3999.00元"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"数量","field":"num","data":"1"},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"小计","field":"totalAmount","data":"¥3999.00元"}]},{"type":"Text","contentType":"Text","width":50,"height":8,"option":{"fontFamily":"heiti","fontSize":13},"label":"打印人","field":"printUserName","data":"铁拐李"}],"customElement":[],"pageUnit":"mm","name":"aaa","dragSnapPanelIs":1,"dragSnapIs":1}'

function handleSaveTemplate(template: Template) {
  // 这里执行保存逻辑
  console.log(template)
  
  return new Promise((resolve, reject) => {
    if (true) {
      resolve({status: 'SUCCESS'} as SaveResult)
    } else {
      reject({status: 'ERROR'} as SaveResult)
    }
  })
}
</script>

<template>
  
  <!-- 如果不需要设计面板，只是打印，可以不需要引用这个组件 -->
  <design-panel :template="template"
                :save-template="handleSaveTemplate"
                class="design-panel-custom"
                @back="emit('back')"
                :module="{
    provider: provider,
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
