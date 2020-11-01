<template>
  <div>
    <h1>Ionicons Demo</h1>

    <b-table-simple striped>
      <b-thead>
        <b-tr>
          <b-th
            v-for="(item, index) in titles"
            :key="index"
            class="text-center"
          >
            {{ item }}
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-for="(item, index) in ionicons" :key="index">
          <b-td>{{ item }}</b-td>

          <b-td class="text-center text-primary">
            <ion-icon :name="item" size="large" />
          </b-td>

          <b-td class="text-center text-secondary">
            <ion-icon
              v-if="!item.includes('logo-')"
              :name="`${item}-outline`"
              size="large"
            />
          </b-td>

          <b-td class="text-center text-success">
            <ion-icon
              v-if="!item.includes('logo-')"
              :name="`${item}-sharp`"
              size="large"
            />
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
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
