<template>
  <div>
    <h1>Ionicons Demo</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="(item, index) in titles" :key="index" class="text-center">
            {{ item }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in ionicons" :key="index">
          <td>{{ item }}</td>

          <td class="text-center text-primary">
            <ion-icon :name="item" size="large" />
          </td>

          <td class="text-center text-secondary">
            <ion-icon
              v-if="!item.includes('logo-')"
              :name="`${item}-outline`"
              size="large"
            />
          </td>

          <td class="text-center text-success">
            <ion-icon
              v-if="!item.includes('logo-')"
              :name="`${item}-sharp`"
              size="large"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { icons } from "@/assets/ionicons";

export default {
  data() {
    return {
      titles: ["Name", "Filled", "Outline", "Sharp"],
      ionicons: icons
    };
  }
};
</script>
