<template>
  <view class="content">
    <!-- <div>hi</div> -->
    <!-- <p>{{ $t("message.hello", { msg: "hello" }) }}</p> -->
    <!-- <p v-html="$t('message.hello2')"></p> -->
    <view class="title">{{ $t("schema.name") }}</view>
    <uni-card :title="title" extra="额外信息">
      <text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
    </uni-card>
    <button @tap="changeLanguage">change language</button>
    <!-- <uni-badge text="uni - badge" type="default" size="normal" /> -->
  </view>
</template>

<script>
// const messages = {
//   en: {
//     message: {
//       hello: "{msg} world",
//       hello2: "hello <br> world",
//     },
//   },
// };

export default {
  data() {
    return {
      title: "Hello",
      // locals: "en",
      // messages,
    };
  },
  onLoad() {},
  methods: {
    changeLanguage() {
      // en - zh-Hans - ja 循环切换
      const locales = ["en", "zh-Hans", "ja"];
      const index = locales.findIndex((item) => item === this.$i18n.locale);
      const nextIndex = (index + 1) % locales.length;
      // locale.value = locales[nextIndex];
      this.$i18n.locale = locales[nextIndex];
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
