<template>
  <div>
    <section class="h-screen p-5 dark:bg-black">
      <div class="h-full w-full flex relative items-stretch">
        <!-- HERO IMAGE -->
        <img src="/hero.jpg" srcset="/hero_md.jpg 800w, /hero_xl.jpg 1200w" alt="" class="object-cover w-full h-full" />
        <!-- FRONT PAGE -->
        <div class="absolute w-full h-full top-0 p-5">
          <div class="border-[3px] border-white w-full h-full"></div>
        </div>
        <div class="py-3"></div>
        <div class="absolute flex flex-col justify-center items-center w-full h-full">
          <div class="text-white">
            <h2 class="transform -translate-x-10 text-6xl md:text-8xl lg:text-[150px] font-fancy">Samuel</h2>
            <h2 class="text-center text-xl lg:text-6xl font-serif">&</h2>
            <h2 class="pt-5 transform translate-x-10 text-6xl md:text-8xl lg:text-[150px] font-fancy">Hannah</h2>
          </div>
        </div>
        <!-- BACK PAGE -->
        <Transition>
          <div v-if="show_backside" class="absolute w-full h-full bg-black/30 backdrop-blur-md backdrop-filter p-5">
            <div class="w-full h-full border-2 border-white flex flex-col justify-center items-center text-white space-y-4">
              <h3 class="text-5xl xl:text-9xl font-fancy">Save the date!</h3>
              <p class="font-sans text-sm font-extralight">Wir heiraten und wollen mit dir feiern!</p>
                <div class="space-y-4 px-4">
                  <h5 class="text-sm font-bold text-center">Kirchliche Trauung + Hochzeitsfeier</h5>
                </div>
                <div class="space-y-4 px-4">
                  <p class="text-xs text-center">
                    📆 04.02.2023
                    <br />
                    <br />
                    Wir freuen uns, wenn du auf auf unserer Hochzeitsfeier mit dabei bist. <br>
                    Eine kleine Vorinfo: <br>
                    Wir planen, ohne Kinder zu feiern.
                    Alle weiteren Infos folgen dann in der Einladung.<br>
                  </p>
                </div>
              <div class="text-xs font-serif">
                <p class="text-sm text-center">Kalendarformat</p>
                <input
                  type="radio"
                  v-model="picked"
                  value="iCal"
                  id="cal_format_choice_1"
                  class="rounded-full h-3 w-3 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-middle bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                />
                <label for="cal_format_choice_1" class="pr-3">iCal</label>
                <input
                  type="radio"
                  v-model="picked"
                  value="Google"
                  id="cal_format_choice_2"
                  class="rounded-full h-3 w-3 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                />
                <label for="cal_format_choice_2" class="pr-3">Google</label>
                <input
                  type="radio"
                  v-model="picked"
                  value="Outlook"
                  id="cal_format_choice_3"
                  class="rounded-full h-3 w-3 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                />
                <label for="cal_format_choice_3" class="pr-3">Outlook</label>
              </div>
                <div class="px-4 w-full flex justify-center">
                  <button class="py-2 w-28 text-xs border-white border transition ease-in-out hover:scale-110 delay-150 hover:-translate-y-1" @click="get_kirchlich_cal">↑ <br />vormerken</button>
                </div>
            </div>
          </div>
        </Transition>
        <div class="absolute bottom-0 w-full flex justify-center pb-20">
          <button class="p-2 px-5 md:p-3 lg:p-5 border border-white text-white font-serif text-sm" @click="show_backside = !show_backside">{{ show_backside ? "Zur Vorderseite" : "Zur Rückseite" }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {CalendarOptions, /*GoogleCalendar, ICalendar, OutlookCalendar*/} from 'datebook';
import {default as pkg} from 'datebook';
const { GoogleCalendar, ICalendar, OutlookCalendar } = pkg;
let picked = ref("iCal");
const show_backside = ref(false);

const kirchlich_config: CalendarOptions = {
  title: "SAFE THE DATE - Samuel & Hannah",
  location: "Wird noch bekanntgegeben",
  description: "Unsere kirchliche Trauung + Feier mit geladenen Gästen",
  start: new Date("2023-02-04T10:00:00"),
  end: new Date("2023-02-05T03:00:00"),
};
const kirchlich_ical = new ICalendar(kirchlich_config);
const kirchlich_google = new GoogleCalendar(kirchlich_config);
const kirchlich_outlook = new OutlookCalendar(kirchlich_config);

const get_kirchlich_cal = () => {
  let url = "";
  switch (picked.value) {
    case "iCal":
      kirchlich_ical.download();
      break;
    case "Google":
      url = kirchlich_google.render();
      window.open(url, "_blank");
      break;
    case "Outlook":
      url = kirchlich_outlook.render();
      window.open(url, "_blank");
      break;
  }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
