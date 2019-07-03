<template>
  <div>
    <h1>Bootstrap Demo</h1>

    <BootstrapNav />
    <BootstrapAbout />
    <BootstrapContact />
  </div>
</template>

<script>
import BootstrapAbout from "@/components/bootstrap-about";
import BootstrapContact from "@/components/bootstrap-contact";
import BootstrapNav from "@/components/bootstrap-nav";

export default {
  components: {
    BootstrapAbout,
    BootstrapContact,
    BootstrapNav
  }
};
</script>
