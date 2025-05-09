import { IntegrationData } from "./integration";

export interface ProductData {
  id: number;
  image: string;
  name: string;
  tag: string;
  description: string;
  integration: IntegrationData;
}


export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    image: '/assets/img/gallery/shop-04/shop-01.jpg',
    name: 'Classic Table Lamp1',
    description: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . .",
    tag: "Chair",
    integration: {
      info: [
        { title: "Title 1", desc: "Description 1" },
      ],
      settings: {
        company: "presentation",
        instance: "demo-mini",
        start: { guid: "W3bNKUsMe0qH4jrl0LcNUw", clone: true }
      }
    }
  },
  {
    id: 2,
    image: '/assets/img/gallery/shop-04/shop-02.jpg',
    description: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . .",
    tag: "Chair",
    name: 'Classic Table Lamp2',
    integration: {
      info: [
        { title: "Title 1", desc: "Description 1" },
      ],
      settings: {
        company: "presentation",
        instance: "demo-mini",
        start: { guid: "W3bNKUsMe0qH4jrl0LcNUw", clone: true }
      }
    }
  },
  {
    id: 3,
    image: '/assets/img/gallery/shop-04/shop-03.jpg',
    description: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . .",
    tag: "Chair",
    name: 'Classic Table Lamp3',
    integration: {
      info: [
        { title: "Title 1", desc: "Description 1" },
      ],
      settings: {
        company: "presentation",
        instance: "demo-mini",
        start: { guid: "W3bNKUsMe0qH4jrl0LcNUw", clone: true }
      }
    }
  },
  {
    id: 4,
    image: '/assets/img/gallery/shop-04/shop-04.jpg',
    description: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . .",
    tag: "Chair",
    name: 'Classic Table Lamp',
    integration: {
      info: [
        { title: "Title 1", desc: "Description 1" },
      ],
      settings: {
        company: "presentation",
        instance: "demo-mini",
        start: { guid: "W3bNKUsMe0qH4jrl0LcNUw", clone: true }
      }
    }
  },

]
