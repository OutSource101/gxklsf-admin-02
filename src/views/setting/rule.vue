<template>
  <div class="app-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="投注协议" name="0">
          <h4 class="indent2">下注规则</h4>
          <p class="indent">1. 客户一经在本公司开户或投注，即被视为已接受这些规则。</p>
          <p class="indent">2. 如果客户怀疑自己的资料被盗用，应立即通知本公司，并更改个人详细资料，且之前所使用的使用者名称及密码将全部无效。</p>
          <p class="indent">3. 客户有责任确保自己的帐户及登入资料的保密性。在本网站上以个人的使用者名称及密码进行的任何网上投注将被视为有效。</p>
          <p class="indent">4. 任何更改占成数必须在当期开盘前更改。</p>
          <p class="indent">5. 为避免发生争议，下注後请检查“下注成功”及所下注之折扣及赔率。</p>
          <p class="indent">6. 所有投注产品所公布折扣及赔率当出现任何输入错误或非故意人为失误，公司得保留改正错误和 按正确赔率结算投注的权利。</p>
          <p class="indent">7. 任何的投诉必须在开奖之前提出，本站线上投注不会受理任何开奖之后的投诉。</p>
          <p class="indent">8. 开彩後的投注将视为无效，所有赔率及折扣将不时浮动，派彩及计算交收均以确认投注时之赔率及折扣为准。</p>
          <p class="indent">9. 敬告有意与本公司博彩之客户，应注意您所在的国家或居住地可能规定网络博彩不合法，若此情况属实，本公司将不接受任何客户因违反当地博彩或赌博法令所引起之任何责任。</p>
          <p class="indent">10. 本站：有权在任何时候更改或增加这里的任何条款，无须另行通知。</p>

          <h4 class="indent2">致会员：</h4>
          <p class="indent">当您在下注之后，请等待显示“下注成功”信息。</p>
          <p class="indent">为了避免出现争论，您必须在下注之后检查“下注状况”。</p>
          <p class="indent">任何的投诉必须在开彩之前提出，本公司不会受理任何开彩之后的投诉。</p>
          <p class="indent">所有投注项目，公布赔率时出现的任何打字错误或非故意人为失误，本公司保留改正错误和按正确赔率结算投注的权力。</p>
          <p class="indent">开彩後的投注，将被视为「无效」。所有赔率将不时浮动，派彩时的赔率将以确认投注时之赔率为准。</p>
        </el-tab-pane>
        <el-tab-pane label="游戏规则" name="1">
          <p class="indent">
            <strong>以下所有投注皆含本金。</strong></p>
          <p class="indent">该游戏的投注时间、开奖时间和开奖号码与广西快乐十分完全同步，</p>
          <p class="indent">开奖时间：9点至21点30分 开奖频率：每期10分钟销售，5分钟开奖，共15分钟 每日期数：50期。</p>
          <p class="indent">
            <strong>具体游戏规则如下:</strong></p>
          <p class="indent">单双大小：根据平码一 ~ 平码四及特码开出的球号，判断胜负。 </p>
          <p class="indent">大小：开出号码01~10为小，11~20为大，21为和 。 </p>
          <p class="indent">单双：开出号码21为和 。</p>
          <p class="indent">尾数大、小：开奖号码尾数大于或等于5为尾大，小于或等于4为尾小；出21为和 。</p>
          <p class="indent">总和尾数大、小：所有5个开奖号码的数字总和数值的个位数大于或等于5为总尾大，小于或等于4为总尾小 。</p>
          <p class="indent">合数单双：以号特码个位和十位数字之合来判断胜负，如01、12、16为合单；02、11、20为合双；出21为和 。</p>
          <p class="indent">总和大小：数字总和值56-95为总大，数字总和值15到54为总小，数字总和值55为和。</p>
          <p class="indent">总和单双：数字总和值是双数为总和双，数字总和值是单数为总和单。数字总和值55为和。</p>
          <p class="indent">特码：每期开出的最后一号码为『特码』。</p>
          <p class="indent">
            <strong>※	特码大小	※</strong></p>
          <p class="indent2">特小：开出之特码，(01 ~ 10) 小于 或 等于 10。</p>
          <p class="indent2">特大：开出之特码，(11 ~ 20) 大于 或 等于 11。</p>
          <p class="indent2">和局：特码为 21 时 。</p>
          <p class="indent">
            <strong>※	特码单双	※</strong></p>
          <p class="indent2">特双：特码为『双数』，如 08、12、14、20。</p>
          <p class="indent2">特单：特码为『单数』，如 01、11、17、19。</p>
          <p class="indent2">和局：特码为 21 时 。</p>
          <p class="indent">
            <strong>※	特码合数单双	※</strong></p>
          <p class="indent2">合双：指开出特码的个位数加上十位数之和为『双数』，如 02、11、13、15。</p>
          <p class="indent2">合单：指开出特码的个位数加上十位数之和为『单数』，如 01、14、03、07。</p>
          <p class="indent2">和局：特码为 21 时 。</p>
          <p class="indent">
            <strong>※	特码尾数大小	※</strong></p>
          <p class="indent2">特尾大：指开出特码的十位数大于四（即：5、6、7、8、9），如 07、18、15、19。</p>
          <p class="indent2">特尾小：指开出特码的十位数小于五（即：0、1、2、3、4），如 04、11、13、02。</p>
          <p class="indent2">和局：特码为 21 时 。</p>
          <p class="indent2">
            <strong>东南西北：</strong>依特码顺序将21除外的20个号码分为四种类（如下），再以四种类下注。</p>
          <p class="indent2">东：01，02，03，04，05</p>
          <p class="indent2">南：06，07，08，09，10</p>
          <p class="indent2">西：11，12，13，14，15</p>
          <p class="indent2">北：16，17，18，19，20</p>
          <p class="indent2">若当期号码在相应的球位落在下注四种类范围内，视为中奖，出21为和。</p>
          <p class="indent">一中一：投注一个码，如果此码在开奖结果的五个数中存在，为中奖。</p>
          <p class="indent">二中二：投注两个码，如果此码均在开奖结果的五个数中存在，为中奖。</p>
          <p class="indent">三中二：投注三个码，如果有任意两个码在开奖结果的五个数中存在，为中奖。</p>
          <p class="indent2">注：在中奖的情况下，一组中如有三个开奖的号码，派彩都跟中两个号码一样，仅派一次。</p>
          <p class="indent">三中三：投注三个码，且三个码均在开奖结果的五个数中存在，为中奖。</p>
          <p class="indent">四中三：投注四个码，其中有三个码在开奖结果的五个数中存在，为中奖。</p>
          <p class="indent2">注：在中奖的情况下，一组中如有四个开奖的号码，派彩都跟中三个号码一样，仅派一次。</p>
          <p class="indent">五中三：投注五个码，其中有三个码在开奖结果的五个数中存在，为中奖。</p>
          <p class="indent2">注：在中奖的情况下，一组中如有五个都在开奖的号码里，派彩都跟中三个号码一样，仅派一次。</p>
          <p class="indent">
            <strong>色波：</strong>依特码、平码1~4将21个号码分为三种类，分别为红、蓝、绿（如下），再依三种类下注。</p>
          <p class="indent2">红：1、4、7、10、13、16、19</p>
          <p class="indent2">蓝：2、5、8、11、14、17、20</p>
          <p class="indent2">绿：3、6、9、12、15、18、21</p>
          <p class="indent2">若当期号码在相对应的球位落在下注三种类范围内，视为中奖</p>
          <p class="indent"><strong>龙虎</strong>以第一球的中奖号码和第五球的中奖号码做为对奖号码。。</p>
          <p class="indent">龙：开出之号码第一球的中奖号码大于第五球的中奖号码。如 第一球开出14 第五球开出09；第一球开出17 第五球开出</p>
          <p class="indent">08；第一球开出05 第五球开出01...中奖为龙。</p>
          <p class="indent">虎：开出之号码第一球的中奖号码小于第五球的中奖号码。如 第一球开出14 第五球开出16；第一球开出13 第五球开出</p>
          <p class="indent">18；第一球开出05 第五球开出08...中奖为虎。</p>
          <p></p>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '0'
    }
  }
}
</script>

<style scoped>
  .indent{ text-indent:2em}
  .indent2{ text-indent:4em}
</style>
