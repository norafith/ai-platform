<script>
import store from '../store/store'
import background from '../assets/home-background.jpg'
export default {
  data() {
    return {
      store,
      background
    }
  }
}
</script>

<template>
  <main :class="store.mobileView ? 'home mobile' : 'home'">
    <v-parallax class="parallax" :src="background">
      <p class="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
          <p>
            Разбивайте сложные запросы на части с помощью запятых или двойных двоеточий "::". Это
            поможет нейросети лучше понимать ваш запрос и дать более точный ответ.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте правильный формат данных для обучения нейросети. Например, если вы работаете
            с изображениями, убедитесь, что они имеют одинаковый размер и разрешение.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте достаточное количество данных для обучения нейросети. Чем больше данных вы
            используете, тем точнее будет работать нейросеть.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте правильную архитектуру нейросети для вашей задачи. Некоторые задачи лучше
            решаются с помощью сверточных нейронных сетей, а другие - с помощью рекуррентных
            нейронных сетей.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Не забывайте про регуляризацию. Регуляризация помогает избежать переобучения нейросети и
            улучшить ее обобщающую способность.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Используйте оптимизаторы для обучения нейросети. Оптимизаторы помогают нейросети быстрее
            сходиться к оптимальным весам.
          </p>
        </SplideSlide>
        <SplideSlide>
          <p>
            Проверяйте работу нейросети на тестовых данных. Тестовые данные помогают оценить
            точность работы нейросети и выявить возможные проблемы.
          </p>
        </SplideSlide>
      </Splide>
    </v-parallax>
  </main>
</template>

<style scoped>
.home {
  height: 120%;
}
.parallax {
  padding: 25px;
  height: 100%;
}

.splide__slide {
  font-family: 'Roboto';
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.splide__slide > p {
  max-width: 800px;
  text-align: justify;
}

.home.mobile .splide__slide {
  font-size: 1.25rem;
}
</style>
