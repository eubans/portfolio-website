<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import moment from 'moment'

import CustomPill from '@/components/CustomPill.vue'
import IconChevronUp from '@/components/icons/IconChevronUp.vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'

import type { ExperienceEntity } from '@/entities'
import { ExperiencesData } from '@/stores/data'

const experiences: ExperienceEntity[] = ExperiencesData
const activeTab = ref<number>()

const tabs = computed(() => structuredClone(experiences).sort().reverse())

const setActiveTab = (id: number) => {
  if (activeTab.value === id) activeTab.value = 0
  else activeTab.value = id
}
const getFomattedFromToDate = (from: string, to: string, format = 'MMM YYYY') =>
  `${moment(from).isValid() ? moment(from).format(format) : from} — ${
    moment(to).isValid() ? moment(to).format(format) : to
  }`

onMounted(() => {
  activeTab.value = tabs.value[0].id
})
</script>

<template>
  <section id="experience" class="bg-primary w-full">
    <div class="container mx-auto px-5 md:px-10 lg:px-20 pt-10 lg:pt-20">
      <div class="text-tertiary text-4xl pb-5 font-comfortta">
        <h2>{{ $t('section.experience.title') }}</h2>
      </div>
      <div class="text-quaternary text-xl">
        <div class="w-full sm:grid sm:grid-cols-6">
          <div class="border-l-2 ml-1 border-tertiary sm:col-span-2">
            <div
              v-for="tab in tabs"
              :key="`experience-button-${tab.id}`"
              class="w-full pt-2 sm:py-5 pl-5 sm:pl-8 transition-all ease-in-out duration-100 border-tertiary cursor-pointer"
              :class="tab.id === activeTab ? 'border-b-2 text-tertiary' : 'border-0'"
              @click="setActiveTab(tab.id)"
            >
              <div class="flex justify-between">
                <div class="flex flex-col text-start">
                  <span>
                    {{ tab.company }}
                  </span>
                  <small
                    class="text-sm italic"
                    :class="tab.id === activeTab ? 'text-gray-300' : 'text-gray-500'"
                  >
                    {{ getFomattedFromToDate(tab.from, tab.to) }}
                  </small>
                </div>
                <div class="sm:hidden">
                  <component
                    :is="tab.id === activeTab ? IconChevronUp : IconChevronDown"
                    height="32"
                    width="32"
                  ></component>
                </div>
              </div>

              <div
                class="text-quaternary py-5 overflow-hidden transition-all duration-300 sm:hidden"
                :class="tab.id === activeTab ? 'opacity-100 h-full' : 'opacity-0 h-0'"
              >
                <div class="px-0 text-left">
                  <div
                    v-for="position in tab.positions.reverse()"
                    :key="`experience-container-position-${position.id}`"
                    class="flex flex-col"
                  >
                    <h3 class="text-base font-semibold sm:font-normal">
                      {{ `${position.title}` }}
                      <span v-if="position?.subtitle" class="font-extralight">
                        {{ ` — ${position?.subtitle}` }}</span
                      >
                    </h3>
                    <small class="text-xs sm:text-sm italic text-gray-500">
                      {{ getFomattedFromToDate(position.from, position.to) }}
                    </small>
                  </div>

                  <div class="text-sm sm:text-base mt-3 mb-5">
                    <p v-html="tab.description"></p>
                  </div>

                  <div class="mb-5">
                    <h4 class="text-sm sm:text-base mb-3 font-semibold">
                      {{ $t('section.experience.programmingLanguages') }}
                    </h4>
                    <div class="flex flex-wrap">
                      <CustomPill
                        v-for="language in tab.languages"
                        :key="`experience-container-language-${language}`"
                        class="bg-secondary text-xs sm:text-sm"
                      >
                        {{ language }}
                      </CustomPill>
                    </div>
                  </div>

                  <div class="mb-5">
                    <h4 class="text-sm sm:text-base mb-3 font-semibold">
                      {{ $t('section.experience.librariesFrameworks') }}
                    </h4>
                    <div class="flex flex-wrap">
                      <CustomPill
                        v-for="library in tab.libraries"
                        :key="`experience-container-library-${library}`"
                        class="bg-secondary text-xs sm:text-sm"
                      >
                        {{ library }}
                      </CustomPill>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-sm sm:text-base mb-3 font-semibold">
                      {{ $t('section.experience.programmingLanguages') }}
                    </h4>
                    <div class="flex flex-wrap">
                      <CustomPill
                        v-for="tools in tab.tools"
                        :key="`experience-container-tools-${tools}`"
                        class="bg-secondary text-xs sm:text-sm"
                      >
                        {{ tools }}
                      </CustomPill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-for="tab in tabs"
            :key="`experience-container-${tab.id}`"
            id="step-1"
            class="col-span-4 overflow-hidden transition-all duration-300 hidden"
            :class="tab.id === activeTab ? 'opacity-100 h-full sm:block' : 'opacity-0 h-0'"
          >
            <div class="px-8">
              <div
                v-for="position in tab.positions.reverse()"
                :key="`experience-container-position-${position.id}`"
                class="flex flex-col md:flex-row"
              >
                <h3 class="mr-2 text-tertiary">
                  {{ `${position.title}` }}
                  <span v-if="position?.subtitle" class="font-extralight">
                    {{ ` — ${position?.subtitle}` }}</span
                  >
                </h3>
                <small class="text-sm italic text-gray-500 leading-8">
                  {{ getFomattedFromToDate(position.from, position.to) }}
                </small>
              </div>

              <div class="text-base mt-3 mb-5">
                <p v-html="tab.description"></p>
              </div>

              <div class="mb-5">
                <h4 class="text-base mb-3 font-semibold">
                  {{ $t('section.experience.programmingLanguages') }}
                </h4>
                <div class="flex flex-wrap">
                  <CustomPill
                    v-for="language in tab.languages"
                    :key="`experience-container-language-${language}`"
                    class="bg-secondary"
                    size="sm"
                  >
                    {{ language }}
                  </CustomPill>
                </div>
              </div>

              <div class="mb-5">
                <h4 class="text-base mb-3 font-semibold">
                  {{ $t('section.experience.librariesFrameworks') }}
                </h4>
                <div class="flex flex-wrap">
                  <CustomPill
                    v-for="library in tab.libraries"
                    :key="`experience-container-library-${library}`"
                    class="bg-secondary"
                    size="sm"
                  >
                    {{ library }}
                  </CustomPill>
                </div>
              </div>

              <div>
                <h4 class="text-base mb-3 font-semibold">
                  {{ $t('section.experience.toolsPlatforms') }}
                </h4>
                <div class="flex flex-wrap">
                  <CustomPill
                    v-for="tools in tab.tools"
                    :key="`experience-container-tools-${tools}`"
                    class="bg-secondary"
                    size="sm"
                  >
                    {{ tools }}
                  </CustomPill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
