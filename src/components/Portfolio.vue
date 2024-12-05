<template>
  <div class="container">
    <!-- mobile version -->
    <section v-if="screenWidth <= 1024" class="intro">
      <h1 class="title font-[900] my-[3dvh] text-center" style="font-size: clamp(40px, 10vw, 107px); line-height: 11vw">{{ greetingString }}</h1>
      <div class="flex flex-col px-4">
        <div class="intro-text flex flex-col gap-[2dvh]" style="font-size: clamp(18px, 5vw, 30px)">
          <span v-html="introLines[0]"></span>
          <div class="intro-photo -mx-4">
            <img class="h-[50dvh] w-full object-cover" :src="avatar" />
          </div>
          <span
            >Занимаюсь front-end разработкой приблизительно <b>{{ timeSince }}</b></span
          >
          <span>{{ introLines[1] }}</span>
          <div class="stack flex gap-x-2 gap-y-0 flex-wrap">
            <span>{{ introLines[2] }}</span>
            <IconText icon="ts" text="TS," />
            <IconText icon="vue" text="Vue 3," />
            <IconText icon="pinia" text="Pinia," />
            <IconText icon="nuxt" text="Nuxt 3," />
            <IconText icon="vitest" text="Vitest" />
          </div>
        </div>
      </div>
    </section>

    <!-- display version -->
    <section v-else class="intro">
      <h1 class="title font-[900] my-[6dvh] leading-[100px] px-4" style="font-size: clamp(40px, 10vw, 107px)">{{ greetingString }}</h1>
      <div class="grid-two grid grid-cols-2 gap-4 px-4">
        <div class="intro-text flex flex-col gap-[3dvh]" style="font-size: clamp(18px, 5vw, 30px)">
          <span v-html="introLines[0]"></span>
          <span
            >Занимаюсь front-end разработкой приблизительно <b>{{ timeSince }}</b></span
          >
          <span>{{ introLines[1] }}</span>
          <div class="stack flex gap-x-2 gap-y-0 flex-wrap">
            <span>{{ introLines[2] }}</span>
            <IconText icon="ts" text="TS," />
            <IconText icon="vue" text="Vue 3," />
            <IconText icon="pinia" text="Pinia," />
            <IconText icon="nuxt" text="Nuxt 3," />
            <IconText icon="vitest" text="Vitest" />
          </div>
        </div>
        <div class="intro-photo">
          <img class="h-[50dvh] m-auto object-cover" :src="avatar" />
        </div>
      </div>
    </section>

    <!-- projects -->
    <section class="projects" style="font-size: clamp(16px, 5vw, 22px)">
      <h2 class="text-center font-bold" style="font-size: clamp(34px, 8vw, 70px)">Проекты:</h2>

      <!-- unirender -->
      <Project id="unirender" :color="colors[0]" title="UniRender" :carouselSettings="{ groupsToShow: 1 }">
        <template #desc>
          <span
            >Разработал собственную open-source js-библиотеку UniRender, которая представляет универсальный рендер для любого реактивного front-end: VUE, React Native, React,
            Angular и т.д.</span
          >
          <span>
            Использование этой библиотеки позволяет сократить время и стоимость разработки проекта в 2+ раз за счет переноса всей бизнес-логики на бэкенд (BackEnd-driven
            подход).</span
          >
          <span>С помощью UniRender уже реализовано 4 проекта. Во всех проектах на скриншотах абсолютно идентичный код фронта и используемый API.</span>

          <span
            >Адаптировал под UniRender более 120 VUE-компонентов. Подготовил документацию для быстрой адаптации любых компонентов различных фреймворков. При необходимости можно
            кастомизировать библиотеку UniRender под требования заказчика.</span
          >
        </template>

        <template #details>
          <div class="stack flex flex-col gap-2">
            <span class="font-bold">Стэк:</span>
            <div class="stack-items flex gap-2">
              <IconText icon="ts" text="TS," />
              <IconText icon="vue" text="Vue 3" />
            </div>
          </div>
          <div class="links flex flex-col gap-2">
            <IconLink icon="link" link="https://gitlab.com/unibackend-org" />
            <span class="text-gray-500"
              >разделен на два репозитория: <b>unirender-package</b> - это сам UniRender.<br />
              <b>unirender-app-vue</b> - компоненты на vue</span
            >
          </div>
        </template>

        <template #images>
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/unirender1.webp" />
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/unirender2.webp" />
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/unirender3.webp" />
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/unirender4.webp" />
        </template>

        <template #mobileImages>
          <img class="screenshot mx-4 h-[30dvh] max-h-[400px] object-cover" src="@/assets/screenshots/unirender1.webp" />
          <img class="screenshot mx-4 h-[30dvh] max-h-[400px] object-cover" src="@/assets/screenshots/unirender2.webp" />
          <img class="screenshot mx-4 h-[30dvh] max-h-[400px] object-cover" src="@/assets/screenshots/unirender3.webp" />
          <img class="screenshot mx-4 h-[30dvh] max-h-[400px] object-cover" src="@/assets/screenshots/unirender4.webp" />
        </template>
      </Project>

      <!-- tapsmart -->
      <Project :color="colors[1]" title="TapSmart" subtitle="(Сентябрь 2024 - Декабрь 2024)">
        <template #desc>
          <span
            >Занимался дизайном и всем фронтом для Telegram mini app "TapSmart" (<a href="https://t.me/TapSmartBot/TapSmartGame" target="_blank">@TapSmart</a>). Приложение
            позволяет практиковать иностранные языки в игровой форме (5 разных механик), а также соревноваться в словарные баттлы с друзьями и другими пользователями.</span
          >
          <span>
            Поддержка 30+ лидербордов, есть формы для динамического размещения заданий и призов. Развитая реферальная программа. Генерация Telegram Stories с видеозаписью сыгранных
            баттлов.</span
          >

          <span>Быстрый запуск собственных кастомизированных мини-приложений на базе этой платформы. </span>
        </template>

        <template #details>
          <div class="stack flex flex-col gap-2">
            <span class="font-bold">Стэк:</span>
            <div class="stack-items flex flex-wrap gap-2">
              <IconText icon="vue" text="Vue 3," />
              <IconText icon="pinia" text="Pinia," />
              <IconText text="vue-router," />
              <IconText icon="ts" text="TS," />
              <IconText icon="tailwind" text="Tailwind" />
            </div>
          </div>
          <div class="links flex flex-col gap-2 overflow-hidden">
            <IconLink icon="link" link="https://t.me/TapSmartBot/TapSmartGame" />
            <IconLink icon="gitlab" link="https://gitlab.com/unibackend-org/tiger-mini-app" />
          </div>
        </template>

        <template #images>
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain" src="@/assets/screenshots/tapsmart1.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain" src="@/assets/screenshots/tapsmart2.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain" src="@/assets/screenshots/tapsmart3.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain" src="@/assets/screenshots/tapsmart4.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain" src="@/assets/screenshots/tapsmart5.webp" />
        </template>

        <template #mobileImages>
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tapsmart1.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tapsmart2.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tapsmart3.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tapsmart4.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tapsmart5.webp" />
        </template>
      </Project>

      <!-- consul group -->
      <Project :color="colors[2]" title="Counsul Group" subtitle="(Декабрь 2022 — Август 2024)" :carouselSettings="{ groupsToShow: 1 }">
        <template #desc>
          <span
            >Разработка внутренней информационной системы для работы с 20+ миллионами объектов недвижимости, с быстрой фильтрацией по 100+ параметрам и с визуализацией объектов на
            карте. Гибкая настройка отображения всех таблиц и форм. Конструктор отчетов, с выгрузкой в xlsx. Конструктор форм загрузки данных, с поддержкой множества шаблонов и
            конфигов.</span
          >
          <span class="inline"
            >Система построена при помощи собственного backend-driven фреймворка <img class="inline-svg relative bottom-1 mr-1" src="@/assets/icons/ur.svg" /><a href="#unirender"
              >Unirender</a
            >.</span
          >
        </template>

        <template #details>
          <span>В процессе работы также были созданы:</span>

          <div class="details-projects flex flex-col gap-6">
            <div class="gko">
              <div class="flex flex-wrap gap-x-2">
                <span>Сайт GKO: ( </span>
                <IconText icon="vue" text="Vue 3," />
                <IconText icon="quasar" text="Quasar" />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="link" link="https://gko.consul.group/" />
                <IconLink icon="github" link="https://github.com/limbitskiy/gko-consul-group" />
              </div>
            </div>

            <div class="cgit">
              <span>Consul Group IT: </span>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="link" link="https://cg-it.ru/" />
                <IconLink icon="github" link="https://github.com/limbitskiy/consul-group-it" />
              </div>
            </div>
          </div>
        </template>

        <template #images>
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/consul1.webp" />
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/consul2.webp" />
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/consul3.webp" />
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/consul4.webp" />
          <img class="screenshot mx-4 h-[50dvh] max-h-[400px] object-contain" src="@/assets/screenshots/consul5.webp" />
        </template>

        <template #mobileImages>
          <img class="screenshot mx-4 h-[30dvh] object-cover" src="@/assets/screenshots/consul1.webp" />
          <img class="screenshot mx-4 h-[30dvh] object-cover" src="@/assets/screenshots/consul2.webp" />
          <img class="screenshot mx-4 h-[30dvh] object-cover" src="@/assets/screenshots/consul3.webp" />
          <img class="screenshot mx-4 h-[30dvh] object-cover" src="@/assets/screenshots/consul4.webp" />
          <img class="screenshot mx-4 h-[30dvh] object-cover" src="@/assets/screenshots/consul5.webp" />
        </template>
      </Project>

      <!-- tokling -->
      <Project :color="colors[3]" title="Tokling" subtitle="(Май 2022 — Ноябрь 2022)">
        <template #desc>
          <span
            >Мобильное веб-приложение для изучения 42-х языков в игровой форме с мультиплеером. <br />Разработал дизайн и всю фронтовую часть приложения. <br />Создал около 20
            компонентов для приложения. <br />По большей части пользовался библиотекой PrimeVue, но также создавал и самописные компоненты.</span
          >
        </template>

        <template #details>
          <div class="stack flex flex-col gap-2">
            <span class="font-bold">Стэк:</span>
            <div class="stack-items flex flex-wrap gap-2">
              <IconText icon="vue" text="Vue 3," />
              <a href="#unirender"><IconText icon="unirender" text="Unirender" /></a>
            </div>
          </div>
          <div class="links flex flex-col gap-2 overflow-hidden">
            <IconLink icon="link" link="https://tokling.com/" />
          </div>
        </template>

        <template #images>
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain border border-gray-200 mx-4" src="@/assets/screenshots/tokling1.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain border border-gray-200 mx-4" src="@/assets/screenshots/tokling2.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain border border-gray-200 mx-4" src="@/assets/screenshots/tokling3.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain border border-gray-200 mx-4" src="@/assets/screenshots/tokling4.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain border border-gray-200 mx-4" src="@/assets/screenshots/tokling5.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain mx-4" src="@/assets/screenshots/tokling6.webp" />
          <img class="screenshot h-[40dvh] max-h-[400px] object-contain border border-gray-200 mx-4" src="@/assets/screenshots/tokling7.webp" />
        </template>

        <template #mobileImages>
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tokling1.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tokling2.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tokling3.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tokling4.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tokling5.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tokling6.webp" />
          <img class="screenshot h-[80dvh] object-contain" src="@/assets/screenshots/tokling7.webp" />
        </template>
      </Project>

      <!-- sirius -->
      <Project :color="colors[4]" title="Sirius Dev" subtitle="(Август 2020 — Март 2022)" :carouselSettings="{ groupsToShow: 1 }">
        <template #desc>
          <span>Компания занимается как выпуском собственных проектов, так и аутстаффингом ИТ-разработчиков. В составе этой компании я работал над разными проектами.</span>
        </template>

        <template #details>
          <div class="details-projects flex flex-col gap-6">
            <div class="sirius">
              <div class="flex flex-wrap gap-x-2">
                <span>Sirius dev: ( </span>
                <IconText icon="nuxt" text="Nuxt 3" />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="link" link="https://sirius-dev.com" />
                <IconLink icon="github" link="https://github.com/limbitskiy/sirius-dev" />
              </div>
            </div>

            <div class="zuzu">
              <span>Zuzu master: </span>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="link" link="https://zuzumaster.ru/" />
                <IconLink icon="github" link="https://github.com/limbitskiy/zuzumaster" />
              </div>
            </div>

            <div class="calc">
              <div class="flex flex-wrap gap-x-2">
                <span>Калькулятор материалов: ( </span>
                <IconText icon="ts" text="TS, " />
                <IconText icon="vitest" text="Vitest" />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="link" link="https://calc.zuzumaster.ru/" />
                <IconLink icon="github" link="https://github.com/limbitskiy/zuzu-calc" />
              </div>
            </div>

            <div class="polimochevina">
              <div class="flex flex-wrap gap-x-2">
                <span>“Полимочевина”: ( </span>
                <IconText icon="vue" text="Vue 3" />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="link" link="https://polimochevina.himpost.com" />
                <IconLink icon="github" link="https://github.com/limbitskiy/polimochevina" />
              </div>
            </div>
          </div>
        </template>

        <template #images>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/sirius1.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Sirius Dev</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/sirius2.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">"Полимочевина"</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/sirius3.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Zuzu master</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/sirius4.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Калькулятор стоимости работ</span>
              </div>
            </div>
          </div>
        </template>

        <template #mobileImages>
          <div class="screenshot mx-4 h-[30dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/sirius1.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Sirius Dev</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 h-[30dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/sirius2.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">"Полимочевина"</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 h-[30dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/sirius3.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Zuzu master</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 h-[30dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/sirius4.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Калькулятор стоимости работ</span>
              </div>
            </div>
          </div>
        </template>
      </Project>

      <!-- pet -->
      <Project :color="colors[5]" title="Пет проекты">
        <template #desc>
          <span>Проекты которые я создавал для удовольствия либо отработки какой-то технологии.</span>
        </template>

        <template #details>
          <div class="details-projects flex flex-col gap-6">
            <div class="polimochevina">
              <div class="flex flex-wrap gap-x-2">
                <span>Опрос: ( </span>
                <IconText icon="nuxt" text="Nuxt 3, " />
                <IconText icon="mongo" text="Mongo DB, " />
                <IconText icon="docker" text="Docker, " />
                <IconText icon="pinia" text="Pinia " />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="github" link="https://github.com/limbitskiy/pp-quiz" />
              </div>
            </div>

            <div class="calc">
              <div class="flex flex-wrap gap-x-2">
                <span>Удаленный календарь: ( </span>
                <IconText icon="nuxt" text="Nuxt 3, " />
                <IconText icon="mongo" text="Mongo DB, " />
                <IconText icon="docker" text="Docker, " />
                <IconText icon="pinia" text="Pinia " />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="github" link="https://github.com/limbitskiy/pp-remote-calendar" />
              </div>
            </div>

            <div class="md">
              <div class="flex flex-wrap gap-x-2">
                <span>Massive Dynamic: ( </span>
                <IconText icon="vue" text="Vue 3, " />
                <IconText icon="tailwind" text="Tailwind" />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="github" link="https://github.com/limbitskiy/massive-dynamic" />
              </div>
            </div>

            <div class="zuzu">
              <div class="flex flex-wrap gap-x-2">
                <span>Todo app: ( </span>
                <IconText icon="nuxt" text="Nuxt 3, " />
                <IconText icon="mongo" text="Mongo DB, " />
                <IconText icon="docker" text="Docker, " />
                <IconText icon="pinia" text="Pinia " />
                <span> )</span>
              </div>
              <div class="links flex flex-col gap-2 overflow-hidden">
                <IconLink icon="github" link="https://github.com/limbitskiy/pp-todo-app" />
              </div>
            </div>
          </div>
        </template>

        <template #images>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/pet1.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Опрос</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/pet2.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Календарь</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/pet3.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Massive Dynamic</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain h-[50dvh] max-h-[400px]" src="@/assets/screenshots/pet4.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Todo app</span>
              </div>
            </div>
          </div>
        </template>

        <template #mobileImages>
          <div class="screenshot mx-4 h-[80dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/pet1.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Опрос</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 h-[80dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/pet2.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Календарь</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 h-[80dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/pet3.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Massive Dynamic</span>
              </div>
            </div>
          </div>
          <div class="screenshot mx-4 h-[80dvh] grid place-items-center">
            <div class="image flex flex-col items-center">
              <img class="object-contain" src="@/assets/screenshots/pet4.webp" />
              <div class="caption bg-[#333] w-full flex items-center justify-center">
                <span class="text-sm text-white">Todo app</span>
              </div>
            </div>
          </div>
        </template>
      </Project>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import IconLink from "@/components/UI/IconLink.vue";

// assets
import avatar from "@/assets/avatar.webp";

// composables
import { useWindowSize } from "@vueuse/core";
import { useTimeSince } from "@/composables/useTimeSince";
import { useDynamicGreeting } from "@/composables/useDynamicGreeting";

gsap.registerPlugin(ScrollTrigger);

const { width: screenWidth } = useWindowSize();
const { timeSince } = useTimeSince();
const { greetingString } = useDynamicGreeting();

const introLines = ["Меня зовут <b>Гараган Евгений</b>, мне <b>38 лет</b> и я <b>front-end разработчик</b>.", "Являюсь middle-разработчиком. Увлекаюсь дизайном.", "Краткий стэк:"];

const colors = ["#88ce71", "#3cbe84", "#00ab97", "#0096a3", "#007fa6", "#00679d"];

let gsapCtx;

onMounted(() => {
  const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

onUnmounted(() => {
  gsapCtx?.revert();
});
</script>
