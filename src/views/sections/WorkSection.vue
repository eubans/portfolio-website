<script setup lang="ts">
import { ref, computed } from 'vue'

import CustomPill from '@/components/CustomPill.vue'
import CustomDropdown from '@/components/CustomDropdown.vue'
import CustomButton from '@/components/CustomButton.vue'
import IconFreelance from '@/components/icons/IconFreelance.vue'
import IconHammerScrew from '@/components/icons/IconHammerScrew.vue'
import IconOpenNew from '@/components/icons/IconOpenNew.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconSearchOff from '@/components/icons/IconSearchOff.vue'
import PlaceholderImage from '@/assets/images/work-placeholder.png'

import type { WorkEntity } from '@/entities'
import { WorksData } from '@/stores/data'

enum FilterItems {
  YEAR = 'year',
  COMPANY = 'company',
  TECHNOLOGY = 'technologies'
}

const works: WorkEntity[] = WorksData
const DEFAULT_WORK_VIEW = 6
const ALL_ITEM = 'all'

const showMore = ref<boolean>(false)
const yearSelected = ref<string>(ALL_ITEM)
const companySelected = ref<string>(ALL_ITEM)
const technologySelected = ref<string>(ALL_ITEM)
const isBuiltFromScratch = ref<boolean>(false)
const isFreelance = ref<boolean>(false)

const sortedWorks = computed(() =>
  structuredClone(works)
    .sort()
    .reverse()
    .sort((a, b) => (a?.featured === b?.featured ? 0 : a?.featured ? -1 : 1))
    .filter((item) => !item.hide)
)

const filteredWorks = computed(() => {
  let items = sortedWorks.value

  if (yearSelected.value !== ALL_ITEM) {
    items = items.filter((item) => item.year === yearSelected.value)
  }

  if (technologySelected.value !== ALL_ITEM) {
    items = items.filter((item) => item.technologies.includes(technologySelected.value))
  }

  if (companySelected.value !== ALL_ITEM) {
    items = items.filter((item) => item.company === companySelected.value)
  }

  if (isBuiltFromScratch.value) {
    items = items.filter((item) => item.builtScratch)
  }

  if (isFreelance.value) {
    items = items.filter((item) => item.freelance)
  }

  return items
})

const yearItems = computed(() => extractItems(FilterItems.YEAR))
const companyItems = computed(() => extractItems(FilterItems.COMPANY))
const technologyItems = computed(() => extractItems(FilterItems.TECHNOLOGY))

const extractItems = (key: FilterItems) => {
  let items = sortedWorks.value.map((item) => {
    return item[key]
  })

  items.unshift(ALL_ITEM)

  if (key === FilterItems.TECHNOLOGY) items = items.flat(1)

  return [...new Set(items)].map((item) => {
    return { title: item, value: item }
  })
}

const handleSelect = (value: string, type: FilterItems) => {
  switch (type) {
    case FilterItems.YEAR:
      yearSelected.value = value
      break
    case FilterItems.COMPANY:
      companySelected.value = value
      break
    case FilterItems.TECHNOLOGY:
      technologySelected.value = value
      break
  }
}

const toggleShowMore = () => (showMore.value = !showMore.value)
const toggleIsBuiltFromScratch = () => (isBuiltFromScratch.value = !isBuiltFromScratch.value)
const toggleIsFreelance = () => (isFreelance.value = !isFreelance.value)

const handleResetFilter = () => {
  yearSelected.value = ALL_ITEM
  companySelected.value = ALL_ITEM
  technologySelected.value = ALL_ITEM
  isBuiltFromScratch.value = false
  isFreelance.value = false

  showMore.value = false
}
</script>

<template>
  <section id="work" class="bg-primary w-full">
    <div class="container mx-auto px-5 md:px-10 lg:px-20 pt-10 lg:pt-20">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="text-tertiary text-4xl pb-3 lg:pb-5 font-comfortta">
          <h2>{{ $t('section.work.title') }}</h2>
        </div>
        <div
          class="flex flex-row flex-wrap md:flex-nowrap text-quaternary gap-4 sm:gap-2 mb-3 mt-0 sm:my-3"
        >
          <h4 class="relative basis-full md:basis-auto">{{ $t('common.filterBy') }}&colon;</h4>
          <a
            class="cursor-pointer flex"
            :class="sortedWorks === filteredWorks && 'text-tertiary'"
            @click="handleResetFilter"
          >
            {{ $t('common.all') }}
          </a>
          <span class="opacity-50">&vert;</span>
          <!-- Year Filter -->
          <CustomDropdown
            :items="yearItems"
            :selected="yearSelected"
            @select="handleSelect($event, FilterItems.YEAR)"
          >
            <span :class="yearSelected !== ALL_ITEM && 'text-tertiary'">
              {{ yearSelected !== ALL_ITEM ? yearSelected : $t('section.work.year') }}
            </span>
          </CustomDropdown>
          <span class="opacity-50">&vert;</span>
          <!-- Technology Filter -->
          <CustomDropdown
            :items="technologyItems"
            :selected="technologySelected"
            @select="handleSelect($event, FilterItems.TECHNOLOGY)"
          >
            <span :class="technologySelected !== ALL_ITEM && 'text-tertiary'">
              {{
                technologySelected !== ALL_ITEM ? technologySelected : $t('section.work.technology')
              }}
            </span>
          </CustomDropdown>
          <span class="opacity-50">&vert;</span>
          <!-- Company Filter -->
          <CustomDropdown
            :items="companyItems"
            :selected="companySelected"
            @select="handleSelect($event, FilterItems.COMPANY)"
          >
            <span :class="companySelected !== ALL_ITEM && 'text-tertiary'">
              {{ companySelected !== ALL_ITEM ? companySelected : $t('section.work.company') }}
            </span>
          </CustomDropdown>
          <span class="opacity-50">&vert;</span>
          <a
            class="cursor-pointer flex hover:text-tertiary/75"
            :class="isBuiltFromScratch && 'text-tertiary'"
            @click="toggleIsBuiltFromScratch"
          >
            <IconHammerScrew class="my-1 mr-1" width="18" height="18" />
            {{ $t('section.work.builtFromScratch') }}
          </a>
          <span class="opacity-50">&vert;</span>
          <a
            class="cursor-pointer flex hover:text-tertiary/75"
            :class="isFreelance && 'text-tertiary'"
            @click="toggleIsFreelance"
          >
            <IconFreelance class="my-1 mr-1" width="18" height="18" />
            {{ $t('section.work.freelance') }}
          </a>
        </div>
      </div>
      <div class="text-quaternary text-xl">
        <div class="grid grid-cols-6 gap-4 w-full">
          <div
            v-for="(work, workIndex) in filteredWorks"
            :key="`work-${work.id}`"
            class="group col-span-6 lg:col-span-2 md:col-span-3 sm:col-span-3 h-96 bg-secondary rounded relative transform transition duration-300 hover:-translate-y-2"
            :class="showMore ? 'block' : workIndex < DEFAULT_WORK_VIEW ? 'block' : 'hidden'"
          >
            <div class="relative h-40 w-full">
              <img
                :src="work.image || PlaceholderImage"
                class="rounded-t h-full w-full object-cover object-top opacity-70 group-hover:opacity-100 transform transition duration-300"
                :alt="work.title"
              />

              <div v-if="work.company" class="absolute bottom-0 p-1">
                <CustomPill
                  class="bg-secondary opacity-70 transform transition duration-300 group-hover:opacity-100 group-hover:bg-tertiary group-hover:text-primary group-hover:font-semibold"
                  size="xs"
                >
                  {{ work.company }}
                </CustomPill>
              </div>

              <div class="absolute bottom-0 right-0 p-1 gap-1">
                <!-- Freelance Icon -->
                <div v-if="work.freelance" class="group/freelance-icon flex justify-end mb-1">
                  <IconFreelance
                    class="bg-secondary cursor-pointer rounded-full p-1 opacity-70 group-hover/freelance-icon:hidden group-hover:opacity-100 group-hover:bg-tertiary group-hover:text-primary group-hover:font-semibold"
                    width="26"
                    height="26"
                  />
                  <CustomPill
                    class="bg-tertiary text-primary hidden mb-0 mr-0 group-hover/freelance-icon:block"
                    size="xs"
                  >
                    {{ $t('section.work.freelance') }}
                  </CustomPill>
                </div>
                <!-- Built from Scratch Icon -->
                <div v-if="work.builtScratch" class="group/scratch-icon flex justify-end">
                  <IconHammerScrew
                    class="bg-secondary cursor-pointer rounded-full p-1 opacity-70 group-hover/scratch-icon:hidden group-hover:opacity-100 group-hover:bg-tertiary group-hover:text-primary group-hover:font-semibold"
                    width="26"
                    height="26"
                  />
                  <CustomPill
                    class="bg-tertiary text-primary hidden mb-0 mr-0 group-hover/scratch-icon:block"
                    size="xs"
                  >
                    {{ $t('section.work.builtFromScratch') }}
                  </CustomPill>
                </div>
              </div>

              <div class="absolute top-0 right-0 p-1 flex gap-1">
                <a v-if="work.github" :href="work.github" target="_blank">
                  <IconGithub
                    class="bg-secondary cursor-pointer rounded-full p-1 opacity-70 group-hover:opacity-100 group-hover:bg-tertiary group-hover:text-primary group-hover:font-semibold"
                    width="26"
                    height="26"
                  />
                </a>
                <a v-if="work.link" :href="work.link" target="_blank">
                  <IconOpenNew
                    class="bg-secondary cursor-pointer rounded-full p-1 opacity-70 group-hover:opacity-100 group-hover:bg-tertiary group-hover:text-primary group-hover:font-semibold"
                    width="26"
                    height="26"
                  />
                </a>
              </div>
            </div>

            <div class="px-2 py-1 h-56">
              <div class="flex justify-between">
                <h3
                  class="text-lg h-8 font-medium group-hover:text-tertiary transform transition duration-300"
                >
                  {{ work.title }}
                  <span class="text-xs text-gray-400 leading-6"> &ndash; {{ work.year }}</span>
                </h3>
              </div>
              <p class="text-sm h-24 line-clamp-3 mb-2">
                {{ work.description }}
              </p>
              <div class="flex flex-wrap">
                <CustomPill
                  v-for="technology in work.technologies"
                  :key="`work-technology-${technology}`"
                  class="bg-primary"
                  size="xs"
                >
                  {{ technology }}
                </CustomPill>
              </div>
            </div>
          </div>
          <div v-if="!filteredWorks.length" class="col-span-6">
            <div class="m-auto w-fit flex flex-col items-center">
              <IconSearchOff width="100" height="100" />
              <span>{{ $t('noResultsFound') }}</span>
              <a
                class="cursor-pointer text-base text-tertiary underline"
                @click="handleResetFilter"
              >
                {{ $t('resetFilter') }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="filteredWorks.length > DEFAULT_WORK_VIEW" class="w-full flex justify-center mt-10">
        <CustomButton @click="toggleShowMore">
          {{ $t('common.showMoreOrLess', { value: showMore ? 'Less' : 'More' }) }}
        </CustomButton>
      </div>
    </div>
  </section>
</template>
