import { TemplateCategory } from "./templates";

export const TV_ZONE: TemplateCategory = {
  code: "tv_zone",
  name: "TV Zone",
  image:  '/assets/img/home-v2/blog-02.jpg',
  description: "TV Zone Description",
  planner: {
    company: "presentation",
    instance: "demo",
  },
  templates: [
    {

      id: "sample-1",
      name: 'Sofa & Chair',
      description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur vulputate posuere habitant vel tempor varius.",
      tag: 'Design',
      images: [
        '/assets/img/gallery/portfolio-02/portfolio-01.jpg',
        '/assets/img/gallery/portfolio-02/portfolio-02.jpg',
        '/assets/img/gallery/portfolio-02/portfolio-03.jpg',
      ],
      props: [
        { name: "Serie", value: "Classic" },
        { name: "Color", value: "Red" }
      ],
      integration: {
        info: [
          { title: "Title 1", desc: "Description 1" },
          { title: "Title 2", desc: "Description 2" }
        ],
        settings: {
          company: "presentation",
          instance: "demo-mini",
          start: { guid: "W3bNKUsMe0qH4jrl0LcNUw", clone: true }
        }
      }
    }

  ]
}
