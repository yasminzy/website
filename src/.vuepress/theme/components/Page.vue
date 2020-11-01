<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <PageTitle />
      <Content />
    </div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import PageTitle from "../../components/PageTitle.vue";

export default {
  components: { PageEdit, PageNav, PageTitle },
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
@require "../../../../node_modules/@vuepress/theme-default/styles/wrapper.styl"

.page
  padding-bottom 2rem
  display block
</style>
