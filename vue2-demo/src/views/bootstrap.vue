<template>
  <div>
    <h1>Bootstrap Demo</h1>

    <BootstrapNav />
    <BootstrapAbout />
    <BootstrapContact />
  </div>
</template>

<script>
import BootstrapAbout from "@/components/BootstrapAbout";
import BootstrapContact from "@/components/BootstrapContact";
import BootstrapNav from "@/components/BootstrapNav";

export default {
  components: {
    BootstrapAbout,
    BootstrapContact,
    BootstrapNav
  }
};
</script>
