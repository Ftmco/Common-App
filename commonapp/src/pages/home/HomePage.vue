<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <app-sparkline
          title="سفارشات"
          subTitle="سفارشات ثبت شده در یک سال اخیر"
          color="primary"
          :labels="month"
          :value="[10, 20, 50, 10, 80, 40, 30, 10, 50, 44, 60, 70]"
        >
          <template v-slot:bottom>
            <div>
              <v-icon>mdi-clock</v-icon>
              آخرین بروزرسانی 2 دقیقه قبل
            </div>
          </template>
        </app-sparkline>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <app-sparkline
          title="برترین ها"
          subTitle="فروشگاه های برتر بر اساس سفارشات"
          color="primary"
          :labels="bestStores"
          :value="[10, 20, 50, 10, 80, 40]"
        >
          <template v-slot:bottom>
            <div>
              <v-icon>mdi-clock</v-icon>
              آخرین بروزرسانی 2 دقیقه قبل
            </div>
          </template>
        </app-sparkline>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <app-sparkline
          title="فروشگاه ها"
          subTitle="فروشگاه های ثبت شده در یک سال اخیر"
          color="primary"
          :labels="month"
          :value="[10, 20, 50, 10, 80, 40, 30, 10, 50, 44, 60, 70]"
        >
          <template v-slot:bottom>
            <div>
              <v-icon>mdi-clock</v-icon>
              آخرین بروزرسانی 2 دقیقه قبل
            </div>
          </template>
        </app-sparkline>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import AppSparkline from "@/components/core/AppSparkline.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { AppSparkline },
  setup() {
    const month = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const bestStores = [
      "کافه تهران",
      "رستوران بام",
      "کافه بروبچ",
      "قهوه ترک",
      "کافه تنها",
      "رستوران سنتی",
    ];

    return { month, bestStores };
  },
});
</script>