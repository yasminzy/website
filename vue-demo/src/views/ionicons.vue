<template>
  <div>
    <h1>Ionicons Demo</h1>

    <div class="grid">
      <table
        v-for="item in ionicons"
        :key="item.name"
        class="table table-striped"
      >
        <thead>
          <tr>
            <th class="text-align-center">{{ item.name }}</th>
            <th class="text-align-center">Icon</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(subitem, index) in item.icons" :key="index">
            <td>{{ subitem }}</td>
            <td class="text-align-center"><ion-icon :name="subitem" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { appIcons, logos } from "@/assets/ionicons";

export default {
  data() {
    return {
      ionicons: [
        {
          name: "App icons",
          icons: appIcons
        },
        {
          name: "Logos",
          icons: logos
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5rem;
  }
}
</style>
