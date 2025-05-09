import { TemplateCategory } from "./templates";

export const TV_ZONE: TemplateCategory = {
  code: "tv_zone",
  name: "TV Zone",
  image:  '/assets/img/home-v2/blog-02.jpg',
  description: "TV Zone Description",
  planner: {
    company: "demoshop",
    instance: "living",
  },
  templates: [
    {
      id: "sample-1",
      name: 'Мебельная стенка',
      description: `В этом планировщике отображается модель стенки в интерьере комнаты. Пользователь может ознакомиться с проектом, внести изменения по своему вкусу, а также оформить заказ прямо через интерфейс. 
       Функциональность планировщика сведена к основному минимуму — чтобы ничто не отвлекало пользователя от проектирования и восприятия готового решения.`,
      tag: 'Design',
      images: [
        // "C:\GIT\git_demo_shop\demo-shop\src\assets\img\gallery\TV"
        '/assets/images/TV/01.png',
        '/assets/images/TV/2.png',
        '/assets/images/TV/3.png',
      ],
      props: [
     //   { name: "Serie", value: "Classic" },
     //   { name: "Color", value: "Red" }
     
      ],
      integration: {
        info: [
          { title: "Title 1", desc: "Description 1" },
          { title: "Title 2", desc: "Description 2" }
        ],
        settings: {
          company: "demoshop",
          instance: "living",
          start: { guid: "E1Ajmnv7UWsg0wvUvRAQ", clone: true }
        }
      }
    }

  ]
}
